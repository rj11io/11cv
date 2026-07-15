import type { MiniRole } from "../_mini/types"

// Mini variant focused on the Data Visualisation Engineer role: dashboards,
// custom vis components, and data explorers. Budget: one printed A4 page.

export const role: MiniRole = {
  slug: "datavis-eng-mini",
  name: "Datavis Eng Mini",
  title: "Data Visualisation Engineer",
  description:
    "One-page CV focused on the Data Visualisation Engineer role: dashboards, custom vis components, and data explorers.",
  pdfPages: 1,
  summary: [
    "Data Visualisation Engineer with a decade of professional TypeScript experience, on React since 2016 and Next.js since 2018. Most of my experience is in cybersecurity, building dashboards and proprietary data explorers, where I learned what separates a polished product from a prototype. The track record runs from d3 dashboards in 2015 to threat-intelligence widgets, iGaming dashboards, and today's AI-powered analytics.",
  ],
  skills: [
    {
      name: "Data & Visualisation",
      items: [
        "Dashboards",
        "Data Visualisation (d3, Recharts, Nivo)",
        "Web Scraping",
        "Data Enrichment",
      ],
    },
    {
      name: "Core Stack",
      items: [
        "TypeScript",
        "React.js",
        "Next.js",
        "AI SDK",
        "Convex",
        "Playwright",
        "Vercel",
      ],
    },
    {
      name: "UI & Design",
      items: [
        "Tailwind CSS",
        "shadcn/ui",
        "Material-UI",
        "Design Systems",
        "Storybook",
        "Refactoring UI",
      ],
    },
  ],
  experience: [
    {
      role: "AI Product Engineer",
      company: "rj11io",
      period: "Mar 2025 - Present",
      url: "https://www.rj11.io",
      highlights: [
        "Multiple cybersecurity dashboards and proprietary data explorers for early-stage startups",
        "AI SEO analytics, AI data extraction from PDFs, and smart scraping agents feeding data-driven products",
      ],
    },
    {
      role: "Product / Datavis Engineer",
      company: "Hunt Intelligence, Inc.",
      period: "Apr 2024 - Mar 2025",
      url: "https://hunt.io/",
      highlights: [
        "Went deep on my specialty: data visualisation for a threat-intelligence product, with custom components like the IP History Widget",
        "Built core product modules AttackCapture™ and HuntSQL™ with the latest Next.js and shadcn/ui",
      ],
    },
    {
      role: "Senior Frontend Engineer → Team Lead",
      company: "OMEGA Systems",
      period: "Jun 2023 - Apr 2024",
      url: "https://www.omegasys.eu/",
      highlights: [
        "Data visualisation for the Main and Social dashboards of the CORE5 iGaming platform",
        "Built report and configuration views: Cashback, Refer-a-Friend, Pending Withdrawals, Challenges / Leaderboards",
      ],
    },
    {
      role: "Frontend Lead",
      company: "BinaryEdge · Coalition, Inc.",
      period: "Feb 2020 - Oct 2021",
      url: "https://www.coalitioninc.com/",
      highlights: [
        "Tech Lead for the Customer Security data visualisations and the Coalition Storybook; introduced Nivo to the stack",
        "Built Attack Surface Monitoring on the BinaryEdge Portal, later integrated into Coalition Explorer and Coalition Control",
      ],
    },
    {
      role: "Frontend Developer",
      company: "NextBitt",
      period: "Oct 2015 - Jul 2016",
      highlights: [
        "Analytics dashboards and reporting, auditing, and management tools for asset & facilities management software, with heavy data visualisation using Google Charts, dygraphs, Chart.js, d3.js, and C3.js",
      ],
    },
  ],
  earlierRoles:
    "Also: Senior Frontend Engineer at Phantasma Chain, building Phantasma Explorer (2022 - 2023); co-founder at Glaiveware (2018 - 2019); full-stack dashboard for the American Heart Association (2016).",
  projects: [
    {
      name: "11io",
      url: "https://www.rj11.io/",
      blurb: "Personal brand for B2B freelancing",
    },
    {
      name: "11ai",
      url: "https://ai.rj11.io/",
      blurb: "Open source AI skills, plugins, and workflows",
    },
    {
      name: "11bench",
      url: "https://bench.rj11.io/",
      blurb: "Open source AI benchmarks",
    },
  ],
}
