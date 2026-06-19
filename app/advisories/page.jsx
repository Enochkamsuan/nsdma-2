"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  Phone,
  ShieldAlert,
  Activity,
  MapPin,
  CloudRain,
  Users,
  FileText,
  Download,
  Calendar,
  ChevronRight,
  Search,
  Bell,
  Mail,
  Megaphone,
  Newspaper,
  Briefcase,
  ArrowRight,
  Radio,
} from "lucide-react";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "NSDMA — Nagaland State Disaster Management Authority" },
//       { name: "description", content: "Live alerts, weather, helplines and disaster preparedness resources for all 16 districts of Nagaland." },
//     ],
//   }),
//   component: Landing,
// });

/* ---------- 1. Emergency Alert Ticker ---------- */
function EmergencyTicker() {
  const alerts = [
    {
      sev: "high",
      text: "HEAVY RAINFALL WARNING — Kohima, Phek, Kiphire (next 48 hrs)",
    },
    {
      sev: "med",
      text: "Landslide advisory issued for NH-29 Dimapur–Kohima corridor",
    },
    {
      sev: "low",
      text: "Mock evacuation drill scheduled in Mokokchung — 22 June 2026",
    },
    {
      sev: "high",
      text: "Flash flood watch active for low-lying areas of Dimapur district",
    },
  ];
  const items = [...alerts, ...alerts];
  return (
    <div className="bg-emergency text-emergency-foreground border-b border-emergency/50">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-2 text-sm">
        <span className="flex shrink-0 items-center gap-2 font-semibold uppercase tracking-wider">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          Live Alerts
        </span>
        <div className="flex-1 overflow-hidden">
          <div className="flex w-max animate-ticker gap-12 whitespace-nowrap">
            {items.map((a, i) => (
              <span key={i} className="flex items-center gap-2">
                <AlertTriangle className="h-3.5 w-3.5" />
                <span className="font-medium">[{a.sev.toUpperCase()}]</span>
                {a.text}
              </span>
            ))}
          </div>
        </div>
        <a
          href="#advisories"
          className="shrink-0 rounded border border-white/40 px-3 py-1 text-xs font-semibold hover:bg-white/10"
        >
          View all
        </a>
      </div>
    </div>
  );
}

/* ---------- 2. SOS Helpline Bar ---------- */
function SosBar() {
  const lines = [
    { num: "112", label: "Emergency", desc: "All services" },
    { num: "1077", label: "SDRF Control Room", desc: "State HQ" },
    { num: "101", label: "Fire", desc: "Fire & rescue" },
    { num: "108", label: "Ambulance", desc: "Medical" },
    { num: "100", label: "Police", desc: "Law & order" },
  ];
  return (
    <section className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {lines.map((l) => (
            <a
              key={l.num}
              href={`tel:${l.num}`}
              className="group flex items-center gap-3 rounded-md border border-border bg-background px-3 py-2.5 transition hover:border-emergency hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-emergency/10 text-emergency group-hover:bg-emergency group-hover:text-emergency-foreground">
                <Phone className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="text-lg font-bold leading-none text-foreground">
                  {l.num}
                </p>
                <p className="truncate text-[11px] text-muted-foreground">
                  {l.label}
                </p>
              </div>
            </a>
          ))}
          <a
            href="#"
            className="group flex items-center justify-center gap-2 rounded-md bg-emergency px-3 py-2.5 text-emergency-foreground transition hover:opacity-90"
          >
            <Megaphone className="h-4 w-4" />
            <span className="text-sm font-semibold">Report Incident</span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gov-navy via-primary to-gov-navy text-gov-navy-foreground">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px, 40px 40px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <Radio className="h-3 w-3 text-gov-saffron" /> Operational 24×7
          </span>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] md:text-5xl">
            Protecting <span className="text-gov-saffron">16 districts</span>
            <br /> of Nagaland from disaster.
          </h2>
          <p className="mt-5 max-w-lg text-base text-gov-navy-foreground/80">
            Real-time weather monitoring, early warning dissemination, response
            coordination and community preparedness — built for every village,
            every household.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#advisories"
              className="rounded-md bg-gov-saffron px-5 py-2.5 text-sm font-semibold text-gov-navy hover:opacity-90"
            >
              View live advisories
            </a>
            <a
              href="#subscribe"
              className="rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold hover:bg-white/10"
            >
              Subscribe to alerts
            </a>
          </div>
        </div>
        <SituationStats />
      </div>
    </section>
  );
}

