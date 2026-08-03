// Dark Mode Toggle
const darkModeIcon = document.getElementById('darkModeIcon');
const body = document.body;

// Check saved preference
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark');
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
}

darkModeIcon.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    } else {
        localStorage.setItem('darkMode', 'disabled');
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    }
});

// Navbar Scroll Effect
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Reveal Animation on Scroll
function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 120;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
document.addEventListener("DOMContentLoaded", reveal);

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('show');
    });
}

// Bilingual Support (Arabic/English)
const translations = {
    ar: {
        tagHotel: "فندق",
        tagPlumbing: "سباكة",
        tagElectric: "كهرباء",
        tagFire: "أنظمة الحريق",
        tagCompound: "كومباوند",
        tagFactory: "مصنع",
        tagFactorys: "مصانع",
        viewGallery: "عرض الصور",
        whatsapp: "واتساب",
        // القائمة العلوية (Navigation)
        navHome: "الرئيسية",
        navAbout: "من نحن",
        navDepartments: "الأقسام",
        navProjects: "المشاريع",
        navContact: "تواصل معنا",

        // قسم البطل (Hero)
        heroTitle: "كنوز الإنشاء التجارية",
        heroDesc: "حلول متكاملة في مواد السباكة والكهرباء وأنظمة الحريق بأعلى معايير الجودة",
        heroBtn: "تواصل معنا",

        // قسم المنتجات (Departments)
        deptTitle: "المنتجات",

        plumbingTitle: "مواد السباكة",
        plumbingDesc: "نوفر أحدث تقنيات السباكة للمشاريع السكنية والتجارية، أنابيب PPR، fittings، مضخات، وأدوات صحية فائقة الجودة من أفضل الماركات العالمية. حلول ذكية لشبكات المياه والصرف الصحي.",
        plumbingBtn: "استكشف القسم",

        electricTitle: "المواد الكهربائية",
        electricDesc: "جميع مستلزمات الكهرباء من كابلات معزولة، قواطع، لوحات توزيع، ومفاتيح ذكية. نعتمد أعلى معايير الأمان والكفاءة لتلبية متطلبات المشاريع الضخمة والمباني السكنية.",
        electricBtn: "استكشف القسم",

        fireTitle: "أنظمة الحريق",
        fireDesc: "أنظمة حريق معتمدة من الدفاع المدني، رشاشات أوتوماتيكية، أجهزة إنذار متطورة، وطفايات عالية الجودة. نضمن السلامة الكاملة لمشروعاتك بأحدث المواصفات العالمية.",
        fireBtn: "استكشف القسم",

        // قسم العلامات التجارية
        brandsTitle: "العلامات التجارية",

        // قسم المشاريع
        projectsTitle: "المشاريع",
        projectsViewAll: "عرض جميع المشاريع",

        // التذييل (Footer)
        footerTitle: "كنوز الإنشاء التجارية",
        footerDesc: "متخصصون في توريد مواد السباكة والكهرباء وأنظمة الحريق للمشاريع السكنية والتجارية، نعمل على تحقيق أعلى معايير الجودة والموثوقية.",
        footerLinks: "روابط الموقع",
        contactTitle: "تواصل معنا",
        whatsapp: "واتساب",
        location: "مكة - المملكة العربية السعودية",
        copyright: "كنوز الإنشاء التجارية. جميع الحقوق محفوظة",

        // صفحة من نحن (About Page)
        aboutHeroTitle: "من نحن",
        aboutHeroSub: "كنوز الإنشاء التجارية",
        aboutHeroDesc: "شريك موثوق لتوريد مواد السباكة والكهرباء وأنظمة الحريق",
        aboutIntro: "نوفر في كنوز الإنشاء التجارية حلولاً متكاملة في مواد السباكة، والأنظمة الكهربائية، وأنظمة مكافحة الحريق، لخدمة المشاريع السكنية والتجارية والصناعية. ونلتزم بتوفير منتجات موثوقة، وخدمة احترافية، وسرعة في التوريد، بما يدعم نجاح المشاريع في مختلف مراحل التنفيذ.",
        aboutFeaturesTitle: "ما الذي يميزنا؟",
        aboutFeaturesDesc: "نعتمد على أسس واضحة تجعلنا الخيار المناسب لتنفيذ المشاريع بكفاءة وثقة.",
        feature1: "جودة معتمدة",
        feature1Desc: "منتجات مختارة بعناية وفق المواصفات المطلوبة.",
        feature2: "سرعة التوريد",
        feature2Desc: "توفير احتياجات المشاريع في الوقت المناسب.",
        feature3: "خبرة عملية",
        feature3Desc: "فهم لاحتياجات المقاولين والاستشاريين.",
        feature4: "خدمة موثوقة",
        feature4Desc: "دعم مستمر قبل البيع وبعده.",
        aboutWorkTitle: "مجالات عملنا",
        work1: "السباكة",
        work1Desc: "حلول متكاملة لشبكات المياه والصرف الصحي تشمل المواسير، والوصلات، والمحابس، والمضخات، وجميع الملحقات.",
        work2: "الكهرباء",
        work2Desc: "كابلات وأسلاك ولوحات توزيع وقواطع ومستلزمات كهربائية تلبي احتياجات المشاريع المختلفة.",
        work3: "أنظمة الحريق",
        work3Desc: "أنظمة ومعدات مكافحة الحريق المصممة لتعزيز السلامة والامتثال للمعايير المعتمدة.",
        aboutStatsTitle: "أرقام تعكس خبرتنا",
        stat1: "عاماً من الخبرة",
        stat2: "مشروعاً",
        stat3: "منتج",
        stat4: "مورداً وشريكاً",
        aboutWhyTitle: "لماذا يختارنا عملاؤنا؟",
        aboutWhyDesc: "نعمل وفق معايير واضحة تضمن جودة المنتجات، وسرعة الاستجابة، والالتزام بالمواعيد، لأننا نؤمن أن الثقة تُبنى بالأداء وليس بالوعود.",
        why1: "الجودة",
        why1Desc: "منتجات مطابقة للمواصفات",
        why2: "الالتزام",
        why2Desc: "نلتزم بالجودة والمواعيد في كل مشروع",
        why3: "الموثوقية",
        why3Desc: "نلتزم بتقديم منتجات وخدمات يمكن الاعتماد عليها في كل مشروع.",
        why4: "خدمة العملاء",
        why4Desc: "دعم احترافي ومستمر",
        aboutHowTitle: "كيف نعمل؟",
        step1: "استلام الطلب",
        step1Desc: "نستقبل طلبك وندرس متطلبات مشروعك بدقة.",
        step2: "اختيار المنتجات المناسبة",
        step2Desc: "نقترح أفضل المنتجات التي تناسب احتياجاتك ومواصفات مشروعك.",
        step3: "التوريد والتسليم",
        step3Desc: "نوفر المنتجات ونلتزم بتسليمها في الوقت المتفق عليه.",
        step4: "الدعم والمتابعة",
        step4Desc: "نبقى على تواصل لتقديم الدعم والاستشارات بعد التوريد.",
        aboutCtaTitle: "هل تبحث عن مورد موثوق لمشروعك؟",
        aboutCtaDesc: "يسعد فريق كنوز الإنشاء التجارية بمساعدتك في اختيار المنتجات المناسبة وتقديم حلول تلبي احتياجات مشروعك بكفاءة وجودة.",
        aboutCtaBtn: "اطلب عرض سعر",

        // صفحة المنتجات (Products Page)
        productsHeroTitle: "أقسام المنتجات",
        productsHeroDesc: "نوفر مجموعة متكاملة من المواد عالية الجودة في مجالات السباكة، الكهرباء، وأنظمة الحريق، لدعم مشاريعك بثقة وكفاءة.",
        productsStat1: "منتج متوفر",
        productsStat2: "مورد معتمد",
        productsStat3: "عام خبرة",
        productsStat4: "مشروع منجز",
        productsPlumbingLabel: "القسم الأول",
        productsPlumbingTitle: "مواد السباكة",
        productsPlumbingDesc: "نقدم أحدث تقنيات السباكة للمشاريع السكنية والتجارية، تشمل أنابيب PPR وPVC وCPVC، fittings، مضخات، وأدوات صحية من أفضل الماركات العالمية.",
        productsPlumbingFeature1: "مواسير ووصلات",
        productsPlumbingFeature2: "محابس وخلاطات",
        productsPlumbingFeature3: "مضخات وخزانات",
        productsPlumbingFeature4: "أنظمة صرف صحي",
        productsPlumbingFeature5: "عوازل حرارية",
        productsPlumbingBtn: "استكشف القسم",
        productsPlumbingQuote: "اطلب عرض سعر",
        productsElectricLabel: "القسم الثاني",
        productsElectricTitle: "المواد الكهربائية",
        productsElectricDesc: "جميع مستلزمات الكهرباء من كابلات معزولة، قواطع، لوحات توزيع، ومفاتيح ذكية. نعتمد أعلى معايير الأمان والكفاءة للمشاريع الضخمة والمباني السكنية.",
        productsElectricFeature1: "أسلاك وكابلات",
        productsElectricFeature2: "قواطع كهربائية",
        productsElectricFeature3: "لوحات توزيع",
        productsElectricFeature4: "مفاتيح ومقابس",
        productsElectricFeature5: "أنظمة إنارة LED",
        productsElectricBtn: "استكشف القسم",
        productsElectricQuote: "اطلب عرض سعر",
        productsFireLabel: "القسم الثالث",
        productsFireTitle: "أنظمة الحريق",
        productsFireDesc: "أنظمة حريق معتمدة من الدفاع المدني، تشمل رشاشات أوتوماتيكية، أجهزة إنذار متطورة، وطفايات عالية الجودة. نضمن السلامة الكاملة لمشروعاتك.",
        productsFireFeature1: "رشاشات أوتوماتيكية",
        productsFireFeature2: "أجهزة إنذار وكواشف",
        productsFireFeature3: "طفايات حريق",
        productsFireFeature4: "مضخات حريق",
        productsFireFeature5: "أنظمة إطفاء بالغاز",
        productsFireBtn: "استكشف القسم",
        productsFireQuote: "اطلب عرض سعر",
        productsExtraTitle: "خدمات إضافية",
        productsExtraSub: "نقدم لك أكثر من مجرد منتجات، خدمات متكاملة لدعم مشروعك",
        productsService1: "شحن وتوصيل",
        productsService1Desc: "خدمة توصيل سريعة لجميع أنحاء المملكة، مع متابعة دقيقة للشحنات.",
        productsService2: "دعم فني متخصص",
        productsService2Desc: "فريق دعم فني جاهز للإجابة عن استفساراتك وتقديم المشورة الفنية.",
        productsService3: "ضمان الجودة",
        productsService3Desc: "جميع منتجاتنا معتمدة وتخضع لرقابة جودة صارمة لضمان الأداء.",
        productsService4: "استشارات فنية",
        productsService4Desc: "استشارات فنية مجانية لمساعدتك في اختيار المنتجات المناسبة لمشروعك.",
        productsCtaTitle: "هل تبحث عن منتج معين؟",
        productsCtaDesc: "فريقنا جاهز لمساعدتك في اختيار المواد المناسبة وتوفير عروض أسعار تنافسية لمشروعك.",
        productsCtaBtn: "تواصل معنا الآن",
        // صفحة المشاريع (Projects Page)
        projectsHeroTitle: "مشاريعنا",
        projectsHeroDesc: "نفخر بعرض أبرز المشاريع التي قمنا بتنفيذها بأعلى معايير الجودة والاحترافية",

        projectsHotelTitle: "المشاريع الفندقية",
        projectsResidentialTitle: "المجمعات السكنية",
        projectsFactoryTitle: "المصانع",

        project1Title: "شركة منى العقارية",
        project1Location: "مكة المكرمة، المملكة العربية السعودية",
        project1Desc: "توريد مواد السباكة والكهرباء وأنظمة الحريق لمشاريع شركة منى العقارية، مع توفير خدمات الصيانة السنوية لضمان كفاءة الأنظمة واستمرارية تشغيلها.",
        project1Detail1: "سباكة",
        project1Detail2: "كهرباء",
        project1Detail3: "أنظمة الحريق",
        project1Btn: "اطلب عرض سعر",
        project1Gallery: "معرض المشروع",

        project2Title: "فندق البلد الطيب - أجياد",
        project2Location: "مكة المكرمة، المملكة العربية السعودية",
        project2Desc: "توريد مواد السباكة والكهرباء وأنظمة الحريق لمشروع فندق البلد الطيب في منطقة أجياد، وفق أعلى معايير الجودة المستخدمة في المشاريع الفندقية.",
        project2Detail1: "سباكة",
        project2Detail2: "كهرباء",
        project2Detail3: "أنظمة الحريق",
        project2Btn: "اطلب عرض سعر",
        project2Gallery: "معرض المشروع",

        project3Title: "فندق البلد الطيب - العزيزية",
        project3Location: "مكة المكرمة، المملكة العربية السعودية",
        project3Desc: "توريد مواد السباكة والكهرباء وأنظمة الحريق لمشروع فندق البلد الطيب - العزيزية، مع توفير خدمات الصيانة السنوية لضمان كفاءة الأنظمة واستمرارية تشغيلها.",
        project3Detail1: "سباكة",
        project3Detail2: "كهرباء",
        project3Detail3: "أنظمة الحريق",
        project3Btn: "اطلب عرض سعر",
        project3Gallery: "معرض المشروع",

        project4Title: "فندق عبدالحافظ الحميدان",
        project4Location: "مكة المكرمة، المملكة العربية السعودية",
        project4Desc: "توريد مواد السباكة والكهرباء وأنظمة الحريق لمشروع فندق عبدالحافظ الحميدان، مع توفير خدمات الصيانة السنوية لضمان كفاءة الأنظمة واستمرارية تشغيلها.",
        project4Detail1: "سباكة",
        project4Detail2: "كهرباء",
        project4Detail3: "أنظمة الحريق",
        project4Btn: "اطلب عرض سعر",
        project4Gallery: "معرض المشروع",

        project5Title: "فندق سدرة الإحسان",
        project5Location: "مكة المكرمة، المملكة العربية السعودية",
        project5Desc: "توريد مواد السباكة والكهرباء وأنظمة الحريق لمشروع فندق سدرة الإحسان، مع توفير خدمات الصيانة السنوية لضمان كفاءة الأنظمة واستمرارية تشغيلها.",
        project5Detail1: "سباكة",
        project5Detail2: "كهرباء",
        project5Detail3: "أنظمة الحريق",
        project5Btn: "اطلب عرض سعر",
        project5Gallery: "معرض المشروع",

        project6Title: "كومباوند البساتين السكني – جدة",
        project6Location: "جدة، المملكة العربية السعودية",
        project6Desc: "توريد مواد السباكة والكهرباء وأنظمة الحريق لمشروع البساتين السكني، مع تقديم خدمات الصيانة الدورية لضمان أعلى معايير الجودة والسلامة.",
        project6Detail1: "سباكة",
        project6Detail2: "كهرباء",
        project6Btn: "اطلب عرض سعر",
        project6Gallery: "معرض المشروع",

        project7Title: "مصنع الوادي الأخضر",
        project7Location: "جدة - عسفان، المملكة العربية السعودية",
        project7Desc: "توريد مواد السباكة والكهرباء وأنظمة الحريق لمشروع مصنع الوادي الأخضر، مع توفير خدمات الصيانة السنوية لضمان كفاءة الأنظمة واستمرارية تشغيلها.",
        project7Detail1: "سباكة",
        project7Detail2: "كهرباء",
        project7Detail3: "أنظمة الحريق",
        project7Btn: "اطلب عرض سعر",
        project7Gallery: "معرض المشروع",

        project8Title: "مصنع سلوم الخير",
        project8Location: "مكة المكرمة، المملكة العربية السعودية",
        project8Desc: "توريد مواد السباكة والكهرباء وأنظمة الحريق لمشروع مصنع سلوم الخير، مع توفير خدمات الصيانة السنوية لضمان كفاءة الأنظمة واستمرارية تشغيلها.",
        project8Detail1: "سباكة",
        project8Detail2: "كهرباء",
        project8Detail3: "أنظمة الحريق",
        project8Btn: "اطلب عرض سعر",
        project8Gallery: "معرض المشروع",
        projectMore: "المزيد",
        // صفحة تواصل معنا (Contact Page)
        contactHeroTitle: "تواصل معنا",
        contactHeroDesc: "فريقنا جاهز للإجابة عن استفساراتك، وتقديم عروض الأسعار، ومساعدتك في اختيار المنتجات المناسبة لمشروعك. تواصل معنا بالطريقة التي تناسبك.",

        contactResponse: "نلتزم بالرد على جميع الاستفسارات خلال ساعات العمل",
        contactResponseSpan: "في أسرع وقت ممكن.",

        contactSales: "المبيعات",
        contactPhone: "رقم الهاتف",
        contactCustomerService: "خدمة العملاء",

        contactWhatsappLabel: "تواصل فوري",
        contactWhatsappTitle: "واتساب",
        contactWhatsappDesc: "تواصل معنا مباشرة للحصول على رد سريع.",

        contactEmailLabel: "أرسل بريداً",
        contactEmailTitle: "البريد الإلكتروني",

        contactFormTitle: "أرسل لنا رسالة",
        contactFormSub: "املأ النموذج وسنرد عليك في أقرب وقت",

        contactFormName: "الاسم الكامل",
        contactFormNamePlaceholder: "أدخل اسمك",
        contactFormPhone: "رقم الجوال",
        contactFormPhonePlaceholder: "أدخل رقم جوالك",
        contactFormEmail: "البريد الإلكتروني",
        contactFormEmailPlaceholder: "example@domain.com",
        contactFormCompany: "اسم الشركة",
        contactFormCompanyPlaceholder: "اسم شركتك",
        contactFormCompanyOptional: "(اختياري)",
        contactFormInquiry: "نوع الاستفسار",
        contactFormInquiryPlaceholder: "اختر نوع الاستفسار",
        contactFormInquiryQuote: "طلب عرض سعر",
        contactFormInquiryProducts: "استفسار عن منتج",
        contactFormInquiryProjects: "استفسار عن مشروع",
        contactFormInquirySupport: "دعم فني",
        contactFormInquiryOther: "استفسار عام",
        contactFormMessage: "الرسالة",
        contactFormMessagePlaceholder: "اكتب رسالتك بالتفصيل...",
        contactFormSubmit: "إرسال الرسالة",
        contactFormRequired: "الرجاء تعبئة جميع الحقول المطلوبة",
        contactFormSuccess: "✅ شكراً لتواصلك معنا. تم استلام رسالتك وسيقوم فريقنا بالرد عليك في أقرب وقت.",

        contactMapTitle: "موقعنا",
        contactMapAddress: "مكة - طريق الملك فهد، حي المغرزات",
        contactMapCountry: "المملكة العربية السعودية",

        contactHoursTitle: "ساعات العمل",
        contactHoursWeek: "السبت - الخميس",
        contactHoursWeekTime: "8:00 صباحاً – 6:00 مساءً",
        contactHoursFriday: "الجمعة",
        contactHoursFridayClosed: "مغلق",
        contactHoursSupport: "خدمة العملاء",
        contactHoursSupportTime: "متاحة على مدار الساعة",
        contactHoursBadge: "دعم فوري",

        contactFaqTitle: "أسئلة شائعة",
        contactFaqSub: "إجابات لأكثر الأسئلة التي تهم عملاءنا",
        contactFaq1Q: "كم تستغرق عملية التوريد؟",
        contactFaq1A: "تختلف المدة حسب حجم الطلب ونوع المنتجات، لكننا نحرص على الالتزام بالجدول الزمني المتفق عليه في كل مشروع.",
        contactFaq2Q: "هل تقدمون ضماناً على المنتجات؟",
        contactFaq2A: "نعم، جميع منتجاتنا تأتي بضمان الجودة من المصنع، مع دعم فني متخصص لضمان الأداء الأمثل.",
        contactFaq3Q: "هل يمكنكم توريد كميات كبيرة؟",
        contactFaq3A: "بالتأكيد، نتعامل مع المشاريع بمختلف أحجامها ونملك القدرة على توفير كميات كبيرة وفق احتياجات المشروع.",
        contactFaq4Q: "كيف أحصل على عرض سعر؟",
        contactFaq4A: "يمكنك ملء نموذج التواصل أو الاتصال بنا مباشرة، وسنقوم بإعداد عرض سعر مفصل خلال وقت قصير.",

        contactCtaTitle: "هل تحتاج إلى عرض سعر أو استشارة؟",
        contactCtaDesc: "يسعد فريق كنوز الإنشاء التجارية بمساعدتك في اختيار المنتجات المناسبة وتقديم أفضل الحلول لمشروعك.",
        contactCtaBtn: "تواصل عبر واتساب",





        // =============================================================

        // صفحة السباكة (Plumbing Page)
        plumbingHeroTitle: "مواد السباكة",
        plumbingHeroDesc: "أحدث وأجود مواد السباكة للمشاريع السكنية والتجارية من أفضل الماركات العالمية",
        plumbingBackBtn: "العودة للأقسام",

        // الأقسام الرئيسية
        plumbingCat1Title: "المواسير",
        plumbingCat1Desc: "تشكيلة كاملة من المواسير عالية الجودة لمختلف التطبيقات الصناعية والسكنية.",

        plumbingCat2Title: "الوصلات",
        plumbingCat2Desc: "جميع أنواع الوصلات لتوصيل الأنابيب باحترافية ومتانة عالية.",

        plumbingCat3Title: "المحابس",
        plumbingCat3Desc: "تحكم دقيق في تدفق المياه بفضل محابس عالية الجودة ومقاومة للتآكل.",

        plumbingCat4Title: "الصرف الصحي",
        plumbingCat4Desc: "حلول متكاملة لأنظمة الصرف الصحي لمنع الروائح وضمان التدفق السلس.",

        plumbingCat5Title: "مواد التركيب",
        plumbingCat5Desc: "كل ما يحتاجه السباك المحترف من مواد عزل ولصق وتثبيت.",

        plumbingCat6Title: "أنظمة المياه",
        plumbingCat6Desc: "مضخات وخزانات وفلاتر لضمان كفاءة وأمان شبكة المياه لديك.",

        // زر عرض المنتجات
        plumbingShowProducts: "عرض المنتجات",
        plumbingCode: "رمز",
        plumbingAvailable: "متوفر",
        plumbingQuote: "طلب عرض سعر",
        plumbingProductDetails: "تفاصيل المنتج",

        // منتجات المواسير
        productPipe1: "مواسير PVC",
        productPipe1Desc: "مواسير بولي فينيل كلوريد متعددة الاستخدامات.",
        productPipe2: "مواسير PPR",
        productPipe2Desc: "مواسير بولى بروبلين مقاومة للحرارة والضغط.",
        productPipe3: "مواسير CPVC",
        productPipe3Desc: "مواسير كلوريد البولي فينيل كلوريد للمياه الساخنة.",
        productPipe4: "مواسير HDPE",
        productPipe4Desc: "مواسير بولي إيثيلين عالي الكثافة للمشاريع الكبرى.",
        productPipe5: "مواسير مجلفنة",
        productPipe5Desc: "مواسير حديد مجلفن مقاومة للصدأ والتآكل.",
        productPipe6: "مواسير صرف صحي",
        productPipe6Desc: "مواسير صرف صحي عالية الجودة ومقاومة للانسدادات.",

        // منتجات الوصلات
        productFitting1: "كوع (Elbow)",
        productFitting1Desc: "كوع بزوايا مختلفة لتغيير اتجاه الأنابيب.",
        productFitting2: "تي (Tee)",
        productFitting2Desc: "وصلة تي لتفرع الأنابيب بثلاثة اتجاهات.",
        productFitting3: "جلبة (Coupling)",
        productFitting3Desc: "وصلة لتوصيل أنبوبين بنفس القطر.",
        productFitting4: "مخفض (Reducer)",
        productFitting4Desc: "وصلة لتوصيل أنبوبين بأقطار مختلفة.",
        productFitting5: "وصلة يونيون (Union)",
        productFitting5Desc: "وصلة قابلة للفك لتسهيل الصيانة.",
        productFitting6: "غطاء نهاية (End Cap)",
        productFitting6Desc: "غطاء لإغلاق نهاية الأنابيب.",

        // منتجات المحابس
        productValve1: "محبس كروي",
        productValve1Desc: "محبس كروي للتحكم السريع في تدفق المياه.",
        productValve2: "محبس بوابة",
        productValve2Desc: "محبس بوابة للتحكم الكامل في تدفق المياه.",
        productValve3: "محبس عدم رجوع",
        productValve3Desc: "يمنع تدفق المياه في الاتجاه العكسي.",
        productValve4: "محبس زاوية",
        productValve4Desc: "محبس بزاوية 90 درجة للتركيبات الضيقة.",
        productValve5: "محبس فراشة",
        productValve5Desc: "محبس فراشة للتحكم في التدفقات الكبيرة.",
        productValve6: "محبس عوامة",
        productValve6Desc: "محبس أوتوماتيكي لخزانات المياه.",

        // منتجات الصرف الصحي
        productDrain1: "مصرف أرضي",
        productDrain1Desc: "مصرف أرضي للمطابخ والحمامات.",
        productDrain2: "مصيدة P",
        productDrain2Desc: "مصيدة على شكل P لمنع الروائح.",
        productDrain3: "مصيدة S",
        productDrain3Desc: "مصيدة على شكل S للحمامات والمطابخ.",
        productDrain4: "فتحة تنظيف",
        productDrain4Desc: "فتحة تنظيف لصيانة أنابيب الصرف.",
        productDrain5: "مصيدة روائح",
        productDrain5Desc: "مصيدة متخصصة لمنع الروائح الكريهة.",

        // منتجات مواد التركيب
        productTool1: "شريط تيفلون",
        productTool1Desc: "شريط تيفلون لعزل الوصلات ومنع التسرب.",
        productTool2: "غراء PVC",
        productTool2Desc: "غراء خاص لتثبيت مواسير PVC.",
        productTool3: "مشابك الأنابيب",
        productTool3Desc: "مشابك لتثبيت الأنابيب على الجدران.",
        productTool4: "عزل الأنابيب",
        productTool4Desc: "مواد عزل للأنابيب للحفاظ على الحرارة.",
        productTool5: "مواد عزل حراري",
        productTool5Desc: "مواد عزل حراري عالية الجودة للأنابيب.",

        // منتجات أنظمة المياه
        productSystem1: "مضخة مياه",
        productSystem1Desc: "مضخة مياه عالية الكفاءة للمنازل والمشاريع.",
        productSystem2: "منظم الضغط",
        productSystem2Desc: "منظم ضغط المياه للحفاظ على تدفق منتظم.",
        productSystem3: "فلتر مياه",
        productSystem3Desc: "فلتر مياه لتنقية المياه من الشوائب.",

        // =============================================================

        // صفحة الكهرباء (Electric Page)
        electricHeroTitle: "المواد الكهربائية",
        electricHeroDesc: "أحدث وأجود المواد الكهربائية للمشاريع السكنية والتجارية من أفضل الماركات العالمية",
        electricBackBtn: "العودة للأقسام",

        // الأقسام الرئيسية
        electricCat1Title: "الأسلاك والكابلات",
        electricCat1Desc: "كابلات وأسلاك كهربائية عالية الجودة بمواصفات قياسية لمختلف الاستخدامات.",

        electricCat2Title: "القواطع الكهربائية",
        electricCat2Desc: "قواطع كهربائية معتمدة لحماية الدوائر والمعدات من الأعطال.",

        electricCat3Title: "اللوحات الكهربائية",
        electricCat3Desc: "لوحات توزيع كهربائية بأنواعها المختلفة للمشاريع الصغيرة والكبيرة.",

        electricCat4Title: "المفاتيح والمقابس",
        electricCat4Desc: "تشكيلة واسعة من المفاتيح والمقابس الكهربائية العصرية عالية الجودة.",

        electricCat5Title: "أنظمة الإنارة",
        electricCat5Desc: "حلول إنارة متكاملة لتوفير الطاقة وجودة الإضاءة المثالية.",

        electricCat6Title: "معدات الحماية",
        electricCat6Desc: "معدات السلامة والحماية الكهربائية للعاملين والمشاريع.",

        electricCat7Title: "أنظمة التحكم",
        electricCat7Desc: "أجهزة ومعدات التحكم الآلي في الأنظمة الكهربائية.",

        // زر عرض المنتجات
        electricShowProducts: "عرض المنتجات",
        electricCode: "رمز",
        electricAvailable: "متوفر",
        electricQuote: "طلب عرض سعر",

        // منتجات الأسلاك والكابلات
        electricProduct1: "أسلاك نحاسية الفنار",
        electricProduct1Desc: "أسلاك نحاسية عالية النقاوة معزولة بطبقات متينة.",
        electricProduct2: "كابلات XLPE الجهد المنخفض",
        electricProduct2Desc: "كابلات للجهد المنخفض (حتى 1000 فولت).",
        electricProduct3: "كابلات الإنترنت CAT6",
        electricProduct3Desc: "كابلات للجهد المتوسط للمشاريع الكبرى.",
        electricProduct4: "كابلات الألمنيوم",
        electricProduct4Desc: "كابلات ألمنيوم خفيفة الوزن ومنخفضة التكلفة.",
        electricProduct5: "كابلات التحكم",
        electricProduct5Desc: "كابلات مخصصة لأنظمة التحكم والأتمتة.",
        electricProduct6: "كابلات الأرضي",
        electricProduct6Desc: "كابلات التأريض للحماية من الصدمات الكهربائية.",

        // منتجات القواطع
        electricProduct7: "قاطع MCB شنايدر",
        electricProduct7Desc: "قاطع تيار مصغر للحماية من الحمل الزائد والدوائر القصيرة.",
        electricProduct8: "قاطع RCCB شنايدر",
        electricProduct8Desc: "قاطع للحماية من تسرب التيار الكهربائي للأرضي.",
        electricProduct9: "قاطع مدمج RCBO شنايدر",
        electricProduct9Desc: "قاطع يجمع بين وظائف MCB و RCCB في جهاز واحد.",
        electricProduct10: "قاطع MCCB شنايدر",
        electricProduct10Desc: "قاطع رئيسي قالب للتيارات العالية في اللوحات الرئيسية.",
        electricProduct11: "قاطع هوائي ACB",
        electricProduct11Desc: "قاطع هوائي للتيارات العالية جداً في المشاريع الكبرى.",
        electricProduct12: "فيوزات كهربائية",
        electricProduct12Desc: "فيوزات منزلقة للحماية الإضافية للدوائر الكهربائية.",

        // منتجات اللوحات
        electricProduct13: "لوحات توزيع ACTI9 شنايدر",
        electricProduct13Desc: "لوحات توزيع رئيسية للمشاريع الكبرى بمواصفات عالية.",
        electricProduct14: "لوحات توزيع فرعية",
        electricProduct14Desc: "لوحات توزيع فرعية للتوزيع الداخلي في المباني.",
        electricProduct15: "لوحات تحكم أوتوماتيكية",
        electricProduct15Desc: "لوحات تحكم أوتوماتيكية مع مبدلات ATS.",
        electricProduct16: "لوحات توزيع RESBO",
        electricProduct16Desc: "لوحات مكثفات لتحسين معامل القدرة وتوفير الطاقة.",
        electricProduct17: "لوحات إنارة الطوارئ",
        electricProduct17Desc: "لوحات خاصة بأنظمة إنارة الطوارئ في المباني.",
        electricProduct18: "صناديق التوزيع البلاستيكية",
        electricProduct18Desc: "صناديق توزيع بلاستيكية خفيفة وعازلة للكهرباء.",

        // منتجات المفاتيح والمقابس
        electricProduct19: "مفاتيح أحادية",
        electricProduct19Desc: "مفاتيح كهربائية أحادية القطب بتصميمات عصرية.",
        electricProduct20: "مفاتيح ثنائية",
        electricProduct20Desc: "مفاتيح ثنائية وثلاثية القطب للتحكم المتعدد.",
        electricProduct21: "مفاتيح ثلاثية",
        electricProduct21Desc: "مفاتيح في صندوق بلاستيكي للحماية من العوامل الخارجية.",
        electricProduct22: "افياش كهرباء عادية",
        electricProduct22Desc: "مقابس كهربائية قياسية للاستخدام المنزلي والتجاري.",
        electricProduct23: "افياش كهرباء أرضي",
        electricProduct23Desc: "مقابس مع نقطة تأريض للحماية الإضافية.",
        electricProduct24: "افياش USB",
        electricProduct24Desc: "مقابس مع منافذ USB لشحن الأجهزة مباشرة.",

        // منتجات الإنارة
        electricProduct25: "لمبات LED",
        electricProduct25Desc: "لمبات LED موفرة للطاقة وعمر طويل يصل لـ 50,000 ساعة.",
        electricProduct26: "لمبات موفرة للطاقة",
        electricProduct26Desc: "لمبات فلورسنت مدمجة موفرة للطاقة بتكلفة مناسبة.",
        electricProduct27: "أضواء كاشفة (سبوت لايت)",
        electricProduct27Desc: "أضواء كاشفة مركزة للإضاءة المميزة والديكورية.",
        electricProduct28: "أضواء لوحة (Panel Light)",
        electricProduct28Desc: "أضواء لوحة مسطحة للأسقف المعلقة والمكاتب.",
        electricProduct29: "أعمدة إنارة خارجية",
        electricProduct29Desc: "أعمدة إنارة للحدائق والشوارع بتصميمات متعددة.",
        electricProduct30: "إنارة الطوارئ",
        electricProduct30Desc: "أجهزة إنارة تعمل بالبطارية للحالات الطارئة.",

        // منتجات معدات الحماية
        electricProduct31: "قفازات عازلة",
        electricProduct31Desc: "قفازات عازلة للكهرباء لحماية العاملين.",
        electricProduct32: "أحذية عازلة",
        electricProduct32Desc: "أحذية أمان عازلة للكهرباء ومقاومة للانزلاق.",
        electricProduct33: "خوذات أمان",
        electricProduct33Desc: "خوذات أمان عازلة ومقاومة للصدمات.",
        electricProduct34: "أجهزة كشف التيار",
        electricProduct34Desc: "أجهزة محمولة لكشف التيار والجهد الكهربائي.",
        electricProduct35: "لافتات تحذيرية",
        electricProduct35Desc: "لافتات تحذيرية لمخاطر الكهرباء لسلامة الجميع.",
        electricProduct36: "طفايات حرائق كهربائية",
        electricProduct36Desc: "طفايات حرائق مناسبة للحرائق الكهربائية.",

        // منتجات أنظمة التحكم
        electricProduct37: "مرحلات (Relays)",
        electricProduct37Desc: "مرحلات كهربائية للتحكم في الدوائر عن بعد.",
        electricProduct38: "كونتاكتورات (Contactors)",
        electricProduct38Desc: "كونتاكتورات للتحكم في الأحمال الكهربائية الكبيرة.",
        electricProduct39: "تايمرات (Timers)",
        electricProduct39Desc: "تايمرات برمجية للتحكم الزمني في الدوائر الكهربائية.",
        electricProduct40: "ثرموستاتات",
        electricProduct40Desc: "ثرموستات للتحكم في أنظمة التدفئة والتبريد.",
        electricProduct41: "وحدات تحكم PLC",
        electricProduct41Desc: "وحدات تحكم منطقية قابلة للبرمجة للأتمتة الصناعية.",
        electricProduct42: "أجهزة قياس كهربائية",
        electricProduct42Desc: "أجهزة قياس الجهد، التيار، والمقاومة بدقة عالية.",

        // =============================================================

        // صفحة أنظمة الحريق (Fire Page)
        fireHeroTitle: "أنظمة الحريق",
        fireHeroDesc: "أنظمة حريق معتمدة من الدفاع المدني بأعلى معايير السلامة والأمان للمشاريع السكنية والتجارية",
        fireBackBtn: "العودة للأقسام",

        // الأقسام الرئيسية
        fireCat1Title: "أنظمة الرش الآلي",
        fireCat1Desc: "رشاشات حريق أوتوماتيكية بكفاءة عالية للاستجابة السريعة عند اندلاع الحرائق.",
        fireCat1Badge: "معتمدة من الدفاع المدني",

        fireCat2Title: "أنظمة الإنذار",
        fireCat2Desc: "أجهزة إنذار ذكية للكشف المبكر عن الحرائق وحماية الأرواح والممتلكات.",
        fireCat2Badge: "تقنية حديثة",

        fireCat3Title: "طفايات الحريق",
        fireCat3Desc: "طفايات حريق بأنواعها المختلفة لمكافحة جميع أنواع الحرائق.",
        fireCat3Badge: "شهادة جودة",

        fireCat4Title: "مواسير الحريق",
        fireCat4Desc: "مواسير وأنابيب خاصة بأنظمة الحريق عالية الضغط والمتانة.",
        fireCat4Badge: "مقاومة للحريق",

        fireCat5Title: "مضخات الحريق",
        fireCat5Desc: "مضخات حريق قوية لتزويد شبكات الحريق بالمياه اللازمة.",
        fireCat5Badge: "قدرات عالية",

        // زر عرض المنتجات
        fireShowProducts: "عرض المنتجات",
        fireCode: "رمز",
        fireAvailable: "متوفر",
        fireCertified: "معتمد",
        fireQuote: "طلب عرض سعر",

        // منتجات الرشاشات
        fireProduct1: "رشاشات حريق معلقة تايكو",
        fireProduct1Desc: "رشاشات حريق معلقة للسقف بدرجات حرارة متعددة.",
        fireProduct2: "رشاشات حريق نائمة",
        fireProduct2Desc: "رشاشات نائمة للأسقف المخفية بتصميم أنيق.",
        fireProduct3: "رشاشات حريق جانبية",
        fireProduct3Desc: "رشاشات جانبية للتركيب على الجدران في الأماكن الضيقة.",
        fireProduct4: "رشاشات الحريق المفتوحة",
        fireProduct4Desc: "رشاشات مفتوحة لأنظمة الإطفاء بالمياه.",
        fireProduct5: "رشاشات متعددة الحرارة",
        fireProduct5Desc: "رشاشات بدرجات حرارة مختلفة (68°C، 93°C، 141°C).",
        fireProduct6: "صمامات فحص الرشاشات",
        fireProduct6Desc: "صمامات فحص ومراقبة لأنظمة الرشاشات.",

        // منتجات الإنذار
        fireProduct7: "كاشفات الدخان",
        fireProduct7Desc: "كاشفات دخان أيونية وبصرية عالية الحساسية.",
        fireProduct8: "كاشفات الحرارة",
        fireProduct8Desc: "كاشفات حرارة ثابتة ومتزايدة للحماية من الحرائق.",
        fireProduct9: "كاشفات اللهب",
        fireProduct9Desc: "كاشفات اللهب بالأشعة فوق البنفسجية وتحت الحمراء.",
        fireProduct10: "كاشفات أول أكسيد الكربون",
        fireProduct10Desc: "كاشفات الغاز السام للكشف المبكر عن تسربات أول أكسيد الكربون.",
        fireProduct11: "أجراس الإنذار",
        fireProduct11Desc: "أجراس إنذار عالية الصوت لتنبيه الجميع.",
        fireProduct12: "صفارات الإنذار",
        fireProduct12Desc: "صفارات إنذار إلكترونية بأصوات متعددة.",

        // منتجات الطفايات
        fireProduct13: "طفاية بودرة جافة",
        fireProduct13Desc: "طفاية بودرة جافة متعددة الاستخدامات لجميع أنواع الحرائق.",
        fireProduct14: "طفاية CO2",
        fireProduct14Desc: "طفاية ثاني أكسيد الكربون للحرائق الكهربائية والمعدات الحساسة.",
        fireProduct15: "طفاية رغوية",
        fireProduct15Desc: "طفاية رغوية للحرائق السائلة والزيوت المشتعلة.",
        fireProduct16: "طفاية مياه مضغوطة",
        fireProduct16Desc: "طفاية مياه مضغوطة للحرائق العادية (خشب، ورق، أقمشة).",
        fireProduct17: "طفاية مواد كيميائية جافة",
        fireProduct17Desc: "طفاية مواد كيميائية جافة للحرائق الكهربائية والغازية.",
        fireProduct18: "طفايات عجلات (متحركة)",
        fireProduct18Desc: "طفايات كبيرة على عجلات للمنشآت والمستودعات.",

        // منتجات المواسير
        fireProduct19: "مواسير حريق مجلفنة",
        fireProduct19Desc: "مواسير مجلفنة لأنظمة الحريق مقاومة للصدأ.",
        fireProduct20: "مواسير حديد الزهر",
        fireProduct20Desc: "مواسير حديد زهر عالية التحمل والمتانة.",
        fireProduct21: "مواسير نحاسية",
        fireProduct21Desc: "مواسير نحاسية لأنظمة الحريق والرشاشات.",
        fireProduct22: "مواسير CPVC",
        fireProduct22Desc: "مواسير CPVC البلاستيكية لأنظمة الحريق.",
        fireProduct23: "وصلات وملحقات الحريق",
        fireProduct23Desc: "وصلات وملحقات مواسير الحريق بجميع الأحجام.",
        fireProduct24: "محابس حريق",
        fireProduct24Desc: "محابس حريق للتحكم في تدفق مياه الإطفاء.",

        // منتجات المضخات
        fireProduct25: "مضخات حريق أفقية",
        fireProduct25Desc: "مضخات أفقية بأنظمة الدفع الأفقي.",
        fireProduct26: "مضخات حريق عمودية",
        fireProduct26Desc: "مضخات عمودية لتوفير المساحة وكفاءة عالية.",


    },

    en: {
        tagHotel: "Hotel",
        tagPlumbing: "Plumbing",
        tagElectric: "Electric",
        tagFire: "Fire Systems",
        tagCompound: "Compound",
        tagFactorys: "Factorys",
        viewGallery: "View Images",
        whatsapp: "WhatsApp",
        // Navigation
        navHome: "Home",
        navAbout: "About Us",
        navDepartments: "Departments",
        navProjects: "Projects",
        navContact: "Contact Us",

        // Hero Section
        heroTitle: "Konouz Commercial Construction",
        heroDesc: "Integrated solutions for plumbing, electrical, and fire fighting systems with the highest quality standards",
        heroBtn: "Contact Us",

        // Departments Section
        deptTitle: "Our Products",

        plumbingTitle: "Plumbing Materials",
        plumbingDesc: "We provide the latest plumbing technologies for residential and commercial projects, including PPR pipes, fittings, pumps, and high-quality sanitary ware from top global brands. Smart solutions for water and sewage networks.",
        plumbingBtn: "Explore Section",

        electricTitle: "Electrical Materials",
        electricDesc: "All electrical supplies including insulated cables, circuit breakers, distribution boards, and smart switches. We adhere to the highest safety and efficiency standards to meet the requirements of mega projects and residential buildings.",
        electricBtn: "Explore Section",

        fireTitle: "Fire Fighting Systems",
        fireDesc: "Civil Defense approved fire systems, automatic sprinklers, advanced alarm devices, and high-quality fire extinguishers. We ensure complete safety for your projects with the latest international specifications.",
        fireBtn: "Explore Section",

        // Brands Section
        brandsTitle: "Our Brands",

        // Projects Section
        projectsTitle: "Our Projects",
        projectsViewAll: "View All Projects",

        // Footer
        footerTitle: "Konouz Commercial Construction",
        footerDesc: "Specialized in supplying plumbing, electrical, and fire fighting materials for residential and commercial projects. We strive to achieve the highest standards of quality and reliability.",
        footerLinks: "Site Links",
        contactTitle: "Contact Us",
        whatsapp: "WhatsApp",
        location: "makkah - Kingdom of Saudi Arabia",
        copyright: "Konouz Commercial Construction. All Rights Reserved",

        // About Page
        aboutHeroTitle: "About Us",
        aboutHeroSub: "Konouz Commercial Construction",
        aboutHeroDesc: "A trusted partner for supplying plumbing, electrical, and fire fighting systems",
        aboutIntro: "At Konouz Commercial Construction, we provide integrated solutions for plumbing materials, electrical systems, and fire fighting systems to serve residential, commercial, and industrial projects. We are committed to providing reliable products, professional service, and fast delivery to support the success of projects at various implementation stages.",
        aboutFeaturesTitle: "What Sets Us Apart?",
        aboutFeaturesDesc: "We rely on clear foundations that make us the right choice for implementing projects efficiently and confidently.",
        feature1: "Certified Quality",
        feature1Desc: "Carefully selected products according to required specifications.",
        feature2: "Fast Delivery",
        feature2Desc: "Providing project needs in a timely manner.",
        feature3: "Practical Experience",
        feature3Desc: "Understanding the needs of contractors and consultants.",
        feature4: "Reliable Service",
        feature4Desc: "Continuous support before and after sales.",
        aboutWorkTitle: "Our Work Areas",
        work1: "Plumbing",
        work1Desc: "Integrated solutions for water and sewage networks including pipes, fittings, valves, pumps, and all accessories.",
        work2: "Electrical",
        work2Desc: "Cables, wires, distribution boards, circuit breakers, and electrical supplies that meet the needs of various projects.",
        work3: "Fire Fighting Systems",
        work3Desc: "Fire fighting systems and equipment designed to enhance safety and compliance with approved standards.",
        aboutStatsTitle: "Numbers That Reflect Our Experience",
        stat1: "Years of Experience",
        stat2: "Projects",
        stat3: "Products",
        stat4: "Suppliers & Partners",
        aboutWhyTitle: "Why Do Our Clients Choose Us?",
        aboutWhyDesc: "We work according to clear standards that ensure product quality, quick response, and commitment to deadlines, because we believe that trust is built through performance, not promises.",
        why1: "Quality",
        why1Desc: "Products that meet specifications",
        why2: "Commitment",
        why2Desc: "We commit to quality and deadlines in every project",
        why3: "Reliability",
        why3Desc: "We are committed to providing products and services that can be relied upon in every project.",
        why4: "Customer Service",
        why4Desc: "Professional and continuous support",
        aboutHowTitle: "How We Work?",
        step1: "Receiving the Order",
        step1Desc: "We receive your request and study your project requirements carefully.",
        step2: "Selecting the Right Products",
        step2Desc: "We suggest the best products that suit your needs and project specifications.",
        step3: "Supply & Delivery",
        step3Desc: "We provide the products and commit to delivering them on the agreed time.",
        step4: "Support & Follow-up",
        step4Desc: "We stay in touch to provide support and consultations after delivery.",
        aboutCtaTitle: "Looking for a Reliable Supplier for Your Project?",
        aboutCtaDesc: "The Konouz Commercial Construction team is happy to help you choose the right products and provide solutions that meet your project needs efficiently and with quality.",
        aboutCtaBtn: "Request a Quote",

        // Products Page
        productsHeroTitle: "Products Sections",
        productsHeroDesc: "We provide a comprehensive range of high-quality materials in plumbing, electrical, and fire fighting systems to support your projects with confidence and efficiency.",
        productsStat1: "Products Available",
        productsStat2: "Certified Suppliers",
        productsStat3: "Years of Experience",
        productsStat4: "Projects Completed",
        productsPlumbingLabel: "Section One",
        productsPlumbingTitle: "Plumbing Materials",
        productsPlumbingDesc: "We offer the latest plumbing technologies for residential and commercial projects, including PPR, PVC, and CPVC pipes, fittings, pumps, and sanitary ware from top global brands.",
        productsPlumbingFeature1: "Pipes & Fittings",
        productsPlumbingFeature2: "Valves & Mixers",
        productsPlumbingFeature3: "Pumps & Tanks",
        productsPlumbingFeature4: "Drainage Systems",
        productsPlumbingFeature5: "Thermal Insulation",
        productsPlumbingBtn: "Explore Section",
        productsPlumbingQuote: "Request a Quote",
        productsElectricLabel: "Section Two",
        productsElectricTitle: "Electrical Materials",
        productsElectricDesc: "All electrical supplies including insulated cables, circuit breakers, distribution boards, and smart switches. We adhere to the highest safety and efficiency standards for mega projects and residential buildings.",
        productsElectricFeature1: "Wires & Cables",
        productsElectricFeature2: "Circuit Breakers",
        productsElectricFeature3: "Distribution Boards",
        productsElectricFeature4: "Switches & Sockets",
        productsElectricFeature5: "LED Lighting Systems",
        productsElectricBtn: "Explore Section",
        productsElectricQuote: "Request a Quote",
        productsFireLabel: "Section Three",
        productsFireTitle: "Fire Fighting Systems",
        productsFireDesc: "Civil Defense approved fire systems, including automatic sprinklers, advanced alarm devices, and high-quality fire extinguishers. We ensure complete safety for your projects.",
        productsFireFeature1: "Automatic Sprinklers",
        productsFireFeature2: "Alarms & Detectors",
        productsFireFeature3: "Fire Extinguishers",
        productsFireFeature4: "Fire Pumps",
        productsFireFeature5: "Gas Fire Suppression",
        productsFireBtn: "Explore Section",
        productsFireQuote: "Request a Quote",
        productsExtraTitle: "Additional Services",
        productsExtraSub: "We offer more than just products - integrated services to support your project",
        productsService1: "Shipping & Delivery",
        productsService1Desc: "Fast delivery service across the Kingdom, with precise shipment tracking.",
        productsService2: "Technical Support",
        productsService2Desc: "A dedicated technical support team ready to answer your inquiries and provide technical advice.",
        productsService3: "Quality Assurance",
        productsService3Desc: "All our products are certified and undergo strict quality control to ensure performance.",
        productsService4: "Technical Consultations",
        productsService4Desc: "Free technical consultations to help you choose the right products for your project.",
        productsCtaTitle: "Looking for a Specific Product?",
        productsCtaDesc: "Our team is ready to help you select the right materials and provide competitive quotes for your project.",
        productsCtaBtn: "Contact Us Now",
        // Projects Page
        projectsHeroTitle: "Our Projects",
        projectsHeroDesc: "We are proud to showcase our most prominent projects executed with the highest quality and professionalism standards",

        projectsHotelTitle: "Hotel Projects",
        projectsResidentialTitle: "Residential Complexes",
        projectsFactoryTitle: "Factories",

        project1Title: "Mena Real Estate Company",
        project1Location: "Makkah Al-Mukarramah, Kingdom of Saudi Arabia",
        project1Desc: "Supplying plumbing, electrical, and fire fighting materials for Mena Real Estate Company projects, with annual maintenance services to ensure system efficiency and operational continuity.",
        project1Detail1: "Plumbing",
        project1Detail2: "Electrical",
        project1Detail3: "Fire Fighting Systems",
        project1Btn: "Request a Quote",
        project1Gallery: "Project Gallery",

        project2Title: "Al-Bald Al-Tayyib Hotel - Ajiad",
        project2Location: "Makkah Al-Mukarramah, Kingdom of Saudi Arabia",
        project2Desc: "Supplying plumbing, electrical, and fire fighting materials for Al-Bald Al-Tayyib Hotel project in Ajiad area, according to the highest quality standards used in hotel projects.",
        project2Detail1: "Plumbing",
        project2Detail2: "Electrical",
        project2Detail3: "Fire Fighting Systems",
        project2Btn: "Request a Quote",
        project2Gallery: "Project Gallery",

        project3Title: "Al-Bald Al-Tayyib Hotel - Al-Aziziyah",
        project3Location: "Makkah Al-Mukarramah, Kingdom of Saudi Arabia",
        project3Desc: "Supplying plumbing, electrical, and fire fighting materials for Al-Bald Al-Tayyib Hotel - Al-Aziziyah project, with annual maintenance services to ensure system efficiency and operational continuity.",
        project3Detail1: "Plumbing",
        project3Detail2: "Electrical",
        project3Detail3: "Fire Fighting Systems",
        project3Btn: "Request a Quote",
        project3Gallery: "Project Gallery",

        project4Title: "Abdulhafiz Al-Hamidan Hotel",
        project4Location: "Makkah Al-Mukarramah, Kingdom of Saudi Arabia",
        project4Desc: "Supplying plumbing, electrical, and fire fighting materials for Abdulhafiz Al-Hamidan Hotel project, with annual maintenance services to ensure system efficiency and operational continuity.",
        project4Detail1: "Plumbing",
        project4Detail2: "Electrical",
        project4Detail3: "Fire Fighting Systems",
        project4Btn: "Request a Quote",
        project4Gallery: "Project Gallery",

        project5Title: "Sedrat Al-Ihsan Hotel",
        project5Location: "Makkah Al-Mukarramah, Kingdom of Saudi Arabia",
        project5Desc: "Supplying plumbing, electrical, and fire fighting materials for Sedrat Al-Ihsan Hotel project, with annual maintenance services to ensure system efficiency and operational continuity.",
        project5Detail1: "Plumbing",
        project5Detail2: "Electrical",
        project5Detail3: "Fire Fighting Systems",
        project5Btn: "Request a Quote",
        project5Gallery: "Project Gallery",

        project6Title: "Al-Basateen Residential Compound - Jeddah",
        project6Location: "Jeddah, Kingdom of Saudi Arabia",
        project6Desc: "Supplying plumbing, electrical, and fire fighting materials for Al-Basateen Residential project, with periodic maintenance services to ensure the highest quality and safety standards.",
        project6Detail1: "Plumbing",
        project6Detail2: "Electrical",
        project6Btn: "Request a Quote",
        project6Gallery: "Project Gallery",

        project7Title: "Al-Wadi Al-Akhdar Factory",
        project7Location: "Jeddah - Asfan, Kingdom of Saudi Arabia",
        project7Desc: "Supplying plumbing, electrical, and fire fighting materials for Al-Wadi Al-Akhdar Factory project, with annual maintenance services to ensure system efficiency and operational continuity.",
        project7Detail1: "Plumbing",
        project7Detail2: "Electrical",
        project7Detail3: "Fire Fighting Systems",
        project7Btn: "Request a Quote",
        project7Gallery: "Project Gallery",

        project8Title: "Salum Al-Khair Factory",
        project8Location: "Makkah Al-Mukarramah, Kingdom of Saudi Arabia",
        project8Desc: "Supplying plumbing, electrical, and fire fighting materials for Salum Al-Khair Factory project, with annual maintenance services to ensure system efficiency and operational continuity.",
        project8Detail1: "Plumbing",
        project8Detail2: "Electrical",
        project8Detail3: "Fire Fighting Systems",
        project8Btn: "Request a Quote",
        project8Gallery: "Project Gallery",
        projectMore: "More",
        // Contact Page
        contactHeroTitle: "Contact Us",
        contactHeroDesc: "Our team is ready to answer your inquiries, provide quotes, and help you choose the right products for your project. Contact us in the way that suits you best.",

        contactResponse: "We are committed to responding to all inquiries during business hours",
        contactResponseSpan: "as soon as possible.",

        contactSales: "Sales",
        contactPhone: "Phone Number",
        contactCustomerService: "Customer Service",

        contactWhatsappLabel: "Instant Chat",
        contactWhatsappTitle: "WhatsApp",
        contactWhatsappDesc: "Contact us directly for a quick response.",

        contactEmailLabel: "Send an Email",
        contactEmailTitle: "Email Address",

        contactFormTitle: "Send Us a Message",
        contactFormSub: "Fill out the form and we will get back to you as soon as possible",

        contactFormName: "Full Name",
        contactFormNamePlaceholder: "Enter your name",
        contactFormPhone: "Phone Number",
        contactFormPhonePlaceholder: "Enter your phone number",
        contactFormEmail: "Email Address",
        contactFormEmailPlaceholder: "example@domain.com",
        contactFormCompany: "Company Name",
        contactFormCompanyPlaceholder: "Your company name",
        contactFormCompanyOptional: "(Optional)",
        contactFormInquiry: "Inquiry Type",
        contactFormInquiryPlaceholder: "Select inquiry type",
        contactFormInquiryQuote: "Request a Quote",
        contactFormInquiryProducts: "Product Inquiry",
        contactFormInquiryProjects: "Project Inquiry",
        contactFormInquirySupport: "Technical Support",
        contactFormInquiryOther: "General Inquiry",
        contactFormMessage: "Message",
        contactFormMessagePlaceholder: "Write your message in detail...",
        contactFormSubmit: "Send Message",
        contactFormRequired: "Please fill in all required fields",
        contactFormSuccess: "✅ Thank you for contacting us. Your message has been received and our team will respond to you as soon as possible.",

        contactMapTitle: "Our Location",
        contactMapAddress: "makkah - King Fahd Road, Al-Mughrazat District",
        contactMapCountry: "Kingdom of Saudi Arabia",

        contactHoursTitle: "Working Hours",
        contactHoursWeek: "Saturday - Thursday",
        contactHoursWeekTime: "8:00 AM – 6:00 PM",
        contactHoursFriday: "Friday",
        contactHoursFridayClosed: "Closed",
        contactHoursSupport: "Customer Service",
        contactHoursSupportTime: "Available 24/7",
        contactHoursBadge: "Instant Support",

        contactFaqTitle: "Frequently Asked Questions",
        contactFaqSub: "Answers to the most common questions from our clients",
        contactFaq1Q: "How long does the delivery process take?",
        contactFaq1A: "The duration varies depending on the order size and product type, but we are committed to adhering to the agreed timeline for each project.",
        contactFaq2Q: "Do you offer a warranty on products?",
        contactFaq2A: "Yes, all our products come with a manufacturer's quality warranty, backed by specialized technical support to ensure optimal performance.",
        contactFaq3Q: "Can you supply large quantities?",
        contactFaq3A: "Absolutely. We handle projects of all sizes and have the capacity to provide large quantities according to project requirements.",
        contactFaq4Q: "How can I get a quote?",
        contactFaq4A: "You can fill out the contact form or call us directly, and we will prepare a detailed quote within a short time.",

        contactCtaTitle: "Need a Quote or Consultation?",
        contactCtaDesc: "The Konouz Commercial Construction team is happy to help you choose the right products and provide the best solutions for your project.",
        contactCtaBtn: "Contact via WhatsApp",

        // =============================================================

        // Plumbing Page
        plumbingHeroTitle: "Plumbing Materials",
        plumbingHeroDesc: "Latest and highest quality plumbing materials for residential and commercial projects from top global brands",
        plumbingBackBtn: "Back to Sections",

        // Main Categories
        plumbingCat1Title: "Pipes",
        plumbingCat1Desc: "A complete range of high-quality pipes for various industrial and residential applications.",

        plumbingCat2Title: "Fittings",
        plumbingCat2Desc: "All types of fittings for professional and durable pipe connections.",

        plumbingCat3Title: "Valves",
        plumbingCat3Desc: "Precise control of water flow with high-quality, corrosion-resistant valves.",

        plumbingCat4Title: "Drainage Systems",
        plumbingCat4Desc: "Integrated solutions for drainage systems to prevent odors and ensure smooth flow.",

        plumbingCat5Title: "Installation Materials",
        plumbingCat5Desc: "Everything a professional plumber needs for insulation, adhesion, and fixing.",

        plumbingCat6Title: "Water Systems",
        plumbingCat6Desc: "Pumps, tanks, and filters to ensure efficiency and safety of your water network.",

        // Show Products Button
        plumbingShowProducts: "Show Products",
        plumbingCode: "Code",
        plumbingAvailable: "Available",
        plumbingQuote: "Request a Quote",
        plumbingProductDetails: "Product Details",

        // Pipe Products
        productPipe1: "PVC Pipes",
        productPipe1Desc: "Versatile polyvinyl chloride pipes for various applications.",
        productPipe2: "PPR Pipes",
        productPipe2Desc: "Polypropylene pipes resistant to heat and pressure.",
        productPipe3: "CPVC Pipes",
        productPipe3Desc: "Chlorinated polyvinyl chloride pipes for hot water.",
        productPipe4: "HDPE Pipes",
        productPipe4Desc: "High-density polyethylene pipes for major projects.",
        productPipe5: "Galvanized Pipes",
        productPipe5Desc: "Galvanized iron pipes resistant to rust and corrosion.",
        productPipe6: "Drainage Pipes",
        productPipe6Desc: "High-quality drainage pipes resistant to blockages.",

        // Fitting Products
        productFitting1: "Elbow",
        productFitting1Desc: "Elbow with different angles to change pipe direction.",
        productFitting2: "Tee",
        productFitting2Desc: "Tee fitting for branching pipes in three directions.",
        productFitting3: "Coupling",
        productFitting3Desc: "Fitting to connect two pipes of the same diameter.",
        productFitting4: "Reducer",
        productFitting4Desc: "Fitting to connect two pipes of different diameters.",
        productFitting5: "Union",
        productFitting5Desc: "Removable fitting for easy maintenance.",
        productFitting6: "End Cap",
        productFitting6Desc: "Cap to close the end of pipes.",

        // Valve Products
        productValve1: "Ball Valve",
        productValve1Desc: "Ball valve for quick control of water flow.",
        productValve2: "Gate Valve",
        productValve2Desc: "Gate valve for complete control of water flow.",
        productValve3: "Check Valve",
        productValve3Desc: "Prevents water flow in the reverse direction.",
        productValve4: "Angle Valve",
        productValve4Desc: "90-degree angle valve for tight installations.",
        productValve5: "Butterfly Valve",
        productValve5Desc: "Butterfly valve for controlling large flows.",
        productValve6: "Float Valve",
        productValve6Desc: "Automatic valve for water tanks.",

        // Drainage Products
        productDrain1: "Floor Drain",
        productDrain1Desc: "Floor drain for kitchens and bathrooms.",
        productDrain2: "P-Trap",
        productDrain2Desc: "P-shaped trap to prevent odors.",
        productDrain3: "S-Trap",
        productDrain3Desc: "S-shaped trap for bathrooms and kitchens.",
        productDrain4: "Cleanout Plug",
        productDrain4Desc: "Cleanout plug for drain pipe maintenance.",
        productDrain5: "Odor Trap",
        productDrain5Desc: "Specialized trap to prevent foul odors.",

        // Installation Material Products
        productTool1: "PTFE Tape",
        productTool1Desc: "PTFE tape for sealing connections and preventing leaks.",
        productTool2: "PVC Glue",
        productTool2Desc: "Special glue for fixing PVC pipes.",
        productTool3: "Pipe Clamps",
        productTool3Desc: "Clamps for fixing pipes to walls.",
        productTool4: "Pipe Insulation",
        productTool4Desc: "Insulation materials for pipes to maintain temperature.",
        productTool5: "Thermal Insulation",
        productTool5Desc: "High-quality thermal insulation materials for pipes.",

        // Water System Products
        productSystem1: "Water Pump",
        productSystem1Desc: "High-efficiency water pump for homes and projects.",
        productSystem2: "Pressure Regulator",
        productSystem2Desc: "Water pressure regulator for consistent flow.",
        productSystem3: "Water Filter",
        productSystem3Desc: "Water filter for purifying water from impurities.",

        // =============================================================

        // Electric Page
        electricHeroTitle: "Electrical Materials",
        electricHeroDesc: "Latest and highest quality electrical materials for residential and commercial projects from top global brands",
        electricBackBtn: "Back to Sections",

        // Main Categories
        electricCat1Title: "Wires and Cables",
        electricCat1Desc: "High-quality electrical cables and wires with standard specifications for various uses.",

        electricCat2Title: "Circuit Breakers",
        electricCat2Desc: "Certified circuit breakers to protect circuits and equipment from faults.",

        electricCat3Title: "Electrical Panels",
        electricCat3Desc: "Electrical distribution panels of various types for small and large projects.",

        electricCat4Title: "Switches and Sockets",
        electricCat4Desc: "A wide range of modern, high-quality electrical switches and sockets.",

        electricCat5Title: "Lighting Systems",
        electricCat5Desc: "Integrated lighting solutions for energy saving and optimal lighting quality.",

        electricCat6Title: "Safety Equipment",
        electricCat6Desc: "Safety and electrical protection equipment for workers and projects.",

        electricCat7Title: "Control Systems",
        electricCat7Desc: "Control devices and equipment for automated electrical systems.",

        // Show Products Button
        electricShowProducts: "Show Products",
        electricCode: "Code",
        electricAvailable: "Available",
        electricQuote: "Request a Quote",

        // Wire and Cable Products
        electricProduct1: "Alfanar Copper Wires",
        electricProduct1Desc: "High-purity copper wires with durable insulation layers.",
        electricProduct2: "XLPE Low Voltage Cables",
        electricProduct2Desc: "Low voltage cables (up to 1000V).",
        electricProduct3: "CAT6 Internet Cables",
        electricProduct3Desc: "Medium voltage cables for major projects.",
        electricProduct4: "Aluminum Cables",
        electricProduct4Desc: "Lightweight and cost-effective aluminum cables.",
        electricProduct5: "Control Cables",
        electricProduct5Desc: "Cables specifically for control and automation systems.",
        electricProduct6: "Grounding Cables",
        electricProduct6Desc: "Grounding cables for protection against electric shocks.",

        // Circuit Breaker Products
        electricProduct7: "Schneider MCB",
        electricProduct7Desc: "Miniature circuit breaker for protection against overload and short circuits.",
        electricProduct8: "Schneider RCCB",
        electricProduct8Desc: "Residual current circuit breaker for protection against earth leakage.",
        electricProduct9: "Schneider RCBO",
        electricProduct9Desc: "Combined circuit breaker with MCB and RCCB functions in one device.",
        electricProduct10: "Schneider MCCB",
        electricProduct10Desc: "Molded case circuit breaker for high currents in main panels.",
        electricProduct11: "ACB Air Circuit Breaker",
        electricProduct11Desc: "Air circuit breaker for very high currents in major projects.",
        electricProduct12: "Electrical Fuses",
        electricProduct12Desc: "Plug-in fuses for additional circuit protection.",

        // Panel Products
        electricProduct13: "Schneider ACTI9 Distribution Panels",
        electricProduct13Desc: "Main distribution panels for major projects with high specifications.",
        electricProduct14: "Sub-distribution Panels",
        electricProduct14Desc: "Sub-distribution panels for internal distribution in buildings.",
        electricProduct15: "Automatic Control Panels",
        electricProduct15Desc: "Automatic control panels with ATS switches.",
        electricProduct16: "RESBO Distribution Panels",
        electricProduct16Desc: "Capacitor panels for power factor correction and energy saving.",
        electricProduct17: "Emergency Lighting Panels",
        electricProduct17Desc: "Panels specifically for emergency lighting systems in buildings.",
        electricProduct18: "Plastic Distribution Boxes",
        electricProduct18Desc: "Lightweight plastic distribution boxes with electrical insulation.",

        // Switch and Socket Products
        electricProduct19: "Single Switches",
        electricProduct19Desc: "Single-pole electrical switches with modern designs.",
        electricProduct20: "Double Switches",
        electricProduct20Desc: "Double and triple-pole switches for multiple control.",
        electricProduct21: "Triple Switches",
        electricProduct21Desc: "Switches in a plastic box for protection against external factors.",
        electricProduct22: "Standard Sockets",
        electricProduct22Desc: "Standard electrical sockets for residential and commercial use.",
        electricProduct23: "Grounded Sockets",
        electricProduct23Desc: "Sockets with grounding point for additional protection.",
        electricProduct24: "USB Sockets",
        electricProduct24Desc: "Sockets with USB ports for direct device charging.",

        // Lighting Products
        electricProduct25: "LED Bulbs",
        electricProduct25Desc: "Energy-saving LED bulbs with long lifespan of up to 50,000 hours.",
        electricProduct26: "Energy Saving Bulbs",
        electricProduct26Desc: "Compact fluorescent bulbs that save energy at an affordable cost.",
        electricProduct27: "Spotlights",
        electricProduct27Desc: "Focused spotlights for distinctive and decorative lighting.",
        electricProduct28: "Panel Lights",
        electricProduct28Desc: "Flat panel lights for suspended ceilings and offices.",
        electricProduct29: "Outdoor Lighting Poles",
        electricProduct29Desc: "Lighting poles for gardens and streets with various designs.",
        electricProduct30: "Emergency Lighting",
        electricProduct30Desc: "Battery-powered lighting devices for emergency situations.",

        // Safety Equipment Products
        electricProduct31: "Insulating Gloves",
        electricProduct31Desc: "Electrical insulating gloves for worker protection.",
        electricProduct32: "Safety Shoes",
        electricProduct32Desc: "Electrical insulating safety shoes with slip resistance.",
        electricProduct33: "Safety Helmets",
        electricProduct33Desc: "Insulating safety helmets with impact resistance.",
        electricProduct34: "Voltage Detectors",
        electricProduct34Desc: "Portable devices for detecting current and voltage.",
        electricProduct35: "Warning Signs",
        electricProduct35Desc: "Warning signs for electrical hazards for everyone's safety.",
        electricProduct36: "Electrical Fire Extinguishers",
        electricProduct36Desc: "Fire extinguishers suitable for electrical fires.",

        // Control System Products
        electricProduct37: "Relays",
        electricProduct37Desc: "Electrical relays for remote circuit control.",
        electricProduct38: "Contactors",
        electricProduct38Desc: "Contactors for controlling large electrical loads.",
        electricProduct39: "Timers",
        electricProduct39Desc: "Programmable timers for time-based control of electrical circuits.",
        electricProduct40: "Thermostats",
        electricProduct40Desc: "Thermostats for controlling heating and cooling systems.",
        electricProduct41: "PLC Controllers",
        electricProduct41Desc: "Programmable logic controllers for industrial automation.",
        electricProduct42: "Electrical Measuring Devices",
        electricProduct42Desc: "High-precision voltage, current, and resistance measuring devices.",

        // =============================================================

        // Fire Page
        fireHeroTitle: "Fire Fighting Systems",
        fireHeroDesc: "Civil Defense approved fire systems with the highest safety and security standards for residential and commercial projects",
        fireBackBtn: "Back to Sections",

        // Main Categories
        fireCat1Title: "Automatic Sprinkler Systems",
        fireCat1Desc: "Automatic fire sprinklers with high efficiency for rapid response when fires break out.",
        fireCat1Badge: "Civil Defense Approved",

        fireCat2Title: "Alarm Systems",
        fireCat2Desc: "Smart alarm devices for early detection of fires and protecting lives and property.",
        fireCat2Badge: "Modern Technology",

        fireCat3Title: "Fire Extinguishers",
        fireCat3Desc: "Various types of fire extinguishers to combat all types of fires.",
        fireCat3Badge: "Quality Certified",

        fireCat4Title: "Fire Pipes",
        fireCat4Desc: "Pipes and tubes specifically for high-pressure and durable fire systems.",
        fireCat4Badge: "Fire Resistant",

        fireCat5Title: "Fire Pumps",
        fireCat5Desc: "Powerful fire pumps to supply fire networks with the necessary water.",
        fireCat5Badge: "High Capacity",

        // Show Products Button
        fireShowProducts: "Show Products",
        fireCode: "Code",
        fireAvailable: "Available",
        fireCertified: "Certified",
        fireQuote: "Request a Quote",

        // Sprinkler Products
        fireProduct1: "Tyco Hanging Sprinklers",
        fireProduct1Desc: "Ceiling-mounted fire sprinklers with multiple temperature ratings.",
        fireProduct2: "Flush Sprinklers",
        fireProduct2Desc: "Flush sprinklers for concealed ceilings with elegant design.",
        fireProduct3: "Sidewall Sprinklers",
        fireProduct3Desc: "Sidewall sprinklers for wall mounting in tight spaces.",
        fireProduct4: "Open Sprinklers",
        fireProduct4Desc: "Open sprinklers for water-based fire suppression systems.",
        fireProduct5: "Multi-Temperature Sprinklers",
        fireProduct5Desc: "Sprinklers with different temperature ratings (68°C, 93°C, 141°C).",
        fireProduct6: "Sprinkler Check Valves",
        fireProduct6Desc: "Check valves and monitoring valves for sprinkler systems.",

        // Alarm Products
        fireProduct7: "Smoke Detectors",
        fireProduct7Desc: "Ionization and optical smoke detectors with high sensitivity.",
        fireProduct8: "Heat Detectors",
        fireProduct8Desc: "Fixed and rate-of-rise heat detectors for fire protection.",
        fireProduct9: "Flame Detectors",
        fireProduct9Desc: "UV and IR flame detectors.",
        fireProduct10: "Carbon Monoxide Detectors",
        fireProduct10Desc: "Toxic gas detectors for early detection of carbon monoxide leaks.",
        fireProduct11: "Alarm Bells",
        fireProduct11Desc: "High-volume alarm bells to alert everyone.",
        fireProduct12: "Sirens",
        fireProduct12Desc: "Electronic sirens with multiple sounds.",

        // Extinguisher Products
        fireProduct13: "Dry Powder Extinguisher",
        fireProduct13Desc: "Multi-purpose dry powder extinguisher for all types of fires.",
        fireProduct14: "CO2 Extinguisher",
        fireProduct14Desc: "Carbon dioxide extinguisher for electrical fires and sensitive equipment.",
        fireProduct15: "Foam Extinguisher",
        fireProduct15Desc: "Foam extinguisher for liquid fires and burning oils.",
        fireProduct16: "Water Extinguisher",
        fireProduct16Desc: "Pressurized water extinguisher for ordinary fires (wood, paper, fabrics).",
        fireProduct17: "Dry Chemical Extinguisher",
        fireProduct17Desc: "Dry chemical extinguisher for electrical and gas fires.",
        fireProduct18: "Wheeled Extinguishers",
        fireProduct18Desc: "Large wheeled extinguishers for facilities and warehouses.",

        // Pipe Products
        fireProduct19: "Galvanized Fire Pipes",
        fireProduct19Desc: "Galvanized pipes for fire systems, rust-resistant.",
        fireProduct20: "Cast Iron Pipes",
        fireProduct20Desc: "High-durability cast iron pipes.",
        fireProduct21: "Copper Pipes",
        fireProduct21Desc: "Copper pipes for fire and sprinkler systems.",
        fireProduct22: "CPVC Pipes",
        fireProduct22Desc: "CPVC plastic pipes for fire systems.",
        fireProduct23: "Fire Fittings & Accessories",
        fireProduct23Desc: "Fittings and accessories for fire pipes in all sizes.",
        fireProduct24: "Fire Valves",
        fireProduct24Desc: "Fire valves for controlling fire water flow.",

        // Pump Products
        fireProduct25: "Horizontal Fire Pumps",
        fireProduct25Desc: "Horizontal pumps with horizontal drive systems.",
        fireProduct26: "Vertical Fire Pumps",
        fireProduct26Desc: "Vertical pumps for space-saving and high efficiency.",




    }
};

