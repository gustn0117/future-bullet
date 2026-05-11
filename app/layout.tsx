import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://futurebullet.co.kr";
const siteName = "퓨처블릿 FUTURE BULLET";
const siteDescription =
  "퓨처블릿(futurebullet) | 뷰티·헬스 K-브랜드 런칭 전문, 기획부터 퍼포먼스 마케팅까지 설계하는 컴퍼니";
const siteEmail = "futurebullet@futurebullet.kr";

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
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "퓨처블릿 FUTURE BULLET - 브랜드 성공 공식을 설계하는 컴퍼니",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "퓨처블릿 FUTURE BULLET",
    description: siteDescription,
    images: ["/og-image.jpg"],
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
  image: `${siteUrl}/og-image.jpg`,
  description: siteDescription,
  slogan: "숫자로 증명하고, 감각으로 압도합니다.",
  email: siteEmail,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: siteEmail,
      availableLanguage: ["Korean", "English"],
    },
  ],
  sameAs: [] as string[],
  brand: [
    { "@type": "Brand", name: "ESTHE'LIVE", alternateName: "에스테리브" },
    { "@type": "Brand", name: "ON THE CELL", alternateName: "온더셀" },
    { "@type": "Brand", name: "8H LAB", alternateName: "에잇아워랩" },
    { "@type": "Brand", name: "SLENIX", alternateName: "슬레닉스" },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  alternateName: ["퓨처블릿", "퓨쳐블릿", "futurebullet"],
  url: siteUrl,
  inLanguage: "ko-KR",
  publisher: { "@type": "Organization", name: "퓨처블릿 FUTURE BULLET" },
};

// Removes `.no-js` so JS-gated animations (Reveal) run only when scripting is active.
const noJsRemoval =
  "document.documentElement.classList.remove('no-js')";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="no-js">
      <head>
        <script dangerouslySetInnerHTML={{ __html: noJsRemoval }} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="퓨처블릿 RSS Feed"
          href="/rss.xml"
        />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
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
