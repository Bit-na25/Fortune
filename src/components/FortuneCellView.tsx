import { type ElementCell, type Cell } from "@/data/fortune.schema";

function elementTheme(el: ElementCell["element"]) {
  switch (el) {
    case "water":
      return "bg-neutral-800 text-white border-neutral-800";
    case "fire":
      return "bg-red-600 text-white border-red-600";
    case "wood":
      return "bg-teal-600 text-white border-teal-600";
    case "metal":
      return "bg-white text-neutral-900 border-neutral-800";
    case "earth":
      return "bg-amber-600 text-white border-amber-600";
    default:
      return "bg-white text-neutral-900 border-neutral-800";
  }
}

function ElementCellView({ c }: { c: ElementCell }) {
  return (
    <div
      className={`p-1 flex flex-col rounded-xl border ${elementTheme(
        c.element
      )}`}
    >
      <span className="text-[8px]">{c.kor}</span>
      <span className="text-2xl font-bold">{c.label}</span>
      <span className="text-[8px]">{c.subLabel}</span>
    </div>
  );
}

function renderPair(label?: string, kor?: string) {
  if (!label && !kor) return null;
  return (
    <div className="flex flex-col items-center">
      {label && <span className="font-bold">{label}</span>}
      {kor && <span className="text-xs">({kor})</span>}
    </div>
  );
}

function TextCellView({ c }: { c: Cell }) {
  const isEmpty =
    (!c.label || c.label.length === 0) && (!c.kor || c.kor.length === 0);

  if (isEmpty) {
    return <div className="flex flex-col items-center text-xs">(없음)</div>;
  }

  return (
    <div className="flex flex-col items-center gap-2">
      {renderPair(c.label[0], c.kor[0])}
      {renderPair(c.label[1], c.kor[1])}
      {renderPair(c.label[2], c.kor[2])}
    </div>
  );
}

export function FortuneCellView({
  items,
  kind,
}: {
  items: ElementCell[] | Cell[];
  kind: "element" | "text";
}) {
  return (
    <>
      {kind === "element"
        ? (items as ElementCell[]).map((c, i) => (
            <td key={i} className="p-2 bg-white border-r last:border-r-0">
              <ElementCellView c={c} />
            </td>
          ))
        : (items as Cell[]).map((c, i) => (
            <td key={i} className="p-2 bg-white border-r last:border-r-0">
              <TextCellView c={c} />
            </td>
          ))}
    </>
  );
}
