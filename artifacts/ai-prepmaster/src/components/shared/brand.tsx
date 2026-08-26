import { Sparkles } from "lucide-react";
import { Link } from "wouter";

export function Brand({ dark = false }: { dark?: boolean }) {
  return <Link href="/" className={`brand ${dark ? "brand-dark" : ""}`} data-testid="link-brand"><span className="brand-mark"><Sparkles size={15} /></span><span>prep<span className="brand-accent">master</span></span></Link>;
}
