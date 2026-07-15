import type { MiniRole } from "../_mini/types"

// The generalist mini: the max CV compacted to two printed pages.

export const role: MiniRole = {
  slug: "mini",
  name: "Mini",
  title: "AI Product Engineer",
  description:
    "The compact CV: a decade of product engineering condensed to two pages.",
  pdfPages: 2,
  summary: [
    "AI Product Engineer with a decade of professional TypeScript experience — building on React since 2016 and Next.js since 2018. On most projects I was the first frontend hire, owning architecture, tooling, component libraries, and pipelines from day one, then growing the team around them.",
    "Most of my experience is in cybersecurity, building dashboards and proprietary data explorers — where I developed a passion for data-driven products. I've built with AI since the first releases of Copilot and ChatGPT, moving from prompt and context engineering to designing full agent harnesses. Today an automated fleet of AI agents maintains my personal projects.",
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
      name: "AI Engineering",
      items: [
        "Agent Automations",
        "Custom Agent Skills",
        "Harness Engineering",
        "Codex",
        "Claude Code",
      ],
    },
    {
      name: "UI & Data",
      items: [
        "Tailwind CSS",
        "shadcn/ui",
        "Design Systems",
        "Storybook",
        "Dashboards",
        "Data Visualisation (d3, Recharts, Nivo)",
      ],
    },
    {
      name: "Leadership & Delivery",
      items: [
        "Team & Project Management",
        "End-to-End Product Engineering",
        "Product Design",
        "Agile Methodologies",
      ],
    },
  ],
  experience: [
    {
      role: "AI Product Engineer",
      company: "rj11io",
      period: "Mar 2025 — Present",
      url: "https://www.rj11.io",
      highlights: [
        "Hands-on AI product engineering for multiple early-stage startups, building projects from the ground up",
        "AI data extraction from PDFs, AI SEO analytics, a GenAI dermatopathology portal, AI chats, and smart scraping agents",
        "Cybersecurity dashboards, proprietary data explorers, and AI agent harnesses, skills, and automations",
      ],
    },
    {
      role: "Product / Datavis Engineer",
      company: "Hunt Intelligence, Inc.",
      period: "Apr 2024 — Mar 2025",
      url: "https://hunt.io/",
      highlights: [
        "Went deep on my specialty: data visualisation for a threat-intelligence product, including custom components like the IP History Widget",
        "Built core product modules AttackCapture™ and HuntSQL™ on a modern TypeScript codebase with Next.js, shadcn/ui, Playwright, and CI/CD on GitHub Actions",
        "Built a new API documentation platform on top of OpenAPI, friendlier and more intuitive than Swagger",
      ],
    },
    {
      role: "Senior Frontend Engineer → Team Lead",
      company: "OMEGA Systems",
      period: "Jun 2023 — Apr 2024",
      url: "https://www.omegasys.eu/",
      highlights: [
        "Built the next generation of OMEGA's iGaming platform management system (CORE5) with TypeScript and React; promoted to lead the frontend team",
        "Data visualisation for the Main and Social dashboards, plus report and configuration views",
        "As lead: built the developer onboarding experience and set standards for tickets, documentation, and remote / async workflows",
      ],
    },
    {
      role: "Senior Frontend Engineer",
      company: "Phantasma Chain",
      period: "Jan 2022 — May 2023",
      url: "https://phantasma.info/",
      highlights: [
        "Built the frontend monorepo for all new tools and apps, the Phantasma UI Storybook, and Phantasma Explorer",
        "Tests with Playwright, CI with GitHub Actions, CD with Vercel; contributed improvements to the Phantasma TypeScript SDK",
      ],
    },
    {
      role: "Frontend Lead",
      company: "BinaryEdge · Coalition, Inc.",
      period: "Feb 2020 — Oct 2021",
      url: "https://www.coalitioninc.com/",
      highlights: [
        "Started as a solo frontend engineer and grew a team focused on customer-facing security apps and internal tools",
        "Introduced React, TypeScript, Next.js, and micro frontends; Tech Lead for Coalition Explorer, the component library, and data visualisations",
        "Built Attack Surface Monitoring on the BinaryEdge Portal, later integrated into Coalition Explorer and Coalition Control",
      ],
    },
  ],
  earlierRoles:
    "Earlier: co-founder at Glaiveware, building bespoke web apps (2018 — 2019); React Native chat app with end-to-end encryption at Sycret.ink (2017); full-stack dashboard for the American Heart Association (2016); analytics dashboards at NextBitt (2015 — 2016).",
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
      name: "11labs",
      url: "https://labs.rj11.io/",
      blurb: "AI factory for micro software and tools",
    },
    {
      name: "thevibe.coach",
      url: "https://www.thevibe.coach/",
      blurb: "AI vibe code coaching",
    },
  ],
}
