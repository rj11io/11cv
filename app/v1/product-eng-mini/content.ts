import type { MiniRole } from "../_mini/types"

// Mini variant focused on the Product Engineer role: end-to-end feature
// ownership, product design, and shipping. Budget: one printed A4 page.

export const role: MiniRole = {
  slug: "product-eng-mini",
  name: "Product Eng Mini",
  title: "Product Engineer",
  description:
    "One-page CV focused on the Product Engineer role: shipping products end to end.",
  pdfPages: 1,
  summary: [
    "Product Engineer with a decade of professional TypeScript experience, building on React since 2016 and Next.js since 2018. On most projects I was the first frontend hire, owning architecture, tooling, and pipelines from day one and shipping product features end to end. I work autonomously, with an eye for what separates a polished product from a prototype. Lately that means AI products: data extraction, analytics, chats, and full agent harnesses.",
  ],
  skills: [
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
      name: "Product & Delivery",
      items: [
        "End-to-End Product Engineering",
        "Product Design",
        "Team & Project Management",
        "Agile Methodologies",
      ],
    },
    {
      name: "AI Engineering",
      items: [
        "Agent Automations",
        "Custom Agent Skills",
        "Harness Engineering",
        "Codex",
        "Claude Code",
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
        "Hands-on AI product engineering for early-stage startups: AI data extraction from PDFs, AI SEO analytics, a GenAI dermatopathology portal, and AI chat experiences",
        "Cybersecurity dashboards, data explorers, and AI agent harnesses, skills, and automations",
      ],
    },
    {
      role: "Product / Datavis Engineer",
      company: "Hunt Intelligence, Inc.",
      period: "Apr 2024 - Mar 2025",
      url: "https://hunt.io/",
      highlights: [
        "Built core product modules of a threat-intelligence platform, AttackCapture™ and HuntSQL™, plus custom data visualisations like the IP History Widget",
        "Shipped a new API documentation platform on top of OpenAPI, friendlier and more intuitive than Swagger",
      ],
    },
    {
      role: "Senior Frontend Engineer → Team Lead",
      company: "OMEGA Systems",
      period: "Jun 2023 - Apr 2024",
      url: "https://www.omegasys.eu/",
      highlights: [
        "Built the next generation of OMEGA's iGaming platform management system (CORE5); promoted to lead the frontend team",
        "Kept shipping as lead: product-engineered dashboards, reports, and configuration views from scratch, end to end",
      ],
    },
    {
      role: "Frontend Lead",
      company: "BinaryEdge · Coalition, Inc.",
      period: "Feb 2020 - Oct 2021",
      url: "https://www.coalitioninc.com/",
      highlights: [
        "Built Attack Surface Monitoring on the BinaryEdge Portal, later integrated into Coalition Explorer and Coalition Control",
        "Tech Lead for Coalition Explorer: claims management, report generation, security review, and Executive Risks platforms",
      ],
    },
  ],
  earlierRoles:
    "Earlier: Senior Frontend Engineer at Phantasma Chain (2022 - 2023); co-founder at Glaiveware (2018 - 2019); roles at Sycret.ink, the American Heart Association, and NextBitt (2015 - 2017).",
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
