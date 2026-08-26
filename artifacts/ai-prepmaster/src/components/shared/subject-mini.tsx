import { Link } from "wouter";
import type { Subject } from "@/data/mock-data";
import { Icon } from "@/components/shared/icon";
import { ProgressBar } from "@/components/shared/progress-bar";

export function SubjectMini({ subject }: { subject: Subject }) {
  return <Link href={`/subjects/${subject.id}`} className={`subject-mini tone-${subject.tone}`} data-testid={`card-subject-${subject.id}`}><div className="subject-mini-top"><span className="subject-icon"><Icon icon={subject.icon} /></span><span className="subject-progress">{subject.progress}%</span></div><h3>{subject.name}</h3><p>{subject.topicCount} topics</p><ProgressBar value={subject.progress} tone={subject.tone} /></Link>;
}
