import {
  BarChart3, CircleHelp, FileText, Flame, Home,
  Library, Menu, MoreHorizontal, Settings2, Target, UserRound, X
} from "lucide-react";
import { type ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { Brand } from "@/components/shared/brand";
import { Icon } from "@/components/shared/icon";

const nav = [
  { href: "/dashboard", label: "Overview", icon: Home },
  { href: "/subjects", label: "Study map", icon: Library },
  { href: "/resources", label: "My resources", icon: FileText },
  { href: "/training", label: "Training", icon: Target },
  { href: "/progress", label: "Progress", icon: BarChart3 }
];
const secondary = [
  { href: "/profile", label: "Profile", icon: UserRound },
  { href: "/settings", label: "Settings", icon: Settings2 }
];

export function AppShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [drawer, setDrawer] = useState(false);
  const navBody = <><div className="sidebar-top"><Brand dark /><button className="mobile-close" onClick={() => setDrawer(false)} data-testid="button-close-menu"><X size={20} /></button></div><div className="sidebar-section-label">Your preparation</div><nav>{nav.map((item) => <Link href={item.href} key={item.href} onClick={() => setDrawer(false)} className={`side-link ${location.startsWith(item.href) ? "active" : ""}`} data-testid={`link-nav-${item.label.toLowerCase().replace(" ", "-")}`}><Icon icon={item.icon} /><span>{item.label}</span>{item.label === "Training" && <span className="nav-ping" />}</Link>)}</nav><div className="sidebar-section-label sidebar-later">Account</div><nav>{secondary.map((item) => <Link href={item.href} key={item.href} onClick={() => setDrawer(false)} className={`side-link ${location.startsWith(item.href) ? "active" : ""}`} data-testid={`link-nav-${item.label.toLowerCase()}`}><Icon icon={item.icon} /><span>{item.label}</span></Link>)}</nav><div className="sidebar-bottom"><div className="streak-card"><div className="streak-top"><Flame size={16} /><span>6 day streak</span></div><div className="streak-dots">{[1, 2, 3, 4, 5, 6, 7].map((day) => <span key={day} className={day < 7 ? "filled" : ""} />)}</div><small>One focused session today keeps it alive.</small></div><div className="sidebar-user"><span className="avatar avatar-small">AR</span><span><strong>Alex Rivera</strong><small>Candidate</small></span><MoreHorizontal size={16} /></div></div></>;
  return <div className="app-frame"><aside className={`sidebar ${drawer ? "drawer-open" : ""}`}>{navBody}</aside>{drawer && <button className="drawer-scrim" onClick={() => setDrawer(false)} aria-label="Close menu" data-testid="button-scrim" /> }<main className="main-area"><header className="topbar"><button className="mobile-menu" onClick={() => setDrawer(true)} data-testid="button-open-menu"><Menu size={22} /></button><div className="crumb">{location === "/dashboard" ? "Good morning, Alex" : location.slice(1).split("/")[0]?.replaceAll("-", " ")}</div><div className="topbar-actions"><button className="icon-button" data-testid="button-help"><CircleHelp size={19} /></button><Link href="/profile" className="avatar" data-testid="link-avatar">AR</Link></div></header><div className="page-wrap">{children}</div><nav className="mobile-bottom">{nav.slice(0, 4).map((item) => <Link href={item.href} key={item.href} className={location.startsWith(item.href) ? "active" : ""} data-testid={`link-mobile-${item.label.toLowerCase()}`}><Icon icon={item.icon} size={18} /><span>{item.label}</span></Link>)}</nav></main></div>;
}
