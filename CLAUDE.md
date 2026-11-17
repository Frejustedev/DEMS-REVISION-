# Révision DEMS, version privée (dems.nucleatlas.org)

Site statique de révision pour le DEMS de médecine nucléaire (examen du 6 décembre 2026), propriétaire : Dr Frejuste Agboton.
Copie PRIVÉE du site public « Révision DEMS » (dépôt Frejustedev/revision-dems, qui ne doit pas être modifié pour ça), avec en plus :
« Mon programme », « Questions de DEMS » (banque d'examens passés) et « Mes cours » (PDF du 14 novembre).

## Règles
- Ce site est PRIVÉ : ne jamais le publier sur Vercel ni sur un domaine public, ne jamais retirer le mot de passe nginx, ne pas le référencer. `noindex` est déjà en place (robots.txt, balises, en-têtes).
- Ne jamais écrire de mot de passe, clé SSH ou jeton dans ce dépôt, dans un script ou dans un message de commit. Le mot de passe nginx est choisi par l'utilisateur et saisi à l'écran par `htpasswd`.
- Écrire en français, vouvoyer l'utilisateur, développer les sigles à leur première apparition.
- Les corrigés de la banque viennent des vrais documents d'examen : ne pas les réécrire ni les « améliorer » sans le dire. Les plans types rapprochés automatiquement sont étiquetés « à vérifier » : garder cette étiquette.

## Structure
- `site/` : tout ce qui est publié (racine web). `index.html`, `sw.js` (hors ligne), `manifest.webmanifest`, `fichiers/`.
  - `fichiers/app.js` : l'application (un seul fichier, JavaScript sans framework). Les pages privées (dont `pageSections` et `pageSection`) sont regroupées dans le bloc « PRIVÉ : Mon programme, Mes cours, Banque DEMS » juste avant le routeur : `pageMonProgramme`, `pageMesCours`, `pageBanque`, routes `monprogramme`, `mescours`, `banque`.
  - `fichiers/monprogramme.js` : le programme (`window.MONPROG`) : 25 créneaux du 17 au 25 novembre 2026, avec chapitres, questions à savoir, fiches du site (`f`), thèmes (`th`), PDF, liens (`lk`) et thèmes de la banque (`bt`). C'est le fichier à modifier pour changer le programme.
  - `fichiers/sections.js` : « Mes sections » (`window.MONSEC`), une page par thème complet ouverte par `#/section/<id>` (`pth`, `cardio`, `thyroide`, `pdc`, `os`, `rein`, `tne`), sommaire `#/sections`. Chaque section : déroulé de la journée par étapes (cases à cocher enregistrées dans `mem.mp` sous `<section>:e1…` et `<section>:c1…`), critères « j'ai fini quand je sais… », fiches, PDF, questions de DEMS du thème. C'est le fichier à modifier pour changer le contenu d'une section. Les créneaux de `monprogramme.js` renvoient vers leur section (`lk`).
  - `fichiers/banque.js` : 1 158 questions d'examens (`window.BANQUE`) et rapprochements avec les cours (`window.BANQUE_LIENS`). Généré, ne pas l'éditer à la main.
  - `fichiers/donnees.js` : fiches, QCM, questions ouvertes, sujets, cas (14 Mo, hérité du site public, ne pas modifier).
  - `fichiers/pdf/mes-cours/` : PDF du 14 novembre (cardiologie, oncologie, thyroïde, radioprotection, rein, questions).
- `outils/` : scripts de régénération de `banque.js` (voir plus bas).
- `deploy/` : configuration nginx et script d'installation du VPS.

## Faire une modification
1. Modifier les fichiers dans `site/`.
2. Vérifier la syntaxe : `node --check site/fichiers/app.js`.
3. Tester en local : `cd site && python3 -m http.server 8765`, ouvrir http://localhost:8765 (le site demande de créer un profil local : nom + mot de passe de 4 caractères, stocké dans le navigateur).
4. IMPORTANT : changer `VERSION` en tête de `site/sw.js` (par ex. `prive-20261118a`) à chaque modification d'un fichier de `fichiers/`, sinon les navigateurs gardent l'ancienne version hors ligne. Si un nouveau fichier JS ou CSS est créé, l'ajouter à `CORE_FILES` dans `sw.js` et à `index.html`.
5. Les cases « Fait » du programme et les boutons « Je sais / À revoir » sont enregistrés dans le navigateur (`mem.mp`, `mem.bq`, par profil). Les identifiants de créneaux (`s01` à `s25`) et de questions (`Q0001`…) ne doivent pas changer, sinon la progression déjà cochée est perdue.

## Régénérer la banque de questions
Source : dépôt Frejustedev/quizz-nucleatlas (`src/data/questions.json`).
```
python3 -I outils/generer_banque.py CHEMIN/quizz-nucleatlas/src/data/questions.json site/fichiers/banque.js
python3 -I outils/rapprocher_plans.py site/fichiers/donnees.js site/fichiers/banque.js
```
Niveaux : D = DEMS, P = pré-DEMS (affichés par défaut), C = contrôle pré-thèse, R = résidanat, A = autres.
Les questions sans corrigé reçoivent un plan type des cours seulement si la similarité dépasse 0,30.

## État constaté le 17 novembre 2026 à 18 h 28
- Le site est DÉJÀ en ligne sur https://dems.nucleatlas.org, servi par **Caddy** derrière Cloudflare (pas par nginx : `deploy/nginx-*.conf` et `installer-sur-le-vps.sh` ne s'appliquent pas tels quels ; garder seulement l'idée).
- La version en ligne est ANCIENNE (`VERSION` du service worker `prive-20261117b`) : il manque `fichiers/pdf/mes-cours/cours-originaux/PTH_parathyroides.pdf` et le programme actualisé. À redéployer depuis `site/`.
- **Aucun mot de passe : le site est ouvert à toute personne qui connaît l'adresse** (seul `noindex` est actif). À corriger en priorité : ajouter un bloc `basic_auth` dans le bloc du site du Caddyfile (identifiant choisi par l'utilisateur ; générer le hachage sur le VPS avec `caddy hash-password`, ne jamais écrire le mot de passe dans un fichier ni dans la conversation), puis `caddy validate` et `systemctl reload caddy`. Vérifier ensuite qu'une requête sans identifiants renvoie 401.
- Pour mettre à jour : `tar -czf` de `site/`, copie sur le VPS, extraction dans le dossier racine du site Caddy (le repérer dans le Caddyfile, ne toucher à aucun autre site).

