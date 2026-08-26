export function ProgressBar({ value, tone = "coral" }: { value: number; tone?: string }) {
  return <div className={`progress-track progress-${tone}`}><span style={{ width: `${value}%` }} /></div>;
}
