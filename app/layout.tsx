import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ぷらっとハウス渋谷Ⅱ | 渋谷駅徒歩10分 50㎡戸建て 最大5名 民泊",
  description:
    "渋谷駅（JR・東急・東京メトロ）徒歩10分。50㎡の戸建て一棟貸切・最大5名。Netflix・キッチン・浴槽・ソファーベッド完備。渋谷観光・グループ旅行に最適。",
  keywords:
    "ぷらっとハウス渋谷Ⅱ, 渋谷 民泊, 渋谷駅 宿泊, 渋谷 戸建て 民泊, 渋谷 グループ宿泊, Shibuya accommodation, Tokyo group stay",
  openGraph: {
    title: "ぷらっとハウス渋谷Ⅱ | 渋谷駅10分 50㎡戸建て 最大5名",
    description:
      "渋谷駅10分。50㎡戸建て一棟貸切・最大5名。Netflix・キッチン・浴槽・ソファーベッド完備。",
    url: "https://shibuya2.plat-house.jp",
    siteName: "Plat House Shibuya II",
    locale: "ja_JP",
    type: "website",
  },
  alternates: {
    canonical: "https://shibuya2.plat-house.jp",
    languages: {
      "ja": "https://shibuya2.plat-house.jp",
      "en": "https://shibuya2.plat-house.jp/en",
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
          "name": "ぷらっとハウス渋谷Ⅱ",
          "url": "https://shibuya2.plat-house.jp",
          "telephone": "08070583086",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "東１－６－１１",
            "addressLocality": "渋谷区",
            "addressRegion": "東京都",
            "postalCode": "150-0011",
            "addressCountry": "JP"
          },
          "checkinTime": "16:00",
          "checkoutTime": "11:00",
          "priceRange": "¥18,000〜¥40,000",
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
