type PageHeaderProps = {
  eyebrow: string;
  title: string;
  month?: string;
};

export default function PageHeader({
  eyebrow,
  title,
  month = "สิงหาคม 2569"
}: PageHeaderProps) {
  return (
    <header className="page-header">
      <div>
        <div className="page-eyebrow">
          {eyebrow}
        </div>

        <h1 className="page-title">
          {title}
        </h1>
      </div>

      {month && (
        <button className="month-selector">
          {month}
        </button>
      )}
    </header>
  );
}
