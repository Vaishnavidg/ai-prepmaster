import { ArrowRight, CheckCircle2, Clock3, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useParams } from "wouter";
import { AppShell } from "@/components/shared/app-shell";
import { Button } from "@/components/shared/action-button";
import { ProgressBar } from "@/components/shared/progress-bar";

export function Assessment() {
  const { assessmentId } = useParams<{ assessmentId: string }>();
  const [, setLocation] = useLocation();
  const level = assessmentId?.includes("advanced") ? "Advanced" : assessmentId?.includes("intermediate") ? "Intermediate" : "Basic";
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const options = ["Encapsulation keeps implementation details private.", "Inheritance is always safer than composition.", "Every class should expose all of its state.", "Interfaces are only useful in typed languages."];
  const submit = () => { setSubmitted(true); window.setTimeout(() => setLocation(`/results/result-oops-${level.toLowerCase()}`), 380); };
  return <AppShell><div className="assessment-top"><Link href="/training/oops" className="back-link" data-testid="link-exit-assessment">Exit session</Link><span className="assessment-meta">{level.toUpperCase()} / OOP <span>Question 03 of 08</span></span><span className="assessment-timer"><Clock3 size={15} /> 07:42</span></div><div className="assessment-progress"><span style={{ width: "37.5%" }} /></div><div className="assessment-layout"><div className="question-panel"><div className="question-kicker"><span className="question-number">03</span><span>Concept check · Object-Oriented Programming</span></div><h1>Which principle best describes keeping an object's internal state protected from direct outside access?</h1><div className="answer-list">{options.map((option, index) => <button type="button" className={`answer-option ${selected === option ? "selected" : ""}`} onClick={() => setSelected(option)} key={option} data-testid={`button-answer-${index + 1}`}><span className="answer-letter">{String.fromCharCode(65 + index)}</span><span>{option}</span>{selected === option && <CheckCircle2 size={18} />}</button>)}</div><div className="question-actions"><span>{selected ? "Answer selected" : "Choose the answer you’d defend in an interview."}</span><Button onClick={submit} disabled={!selected || submitted} icon={ArrowRight}>{submitted ? "Saving your result…" : "Lock answer"}</Button></div></div><aside className="assessment-aside"><div className="assessment-score"><span>SESSION SIGNAL</span><strong>86</strong><small>current confidence</small><ProgressBar value={86} /></div><div className="aside-tip"><Sparkles size={18} /><strong>Interviewer lens</strong><p>Look for the principle, then connect it to a concrete design decision.</p></div><div className="question-map"><span>QUESTION MAP</span><div>{[1,2,3,4,5,6,7,8].map((q) => <i key={q} className={q < 3 ? "answered" : q === 3 ? "current" : ""}>{q}</i>)}</div></div></aside></div></AppShell>;
}
