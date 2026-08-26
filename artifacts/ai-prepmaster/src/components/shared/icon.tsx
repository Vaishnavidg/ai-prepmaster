import type { Code2 } from "lucide-react";

export function Icon({ icon: IconComponent, size = 18 }: { icon: typeof Code2; size?: number }) {
  return <IconComponent size={size} strokeWidth={1.8} />;
}

export const initials = (name: string) => name.split(" ").map((word) => word[0]).join("").slice(0, 2).toUpperCase();
