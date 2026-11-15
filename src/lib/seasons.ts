export type SeasonKey = "spring" | "summer" | "autumn" | "winter";

export type SolarTerm = {
  nameZh: string;
  nameEn: string;
  season: SeasonKey;
  summary: string;
};

export const seasons: Record<
  SeasonKey,
  { labelZh: string; labelEn: string; idea: string }
> = {
  spring: {
    labelZh: "春",
    labelEn: "Spring",
    idea: "生長與甦醒。適合重新建立清潔節奏，讓作息跟隨變長的白晝。",
  },
  summer: {
    labelZh: "夏",
    labelEn: "Summer",
    idea: "開展與保護。注意日照、水分與睡眠，讓護膚步驟保持清爽穩定。",
  },
  autumn: {
    labelZh: "秋",
    labelEn: "Autumn",
    idea: "收斂與潤澤。空氣轉乾時，把保濕、規律飲食與較早休息放回日常。",
  },
  winter: {
    labelZh: "冬",
    labelEn: "Winter",
    idea: "潛藏與修復。減少刺激，讓溫暖、睡眠與簡單保養成為這個季節的主軸。",
  },
};

export const solarTerms: SolarTerm[] = [
  {
    nameZh: "立春",
    nameEn: "Start of Spring",
    season: "spring",
    summary: "歲時開始轉動。觀察新芽與作息，而不是急著改變所有保養。",
  },
  {
    nameZh: "雨水",
    nameEn: "Rain Water",
    season: "spring",
    summary: "濕度回升。皮膚可能更敏感，清潔以溫和為先。",
  },
  {
    nameZh: "驚蟄",
    nameEn: "Awakening of Insects",
    season: "spring",
    summary: "萬物趨動。適合把身體重新交還給規律的起床與散步。",
  },
  {
    nameZh: "春分",
    nameEn: "Spring Equinox",
    season: "spring",
    summary: "晝夜均分。是檢視睡眠與情緒是否平衡的好時機。",
  },
  {
    nameZh: "清明",
    nameEn: "Clear and Bright",
    season: "spring",
    summary: "光線變得清晰。外出時記得日照防護與補水。",
  },
  {
    nameZh: "穀雨",
    nameEn: "Grain Rain",
    season: "spring",
    summary: "雨量增多。飲食與皮膚都可偏向清淡、少刺激。",
  },
  {
    nameZh: "立夏",
    nameEn: "Start of Summer",
    season: "summer",
    summary: "進入長晝。把防曬變成和清潔一樣穩定的步驟。",
  },
  {
    nameZh: "小滿",
    nameEn: "Grain Buds",
    season: "summer",
    summary: "飽滿而未極盛。留意煩躁與睡眠變淺的訊號。",
  },
  {
    nameZh: "芒種",
    nameEn: "Grain in Ear",
    season: "summer",
    summary: "農事繁忙的意象提醒現代人：節奏一快，休息更要被安排。",
  },
  {
    nameZh: "夏至",
    nameEn: "Summer Solstice",
    season: "summer",
    summary: "白晝最長。晚睡容易累積，可提前為夜晚設下界線。",
  },
  {
    nameZh: "小暑",
    nameEn: "Minor Heat",
    season: "summer",
    summary: "熱意明顯。清爽保養、足夠水分與陰涼休息比堆疊產品重要。",
  },
  {
    nameZh: "大暑",
    nameEn: "Major Heat",
    season: "summer",
    summary: "一年最熱的段落。減少刺激性護膚，讓皮膚降溫與修復。",
  },
  {
    nameZh: "立秋",
    nameEn: "Start of Autumn",
    season: "autumn",
    summary: "暑氣未盡而季節將轉。開始為乾燥預作準備。",
  },
  {
    nameZh: "處暑",
    nameEn: "End of Heat",
    season: "autumn",
    summary: "熱意消退。適合把晚間儀式變得更慢、更潤。",
  },
  {
    nameZh: "白露",
    nameEn: "White Dew",
    season: "autumn",
    summary: "晨涼出現。保濕與溫暖飲品成為生活裡的細節。",
  },
  {
    nameZh: "秋分",
    nameEn: "Autumn Equinox",
    season: "autumn",
    summary: "再次晝夜均分。檢視夏季留下的疲勞是否被好好安放。",
  },
  {
    nameZh: "寒露",
    nameEn: "Cold Dew",
    season: "autumn",
    summary: "涼意加深。皮膚屏障需要更穩定的保護。",
  },
  {
    nameZh: "霜降",
    nameEn: "Frost Descent",
    season: "autumn",
    summary: "由秋入冬的門檻。作息可逐漸提早，為收藏做準備。",
  },
  {
    nameZh: "立冬",
    nameEn: "Start of Winter",
    season: "winter",
    summary: "進入收藏的季節。讓溫暖、睡眠與簡單步驟成為主旋律。",
  },
  {
    nameZh: "小雪",
    nameEn: "Minor Snow",
    season: "winter",
    summary: "空氣更乾冷。室內保濕與溫和清潔特別重要。",
  },
  {
    nameZh: "大雪",
    nameEn: "Major Snow",
    season: "winter",
    summary: "外界趨靜。適合減少社交消耗，把夜晚還給身體。",
  },
  {
    nameZh: "冬至",
    nameEn: "Winter Solstice",
    season: "winter",
    summary: "白晝最短。這是一年裡最適合練習早睡的節點。",
  },
  {
    nameZh: "小寒",
    nameEn: "Minor Cold",
    season: "winter",
    summary: "寒冷未極而氣溫偏低。護膚以少刺激、多潤澤為方向。",
  },
  {
    nameZh: "大寒",
    nameEn: "Major Cold",
    season: "winter",
    summary: "歲末之寒。為來年的生長先把休息做足。",
  },
];
