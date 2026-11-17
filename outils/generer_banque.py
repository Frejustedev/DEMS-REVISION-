"""Régénère site/fichiers/banque.js depuis la banque de questions (dépôt quizz-nucleatlas).
Usage : python3 -I outils/generer_banque.py CHEMIN/quizz-nucleatlas/src/data/questions.json site/fichiers/banque.js
Niveaux : D = DEMS, P = Pré-DEMS, C = contrôle pré-thèse, R = résidanat, A = autres. Trié DEMS puis pré-DEMS, années décroissantes."""
import json, re, sys
src, dst = sys.argv[1], sys.argv[2]
Q = json.load(open(src, encoding='utf-8'))
lv = {'DEMS': 'D', 'Pre-DEMS': 'P', 'CPT (controle pre-these)': 'C', 'Residanat (fin de cursus)': 'R'}
rank = {'D': 0, 'P': 1, 'C': 2, 'R': 3, 'A': 4}
out = []
for q in Q:
    l = lv.get(q['level'], 'A')
    ans = q['answer'] if q['answer'] and q['answer'] != 'None' else ''
    out.append({'i': q['id'], 't': q['theme'], 'l': l, 'e': q['examName'], 'y': q['year'] or '', 'c': q['chapter'], 'q': q['text'].strip(), 'a': ans.strip(), 'd': 1 if q['possibleDuplicate'] else 0, 'm': 1 if q['isImageQuestion'] else 0})
out.sort(key=lambda x: (rank[x['l']], -int(re.match(r'\d{4}', x['y']).group()) if re.match(r'\d{4}', x['y']) else 0, x['i']))
open(dst, 'w', encoding='utf-8').write('window.BANQUE=' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n')
print(len(out), 'questions écrites. Lancer ensuite outils/rapprocher_plans.py (ajoute BANQUE_LIENS).')
