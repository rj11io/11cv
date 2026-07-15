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
    "Data Visualisation Engineer with a decade of professional TypeScript experience, building on React since 2016 and Next.js since 2018. On most projects I was the first frontend hire, owning architecture, tooling, and pipelines from day one and shipping product features end to end, then growing the team: hiring, interviewing, onboarding, and writing the playbooks that let new engineers integrate seamlessly. Most of that experience is in cybersecurity, building dashboards and proprietary data explorers, that's where I learned what separates a polished product from a prototype and found my passion for data-driven products and visualisations.",
  ],
  skills: [
    {
      name: "Data & Visualisation",
      items: [
        "Dashboards",
        "Data Visualisation",
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
      name: "Legacy Github",
      url: "https://github.com/ricardojrmcom?tab=repositories",
      blurb: "Open source code I produced 2020-2023",
    },
  ],
}
