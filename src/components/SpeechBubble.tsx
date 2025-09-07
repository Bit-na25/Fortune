"use client";

type Side = "top" | "bottom";

export default function SpeechBubble({
  children,
  side = "bottom",
  offset = 50,
}: {
  children: React.ReactNode;
  side?: Side;
  offset?: number;
}) {
  const tailBase = "absolute w-0 h-0";
  const style: React.CSSProperties = {};
  let tri = "";

  if (side === "top") {
    tri = "border-x-[8px] border-x-transparent border-b-[14px] border-b-white";
    Object.assign(style, {
      left: `${offset}%`,
      top: -13,
      transform: "translateX(-50%)",
    });
  } else {
    tri = "border-x-[8px] border-x-transparent border-t-[14px] border-t-white";
    Object.assign(style, {
      left: `${offset}%`,
      bottom: -13,
      transform: "translateX(-50%)",
    });
  }

  return (
    <div className="relative inline-block">
      <div className="bg-white rounded-full px-14 py-8 text-center shadow-lg">
        {children}
      </div>
      <div className={`${tailBase} ${tri}`} style={style} aria-hidden />
    </div>
  );
}
