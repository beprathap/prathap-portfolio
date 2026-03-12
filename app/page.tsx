"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Database,
  Cloud,
  Code2,
  ShieldCheck,
  Award,
  Briefcase,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import SectionTitle from "@/components/section-title";

const skills = [
  "Snowflake",
  "AWS",
  "Python",
  "PySpark",
  "DBT",
  "Airflow",
  "Kafka",
  "Snowpark",
  "Terraform",
  "API Integrations",
  "CDC / SCD2",
  "Medallion Architecture",
];

const metrics = [
  { label: "Years of Experience", value: "4+" },
  { label: "Ingestion SLA Improved", value: "24h → 15m" },
  { label: "Critical Jobs Supported", value: "250+" },
  { label: "Warehouse Cost Reduction", value: "30–70%" },
];

const experience = [
  {
    role: "Lead Data Engineer",
    company: "Enterprise Automotive Platform",
    period: "Feb 2025 – Present",
    summary:
      "Leading development on large-scale data platforms across Snowflake and AWS, building secure ingestion, CDC pipelines, Snowpipes, PySpark transformations, and operational reliability patterns.",
    highlights: [
      "Ingested 5M+ daily customer and vehicle records through API and flat-file integrations.",
      "Reduced ingestion SLA from 24 hours to under 15 minutes.",
      "Built EMR Serverless comparison jobs over 65M+ records to reduce downstream warehouse load.",
    ],
  },
  {
    role: "Senior Data Engineer",
    company: "Enterprise Healthcare Platform",
    period: "Jan 2024 – Jan 2025",
    summary:
      "Built healthcare ETL pipelines on AWS, Snowflake, and DBT with strong focus on performance, observability, validation, and security-aligned delivery.",
    highlights: [
      "Migrated workloads toward warehouse-native architecture and achieved major cost savings.",
      "Enhanced 250+ critical production jobs using Streams, Tasks, and DBT.",
      "Built automated validation and anomaly detection workflows with procedures and DBT tests.",
    ],
  },
  {
    role: "Data Engineer",
    company: "Enterprise Data Services",
    period: "Jan 2021 – Dec 2022",
    summary:
      "Developed ingestion and transformation pipelines using Python, Glue, and cloud data warehouse patterns, including encrypted formats, CDC workflows, and performance-focused stored procedures.",
    highlights: [
      "Built parameterized procedures for complex JSON CDC processing.",
      "Automated SCD Type 2 ingestion with Streams, Tasks, and procedural logic.",
      "Improved processing speed by 5x over traditional SQL patterns.",
    ],
  },
];

const projects = [
  {
    title: "YouTube Data Analysis Pipeline",
    subtitle: "Airflow • Python • S3/EMR • Delta-style analytics",
    description:
      "Pipeline for ingesting YouTube metadata and comments, storing curated datasets, and analyzing content performance, engagement, and upload trends.",
    href: "https://github.com/beprathap/youtube-dataset",
  },
  {
    title: "Netflix KPIs on Snowflake + DBT",
    subtitle: "DBT • Snowflake • Incremental Models • Snapshots",
    description:
      "Production-style analytics project using source/ref patterns, tests, macros, incremental logic, and SCD2-style snapshots for KPI reporting.",
    href: "https://github.com/beprathap",
  },
  {
    title: "Heart Disease Prediction",
    subtitle: "Python • Pandas • Scikit-learn",
    description:
      "End-to-end ML workflow comparing multiple classification models to predict heart disease risk from clinical features.",
    href: "https://github.com/beprathap/heartDiseasePrediction",
  },
  {
    title: "SQL Portfolio",
    subtitle: "SQL • Analytics • Query Practice",
    description:
      "Hands-on SQL repository demonstrating query patterns, problem solving, and analytical thinking for data engineering workflows.",
    href: "https://github.com/beprathap/sql-portfolio",
  },
];

const certifications = [
  "SnowPro Advanced: Architect",
  "SnowPro Core Certification",
  "AWS Certified Cloud Practitioner",
  "Google Cloud Associate Cloud Engineer",
  "Databricks Generative AI Fundamentals",
  "Databricks Data Fundamentals",
];

