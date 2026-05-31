import React, { useMemo, useState } from "react";
import {
  CheckCircle2,
  Circle,
  ClipboardList,
  FileText,
  Briefcase,
  Search,
  RotateCcw
} from "lucide-react";
function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
function LinkedInIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.942v5.664H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.602 0 4.267 2.371 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z" />
    </svg>
  );
}

function Button({ children, onClick, variant, size, className = "" }) {
  return (
    <button onClick={onClick} className={`px-3 py-2 border rounded ${className}`}>
      {children}
    </button>
  );
}
const initialData = {
  job: [
    {
      title: "Update Resume",
      items: [
        "ATS CV",
        "Use a standard format",
        "Use clear section headings",
        "Use keywords from the job description",
        "Add email, phone number, domicile, LinkedIn URL, and portfolio URL",
        "Add relevant experience, milestones, and target role in summary",
        "Use PRAQ rules: Power Verb, Result, Action, and Quantify",
        "Use 3-5 bullet points on each experience",
        "Use simple fonts",
        "Use simple formatting",
        "Use PDF format",
        "Check spelling and grammar errors",
        "Use relevant job titles",
        "Use relevant skills and achievements"
      ]
    },
    {
      title: "Customize Cover Letter",
      items: [
        "Address the job title you are applying for",
        "Address the hiring manager",
        "Use a professional tone",
        "Customize the letter for the job",
        "Explain why you are interested in the company",
        "Explain why you are a good fit",
        "Highlight relevant experience and skills",
        "Keep it concise and focused",
        "Check spelling and grammar errors",
        "Sign off professionally",
        "Include contact information"
      ]
    },
    {
      title: "Create Portfolio",
      items: [
        "Choose a platform for your portfolio",
        "Select your best work to showcase",
        "Organize your portfolio by type or theme",
        "Write clear descriptions for each project",
        "Include relevant data or metrics",
        "Highlight unique skills and strengths",
        "Include testimonials or endorsements",
        "Update your portfolio regularly",
        "Make your portfolio easy to navigate",
        "Include a call to action",
        "Be able to explain your portfolio in a presentation"
      ]
    },
    {
      title: "Build LinkedIn Network",
      items: [
        "Use a professional profile picture",
        "Write a strong headline",
        "Write an interesting About section",
        "List your experience",
        "Add skills and endorsements",
        "Engage with others",
        "Request recommendations",
        "Keep your profile updated",
        "Connect with recruiters and experts in your field",
        "Create posts about your field, journey, or projects"
      ]
    },
    {
      title: "Research Employers",
      items: [
        "Check the company's website",
        "Check the company's social media accounts",
        "Read news articles about the company",
        "Check Glassdoor reviews and ratings",
        "Check LinkedIn employee profiles",
        "Research the company's industry",
        "Research competitors",
        "Look for recent company developments",
        "Check vision, mission, and values",
        "Look for notable company leaders",
        "Research products and services"
      ]
    },
    {
      title: "Apply to Jobs",
      items: [
        "Review the job description and requirements",
        "Customize CV and cover letter for the job",
        "Double-check CV and cover letter for errors",
        "Apply through the company website or job board",
        "Follow up with a thank-you email within 24 hours",
        "Check email and phone regularly for interview requests",
        "Research the company further after applying",
        "Prepare for interviews by practicing and researching",
        "Follow up after interviews with a thank-you note",
        "Keep track of your job applications"
      ]
    }
  ],
  linkedin: [
    {
      title: "Profile Basics",
      items: [
        "Upload a professional and high-quality profile photo",
        "Ensure your face is well-lit and clearly visible",
        "Use a relevant background photo",
        "Add current position or last company",
        "Add educational background"
      ]
    },
    {
      title: "Headline & Contact Info",
      items: [
        "Craft a compelling headline",
        "Use industry-related keywords",
        "Create a custom LinkedIn username",
        "Add website or portfolio",
        "Add phone number",
        "Add email"
      ]
    },
    {
      title: "Connections",
      items: [
        "Connect with classmates and alumni",
        "Connect with colleagues and coworkers",
        "Add relevant connections from mutual contacts",
        "Connect with industry professionals",
        "Connect with recruiters and HR professionals",
        "Send messages to recruiters with relevant openings",
        "Connect with thought leaders and influencers",
        "Build connection count to 500+"
      ]
    },
    {
      title: "Profile Content",
      items: [
        "Enable Open to Work",
        "Add details about interested job types",
        "Write a concise and engaging About section",
        "Add top skills",
        "Add relevant skills in the skill section",
        "Add full-time or internship experience",
        "Add timelines for each experience",
        "Add achievement details",
        "Explain experience with relevant skills"
      ]
    },
    {
      title: "Education, Certifications & Engagement",
      items: [
        "Add formal education",
        "Add relevant non-formal education",
        "Add timeline for education",
        "Add activities and skills learned",
        "Add relevant certificates",
        "Ask for skill endorsements",
        "Post about your learning journey",
        "Post your portfolio projects"
      ]
    }
  ],
  cv: [
    {
      title: "General ATS Format",
      items: [
        "Use ATS-friendly one-column design",
        "Use professional and readable fonts",
        "Avoid photos for ATS unless required",
        "Keep formatting, font size, color, and alignment consistent",
        "Keep CV maximum two pages",
        "Do not include references"
      ]
    },
    {
      title: "Personal Information",
      items: [
        "Make name larger than other information",
        "Include phone number",
        "Include LinkedIn profile link",
        "Use simplified LinkedIn URL",
        "Include email address",
        "Include domicile, not full address",
        "Include portfolio, GitHub, or personal website"
      ]
    },
    {
      title: "Summary / Objective",
      items: [
        "No grammar errors",
        "Use neat punctuation, spacing, and paragraph alignment",
        "Keep it under five lines",
        "Use PRAQ rules and show impact",
        "Include a clear unique selling point"
      ]
    },
    {
      title: "Experience",
      items: [
        "List experience from newest to oldest",
        "Keep company name, job title, location, and date format consistent",
        "Use PRAQ rules and show impact",
        "Include experience relevant to the target role",
        "Use an appropriate number of bullet points",
        "Avoid repeating the same power verbs",
        "Check grammar errors",
        "Keep format, font, and writing style consistent"
      ]
    },
    {
      title: "Education & Skills",
      items: [
        "Include relevant education information",
        "Include GPA only when beneficial",
        "Include relevant organization experience",
        "Include relevant informal education",
        "Add only related soft skills",
        "Add hard skills matching the target role"
      ]
    }
  ]
};

