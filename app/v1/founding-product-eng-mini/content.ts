import type { MiniRole } from "../_mini/types"

// Mini variant focused on the Founding Product Engineer role: zero-to-one
// builds, first-hire ownership, and startup breadth. Budget: one printed A4 page.

export const role: MiniRole = {
  slug: "founding-product-eng-mini",
  name: "Founding Product Eng Mini",
  title: "Founding Product Engineer",
  description:
    "One-page CV focused on the Founding Product Engineer role: zero-to-one builds, first-hire ownership, and startup breadth.",
  pdfPages: 1,
  summary: [
    "Founding Product Engineer with a decade of professional TypeScript experience — on React since 2016 and Next.js since 2018. On most projects I was the first frontend hire, owning architecture, tooling, infrastructure, and pipelines from day one, then growing the team and writing its playbooks. I've worn every hat a startup has, including co-founding one and running its business side. Point me at a target and I'll figure out how to hit it on my own.",
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
      name: "Leadership & Delivery",
      items: [
        "Team & Project Management",
        "End-to-End Product Engineering",
        "Product Design",
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
      period: "Mar 2025 — Present",
      url: "https://www.rj11.io",
      highlights: [
        "Hands-on AI product engineering for multiple early-stage startups, building projects from the ground up",
        "AI data extraction, SEO analytics, a GenAI dermatopathology portal, cybersecurity dashboards, and AI agent harnesses, skills, and automations",
      ],
    },
    {
      role: "Product / Datavis Engineer",
      company: "Hunt Intelligence, Inc.",
      period: "Apr 2024 — Mar 2025",
      url: "https://hunt.io/",
      highlights: [
        "Built the modern TypeScript codebase from the ground up: latest Next.js and shadcn/ui, Vercel environments, Playwright tests, CI/CD on GitHub Actions",
        "Built core product modules AttackCapture™ and HuntSQL™ and a new API documentation platform on top of OpenAPI",
      ],
    },
    {
      role: "Frontend Lead",
      company: "BinaryEdge · Coalition, Inc.",
      period: "Feb 2020 — Oct 2021",
      url: "https://www.coalitioninc.com/",
      highlights: [
        "Started as a solo frontend engineer and grew a team focused on customer-facing security apps and internal tools",
        "Introduced React, TypeScript, Next.js, and micro frontends; Tech Lead for Coalition Explorer, housing critical internal tools for the whole company",
      ],
    },
    {
      role: "Fullstack Engineer, Co-Founder",
      company: "Glaiveware",
      period: "Mar 2018 — Dec 2019",
      highlights: [
        "Co-founded and ran a business creating bespoke web apps above market standards",
        "Beyond code: SEO & SEM, branding & design, marketing & advertising, copywriting; infrastructure on AWS, Ubuntu, and nginx",
      ],
    },
  ],
  earlierRoles:
    "Also: Senior Frontend Engineer → Team Lead at OMEGA Systems (2023 — 2024); Senior Frontend Engineer at Phantasma Chain (2022 — 2023); earlier roles at Sycret.ink, the American Heart Association, and NextBitt (2015 — 2017).",
  projects: [
    {
      name: "11io",
      url: "https://www.rj11.io/",
      blurb: "Personal brand for B2B freelancing",
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
