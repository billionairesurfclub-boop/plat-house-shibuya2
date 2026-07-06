export const hotel = {
  id: "plat-house-kitashinjuku",
  name: {
    ja: "ぷらっとハウス北新宿",
    en: "Plat House Kitashinjuku",
  },
  catchcopy: {
    ja: "大久保駅徒歩10分。80㎡の3LDK戸建て一棟貸切・最大10名。新宿エリアへのアクセス抜群のプライベートステイ",
    en: "10 min from Okubo Station. Entire 80㎡ 3LDK house for up to 10 guests near Shinjuku.",
  },
  address: {
    postalCode: "169-0074",
    ja: "東京都新宿区北新宿４－２１－１７",
    en: "4-21-17 Kitashinjuku, Shinjuku-ku, Tokyo 169-0074",
  },
  area: "大久保・東中野",
  phone: "08070583086",
  category: "民泊",
  website: "https://kitashinjuku.plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 30000,
    max: 70000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=240503&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "大久保駅", line: "JR総武線", walk: 10 },
    { station: "東中野駅", line: "JR総武線・都営大江戸線", walk: 7 },
  ],
  floors: "4階建て",
  parking: 0,
  capacity: 10,
  size: "80㎡",
};

export const amenities = [
  { name: "Netflix", nameEn: "Netflix", icon: "🎬", highlight: true },
  { name: "Nintendo Switch", nameEn: "Nintendo Switch", icon: "🎮", highlight: true },
  { name: "ポケットWi-Fi", nameEn: "Pocket Wi-Fi", icon: "📶", highlight: true },
  { name: "インターネット（Wi-Fi）", nameEn: "Wi-Fi Internet", icon: "🌐", highlight: true },
  { name: "浴槽", nameEn: "Bathtub", icon: "🛁", highlight: true },
  { name: "キッチン", nameEn: "Kitchen", icon: "🍳", highlight: true },
  { name: "ソファーベッド", nameEn: "Sofa Bed", icon: "🛋️", highlight: true },
  { name: "ボタニスト（アメニティ）", nameEn: "Botanist Amenities", icon: "🌿", highlight: false },
  { name: "空気清浄機・加湿器", nameEn: "Air Purifier & Humidifier", icon: "💨", highlight: false },
  { name: "洗濯機", nameEn: "Washing Machine", icon: "🫧", highlight: false },
  { name: "冷蔵庫", nameEn: "Refrigerator", icon: "🧊", highlight: false },
  { name: "電子レンジ", nameEn: "Microwave", icon: "♨️", highlight: false },
  { name: "電気ケトル", nameEn: "Electric Kettle", icon: "☕", highlight: false },
  { name: "調理器具・食器", nameEn: "Cookware & Tableware", icon: "🍽️", highlight: false },
  { name: "エアコン", nameEn: "Air Conditioning", icon: "❄️", highlight: false },
  { name: "大型TV", nameEn: "Large TV", icon: "📺", highlight: false },
  { name: "独立トイレ", nameEn: "Separate Toilet", icon: "🚽", highlight: false },
  { name: "ウォシュレット", nameEn: "Washlet", icon: "✨", highlight: false },
  { name: "ヘアドライヤー", nameEn: "Hair Dryer", icon: "💨", highlight: false },
  { name: "コテ＆カールアイロン", nameEn: "Curling Iron", icon: "💅", highlight: false },
  { name: "アイロン", nameEn: "Iron", icon: "👔", highlight: false },
];

export const rooms = [
  {
    id: "room-a",
    floor: "",
    name: { ja: "ぷらっとハウス北新宿（80㎡・3LDK戸建て）", en: "Plat House Kitashinjuku (80㎡ 3LDK House)" },
    bedType: { ja: "寝室A：クイーンベッド×1 ／ 寝室B：クイーンベッド×1 ／ 寝室C：ダブルベッド×1 ／ リビング：クイーンソファーベッド×1", en: "Bedroom A: Queen Bed / Bedroom B: Queen Bed / Bedroom C: Double Bed / Living: Queen Sofa Bed" },
    maxGuests: 10,
    description: {
      ja: "80㎡の3LDK戸建て一棟貸切。3つの独立した寝室とリビングを備え、最大10名様でご利用いただけます。大久保駅から徒歩10分、東中野駅から徒歩7分の好立地。新宿観光・グループ旅行の拠点に最適です。",
      en: "Entire 80㎡ 3LDK house. Three separate bedrooms and a living room, accommodating up to 10 guests. 10 min from Okubo Station, 7 min from Higashi-Nakano Station.",
    },
    images: [
    "/images/photo-01.jpg",
    "/images/photo-02.png",
    "/images/photo-03.png",
    "/images/photo-04.png",
    "/images/photo-05.png",
    "/images/photo-06.png",
    "/images/photo-07.png",
    "/images/photo-08.png",
    "/images/photo-09.jpg",
    "/images/photo-10.jpg",
    "/images/photo-11.jpg",
    "/images/photo-12.jpg",
    "/images/photo-13.jpg",
    "/images/photo-14.jpg",
    "/images/photo-15.jpg",
    "/images/photo-16.jpg",
    "/images/photo-17.jpg",
    "/images/photo-18.jpg"
  ],
  },
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16時、チェックアウトは11時です。セルフチェックイン対応のため、深夜・早朝でも安心です。", en: "Check-in is at 16:00, check-out is at 11:00. Self check-in is available anytime." },
  },
  {
    q: { ja: "何名まで宿泊できますか？", en: "How many guests can stay?" },
    a: { ja: "最大10名様までご宿泊いただけます。3つの寝室（クイーン×2・ダブル×1）とリビングのクイーンソファーベッドをご用意しています。", en: "Up to 10 guests. Three bedrooms (2 queen beds, 1 double bed) plus a queen sofa bed in the living room." },
  },
  {
    q: { ja: "最寄り駅はどこですか？", en: "What is the nearest station?" },
    a: { ja: "大久保駅（JR総武線）徒歩10分、東中野駅（JR総武線・都営大江戸線）徒歩7分です。新宿駅からも近く、観光やショッピングに最適です。", en: "Okubo Station (JR Sobu Line) is a 10 min walk, Higashi-Nakano Station (JR Sobu Line / Toei Oedo Line) is a 7 min walk." },
  },
  {
    q: { ja: "駐車場はありますか？", en: "Is there parking?" },
    a: { ja: "専用駐車場はございません。近隣のコインパーキングをご利用ください。", en: "There is no on-site parking. Please use nearby coin parking facilities." },
  },
  {
    q: { ja: "キャンセルポリシーを教えてください。", en: "What is the cancellation policy?" },
    a: { ja: "ご予約日の7日前まで無料でキャンセルいただけます。", en: "Free cancellation is available up to 7 days before check-in." },
  },
];