const sectionClass = "max-w-6xl mx-auto px-6 md:px-8";

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold tracking-wide">Prathap Boddu</p>
            <p className="text-xs text-slate-500">
              Data Engineer • Snowflake • AWS • Python
            </p>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#certifications" className="hover:text-slate-900">Certifications</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_top_left,rgba(14,165,233,0.14),transparent_22%)]" />
          <div className={`${sectionClass} relative py-20 md:py-28`}>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                  <ShieldCheck className="h-4 w-4" />
                  Building secure, scalable, AI-ready data platforms
                </div>
                <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
                  Data Engineer focused on
                  <span className="block text-slate-500">
                    Snowflake, AWS, and production-grade pipelines.
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg md:text-xl leading-8 text-slate-600">
                  I design cloud-native data systems across healthcare, automotive,
                  and analytics use cases — with hands-on experience in CDC pipelines,
                  Medallion architecture, API integrations, and high-scale warehouse workloads.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://github.com/beprathap"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90"
                  >
                    <Github className="h-4 w-4" />
                    View GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prathapboddu/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:prathapboddu0121@gmail.com"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Me
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Card className="p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-slate-100 p-3">
                    <Database className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Currently focused on</p>
                    <p className="font-semibold">
                      Enterprise data platforms and cloud-native data engineering
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {metrics.map((metric) => (
                    <div key={metric.label} className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-2xl md:text-3xl font-semibold tracking-tight">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-slate-200 p-5">
                  <p className="text-sm text-slate-500">Core positioning</p>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    Data Engineer with experience delivering secure, scalable pipelines
                    using Snowflake, AWS, Python, DBT, and PySpark — with growing emphasis
                    on AI-ready data infrastructure.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className={sectionClass}>
            <SectionTitle
              eyebrow="About"
              title="A portfolio designed around your actual strengths"
              description="This site is intentionally shaped around your resume and GitHub profile: cloud-native ingestion, domain-rich data platforms, and strong hands-on Python and SQL delivery."
            />
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6">
              <Card className="p-7">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-slate-100 p-3 mt-1">
                    <Cloud className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">What makes you stand out</h3>
                    <p className="mt-3 text-slate-600 leading-7">
                      You are not just building dashboards or small scripts. Your profile shows
                      enterprise-scale ingestion, secure vendor integrations, CDC/SCD logic,
                      operational reliability, and measurable business impact.
                    </p>
                    <ul className="mt-5 space-y-3 text-slate-600">
                      <li>• Enterprise data platforms across multiple domains</li>
                      <li>• Strong balance of architecture thinking and hands-on implementation</li>
                      <li>• Clear focus on Snowflake, AWS, Python, PySpark, DBT, and production operations</li>
                    </ul>
                  </div>
                </div>
              </Card>
              <Card className="p-7">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-slate-100 p-3 mt-1">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">How this site helps your career</h3>
                    <p className="mt-3 text-slate-600 leading-7">
                      This portfolio is built to support recruiter screening, hiring manager review,
                      and personal branding. It gives you one clean place to present experience,
                      impact metrics, certifications, GitHub projects, and future technical writing.
                    </p>
                    <ul className="mt-5 space-y-3 text-slate-600">
                      <li>• Better than just sending a resume PDF</li>
                      <li>• Makes your GitHub easier to understand in business terms</li>
                      <li>• Easy to host free on Vercel</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-white border-y border-slate-200/80">
          <div className={sectionClass}>
            <SectionTitle
              eyebrow="Experience"
              title="Professional experience with measurable impact"
              description="A concise presentation of your background, written for recruiters and engineering leaders who want both technical depth and business outcomes."
            />
            <div className="space-y-6">
              {experience.map((item, idx) => (
                <motion.div
                  key={item.company}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.08, duration: 0.35 }}
                >
                  <Card className="p-7">
                    <div className="max-w-3xl">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-slate-100 p-3">
                          <Briefcase className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">
                            {item.role} · {item.company}
                          </h3>
                          <p className="text-sm text-slate-500">{item.period}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-slate-600 leading-7">{item.summary}</p>
                      <ul className="mt-5 space-y-2 text-slate-700">
                        {item.highlights.map((point) => (
                          <li key={point}>• {point}</li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className={sectionClass}>
            <SectionTitle
              eyebrow="Projects"
              title="Featured work connected to your GitHub"
              description="These projects make your profile more concrete by turning repos into clear stories around pipelines, analytics, and machine learning without exposing employer details."
            />
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <motion.a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.06, duration: 0.35 }}
                  className="block"
                >
                  <Card className="h-full p-7 hover:-translate-y-1 transition-transform duration-200">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="mt-2 text-sm font-medium text-slate-500">
                          {project.subtitle}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-slate-400" />
                    </div>
                    <p className="mt-4 text-slate-600 leading-7">
                      {project.description}
                    </p>
                  </Card>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="py-20 bg-white border-y border-slate-200/80">
          <div className={sectionClass}>
            <SectionTitle
              eyebrow="Certifications"
              title="Credentials that reinforce your positioning"
              description="Your certifications support a strong narrative around data architecture, cloud platforms, and modern engineering fundamentals."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {certifications.map((cert) => (
                <Card key={cert} className="p-5">
                  <div className="flex items-start gap-3">
                    <div className="rounded-2xl bg-slate-100 p-3">
                      <Award className="h-5 w-5" />
                    </div>
                    <p className="font-medium leading-7">{cert}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className={sectionClass}>
            <Card className="p-8 md:p-10 bg-slate-900 text-white border-slate-900 overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%)]" />
              <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-center">
                <div>
                  <p className="text-sm tracking-[0.22em] uppercase text-slate-300">Next step</p>
                  <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                    Turn this into your live portfolio
                  </h2>
                  <p className="mt-4 max-w-2xl text-slate-300 leading-7">
                    Add your resume PDF, optional blog posts, and a custom domain later if you want
                    to strengthen your personal brand further.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/beprathap"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white"
                  >
                    <ExternalLink className="h-4 w-4" /> Contact
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div>
            <p className="font-semibold">Prathap Boddu</p>
            <p className="text-sm text-slate-500 mt-1">
              Data Engineer • Snowflake • AWS • Python
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:prathapboddu0121@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/prathapboddu/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/beprathap"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              <FileText className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}