let currentLang = localStorage.getItem('language') || 'ar';
const langToggle = document.getElementById('langToggle');

function updateLanguage(lang) {
    document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Update all elements with data-key attribute
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Update navigation links (for those without data-key)
    const navLinks = document.querySelectorAll('#mainNav a:not(.contact-btn)');
    const navKeys = ['navHome', 'navAbout', 'navDepartments', 'navProjects', 'navContact'];
    navLinks.forEach((link, index) => {
        if (index < navKeys.length) {
            link.textContent = translations[lang][navKeys[index]];
        }
    });

    // Update contact button in nav
    const contactBtn = document.querySelector('#mainNav .contact-btn');
    if (contactBtn) {
        contactBtn.textContent = translations[lang]['navContact'];
    }

    // Update logo text
    const logoMain = document.querySelector('.logo-main');
    const logoSub = document.querySelector('.logo-sub');
    if (logoMain) {
        logoMain.textContent = lang === 'ar' ? 'كنوز' : 'Konouz';
    }
    if (logoSub) {
        logoSub.textContent = lang === 'ar' ? 'الإنشاء التجارية' : 'Commercial Construction';
    }

    // Update hero title and description
    const heroTitle = document.querySelector('.hero-content h1');
    const heroDesc = document.querySelector('.hero-content p');
    if (heroTitle) {
        heroTitle.textContent = translations[lang]['heroTitle'];
    }
    if (heroDesc) {
        heroDesc.textContent = translations[lang]['heroDesc'];
    }

    // Update hero button text if it has no data-key
    const heroBtn = document.querySelector('.hero-btn');
    if (heroBtn && !heroBtn.hasAttribute('data-key')) {
        heroBtn.textContent = translations[lang]['heroBtn'];
    }

    // Update department buttons
    const deptBtns = document.querySelectorAll('.dept-btn');
    const btnKeys = ['plumbingBtn', 'electricBtn', 'fireBtn'];
    deptBtns.forEach((btn, index) => {
        if (index < btnKeys.length) {
            const icon = btn.querySelector('i');
            const text = translations[lang][btnKeys[index]];
            if (icon) {
                btn.innerHTML = text + ' ' + icon.outerHTML;
            } else {
                btn.textContent = text;
            }
        }
    });

    // Update projects view all button
    const projectsBtn = document.querySelector('.projects-view-btn');
    if (projectsBtn && !projectsBtn.hasAttribute('data-key')) {
        const icon = projectsBtn.querySelector('i');
        if (icon) {
            projectsBtn.innerHTML = translations[lang]['projectsViewAll'] + ' ' + icon.outerHTML;
        } else {
            projectsBtn.textContent = translations[lang]['projectsViewAll'];
        }
    }

    // Update footer links
    const footerLinks = document.querySelectorAll('.footer-grid a');
    const footerLinkKeys = ['navHome', 'navAbout', 'navProjects', 'navDepartments'];
    footerLinks.forEach((link, index) => {
        if (index < footerLinkKeys.length) {
            link.textContent = translations[lang][footerLinkKeys[index]];
        }
    });

    // Update footer titles
    const footerTitles = document.querySelectorAll('.footer-grid h3');
    const footerTitleKeys = ['footerTitle', 'footerLinks', 'contactTitle'];
    footerTitles.forEach((title, index) => {
        if (index < footerTitleKeys.length) {
            title.textContent = translations[lang][footerTitleKeys[index]];
        }
    });

    // Update footer description
    const footerDesc = document.querySelector('.footer-grid > div:first-child p');
    if (footerDesc) {
        footerDesc.textContent = translations[lang]['footerDesc'];
    }

    // Update WhatsApp text
    const whatsappSpan = document.querySelector('.footer-grid p span[data-key="whatsapp"]');
    if (whatsappSpan) {
        whatsappSpan.textContent = translations[lang]['whatsapp'];
    }

    // Update location text
    const locationSpan = document.querySelector('.footer-grid p span[data-key="location"]');
    if (locationSpan) {
        locationSpan.textContent = translations[lang]['location'];
    }

    // Update copyright
    const copyright = document.querySelector('.copyright span');
    if (copyright) {
        copyright.textContent = translations[lang]['copyright'];
    }

    // ===== تحديث عناصر صفحة "من نحن" =====
    // About Page Hero
    const aboutHeroTitle = document.querySelector('.about-hero h1');
    const aboutHeroSub = document.querySelector('.about-hero h2');
    const aboutHeroDesc = document.querySelector('.about-hero p');
    if (aboutHeroTitle) {
        const icon = aboutHeroTitle.querySelector('i');
        if (icon) {
            aboutHeroTitle.innerHTML = translations[lang]['aboutHeroTitle'] + ' ' + icon.outerHTML;
        } else {
            aboutHeroTitle.textContent = translations[lang]['aboutHeroTitle'];
        }
    }
    if (aboutHeroSub) aboutHeroSub.textContent = translations[lang]['aboutHeroSub'];
    if (aboutHeroDesc) aboutHeroDesc.textContent = translations[lang]['aboutHeroDesc'];

    // About CTA button
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        const icon = ctaBtn.querySelector('i');
        if (icon) {
            ctaBtn.innerHTML = translations[lang]['aboutCtaBtn'] + ' ' + icon.outerHTML;
        } else {
            ctaBtn.textContent = translations[lang]['aboutCtaBtn'];
        }
    }

    // ===== تحديث عناصر صفحة "المنتجات" =====
    // Products Hero
    const productsHeroTitle = document.querySelector('.products-hero h1');
    const productsHeroDesc = document.querySelector('.products-hero p');
    if (productsHeroTitle) {
        const icon = productsHeroTitle.querySelector('i');
        if (icon) {
            productsHeroTitle.innerHTML = translations[lang]['productsHeroTitle'] + ' ' + icon.outerHTML;
        } else {
            productsHeroTitle.textContent = translations[lang]['productsHeroTitle'];
        }
    }
    if (productsHeroDesc) productsHeroDesc.textContent = translations[lang]['productsHeroDesc'];

    // Products Stats
    const statLabels = document.querySelectorAll('.stats-banner .stat-item .stat-label');
    const statKeys = ['productsStat1', 'productsStat2', 'productsStat3', 'productsStat4'];
    statLabels.forEach((label, index) => {
        if (index < statKeys.length && translations[lang][statKeys[index]]) {
            label.textContent = translations[lang][statKeys[index]];
        }
    });

    // Products Section Labels
    const sectionLabels = document.querySelectorAll('.section-label');
    const labelKeys = ['productsPlumbingLabel', 'productsElectricLabel', 'productsFireLabel'];
    sectionLabels.forEach((label, index) => {
        if (index < labelKeys.length && translations[lang][labelKeys[index]]) {
            label.textContent = translations[lang][labelKeys[index]];
        }
    });

    // Products Section Titles
    const sectionTitles = document.querySelectorAll('.section-content h2');
    const titleKeys = ['productsPlumbingTitle', 'productsElectricTitle', 'productsFireTitle'];
    sectionTitles.forEach((title, index) => {
        if (index < titleKeys.length && translations[lang][titleKeys[index]]) {
            const span = title.querySelector('span');
            if (span) {
                const text = translations[lang][titleKeys[index]];
                const spanText = span.textContent;
                const mainText = text.replace(spanText, '').trim();
                title.innerHTML = mainText + ' <span>' + spanText + '</span>';
            } else {
                title.textContent = translations[lang][titleKeys[index]];
            }
        }
    });

    // Products Section Descriptions
    const sectionDescs = document.querySelectorAll('.section-desc');
    const descKeys = ['productsPlumbingDesc', 'productsElectricDesc', 'productsFireDesc'];
    sectionDescs.forEach((desc, index) => {
        if (index < descKeys.length && translations[lang][descKeys[index]]) {
            desc.textContent = translations[lang][descKeys[index]];
        }
    });

    // Products Feature Items (inside spans)
    const featureSpans = document.querySelectorAll('.feature-item span[data-key]');
    featureSpans.forEach(span => {
        const key = span.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            span.textContent = translations[lang][key];
        }
    });

    // Products Section Buttons
    const sectionBtns = document.querySelectorAll('.section-btn');
    const btnKeys2 = ['productsPlumbingBtn', 'productsElectricBtn', 'productsFireBtn'];
    sectionBtns.forEach((btn, index) => {
        if (index < btnKeys2.length && translations[lang][btnKeys2[index]]) {
            const icon = btn.querySelector('i');
            if (icon) {
                btn.innerHTML = translations[lang][btnKeys2[index]] + ' ' + icon.outerHTML;
            } else {
                btn.textContent = translations[lang][btnKeys2[index]];
            }
        }
    });

    // Products Quote Buttons
    const quoteSpans = document.querySelectorAll('.section-btn-outline span[data-key]');
    const quoteKeys = ['productsPlumbingQuote', 'productsElectricQuote', 'productsFireQuote'];
    quoteSpans.forEach((span, index) => {
        if (index < quoteKeys.length && translations[lang][quoteKeys[index]]) {
            span.textContent = translations[lang][quoteKeys[index]];
        }
    });

    // Products Extra Services
    const extraTitle = document.querySelector('.extra-title');
    const extraSub = document.querySelector('.extra-subtitle');
    if (extraTitle) extraTitle.textContent = translations[lang]['productsExtraTitle'];
    if (extraSub) extraSub.textContent = translations[lang]['productsExtraSub'];

    const serviceTitles = document.querySelectorAll('.service-card h4');
    const serviceTitleKeys = ['productsService1', 'productsService2', 'productsService3', 'productsService4'];
    serviceTitles.forEach((title, index) => {
        if (index < serviceTitleKeys.length && translations[lang][serviceTitleKeys[index]]) {
            title.textContent = translations[lang][serviceTitleKeys[index]];
        }
    });

    const serviceDescs = document.querySelectorAll('.service-card p');
    const serviceDescKeys = ['productsService1Desc', 'productsService2Desc', 'productsService3Desc', 'productsService4Desc'];
    serviceDescs.forEach((desc, index) => {
        if (index < serviceDescKeys.length && translations[lang][serviceDescKeys[index]]) {
            desc.textContent = translations[lang][serviceDescKeys[index]];
        }
    });

    // Products CTA
    const ctaTitle = document.querySelector('.cta-bottom h3');
    const ctaDesc = document.querySelector('.cta-bottom p');
    const ctaLink = document.querySelector('.cta-bottom .cta-link');
    if (ctaTitle) ctaTitle.textContent = translations[lang]['productsCtaTitle'];
    if (ctaDesc) ctaDesc.textContent = translations[lang]['productsCtaDesc'];
    if (ctaLink) {
        const icon = ctaLink.querySelector('i');
        if (icon) {
            ctaLink.innerHTML = translations[lang]['productsCtaBtn'] + ' ' + icon.outerHTML;
        } else {
            ctaLink.textContent = translations[lang]['productsCtaBtn'];
        }
    }

    // Update language toggle button'
    langToggle.textContent = lang === 'ar' ? 'EN' : 'عربي';
    localStorage.setItem('language', lang);
    currentLang = lang;
}

