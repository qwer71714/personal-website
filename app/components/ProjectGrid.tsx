"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Project } from "@/data/site";
import Icon from "./Icon";

const GRADIENTS = [
  "from-[#3182F6] to-[#6B5CFF]",
  "from-[#00C6FF] to-[#3182F6]",
  "from-[#8B5CF6] to-[#EC4899]",
  "from-[#FFB020] to-[#FF6B3D]",
  "from-[#00C896] to-[#00A6FF]",
];

const isExternal = (url: string) => /^https?:\/\//.test(url);

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const categories = useMemo(
    () => ["전체", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects],
  );
  const [active, setActive] = useState("전체");

  const visible =
    active === "전체" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* 카테고리 탭 */}
      <div className="no-scrollbar -mx-5 mb-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`shrink-0 rounded-full px-4 py-2 text-[15px] font-semibold transition-colors ${
              active === c
                ? "bg-[#191F28] text-white"
                : "bg-white text-[#4E5968] hover:bg-[#E5E8EB]"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* 카드 그리드 */}
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {visible.map((p) => {
          const idx = projects.indexOf(p);
          return (
            <li key={`${p.title}-${idx}`} className="fade-up" style={{ animationDelay: `${idx * 60}ms` }}>
              <a
                href={p.url}
                target={isExternal(p.url) ? "_blank" : undefined}
                rel={isExternal(p.url) ? "noopener noreferrer" : undefined}
                className="pressable group block overflow-hidden rounded-3xl bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#F2F4F6]">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div
                      className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${
                        GRADIENTS[idx % GRADIENTS.length]
                      }`}
                    >
                      <span className="text-5xl font-extrabold text-white/90 transition-transform duration-500 group-hover:scale-110">
                        {p.title.charAt(0)}
                      </span>
                    </div>
                  )}
                  <span className="absolute left-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                    {p.category}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[17px] font-bold leading-snug text-[#191F28]">
                      {p.title}
                    </h3>
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F2F4F6] text-[#8B95A1] transition-colors group-hover:bg-[#3182F6] group-hover:text-white">
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-[#6B7684]">
                    {p.description}
                  </p>
                  {(p.tags?.length || p.year) && (
                    <div className="mt-4 flex flex-wrap items-center gap-1.5">
                      {p.tags?.map((t) => (
                        <span
                          key={t}
                          className="rounded-lg bg-[#E8F3FF] px-2 py-1 text-xs font-semibold text-[#1B64DA]"
                        >
                          {t}
                        </span>
                      ))}
                      {p.year && (
                        <span className="ml-auto text-xs font-medium text-[#B0B8C1]">
                          {p.year}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      {visible.length === 0 && (
        <p className="rounded-3xl bg-white py-16 text-center text-[#8B95A1]">
          아직 등록된 작업물이 없어요.
        </p>
      )}
    </div>
  );
}

