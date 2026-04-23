const siteUrl = "https://futurebullet.kr";
const siteName = "퓨처블릿 FUTURE BULLET";
const siteDescription =
  "퓨처블릿(futurebullet)은 숫자로 증명하고 감각으로 압도하는 브랜드 컴퍼니입니다. ESTHE'LIVE·ON THE CELL·8H LAB·SLENIX 등 K-브랜드의 성공 공식을 현실로 구현합니다.";

const feedItems = [
  {
    title: "퓨처블릿 FUTURE BULLET | 브랜드 성공 공식을 설계하는 컴퍼니",
    description: siteDescription,
    link: `${siteUrl}/`,
    guid: `${siteUrl}/`,
    pubDate: new Date("2026-04-17T00:00:00+09:00"),
  },
  {
    title: "퓨처블릿 4대 브랜드 포트폴리오 - ESTHE'LIVE · ON THE CELL · 8H LAB · SLENIX",
    description:
      "홈에스테틱 스킨케어 에스테리브, 두피 과학 온더셀, 수면 설계 에잇아워랩, 프리미엄 바디 슬레닉스. 퓨처블릿이 만드는 K-브랜드 라인업.",
    link: `${siteUrl}/#brands`,
    guid: `${siteUrl}/#brands`,
    pubDate: new Date("2026-04-17T00:00:00+09:00"),
  },
  {
    title: "OUR VISION - 당신의 열정이 곧 우리의 커리어가 됩니다",
    description:
      "10개 이상의 메가 브랜드 런칭, 글로벌 K-브랜드의 주역, 연 매출 500억+. 퓨처블릿이 그리는 성장 그래프.",
    link: `${siteUrl}/#vision`,
    guid: `${siteUrl}/#vision`,
    pubDate: new Date("2026-04-17T00:00:00+09:00"),
  },
];

function escapeXml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const lastBuildDate = new Date().toUTCString();
  const items = feedItems
    .map(
      (item) => `    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${escapeXml(item.link)}</link>
      <guid isPermaLink="true">${escapeXml(item.guid)}</guid>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate.toUTCString()}</pubDate>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteName)}</title>
    <link>${siteUrl}</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>ko-KR</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
