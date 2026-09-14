export const demoClients = [
  { id: "acme", name: "Acme", color: "#FAFAFA", accounts: 8, videos: 42, status: "Active" },
  { id: "nova", name: "Nova", color: "#3B82F6", accounts: 6, videos: 28, status: "Active" },
  { id: "orbit", name: "Orbit", color: "#22C55E", accounts: 12, videos: 67, status: "Active" },
  { id: "vertex", name: "Vertex", color: "#A855F7", accounts: 4, videos: 19, status: "Review" },
  { id: "pulse", name: "Pulse", color: "#F59E0B", accounts: 10, videos: 54, status: "Active" },
] as const;

export const demoClips = [
  {
    id: "clip-01",
    title: "Strategy pivot moment",
    duration: "0:42",
    engagement: "High",
    caption: "When we realized our entire strategy was wrong...",
  },
  {
    id: "clip-02",
    title: "Customer insight",
    duration: "0:38",
    engagement: "Medium",
    caption: "The one thing customers never tell you upfront.",
  },
  {
    id: "clip-03",
    title: "Bold prediction",
    duration: "0:55",
    engagement: "High",
    caption: "This industry will look completely different in 2 years.",
  },
  {
    id: "clip-04",
    title: "Actionable tip",
    duration: "0:31",
    engagement: "Medium",
    caption: "Start here if you want faster content output.",
  },
] as const;

export const demoTranscript = [
  { time: "12:04", text: "So we spent six months on the wrong approach.", highlight: false },
  { time: "12:18", text: "And that's when we realized our entire strategy was wrong.", highlight: true },
  { time: "12:32", text: "The pivot changed everything for our team.", highlight: false },
  { time: "12:48", text: "We went from posting once a week to daily clips.", highlight: false },
] as const;

export const demoCalendarPosts = [
  { id: "p1", day: "Mon", time: "9:00 AM", platform: "Instagram", title: "Strategy pivot clip", status: "Scheduled" as const },
  { id: "p2", day: "Mon", time: "2:00 PM", platform: "LinkedIn", title: "Customer insight", status: "Published" as const },
  { id: "p3", day: "Tue", time: "10:30 AM", platform: "TikTok", title: "Bold prediction", status: "Needs approval" as const },
  { id: "p4", day: "Wed", time: "11:00 AM", platform: "YouTube", title: "Actionable tip", status: "Draft" as const },
  { id: "p5", day: "Thu", time: "3:00 PM", platform: "Facebook", title: "Behind the scenes", status: "Scheduled" as const },
  { id: "p6", day: "Fri", time: "8:00 AM", platform: "Instagram", title: "Weekly recap", status: "Scheduled" as const },
] as const;

export const demoAnalytics = {
  views: [1200, 1800, 2400, 2100, 3200, 4100, 3800],
  engagement: [4.2, 5.1, 6.8, 5.9, 7.2, 8.1, 7.6],
  topClips: [
    { title: "Strategy pivot moment", views: "12.4K", engagement: "8.2%" },
    { title: "Bold prediction", views: "9.8K", engagement: "7.1%" },
    { title: "Customer insight", views: "7.2K", engagement: "6.4%" },
  ],
} as const;

export const workflowSteps = [
  {
    step: 1,
    title: "Upload",
    description: "Upload a podcast, webinar, interview, course, or long-form video.",
  },
  {
    step: 2,
    title: "Understand",
    description: "AI transcribes and understands the conversation.",
  },
  {
    step: 3,
    title: "Find the moments",
    description:
      "AI identifies strong opinions, insights, emotional moments, and surprising statements.",
  },
  {
    step: 4,
    title: "Create clips",
    description: "Generate 10–20 short-form clips from your long-form content.",
  },
  {
    step: 5,
    title: "Make them social-ready",
    description: "Automatically resize, subtitle, frame speakers, apply branding, and generate captions.",
  },
  {
    step: 6,
    title: "Review",
    description: "Review and edit clips before publishing.",
  },
  {
    step: 7,
    title: "Schedule",
    description: "Select Instagram, TikTok, YouTube, LinkedIn, and Facebook.",
  },
  {
    step: 8,
    title: "Publish",
    description: "Everything gets published from one place.",
  },
] as const;

export const features = [
  {
    title: "AI Clip Finder",
    description: "Find the strongest moments automatically.",
    demo: "clip-finder",
  },
  {
    title: "Automatic Subtitles",
    description: "Generate accurate subtitles instantly.",
    demo: "subtitles",
  },
  {
    title: "Smart Speaker Framing",
    description: "Keep speakers centered automatically.",
    demo: "framing",
  },
  {
    title: "AI Captions",
    description: "Generate platform-ready captions.",
    demo: "captions",
  },
  {
    title: "Brand Templates",
    description: "Keep every client consistent.",
    demo: "brand",
  },
  {
    title: "Social Scheduling",
    description: "Schedule across multiple platforms.",
    demo: "scheduling",
  },
  {
    title: "Team Collaboration",
    description: "Work together in one workspace.",
    demo: "team",
  },
  {
    title: "Client Approval",
    description: "Get client approval without endless messages.",
    demo: "approval",
  },
  {
    title: "Analytics",
    description: "Understand which content performs.",
    demo: "analytics",
  },
] as const;

export const platforms = [
  { name: "Instagram", icon: "instagram" },
  { name: "TikTok", icon: "tiktok" },
  { name: "YouTube", icon: "youtube" },
  { name: "LinkedIn", icon: "linkedin" },
  { name: "Facebook", icon: "facebook" },
] as const;

export const problemTools = [
  "Podcast",
  "Video editor",
  "Caption tool",
  "Design tool",
  "Scheduler",
  "Analytics",
  "Manual file management",
] as const;

export const trustCategories = [
  "Marketing agencies",
  "Podcasts",
  "SaaS companies",
  "Content teams",
  "Creators",
] as const;
