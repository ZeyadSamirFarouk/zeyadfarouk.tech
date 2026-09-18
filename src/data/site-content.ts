export type ProjectCategory =
  | "branding"
  | "identity"
  | "social"
  | "campaign"
  | "ui-visuals";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  challenge: string;
  approach: string;
  deliverables: string[];
  gallery: string[];
};

export const brand = {
  name: "زياد سمير فاروق",
  roleAr: "مصمم جرافيك أول",
  roleEn: "Senior Graphic Designer",
  tagline:
    "أصمم هويات وتجارب بصرية فاخرة تساعد العلامات على الظهور بثقة والتحول إلى نتائج قابلة للقياس.",
  availability: "متاح لاستقبال مشروعين جديدين هذا الشهر",
  email: "hello@zeyadfarouk.tech",
  phone: "+20 100 000 0000",
  whatsapp: "https://wa.me/201000000000",
  social: [
    { label: "Behance", href: "https://www.behance.net/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ],
};

export const trustPoints = [
  "+9 سنوات خبرة في التصميم والاتصال البصري",
  "عملت مع شركات ناشئة وعلامات إقليمية في مجالات متنوعة",
  "تركيز على جودة التنفيذ وسرعة التسليم والتواصل الواضح",
];

export const services = [
  {
    id: "brand-identity",
    title: "الهوية البصرية والعلامة التجارية",
    includes: [
      "استراتيجية بصرية واتجاه فني",
      "شعار ونظام هوية متكامل",
      "دليل استخدام العلامة (Brand Guidelines)",
    ],
    timeline: "2 - 4 أسابيع",
  },
  {
    id: "social-content",
    title: "التصميم لمنصات التواصل",
    includes: [
      "قوالب منشورات وستوري قابلة للتوسعة",
      "اتجاهات فنية للحملات الشهرية",
      "أصول جاهزة للنشر مع تنظيم الملفات",
    ],
    timeline: "1 - 2 أسبوع",
  },
  {
    id: "campaign-visuals",
    title: "حملات إعلانية ومواد تسويقية",
    includes: [
      "مفاهيم بصرية للحملة",
      "مواد رقمية ومطبوعة متعددة المقاسات",
      "نسخ نهائية محسّنة للأداء على المنصات",
    ],
    timeline: "2 - 3 أسابيع",
  },
  {
    id: "ui-visual",
    title: "UI Visual Design",
    includes: [
      "تصميم واجهات صفحات هبوط ومواقع",
      "نظام بصري متماسك للشاشات",
      "تسليم ملفات منظمة للمطورين",
    ],
    timeline: "2 - 5 أسابيع",
  },
];

export const processSteps = [
  {
    title: "الاكتشاف والاتجاه",
    description:
      "جلسة تعريف بالأهداف والجمهور والمخرجات المطلوبة ثم تحديد اتجاه بصري واضح.",
  },
  {
    title: "التصميم والتنقيح",
    description:
      "تطوير مفاهيم التصميم وتطبيقها على الأصول الأساسية مع جولات مراجعة منظمة.",
  },
  {
    title: "التسليم والدعم",
    description:
      "تسليم الملفات النهائية بشكل احترافي مع توضيح طريقة الاستخدام ودعم ما بعد التسليم.",
  },
];

export const projects: Project[] = [
  {
    slug: "aurora-scent",
    title: "Aurora Scent",
    category: "branding",
    categoryLabel: "Branding",
    year: "2026",
    challenge:
      "إطلاق علامة عطور جديدة في سوق مزدحم مع الحاجة لهوية توصل الفخامة والهدوء في آن واحد.",
    approach:
      "تم بناء نظام بصري يعتمد على تباين حاد مع تدرجات دافئة ومساحات بيضاء واسعة لرفع إدراك الجودة.",
    deliverables: [
      "شعار أساسي وثانوي",
      "نظام ألوان وخطوط",
      "تصميم عبوة ومنشورات إطلاق",
    ],
    gallery: ["Midnight Gradient", "Foil Monogram", "Launch Campaign"],
  },
  {
    slug: "noura-clinic",
    title: "Noura Clinic",
    category: "identity",
    categoryLabel: "Identity",
    year: "2025",
    challenge:
      "تطوير هوية بصرية لعيادة جلدية تجمع بين الطابع الطبي والثقة واللمسة الأنثوية.",
    approach:
      "تم تبسيط اللغة البصرية إلى رموز ناعمة مع شبكة تحريرية نظيفة لضمان الوضوح عبر كل المواد.",
    deliverables: ["هوية بصرية", "لوحات سوشال", "نظام أيقونات"],
    gallery: ["Clinical Grid", "Social Template", "Icon Set"],
  },
  {
    slug: "faya-fashion",
    title: "Faya Fashion Drop",
    category: "campaign",
    categoryLabel: "Campaign",
    year: "2025",
    challenge:
      "تصميم حملة موسمية لعلامة أزياء تحتاج إلى حضور رقمي جريء يرفع التفاعل والمبيعات.",
    approach:
      "استخدام تكوينات طباعية كبيرة وحركة بصرية ديناميكية لرفع الإيقاع وجذب الانتباه.",
    deliverables: ["Key Visual", "إعلانات رقمية", "Stories Motion Frames"],
    gallery: ["Typographic Hero", "Ad Set", "Motion Frames"],
  },
  {
    slug: "orbit-tech-social",
    title: "Orbit Tech Social",
    category: "social",
    categoryLabel: "Social Media",
    year: "2024",
    challenge:
      "توحيد حضور شركة تقنية على السوشال بطريقة حديثة تدعم الرسائل التسويقية المعقدة.",
    approach:
      "تطوير قوالب مرنة قائمة على نظام بصري موحد مع قواعد واضحة للهرمية المعلوماتية.",
    deliverables: ["12 قالب منشورات", "دليل استخدام", "حزمة أصول قابلة للتعديل"],
    gallery: ["Content System", "Data Cards", "Brand Frames"],
  },
  {
    slug: "lumen-ui-visuals",
    title: "Lumen Landing Visuals",
    category: "ui-visuals",
    categoryLabel: "UI Visuals",
    year: "2024",
    challenge:
      "تحسين الانطباع البصري لصفحة هبوط SaaS مع الحفاظ على سرعة التصفح وسهولة الفهم.",
    approach:
      "تصميم مكونات عالية التباين مع تركيز على التسلسل البصري ووضوح دعوات الإجراء.",
    deliverables: ["UI Hero", "Feature visuals", "Visual style kit"],
    gallery: ["SaaS Hero", "Feature Blocks", "CTA Focus"],
  },
];

export const testimonials = [
  {
    quote:
      "“النتيجة فاقت توقعاتنا؛ الهوية الجديدة رفعت ثقة العملاء في العلامة بشكل واضح.”",
    author: "مدير تسويق - Placeholder",
  },
  {
    quote:
      "“التواصل الاحترافي وسرعة التنفيذ جعلت تجربة العمل سلسة من البداية للنهاية.”",
    author: "مؤسس شركة ناشئة - Placeholder",
  },
];

export const skills = [
  "Adobe Creative Suite",
  "Figma",
  "Art Direction",
  "Brand Strategy",
  "Typography",
  "Visual Systems",
];

export const budgetOptions = [
  "أقل من 500$",
  "500$ - 1,500$",
  "1,500$ - 3,000$",
  "3,000$+",
];

export const timelineOptions = [
  "خلال أسبوع",
  "2 - 4 أسابيع",
  "1 - 2 شهر",
  "مرن حسب النطاق",
];

export const serviceOptions = services.map((service) => service.title);

export const projectCategoryFilters: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "الكل", value: "all" },
  { label: "Branding", value: "branding" },
  { label: "Identity", value: "identity" },
  { label: "Social", value: "social" },
  { label: "Campaign", value: "campaign" },
  { label: "UI Visuals", value: "ui-visuals" },
];
