/**
 * ✏️ 이 파일만 수정하면 사이트 내용이 바뀝니다. (DB / 서버 없음)
 *
 * 이미지 추가 방법
 *  1. 이미지 파일을 `public/portfolio/` 폴더에 넣습니다. (예: public/portfolio/my-app.png)
 *  2. 아래 projects 항목의 image 값에 "/portfolio/my-app.png" 처럼 적습니다.
 *  3. image 를 "" (빈 값)으로 두면 그라데이션 기본 썸네일이 표시됩니다.
 *
 * 권장 이미지 비율: 4:3 (예: 1200 x 900)
 */

export type IconName =
  | "instagram"
  | "github"
  | "mail"
  | "blog"
  | "youtube"
  | "notion"
  | "link";

export type LinkItem = {
  label: string;
  description?: string;
  url: string;
  icon: IconName;
};

export type Project = {
  title: string;
  description: string;
  category: string;
  image: string; // 예: "/portfolio/project-1.png"  (빈 값이면 기본 썸네일)
  url: string; // 클릭 시 이동할 링크
  year?: string;
  tags?: string[];
};

// ───────────────────────── 프로필 ─────────────────────────
export const profile = {
  name: "홍길동",
  role: "Frontend Developer",
  // 줄바꿈은 \n 으로
  headline: "생각을 코드로,\n코드를 경험으로 만듭니다.",
  bio: "사용자가 편하다고 느끼는 화면을 고민하는 개발자입니다. 아래에서 제 작업물을 확인해 보세요.",
  avatar: "/logo.png",
  location: "Seoul, Korea",
  copyrightYear: "2026",
};

// ───────────────────────── 링크 ─────────────────────────
export const links: LinkItem[] = [
  {
    label: "Instagram",
    description: "@your_instagram",
    url: "https://instagram.com/",
    icon: "instagram",
  },
  {
    label: "GitHub",
    description: "코드 저장소",
    url: "https://github.com/",
    icon: "github",
  },
  {
    label: "Blog",
    description: "개발 기록",
    url: "https://velog.io/",
    icon: "blog",
  },
  {
    label: "Email",
    description: "hello@example.com",
    url: "mailto:hello@example.com",
    icon: "mail",
  },
];

// ───────────────────────── 포트폴리오 ─────────────────────────
export const projects: Project[] = [
  {
    title: "개인 포트폴리오 사이트",
    description: "Next.js와 Tailwind로 만든 반응형 링크 · 포트폴리오 페이지",
    category: "Web",
    image: "",
    url: "https://github.com/",
    year: "2026",
    tags: ["Next.js", "Tailwind"],
  },
  {
    title: "가계부 앱",
    description: "지출을 한눈에 볼 수 있는 심플한 가계부 서비스",
    category: "App",
    image: "",
    url: "https://github.com/",
    year: "2026",
    tags: ["React Native"],
  },
  {
    title: "브랜드 랜딩 페이지",
    description: "카페 브랜드를 위한 원페이지 랜딩 디자인 & 퍼블리싱",
    category: "Design",
    image: "",
    url: "https://github.com/",
    year: "2025",
    tags: ["Figma", "HTML/CSS"],
  },
  {
    title: "날씨 대시보드",
    description: "공공 API를 활용한 실시간 날씨 대시보드",
    category: "Web",
    image: "",
    url: "https://github.com/",
    year: "2025",
    tags: ["TypeScript", "API"],
  },
];

