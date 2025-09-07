import Image from "next/image";
import { FortuneCellView } from "./FortuneCellView";
import { Cell, ElementCell, FortunePayload } from "@/data/fortune.schema";

const COLS = ["時", "日", "月", "年"];

type RowDef =
  | { key: keyof FortunePayload; label: string; kor: string; type: "element" }
  | { key: keyof FortunePayload; label: string; kor: string; type: "text" };
const ROWS: RowDef[] = [
  { key: "topTenGods", label: "十星", kor: "십성", type: "text" },
  { key: "heavenlyStems", label: "天干", kor: "천간", type: "element" },
  { key: "earthlyBranches", label: "地支", kor: "지지", type: "element" },
  { key: "bottomTenGods", label: "十星", kor: "십성", type: "text" },
  { key: "twelveFortunes", label: "十二運星", kor: "십이운성", type: "text" },
  { key: "twelveSpirits", label: "十二神殺", kor: "십이신살", type: "text" },
  { key: "nobles", label: "貴人", kor: "귀인", type: "text" },
];

export default function FortuneTable({ data }: { data: FortunePayload }) {
  const { name, datetime } = data;

  return (
    <div
      className="mt-[-30px] relative w-[95%] mx-auto"
      style={{
        backgroundImage: "url('/bg_table.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-4 py-12">
        <header className="text-center relative">
          <Image
            src="/table_title.png"
            alt=""
            fill
            className="absolute inset-0"
          />
          <p>{name}님의 사주</p>
          <p className="text-2xl font-bold my-2">
            {datetime.year}년 {datetime.month}월 {datetime.day}일{" "}
            {String(datetime.hour).padStart(2, "0")}:
            {String(datetime.minute).padStart(2, "0")}
          </p>
        </header>

        <div className="mx-3 my-4">
          <table className="w-full table-fixed text-center border-r border-b border-black">
            <thead className="text-2xl border-b border-black">
              <tr>
                <th className="px-2 py-2 border-r border-black w-[68px]"></th>
                {COLS.map((h) => (
                  <th
                    key={h}
                    className="px-2 py-2 border-r last:border-r-0 w-1/4"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {ROWS.map((row) => (
                <tr key={row.key} className="border-b border-black">
                  <th className="px-2 py-2 border-r border-black">
                    <p
                      className={`font-bold ${
                        row.label.length > 2 ? "text-xs" : ""
                      }`}
                    >
                      {row.label}
                    </p>
                    <p className="text-[8px]">({row.kor})</p>
                  </th>
                  <FortuneCellView
                    items={
                      row.type === "element"
                        ? (data[row.key] as ElementCell[])
                        : (data[row.key] as Cell[])
                    }
                    kind={row.type}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
