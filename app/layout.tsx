import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FUTURBLIT | 퓨처블릿",
  description:
    "숫자로 증명하고, 감각으로 압도합니다. 제품 기획부터 퍼포먼스 마케팅까지, 성공의 공식을 현실로 구현합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
