export const brand = {
  name: "Eastern Beauty",
  nameZh: "東方美容",
  tagline: "Modern Oriental Beauty & Wellness",
  promise:
    "將東方千年的美容智慧，轉化成現代人可以理解、實踐的美容與健康生活方式。",
  descriptionEn:
    "A modern approach to beauty, inspired by Eastern wisdom and mindful living.",
  shortIntro:
    "一個結合東方美容文化、中醫養生智慧與現代健康生活的品牌。",
  email: "hello@easternbeauty.com",
  partnershipEmail: "partners@easternbeauty.com",
  instagramUrl: "https://instagram.com/easternbeauty",
  instagramHandle: "@easternbeauty",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

export const siteTitle = {
  default: `${brand.name} · ${brand.tagline}`,
  template: `%s · ${brand.name}`,
} as const;
