import { ReactNode } from "react";

type StatCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
  description?: string;
  className?: string;
};

export default function StatCard({
  icon,
  label,
  value,
  description,
  className = ""
}: StatCardProps) {
  return (
    <div className={`card kpi-card ${className}`}>
      <div className="stat-icon">
        {icon}
      </div>

      <div className="kpi-label">
        {label}
      </div>

      <div className="kpi-value">
        {value}
      </div>

      {description && (
        <div className="kpi-description">
          {description}
        </div>
      )}
    </div>
  );
}
