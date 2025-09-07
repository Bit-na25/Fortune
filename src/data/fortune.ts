import type { FortunePayload } from "./fortune.schema";

export const demoFortune: FortunePayload = {
  name: "김로켓",
  datetime: { year: 1980, month: 8, day: 27, hour: 8, minute: 10 },

  topTenGods: [
    { label: ["傷官"], kor: ["상관"] },
    { label: ["比肩"], kor: ["비견"] },
    { label: ["傷官"], kor: ["상관"] },
    { label: ["傷官"], kor: ["상관"] },
  ],

  heavenlyStems: [
    { label: "壬", kor: "임", element: "water", subLabel: "陽水" },
    { label: "丁", kor: "정", element: "fire", subLabel: "陰火" },
    { label: "癸", kor: "계", element: "water", subLabel: "陰水" },
    { label: "癸", kor: "계", element: "water", subLabel: "陰水" },
  ],

  earthlyBranches: [
    { label: "寅", kor: "인", element: "wood", subLabel: "陽木" },
    { label: "巳", kor: "사", element: "fire", subLabel: "陰火" },
    { label: "亥", kor: "해", element: "water", subLabel: "陰水" },
    { label: "酉", kor: "유", element: "metal", subLabel: "陰金" },
  ],

  bottomTenGods: [
    { label: ["比肩"], kor: ["비견"] },
    { label: ["劫財"], kor: ["겁재"] },
    { label: ["食神"], kor: ["식신"] },
    { label: ["偏財"], kor: ["편재"] },
  ],

  twelveFortunes: [
    { label: ["死"], kor: ["사"] },
    { label: ["帝旺"], kor: ["제왕"] },
    { label: ["胎"], kor: ["태"] },
    { label: ["長生"], kor: ["장생"] },
  ],

  twelveSpirits: [
    { label: ["劫殺"], kor: ["겁살"] },
    { label: ["地殺"], kor: ["지살"] },
    { label: ["驛馬殺"], kor: ["역마살"] },
    { label: ["將星殺"], kor: ["장성살"] },
  ],

  nobles: [
    { label: [], kor: [] },
    { label: [], kor: [] },
    { label: ["天乙"], kor: ["천을귀인"] },
    {
      label: ["天乙", "太極", "文昌"],
      kor: ["천을귀인", "태극귀인", "문창귀인"],
    },
  ],
};
