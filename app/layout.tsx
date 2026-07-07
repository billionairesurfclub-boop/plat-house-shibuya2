import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぷらっとハウス北新宿 | 大久保駅徒歩10分 80㎡3LDK戸建て 最大10名 民泊",
  description:
    "大久保駅（JR総武線）徒歩10分・東中野駅徒歩7分。80㎡の3LDK戸建て一棟貸切・最大10名。Netflix・キッチン・浴槽・ソファーベッド完備。新宿観光・グループ旅行に最適。",
  keywords:
    "ぷらっとハウス北新宿, 大久保 民泊, 北新宿 宿泊, 新宿 戸建て 民泊, 新宿 グループ宿泊, 東中野 民泊, Kitashinjuku accommodation, Tokyo group stay",
  openGraph: {
    title: "ぷらっとハウス北新宿 | 大久保駅10分 80㎡3LDK 最大10名",
    description:
      "大久保駅10分・東中野駅7分。80㎡3LDK戸建て一棟貸切・最大10名。Netflix・キッチン・浴槽完備。",
    url: "https://kitashinjuku.plat-house.jp",
    siteName: "Plat House Kitashinjuku",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://kitashinjuku.plat-house.jp",
    languages: {
      "ja": "https://kitashinjuku.plat-house.jp",
      "en": "https://kitashinjuku.plat-house.jp/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-4CNFJ2E4RV" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4CNFJ2E4RV');
        `}</Script>
        <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "ぷらっとハウス北新宿",
          "url": "https://kitashinjuku.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "北新宿４－２１－１７",
            "addressLocality": "新宿区",
            "addressRegion": "東京都",
            "postalCode": "169-0074",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥30,000〜¥70,000",
          "amenityFeature": [
            { "@type": "LocationFeatureSpecification", "name": "Netflix", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "Nintendo Switch", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "キッチン", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "浴槽", "value": true },
            { "@type": "LocationFeatureSpecification", "name": "ポケットWi-Fi", "value": true }
          ]
        }) }} />
        {children}
      </body>
    </html>
  );
}
