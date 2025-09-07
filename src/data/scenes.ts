export type Bubble = {
  text: string;
  x: number;
  y: number;
  side?: "top" | "bottom";
  offset?: number;
};

export type Scene = {
  image: string;
  width: number; // 👈 이미지 원본 너비
  height: number; // 👈 이미지 원본 높이
  marginTop?: number;
  bubbles?: Bubble;
};

export type Chapter = {
  id: string;
  title: string;
  subTitle?: string;
  baseWidth: number;
  scenes: Scene[];
};

export const demoChapter: Chapter = {
  id: "ch1",
  title: "제 1장",
  subTitle: "나의 사주 팔자",
  baseWidth: 375,
  scenes: [
    {
      image: "/scene1.png",
      width: 375,
      height: 652,
      marginTop: 0,
      bubbles: {
        text: "이제 본격적으로\n{{name}}님의 사주팔자를\n분석해볼 차례네요.",
        x: 5,
        y: 102,
        side: "top",
        offset: 30,
      },
    },
    {
      image: "/scene2.png",
      width: 351,
      height: 285,
      marginTop: 114,
    },
    {
      image: "/scene3.png",
      width: 375,
      height: 306,
      marginTop: 40,
      bubbles: {
        text: "제가 {{name}}님의 사주를\n보기 쉽게 표로 정리했어요.",
        x: 5,
        y: -10,
        side: "bottom",
        offset: 30,
      },
    },
  ],
};
