const productSets = {
  zrd: [
    [
      "Facebook farm account UA · PZRD KING · 30+ days",
      "Token, cookies, email, Fan Page and documents included.",
      "6.50",
      "30–180 min",
      "PZRD",
    ],
    [
      "Facebook farm account USA · PZRD KING · 2–6 months",
      "100+ days of farming with token, cookies and email access.",
      "7.00",
      "2 left",
      "USA",
    ],
    [
      "Facebook farm account UA · PZRD KING + BM",
      "30+ days of farming with a Business Manager included.",
      "7.49",
      "Out of stock",
      "BM",
    ],
    [
      "Facebook UA PRO profile · 1–2 business profiles",
      "Hand-prepared profile with a $50–250 advertising limit.",
      "9.50",
      "30–180 min",
      "PRO",
    ],
    [
      "Facebook UA PRO profile · verified identity",
      "Two business profiles with mailbox, cookies and EAAB token.",
      "9.50",
      "30–180 min",
      "VERIFIED",
    ],
    [
      "Facebook farm account UA · PZRD KING · 100+ days",
      "Longer farming history with Fan Page, documents and User-Agent.",
      "10.00",
      "Out of stock",
      "100D",
    ],
    [
      "TRUST PZRD KING UA · hand-farmed",
      "Hand-farmed profile with interests, posts and advertising restriction cleared.",
      "14.00",
      "30–180 min",
      "TRUST",
    ],
  ],
  autoreg: [
    [
      "Facebook UA autoreg · clean · selfie-ready",
      "Clean Ukraine geo account registered to a phone number.",
      "0.30",
      "15–60 min",
      "NEW",
    ],
    [
      "Facebook autoreg UA · email + access, 2FA",
      "Email attached with access and two-factor authentication.",
      "0.35",
      "Out of stock",
      "2FA",
    ],
    [
      "Facebook UA autoreg · phone unlinked",
      "Profile filled in with email, 2FA, token and cookies.",
      "1.10",
      "15–60 min",
      "UA",
    ],
  ],
  farm: [
    [
      "Facebook farm account UA · warmed up 14+ days",
      "Friends, followers and social signals built up.",
      "3.20",
      "89 in stock",
      "FARM",
    ],
    [
      "Facebook farm account UA · 100–500 friends",
      "Warmed up account with Fan Page and active social signals.",
      "4.00",
      "Out of stock",
      "SOCIAL",
    ],
    [
      "Facebook UA profile · 0–100+ friends · filled in",
      "Hand-farmed profile with mailbox, token and cookies.",
      "4.60",
      "30–60 min",
      "PROFILE",
    ],
    [
      "Facebook UA farmed · 7+ days · 0–20 friends",
      "Filled profile with mailbox and phone included.",
      "5.20",
      "30–60 min",
      "WARM",
    ],
  ],
  manager: [
    [
      "Business manager · $25–50 limit",
      "A business manager with ad account limits of $25–50.",
      "1.80",
      "30–60 min",
      "BM",
    ],
    [
      "Business manager · ad restriction cleared",
      "Restriction cleared with a $25–50 limit.",
      "8.50",
      "30–180 min",
      "ZRD",
    ],
    [
      "Aged business manager · 50/250 limit",
      "Created before 2024 with a larger aged limit.",
      "15.00",
      "30–180 min",
      "AGED",
    ],
  ],
  proxies: [
    [
      "Mobile proxies · Ukraine · 7 days",
      "Vodafone carrier, unlimited traffic and link rotation.",
      "9.00",
      "23 in stock",
      "UA",
    ],
    [
      "Mobile proxies · Ukraine · 1 month",
      "Dedicated mobile address with unlimited traffic.",
      "35.01",
      "11 in stock",
      "UA",
    ],
    [
      "Mobile proxies · Indonesia",
      "Dedicated mobile proxy with unlimited traffic.",
      "80.00",
      "4 left",
      "ID",
    ],
  ],
};

const makeProducts = (set) =>
  productSets[set].map(
    ([name, description, price, delivery, badge], index) => ({
      id: `${set}-${index}`,
      name,
      description,
      price,
      delivery,
      badge,
    }),
  );

export const categories = [
  {
    slug: "zrd-accounts",
    name: "Accounts with passed ZRD",
    count: "17",
    index: "01",
    set: "zrd",
    description:
      "Accounts that have passed advertising review and are ready for campaigns.",
  },
  {
    slug: "facebook-autoreg",
    name: "Facebook autoreg accounts",
    count: "9",
    index: "02",
    set: "autoreg",
    description:
      "Fresh, affordable registrations for testing offers and creatives.",
  },
  {
    slug: "fb-accounts-bm",
    name: "FB accounts with Business Manager",
    count: "1",
    index: "03",
    set: "manager",
    description: "Profiles paired with a Business Manager for a quick setup.",
  },
  {
    slug: "spam-accounts",
    name: "Accounts for spam",
    count: "1",
    index: "04",
    set: "farm",
    description: "Farmed profiles prepared for bulk messaging workflows.",
  },
  {
    slug: "fb-farm-accounts",
    name: "FB farm accounts",
    count: "7",
    index: "05",
    set: "farm",
    description: "Warmed-up profiles with real activity and social signals.",
  },
  {
    slug: "premium-farm",
    name: "Premium farm",
    count: "",
    index: "06",
    set: "farm",
    description:
      "Longer-history accounts for campaigns where continuity matters.",
  },
  {
    slug: "bundle-farm-king",
    name: "Bundle: Farm (King) + 9 autoregs",
    count: "1",
    index: "07",
    set: "zrd",
    description: "A warmed-up King account bundled with nine autoreg accounts.",
  },
  {
    slug: "fb-business-manager",
    name: "FB Business Manager",
    count: "6",
    index: "08",
    set: "manager",
    description: "Business Managers for teams, agencies and multiple projects.",
  },
  {
    slug: "fb-fanpage",
    name: "Facebook Fan Page",
    count: "2",
    index: "09",
    set: "farm",
    description: "Pages for running campaigns under a brand identity.",
  },
  {
    slug: "mobile-proxies",
    name: "Mobile proxies",
    count: "4",
    index: "10",
    set: "proxies",
    description:
      "Dedicated mobile-carrier addresses for separate account sessions.",
  },
  {
    slug: "position-payment",
    name: "Position payment",
    count: "1",
    index: "11",
    set: "manager",
    description: "A support-arranged payment position for agreed services.",
  },
];

export const featuredProducts = makeProducts("zrd").slice(0, 3);

export const getCategory = (slug) =>
  categories.find((category) => category.slug === slug);
export const getProducts = (category) => makeProducts(category.set);
