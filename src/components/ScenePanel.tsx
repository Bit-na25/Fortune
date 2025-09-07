"use client";

import Image from "next/image";
import SpeechBubble from "./SpeechBubble";
import type { Scene } from "@/data/scenes";

export default function ScenePanel({
  scene,
  baseWidth,
  name,
}: {
  scene: Scene;
  baseWidth: number;
  name: string;
}) {
  const w = scene.width;
  const h = scene.height;

  const widthPct = `${(w / baseWidth) * 100}%`;
  const aspect = `${w}/${h}`;

  return (
    <section style={{ marginTop: scene.marginTop ?? 0 }}>
      <div
        className="relative"
        style={{ width: widthPct, aspectRatio: aspect, maxWidth: "100%" }}
      >
        <Image src={scene.image} alt="" fill className="" />

        {scene.bubbles && (
          <div
            className="absolute"
            style={{
              left: `${scene.bubbles.x}%`,
              top: `${scene.bubbles.y}%`,
              transform: "translateY(-50%)",
            }}
          >
            <SpeechBubble
              side={scene.bubbles.side ?? "bottom"}
              offset={scene.bubbles.offset ?? 50}
            >
              {scene.bubbles.text
                .replace(/{{name}}/g, name)
                .split("\n")
                .map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
            </SpeechBubble>
          </div>
        )}
      </div>
    </section>
  );
}
