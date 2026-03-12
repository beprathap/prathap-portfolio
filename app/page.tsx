"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Briefcase,
  Cloud,
  Code2,
  Database,
  FileText,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
} from "lucide-react";
import SectionTitle from "@/components/section-title";

const sectionClass = "max-w-6xl mx-auto px-6 md:px-8";

const coreStack = [
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

const highlights = [
  {
    title: "Data Ingestion Platforms",
    detail:
      "Built secure ingestion flows for APIs, files, and CDC pipelines with strong operational controls.",
  },
  {
    title: "Warehouse Optimization",
    detail:
      "Reduced processing cost and improved performance with better modeling, scheduling, and workload patterns.",
  },
  {
    title: "Reliability Engineering",
    detail:
      "Implemented validation, observability, and alerting to support business-critical pipelines.",
  },
  {
    title: "Production Delivery",
    detail:
      "Owned end-to-end delivery across architecture, implementation, testing, and handoff.",
  },
];

const experience = [
  {
    role: "Lead Data Engineer",
    company: "Enterprise Automotive Platform",
    period: "Feb 2025 - Present",
    points: [
      "Led Snowflake + AWS platform work supporting high-volume customer and vehicle data.",
      "Reduced ingestion SLA from 24 hours to under 15 minutes with improved orchestration patterns.",
      "Built large-scale comparison and reconciliation jobs over 65M+ records.",
    ],
  },
  {
    role: "Senior Data Engineer",
    company: "Enterprise Healthcare Platform",
    period: "Jan 2024 - Jan 2025",
    points: [
      "Modernized ETL architecture using DBT, Snowflake Streams/Tasks, and Python workflows.",
      "Enhanced 250+ production jobs with stronger data quality, testing, and observability.",
      "Delivered significant warehouse cost reductions through model and pipeline optimization.",
    ],
  },
  {
    role: "Data Engineer",
    company: "Enterprise Data Services",
    period: "Jan 2021 - Dec 2022",
    points: [
      "Developed CDC and SCD Type 2 patterns for enterprise reporting workloads.",
      "Implemented parameterized procedures for complex JSON processing pipelines.",
      "Improved processing performance by roughly 5x for critical workloads.",
    ],
  },
];

const projects = [
  {
    title: "YouTube Data Analysis Pipeline",
    subtitle: "Airflow • Python • S3/EMR",
    description:
      "End-to-end ingestion and transformation project for YouTube metadata and engagement analytics.",
    href: "https://github.com/beprathap/youtube-dataset",
  },
  {
    title: "Netflix KPIs on Snowflake + DBT",
    subtitle: "Snowflake • DBT • Snapshots",
    description:
      "Analytics engineering project using modular DBT models, incremental logic, and SCD2-style snapshots.",
    href: "https://github.com/beprathap",
  },
  {
    title: "Heart Disease Prediction",
    subtitle: "Python • Pandas • Scikit-learn",
    description:
      "Applied machine learning workflow for clinical risk prediction with model comparison and evaluation.",
    href: "https://github.com/beprathap/heartDiseasePrediction",
  },
  {
    title: "SQL Portfolio",
    subtitle: "SQL • Problem Solving • Analytics",
    description:
      "SQL practice repository focused on analytical querying and real-world data problem solving.",
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

function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/85 backdrop-blur">
        <div className={`${sectionClass} py-4 flex items-center justify-between`}>
          <div>
            <p className="text-sm font-semibold tracking-wide">Prathap Boddu</p>
            <p className="text-xs text-slate-500">Senior Data Engineer</p>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#build" className="hover:text-slate-900">What I Build</a>
            <a href="#experience" className="hover:text-slate-900">Experience</a>
            <a href="#projects" className="hover:text-slate-900">Projects</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_24%)]" />
          <div className={`${sectionClass} relative py-16 md:py-24`}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
                  <ShieldCheck className="h-4 w-4" />
                  Senior / Lead Data Engineer Profile
                </div>
                <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
                  Building reliable data systems
                  <span className="block text-slate-500">
                    on Snowflake and AWS.
                  </span>
                </h1>
                <p className="mt-6 max-w-2xl text-lg md:text-xl leading-8 text-slate-600">
                  I design and deliver production-grade pipelines across ingestion, transformation,
                  and analytics layers. My work focuses on performance, data quality, governance,
                  and outcomes teams can measure.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90"
                  >
                    <FileText className="h-4 w-4" /> Resume
                  </a>
                  <a
                    href="https://github.com/beprathap"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/prathapboddu/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>

              <Card className="p-6 md:p-8">
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <Image
                    src="/prathap_linkedin_photo.png"
                    alt="Prathap Boddu"
                    width={1200}
                    height={900}
                    className="h-64 w-full object-cover object-top"
                    priority
                  />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-2xl font-semibold tracking-tight">4+</p>
                    <p className="text-sm text-slate-500">Years Experience</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-2xl font-semibold tracking-tight">250+</p>
                    <p className="text-sm text-slate-500">Jobs Supported</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-2xl font-semibold tracking-tight">24h to 15m</p>
                    <p className="text-sm text-slate-500">SLA Improvement</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <p className="text-2xl font-semibold tracking-tight">30-70%</p>
                    <p className="text-sm text-slate-500">Cost Reduction</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className={sectionClass}>
            <SectionTitle
              eyebrow="About"
              title="I focus on data engineering that scales"
              description="My strength is combining architecture thinking with hands-on implementation to deliver systems that stay reliable under real load."
            />
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="p-7">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-slate-100 p-3 mt-1">
                    <Cloud className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Platform Ownership</h3>
                    <p className="mt-3 text-slate-600 leading-7">
                      I build and evolve data platforms across Snowflake and AWS, balancing performance,
                      reliability, governance, and maintainability.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-7">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-slate-100 p-3 mt-1">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Execution Style</h3>
                    <p className="mt-3 text-slate-600 leading-7">
                      I work from clear business goals, translate them into practical technical plans,
                      and ship in measurable, production-ready increments.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="build" className="py-20 bg-white border-y border-slate-200/80">
          <div className={sectionClass}>
            <SectionTitle
              eyebrow="What I Build"
              title="Core areas of impact"
              description="The type of engineering work I lead and execute in production environments."
            />
            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((item) => (
                <Card key={item.title} className="p-7">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-slate-600 leading-7">{item.detail}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className={sectionClass}>
            <SectionTitle
              eyebrow="Skills"
              title="Technology stack"
              description="Tools I use regularly in architecture and delivery."
            />
            <div className="flex flex-wrap gap-2">
              {coreStack.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-white border-y border-slate-200/80">
          <div className={sectionClass}>
            <SectionTitle
              eyebrow="Experience"
              title="Career timeline"
              description="A concise view of roles, responsibilities, and outcomes."
            />
            <div className="space-y-6">
              {experience.map((item, idx) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.08, duration: 0.35 }}
                >
                  <Card className="p-7">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-slate-100 p-3 mt-1">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div className="max-w-3xl">
                        <h3 className="text-xl font-semibold">
                          {item.role} - {item.company}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">{item.period}</p>
                        <ul className="mt-5 space-y-2 text-slate-700">
                          {item.points.map((point) => (
                            <li key={point}>• {point}</li>
                          ))}
                        </ul>
                      </div>
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
              title="Selected work"
              description="Project work that reflects my approach to data engineering and analytics."
            />
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, idx) => (
                <motion.a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: idx * 0.06, duration: 0.35 }}
                  className="block"
                >
                  <Card className="h-full p-7 hover:-translate-y-1 transition-transform duration-200">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <p className="mt-2 text-sm font-medium text-slate-500">{project.subtitle}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-slate-400" />
                    </div>
                    <p className="mt-4 text-slate-600 leading-7">{project.description}</p>
                  </Card>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white border-y border-slate-200/80">
          <div className={sectionClass}>
            <SectionTitle
              eyebrow="GitHub"
              title="Open-source and hands-on learning"
              description="I regularly build and share practical data projects that sharpen my engineering skills."
            />
            <Card className="p-7">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-slate-100 p-3">
                    <Github className="h-5 w-5" />
                  </div>
                  <p className="max-w-3xl text-slate-700 leading-7">
                    My repositories include pipeline projects, analytics engineering examples, SQL practice,
                    and machine learning workflows that mirror real engineering problems.
                  </p>
                </div>
                <a
                  href="https://github.com/beprathap"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-800 hover:bg-slate-50"
                >
                  <ArrowUpRight className="h-4 w-4" /> Visit GitHub
                </a>
              </div>
            </Card>
          </div>
        </section>

        <section className="py-20">
          <div className={sectionClass}>
            <SectionTitle
              eyebrow="Certifications"
              title="Credentials"
              description="Certifications that support my cloud and data engineering foundation."
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

        <section id="contact" className="py-20">
          <div className={sectionClass}>
            <Card className="p-8 md:p-10 bg-slate-900 text-white border-slate-900 overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_28%)]" />
              <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-center">
                <div>
                  <p className="text-sm tracking-[0.22em] uppercase text-slate-300">Contact</p>
                  <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
                    Open to Senior / Lead Data Engineering roles
                  </h2>
                  <p className="mt-4 max-w-2xl text-slate-300 leading-7">
                    If your team is hiring for Snowflake, AWS, and production pipeline ownership,
                    I would be glad to connect.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:prathapboddu0121@gmail.com"
                    className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-slate-900"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </a>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-5 py-3 text-sm font-medium text-white"
                  >
                    <FileText className="h-4 w-4" /> Resume
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className={`${sectionClass} py-10 flex flex-col md:flex-row gap-6 md:items-center md:justify-between`}>
          <div>
            <p className="font-semibold">Prathap Boddu</p>
            <p className="text-sm text-slate-500 mt-1">Senior Data Engineer</p>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