langToggle.addEventListener('click', () => {
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    updateLanguage(newLang);
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mainNav a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('show');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Logo Click - Redirect to Home
const logoLink = document.getElementById('logoLink');
if (logoLink) {
    logoLink.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
}

// Hero parallax effect
const hero = document.querySelector('.hero');
if (hero) {
    window.addEventListener('mousemove', (e) => {
        let x = (e.clientX / window.innerWidth) * 20;
        let y = (e.clientY / window.innerHeight) * 20;
        hero.style.backgroundPosition = `calc(50% + ${x / 30}px) calc(30% + ${y / 40}px)`;
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);
});
// ===== انتقال سلس بين الصفحات =====
document.addEventListener('DOMContentLoaded', function () {
    document.body.classList.add('page-transition');
});

document.querySelectorAll('a[href]').forEach(function (link) {
    if (link.href.includes('wa.me') || link.href.includes('tel:') || link.href.includes('mailto:')) return;
    if (link.getAttribute('target') === '_blank') return;
    if (link.getAttribute('href') === '#') return;
    if (link.getAttribute('href').startsWith('#')) return;
    if (link.getAttribute('href').startsWith('http')) return;

    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && !href.startsWith('http') && !href.startsWith('#')) {
            e.preventDefault();
            document.body.classList.remove('page-transition');
            document.body.classList.add('page-exit');

            setTimeout(function () {
                window.location.href = href;
            }, 350);
        }
    });
});
