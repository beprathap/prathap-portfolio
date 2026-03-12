"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  ChartColumnIncreasing,
  FileText,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
} from "lucide-react";

const wrap = "max-w-6xl mx-auto px-6 md:px-8";

const stack = [
  "Snowflake",
  "AWS",
  "Python",
  "PySpark",
  "DBT",
  "Airflow",
  "Kafka",
  "Snowpark",
  "Terraform",
  "SQL",
];

const wins = [
  { label: "SLA Improvement", value: "24h -> 15m" },
  { label: "Production Jobs", value: "250+" },
  { label: "Daily Ingestion", value: "5M+" },
  { label: "Cost Reduction", value: "30-70%" },
];

const timeline = [
  {
    role: "Lead Data Engineer",
    org: "Enterprise Automotive Platform",
    period: "Feb 2025 - Present",
    summary:
      "Owning platform-level ingestion and transformation architecture across Snowflake and AWS.",
    bullets: [
      "Delivered secure API and file ingestion at enterprise scale.",
      "Reduced ingestion latency from daily windows to near real-time.",
      "Built large reconciliation workflows for 65M+ records.",
    ],
  },
  {
    role: "Senior Data Engineer",
    org: "Enterprise Healthcare Platform",
    period: "Jan 2024 - Jan 2025",
    summary:
      "Led modernization of warehouse and transformation workflows with stronger quality controls.",
    bullets: [
      "Improved 250+ critical jobs with better reliability patterns.",
      "Scaled DBT + Snowflake Streams/Tasks for operational analytics.",
      "Reduced warehouse spend through model and pipeline optimization.",
    ],
  },
  {
    role: "Data Engineer",
    org: "Enterprise Data Services",
    period: "Jan 2021 - Dec 2022",
    summary:
      "Built CDC, SCD2, and procedural data processing patterns for enterprise reporting.",
    bullets: [
      "Implemented robust JSON processing with parameterized procedures.",
      "Automated CDC and historical tracking workflows.",
      "Improved performance by roughly 5x on key workloads.",
    ],
  },
];

const projects = [
  {
    title: "YouTube Data Analysis Pipeline",
    meta: "Airflow • Python • S3/EMR",
    desc: "Pipeline for ingesting, transforming, and analyzing engagement data.",
    href: "https://github.com/beprathap/youtube-dataset",
  },
  {
    title: "Netflix KPIs on Snowflake + DBT",
    meta: "Snowflake • DBT • Incremental Models",
    desc: "Analytics engineering workflow with snapshots and production-style modeling.",
    href: "https://github.com/beprathap",
  },
  {
    title: "Heart Disease Prediction",
    meta: "Python • Pandas • Scikit-learn",
    desc: "End-to-end ML experiment pipeline for clinical risk classification.",
    href: "https://github.com/beprathap/heartDiseasePrediction",
  },
  {
    title: "SQL Portfolio",
    meta: "SQL • Analytics • Problem Solving",
    desc: "Hands-on query work focused on practical data engineering use cases.",
    href: "https://github.com/beprathap/sql-portfolio",
  },
];

const certs = [
  "SnowPro Advanced: Architect",
  "SnowPro Core Certification",
  "AWS Certified Cloud Practitioner",
  "Google Cloud Associate Cloud Engineer",
  "Databricks Generative AI Fundamentals",
  "Databricks Data Fundamentals",
];

