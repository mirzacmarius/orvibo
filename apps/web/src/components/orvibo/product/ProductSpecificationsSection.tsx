export interface SpecificationRow {
  label: string;
  value: string;
}

interface ProductSpecificationsSectionProps {
  id?: string;
  title?: string;
  rows: SpecificationRow[];
}

export function ProductSpecificationsSection({
  id = "specifications",
  title = "Specifications",
  rows,
}: ProductSpecificationsSectionProps) {
  return (
    <section id={id} className="install product-specifications">
      <div className="block">
        <div className="title">{title}</div>
        <ul className="list">
          {rows.map((row) => (
            <li key={row.label}>
              {row.label}: {row.value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
