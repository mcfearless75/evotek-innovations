/* ============================================================
   EVOTEK INNOVATIONS — Language Switcher (EN / DE)
   ============================================================ */

const TRANSLATIONS = {
  en: {
    /* ── Navigation ─────────────────────────────────────── */
    'nav.about':      'ABOUT',
    'nav.sectors':    'SECTORS',
    'nav.biomimicry': 'BIOMIMICRY',
    'nav.why':        'WHY EVOTEK',
    'nav.claims':     'OUR CLAIMS',
    'nav.team':       'TEAM',
    'nav.faq':        'FAQ',
    'nav.contact':    'CONTACT US',
    'nav.team.mob':   'MEET THE TEAM',

    /* ── Hero ────────────────────────────────────────────── */
    'hero.label':  'NHS SUPPLY PARTNER \u00a0·\u00a0 LONDON, UK',
    'hero.title':  'WELCOME TO<br>A MORE<br><span class="glitch">HYGIENIC</span><br>WORLD FOR YOUR<br>HOME, FAMILY<br>&amp; BUSINESS',
    'hero.sub':    'Next-generation Smart Surface Technology delivering continuous, non-depleting antimicrobial protection for up to <strong style="color:var(--text)">336 hours</strong>. Deployed across healthcare, food service, transport &amp; beyond.',
    'hero.protecting': 'Protecting',
    'hero.cta1':   'GET IN TOUCH',
    'hero.cta2':   'LEARN MORE',
    'hero.stat1':  'VIRICIDAL EFFICACY SCORE',
    'hero.stat2':  'CONTINUOUS PROTECTION',
    'hero.stat3':  'DRYING TIME',
    'hero.badge1': 'BIODEGRADABLE',
    'hero.badge2': 'WHO RECOGNISED',

    /* ── Stats strip ──────────────────────────────────────── */
    'stats.efficacy':  'VIRICIDAL EFFICACY',
    'stats.hours':     'HOURS PROTECTION',
    'stats.expertise': 'COMBINED EXPERTISE',
    'stats.pathogens': 'PATHOGEN CLASSES TARGETED',

    /* ── Nature\'s Way ─────────────────────────────────────── */
    'nature.label': 'SCIENTIFIC OVERVIEW',
    'nature.title': "Nature's <span class=\"accent\">Way</span>",
    'nature.sub':   'Biomimicry Behind EvoTek ESP',
    'nature.p1.h':  'The Principle',
    'nature.p1.p':  "EvoTek's Engineered Surface Physics (ESP) platform is grounded in the principles of biomimicry — the practice of studying how nature solves complex problems and translating those solutions into advanced human technologies. Instead of relying on chemicals or biocides, our Smart Surface Technologies replicate the micro-textures, charge patterns, and surface-energy behaviours found throughout the natural world — in sharks, insects, and leaves. These systems stay clean, dry, protected, and resilient without ever releasing toxins, and EvoTek applies the same physics at the molecular scale.",
    'nature.p2.h':  'The EvoTek Philosophy',
    'nature.p2.p':  "Nature's Logic — nature never uses bleach, acids, or toxic chemical treatments. Instead it uses physics — structure, charge, energy, and morphology — to stay clean, protected, and resilient. Our innovations are engineered for modern life and to protect ourselves and our planet. Our ESP platform is the biomimetic evolution of hygiene and material protection: continuous, non-toxic, sustainable, and aligned with the way the natural world has always worked.",
    'nature.p3.h':  'Our Approach',
    'nature.p3.p':  "At EvoTek Innovations, we believe the smartest technologies are the ones nature invented first. From the lotus leaf's self-cleaning surface, to the water-shedding feathers of birds, to the micro-textures that prevent bacteria from settling on shark skin, nature has spent billions of years perfecting sustainable, non-toxic, self-maintaining systems. EvoTek replicates these same physical principles at the molecular scale, creating surfaces that stay cleaner, drier, and more resilient without chemicals, poisons, or environmental burden.",
    'nature.btn':   '* EXPLORE BIOMIMICRY EXAMPLES',
    'nature.mech.k':  'Mechanism',
    'nature.mech.v':  'PHYSICS-BASED',
    'nature.insp.k':  'Inspired By',
    'nature.chrel.k': 'Chemical Release',
    'nature.tox.k':   'Toxicity',
    'nature.amr.k':   'AMR Contribution',
    'nature.prot.k':  'Protection Duration',
    'nature.cov.k':   'Coverage / Litre',

    /* ── How SST Works ────────────────────────────────────── */
    'how.label':   'MECHANISM OF ACTION',
    'how.title':   'How <span class="accent">SST</span> Works',
    'how.sub':     'A materials science molecular approach — not a biocide, no active chemicals released. Surfaces become persistently inhospitable to microbial colonisation for 336 hours.',
    'how.s1.h':    'IMMEDIATE ANTIMICROBIAL ACTIVITY',
    'how.s1.p':    'Disrupts microbial cell membranes on contact — achieving broad-spectrum efficacy against bacteria, viruses, and fungi. Physical disruption, not chemical inhibition.',
    'how.s2.h':    'COVALENT SURFACE BONDING',
    'how.s2.p':    'Organosilane chemistry enables permanent attachment to any substrate — plastics, metals, fabrics, porous surfaces. Forms a non-leaching antimicrobial layer.',
    'how.s3.h':    'CONTINUOUS NON-DEPLETING PROTECTION',
    'how.s3.p':    'The treated surface remains inhospitable for up to 336 hours. Compatible with standard cleaning — chemical and physical methods can continue as normal.',
    'how.s4.h':    'RESISTANCE MITIGATION',
    'how.s4.p':    'Physical rupture mechanism reduces AMR risk — no reliance on metabolic inhibition means pathogens cannot develop resistance through genetic adaptation.',
    'how.chip1':   'PATHOGEN COVERAGE',
    'how.chip2':   'SAFETY PROFILE',
    'how.bac.k':   'Bacteria',
    'how.vir.k':   'Viruses (incl. SARS-CoV-2)',
    'how.fun.k':   'Fungi',
    'how.env.k':   'Enveloped Viruses (EN 14476)',
    'how.cor.k':   'Coronavirus / SARS-CoV-2',
    'how.tox.k':   'Toxicity',
    'how.food.k':  'Food Safety',
    'how.bio.k':   'Biodegradability',
    'how.resp.k':  'Respiratory',
    'how.dry.k':   'Drying Time',

    /* ── Sectors ──────────────────────────────────────────── */
    'sec.label':      'DEPLOYMENT SECTORS',
    'sec.title':      'Who <span class="accent">Benefits</span>',
    'sec.cta':        'ENQUIRE NOW',
    'sec.healthcare': 'HEALTHCARE',
    'sec.workplace':  'WORKPLACE',
    'sec.hotels':     'HOTELS',
    'sec.leisure':    'LEISURE',
    'sec.ent':        'ENTERTAINMENT',
    'sec.catering':   'CATERING',
    'sec.transport':  'PUBLIC TRANSPORT',
    'sec.edu':        'EDUCATION',
    'sec.c1.chip':    'HEALTHCARE',
    'sec.c1.h':       'Infection Prevention',
    'sec.c1.p':       'Maintains antimicrobial protection on high-touch surfaces and medical devices. Enhances standard decontamination protocols without disruption.',
    'sec.c2.chip':    'FOOD SERVICE',
    'sec.c2.h':       'Safe Decontamination',
    'sec.c2.p':       'Food-safe formulation provides continuous antimicrobial protection without harmful residues. Non-toxic, water-based, naturally biodegradable.',
    'sec.c3.chip':    'PUBLIC SPACES',
    'sec.c3.h':       'Community Protection',
    'sec.c3.p':       'Practical hygiene solutions for offices, schools, and public transport systems with high footfall and cross-contamination risk.',

    /* ── Compliance ───────────────────────────────────────── */
    'comp.label': 'STANDARDS & COMPLIANCE',
    'comp.title': 'Rigorously <span class="accent-green">Certified</span>',
    'comp.sub':   'Independently tested and certified to international standards. Recognised within NHS briefing papers as a candidate technology.',

    /* ── CTA Banner ───────────────────────────────────────── */
    'cta.chip':  'NEXT STEPS',
    'cta.title': 'Ready to <span style="color:var(--cyan)">Protect</span> Your Environment?',
    'cta.sub':   'Speak with our team about deploying SST technology in your organisation.',
    'cta.btn1':  'GET IN TOUCH',
    'cta.btn2':  'READ FAQ',

    /* ── Footer ───────────────────────────────────────────── */
    'foot.desc':     'Pioneering Smart Surface Technology for a more hygienic world. NHS supply partner. Biodegradable. Non-toxic.',
    'foot.nav.h':    'NAVIGATION',
    'foot.nav.1':    'About Us',
    'foot.nav.2':    'Meet the Team',
    'foot.nav.3':    'FAQ',
    'foot.nav.4':    'Contact',
    'foot.sec.h':    'SECTORS',
    'foot.sec.1':    'Healthcare',
    'foot.sec.2':    'Food Service',
    'foot.sec.3':    'Public Transport',
    'foot.sec.4':    'Education',
    'foot.con.h':    'CONTACT',
    'foot.hours.1':  'Mon–Thu: 09:00–20:00',
    'foot.hours.2':  'Friday: 09:00–15:00',
    'foot.hours.3':  'Sat–Sun: Closed',
    'foot.copy':     '© 2024 EVOTEK INNOVATIONS LTD. ALL RIGHTS RESERVED.',
  },

  de: {
    /* ── Navigation ─────────────────────────────────────── */
    'nav.about':      'ÜBER UNS',
    'nav.sectors':    'SEKTOREN',
    'nav.biomimicry': 'BIOMIMETIK',
    'nav.why':        'WARUM EVOTEK',
    'nav.claims':     'UNSERE AUSSAGEN',
    'nav.team':       'TEAM',
    'nav.faq':        'FAQ',
    'nav.contact':    'KONTAKT',
    'nav.team.mob':   'UNSER TEAM',

    /* ── Hero ────────────────────────────────────────────── */
    'hero.label':  'NHS-LIEFERPARTNER \u00a0·\u00a0 LONDON, UK',
    'hero.title':  'WILLKOMMEN IN<br>EINER<br><span class="glitch">HYGIENISCHEREN</span><br>WELT FÜR IHR<br>ZUHAUSE &amp;<br>UNTERNEHMEN',
    'hero.sub':    'Modernste Smart Surface Technology liefert kontinuierlichen, nicht erschöpfenden antimikrobiellen Schutz für bis zu <strong style="color:var(--text)">336 Stunden</strong>. Eingesetzt im Gesundheitswesen, in der Lebensmittelbranche, im Transport und darüber hinaus.',
    'hero.protecting': 'Schützt',
    'hero.cta1':   'KONTAKT AUFNEHMEN',
    'hero.cta2':   'MEHR ERFAHREN',
    'hero.stat1':  'VIRIZIDE WIRKSAMKEIT',
    'hero.stat2':  'KONTINUIERLICHER SCHUTZ',
    'hero.stat3':  'TROCKNUNGSZEIT',
    'hero.badge1': 'BIOLOGISCH ABBAUBAR',
    'hero.badge2': 'WHO ANERKANNT',

    /* ── Stats strip ──────────────────────────────────────── */
    'stats.efficacy':  'VIRIZIDE WIRKSAMKEIT',
    'stats.hours':     'STUNDEN SCHUTZ',
    'stats.expertise': 'KOMBINIERTE EXPERTISE',
    'stats.pathogens': 'BEKÄMPFTE ERREGERKLASSEN',

    /* ── Nature\'s Way ─────────────────────────────────────── */
    'nature.label': 'WISSENSCHAFTLICHE ÜBERSICHT',
    'nature.title': 'Der Weg der <span class="accent">Natur</span>',
    'nature.sub':   'Biomimetik hinter EvoTek ESP',
    'nature.p1.h':  'Das Prinzip',
    'nature.p1.p':  'Die Engineered Surface Physics (ESP)-Plattform von EvoTek basiert auf den Prinzipien der Biomimetik — der Praxis, wie die Natur komplexe Probleme löst und diese Lösungen in fortschrittliche Technologien überträgt. Anstatt auf Chemikalien zu setzen, replizieren unsere Smart Surface Technologies die Mikrotexturen, Ladungsmuster und Oberflächenenergieverhältnisse der natürlichen Welt — von Haifischen, Insekten und Blättern. Diese Systeme bleiben sauber, trocken, geschützt und widerstandsfähig, ohne jemals Toxine freizusetzen.',
    'nature.p2.h':  'Die EvoTek-Philosophie',
    'nature.p2.p':  'Die Logik der Natur: Die Natur verwendet niemals Bleichmittel, Säuren oder giftige chemische Behandlungen. Stattdessen nutzt sie Physik — Struktur, Ladung, Energie und Morphologie — um sauber, geschützt und widerstandsfähig zu bleiben. Unsere Innovationen sind für das moderne Leben entwickelt und schützen uns selbst und unseren Planeten. Unsere ESP-Plattform ist die biomimetische Evolution der Hygiene und des Materialschutzes: kontinuierlich, ungiftig, nachhaltig.',
    'nature.p3.h':  'Unser Ansatz',
    'nature.p3.p':  'Bei EvoTek Innovations glauben wir, dass die klügsten Technologien diejenigen sind, die die Natur zuerst erfunden hat. Vom selbstreinigenden Lotusblatt über die wasserabweisenden Federn von Vögeln bis hin zu den Mikrotexturen, die Bakterien am Absetzen auf Haifischhaut hindern — die Natur hat Milliarden von Jahren damit verbracht, nachhaltige, ungiftige, selbsterhaltende Systeme zu perfektionieren. EvoTek repliziert diese physikalischen Prinzipien im molekularen Maßstab.',
    'nature.btn':   '* BIOMIMETIK ERKUNDEN',
    'nature.mech.k':  'Mechanismus',
    'nature.mech.v':  'PHYSIKBASIERT',
    'nature.insp.k':  'Inspiriert von',
    'nature.chrel.k': 'Chemische Freisetzung',
    'nature.tox.k':   'Toxizität',
    'nature.amr.k':   'AMR-Beitrag',
    'nature.prot.k':  'Schutzdauer',
    'nature.cov.k':   'Abdeckung / Liter',

    /* ── How SST Works ────────────────────────────────────── */
    'how.label':   'WIRKMECHANISMUS',
    'how.title':   'Wie <span class="accent">SST</span> Funktioniert',
    'how.sub':     'Ein materialwissenschaftlicher Molekularansatz — kein Biozid, keine aktiven Chemikalien. Oberflächen werden für 336 Stunden dauerhaft feindlich gegenüber mikrobiellem Wachstum.',
    'how.s1.h':    'SOFORTIGE ANTIMIKROBIELLE AKTIVITÄT',
    'how.s1.p':    'Stört mikrobielle Zellmembranen beim Kontakt — erreicht Breitbandwirksamkeit gegen Bakterien, Viren und Pilze. Physikalische Störung, keine chemische Hemmung.',
    'how.s2.h':    'KOVALENTE OBERFLÄCHENBINDUNG',
    'how.s2.p':    'Organosilanchemie ermöglicht permanente Bindung an jedes Substrat — Kunststoffe, Metalle, Stoffe, poröse Oberflächen. Bildet eine nicht auslaugende antimikrobielle Schicht.',
    'how.s3.h':    'KONTINUIERLICHER SCHUTZ OHNE ERSCHÖPFUNG',
    'how.s3.p':    'Die behandelte Oberfläche bleibt bis zu 336 Stunden lang feindlich gegenüber Mikroben. Kompatibel mit der Standardreinigung — chemische und physikalische Methoden können wie gewohnt fortgesetzt werden.',
    'how.s4.h':    'RESISTENZMINIMIERUNG',
    'how.s4.p':    'Der physikalische Störmechanismus reduziert das AMR-Risiko — keine Abhängigkeit von metabolischer Hemmung bedeutet, dass Krankheitserreger keine Resistenz entwickeln können.',
    'how.chip1':   'ERREGERSCHUTZ',
    'how.chip2':   'SICHERHEITSPROFIL',
    'how.bac.k':   'Bakterien',
    'how.vir.k':   'Viren (inkl. SARS-CoV-2)',
    'how.fun.k':   'Pilze',
    'how.env.k':   'Behüllte Viren (EN 14476)',
    'how.cor.k':   'Coronavirus / SARS-CoV-2',
    'how.tox.k':   'Toxizität',
    'how.food.k':  'Lebensmittelsicherheit',
    'how.bio.k':   'Biologische Abbaubarkeit',
    'how.resp.k':  'Atemwegsverträglichkeit',
    'how.dry.k':   'Trocknungszeit',

    /* ── Sectors ──────────────────────────────────────────── */
    'sec.label':      'EINSATZBEREICHE',
    'sec.title':      'Wer <span class="accent">Profitiert</span>',
    'sec.cta':        'ANFRAGE STELLEN',
    'sec.healthcare': 'GESUNDHEITSWESEN',
    'sec.workplace':  'ARBEITSPLATZ',
    'sec.hotels':     'HOTELS',
    'sec.leisure':    'FREIZEIT',
    'sec.ent':        'UNTERHALTUNG',
    'sec.catering':   'GASTRONOMIE',
    'sec.transport':  'ÖFFENTLICHER VERKEHR',
    'sec.edu':        'BILDUNG',
    'sec.c1.chip':    'GESUNDHEITSWESEN',
    'sec.c1.h':       'Infektionsprävention',
    'sec.c1.p':       'Aufrechterhaltung des antimikrobiellen Schutzes auf häufig berührten Oberflächen und medizinischen Geräten. Verbessert Standarddekontaminationsprotokolle ohne Unterbrechung.',
    'sec.c2.chip':    'LEBENSMITTELSERVICE',
    'sec.c2.h':       'Sichere Dekontamination',
    'sec.c2.p':       'Lebensmittelsichere Formulierung bietet kontinuierlichen antimikrobiellen Schutz ohne schädliche Rückstände. Ungiftig, wasserbasiert, natürlich biologisch abbaubar.',
    'sec.c3.chip':    'ÖFFENTLICHE BEREICHE',
    'sec.c3.h':       'Gemeinschaftsschutz',
    'sec.c3.p':       'Praktische Hygienelösungen für Büros, Schulen und öffentliche Verkehrssysteme mit hohem Besucheraufkommen und Kreuzkontaminationsrisiko.',

    /* ── Compliance ───────────────────────────────────────── */
    'comp.label': 'NORMEN & ZERTIFIZIERUNG',
    'comp.title': 'Rigoros <span class="accent-green">Zertifiziert</span>',
    'comp.sub':   'Unabhängig getestet und nach internationalen Normen zertifiziert. In NHS-Briefingdokumenten als Kandidatentechnologie anerkannt.',

    /* ── CTA Banner ───────────────────────────────────────── */
    'cta.chip':  'NÄCHSTE SCHRITTE',
    'cta.title': 'Bereit, Ihre Umgebung zu <span style="color:var(--cyan)">Schützen</span>?',
    'cta.sub':   'Sprechen Sie mit unserem Team über den Einsatz der SST-Technologie in Ihrer Organisation.',
    'cta.btn1':  'KONTAKT AUFNEHMEN',
    'cta.btn2':  'FAQ LESEN',

    /* ── Footer ───────────────────────────────────────────── */
    'foot.desc':     'Wegweisende Smart Surface Technology für eine hygienischere Welt. NHS-Lieferpartner. Biologisch abbaubar. Ungiftig.',
    'foot.nav.h':    'NAVIGATION',
    'foot.nav.1':    'Über uns',
    'foot.nav.2':    'Unser Team',
    'foot.nav.3':    'FAQ',
    'foot.nav.4':    'Kontakt',
    'foot.sec.h':    'SEKTOREN',
    'foot.sec.1':    'Gesundheitswesen',
    'foot.sec.2':    'Lebensmittelservice',
    'foot.sec.3':    'Öffentlicher Verkehr',
    'foot.sec.4':    'Bildung',
    'foot.con.h':    'KONTAKT',
    'foot.hours.1':  'Mo–Do: 09:00–20:00',
    'foot.hours.2':  'Freitag: 09:00–15:00',
    'foot.hours.3':  'Sa–So: Geschlossen',
    'foot.copy':     '© 2024 EVOTEK INNOVATIONS LTD. ALLE RECHTE VORBEHALTEN.',
  }
};

/* ── Apply translations ─────────────────────────────────── */
function applyLang(lang) {
  var t = TRANSLATIONS[lang];
  if (!t) return;

  // Text content replacements
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // HTML content replacements (for elements with embedded tags)
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update all switcher button states (desktop + mobile)
  document.querySelectorAll('.lang-btn').forEach(function(btn) {
    btn.classList.remove('active');
  });
  ['btn-' + lang, 'mob-btn-' + lang].forEach(function(id) {
    var btn = document.getElementById(id);
    if (btn) btn.classList.add('active');
  });

  // Persist + update html lang attribute
  try { localStorage.setItem('evotek-lang', lang); } catch(e) {}
  document.documentElement.setAttribute('lang', lang);
}

function setLang(lang) {
  applyLang(lang);
}

/* ── Initialise on DOM ready ────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  var saved = 'en';
  try { saved = localStorage.getItem('evotek-lang') || 'en'; } catch(e) {}
  applyLang(saved);
});
