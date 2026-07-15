import type { MiniRole } from "../_mini/types"

// Mini variant focused on the Frontend Platform role: architecture, tooling,
// design systems, CI/CD, and developer experience. Budget: one printed A4 page.

export const role: MiniRole = {
  slug: "fe-platform-eng-mini",
  name: "FE Platform Mini",
  title: "Frontend Platform Engineer",
  description:
    "One-page CV focused on the Frontend Platform role: architecture, tooling, design systems, and developer experience.",
  pdfPages: 1,
  summary: [
    "Frontend Platform Engineer with a decade of professional TypeScript experience, building on React since 2016 and Next.js since 2018. On most projects I was the first frontend hire, owning architecture, tooling, and pipelines from day one and shipping product features end to end, then growing the team: hiring, interviewing, onboarding, and writing the playbooks that let new engineers integrate seamlessly. Most of that experience is in cybersecurity, building dashboards and proprietary data explorers, that's where I learned what separates a polished product from a prototype and found my passion for data-driven products and visualisations.",
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
      name: "Platform & Tooling",
      items: [
        "Cloud",
        "Git",
        "GitHub Actions",
        "CI/CD",
        "Testing",
        "REST APIs",
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
        "n8n"
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
        "AI agent harnesses, custom agent skills, and automations for early-stage startups, with codebases and infrastructure built from the ground up",
      ],
    },
    {
      role: "Product / Datavis Engineer",
      company: "Hunt Intelligence, Inc.",
      period: "Apr 2024 - Mar 2025",
      url: "https://hunt.io/",
      highlights: [
        "Built a modern TypeScript codebase with the latest Next.js and shadcn/ui, Vercel environments, Playwright end-to-end tests, and CI/CD on GitHub Actions with release changelogs hooked to Slack",
        "Built a new API documentation platform on top of OpenAPI, friendlier than Swagger",
      ],
    },
    {
      role: "Senior Frontend Engineer → Team Lead",
      company: "OMEGA Systems",
      period: "Jun 2023 - Apr 2024",
      url: "https://www.omegasys.eu/",
      highlights: [
        "Promoted to lead the frontend team: built the \"New Developer\" onboarding experience and set standards for tickets, documentation, and remote / async workflows",
        "Many bare metal deployments and maintained legacy Jenkins pipelines for licensed software",
      ],
    },
    {
      role: "Senior Frontend Engineer",
      company: "Phantasma Chain",
      period: "Jan 2022 - May 2023",
      url: "https://phantasma.info/",
      highlights: [
        "Built the frontend monorepo for all new tools and apps, plus the Phantasma UI Storybook",
        "Contributed improvements to the Phantasma TypeScript SDK; built white-label theming, localisation, and environment configs",
      ],
    },
    {
      role: "Frontend Lead",
      company: "BinaryEdge · Coalition, Inc.",
      period: "Feb 2020 - Oct 2021",
      url: "https://www.coalitioninc.com/",
      highlights: [
        "Introduced React, TypeScript, Material-UI, and Next.js to the stack, plus micro frontends; Tech Lead for the Coalition Storybook and component library",
        "Migrated the frontend CI/CD from Drone to GitHub Actions, improving pipelines, environments, and developer experience",
      ],
    },
  ],
  earlierRoles:
    "Earlier: co-founder at Glaiveware, with infrastructure on AWS, Ubuntu, and nginx (2018 - 2019); roles at Sycret.ink, the American Heart Association, and NextBitt (2015 - 2017).",
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
