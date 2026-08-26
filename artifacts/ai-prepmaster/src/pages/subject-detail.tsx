import { Check, ChevronRight, Lock, Play, Search } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "wouter";
import { AppShell } from "@/components/shared/app-shell";
import { PageHeading } from "@/components/shared/page-heading";
import { Button } from "@/components/shared/action-button";
import { ProgressBar } from "@/components/shared/progress-bar";
import { Icon } from "@/components/shared/icon";
import { subjects, topics } from "@/data/mock-data";

export function SubjectDetail() {
  const { subjectId } = useParams<{ subjectId: string }>();
  const subject = subjects.find((item) => item.id === subjectId) || subjects[0];
  const subjectTopics = topics.filter((topic) => topic.subjectId === subject.id);
  const [query, setQuery] = useState("");
  const shown = subjectTopics.filter((topic) => topic.name.toLowerCase().includes(query.toLowerCase()));
  return <AppShell><Link href="/subjects" className="back-link" data-testid="link-back-subjects">← Study map</Link><PageHeading eyebrow={`${subject.name} / ${subjectTopics.length} topics`} title={subject.name} description={subject.description} action={<Button href={`/training/${subject.id === "data-structures" ? "oops" : "subject"}`} icon={Play}>Practice subject</Button>} /><div className="detail-hero"><div className="detail-stat"><span className={`subject-icon large tone-${subject.tone}`}><Icon icon={subject.icon} size={23} /></span><div><strong>{subject.progress}%</strong><small>subject progress</small></div></div><div className="detail-stat"><div className="stat-figure">03</div><div><strong>of {subjectTopics.length}</strong><small>topics mastered</small></div></div><div className="detail-stat"><div className="stat-figure">+8</div><div><strong>this week</strong><small>readiness change</small></div></div><div className="detail-quote">“Clarity beats coverage.”<small>— your training principle</small></div></div><div className="topic-toolbar"><h2>Topic progression</h2><label className="search-field"><Search size={16} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search topics" data-testid="input-search-topics" /></label></div><div className="topic-list">{shown.map((topic, index) => <Link href={`/topics/${topic.id}`} className="topic-row" key={topic.id} data-testid={`row-topic-${topic.id}`}><span className="topic-index">0{index + 1}</span><span className={`topic-state state-${topic.status.replace(" ", "-").toLowerCase()}`}>{topic.status === "Mastered" ? <Check size={14} /> : topic.status === "In progress" ? <Play size={11} fill="currentColor" /> : <Lock size={13} />}</span><div className="topic-info"><strong>{topic.name}</strong><small>{topic.description}</small></div><div className="topic-score"><span>{topic.progress}%</span><ProgressBar value={topic.progress} tone={subject.tone} /></div><ChevronRight size={17} /></Link>)}</div></AppShell>;
}