function Block({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-[var(--edge)] bg-white/80 backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[var(--ink)]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-20%] top-[-15%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(15,23,42,0.18),transparent_65%)]" />
        <div className="absolute right-[-20%] top-[25%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(14,116,144,0.18),transparent_70%)]" />
        <div className="absolute left-[10%] bottom-[-25%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(217,119,6,0.2),transparent_70%)]" />
      </div>

      <header className="sticky top-0 z-40 border-b border-[var(--edge)] bg-[rgba(248,245,239,0.86)] backdrop-blur">
        <div className={`${wrap} flex items-center justify-between py-4`}>
          <div>
            <p className="text-sm font-semibold tracking-wide">Prathap Boddu</p>
            <p className="text-xs text-[var(--muted)]">Senior Data Engineer</p>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[var(--muted)] md:flex">
            <a href="#work" className="hover:text-[var(--ink)]">Work</a>
            <a href="#timeline" className="hover:text-[var(--ink)]">Timeline</a>
            <a href="#projects" className="hover:text-[var(--ink)]">Projects</a>
            <a href="#contact" className="hover:text-[var(--ink)]">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pb-20">
        <section className={`${wrap} pt-14 md:pt-20`}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[var(--edge)] bg-white px-4 py-2 text-sm text-[var(--muted)]">
                <ShieldCheck className="h-4 w-4" />
                Engineering for scale, quality, and business impact
              </p>
              <h1 className="mt-6 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
                Not just pipelines.
                <span className="mt-2 block text-[var(--muted)]">
                  Production-grade data systems.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] md:text-xl">
                I build data platforms that teams can trust every day. My focus is secure ingestion,
                resilient transformations, and fast warehouse performance across Snowflake and AWS.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="./resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[var(--ink)] px-5 py-3 text-sm font-medium text-white"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
                <a
                  href="https://github.com/beprathap"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[var(--edge)] bg-white px-5 py-3 text-sm font-medium"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/prathapboddu/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[var(--edge)] bg-white px-5 py-3 text-sm font-medium"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <Block className="p-6 md:p-8">
              <div className="overflow-hidden rounded-2xl border border-[var(--edge)]">
                <img
                  src="./prathap_linkedin_photo.png"
                  alt="Prathap Boddu"
                  className="h-64 w-full object-cover object-top"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {wins.map((w) => (
                  <div key={w.label} className="rounded-2xl bg-[var(--surface)] p-4">
                    <p className="text-xl font-semibold md:text-2xl">{w.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-[var(--muted)]">
                      {w.label}
                    </p>
                  </div>
                ))}
              </div>
            </Block>
          </motion.div>
        </section>

        <section id="work" className={`${wrap} pt-14 md:pt-20`}>
          <div className="mb-8 flex items-center gap-3">
            <ChartColumnIncreasing className="h-5 w-5" />
            <h2 className="font-display text-3xl md:text-4xl">What I Build</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Block className="p-6">
              <h3 className="font-display text-2xl">Ingestion Engines</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">
                API, flat-file, and CDC flows built for reliability, lineage, and secure access.
              </p>
            </Block>
            <Block className="p-6">
              <h3 className="font-display text-2xl">Warehouse Performance</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">
                Model and query optimization patterns that cut latency and reduce compute spend.
              </p>
            </Block>
            <Block className="p-6">
              <h3 className="font-display text-2xl">Data Quality Systems</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">
                Validation, anomaly detection, and monitoring that support production confidence.
              </p>
            </Block>
            <Block className="p-6">
              <h3 className="font-display text-2xl">Platform Delivery</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">
                End-to-end implementation from architecture through deployment and operations.
              </p>
            </Block>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[var(--edge)] bg-white px-4 py-2 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="timeline" className={`${wrap} pt-14 md:pt-20`}>
          <div className="mb-8 flex items-center gap-3">
            <BriefcaseBusiness className="h-5 w-5" />
            <h2 className="font-display text-3xl md:text-4xl">Career Timeline</h2>
          </div>
          <div className="space-y-5">
            {timeline.map((job, idx) => (
              <motion.div
                key={job.role}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.08, duration: 0.35 }}
              >
                <Block className="p-6 md:p-7">
                  <div className="grid gap-5 md:grid-cols-[220px_1fr]">
                    <div>
                      <p className="text-sm uppercase tracking-wide text-[var(--muted)]">{job.period}</p>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl leading-tight">{job.role}</h3>
                      <p className="mt-1 text-sm text-[var(--muted)]">{job.org}</p>
                      <p className="mt-4 leading-7 text-[var(--muted)]">{job.summary}</p>
                      <ul className="mt-4 space-y-2 text-[var(--ink)]">
                        {job.bullets.map((b) => (
                          <li key={b}>• {b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Block>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className={`${wrap} pt-14 md:pt-20`}>
          <div className="mb-8 flex items-center gap-3">
            <ArrowUpRight className="h-5 w-5" />
            <h2 className="font-display text-3xl md:text-4xl">Selected Projects</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, idx) => (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="block"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.06, duration: 0.35 }}
              >
                <Block className="h-full p-6 transition hover:-translate-y-1">
                  <p className="text-xs uppercase tracking-wide text-[var(--muted)]">{project.meta}</p>
                  <h3 className="mt-2 font-display text-2xl">{project.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--muted)]">{project.desc}</p>
                </Block>
              </motion.a>
            ))}
          </div>
        </section>

        <section className={`${wrap} pt-14 md:pt-20`}>
          <div className="mb-8 flex items-center gap-3">
            <Award className="h-5 w-5" />
            <h2 className="font-display text-3xl md:text-4xl">Certifications</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certs.map((cert) => (
              <Block key={cert} className="p-5">
                <p className="leading-7">{cert}</p>
              </Block>
            ))}
          </div>
        </section>

        <section id="contact" className={`${wrap} pt-14 md:pt-20`}>
          <Block className="overflow-hidden border-none bg-[var(--ink)] p-8 text-white md:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-300">Open to Roles</p>
                <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
                  Senior / Lead Data Engineer
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  If your team needs ownership-driven data engineering across Snowflake and AWS,
                  let's connect.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:prathapboddu0121@gmail.com"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-[var(--ink)]"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
                <a
                  href="./resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/25 px-5 py-3 text-sm font-medium text-white"
                >
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </div>
          </Block>
        </section>
      </main>
    </div>
  );
}
