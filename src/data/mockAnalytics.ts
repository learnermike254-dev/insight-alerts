// Mock data for analytics dashboard

export const pageViewsData = [
  { date: "Jan 1", views: 1200, visitors: 890 },
  { date: "Jan 2", views: 1400, visitors: 1020 },
  { date: "Jan 3", views: 980, visitors: 720 },
  { date: "Jan 4", views: 1650, visitors: 1180 },
  { date: "Jan 5", views: 2100, visitors: 1540 },
  { date: "Jan 6", views: 1890, visitors: 1350 },
  { date: "Jan 7", views: 2340, visitors: 1720 },
  { date: "Jan 8", views: 1950, visitors: 1410 },
  { date: "Jan 9", views: 2200, visitors: 1600 },
  { date: "Jan 10", views: 2450, visitors: 1780 },
  { date: "Jan 11", views: 2100, visitors: 1520 },
  { date: "Jan 12", views: 2680, visitors: 1950 },
  { date: "Jan 13", views: 2900, visitors: 2100 },
  { date: "Jan 14", views: 3100, visitors: 2280 },
];

export const topPages = [
  { path: "/", views: 4520, percentage: 32 },
  { path: "/pricing", views: 2310, percentage: 16 },
  { path: "/blog/analytics-guide", views: 1890, percentage: 13 },
  { path: "/docs/getting-started", views: 1450, percentage: 10 },
  { path: "/features", views: 1120, percentage: 8 },
  { path: "/about", views: 890, percentage: 6 },
];

export const referrers = [
  { source: "Google", visitors: 3200, percentage: 38 },
  { source: "Direct", visitors: 2100, percentage: 25 },
  { source: "Twitter / X", visitors: 1400, percentage: 17 },
  { source: "GitHub", visitors: 890, percentage: 11 },
  { source: "Hacker News", visitors: 520, percentage: 6 },
  { source: "Reddit", visitors: 280, percentage: 3 },
];

export const devices = [
  { name: "Desktop", value: 62 },
  { name: "Mobile", value: 31 },
  { name: "Tablet", value: 7 },
];

export const browsers = [
  { name: "Chrome", value: 58 },
  { name: "Safari", value: 22 },
  { name: "Firefox", value: 12 },
  { name: "Edge", value: 6 },
  { name: "Other", value: 2 },
];

export const countries = [
  { country: "United States", visitors: 2800, flag: "🇺🇸" },
  { country: "Kenya", visitors: 1200, flag: "🇰🇪" },
  { country: "United Kingdom", visitors: 980, flag: "🇬🇧" },
  { country: "Germany", visitors: 720, flag: "🇩🇪" },
  { country: "Nigeria", visitors: 650, flag: "🇳🇬" },
  { country: "India", visitors: 580, flag: "🇮🇳" },
  { country: "Canada", visitors: 420, flag: "🇨🇦" },
  { country: "France", visitors: 380, flag: "🇫🇷" },
];

export const realtimeVisitors = 47;

export const overviewStats = {
  pageViews: 28420,
  pageViewsChange: 12.5,
  uniqueVisitors: 8390,
  visitorsChange: 8.3,
  bounceRate: 42,
  bounceRateChange: -3.2,
  avgDuration: "2m 34s",
  durationChange: 5.1,
};

export const sites = [
  { id: "1", name: "example.com", key: "site_abc123", visits: 28420, status: "active" as const },
  { id: "2", name: "blog.example.com", key: "site_def456", visits: 12300, status: "active" as const },
  { id: "3", name: "shop.example.com", key: "site_ghi789", visits: 5600, status: "paused" as const },
];
