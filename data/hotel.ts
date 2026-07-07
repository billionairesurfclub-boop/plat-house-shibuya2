export const hotel = {
  id: "plat-house-shibuya2",
  name: {
    ja: "ぷらっとハウス渋谷Ⅱ",
    en: "Plat House Shibuya II",
  },
  catchcopy: {
    ja: "渋谷駅徒歩10分。50㎡の戸建てで最大5名。渋谷エリアへのアクセス抜群のプライベートステイ",
    en: "10 min from Shibuya Station. Cozy 50㎡ house for up to 5 guests in the heart of Shibuya.",
  },
  address: {
    postalCode: "150-0011",
    ja: "東京都渋谷区東１－６－１１",
    en: "1-6-11 Higashi, Shibuya-ku, Tokyo 150-0011",
  },
  area: "渋谷",
  phone: "08070583086",
  category: "民泊",
  website: "https://shibuya2.plat-house.jp",
  checkIn: "16:00",
  checkOut: "11:00",
  price: {
    min: 18000,
    max: 40000,
    currency: "JPY",
  },
  cancelPolicy: "7日前まで無料キャンセル可能",
  languages: ["ja", "en"],
  googleMapUrl: "",
  bookingUrl: "https://beds24.com/booking.php?propid=293360&referer=BookingLink",
  rating: {
    google: 0,
    bookingCom: 0,
  },
  access: [
    { station: "渋谷駅", line: "JR・東急・東京メトロ各線", walk: 10 },
  ],
  floors: "戸建て",
  parking: 0,
  capacity: 5,
  size: "50㎡",
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
    name: { ja: "ぷらっとハウス渋谷Ⅱ（50㎡・戸建て）", en: "Plat House Shibuya II (50㎡ House)" },
    bedType: { ja: "寝室A：シングル布団×2 ／ リビング：クイーンベッド×1・ソファーベッド×1", en: "Bedroom A: 2 Single Futons / Living: 1 Queen Bed + 1 Sofa Bed" },
    maxGuests: 5,
    description: {
      ja: "50㎡の戸建て一棟貸切。寝室にシングル布団2組、リビングにクイーンベッドとソファーベッドを備え、最大5名様でご利用いただけます。渋谷駅から徒歩10分の好立地。",
      en: "Entire 50㎡ house. Bedroom with 2 single futons, living room with queen bed and sofa bed. Accommodates up to 5 guests. 10 min walk from Shibuya Station.",
    },
    images: [],
  },
];

export const faqs = [
  {
    q: { ja: "チェックインは何時ですか？", en: "What time is check-in?" },
    a: { ja: "チェックインは16時、チェックアウトは11時です。セルフチェックイン対応のため、深夜・早朝でも安心です。", en: "Check-in is at 16:00, check-out is at 11:00. Self check-in is available anytime." },
  },
  {
    q: { ja: "何名まで宿泊できますか？", en: "How many guests can stay?" },
    a: { ja: "最大5名様までご宿泊いただけます。寝室にシングル布団2組・リビングにクイーンベッドとソファーベッドをご用意しています。", en: "Up to 5 guests. Bedroom has 2 single futons; living room has 1 queen bed and 1 sofa bed." },
  },
  {
    q: { ja: "渋谷駅からどのくらいですか？", en: "How far from Shibuya Station?" },
    a: { ja: "渋谷駅（JR・東急・東京メトロ各線）から徒歩10分です。渋谷の観光・ショッピングへすぐアクセスできます。", en: "10 min walk from Shibuya Station (JR, Tokyu, Tokyo Metro lines). Easy access to Shibuya sightseeing and shopping." },
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
