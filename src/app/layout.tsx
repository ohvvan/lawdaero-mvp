import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "법대로go - AI 고소장 자동 생성 플랫폼",
  description: "간편하게 고소장을 작성하고 관리하세요",
  keywords: "고소장, AI, 법률서비스, 자동생성, 온라인접수",
  openGraph: {
    title: "법대로go - AI 고소장 자동 생성 플랫폼",
    description: "간편하게 고소장을 작성하고 관리하세요",
    type: "website",
    locale: "ko_KR",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <main role="main">{children}</main>
      </body>
    </html>
  );
}
