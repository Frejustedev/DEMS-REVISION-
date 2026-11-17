"""Rapproche chaque question DEMS/pré-DEMS SANS corrigé d'un plan type (sujets) ou d'une réponse (questions ouvertes) des cours du site.
Usage : python3 -I outils/rapprocher_plans.py site/fichiers/donnees.js site/fichiers/banque.js
Ajoute window.BANQUE_LIENS à banque.js (seuil de similarité 0,30 : on préfère ne rien afficher qu'un faux rapprochement)."""
import sys
DONNEES, BANQUE = sys.argv[1], sys.argv[2]
import json,re,math,unicodedata,collections,subprocess
s=open(DONNEES,encoding='utf-8').read()
js=json.loads(subprocess.run(['node','-e','const s=require("fs").readFileSync(process.argv[1],"utf8");const D=new Function("return "+s.slice("window.DEMS=".length).replace(/;\\s*$/,""))();process.stdout.write(JSON.stringify({s:D.sujets,o:D.ouvertes,f:Object.fromEntries(Object.entries(D.fiches).map(([k,v])=>[k,v.theme]))}))',DONNEES],capture_output=True,text=True).stdout)
SUJ=js['s'];OUV=js['o'];FT=js['f']
def norm(t): return unicodedata.normalize('NFD',t.lower()).encode('ascii','ignore').decode()
STOP=set("de la le les des du un une et en a au aux pour par sur dans que qui quel quelle quels quelles est sont ou ce cette ces son sa ses il elle ils d l s n qu citez decrire expliquez donnez indications indication place role quelles principe".split())
def toks(t):
    out=[]
    for w in re.findall(r'[a-z0-9]{3,}',norm(t)):
        if w in STOP: continue
        out.append(w[:6])
    return out
def plan_text(x): return x['sujet']+' '+' '.join(p['partie']+' '+' '.join(p['points']) for p in x['plan'])
docs=[]
for x in SUJ: docs.append(('s',x['id'],x['f'],toks(x['sujet']*3+' '+plan_text(x))))
for x in OUV:
    if x['type'] in('moyenne','longue'): docs.append(('o',x['id'],x['f'],toks(x['q']*3+' '+x['reponse'])))
df=collections.Counter()
for d in docs: df.update(set(d[3]))
N=len(docs)
idf=lambda w: math.log((N+1)/(df.get(w,0)+1))+1
def vec(ts):
    c=collections.Counter(ts); v={w:(1+math.log(n))*idf(w) for w,n in c.items()}
    nr=math.sqrt(sum(a*a for a in v.values())) or 1
    return {w:a/nr for w,a in v.items()}
dv=[(d[0],d[1],d[2],vec(d[3])) for d in docs]
b=open(BANQUE,encoding='utf-8').read().split('window.BANQUE_LIENS')[0]; B=json.loads(b[len('window.BANQUE='):].rstrip().rstrip(';'))
res={}
for q in B:
    if q['l'] not in 'DP' or q['a']: continue
    qv=vec(toks(q['q']*2+' '+q['c']*3))
    sc=[]
    for k,i,f,v in dv:
        s=sum(a*v.get(w,0) for w,a in qv.items())
        sc.append((s,k,i))
    sc.sort(reverse=True)
    sj=[(round(s,2),i) for s,k,i in sc if k=='s'][:1]
    ov=[(round(s,2),i) for s,k,i in sc if k=='o'][:2]
    r={}
    if sj and sj[0][0]>=0.30: r['s']=sj[0][1]
    o=[i for s,i in ov if s>=0.30]
    if o: r['o']=o
    if r: res[q['i']]=r
print(len(res),'questions reliées sur',sum(1 for q in B if q['l'] in 'DP' and not q['a']))
open(BANQUE,'w',encoding='utf-8').write(b+'window.BANQUE_LIENS='+json.dumps(res,separators=(',',':'))+';\n')
