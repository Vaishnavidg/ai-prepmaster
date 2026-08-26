import type { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "wouter";
import { Icon } from "@/components/shared/icon";

export function Button({ children, variant = "primary", onClick, href, icon, disabled, className = "" }: { children: ReactNode; variant?: "primary" | "secondary" | "ghost" | "dark"; onClick?: () => void; href?: string; icon?: typeof ArrowRight; disabled?: boolean; className?: string }) {
  const content = <>{children}{icon && <Icon icon={icon} size={16} />}</>;
  if (href) return <Link href={href} className={`button button-${variant} ${className}`} data-testid={`link-${String(children).toLowerCase().replaceAll(" ", "-")}`}>{content}</Link>;
  return <button type="button" disabled={disabled} className={`button button-${variant} ${className}`} onClick={onClick} data-testid={`button-${String(children).toLowerCase().replaceAll(" ", "-")}`}>{content}</button>;
}