function useCounter(target, duration = 4000) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return v;
  console.log("target", target);
}

function StatCard({ icon: Icon, value, label, tone }) {
  const v = useCounter(value);
  return (
    <div className="rounded-lg border border-white/15 bg-white/5 p-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <Icon className={`h-5 w-5 ${tone}`} />
        <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-safe" />
      </div>
      <p className="mt-3 text-3xl font-bold tabular-nums">{v}</p>
      <p className="text-xs text-gov-navy-foreground/70">{label}</p>
    </div>
  );
}
function SituationStats() {
  return (
    <div className="grid grid-cols-2 gap-3">
      <StatCard
        icon={AlertTriangle}
        value={4}
        label="Active advisories"
        tone="text-warning"
      />
      <StatCard
        icon={MapPin}
        value={16}
        label="Districts monitored"
        tone="text-gov-saffron"
      />
      <StatCard
        icon={CloudRain}
        value={87}
        label="Weather stations live"
        tone="text-safe"
      />
      <StatCard
        icon={Activity}
        value={142}
        label="Incidents resolved (YTD)"
        tone="text-gov-saffron"
      />
      <StatCard
        icon={Users}
        value={28450}
        label="Volunteers registered"
        tone="text-safe"
      />
      <StatCard
        icon={ShieldAlert}
        value={36}
        label="Drills conducted '26"
        tone="text-warning"
      />
    </div>
  );
}

