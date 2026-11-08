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
  name: "김윤겸",
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
    description: "@yoon._.kyeom",
    url: "https://www.instagram.com/yoon._.kyeom/",
    icon: "instagram",
  },
  {
    label: "GitHub",
    description: "qwer71714의 코드 저장소",
    url: "https://github.com/qwer71714",
    icon: "github",
  },
  {
    label: "Gmail",
    description: "dpqjvmffoslt123@gmail.com",
    url: "dpqjvmffoslt123@gmail.com",
    icon: "mail",
  },
];

// ───────────────────────── 포트폴리오 ─────────────────────────
export const projects: Project[] = [
  {
    title: "SpendLog.ai",
    description: "가계부시트를 시각화로 볼수 있는 PC 사이트",
    category: "PC",
    image: "",
    url: "https://spendlog-puce.vercel.app/",
    year: "2026",
    tags: ["Next.js"],
  },
];

