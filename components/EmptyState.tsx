import { ReactNode } from "react";

type EmptyStateProps = {
  icon: ReactNode;
  title: string;
  description: React.ReactNode;
  buttonText?: string;
  onClick?: () => void;
};

export default function EmptyState({
  icon,
  title,
  description,
  buttonText,
  onClick
}: EmptyStateProps) {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        {icon}
      </div>

      <div className="empty-title">
        {title}
      </div>

      <div className="empty-description">
        {description}
      </div>

      {buttonText && (
        <button
          className="button button-secondary"
          style={{ marginTop: 14 }}
          onClick={onClick}
        >
          + {buttonText}
        </button>
      )}
    </div>
  );
}
