#!/usr/bin/env bash
# À lancer SUR LE VPS, en root (ou avec sudo), depuis le dossier qui contient ce script,
# nginx-revisions-dems.conf et revisions-dems-site.tar.gz.
#   sudo bash installer-sur-le-vps.sh MON_IDENTIFIANT
# Le mot de passe est demandé à l'écran : il n'est écrit nulle part ailleurs.
set -euo pipefail
USER_NAME="${1:?Donnez un identifiant : sudo bash installer-sur-le-vps.sh monidentifiant}"
DOMAIN="revisions-dems.nucleatlas.org"
ROOT="/var/www/revisions-dems"
HERE="$(cd "$(dirname "$0")" && pwd)"

command -v nginx >/dev/null || { echo "nginx n'est pas installé."; exit 1; }
if ! command -v htpasswd >/dev/null; then apt-get update -y && apt-get install -y apache2-utils; fi

mkdir -p "$ROOT"
tar -xzf "$HERE/revisions-dems-site.tar.gz" -C "$ROOT"
chown -R www-data:www-data "$ROOT"
find "$ROOT" -type d -exec chmod 755 {} \; ; find "$ROOT" -type f -exec chmod 644 {} \;

htpasswd -c /etc/nginx/.htpasswd-revisions-dems "$USER_NAME"
chmod 640 /etc/nginx/.htpasswd-revisions-dems; chgrp www-data /etc/nginx/.htpasswd-revisions-dems

cp "$HERE/nginx-revisions-dems.conf" "/etc/nginx/sites-available/$DOMAIN"
ln -sf "/etc/nginx/sites-available/$DOMAIN" "/etc/nginx/sites-enabled/$DOMAIN"
nginx -t
systemctl reload nginx

echo
echo "Site en ligne (HTTP) : http://$DOMAIN  -- le DNS doit pointer sur ce VPS (enregistrement A)."
if command -v certbot >/dev/null; then
  echo "HTTPS : certbot --nginx -d $DOMAIN"
  certbot --nginx -d "$DOMAIN" --redirect || echo "certbot a échoué : vérifiez que le DNS pointe bien ici, puis relancez la commande ci-dessus."
else
  echo "certbot n'est pas installé : apt-get install -y certbot python3-certbot-nginx && certbot --nginx -d $DOMAIN --redirect"
fi
