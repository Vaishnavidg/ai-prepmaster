import { ArrowRight, Check, CheckCircle2, Flame } from "lucide-react";
import { useParams } from "wouter";
import { AppShell } from "@/components/shared/app-shell";
import { Button } from "@/components/shared/action-button";
import { LevelCard } from "@/components/shared/level-card";
import { Link } from "wouter";
import { subjects, topics } from "@/data/mock-data";

export function TopicDetail() {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = topics.find((item) => item.id === topicId) || topics[0];
  const subject = subjects.find((item) => item.id === topic.subjectId) || subjects[0];
  return <AppShell><Link href={`/subjects/${subject.id}`} className="back-link" data-testid="link-back-topic-subject">← {subject.name}</Link><div className="topic-detail-head"><div><div className="eyebrow">{subject.name} / topic {topic.status.toLowerCase()}</div><h1>{topic.name}</h1><p>{topic.description}</p></div><span className={`status-pill ${topic.status === "Mastered" ? "status-green" : "status-coral"}`}>{topic.status === "Mastered" ? <Check size={14} /> : <Flame size={14} />} {topic.status}</span></div><div className="level-grid"><LevelCard level="Basic" score={topic.basicScore} done={Boolean(topic.basicScore)} href={`/assessment/assess-${topic.id}-basic`} /><LevelCard level="Intermediate" score={topic.intermediateScore} done={Boolean(topic.intermediateScore)} href={`/assessment/assess-${topic.id}-intermediate`} /><LevelCard level="Advanced" score={topic.advancedScore} done={Boolean(topic.advancedScore)} href={`/assessment/assess-${topic.id}-advanced`} /><LevelCard level="AI interview" score={topic.interviewScore} done={Boolean(topic.interviewScore)} href={`/interview/interview-${topic.id}`} interview /></div><section className="topic-notes"><div className="section-head"><div><div className="eyebrow">From your resources</div><h2>Concepts to have on the tip of your tongue.</h2></div><Button href="/resources" variant="ghost" icon={ArrowRight}>Open resources</Button></div><div className="concept-chips">{["Encapsulation", "Composition over inheritance", "Liskov substitution", "Dependency inversion"].map((concept) => <span key={concept}><CheckCircle2 size={14} />{concept}</span>)}</div></section></AppShell>;
}
