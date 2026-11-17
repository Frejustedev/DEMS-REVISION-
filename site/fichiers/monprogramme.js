/* Mon programme : 17 au 25 novembre 2026 (privé). Modifiable à la main : un créneau = un objet.
   f : fiches du site (id) · th : thèmes du site (id) · pdf : PDF du 14 novembre [libellé, chemin] · lk : autres liens [libellé, #/…] */
(function () {
  var P = 'fichiers/pdf/mes-cours/';
  var CAR = P + 'cardiologie/', ONC = P + 'oncologie/', THY = P + 'thyroide/', RP = P + 'radioprotection/', REIN = P + 'rein/', QS = P + 'questions/';
  var ORAL = 'Dernière heure : oral avec Claude';
  window.MONPROG = {
    debut: '2026-11-17',
    jours: [
      { d: '2026-11-17', lab: 'Mardi 17 novembre', segs: [
        { id: 's01', bt: ['Parathyroide (PTH)', 'Surrenale', 'Prostate'], h: '18 h – 00 h', t: 'Parathyroïdes, place de la MN dans le cancer de la prostate et du sein', dom: 'e', oral: true,
          ch: ['18 h – 19 h 30 : parathyroïdes (fiche « Indications » PTH, hyperparathyroïdie, cas pratique de 2021)', '20 h – 21 h 30 : place de la médecine nucléaire dans le cancer de la prostate (traceurs, TEP PSMA, os, thérapie)', '21 h 30 – 22 h 30 : place de la médecine nucléaire dans le cancer du sein (pauses de 19 h 30 à 20 h et de 22 h 30 à 23 h)', '23 h – 00 h : oral avec Claude'],
          q: ['Scintigraphie parathyroïdienne : mécanisme du sestamibi marqué au technétium 99m, double phase, soustraction, TEMP/TDM (tomographie par émission monophotonique couplée à la tomodensitométrie), indications', 'Imagerie de l’hyperparathyroïdie primaire puis secondaire : faux négatifs et faux positifs', 'Cancer de la prostate : place de la scintigraphie osseuse, de la TEP à la fluorocholine et de la TEP PSMA (antigène membranaire spécifique de la prostate), lutétium 177-PSMA, radium 223', 'Cancer du sein : bilan d’extension (quand ?), ganglion sentinelle, TEP au FDG (fluorodésoxyglucose), scintigraphie osseuse'],
          f: ['indications-06', 'pth-01', 'prostate-01', 'prostate-02', 'indications-09', 'sein-01'], th: ['ctc'], pdf: [['O4 · Prostate', ONC + 'O4_Prostate.pdf']] }
      ] },
      { d: '2026-11-18', lab: 'Mercredi 18 novembre', segs: [
        { id: 's02', bt: ['Coeur/Cardiologie'], h: '8 h – 12 h', t: 'Cardiologie 1 : traceurs, stress, protocoles', dom: 'k',
          ch: ['C1 : sestamibi, tétrofosmine, thallium 201', 'Effort, agents pharmacologiques, contre-indications, caféine'],
          q: ['Décrire une TSM (tomoscintigraphie de perfusion myocardique) d’effort : protocole, critères d’effort suffisant, critères d’arrêt', 'Quel stress choisir en cas de bloc de branche gauche, et pourquoi ?', 'Comparer les traceurs : caractéristiques physiques, fixation, avantages'],
          f: ['coeur-04', 'coeur-02', 'coeur-03', 'coeur-05'], th: ['coeur'], pdf: [['C1 · Traceurs, stress, protocoles', CAR + 'C1_TSM_traceurs_stress_protocoles.pdf']] },
        { id: 's03', bt: ['Coeur/Cardiologie'], h: '14 h – 18 h', t: 'Cardiologie 2 : indications, SCA, viabilité', dom: 'k',
          ch: ['Fiche « Indications » cardiologie', 'C2 : indications et valeur de la TSM', 'C3 : SCA (syndrome coronarien aigu), infarctus, viabilité'],
          q: ['Indications de la TSM dans la maladie coronaire stable (tombé en 2022 et 2024)', 'Valeur diagnostique et pronostique d’une TSM normale', 'Viabilité myocardique : critères et place dans la dysfonction ventriculaire gauche'],
          f: ['indications-03', 'coeur-01', 'coeur-16', 'coeur-08'], th: [], pdf: [['C2 · Indications et valeur', CAR + 'C2_TSM_indications_valeur.pdf'], ['C3 · SCA, infarctus, viabilité', CAR + 'C3_SCA_infarctus_viabilite.pdf']] },
        { id: 's04', bt: ['Coeur/Cardiologie'], h: '20 h – 00 h', t: 'Cardiologie 3 : interprétation d’images', dom: 'k', oral: true,
          ch: ['C4 : cartes polaires effort/repos, artéfacts, synchronisation de phase', 'Cas pratiques 2022 et 2023', ORAL],
          q: ['Lire une carte polaire : ischémie, infarctus, fibrose ou artéfact (atténuation, bloc de branche)', 'FEVG (fraction d’éjection du ventricule gauche), volumes et dyssynchronie en gated-SPECT', 'Traiter le cas du patient de 58 ans de 2023, de A à Z'],
          f: ['coeur-07', 'coeur-17'], th: [], pdf: [['C4 · Interpréter une TSM', CAR + 'C4_Interpreter_une_TSM.pdf'], ['Cardiologie · toutes les fiches', CAR + '00_Cardiologie_toutes_les_fiches.pdf']], lk: [['Cas cliniques du site', '#/cas']] }
      ] },
      { d: '2026-11-19', lab: 'Jeudi 19 novembre', segs: [
        { id: 's05', bt: ['TNE (tumeurs neuroendocrines)', 'Octreoscan'], h: '8 h – 12 h', t: 'TNE et analogues de la somatostatine', dom: 'o',
          ch: ['O2 : TNE (tumeurs neuroendocrines) et analogues de la somatostatine', 'Tombé en 2022, 2023 et 2025'],
          q: ['Mécanisme de fixation, fixation physiologique et caractéristiques physiques des analogues (pentétréotide, 68Ga-DOTATATE/DOTATOC)', 'Indications de la TEP (tomographie par émission de positons) aux analogues de la somatostatine', 'Pièges et faux positifs'],
          f: ['tne-01', 'tne-05', 'indications-07'], th: [], pdf: [['O2 · TNE et analogues de la somatostatine', ONC + 'O2_TNE_analogues_somatostatine.pdf']] },
        { id: 's06', bt: ['MIBG', 'RIV (Radio-Immuno-Vectorisation)', 'Neuroblastome'], h: '14 h – 18 h', t: 'MIBG, radiothérapie interne, théranostique', dom: 'o',
          ch: ['MIBG (méta-iodobenzylguanidine)', 'O3 : RIV (radiothérapie interne vectorisée) et théranostique'],
          q: ['MIBG : principe, indications (phéochromocytome, neuroblastome), préparation, médicaments interférents', 'Lutétium 177-DOTATATE : critères d’éligibilité, protocole, effets secondaires', 'Définir la théranostique et donner trois exemples'],
          f: ['tne-03', 'tne-04', 'tne-06', 'riv-01', 'riv-02', 'indications-14'], th: [], pdf: [['O3 · RIV et théranostique', ONC + 'O3_RIV_et_theranostique.pdf']] },
        { id: 's07', bt: ['Thyroide', 'Therapie (Iode131 etc)'], h: '20 h – 00 h', t: 'CPT 1 : prise en charge initiale et irathérapie', dom: 't', oral: true,
          ch: ['T1 : diagnostic, risque, prise en charge initiale', 'T2 : irathérapie', ORAL],
          q: ['Prise en charge du CPT (carcinome papillaire de la thyroïde) à faible risque : place de l’iode 131 et dé-escalade', 'Préparation du patient à l’irathérapie : TSH, régime, isolement, radioprotection', 'Totalisation isotopique : indications, activité, scintigraphie post-thérapeutique'],
          f: ['cdt-01', 'cdt-02', 'cdt-13', 'indications-05'], th: [], pdf: [['T1 · CDT : diagnostic, risque, PEC, suivi', THY + 'T1_CDT_diagnostic_risque_PEC_suivi.pdf'], ['T2 · Irathérapie du CDT', THY + 'T2_Irathe_rapie_du_CDT.pdf']] }
      ] },
      { d: '2026-11-20', lab: 'Vendredi 20 novembre', segs: [
        { id: 's08', bt: ['Poumon/Pneumologie'], h: '8 h – 12 h', t: 'Poumon', dom: 'p',
          ch: ['Fiche « Indications » pneumologie'],
          q: ['Scintigraphie V/Q (ventilation-perfusion) dans l’embolie pulmonaire : traceurs, technique, interprétation, place face à l’angioscanner', 'Embolie pulmonaire chez la femme enceinte', 'Scintigraphie de perfusion préopératoire avant pneumonectomie'],
          f: ['indications-04', 'poumon-01', 'poumon-02', 'poumon-03'], th: [], pdf: [] },
        { id: 's09', bt: ['Digestif/Hepato-biliaire'], h: '14 h – 18 h', t: 'Digestif', dom: 'p',
          ch: ['Fiche « Indications » digestif, salivaire, splénique'],
          q: ['Vidange gastrique : protocole, valeurs normales, indications', 'Hémorragie digestive et diverticule de Meckel', 'Cholescintigraphie : indications et interprétation'],
          f: ['indications-10', 'dig-01', 'dig-02', 'dig-03', 'dig-04', 'slv-01', 'spln-01'], th: [], pdf: [] },
        { id: 's10', bt: ['Cerveau/Neurologie'], h: '20 h – 00 h', t: 'Cerveau', dom: 'p', oral: true,
          ch: ['Fiche « Indications » neurologie et LCR', ORAL],
          q: ['DaTscan : principe, indications, interprétation', 'TEMP et TEP cérébrales dans les démences et l’épilepsie', 'Scintigraphie du LCR (liquide cérébrospinal) : indications'],
          f: ['indications-11', 'cer-01', 'cer-02', 'cer-03', 'lcr-01'], th: [], pdf: [] }
      ] },
      { d: '2026-11-21', lab: 'Samedi 21 novembre', segs: [
        { id: 's11', bt: ['Prostate'], h: '8 h – 12 h', t: 'Prostate et PSMA', dom: 'o',
          ch: ['O4 : prostate et PSMA (antigène membranaire spécifique de la prostate)', 'Fiche « Indications » sein et prostate'],
          q: ['Traceurs (68Ga-PSMA, 18F-PSMA, choline) et indications', 'Scintigraphie osseuse dans la prostate : le phénomène de flare', 'Traitement : lutétium 177-PSMA et radium 223 (avec la thérapie osseuse)'],
          f: ['prostate-01', 'prostate-02', 'indications-09'], th: ['sein'], pdf: [['O4 · Prostate', ONC + 'O4_Prostate.pdf']] },
        { id: 's12', bt: ['TEP', 'Oncologie'], h: '14 h – 18 h', t: 'TEP au FDG en oncologie', dom: 'o',
          ch: ['O5 : TEP au FDG (fluorodésoxyglucose)', 'Fiche « Indications » TEP au FDG en oncologie'],
          q: ['Caractéristiques physiques, principe de détection et préparation du patient', 'SUV (valeur de fixation normalisée), critères de réponse, pièges', 'Indications en oncologie, par cancer'],
          f: ['tep-01', 'tep-02', 'tep-03', 'indications-08'], th: [], pdf: [['O5 · TEP au FDG', ONC + 'O5_TEP_FDG.pdf']] },
        { id: 's13', bt: ['Oncologie', 'Radioprotection'], h: '20 h – 00 h', t: 'Place en oncologie, ganglion sentinelle, radioprotection', dom: 'o', oral: true,
          ch: ['O1 : place de la médecine nucléaire en oncologie', 'Fiche « Indications » lymphoscintigraphie et ganglion sentinelle', 'R1 : radioprotection', ORAL],
          q: ['Place de la médecine nucléaire en oncologie : diagnostic, extension, réponse, thérapie', 'Technique du ganglion sentinelle (sein, mélanome)', 'Principes de la radioprotection : justification, optimisation, limitation, limites de dose, femme enceinte, patient traité à l’iode 131'],
          f: ['indications-12', 'gg-01', 'lympho-01', 'communs-05'], th: [], pdf: [['O1 · Place de la MN en oncologie', ONC + 'O1_Place_de_la_MN_en_oncologie.pdf'], ['R1 · Principes de la radioprotection', RP + 'R1_Principes_de_la_radioprotection.pdf']] }
      ] },
      { d: '2026-11-22', lab: 'Dimanche 22 novembre', segs: [
        { id: 's14', bt: ['Thyroide', 'Therapie (Iode131 etc)'], h: '8 h – 12 h', t: 'CPT 2 : suivi, forme métastatique et réfractaire', dom: 't',
          ch: ['T3 : suivi du CDT (cancer différencié de la thyroïde), forme métastatique, TEP au FDG, réfractarité à l’iode'],
          q: ['Suivi du CDT : thyroglobuline, anticorps, scintigraphie diagnostique', 'Définition de la réfractarité à l’iode, et conduite à tenir', 'TEP au FDG et traitements systémiques dans le CDT métastatique'],
          f: ['cdt-03', 'cdt-04', 'cdt-05', 'cdt-06', 'cdt-10', 'cdt-12'], th: [], pdf: [['T3 · CDT métastatique et réfractaire', THY + 'T3_CDT_metastatique_refractaire.pdf']] },
        { id: 's15', bt: ['Thyroide'], h: '14 h – 18 h', t: 'Hyperthyroïdies', dom: 't',
          ch: ['T4 : hyperthyroïdies', 'Nodule thyroïdien'],
          q: ['Maladie de Basedow, nodule toxique, goitre multinodulaire toxique : scintigraphie et traitement', 'Iode 131 : activité calculée ou fixe, contre-indications, précautions', 'Nodule thyroïdien : place de la scintigraphie'],
          f: ['cdt-14', 'indications-05'], th: [], pdf: [['T4 · Hyperthyroïdies', THY + 'T4_Hyperthyroidies.pdf'], ['Thyroïde · toutes les fiches', THY + '00_Thyroide_toutes_les_fiches.pdf']] },
        { id: 's16', bt: ['Infectieux', 'Pediatrie'], h: '20 h – 00 h', t: 'Infection, inflammation, pédiatrie', dom: 'x', oral: true,
          ch: ['Fiche « Indications » infection, inflammation et vue d’ensemble pédiatrique', ORAL],
          q: ['Scintigraphie aux leucocytes marqués : marquage, indications, pièges', 'TEP au FDG dans la fièvre d’origine inconnue', 'Ostéomyélite de l’enfant'],
          f: ['indications-13', 'inf-01', 'inf-02', 'ped-01', 'os-13', 'os-14'], th: [], pdf: [] }
      ] },
      { d: '2026-11-23', lab: 'Lundi 23 novembre', segs: [
        { id: 's17', bt: ['Os'], h: '8 h – 12 h', t: 'Os 1 : radiopharmaceutiques et technique', dom: 'a',
          ch: ['Radiopharmaceutiques osseux et méthodologie'],
          q: ['Radiopharmaceutiques osseux (99mTc-HMDP, 18F-NaF) : mécanisme, fixation physiologique', 'Méthodologie : trois temps, TEMP/TDM', 'Pièges : superscan, extravasation, contamination urinaire'],
          f: ['os-01', 'os-02', 'indications-02'], th: [], pdf: [] },
        { id: 's18', bt: ['Os'], h: '14 h – 18 h', t: 'Os 2 : indications', dom: 'a',
          ch: ['O6 : scintigraphie osseuse en oncologie', 'Indications bénignes'],
          q: ['Scintigraphie osseuse en oncologie (tombé en 2025)', 'Indications bénignes : ostéomyélite, algodystrophie, fracture de stress, prothèse', 'Lire les images : métastases, Paget, ostéome ostéoïde'],
          f: ['os-03', 'os-04', 'os-05', 'os-06', 'os-09', 'os-12', 'os-13'], th: [], pdf: [['O6 · Scintigraphie osseuse en oncologie', ONC + 'O6_Scintigraphie_osseuse_en_oncologie.pdf'], ['Oncologie · toutes les fiches', ONC + '00_Oncologie_toutes_les_fiches.pdf']] },
        { id: 's19', bt: ['Physique et instrumentation'], h: '20 h – 00 h', t: 'Physique, contrôle de qualité, RIA', dom: 'x', oral: true,
          ch: ['Contrôle de qualité de la gamma-caméra et de la TEP', 'RIA (dosages radio-immunologiques)', ORAL],
          q: ['Contrôle de qualité de la gamma-caméra et de la TEP', 'Contrôle de qualité des RIA', 'Principe de détection en TEP (tombé en 2024)'],
          f: ['gamma-01', 'gamma-02', 'gamma-03', 'tep-01', 'ria-01', 'communs-06'], th: [], pdf: [] }
      ] },
      { d: '2026-11-24', lab: 'Mardi 24 novembre', segs: [
        { id: 's20', bt: ['Uro-nephrologie/Rein'], h: '8 h – 12 h', t: 'Rein 1 : traceurs et scintigraphie dynamique', dom: 'r',
          ch: ['Fiches 1 à 4 du rein : traceurs, scintigraphie dynamique avec furosémide'],
          q: ['Radiopharmaceutiques rénaux (MAG3, DTPA, DMSA) : mécanisme de fixation', 'Scintigraphie dynamique avec furosémide : méthodologie, paramètres, contrôle qualité', 'Fonction rénale relative et drainage'],
          f: ['rein-01', 'rein-04', 'indications-01'], th: [], pdf: [['1 · Radiopharmaceutiques, traceurs', REIN + '01_Radiopharmaceutiques_traceurs.pdf'], ['2 · SRD, méthodologie, furosémide', REIN + '02_SRD_methodologie_furosemide.pdf'], ['3 · Interprétation du rénogramme', REIN + '03_Interpretation_renogramme.pdf'], ['4 · Fonction rénale et drainage (enfant)', REIN + '04_Fonction_renale_et_drainage_enfant.pdf']] },
        { id: 's21', bt: ['Uro-nephrologie/Rein'], h: '14 h – 18 h', t: 'Rein 2 : DMSA, infection urinaire, hydronéphrose', dom: 'r',
          ch: ['Fiches 5, 6, 7 et 10 du rein'],
          q: ['Explorations scintigraphiques dans l’infection urinaire de l’enfant', 'Hydronéphrose néonatale : stratégie, place de la scintigraphie, suivi après pyéloplastie', 'DMSA : indications et lecture'],
          f: ['rein-02', 'rein-03'], th: [], pdf: [['5 · Hydronéphrose néonatale', REIN + '05_Hydronephrose_neonatale.pdf'], ['6 · Infection urinaire de l’enfant', REIN + '06_Infection_urinaire_enfant.pdf'], ['7 · DMSA, scintigraphie statique', REIN + '07_DMSA_scintigraphie_statique.pdf'], ['10 · Cas clinique : JPU post-opératoire', REIN + '10_Cas_clinique_JPU_post_operatoire.pdf']] },
        { id: 's22', bt: ['Uro-nephrologie/Rein'], h: '20 h – 00 h', t: 'Rein 3 : HTA, DFG, cystographie, greffe', dom: 'r', oral: true,
          ch: ['Fiches 8, 9, 11 et 12 du rein', 'Aide-mémoire des chiffres', ORAL],
          q: ['HTA (hypertension artérielle) rénovasculaire : test au captopril', 'DFG (débit de filtration glomérulaire) isotopique et cystographie isotopique', 'Transplantation rénale'],
          f: ['rein-07', 'rein-05', 'rein-06'], th: [], pdf: [['8 · HTA rénovasculaire, captopril', REIN + '08_HTA_renovasculaire_captopril.pdf'], ['9 · Cystographie isotopique', REIN + '09_Cystographie_isotopique.pdf'], ['11 · DFG isotopique', REIN + '11_DFG_isotopique.pdf'], ['12 · Transplantation rénale', REIN + '12_Transplantation_renale.pdf'], ['13 · Reflux vésico-urétéral', REIN + '13_Reflux_vesico_ureteral_RVU.pdf'], ['14 · Aide-mémoire des chiffres', REIN + '14_Aide_memoire_chiffres.pdf']], lk: [['Chiffres à retenir (site)', '#/chiffres']] }
      ] },
      { d: '2026-11-25', lab: 'Mercredi 25 novembre', segs: [
        { id: 's23', h: '8 h – 12 h', t: 'Examen blanc', dom: 'x',
          ch: ['3 questions longues de 40 à 45 minutes', '1 cas pratique sur images'],
          q: ['Chronométrez-vous comme au DEMS, sans fiches', 'Sujets tirés de vos vraies questions passées'],
          f: [], th: [], pdf: [['Toutes les questions par thème', QS + '00_Toutes_les_questions_par_theme.pdf']], lk: [['Sujets rédactionnels', '#/sujets'], ['Examen blanc du site', '#/examen']] },
        { id: 's24', h: '14 h – 18 h', t: 'Correction de l’examen blanc', dom: 'x',
          ch: ['Correction avec Claude, question par question', 'Liste des points faibles'],
          q: ['Refaire de mémoire les plans de réponse ratés'],
          f: [], th: [], pdf: [], lk: [['Carnet d’erreurs', '#/erreurs']] },
        { id: 's25', h: '20 h – 00 h', t: 'Bilan et plan de la suite', dom: 'x',
          ch: ['Nouveau planning établi d’après vos résultats'],
          q: ['Quels sont mes trois thèmes les plus faibles ?'],
          f: [], th: [], pdf: [], lk: [['Statistiques', '#/stats']] }
      ] }
    ],
    /* PDF du 14 novembre, classés pour la page « Mes cours » */
    pdfs: [
      { n: 'Cardiologie', l: [['Toutes les fiches de cardiologie', CAR + '00_Cardiologie_toutes_les_fiches.pdf'], ['C1 · Traceurs, stress, protocoles', CAR + 'C1_TSM_traceurs_stress_protocoles.pdf'], ['C2 · Indications et valeur de la TSM', CAR + 'C2_TSM_indications_valeur.pdf'], ['C3 · SCA, infarctus, viabilité', CAR + 'C3_SCA_infarctus_viabilite.pdf'], ['C4 · Interpréter une TSM', CAR + 'C4_Interpreter_une_TSM.pdf']] },
      { n: 'Oncologie', l: [['Toutes les fiches d’oncologie', ONC + '00_Oncologie_toutes_les_fiches.pdf'], ['O1 · Place de la médecine nucléaire en oncologie', ONC + 'O1_Place_de_la_MN_en_oncologie.pdf'], ['O2 · TNE et analogues de la somatostatine', ONC + 'O2_TNE_analogues_somatostatine.pdf'], ['O3 · RIV et théranostique', ONC + 'O3_RIV_et_theranostique.pdf'], ['O4 · Prostate', ONC + 'O4_Prostate.pdf'], ['O5 · TEP au FDG', ONC + 'O5_TEP_FDG.pdf'], ['O6 · Scintigraphie osseuse en oncologie', ONC + 'O6_Scintigraphie_osseuse_en_oncologie.pdf']] },
      { n: 'Thyroïde', l: [['Toutes les fiches de thyroïde', THY + '00_Thyroide_toutes_les_fiches.pdf'], ['T1 · CDT : diagnostic, risque, prise en charge, suivi', THY + 'T1_CDT_diagnostic_risque_PEC_suivi.pdf'], ['T2 · Irathérapie du CDT', THY + 'T2_Irathe_rapie_du_CDT.pdf'], ['T3 · CDT métastatique et réfractaire', THY + 'T3_CDT_metastatique_refractaire.pdf'], ['T4 · Hyperthyroïdies', THY + 'T4_Hyperthyroidies.pdf']] },
      { n: 'Radioprotection', l: [['R1 · Principes de la radioprotection', RP + 'R1_Principes_de_la_radioprotection.pdf']] },
      { n: 'Rein (fiches à bûcher)', l: [['Fiches à bûcher du cours Khelifa', QS + '06_Fiches_a_bucher_cours_Khelifa.pdf'], ['1 · Radiopharmaceutiques, traceurs', REIN + '01_Radiopharmaceutiques_traceurs.pdf'], ['2 · SRD, méthodologie, furosémide', REIN + '02_SRD_methodologie_furosemide.pdf'], ['3 · Interprétation du rénogramme', REIN + '03_Interpretation_renogramme.pdf'], ['4 · Fonction rénale et drainage (enfant)', REIN + '04_Fonction_renale_et_drainage_enfant.pdf'], ['5 · Hydronéphrose néonatale', REIN + '05_Hydronephrose_neonatale.pdf'], ['6 · Infection urinaire de l’enfant', REIN + '06_Infection_urinaire_enfant.pdf'], ['7 · DMSA, scintigraphie statique', REIN + '07_DMSA_scintigraphie_statique.pdf'], ['8 · HTA rénovasculaire, captopril', REIN + '08_HTA_renovasculaire_captopril.pdf'], ['9 · Cystographie isotopique', REIN + '09_Cystographie_isotopique.pdf'], ['10 · Cas clinique : JPU post-opératoire', REIN + '10_Cas_clinique_JPU_post_operatoire.pdf'], ['11 · DFG isotopique', REIN + '11_DFG_isotopique.pdf'], ['12 · Transplantation rénale', REIN + '12_Transplantation_renale.pdf'], ['13 · Reflux vésico-urétéral', REIN + '13_Reflux_vesico_ureteral_RVU.pdf'], ['14 · Aide-mémoire des chiffres', REIN + '14_Aide_memoire_chiffres.pdf']] },
      { n: 'Questions d’examen', l: [['Toutes les questions du rein, par thème', QS + '00_Toutes_les_questions_par_theme.pdf']] }
    ]
  };
})();
