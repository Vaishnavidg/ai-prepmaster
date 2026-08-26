import { ArrowRight, ArrowUpRight, Plus, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { AppShell } from "@/components/shared/app-shell";
import { PageHeading } from "@/components/shared/page-heading";
import { Button } from "@/components/shared/action-button";
import { ProgressBar } from "@/components/shared/progress-bar";
import { Icon } from "@/components/shared/icon";
import { subjects } from "@/data/mock-data";

export function Subjects() {
  const [filter, setFilter] = useState("All");
  const filtered = subjects.filter((s) => filter === "All" || s.name === filter);
  return <AppShell><PageHeading eyebrow="Study map" title="Your subjects." description="A living map of the skills your next role will ask you to use." action={<Button href="/resources/upload" variant="secondary" icon={Plus}>Add material</Button>} /><div className="filter-row"><div className="segmented">{["All", ...subjects.map((s) => s.name)].map((item) => <button type="button" key={item} className={filter === item ? "selected" : ""} onClick={() => setFilter(item)} data-testid={`button-filter-${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</button>)}</div><div className="map-summary"><span className="summary-dot" /> 4 subjects · 43 topics mapped</div></div><div className="subjects-grid">{filtered.map((subject) => <Link href={`/subjects/${subject.id}`} className={`subject-card tone-${subject.tone}`} key={subject.id} data-testid={`card-subject-full-${subject.id}`}><div className="subject-card-head"><span className="subject-icon large"><Icon icon={subject.icon} size={22} /></span><span className="subject-progress">{subject.progress}%</span></div><h2>{subject.name}</h2><p>{subject.description}</p><div className="subject-card-foot"><span>{subject.topicCount} topics</span><ProgressBar value={subject.progress} tone={subject.tone} /></div><span className="card-arrow"><ArrowUpRight /></span></Link>)}</div><section className="callout-strip"><span className="callout-icon"><Sparkles size={18} /></span><div><strong>Make the map yours.</strong><p>Upload notes, paste a course link, or add a topic you know is coming. PrepMaster will prioritize the rest.</p></div><Button href="/resources/upload" variant="secondary" icon={ArrowRight}>Add a resource</Button></section></AppShell>;
}
