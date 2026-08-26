import type { ReactNode } from "react";

export function PageHeading({ eyebrow, title, description, action }: { eyebrow: string; title: string; description?: string; action?: ReactNode }) {
  return <div className="page-heading"><div><div className="eyebrow">{eyebrow}</div><h1 data-testid="text-page-title">{title}</h1>{description && <p>{description}</p>}</div>{action && <div>{action}</div>}</div>;
}
