import Image from "next/image";
import { links, profile, projects } from "@/data/site";
import Icon from "./components/Icon";
import ProjectGrid from "./components/ProjectGrid";

const isExternal = (url: string) => /^https?:\/\//.test(url);

export default function Home() {
  return (
    <div className="min-h-dvh bg-[#F2F4F6]">
      {/* 상단 바 */}
      <header className="sticky top-0 z-20 border-b border-black/[0.04] bg-[#F2F4F6]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 lg:px-8">
          <a href="#" className="flex items-center gap-2">
            <Image
              src={profile.avatar}
              alt=""
              width={28}
              height={28}
              priority
            />
            <span className="text-[17px] font-bold tracking-tight text-[#191F28]">
              {profile.name}
            </span>
          </a>
          <a
            href="#work"
            className="pressable rounded-full bg-[#3182F6] px-4 py-1.5 text-sm font-semibold text-white hover:bg-[#1B64DA]"
          >
            작업물 보기
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-16 pt-8 lg:grid lg:grid-cols-[380px_1fr] lg:gap-12 lg:px-8 lg:pt-14">
        {/* 왼쪽 : 프로필 + 링크 (PC에서는 고정) */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <section className="fade-up">
            <div className="relative h-20 w-20 overflow-hidden rounded-[28px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="80px"
                className="object-cover"
                priority
              />
            </div>

            <p className="mt-6 text-[15px] font-semibold text-[#3182F6]">
              {profile.role}
            </p>
            <h1 className="mt-2 whitespace-pre-line text-[28px] font-extrabold leading-[1.35] tracking-tight text-[#191F28] lg:text-[34px]">
              {profile.headline}
            </h1>
            <p className="mt-4 text-[16px] leading-relaxed text-[#4E5968]">
              {profile.bio}
            </p>
            {profile.location && (
              <p className="mt-3 text-sm font-medium text-[#8B95A1]">
                📍 {profile.location}
              </p>
            )}
          </section>

          {/* 링크 리스트 */}
          <nav
            aria-label="링크"
            className="fade-up mt-8 overflow-hidden rounded-3xl bg-white p-2"
            style={{ animationDelay: "80ms" }}
          >
            <ul>
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.url}
                    target={isExternal(l.url) ? "_blank" : undefined}
                    rel={isExternal(l.url) ? "noopener noreferrer" : undefined}
                    className="pressable flex items-center gap-4 rounded-2xl px-3 py-3 hover:bg-[#F2F4F6]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E8F3FF] text-[#3182F6]">
                      <Icon name={l.icon} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[16px] font-semibold text-[#191F28]">
                        {l.label}
                      </span>
                      {l.description && (
                        <span className="block truncate text-sm text-[#8B95A1]">
                          {l.description}
                        </span>
                      )}
                    </span>
                    <Icon name="chevron" className="h-5 w-5 text-[#B0B8C1]" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* 오른쪽 : 포트폴리오 */}
        <section id="work" className="mt-14 scroll-mt-20 lg:mt-0">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="text-[22px] font-bold tracking-tight text-[#191F28] lg:text-[26px]">
              작업물
              <span className="ml-2 text-[#3182F6]">{projects.length}</span>
            </h2>
          </div>
          <ProjectGrid projects={projects} />
        </section>
      </main>

      <footer className="border-t border-black/[0.04] py-8 text-center text-sm text-[#8B95A1]">
        © {profile.copyrightYear} {profile.name}. All rights reserved.
      </footer>
    </div>
  );
}
