import type { Metadata, Viewport } from "next";
import { profile } from "@/data/site";
import "./globals.css";

// Vercel 배포 시 자동으로 배포 주소를 사용 (로컬은 localhost)
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} | ${profile.role}`,
  description: profile.bio,
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.bio,
    images: ["/logo.png"],
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F2F4F6",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        {/* Pretendard 폰트 (토스 느낌의 한글 폰트) */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
