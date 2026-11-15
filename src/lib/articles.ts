import { images } from "@/lib/images";

export const articleCategories = [
  { slug: "ancient-beauty", label: "Ancient Beauty" },
  { slug: "tcm-beauty", label: "TCM Beauty" },
  { slug: "modern-skincare", label: "Modern Skincare" },
  { slug: "food-wellness", label: "Food & Wellness" },
  { slug: "sleep-lifestyle", label: "Sleep & Lifestyle" },
] as const;

export type ArticleCategory = (typeof articleCategories)[number]["slug"];

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "note"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  coverImage: string;
  coverAlt: string;
  readingMinutes: number;
  publishedAt: string;
  featured?: boolean;
  content: ContentBlock[];
};

export const culturalNote =
  "本文以文化、歷史與生活觀察為主，並非醫療建議，亦不將古籍記載或傳統方法視為已驗證的現代治療方式。";

export const articles: Article[] = [
  {
    slug: "ancient-beauty-rituals-china",
    title:
      "Ancient Beauty Rituals: How Did Women Care for Their Skin in Ancient China?",
    excerpt:
      "從梳洗、香澤到時令起居，回看古代女性如何把「養顏」放進日常節奏之中。",
    category: "ancient-beauty",
    coverImage: images.skin,
    coverAlt: "柔和光線下的肌膚與保養質感",
    readingMinutes: 7,
    publishedAt: "2026-03-12",
    featured: true,
    content: [
      {
        type: "note",
        text: culturalNote,
      },
      {
        type: "p",
        text: "在許多傳世文獻與筆記中，「美」很少被單獨寫成一套外用配方，而是與起居、飲食、時令和心境連在一起。梳洗、焚香、敷面、更衣，往往是生活禮儀的一部分，而不只是為了改變外貌。",
      },
      {
        type: "h2",
        text: "日常即儀式",
      },
      {
        type: "p",
        text: "清晨梳髮、淨面、整理衣飾，被視為一天的開始；夜晚則強調安歇與收斂。這些動作的重點，不只是工具或材料，而是把身體照顧放進可重複的節奏裡。對現代讀者而言，它更像一種生活設計：固定、溫和、可長期執行。",
      },
      {
        type: "h2",
        text: "香澤、膏脂與清潔",
      },
      {
        type: "p",
        text: "古籍中常見以植物油脂、米粉、蜂蜜或花卉浸液作為清潔與潤澤的記載。這些材料反映的是當時可取得的自然資源與審美偏好，例如光澤、清香、柔潤。它們屬於特定時代的物質文化，不能直接等同於今日通過安全與功效驗證的保養品。",
      },
      {
        type: "quote",
        text: "古代美容史幫助我們理解「被照顧的身體」如何被書寫，而不是提供可複製的處方。",
      },
      {
        type: "h2",
        text: "給當代的閱讀方式",
      },
      {
        type: "p",
        text: "與其問「古人用什麼就能變美」，不如問：她們如何安排一天、如何對應季節、如何把清潔與休息視為體面生活的一部分。Eastern Beauty 選擇從這個角度進入東方美容史——把文化轉譯成可理解的生活語言，而不是把古方包裝成現代奇蹟。",
      },
    ],
  },
  {
    slug: "tcm-philosophy-of-beauty",
    title: "The Philosophy of Beauty in Traditional Chinese Medicine",
    excerpt:
      "在中醫文化裡，氣色、神采與身體狀態常被一起觀看。本文介紹其美學語言，而非診斷方法。",
    category: "tcm-beauty",
    coverImage: images.tea,
    coverAlt: "草本茶與陶瓷器皿",
    readingMinutes: 8,
    publishedAt: "2026-04-02",
    featured: true,
    content: [
      {
        type: "note",
        text: culturalNote,
      },
      {
        type: "p",
        text: "中醫傳統常以「氣色」描述人的整體狀態：面色、眼神、聲音與精神被視為彼此關聯。這種觀看方式帶有濃厚的哲學與文化色彩，強調平衡、循環與時間，而不是單一部位的修飾。",
      },
      {
        type: "h2",
        text: "美是關係，不是零件",
      },
      {
        type: "p",
        text: "氣、血、臟腑等概念，在文化文本中被用來解釋人為何會顯出疲態、晦暗或潤澤。對當代讀者，這些詞彙更適合作為理解身體與生活節奏的隱喻，而不是自我診斷的工具。真正需要醫療判斷時，仍應尋求合格專業人員。",
      },
      {
        type: "h2",
        text: "內外並觀的審美",
      },
      {
        type: "p",
        text: "許多討論會把睡眠、情志、飲食與面色放在同一張地圖上。這種「由內而外」的敘事，讓美容不再只是產品層次的選擇，而成為如何過日子的問題。Eastern Beauty 保留這份整體視角，同時清楚區分文化詮釋與臨床證據。",
      },
      {
        type: "quote",
        text: "我們借用中醫的語言來思考生活，而不是用網站取代醫師。",
      },
    ],
  },
  {
    slug: "sleep-and-skin-health",
    title:
      "Understanding Your Skin: The Relationship Between Sleep and Skin Health",
    excerpt:
      "睡眠是皮膚修復最容易被忽略的日常條件。從作息開始，理解氣色與休息的關係。",
    category: "sleep-lifestyle",
    coverImage: images.rest,
    coverAlt: "晨光中寧靜的休息時刻",
    readingMinutes: 6,
    publishedAt: "2026-05-18",
    featured: true,
    content: [
      {
        type: "p",
        text: "現代皮膚科學普遍認為，充足且規律的睡眠有助於皮膚屏障修復、調節壓力荷爾蒙，並影響隔日的水潤與精神。黑眼圈、暗沉、乾燥，常常不只是保養步驟不足，而是休息品質的外在提示。",
      },
      {
        type: "h2",
        text: "把睡眠當成保養步驟",
      },
      {
        type: "p",
        text: "與其在晚上疊加過多產品，不如先穩定入睡與起床的時間。光線、螢幕、晚餐節奏與臥室溫度，都會悄悄決定隔天的臉。東方養生文化裡「夜臥早起、順時而息」的說法，與當代睡眠衛生有可對話之處：重點是規律，而不是嚴苛。",
      },
      {
        type: "h2",
        text: "可執行的起點",
      },
      {
        type: "p",
        text: "選擇固定的收斂儀式：清潔、薄潤、關燈、把房間留給休息。這些動作不保證立即改變膚質，但能把「照顧自己」從意志力轉成環境設計。美，往往發生在重複之中。",
      },
    ],
  },
  {
    slug: "seasonal-beauty-eastern-wellness",
    title: "Seasonal Beauty: A Guide to Eastern Wellness",
    excerpt:
      "二十四節氣把一年拆成可感知的段落。美容也可以隨光線、濕度與作息一起調整。",
    category: "food-wellness",
    coverImage: images.forest,
    coverAlt: "森林中的自然光線",
    readingMinutes: 7,
    publishedAt: "2026-06-08",
    featured: true,
    content: [
      {
        type: "note",
        text: culturalNote,
      },
      {
        type: "p",
        text: "節氣不是日曆上的裝飾，而是一套觀察自然的方法：氣溫、濕度、物候與人情緒都會隨之改變。古代養生文獻常依時調整起居與飲食；對現代城市生活，它仍可作為溫柔的提醒——皮膚與心情都活在氣候裡。",
      },
      {
        type: "h2",
        text: "春生、夏長、秋收、冬藏",
      },
      {
        type: "p",
        text: "春季適合重新建立清潔與輕盈的節奏；夏季注意紫外線、水分與睡眠；秋季空氣轉乾，保濕與規律作息更顯重要；冬季則強調溫暖、休息與較少刺激。這些是生活層次的方向，不是處方。",
      },
      {
        type: "h2",
        text: "把節氣當成觀察練習",
      },
      {
        type: "p",
        text: "你可以每兩週問自己一次：最近的光線如何、睡眠是否變短、皮膚是否更乾或更容易出油。觀察本身就是東方養生最能轉譯給現代人的部分——覺察先於改變。",
      },
    ],
  },
  {
    slug: "traditional-skincare-tools",
    title: "Traditional Skincare Tools and Their Cultural Meaning",
    excerpt:
      "梳、篦、鏡、巾與香具，如何構成古代梳妝空間的物質文化。",
    category: "ancient-beauty",
    coverImage: images.tools,
    coverAlt: "柔和光線下的保養與梳妝物件",
    readingMinutes: 5,
    publishedAt: "2026-07-01",
    content: [
      {
        type: "note",
        text: culturalNote,
      },
      {
        type: "p",
        text: "古代梳妝並不只依賴「塗抹」。梳子整理髮絲與頭皮感受，銅鏡協助觀看神情，面巾完成清潔，香具則讓空間進入另一種節奏。器物先於配方，說明美容曾是一整套空間與身體的安排。",
      },
      {
        type: "h2",
        text: "從器物回到當下",
      },
      {
        type: "p",
        text: "今天我們仍可保留「專屬的清潔時間」與「不被打擾的桌面」，而不必複製古代材質或操作。文化的價值在於提醒：照顧外表可以是安靜、有秩序、且尊重身體界線的。",
      },
    ],
  },
  {
    slug: "qi-blood-and-complexion",
    title: "Qi, Blood, and the Complexion: A Cultural Reading",
    excerpt:
      "「氣血」是中醫美容敘事中最常被提及的詞。我們以文化角度閱讀它，避免自我診斷。",
    category: "tcm-beauty",
    coverImage: images.herbal,
    coverAlt: "茶席與溫潤器皿",
    readingMinutes: 6,
    publishedAt: "2026-07-21",
    content: [
      {
        type: "note",
        text: culturalNote,
      },
      {
        type: "p",
        text: "在文學與醫籍交會的地方，「氣血充足」常被用來形容面色紅潤、精神安定。它是一套解釋身體現象的文化語言。若把它直接翻譯成現代病理或自行進補，容易錯過原意，也可能帶來風險。",
      },
      {
        type: "h2",
        text: "閱讀，而不是套用",
      },
      {
        type: "p",
        text: "Eastern Beauty 建議把「氣血」理解為：能量是否足夠支持日常、休息是否夠深、情緒是否長期緊繃。這些觀察可以引導我們調整生活，但不能取代檢查與診療。",
      },
    ],
  },
  {
    slug: "everyday-habits-for-calmer-skin",
    title: "Everyday Habits for Calmer Skin",
    excerpt:
      "減少刺激、穩定清潔、留意屏障——現代皮膚知識裡最不華麗、卻最持久的方法。",
    category: "modern-skincare",
    coverImage: images.ritual,
    coverAlt: "簡約的保養質地",
    readingMinutes: 5,
    publishedAt: "2026-08-09",
    content: [
      {
        type: "p",
        text: "許多皮膚不適來自過度清潔、頻繁更換產品，以及環境刺激。現代皮膚科學強調屏障功能：溫和清潔、適度保濕、日間防曬，通常比複雜步驟更經得起時間考驗。",
      },
      {
        type: "h2",
        text: "少，但是穩定",
      },
      {
        type: "p",
        text: "選定基礎清潔與保濕，給皮膚兩到四週的觀察期。同時記錄睡眠、飲食和壓力，往往比再增加一瓶精華更能解釋膚況變化。東方生活美學中的「節制」與這個原則並不衝突。",
      },
    ],
  },
  {
    slug: "tea-food-and-radiance",
    title: "Tea, Digestion, and Radiance: Food Culture in Eastern Wellness",
    excerpt:
      "茶與時令食物在東方生活裡，既是味道，也是節奏。美容可以從餐桌開始理解。",
    category: "food-wellness",
    coverImage: images.food,
    coverAlt: "新鮮植物與餐桌",
    readingMinutes: 6,
    publishedAt: "2026-08-28",
    content: [
      {
        type: "note",
        text: "飲食與氣色的關係因人而異。以下內容屬於文化與生活討論，不是營養治療或食療處方。",
      },
      {
        type: "p",
        text: "一碗時令蔬菜、一次不被匆忙打斷的用餐、午後的一杯茶，都在塑造身體的節奏。東方飲食文化重視溫度、節制與當季食材，這與「吃得少而穩定」的現代觀點可以相遇。",
      },
      {
        type: "h2",
        text: "餐桌是日常養生現場",
      },
      {
        type: "p",
        text: "與其尋找神奇食材，不如先恢復規律進食、足夠水分，以及較少極端節食。皮膚會反映身體是否被善待，而善待往往很普通。",
      },
    ],
  },
  {
    slug: "the-art-of-rest",
    title: "The Art of Rest: Sleep as a Beauty Practice",
    excerpt:
      "休息不是懶惰，而是讓氣色有機會回來。把夜晚設計成可進入的空間。",
    category: "sleep-lifestyle",
    coverImage: images.spaPortrait,
    coverAlt: "被柔軟包覆的休息神情",
    readingMinutes: 5,
    publishedAt: "2026-09-16",
    content: [
      {
        type: "p",
        text: "當代生活把清醒延伸到很晚，美容卻仍期望早晨有光澤。兩者很難同時成立。把休息寫進美容方法，是 Eastern Beauty 想和讀者一起練習的事。",
      },
      {
        type: "h2",
        text: "夜晚的界線",
      },
      {
        type: "p",
        text: "設定一個「不再處理訊息」的時間，讓清潔步驟成為進入夜晚的過門。房間的氣味、光線與溫度都是工具。美的條件，常常是被保護的睡眠。",
      },
    ],
  },
  {
    slug: "herbal-beauty-culture",
    title: "Herbal Beauty Culture: Plants, Scent, and Daily Ritual",
    excerpt:
      "植物進入美容史，首先是氣味、顏色與季節，而不必然是療效宣言。",
    category: "ancient-beauty",
    coverImage: images.botanicals,
    coverAlt: "綠色植物與自然層次",
    readingMinutes: 6,
    publishedAt: "2026-10-05",
    content: [
      {
        type: "note",
        text: culturalNote,
      },
      {
        type: "p",
        text: "花卉、根莖、樹木的氣味長期出現在香粉、沐浴與空間營造中。人們用植物標記季節、身份與潔淨。這是一段關於感官的歷史，而不是一份可以自行配製的藥典。",
      },
      {
        type: "h2",
        text: "尊重植物，也尊重身體",
      },
      {
        type: "p",
        text: "天然不等於對每個人都溫和。現代使用植物成分時，仍需注意過敏、保存與來源。Eastern Beauty 欣賞草本文化的美學，同時拒絕把未經驗證的配方寫成保證有效的方法。",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category?: ArticleCategory) {
  if (!category) return articles;
  return articles.filter((article) => article.category === category);
}

export function getFeaturedArticles(limit = 4) {
  return articles.filter((article) => article.featured).slice(0, limit);
}

export function getCategoryLabel(slug: ArticleCategory) {
  return articleCategories.find((item) => item.slug === slug)?.label ?? slug;
}

export function searchArticles(query: string, category?: ArticleCategory) {
  const normalized = query.trim().toLowerCase();
  return getArticlesByCategory(category).filter((article) => {
    if (!normalized) return true;
    const haystack = [
      article.title,
      article.excerpt,
      getCategoryLabel(article.category),
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(normalized);
  });
}
