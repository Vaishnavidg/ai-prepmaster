import { ArrowRight, CheckCircle2, Lock, MessageSquare } from "lucide-react";
import { Link } from "wouter";

export function LevelCard({ level, score, done, href, interview = false }: { level: string; score?: number; done: boolean; href: string; interview?: boolean }) {
  return <Link href={href} className={`level-card ${done ? "done" : ""} ${interview ? "interview-level" : ""}`} data-testid={`card-level-${level.toLowerCase().replace(" ", "-")}`}><div className="level-top"><span className="level-icon">{interview ? <MessageSquare size={19} /> : <span>{level.slice(0, 1)}</span>}</span>{done ? <CheckCircle2 size={18} /> : <span className="level-lock"><Lock size={14} /></span>}</div><h3>{level}</h3><p>{done ? `Best score ${score}` : level === "Basic" ? "Warm up the fundamentals" : "Unlock with the previous rep"}</p><span className="level-cta">{done ? "Practice again" : "Start assessment"} <ArrowRight size={14} /></span></Link>;
}
