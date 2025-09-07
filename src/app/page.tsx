import FortuneTable from "@/components/FortuneTable";
import ScenePanel from "@/components/ScenePanel";
import { demoFortune } from "@/data/fortune";
import { demoChapter } from "@/data/scenes";
import Image from "next/image";

export default function Home() {
  const { title, subTitle, baseWidth, scenes } = demoChapter;
  return (
    <main className="max-w-md mx-auto bg-stone-100 relative">
      {scenes.map((scene, i) => (
        <ScenePanel
          key={i}
          scene={scene}
          baseWidth={baseWidth}
          name={demoFortune.name}
        />
      ))}

      <div className="absolute top-20 left-0 w-full flex flex-col items-center text-xl text-white/80 z-20 pointer-events-none">
        <p>{title}</p>
        <Image
          src="/title_line.png"
          alt=""
          width={157}
          height={20}
          className="my-3"
        />
        <p>{subTitle}</p>
      </div>

      <FortuneTable data={demoFortune} />
    </main>
  );
}
