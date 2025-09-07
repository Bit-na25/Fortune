export type Element = "water" | "metal" | "wood" | "fire" | "earth";

export type Cell = {
  label: string[];
  kor: string[];
};

export type ElementCell = {
  label: string;
  kor: string;
  element: Element;
  subLabel: string;
};

export type FortunePayload = {
  name: string;
  datetime: {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
  };

  topTenGods: Cell[]; // 십성
  heavenlyStems: ElementCell[]; // 천간
  earthlyBranches: ElementCell[]; // 지지
  bottomTenGods: Cell[]; // 십성
  twelveFortunes: Cell[]; // 십이운성
  twelveSpirits: Cell[]; // 십이신살
  nobles: Cell[]; // 귀인
};
