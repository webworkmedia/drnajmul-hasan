(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Instant, local English <-> Bangla translation for the site's key information.
  // English remains in the HTML source so search engines can crawl the primary content.
  const bn = {
    'Skip to content': 'মূল কনটেন্টে যান',
    'BM&DC: A67050': 'BM&DC: A67050',
    'Dr Najmul Hasan': 'ডা. নাজমুল হাসান',
    'Consultant Orthopaedic': 'কনসালট্যান্ট অর্থোপেডিক',
    'About': 'পরিচিতি',
    'Expertise': 'বিশেষজ্ঞতা',
    'Credentials': 'যোগ্যতা',
    'Gallery': 'গ্যালারি',
    'Chambers': 'চেম্বার',
    'Specialist Orthopaedic Care': 'বিশেষজ্ঞ অর্থোপেডিক সেবা',
    'Call a chamber': 'চেম্বারে কল করুন',
    'Call a Chamber': 'চেম্বারে কল করুন',
    'Advanced care for your spine, joints and mobility.': 'মেরুদণ্ড, জয়েন্ট ও চলাচলজনিত সমস্যায় উন্নত চিকিৎসা।',
    'Expert assessment and treatment for orthopaedic, spine and trauma conditions, with a clear focus on helping patients move better, recover confidently and return to everyday life.': 'অর্থোপেডিক, মেরুদণ্ড ও ট্রমাজনিত সমস্যার বিশেষজ্ঞ মূল্যায়ন ও চিকিৎসা, যাতে রোগী আরও স্বচ্ছন্দে চলাফেরা করতে পারেন, আত্মবিশ্বাসের সঙ্গে সুস্থ হয়ে দৈনন্দিন জীবনে ফিরতে পারেন।',
    'spine, joints': 'মেরুদণ্ড ও জয়েন্ট',
    'and mobility.': 'ও চলাচলজনিত সমস্যায় উন্নত চিকিৎসা।',
    'Consultant Orthopaedic · NITOR': 'কনসালট্যান্ট অর্থোপেডিক · NITOR',
    'View chambers': 'চেম্বার ও সময়সূচি',
    'Fellow AO Spine': 'AO Spine-এর ফেলো',
    '10+ Years Experience': '১০+ বছরের অভিজ্ঞতা',
    '3 Chambers': '৩টি চেম্বার',
    'Special focus': 'বিশেষজ্ঞ ক্ষেত্র',
    'Spine & Trauma': 'মেরুদণ্ড ও ট্রমা',
    'International credential': 'আন্তর্জাতিক স্বীকৃতি',
    'Years of Experience': 'বছরের অভিজ্ঞতা',
    'Fellowship Training': 'ফেলোশিপ প্রশিক্ষণ',
    'Patient Chambers': 'চেম্বার',
    'Professional memberships': 'পেশাগত সদস্যপদসমূহ',
    'About the doctor': 'ডাক্তার সম্পর্কে',
    'Focused expertise. Thoughtful care. Better movement.': 'বিশেষজ্ঞ চিকিৎসা, যত্নশীল সেবা, স্বচ্ছন্দ চলাফেরা।',
    'Dr Najmul Hasan is a Consultant Orthopaedic specialist at the National Institute of Traumatology and Orthopaedic Rehabilitation (NITOR), with more than 10 years of clinical experience.': 'ডা. নাজমুল হাসান ন্যাশনাল ইনস্টিটিউট অব ট্রমাটোলজি অ্যান্ড অর্থোপেডিক রিহ্যাবিলিটেশন (NITOR)-এর একজন কনসালট্যান্ট অর্থোপেডিক বিশেষজ্ঞ। তাঁর ১০ বছরেরও বেশি ক্লিনিক্যাল অভিজ্ঞতা রয়েছে।',
    'His practice focuses on orthopaedic conditions, spine disorders, trauma and joint replacement. He is a Fellow of AO Spine and holds professional credentials and memberships that reflect continued engagement with modern orthopaedic and surgical practice.': 'তাঁর চিকিৎসার প্রধান ক্ষেত্র অর্থোপেডিক সমস্যা, মেরুদণ্ডের রোগ, ট্রমা ও জয়েন্ট রিপ্লেসমেন্ট। তিনি AO Spine-এর ফেলো এবং আধুনিক অর্থোপেডিক ও সার্জিক্যাল চিকিৎসায় নিয়মিত পেশাগত উন্নয়নের সঙ্গে যুক্ত আছেন।',
    'Degrees': 'শিক্ষাগত যোগ্যতা',
    'Current workplace': 'বর্তমান কর্মস্থল',
    'National Institute of Traumatology and Orthopaedic Rehabilitation (NITOR)': 'ন্যাশনাল ইনস্টিটিউট অব ট্রমাটোলজি অ্যান্ড অর্থোপেডিক রিহ্যাবিলিটেশন (NITOR)',
    'Fellowship / training': 'ফেলোশিপ / প্রশিক্ষণ',
    'View professional credentials': 'পেশাগত যোগ্যতা দেখুন',
    'Areas of expertise': 'বিশেষজ্ঞতার ক্ষেত্র',
    'Specialist orthopaedic care, from diagnosis to recovery.': 'রোগ নির্ণয় থেকে সুস্থতা পর্যন্ত বিশেষজ্ঞ অর্থোপেডিক চিকিৎসা।',
    'Focused care for conditions affecting movement, stability and quality of life.': 'চলাচল, স্থিতিশীলতা ও জীবনযাত্রার মানকে প্রভাবিত করে এমন সমস্যার জন্য লক্ষ্যভিত্তিক চিকিৎসা।',
    'Orthopaedics': 'অর্থোপেডিক চিকিৎসা',
    'Assessment and treatment of bone, joint and musculoskeletal conditions.': 'হাড়, জয়েন্ট ও মাংসপেশি-সংক্রান্ত সমস্যার মূল্যায়ন ও চিকিৎসা।',
    'Spine Care': 'মেরুদণ্ডের চিকিৎসা',
    'Specialist evaluation and management of spinal pain, disorders and related conditions.': 'মেরুদণ্ডের ব্যথা, রোগ ও সংশ্লিষ্ট সমস্যার বিশেষজ্ঞ মূল্যায়ন ও চিকিৎসা।',
    'Trauma': 'ট্রমা চিকিৎসা',
    'Orthopaedic trauma care with a focus on restoring function after injury.': 'আঘাতের পর স্বাভাবিক কার্যক্ষমতা ফিরিয়ে আনার লক্ষ্যে অর্থোপেডিক ট্রমা চিকিৎসা।',
    'Joint Replacement': 'জয়েন্ট রিপ্লেসমেন্ট',
    'Evaluation and surgical care for advanced joint disease and mobility limitation.': 'গুরুতর জয়েন্টের রোগ ও চলাচলের সীমাবদ্ধতার জন্য মূল্যায়ন ও সার্জিক্যাল চিকিৎসা।',
    'Training & professional standing': 'প্রশিক্ষণ ও পেশাগত যোগ্যতা',
    'Committed to continuous learning and modern surgical practice.': 'আধুনিক সার্জারি ও নিয়মিত পেশাগত উন্নয়নে প্রতিশ্রুতিবদ্ধ।',
    'International training, specialist qualifications and active professional memberships support a disciplined, evidence-informed approach to orthopaedic care.': 'আন্তর্জাতিক প্রশিক্ষণ, বিশেষজ্ঞ যোগ্যতা ও পেশাগত সদস্যপদ তাঁর প্রমাণভিত্তিক অর্থোপেডিক চিকিৎসা চর্চাকে সমৃদ্ধ করেছে।',
    'MEMBERSHIPS': 'সদস্যপদ',
    'Professional development': 'পেশাগত উন্নয়ন',
    'International exposure': 'আন্তর্জাতিক অভিজ্ঞতা',
    'Professional journey': 'পেশাগত পথচলা',
    'Training, surgery & milestones.': 'প্রশিক্ষণ, সার্জারি ও পেশাগত অর্জন।',
    "A glimpse into Dr Najmul Hasan's professional development, surgical work and academic achievements.": 'ডা. নাজমুল হাসানের পেশাগত উন্নয়ন, সার্জিক্যাল কাজ ও একাডেমিক অর্জনের কিছু মুহূর্ত।',
    'Surgical Practice': 'সার্জিক্যাল কার্যক্রম',
    'Focused on precision and patient care': 'নির্ভুল সার্জারি ও রোগীকেন্দ্রিক যত্ন',
    'Professional Milestone': 'পেশাগত মাইলফলক',
    'International College of Surgeons': 'ইন্টারন্যাশনাল কলেজ অব সার্জনস',
    'Academic Achievement': 'একাডেমিক অর্জন',
    'Continued specialist development': 'বিশেষজ্ঞ দক্ষতার ধারাবাহিক উন্নতি',
    'Convocation': 'সমাবর্তন',
    'Celebrating professional progress': 'পেশাগত অর্জনের একটি মুহূর্ত',
    'International Training': 'আন্তর্জাতিক প্রশিক্ষণ',
    'Learning alongside specialist colleagues': 'বিশেষজ্ঞ সহকর্মীদের সঙ্গে আন্তর্জাতিক প্রশিক্ষণ',
    'Scientific Conference': 'বৈজ্ঞানিক সম্মেলন',
    'Continued professional learning': 'ধারাবাহিক পেশাগত জ্ঞানচর্চা',
    'Chambers & appointments': 'চেম্বার ও অ্যাপয়েন্টমেন্ট',
    'Choose the chamber most convenient for you.': 'আপনার সুবিধামতো চেম্বার বেছে নিন।',
    'For serial and appointment confirmation, call the relevant chamber number below.': 'সিরিয়াল বা অ্যাপয়েন্টমেন্ট নিশ্চিত করতে নিচের সংশ্লিষ্ট চেম্বারের নম্বরে কল করুন।',
    'Dhaka': 'ঢাকা',
    'Natore': 'নাটোর',
    'Rajshahi': 'রাজশাহী',
    'consultation': 'ভিজিট ফি',
    '৳1,000': '৳১,০০০',
    '৳600': '৳৬০০',
    'Bangladesh Spine and Orthopaedic Hospital': 'বাংলাদেশ স্পাইন অ্যান্ড অর্থোপেডিক হাসপাতাল',
    'Sopnil General Hospital': 'স্বপ্নিল জেনারেল হাসপাতাল',
    'Adorsho Diagnostic Lab and Hospital': 'আদর্শ ডায়াগনস্টিক ল্যাব অ্যান্ড হাসপাতাল',
    'Location': 'ঠিকানা',
    'Kollayanpur Bus Stand, near foot over bridge, 10 Mirpur Road, Dhaka': 'কল্যাণপুর বাসস্ট্যান্ড, ফুটওভার ব্রিজের পাশে, ১০ মিরপুর রোড, ঢাকা',
    'Modhubari, Gopalpur, Lalpur, Natore, Rajshahi': 'মধুবাড়ি, গোপালপুর, লালপুর, নাটোর, রাজশাহী',
    'Banessore Bazar, Traffic More, Pythia, Rajshahi': 'বানেশ্বর বাজার, ট্রাফিক মোড়, পুঠিয়া, রাজশাহী',
    'Visiting hours': 'রোগী দেখার সময়',
    'Saturday–Tuesday · 5:00 PM–9:00 PM': 'শনিবার থেকে মঙ্গলবার · বিকেল ৫টা–রাত ৯টা',
    'Friday only · 8:00 AM–3:00 PM': 'শুধু শুক্রবার · সকাল ৮টা–বিকেল ৩টা',
    'Friday only · 4:00 PM–11:00 PM': 'শুধু শুক্রবার · বিকেল ৪টা–রাত ১১টা',
    'Weekly off': 'সাপ্তাহিক বন্ধ',
    'Available day': 'রোগী দেখার দিন',
    'Friday': 'শুক্রবার',
    'Friday only': 'শুধু শুক্রবার',
    'Appointment / Serial': 'অ্যাপয়েন্টমেন্ট / সিরিয়াল',
    'Call chamber': 'চেম্বারে কল করুন',
    'Need an appointment?': 'অ্যাপয়েন্টমেন্ট নিতে চান?',
    'Take the next step towards better movement.': 'স্বচ্ছন্দ চলাফেরার জন্য আজই পরামর্শ নিন।',
    'For appointment guidance and serial confirmation, call the chamber most convenient for you.': 'অ্যাপয়েন্টমেন্ট ও সিরিয়াল নিশ্চিত করতে আপনার সুবিধামতো চেম্বারে কল করুন।',
    'Chambers & phone numbers': 'চেম্বার ও ফোন নম্বর',
    'Send email': 'ইমেইল করুন',
    'Specialist care in Orthopaedics, Spine, Trauma and Joint Replacement.': 'অর্থোপেডিক্স, মেরুদণ্ড, ট্রমা ও জয়েন্ট রিপ্লেসমেন্টে বিশেষজ্ঞ চিকিৎসা।',
    'BM&DC Registration: A67050': 'BM&DC রেজিস্ট্রেশন: A67050',
    'Quick links': 'দ্রুত লিংক',
    'Appointments': 'অ্যাপয়েন্টমেন্ট',
    'Personal: 01719 166355': 'ব্যক্তিগত: 01719 166355',
    'Email': 'ইমেইল',
    'Dr Najmul Hasan. All rights reserved.': 'ডা. নাজমুল হাসান। সর্বস্বত্ব সংরক্ষিত।',
    'Back to top ↑': 'উপরে ফিরুন ↑'
  };

  const originalText = new WeakMap();
  const translateButton = document.querySelector('.floating-translate');

  function textNodes() {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest('script, style, svg, .floating-translate')) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) nodes.push(node);
    return nodes;
  }

  function toBanglaDigits(value) {
    const digits = { '0':'০', '1':'১', '2':'২', '3':'৩', '4':'৪', '5':'৫', '6':'৬', '7':'৭', '8':'৮', '9':'৯' };
    return value.replace(/[0-9]/g, d => digits[d]);
  }

  function setLanguage(toBangla) {
    textNodes().forEach(node => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const original = originalText.get(node);
      if (!toBangla) {
        node.nodeValue = original;
        return;
      }
      const trimmed = original.trim();
      const translated = bn[trimmed] || trimmed;
      const translatedWithDigits = toBanglaDigits(translated);
      node.nodeValue = original.replace(trimmed, translatedWithDigits);
    });

    document.documentElement.lang = toBangla ? 'bn' : 'en';
    document.documentElement.dir = 'ltr';
    document.body.classList.toggle('lang-bn', toBangla);

    if (translateButton) {
      translateButton.setAttribute('aria-pressed', String(toBangla));
      translateButton.setAttribute('aria-label', toBangla ? 'Switch page text to English' : 'মূল তথ্য বাংলায় দেখুন');
      const label = translateButton.querySelector('span');
      if (label) label.textContent = toBangla ? 'English' : 'বাংলা';
    }

    try { localStorage.setItem('drNajmulLanguage', toBangla ? 'bn' : 'en'); } catch (_) {}
  }

  if (translateButton) {
    translateButton.addEventListener('click', () => {
      setLanguage(document.documentElement.lang !== 'bn');
    });
  }

  let savedLanguage = 'en';
  try { savedLanguage = localStorage.getItem('drNajmulLanguage') || 'en'; } catch (_) {}
  if (savedLanguage === 'bn') setLanguage(true);
})();
