export const siteConfig = {
  name: "Social Budd",
  tagline: "Turn one video into weeks of social content.",
  description:
    "Social Budd is an AI-powered social media content automation platform for businesses and agencies. Transform long-form video into ready-to-publish clips, captions, and scheduled posts.",
  url: "https://socialbudd.com",
  ogImage: "/og-image.png",
  links: {
    start: "/start",
    contact: "/contact",
    pricing: "/pricing",
    agencies: "/agencies",
  },
} as const;

export const navLinks = {
  product: [
    { label: "AI Clipping", href: "/product/clipping" },
    { label: "Captions", href: "/product/captions" },
    { label: "Scheduling", href: "/product/scheduling" },
    { label: "Analytics", href: "/product/analytics" },
  ],
  solutions: [
    { label: "Agencies", href: "/agencies" },
    { label: "Podcasters", href: "/solutions/podcasters" },
    { label: "Businesses", href: "/solutions/businesses" },
    { label: "Creators", href: "/solutions/creators" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Documentation", href: "/docs" },
    { label: "Help Center", href: "/help" },
  ],
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
  ],
} as const;

export const pricingPlans = [
  {
    name: "Free",
    price: 0,
    description: "For trying Social Budd.",
    features: [
      "Limited video processing",
      "Watermarked videos",
      "Limited social accounts",
    ],
    cta: "Try for free",
    href: "/start",
    highlighted: false,
  },
  {
    name: "Creator",
    price: 29,
    description: "For solo creators getting started.",
    features: [
      "300 processing minutes",
      "4 social accounts",
      "1 user",
      "AI clips",
      "Subtitles",
      "Scheduling",
    ],
    cta: "Start creating",
    href: "/start",
    highlighted: false,
  },
  {
    name: "Pro",
    price: 69,
    description: "For growing content teams.",
    features: [
      "1,000 processing minutes",
      "12 social accounts",
      "3 users",
      "Advanced AI features",
      "More automation",
    ],
    cta: "Start growing",
    href: "/start",
    highlighted: false,
  },
  {
    name: "Agency",
    price: 199,
    description: "For agencies managing content at scale.",
    features: [
      "3,500 processing minutes",
      "Up to 50 social accounts",
      "Up to 10 team members",
      "Multiple client workspaces",
      "Client approval",
      "Brand templates",
      "Scheduling",
      "Analytics",
    ],
    cta: "Start for free",
    href: "/start",
    highlighted: true,
  },
] as const;

export const faqItems = [
  {
    question: "What is Social Budd?",
    answer:
      "Social Budd is an AI-powered social media content workflow platform. Upload a long-form video and Social Budd finds the best moments, creates short clips, adds subtitles, writes captions, and helps you schedule and publish across social channels.",
  },
  {
    question: "Who is Social Budd for?",
    answer:
      "Social Budd is built primarily for marketing agencies, and also works well for podcasters, businesses, content teams, and individual creators who want to turn long-form video into consistent social content.",
  },
  {
    question: "Can I connect Instagram and TikTok?",
    answer:
      "Yes. Social Budd is designed to connect with major social platforms including Instagram, TikTok, YouTube, LinkedIn, and Facebook so you can publish from one workflow.",
  },
  {
    question: "Can Social Budd automatically create clips?",
    answer:
      "Yes. After you upload a video, AI analyzes the content, identifies strong moments, and generates multiple short-form clips ready for review and publishing.",
  },
  {
    question: "How does AI choose clips?",
    answer:
      "Social Budd looks for moments with high engagement potential — strong opinions, insights, emotional beats, surprising statements, and useful information — based on transcript and video analysis.",
  },
  {
    question: "Can agencies manage multiple clients?",
    answer:
      "Yes. Agency plans include multiple client workspaces with separate brand settings, social accounts, and content libraries so teams can manage everything in one place.",
  },
  {
    question: "Can clients approve content?",
    answer:
      "Yes. Agencies can send approval links to clients. Clients review posts and approve or request changes before content is scheduled.",
  },
  {
    question: "Can I schedule posts?",
    answer:
      "Yes. Social Budd includes a content calendar where you can schedule posts across connected social accounts from a single dashboard.",
  },
  {
    question: "What happens after my free plan?",
    answer:
      "You can continue using Social Budd on the free plan with limited processing and watermarked exports, or upgrade to a paid plan for more minutes, accounts, and features.",
  },
  {
    question: "Is Social Budd a video editor?",
    answer:
      "Social Budd is not a full video editor like Premiere or Final Cut. It is a content workflow platform focused on turning long-form video into social-ready clips, captions, and scheduled posts.",
  },
] as const;