const tabs = [
  { key: "job", label: "Job Tracker", icon: Briefcase },
  { key: "linkedin", label: "LinkedIn", icon: LinkedInIcon },
  { key: "cv", label: "CV ATS", icon: FileText }
];

function createState(data) {
  const state = {};
  Object.entries(data).forEach(([tab, sections]) => {
    state[tab] = sections.map((section) => ({
      ...section,
      items: section.items.map((task) => ({ task, done: false }))
    }));
  });
  return state;
}

function getStats(sections) {
  const items = sections.flatMap((section) => section.items);
  const total = items.length;
  const done = items.filter((item) => item.done).length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  return { total, done, remaining: total - done, percent };
}

function ProgressBar({ value }) {
  return (
    <div className="h-3 w-full rounded-full bg-slate-200 overflow-hidden">
      <div className="h-full rounded-full bg-slate-900 transition-all duration-500" style={{ width: `${value}%` }} />
    </div>
  );
}

function StatCard({ title, value, subtitle }) {
  return (
    <Card className="rounded-2xl shadow-sm border-slate-200">
      <CardContent className="p-5">
        <p className="text-sm text-slate-500">{title}</p>
        <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
        <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
      </CardContent>
    </Card>
  );
}

export default function JobReadyDashboardV1() {
  const [data, setData] = useState(() => createState(initialData));
  const [activeTab, setActiveTab] = useState("job");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const activeSections = data[activeTab];
  const activeStats = useMemo(() => getStats(activeSections), [activeSections]);
  const allStats = useMemo(() => getStats(Object.values(data).flat()), [data]);

  const filteredSections = activeSections
    .map((section, sectionIndex) => ({
      ...section,
      originalIndex: sectionIndex,
      items: section.items
        .map((item, itemIndex) => ({ ...item, originalIndex: itemIndex }))
        .filter((item) => {
          const matchesQuery = item.task.toLowerCase().includes(query.toLowerCase()) || section.title.toLowerCase().includes(query.toLowerCase());
          const matchesFilter = filter === "all" || (filter === "done" && item.done) || (filter === "nope" && !item.done);
          return matchesQuery && matchesFilter;
        })
    }))
    .filter((section) => section.items.length > 0);

  const toggleItem = (sectionIndex, itemIndex) => {
    setData((current) => ({
      ...current,
      [activeTab]: current[activeTab].map((section, sIndex) =>
        sIndex === sectionIndex
          ? {
              ...section,
              items: section.items.map((item, iIndex) =>
                iIndex === itemIndex ? { ...item, done: !item.done } : item
              )
            }
          : section
      )
    }));
  };

  const resetActiveTab = () => {
    setData((current) => ({ ...current, [activeTab]: createState(initialData)[activeTab] }));
  };

  const markSectionDone = (sectionIndex, done) => {
    setData((current) => ({
      ...current,
      [activeTab]: current[activeTab].map((section, sIndex) =>
        sIndex === sectionIndex
          ? { ...section, items: section.items.map((item) => ({ ...item, done })) }
          : section
      )
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-sm text-slate-600 shadow-sm">
              <ClipboardList className="h-4 w-4" />
              Version 1 · No AI · Checklist Dashboard
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-950">JobReady Dashboard</h1>
            <p className="mt-3 max-w-2xl text-slate-600">
              Track job-search readiness from resume preparation to LinkedIn optimization, employer research, and ATS-friendly CV checks.
            </p>
          </div>
          <Button onClick={resetActiveTab} variant="outline" className="rounded-xl">
            <RotateCcw className="mr-2 h-4 w-4" /> Reset current tab
          </Button>
        </div>

        <div className="mb-6 grid gap-4 md:grid-cols-4">
          <StatCard title="Overall readiness" value={`${allStats.percent}%`} subtitle={`${allStats.done}/${allStats.total} tasks completed`} />
          <StatCard title="Current tab" value={`${activeStats.percent}%`} subtitle={`${activeStats.done}/${activeStats.total} completed`} />
          <StatCard title="Remaining" value={activeStats.remaining} subtitle="Tasks left in this tab" />
          <Card className="rounded-2xl shadow-sm border-slate-200">
            <CardContent className="p-5">
              <p className="text-sm text-slate-500">Progress</p>
              <p className="mt-2 text-xl font-semibold">{tabs.find((tab) => tab.key === activeTab)?.label}</p>
              <div className="mt-4"><ProgressBar value={activeStats.percent} /></div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6 flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-sm md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {tabs.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition ${
                  activeTab === key ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search task..."
                className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-sm outline-none focus:border-slate-400 sm:w-64"
              />
            </div>
            <select
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-slate-400"
            >
              <option value="all">All tasks</option>
              <option value="done">Done only</option>
              <option value="nope">Nope only</option>
            </select>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {filteredSections.map((section) => {
            const stats = getStats([section]);
            return (
              <Card key={section.title} className="rounded-2xl border-slate-200 shadow-sm">
                <CardContent className="p-5">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h2 className="text-lg font-semibold text-slate-950">{section.title}</h2>
                      <p className="mt-1 text-sm text-slate-500">{stats.done}/{stats.total} completed · {stats.percent}%</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="rounded-xl" onClick={() => markSectionDone(section.originalIndex, true)}>Done</Button>
                      <Button size="sm" variant="outline" className="rounded-xl" onClick={() => markSectionDone(section.originalIndex, false)}>Clear</Button>
                    </div>
                  </div>
                  <ProgressBar value={stats.percent} />
                  <div className="mt-4 space-y-2">
                    {section.items.map((item) => (
                      <button
                        key={`${section.title}-${item.originalIndex}`}
                        onClick={() => toggleItem(section.originalIndex, item.originalIndex)}
                        className="flex w-full items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left transition hover:border-slate-300 hover:bg-slate-50"
                      >
                        {item.done ? <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" /> : <Circle className="mt-0.5 h-5 w-5 text-slate-400" />}
                        <div className="flex-1">
                          <p className={`text-sm leading-6 ${item.done ? "text-slate-500 line-through" : "text-slate-800"}`}>{item.task}</p>
                          <span className={`mt-2 inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${item.done ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}>{item.done ? "Done" : "Nope"}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