## Mettre en ligne sur le VPS (méthode nginx d'origine, à adapter à Caddy)
Adresse : https://dems.nucleatlas.org, nginx avec authentification basique (`auth_basic`), HTTPS par certbot. Le DNS (enregistrement A vers l'IP du VPS) doit exister.
Première installation, sur le VPS (voir `deploy/LISEZ-MOI.txt`) :
1. Fabriquer l'archive : `tar -czf revisions-dems-site.tar.gz -C site .`
2. Copier sur le VPS : `scp revisions-dems-site.tar.gz deploy/nginx-revisions-dems.conf deploy/installer-sur-le-vps.sh UTILISATEUR@IP_DU_VPS:/tmp/rdems/`
3. Sur le VPS : `cd /tmp/rdems && sudo bash installer-sur-le-vps.sh IDENTIFIANT` (le mot de passe est demandé à l'écran).
Mise à jour : refaire l'étape 1 et 2 (archive seule), puis sur le VPS `sudo tar -xzf /tmp/rdems/revisions-dems-site.tar.gz -C /var/www/revisions-dems`. Après la mise à jour, ouvrir le site deux fois (le service worker installe la nouvelle version au second chargement).
L'adresse du VPS et l'utilisateur SSH ne sont pas dans ce dépôt : demander à l'utilisateur (les notes de migration sont dans `Bureau\kit-migration-vps` et `Bureau\MIGRATION VPS OVH`, à lire seulement s'il l'autorise). Ne pas modifier les autres sites hébergés sur ce VPS : ne toucher que `/etc/nginx/sites-available/dems.nucleatlas.org`, son lien dans `sites-enabled`, `/etc/nginx/.htpasswd-revisions-dems` et `/var/www/revisions-dems`. Toujours `nginx -t` avant `systemctl reload nginx`.

## Vérifications avant de livrer
- Les trois pages s'ouvrent sans erreur dans la console : `#/monprogramme`, `#/banque`, `#/mescours`.
- Tous les liens de fiches, thèmes et PDF du programme existent (script de contrôle : lire `fichiers/monprogramme.js` et vérifier chaque `f`, `th`, `pdf` contre `donnees.js` et le dossier `pdf/`).
- Une case « Fait » reste cochée après rechargement de la page.
