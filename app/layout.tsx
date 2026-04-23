import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://futurebullet.kr";
const siteName = "퓨처블릿 FUTURE BULLET";
const siteDescription =
  "퓨처블릿(futurebullet)은 숫자로 증명하고 감각으로 압도하는 브랜드 컴퍼니입니다. 제품 기획부터 퍼포먼스 마케팅까지, ESTHE'LIVE·ON THE CELL·8H LAB·SLENIX 등 K-브랜드의 성공 공식을 현실로 구현합니다.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "퓨처블릿 FUTURE BULLET | 브랜드 성공 공식을 설계하는 컴퍼니",
    template: "%s | 퓨처블릿 FUTURE BULLET",
  },
  description: siteDescription,
  keywords: [
    "퓨처블릿",
    "퓨쳐블릿",
    "futurebullet",
    "future bullet",
    "future-bullet",
    "퓨처블릿 브랜드",
    "K-브랜드 컴퍼니",
    "브랜드 런칭",
    "퍼포먼스 마케팅",
    "뷰티 브랜드 런칭",
    "건강기능식품 브랜드",
    "ESTHE'LIVE",
    "에스테리브",
    "ON THE CELL",
    "온더셀",
    "8H LAB",
    "에잇아워랩",
    "SLENIX",
    "슬레닉스",
  ],
  authors: [{ name: "FUTURE BULLET", url: siteUrl }],
  creator: "FUTURE BULLET",
  publisher: "FUTURE BULLET",
  applicationName: siteName,
  category: "business",
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        { url: "/rss.xml", title: "퓨처블릿 RSS Feed" },
      ],
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName,
    title: "퓨처블릿 FUTURE BULLET | 브랜드 성공 공식을 설계하는 컴퍼니",
    description: siteDescription,
    images: [
      {
        url: "/images/logo.png",
        width: 2917,
        height: 2917,
        alt: "퓨처블릿 FUTURE BULLET 로고",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "퓨처블릿 FUTURE BULLET",
    description: siteDescription,
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    other: {
      "naver-site-verification":
        "4aad1b1616a9fea4f053fdfdab3a059c190cbcf6",
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "퓨처블릿 FUTURE BULLET",
  alternateName: ["퓨처블릿", "퓨쳐블릿", "FUTURE BULLET", "futurebullet"],
  url: siteUrl,
  logo: `${siteUrl}/images/logo.png`,
  description: siteDescription,
  sameAs: [] as string[],
  brand: [
    { "@type": "Brand", name: "ESTHE'LIVE" },
    { "@type": "Brand", name: "ON THE CELL" },
    { "@type": "Brand", name: "8H LAB" },
    { "@type": "Brand", name: "SLENIX" },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  alternateName: ["퓨처블릿", "퓨쳐블릿", "futurebullet"],
  url: siteUrl,
  inLanguage: "ko-KR",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="퓨처블릿 RSS Feed"
          href="/rss.xml"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
