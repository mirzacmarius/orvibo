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
    <section
      id={id}
      className="mx-auto w-full max-w-[16rem] scroll-mt-[calc(50px+0.8rem)] bg-[#f8f8f8] px-[0.48rem] pt-[1.4rem] pb-[2rem]"
    >
      <div className="mx-auto max-w-[10rem] rounded-[8px] bg-white p-[0.48rem] shadow-[0_0.12rem_0.24rem_rgba(0,0,0,0.07)]">
        <div className="text-center font-orvibo text-[0.36rem] font-extrabold leading-[0.5rem] text-black">
          {title}
        </div>
        <ul className="mt-[0.3rem] divide-y divide-[#ededed]">
          {rows.map((row) => (
            <li
              key={row.label}
              className="grid min-h-[0.72rem] grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-center gap-[0.3rem] py-[0.16rem] font-orvibo text-[0.18rem] leading-[0.28rem] text-black/70"
            >
              <span className="font-semibold text-black">{row.label}</span>
              <span>{row.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
