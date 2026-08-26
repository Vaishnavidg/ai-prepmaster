import { CheckCircle2, Moon, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { AppShell } from "@/components/shared/app-shell";
import { PageHeading } from "@/components/shared/page-heading";
import { Icon } from "@/components/shared/icon";

export function SettingsPage() {
  const [appearance, setAppearance] = useState(() => document.documentElement.classList.contains("dark") ? "dark" : "light");
  const [notifications, setNotifications] = useState(true);
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", appearance === "dark");
  }, [appearance]);
  return <AppShell><PageHeading eyebrow="Account" title="Settings." description="Make PrepMaster fit the way you prepare." /><div className="settings-layout"><section className="settings-section"><div className="settings-section-head"><div><h2>Appearance</h2><p>Choose the surface that keeps you focused.</p></div></div><div className="appearance-options">{[{id:"light",label:"Warm light",desc:"Paper, coral, clarity",icon:Sparkles},{id:"dark",label:"Deep focus",desc:"Low light, high signal",icon:Moon}].map((option) => <button type="button" key={option.id} className={`appearance-option ${appearance === option.id ? "selected" : ""}`} onClick={() => setAppearance(option.id)} data-testid={`button-appearance-${option.id}`}><span className={`appearance-preview ${option.id}`}><Icon icon={option.icon} size={16} /></span><strong>{option.label}</strong><small>{option.desc}</small>{appearance === option.id && <CheckCircle2 className="appearance-check" size={17} />}</button>)}</div></section><section className="settings-section"><div className="settings-section-head"><div><h2>Notifications</h2><p>Small nudges, never noise.</p></div></div><div className="setting-toggle"><div><strong>Daily focus reminder</strong><small>A quiet reminder at 9:00 AM</small></div><button type="button" className={`toggle ${notifications ? "on" : ""}`} onClick={() => setNotifications(!notifications)} data-testid="button-toggle-notifications"><span /></button></div><div className="setting-toggle"><div><strong>Weekly signal recap</strong><small>A Monday snapshot of your progress</small></div><button type="button" className="toggle on" data-testid="button-toggle-recap"><span /></button></div></section><section className="settings-section danger-section"><div><h2>Data & privacy</h2><p>Your local demo data is stored only in this browser.</p></div><button type="button" className="text-danger" onClick={() => { setSaved(true); window.setTimeout(() => setSaved(false), 1500); }} data-testid="button-clear-data">Clear local data</button></section>{saved && <div className="saved-message"><CheckCircle2 size={15} /> Settings saved</div>}</div></AppShell>;
}
