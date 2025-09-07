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
  const styleOuter: React.CSSProperties = {};
  const styleInner: React.CSSProperties = {};
  let triOuter = "";
  let triInner = "";

  if (side === "top") {
    triOuter =
      "border-x-[9px] border-x-transparent border-b-[16px] border-b-black";
    triInner =
      "border-x-[8px] border-x-transparent border-b-[14px] border-b-white";
    Object.assign(styleOuter, {
      left: `${offset}%`,
      top: -15,
      transform: "translateX(-50%)",
    });
    Object.assign(styleInner, {
      left: `${offset}%`,
      top: -13,
      transform: "translateX(-50%)",
    });
  } else {
    triOuter =
      "border-x-[9px] border-x-transparent border-t-[16px] border-t-black";
    triInner =
      "border-x-[8px] border-x-transparent border-t-[14px] border-t-white";
    Object.assign(styleOuter, {
      left: `${offset}%`,
      bottom: -15,
      transform: "translateX(-50%)",
    });
    Object.assign(styleInner, {
      left: `${offset}%`,
      bottom: -13,
      transform: "translateX(-50%)",
    });
  }

  return (
    <div className="relative inline-block">
      <div className="bg-white border border-black rounded-full px-14 py-8 text-center shadow-lg">
        {children}
      </div>
      {/* 꼬리 바깥 (검은 테두리) */}
      <div
        className={`absolute w-0 h-0 ${triOuter}`}
        style={styleOuter}
        aria-hidden
      />
      {/* 꼬리 안쪽 (흰색 채움) */}
      <div
        className={`absolute w-0 h-0 ${triInner}`}
        style={styleInner}
        aria-hidden
      />
    </div>
  );
}
