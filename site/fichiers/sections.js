/* Mes sections de révision (privé) : une page par thème complet, ouverte par #/section/<id>.
   Une section = le déroulé d'une journée (étapes à cocher), les critères « j'ai fini quand je sais… »,
   les cours (fiches, PDF), les sujets rédactionnels liés et les questions de DEMS du thème.
   étape : { b: titre de bloc, h: horaire, t: titre, d: consigne, f: fiches du site, pdf: [[libellé, chemin]],
             bq: [thème(s) de la banque séparés par |, mot à chercher], lk: [[libellé, #/…]] }
   Les cases cochées sont enregistrées dans mem.mp sous la clé « <section>:<étape> ». */
(function () {
  var P = 'fichiers/pdf/mes-cours/';
  var CAR = P + 'cardiologie/', ONC = P + 'oncologie/', THY = P + 'thyroide/', REIN = P + 'rein/', QS = P + 'questions/', ORIG = P + 'cours-originaux/';
  var CO = 'Coeur/Cardiologie', TH = 'Thyroide|Therapie (Iode131 etc)', PO = 'Poumon/Pneumologie', DI = 'Digestif/Hepato-biliaire', CE = 'Cerveau/Neurologie';
  var RE = 'Uro-nephrologie/Rein|Pediatrie';
  var ORAL = { h: '23 h – 00 h', t: 'Oral avec Claude', d: 'Jury : une question à la fois, vous répondez à voix haute, puis correction.' };
  function oral() { return { h: ORAL.h, t: ORAL.t, d: ORAL.d }; }

  window.MONSEC = {
    ordre: ['pth', 'cardio', 'thyroide', 'pdc', 'os', 'rein', 'tne'],

    pth: {
      titre: 'Parathyroïdes (PTH)', jour: 'Mardi 17 novembre', slots: ['s01'], th: ['pth'], bt: 'Parathyroide (PTH)',
      etapes: [
        { b: 'Soirée (18 h – 00 h)', h: '18 h – 19 h 30', t: 'Le cours et le tableau des indications', d: 'Lire le cours « L’hyperparathyroïdie » : physiologie, formes primaire, secondaire et tertiaire, traitement. Puis apprendre le tableau « situation clinique → examen de choix » de la fiche « Indications ».', f: ['pth-01', 'indications-06'], pdf: [['Cours d’origine : parathyroïdes (PTH)', ORIG + 'PTH_parathyroides.pdf']] },
        { h: '19 h 30 – 20 h', t: 'Pause', d: 'Vraie pause : manger, marcher, pas d’écran de cours.' },
        { h: '20 h – 21 h', t: 'Traceurs, acquisition et pièges', d: 'Sestamibi marqué au technétium 99m, double phase, soustraction (iode 123 ou pertechnétate), TEMP/TDM (tomographie par émission monophotonique couplée à la tomodensitométrie), TEP à la choline. Puis artefacts, faux positifs et faux négatifs.', f: ['traceurs-10', 'acquisition-07', 'communs-10'] },
        { h: '21 h – 22 h', t: 'Le cas de 2021 et la chirurgie', d: 'Écrire de A à Z le cas clinique de 2021 (patiente de 66 ans), puis persistance ou récidive après chirurgie et chirurgie radioguidée.', lk: [['Cas de 2021 (DEMS)', '#/banque?t=Parathyroide%20(PTH)&n=D&q=66%20ans']] },
        { h: '22 h – 23 h', t: 'Question longue en 40 minutes, sans fiches', d: 'Au choix : 2022 (méthodologie, intérêts, récidives) ou 2010 (intérêt et place de l’exploration isotopique). Chronométrer, puis corriger avec les fiches.', lk: [['Question de 2022', '#/banque?t=Parathyroide%20(PTH)&n=D&q=recidives'], ['Question de 2010', '#/banque?t=Parathyroide%20(PTH)&n=D&q=place%20actuelle']] },
        oral()
      ],
      criteres: [
        'Expliquer la scintigraphie au sestamibi (99mTc) : mécanisme, double phase, soustraction, TEMP/TDM, indications',
        'Citer les faux négatifs et les faux positifs, et leurs causes',
        'Choisir l’examen dans l’hyperparathyroïdie primaire, secondaire, tertiaire, persistante et récidivante',
        'Rédiger le cas de 2021, de A à Z',
        'Traiter une question longue de DEMS en 40 minutes, avec un plan'
      ],
      fiches: ['pth-01', 'indications-06', 'traceurs-10', 'acquisition-07', 'communs-10'],
      pdf: [['Cours d’origine : parathyroïdes (PTH)', ORIG + 'PTH_parathyroides.pdf']]
    },

    cardio: {
      titre: 'Cardiologie nucléaire (myocarde)', jour: 'Mercredi 18 novembre', slots: ['s02', 's03', 's04'], th: ['coeur'], bt: CO,
      etapes: [
        { b: 'Matin (8 h – 12 h) : traceurs et stress', h: '8 h – 9 h 30', t: 'Traceurs et circulation coronaire', d: 'Sestamibi, tétrofosmine, thallium 201 : mécanisme de fixation, cinétique, dosimétrie, avantages et limites. Circulation et réserve coronaires.', f: ['traceurs-06', 'coeur-04', 'coeur-14'], pdf: [['C1 · Traceurs, stress, protocoles', CAR + 'C1_TSM_traceurs_stress_protocoles.pdf']], bq: [CO, 'coronaire'] },
        { h: '9 h 30 – 11 h', t: 'Techniques de stress', d: 'Effort, stress pharmacologique (vasodilatateurs, dobutamine), critères d’effort suffisant, critères d’arrêt, contre-indications, caféine, protocoles. Sujet tombé en six sessions de DEMS.', f: ['coeur-02', 'coeur-06', 'acquisition-03'], bq: [CO, 'stress'] },
        { h: '11 h – 12 h', t: 'Entraînement : trois questions sur le stress', d: 'Trois questions de DEMS sur les techniques de stress, 10 minutes chacune, sans fiches, puis correction.', bq: [CO, 'stress'] },
        { b: 'Après-midi (14 h – 18 h) : indications et viabilité', h: '14 h – 15 h 30', t: 'Indications et valeur de la TSM', d: 'TSM (tomoscintigraphie myocardique de perfusion) : probabilité pré-test (ESC 2019 et 2024), valeur diagnostique et pronostique, indications dans la maladie coronaire stable.', f: ['indications-03', 'coeur-01', 'coeur-16'], pdf: [['C2 · Indications et valeur', CAR + 'C2_TSM_indications_valeur.pdf']], bq: [CO, 'indication'] },
        { h: '15 h 30 – 17 h', t: 'SCA, infarctus et viabilité myocardique', d: 'Syndrome coronarien aigu, infarctus, viabilité : critères et place dans la dysfonction ventriculaire gauche. Sujet tombé en 2008, 2009 et 2013.', f: ['coeur-08'], pdf: [['C3 · SCA, infarctus, viabilité', CAR + 'C3_SCA_infarctus_viabilite.pdf']], bq: [CO, 'viabilit'] },
        { h: '17 h – 18 h', t: 'Gated SPECT et ventriculographie isotopique', d: 'Synchronisation à l’ECG, FEVG (fraction d’éjection du ventricule gauche), volumes, dyssynchronie ; angioscintigraphie (MUGA).', f: ['coeur-07', 'coeur-15', 'coeur-03', 'coeur-05'], bq: [CO, 'gated'] },
        { b: 'Soir (20 h – 00 h) : images et oral', h: '20 h – 21 h 30', t: 'Interpréter une TSM', d: 'Cartes polaires effort/repos, défaut réversible ou fixé, artéfacts (atténuation, bloc de branche), pièges. Traiter le cas du patient de 58 ans de 2023, de A à Z.', f: ['coeur-17', 'communs-10', 'communs-07'], pdf: [['C4 · Interpréter une TSM', CAR + 'C4_Interpreter_une_TSM.pdf']], lk: [['Cas cliniques du site', '#/cas']] },
        { h: '21 h 30 – 22 h', t: 'Cardiopathies particulières', d: 'Amylose, sarcoïdose, MIBG (méta-iodobenzylguanidine) cardiaque, TEP en cardiologie, infections cardiovasculaires : l’essentiel seulement.', f: ['coeur-09', 'coeur-10', 'coeur-11', 'coeur-12', 'coeur-13', 'coeur-18', 'coeur-19'] },
        { h: '22 h – 23 h', t: 'Question longue en 40 minutes, sans fiches', d: 'Au choix : la scintigraphie myocardique de perfusion (2010, 2013, 2014), la viabilité myocardique (2008, 2009, 2013) ou les techniques de stress. Chronométrer, puis corriger.', bq: [CO, 'perfusion'] },
        oral()
      ],
      criteres: [
        'Décrire une TSM d’effort de A à Z : préparation, stress, injection, acquisition, critères d’effort suffisant et d’arrêt',
        'Choisir le stress selon le patient : bloc de branche gauche, asthme, caféine, incapacité à l’effort',
        'Comparer sestamibi, tétrofosmine et thallium 201 : mécanisme, avantages, limites',
        'Lire une carte polaire : ischémie, infarctus, fibrose ou artéfact ; apport du gated SPECT',
        'Expliquer l’étude de la viabilité myocardique et ses indications',
        'Traiter une question longue de DEMS en 40 minutes, avec un plan'
      ],
      fiches: ['traceurs-06', 'acquisition-03', 'indications-03', 'coeur-01', 'coeur-02', 'coeur-03', 'coeur-04', 'coeur-05', 'coeur-06', 'coeur-07', 'coeur-08', 'coeur-14', 'coeur-15', 'coeur-16', 'coeur-17', 'coeur-09', 'coeur-10', 'coeur-11', 'coeur-12', 'coeur-13', 'coeur-18', 'coeur-19'],
      pdf: [['C1 · Traceurs, stress, protocoles', CAR + 'C1_TSM_traceurs_stress_protocoles.pdf'], ['C2 · Indications et valeur', CAR + 'C2_TSM_indications_valeur.pdf'], ['C3 · SCA, infarctus, viabilité', CAR + 'C3_SCA_infarctus_viabilite.pdf'], ['C4 · Interpréter une TSM', CAR + 'C4_Interpreter_une_TSM.pdf'], ['Cardiologie · toutes les fiches', CAR + '00_Cardiologie_toutes_les_fiches.pdf']]
    },

    thyroide: {
      titre: 'Thyroïde complète', jour: 'Jeudi 19 novembre', slots: ['s05', 's06', 's07'], th: ['cdt'], bt: TH,
      etapes: [
        { b: 'Matin (8 h – 12 h) : scintigraphie, nodules, diagnostic du cancer', h: '8 h – 9 h 30', t: 'Physiologie, traceurs et scintigraphie thyroïdienne', d: 'Physiologie thyroïdienne ; iode 123 et pertechnétate de technétium 99m : principe, protocoles, préparation du patient, médicaments à arrêter ; indications de la scintigraphie.', f: ['traceurs-02', 'acquisition-06', 'indications-05', 'communs-03'], bq: [TH, 'scintigraphie thyroid'] },
        { h: '9 h 30 – 10 h 30', t: 'Nodules thyroïdiens, enfant et hypothyroïdie congénitale', d: 'Place de la scintigraphie dans le nodule ; scintigraphie thyroïdienne de l’enfant (tombée en 2023 et 2024) ; hypothyroïdie congénitale.', f: ['indications-05', 'ped-02'], bq: [TH, 'nodule'] },
        { h: '10 h 30 – 12 h', t: 'Le cancer différencié (CDT) : diagnostic et risque', d: 'Cancer différencié de la thyroïde : diagnostic, classification, stratification du risque.', f: ['cdt-01'], pdf: [['T1 · CDT : diagnostic, risque, PEC, suivi', THY + 'T1_CDT_diagnostic_risque_PEC_suivi.pdf']] },
        { b: 'Après-midi (14 h – 18 h) : traitement et suivi', h: '14 h – 15 h 30', t: 'Prise en charge initiale et bases de l’iode 131', d: 'Chirurgie, stratification, place de l’iode 131 et dé-escalade dans le CDT à faible risque ; bases physiologiques de l’iode 131.', f: ['cdt-02', 'cdt-13'], pdf: [['T1 · CDT : diagnostic, risque, PEC, suivi', THY + 'T1_CDT_diagnostic_risque_PEC_suivi.pdf'], ['T2 · Irathérapie du CDT', THY + 'T2_Irathe_rapie_du_CDT.pdf']], bq: [TH, 'localis'] },
        { h: '15 h 30 – 16 h 30', t: 'Irathérapie', d: 'Préparation (TSH, régime), activité, totalisation isotopique, scintigraphie post-thérapeutique, isolement et radioprotection, grossesse et allaitement.', f: ['cdt-13', 'communs-01', 'communs-05'], pdf: [['T2 · Irathérapie du CDT', THY + 'T2_Irathe_rapie_du_CDT.pdf']] },
        { h: '16 h 30 – 18 h', t: 'Suivi et réponse thérapeutique', d: 'Thyroglobuline (méthodologie, anticorps), scintigraphie diagnostique, réponse thérapeutique. Sujet tombé en 2008 et 2010.', f: ['cdt-03', 'cdt-08', 'cdt-12'], bq: [TH, 'surveill'] },
        { b: 'Soir (20 h – 00 h) : formes graves, hyperthyroïdies, oral', h: '20 h – 21 h', t: 'Formes métastatiques, récidives et réfractaires', d: 'Prise en charge des récidives et des métastases, TEP au FDG, imagerie hybride, définition de la réfractarité à l’iode et conduite à tenir.', f: ['cdt-04', 'cdt-05', 'cdt-09', 'cdt-10', 'cdt-06', 'cdt-11'], pdf: [['T3 · CDT métastatique et réfractaire', THY + 'T3_CDT_metastatique_refractaire.pdf']], bq: [TH, 'metastat'] },
        { h: '21 h – 22 h', t: 'Hyperthyroïdies', d: 'Maladie de Basedow, nodule toxique, goitre multinodulaire toxique : scintigraphie et iode 131 (activité, contre-indications, précautions).', f: ['cdt-14'], pdf: [['T4 · Hyperthyroïdies', THY + 'T4_Hyperthyroidies.pdf']], bq: [TH, 'hyperthyro'] },
        { h: '22 h – 23 h', t: 'Question longue en 40 minutes, sans fiches', d: 'Au choix : CDT localisé et irathérapie (2008, 2010, 2014), surveillance d’un cancer de la thyroïde (2008, 2010) ou irathérapie de l’hyperthyroïdie (2010, 2019). Chronométrer, puis corriger.', bq: [TH, 'irath'] },
        oral()
      ],
      criteres: [
        'Expliquer la scintigraphie thyroïdienne (iode 123, pertechnétate) : technique, indications, place dans le nodule',
        'Stratifier le risque d’un CDT et décider du traitement initial, dé-escalade comprise',
        'Conduire une irathérapie : préparation, activité, totalisation, scintigraphie post-thérapeutique, radioprotection',
        'Surveiller un CDT : thyroglobuline, anticorps, scintigraphie, réponse thérapeutique',
        'Définir la réfractarité à l’iode et la conduite à tenir dans les formes métastatiques',
        'Traiter une hyperthyroïdie à l’iode 131 : Basedow, nodule toxique, goitre ; activité, contre-indications, précautions',
        'Traiter une question longue de DEMS en 40 minutes, avec un plan'
      ],
      fiches: ['cdt-01', 'cdt-02', 'cdt-03', 'cdt-04', 'cdt-05', 'cdt-06', 'cdt-08', 'cdt-09', 'cdt-10', 'cdt-11', 'cdt-12', 'cdt-13', 'cdt-14', 'cdt-07', 'indications-05', 'acquisition-06', 'traceurs-02', 'ped-02', 'communs-01', 'communs-03', 'communs-05'],
      pdf: [['T1 · CDT : diagnostic, risque, PEC, suivi', THY + 'T1_CDT_diagnostic_risque_PEC_suivi.pdf'], ['T2 · Irathérapie du CDT', THY + 'T2_Irathe_rapie_du_CDT.pdf'], ['T3 · CDT métastatique et réfractaire', THY + 'T3_CDT_metastatique_refractaire.pdf'], ['T4 · Hyperthyroïdies', THY + 'T4_Hyperthyroidies.pdf'], ['Thyroïde · toutes les fiches', THY + '00_Thyroide_toutes_les_fiches.pdf']]
    },

    pdc: {
      titre: 'Poumon, digestif et cerveau', jour: 'Vendredi 20 novembre', slots: ['s08', 's09', 's10'], th: ['poumon', 'dig', 'cer'], bt: PO + '|' + DI + '|' + CE,
      etapes: [
        { b: 'Matin (8 h – 12 h) : poumon', h: '8 h – 9 h 30', t: 'Traceurs, acquisition et technique', d: 'Traceurs de perfusion (MAA : macro-agrégats d’albumine) et de ventilation (aérosols, gaz) ; acquisition et technique de la scintigraphie pulmonaire.', f: ['traceurs-05', 'acquisition-04', 'poumon-01'], bq: [PO, 'scintigr'] },
        { h: '9 h 30 – 11 h', t: 'Embolie pulmonaire', d: 'Scintigraphie de ventilation-perfusion dans l’embolie pulmonaire : traceurs, technique, interprétation, place face à l’angioscanner ; embolie chez la femme enceinte.', f: ['poumon-02', 'indications-04'], bq: [PO, 'embolie'] },
        { h: '11 h – 12 h', t: 'Autres indications et entraînement', d: 'Maladies pulmonaires non thrombo-emboliques, scintigraphie de perfusion avant pneumonectomie. Puis deux questions de DEMS sans fiches.', f: ['poumon-03'], bq: [PO, 'indication'] },
        { b: 'Après-midi (14 h – 18 h) : digestif', h: '14 h – 15 h 30', t: 'Hémorragies digestives et diverticule de Meckel', d: 'Hémorragie digestive : technique, protocole, pièges ; recherche du diverticule de Meckel (tombée en 2023 et 2024).', f: ['dig-01', 'dig-02'], bq: [DI, 'meckel'] },
        { h: '15 h 30 – 17 h', t: 'Motricité, hépatobiliaire, salivaire, rate', d: 'Vidange gastrique (protocole, valeurs normales), cholescintigraphie, test respiratoire à l’urée, scintigraphies salivaire et splénique.', f: ['dig-03', 'dig-04', 'slv-01', 'spln-01', 'traceurs-08', 'indications-10', 'acquisition-09'], bq: [DI, 'gastr'] },
        { h: '17 h – 18 h', t: 'Entraînement : les questions de DEMS du digestif', d: 'Reprendre les questions du thème (six au total, toutes avec corrigé) sans fiches, puis corriger.', bq: [DI, ''] },
        { b: 'Soir (20 h – 00 h) : cerveau et oral', h: '20 h – 21 h', t: 'Traceurs cérébraux et scintigraphie de perfusion', d: 'Traceurs cérébraux, scintigraphie cérébrale de perfusion, acquisition.', f: ['traceurs-07', 'cer-01', 'acquisition-10'], bq: [CE, 'cereb'] },
        { h: '21 h – 22 h', t: 'FDG cérébral, DaTscan et LCR', d: 'TEMP et TEP cérébrales dans les démences et l’épilepsie ; DaTscan : principe, indications, interprétation ; scintigraphie du LCR (liquide cérébrospinal).', f: ['cer-02', 'cer-03', 'lcr-01', 'indications-11'], bq: [CE, 'fonction'] },
        { h: '22 h – 23 h', t: 'Question longue en 40 minutes, sans fiches', d: 'Au choix : imagerie fonctionnelle cérébrale (2009, 2013, 2015, 2023) ou scintigraphie pulmonaire dans l’embolie (2003, 2020). Chronométrer, puis corriger.', bq: [CE, 'imagerie'] },
        oral()
      ],
      criteres: [
        'Réaliser et interpréter une scintigraphie de ventilation-perfusion dans l’embolie pulmonaire, et la situer face à l’angioscanner',
        'Citer les autres indications de la scintigraphie pulmonaire, dont le bilan avant pneumonectomie',
        'Expliquer la recherche d’une hémorragie digestive et du diverticule de Meckel : protocole, pièges',
        'Décrire la vidange gastrique : protocole, valeurs normales, indications',
        'Expliquer la scintigraphie cérébrale (perfusion, FDG) et le DaTscan : principe, indications, interprétation',
        'Citer les indications de la scintigraphie du LCR',
        'Traiter une question longue de DEMS en 40 minutes, avec un plan'
      ],
      fiches: ['traceurs-05', 'acquisition-04', 'indications-04', 'poumon-01', 'poumon-02', 'poumon-03', 'traceurs-08', 'acquisition-09', 'indications-10', 'dig-01', 'dig-02', 'dig-03', 'dig-04', 'slv-01', 'spln-01', 'traceurs-07', 'acquisition-10', 'indications-11', 'cer-01', 'cer-02', 'cer-03', 'lcr-01'],
      pdf: []
    },

    os: {
      titre: 'Os complet, avec la prostate', jour: 'Dimanche 22 novembre', slots: ['s14', 's15', 's16'], th: ['os', 'prostate'], bt: 'Os|Prostate',
      etapes: [
        { b: 'Matin (8 h – 12 h) : traceurs et technique', h: '8 h – 9 h 30', t: 'Rappels, traceurs osseux et méthodologie', d: 'Rappels de l’os et des articulations ; 99mTc-HMDP et 18F-NaF : mécanisme, fixation physiologique ; méthodologie en trois temps. Sujet tombé en 2010, 2013, 2023 et 2024.', f: ['rappels-02', 'os-01', 'os-02', 'traceurs-03', 'acquisition-02'], bq: ['Os', 'methodologie'] },
        { h: '9 h 30 – 11 h', t: 'TEMP/TDM et pièges', d: 'TEMP/TDM, superscan, extravasation, contamination urinaire, artefacts.', f: ['os-02', 'communs-07', 'communs-10'], bq: ['Os', 'traceurs'] },
        { h: '11 h – 12 h', t: 'Entraînement : méthodologie et traceurs', d: 'Deux questions de DEMS (méthodologie, traceurs osseux) sans fiches, puis correction.', bq: ['Os', 'methodologie'] },
        { b: 'Après-midi (14 h – 18 h) : indications', h: '14 h – 15 h 30', t: 'Scintigraphie osseuse et affections malignes', d: 'Métastases, flare, aspects selon le cancer, superscan. Sujet tombé en 2010, 2014, 2019, 2023 et 2024 : le plus fréquent du thème.', f: ['os-03'], pdf: [['O6 · Scintigraphie osseuse en oncologie', ONC + 'O6_Scintigraphie_osseuse_en_oncologie.pdf']], bq: ['Os', 'maligne'] },
        { h: '15 h 30 – 17 h', t: 'Infection osseuse et indications bénignes', d: 'Pathologie infectieuse osseuse (tombée en 2015, 2021, 2023, 2024), algodystrophie, ostéonécrose, tumeurs bénignes, ostéoarthropathie de Pierre Marie et Foix.', f: ['os-13', 'os-04', 'os-05', 'os-06', 'os-07'], bq: ['Os', 'infectieuse'] },
        { h: '17 h – 18 h', t: 'Paget, orthopédie, métabolique, inflammatoire, enfant', d: 'Maladie de Paget, atteintes orthopédiques (fracture de stress, prothèse), ostéopathies métaboliques, SPA, polyarthrite et SAPHO, arthrose, os de l’enfant.', f: ['os-09', 'os-12', 'os-10', 'os-11', 'os-08', 'os-14', 'indications-02'] },
        { b: 'Soir (20 h – 00 h) : prostate, thérapie osseuse et oral', h: '20 h – 21 h 30', t: 'Cancer de la prostate et médecine nucléaire', d: 'Traceurs (68Ga-PSMA, 18F-PSMA, choline) et indications, place de la scintigraphie osseuse, phénomène de flare. Sujet tombé en 2022 et 2023.', f: ['prostate-01', 'prostate-02', 'indications-09'], pdf: [['O4 · Prostate', ONC + 'O4_Prostate.pdf']], bq: ['Prostate', 'prostate'] },
        { h: '21 h 30 – 22 h', t: 'Thérapie osseuse et RIV de la prostate', d: 'Radium 223, lutétium 177-PSMA, strontium et samarium : indications, effets, radioprotection. RIV (radiothérapie interne vectorisée) appliquée à la prostate : tombée en 2013 et 2023.', f: ['riv-01', 'riv-02', 'indications-14', 'traceurs-12'], pdf: [['O3 · RIV et théranostique', ONC + 'O3_RIV_et_theranostique.pdf']], bq: ['Prostate', 'RIV'] },
        { h: '22 h – 23 h', t: 'Question longue en 40 minutes, sans fiches', d: 'Au choix : scintigraphie osseuse et affections malignes ou médecine nucléaire et cancer de la prostate. Chronométrer, puis corriger.', bq: ['Os|Prostate', 'prostate'] },
        oral()
      ],
      criteres: [
        'Décrire les radiopharmaceutiques osseux (99mTc-HMDP, 18F-NaF) : mécanisme, fixation physiologique',
        'Expliquer la méthodologie : trois temps, TEMP/TDM, préparation, pièges (superscan, extravasation, contamination)',
        'Interpréter une scintigraphie osseuse en oncologie : métastases, flare, aspects selon le cancer',
        'Citer les indications bénignes : infection osseuse, algodystrophie, ostéonécrose, Paget, fracture de stress, prothèse',
        'Prostate : traceurs (PSMA, choline), indications, place du bilan osseux',
        'Thérapie osseuse et RIV de la prostate : radium 223, lutétium 177-PSMA, indications, effets, radioprotection',
        'Traiter une question longue de DEMS en 40 minutes, avec un plan'
      ],
      fiches: ['rappels-02', 'traceurs-03', 'acquisition-02', 'indications-02', 'os-01', 'os-02', 'os-03', 'os-04', 'os-05', 'os-06', 'os-07', 'os-08', 'os-09', 'os-10', 'os-11', 'os-12', 'os-13', 'os-14', 'prostate-01', 'prostate-02', 'indications-09', 'indications-14', 'traceurs-12', 'riv-01', 'riv-02', 'communs-07'],
      pdf: [['O6 · Scintigraphie osseuse en oncologie', ONC + 'O6_Scintigraphie_osseuse_en_oncologie.pdf'], ['O4 · Prostate', ONC + 'O4_Prostate.pdf'], ['O3 · RIV et théranostique', ONC + 'O3_RIV_et_theranostique.pdf'], ['Oncologie · toutes les fiches', ONC + '00_Oncologie_toutes_les_fiches.pdf']]
    },

    rein: {
      titre: 'Rein et voies urinaires complet', jour: 'Lundi 23 novembre', slots: ['s17', 's18', 's19'], th: ['rein'], bt: RE,
      etapes: [
        { b: 'Matin (8 h – 12 h) : traceurs et scintigraphie dynamique', h: '8 h – 9 h 30', t: 'Rappels et traceurs rénaux', d: 'Anatomie et physiologie du rein ; MAG3, DTPA, DMSA : mécanisme de fixation et choix du traceur.', f: ['rappels-01', 'traceurs-04', 'rein-01'], pdf: [['1 · Radiopharmaceutiques, traceurs', REIN + '01_Radiopharmaceutiques_traceurs.pdf']] },
        { h: '9 h 30 – 11 h', t: 'Scintigraphie dynamique avec furosémide', d: 'Méthodologie, paramètres, contrôle qualité ; scintigraphie rénale dynamique : sujet tombé en 2023 et 2024.', f: ['acquisition-05', 'rein-04'], pdf: [['2 · SRD, méthodologie, furosémide', REIN + '02_SRD_methodologie_furosemide.pdf'], ['3 · Interprétation du rénogramme', REIN + '03_Interpretation_renogramme.pdf']], bq: [RE, 'dynamique'] },
        { h: '11 h – 12 h', t: 'Rénogramme, fonction relative et drainage', d: 'Interpréter un rénogramme : fonction rénale relative, obstruction contre dilatation, drainage.', f: ['indications-01'], pdf: [['3 · Interprétation du rénogramme', REIN + '03_Interpretation_renogramme.pdf'], ['4 · Fonction rénale et drainage (enfant)', REIN + '04_Fonction_renale_et_drainage_enfant.pdf']] },
        { b: 'Après-midi (14 h – 18 h) : l’enfant', h: '14 h – 15 h 30', t: 'DMSA et infection urinaire de l’enfant', d: 'Indications et lecture du DMSA, cicatrices, pyélonéphrite aiguë. DMSA : tombé en 2008, 2014 et 2023.', f: ['rein-03'], pdf: [['6 · Infection urinaire de l’enfant', REIN + '06_Infection_urinaire_enfant.pdf'], ['7 · DMSA, scintigraphie statique', REIN + '07_DMSA_scintigraphie_statique.pdf']], bq: [RE, 'dmsa'] },
        { h: '15 h 30 – 17 h', t: 'Hydronéphrose néonatale et jonction pyélo-urétérale', d: 'Stratégie, place de la scintigraphie, suivi après pyéloplastie ; cas clinique de JPU post-opératoire.', f: ['rein-02'], pdf: [['5 · Hydronéphrose néonatale', REIN + '05_Hydronephrose_neonatale.pdf'], ['10 · Cas clinique : JPU post-opératoire', REIN + '10_Cas_clinique_JPU_post_operatoire.pdf']] },
        { h: '17 h – 18 h', t: 'Reflux vésico-urétéral et cystographie isotopique', d: 'RVU (reflux vésico-urétéral) : place de la cystographie isotopique, grades, suivi.', f: ['rein-05'], pdf: [['9 · Cystographie isotopique', REIN + '09_Cystographie_isotopique.pdf'], ['13 · Reflux vésico-urétéral', REIN + '13_Reflux_vesico_ureteral_RVU.pdf']] },
        { b: 'Soir (20 h – 00 h) : hypertension, greffe et oral', h: '20 h – 21 h', t: 'HTA rénovasculaire et test au captopril', d: 'HTA (hypertension artérielle) rénovasculaire : scintigraphie rénale dynamique avec captopril, interprétation.', f: ['rein-07'], pdf: [['8 · HTA rénovasculaire, captopril', REIN + '08_HTA_renovasculaire_captopril.pdf']] },
        { h: '21 h – 22 h', t: 'DFG isotopique, transplantation et chiffres', d: 'DFG (débit de filtration glomérulaire) isotopique ; transplantation rénale ; aide-mémoire des chiffres à retenir.', f: ['rein-04', 'rein-06'], pdf: [['11 · DFG isotopique', REIN + '11_DFG_isotopique.pdf'], ['12 · Transplantation rénale', REIN + '12_Transplantation_renale.pdf'], ['14 · Aide-mémoire des chiffres', REIN + '14_Aide_memoire_chiffres.pdf']], lk: [['Chiffres à retenir (site)', '#/chiffres']] },
        { h: '22 h – 23 h', t: 'Question longue en 40 minutes, sans fiches', d: 'Au choix : rein et voies urinaires (2008, 2009, 2014, 2023) ou DES rein 2017 (2013, 2023). Chronométrer, puis corriger.', pdf: [['Toutes les questions du rein, par thème', QS + '00_Toutes_les_questions_par_theme.pdf']], bq: [RE, 'rein'] },
        oral()
      ],
      criteres: [
        'Comparer MAG3, DTPA et DMSA : mécanisme de fixation, indications de chacun',
        'Réaliser une scintigraphie dynamique avec furosémide et lire un rénogramme : obstruction ou dilatation',
        'Conduire la stratégie dans l’hydronéphrose néonatale et le suivi après pyéloplastie',
        'Expliquer l’infection urinaire de l’enfant : DMSA, cicatrices, cystographie isotopique et RVU',
        'Expliquer le test au captopril dans l’HTA rénovasculaire, la mesure isotopique du DFG et le suivi d’une transplantation',
        'Traiter une question longue de DEMS en 40 minutes, avec un plan'
      ],
      fiches: ['rappels-01', 'traceurs-04', 'acquisition-05', 'indications-01', 'rein-01', 'rein-02', 'rein-03', 'rein-04', 'rein-05', 'rein-06', 'rein-07'],
      pdf: [['Fiches à bûcher du cours Khelifa', QS + '06_Fiches_a_bucher_cours_Khelifa.pdf'], ['Toutes les questions du rein, par thème', QS + '00_Toutes_les_questions_par_theme.pdf']]
    },

    tne: {
      titre: 'Tumeurs neuroendocrines complètes', jour: 'Mardi 24 novembre', slots: ['s20', 's21', 's22'], th: ['tne', 'ctc', 'riv', 'nb'], bt: 'TNE (tumeurs neuroendocrines)|Octreoscan|MIBG|Neuroblastome|Surrenale|RIV (Radio-Immuno-Vectorisation)',
      etapes: [
        { b: 'Matin (8 h – 12 h) : TNE et somatostatine', h: '8 h – 9 h 30', t: 'Rappels et définitions', d: 'Crête neurale, surrénales ; TNE (tumeurs neuroendocrines) : définitions, classification, place de la médecine nucléaire. Sujet tombé en 2012, 2023 et 2024.', f: ['rappels-03', 'tne-01', 'tne-02'], pdf: [['O2 · TNE et analogues de la somatostatine', ONC + 'O2_TNE_analogues_somatostatine.pdf']], bq: ['TNE (tumeurs neuroendocrines)', 'tne'] },
        { h: '9 h 30 – 11 h', t: 'Analogues de la somatostatine', d: 'Octréoscan (pentétréotide), 68Ga-DOTATATE et DOTATOC : mécanisme de fixation, fixation physiologique, caractéristiques physiques. Octréoscan : tombé en 2012, 2013 et 2024.', f: ['tne-05', 'traceurs-10', 'traceurs-11'], bq: ['Octreoscan', 'octreoscan'] },
        { h: '11 h – 12 h', t: 'Indications de la TEP, pièges et faux positifs', d: 'Indications de la TEP (tomographie par émission de positons) aux analogues de la somatostatine ; pièges et faux positifs ; paramètres d’acquisition.', f: ['indications-07', 'communs-10', 'acquisition-07', 'acquisition-08'] },
        { b: 'Après-midi (14 h – 18 h) : MIBG, neuroblastome, surrénales', h: '14 h – 15 h 30', t: 'Phéochromocytome, paragangliome et MIBG', d: 'MIBG (méta-iodobenzylguanidine) : principe, indications, préparation, médicaments interférents. MIBG : tombée en 2008 et 2014.', f: ['tne-03', 'acquisition-07', 'indications-07'], bq: ['MIBG', ''] },
        { h: '15 h 30 – 16 h 30', t: 'Neuroblastome', d: 'Place de la médecine nucléaire dans le neuroblastome : bilan, MIBG, suivi.', f: ['nb-01'], bq: ['Neuroblastome', ''] },
        { h: '16 h 30 – 18 h', t: 'Corticosurrénales', d: 'Scintigraphie à l’131I-norcholestérol : quel examen pour l’adénome de Conn, le syndrome de Cushing, le phéochromocytome ?', f: ['ctc-01', 'indications-06', 'rappels-03'], bq: ['Surrenale', ''] },
        { b: 'Soir (20 h – 00 h) : RIV, théranostique et oral', h: '20 h – 21 h 30', t: 'RIV et théranostique', d: 'RIV (radiothérapie interne vectorisée) : principes, radiopharmaceutiques thérapeutiques, indications ; définir la théranostique et en donner trois exemples. RIV : sujet de 2008 et 2014.', f: ['riv-01', 'riv-02', 'traceurs-12', 'indications-14'], pdf: [['O3 · RIV et théranostique', ONC + 'O3_RIV_et_theranostique.pdf']], bq: ['RIV (Radio-Immuno-Vectorisation)', ''] },
        { h: '21 h 30 – 22 h', t: 'Lutétium 177-DOTATATE et thérapie à l’131I-MIBG', d: 'Critères d’éligibilité, protocole, effets secondaires ; imagerie post-thérapeutique et dosimétrie.', f: ['tne-06', 'tne-04', 'acquisition-11'] },
        { h: '22 h – 23 h', t: 'Question longue en 40 minutes, sans fiches', d: 'Au choix : les TNE (2012, 2023, 2024) ou l’octréoscan (2012, 2013, 2024). Chronométrer, puis corriger.', bq: ['TNE (tumeurs neuroendocrines)|Octreoscan', 'tne'] },
        oral()
      ],
      criteres: [
        'Définir les TNE et leur classification ; expliquer les analogues de la somatostatine : mécanisme, traceurs, fixation physiologique',
        'Citer les indications de la TEP aux analogues de la somatostatine, ses pièges et ses faux positifs',
        'Expliquer la MIBG : principe, indications (phéochromocytome, neuroblastome), préparation, médicaments interférents',
        'Choisir l’examen des corticosurrénales : adénome de Conn, syndrome de Cushing, phéochromocytome',
        'Traiter au lutétium 177-DOTATATE : critères d’éligibilité, protocole, effets secondaires',
        'Définir la théranostique et en donner trois exemples',
        'Traiter une question longue de DEMS en 40 minutes, avec un plan'
      ],
      fiches: ['rappels-03', 'tne-01', 'tne-02', 'tne-03', 'tne-04', 'tne-05', 'tne-06', 'nb-01', 'ctc-01', 'indications-06', 'indications-07', 'indications-14', 'traceurs-10', 'traceurs-11', 'traceurs-12', 'acquisition-07', 'acquisition-08', 'acquisition-11', 'riv-01', 'riv-02'],
      pdf: [['O2 · TNE et analogues de la somatostatine', ONC + 'O2_TNE_analogues_somatostatine.pdf'], ['O3 · RIV et théranostique', ONC + 'O3_RIV_et_theranostique.pdf'], ['Oncologie · toutes les fiches', ONC + '00_Oncologie_toutes_les_fiches.pdf']]
    },

    /* Contenu hors planning pour l'instant : à replacer après l'examen blanc (voir le créneau « Bilan et plan de la suite ») */
    reste: ['Infection, inflammation et pédiatrie (fiche « Indications » infection, leucocytes marqués, TEP au FDG et fièvre, ostéomyélite de l’enfant)', 'Physique, contrôle de qualité de la gamma-caméra et de la TEP, dosages radio-immunologiques (RIA)']
  };
})();