/* ---------- 4. Resources & Downloads ---------- */
function Resources() {
  const docs = [
    {
      t: "Do's & Don'ts — Earthquake",
      k: "Preparedness",
      size: "1.2 MB",
      date: "Mar 2026",
    },
    {
      t: "State Disaster Management Plan 2025",
      k: "Policy",
      size: "8.4 MB",
      date: "Jan 2026",
    },
    { t: "Landslide Response SOP", k: "SOP", size: "640 KB", date: "Nov 2025" },
    {
      t: "Flood Preparedness Booklet (English)",
      k: "Awareness",
      size: "2.1 MB",
      date: "Aug 2025",
    },
    {
      t: "Annual Report 2024–25",
      k: "Report",
      size: "5.8 MB",
      date: "Jul 2025",
    },
    {
      t: "School Safety Guidelines",
      k: "Guideline",
      size: "1.9 MB",
      date: "Jun 2025",
    },
  ];
  return (
    <section id="resources" className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead
          eyebrow="Knowledge Base"
          title="Resources & Downloads"
          desc="Official guidelines, SOPs, awareness booklets and annual reports."
        />
        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {docs.map((d) => (
            <a
              key={d.t}
              href="#"
              className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 transition hover:border-primary hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="inline-block rounded bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-foreground">
                  {d.k}
                </span>
                <p className="mt-1.5 line-clamp-2 font-semibold text-foreground group-hover:text-primary">
                  {d.t}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  PDF · {d.size} · {d.date}
                </p>
              </div>
              <Download className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. News / Press / Tenders ---------- */
function NewsRow() {
  const cols = [
    {
      icon: Newspaper,
      title: "Latest News",
      items: [
        {
          d: "18 Jun 2026",
          t: "NSDMA conducts joint earthquake drill across 4 districts",
        },
        {
          d: "12 Jun 2026",
          t: "Pre-monsoon readiness review chaired by Chief Secretary",
        },
        {
          d: "05 Jun 2026",
          t: "New Doppler radar commissioned for Eastern Nagaland",
        },
      ],
    },
    {
      icon: Megaphone,
      title: "Press Releases",
      items: [
        {
          d: "16 Jun 2026",
          t: "Advisory: Heavy rainfall expected — districts on alert",
        },
        {
          d: "10 Jun 2026",
          t: "MoU signed with IMD for hyperlocal forecasting",
        },
        {
          d: "01 Jun 2026",
          t: "World Environment Day — community resilience pledge",
        },
      ],
    },
    {
      icon: Briefcase,
      title: "Tenders & Notices",
      items: [
        {
          d: "Closes 30 Jun",
          t: "Supply of emergency response kits — Phase II",
        },
        { d: "Closes 25 Jun", t: "Empanelment of training agencies for CBDRR" },
        { d: "Closes 20 Jun", t: "Hiring: Consultant — Risk Assessment (GIS)" },
      ],
    },
  ];
  return (
    <section id="news" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead
          eyebrow="Newsroom"
          title="What's happening at NSDMA"
          desc="News, official press releases and active tenders."
        />
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {cols.map((c) => (
            <div
              key={c.title}
              className="rounded-lg border border-border bg-card"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                  <c.icon className="h-4 w-4" /> {c.title}
                </h3>
                <a
                  href="#"
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  View all
                </a>
              </div>
              <ul className="divide-y divide-border">
                {c.items.map((it) => (
                  <li key={it.t}>
                    <a
                      href="#"
                      className="group flex gap-3 px-5 py-3.5 hover:bg-secondary"
                    >
                      <span className="shrink-0 rounded bg-secondary px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                        {it.d}
                      </span>
                      <span className="text-sm font-medium text-foreground group-hover:text-primary">
                        {it.t}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. Advisory Archive (searchable) ---------- */
function AdvisoryArchive() {
  const all = [
    {
      id: "ADV-2026-041",
      date: "18 Jun 2026",
      district: "Kohima",
      type: "Rainfall",
      sev: "High",
    },
    {
      id: "ADV-2026-040",
      date: "17 Jun 2026",
      district: "Phek",
      type: "Landslide",
      sev: "Medium",
    },
    {
      id: "ADV-2026-039",
      date: "15 Jun 2026",
      district: "Dimapur",
      type: "Flood",
      sev: "High",
    },
    {
      id: "ADV-2026-038",
      date: "12 Jun 2026",
      district: "Mokokchung",
      type: "Thunderstorm",
      sev: "Low",
    },
    {
      id: "ADV-2026-037",
      date: "10 Jun 2026",
      district: "Tuensang",
      type: "Rainfall",
      sev: "Medium",
    },
    {
      id: "ADV-2026-036",
      date: "08 Jun 2026",
      district: "Kiphire",
      type: "Landslide",
      sev: "High",
    },
    {
      id: "ADV-2026-035",
      date: "05 Jun 2026",
      district: "Wokha",
      type: "Hailstorm",
      sev: "Low",
    },
    {
      id: "ADV-2026-034",
      date: "02 Jun 2026",
      district: "Zunheboto",
      type: "Rainfall",
      sev: "Medium",
    },
  ];
  const [q, setQ] = useState("");
  const [sev, setSev] = useState("All");
  const filtered = useMemo(
    () =>
      all.filter(
        (a) =>
          (sev === "All" || a.sev === sev) &&
          (q === "" ||
            `${a.id} ${a.district} ${a.type}`
              .toLowerCase()
              .includes(q.toLowerCase())),
      ),
    [q, sev],
  );
  const sevColor = (s) =>
    s === "High"
      ? "bg-emergency text-emergency-foreground"
      : s === "Medium"
        ? "bg-warning text-warning-foreground"
        : "bg-safe text-safe-foreground";
  return (
    <section id="advisories" className="bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead
          eyebrow="Archive"
          title="Advisory & Incident Records"
          desc="Searchable archive of all advisories issued by NSDMA."
        />
        <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
          <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by district, type or advisory ID…"
                className="w-full text-black rounded-md border border-input bg-background py-2 pl-9 pr-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <select
              value={sev}
              onChange={(e) => setSev(e.target.value)}
              className="rounded-md border border-input text-black bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            >
              <option>All</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-secondary text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 text-left">Advisory ID</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">District</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Severity</th>
                  <th className="px-4 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filtered.map((a) => (
                  <tr key={a.id} className="hover:bg-secondary/60">
                    <td className="px-4 py-3 font-mono text-xs font-semibold text-primary">
                      {a.id}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {a.date}
                    </td>
                    <td className="px-4 py-3 font-medium text-muted-foreground">{a.district}</td>
                    <td className="px-4 py-3 text-muted-foreground">{a.type}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`rounded px-2 py-0.5 text-[11px] font-semibold ${sevColor(a.sev)}`}
                      >
                        {a.sev}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                      >
                        View <ChevronRight className="h-3 w-3" />
                      </a>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-4 py-10 text-center text-sm text-muted-foreground"
                    >
                      No advisories match your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. Early Warning Subscription ---------- */
function Subscribe() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState("Kohima");
  const [done, setDone] = useState(false);
  const districts = [
    "Kohima",
    "Dimapur",
    "Mokokchung",
    "Tuensang",
    "Phek",
    "Wokha",
    "Zunheboto",
    "Mon",
    "Kiphire",
    "Longleng",
    "Peren",
    "Noklak",
    "Chümoukedima",
    "Niuland",
    "Tseminyu",
    "Shamator",
  ];
  return (
    <section
      id="subscribe"
      className="relative overflow-hidden bg-gov-navy py-16 text-gov-navy-foreground"
    >
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gov-saffron/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium">
            <Bell className="h-3 w-3 text-gov-saffron" /> Early Warning System
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Get alerts before disaster strikes.
          </h2>
          <p className="mt-4 max-w-md text-gov-navy-foreground/80">
            Free SMS and email alerts for severe weather, landslides, flash
            floods and evacuation orders — delivered the moment they're issued
            for your district.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {[
              "No cost. Operated by Government of Nagaland.",
              "Choose your district — receive only what matters.",
              "Unsubscribe anytime by replying STOP.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gov-saffron" />{" "}
                {t}
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setDone(true);
          }}
          className="rounded-lg border border-white/15 bg-white/5 p-6 backdrop-blur"
        >
          {done ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-safe text-safe-foreground">
                <Bell className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold">You're subscribed.</h3>
              <p className="mt-2 text-sm text-gov-navy-foreground/80">
                Alerts for {district} will arrive on the channels you provided.
              </p>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-bold">Subscribe for free</h3>
              <div className="mt-4 space-y-3">
                <Field label="District">
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm outline-none focus:border-gov-saffron"
                  >
                    {districts.map((d) => (
                      <option key={d} className="bg-gov-navy">
                        {d}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Mobile (for SMS)">
                  <input
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 …"
                    className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm outline-none placeholder:text-gov-navy-foreground/50 focus:border-gov-saffron"
                  />
                </Field>
                <Field label="Email (optional)">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm outline-none placeholder:text-gov-navy-foreground/50 focus:border-gov-saffron"
                  />
                </Field>
                <button className="mt-2 flex w-full items-center justify-center gap-2 rounded-md bg-gov-saffron px-4 py-2.5 text-sm font-semibold text-gov-navy hover:opacity-90">
                  <Mail className="h-4 w-4" /> Activate alerts{" "}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-[11px] text-gov-navy-foreground/60">
                  By subscribing you consent to receive critical alerts. NSDMA
                  does not share your data with third parties.
                </p>
              </div>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-gov-navy-foreground/70">
        {label}
      </span>
      {children}
    </label>
  );
}

/* ---------- helpers ---------- */
function SectionHead({ eyebrow, title, desc }) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
        {title}
      </h2>
      <p className="mt-2 text-muted-foreground">{desc}</p>
    </div>
  );
}

export default function AdvisoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <EmergencyTicker />

      <SosBar />
      <Hero />
      <Resources />
      <NewsRow />
      <AdvisoryArchive />
      <Subscribe />
    </div>
  );
}
