// IV Services Data for Hydration and Health Carolina

export const ivServices = [
  {
    name: "Pure Hydration",
    category: "Hydration",
    price_range: "$149 - $199",
    duration: "30-45 minutes",
    ingredients: ["1L IV fluids", "Electrolytes (Na+, K+, Cl-)", "Optional B-Complex"],
    benefits: ["Rapid rehydration", "Fatigue relief", "Jet lag recovery", "Post-workout restoration"],
    marketing: {
      tagline: "Bounce back fast with our core hydration drip.",
      cta: "Book your mobile hydration drip today",
      seo_keywords: ["IV hydration Charlotte", "mobile IV fluids", "rehydration therapy NC"]
    },
    icon: "💧"
  },
  {
    name: "Myers Cocktail",
    category: "Wellness",
    price_range: "$249 - $299",
    duration: "45-60 minutes",
    ingredients: ["B-Complex", "Vitamin C", "Magnesium", "Calcium", "B12"],
    benefits: ["Energy boost", "Immune support", "Stress reduction", "Metabolic support"],
    marketing: {
      tagline: "Classic vitamin drip trusted by athletes and professionals.",
      cta: "Schedule your Myers IV at home",
      seo_keywords: ["Myers Cocktail Charlotte", "Vitamin infusion", "IV therapy near me"]
    },
    icon: "⚡"
  },
  {
    name: "Immunity Boost",
    category: "Immunity",
    price_range: "$249 - $349",
    duration: "45-60 minutes",
    ingredients: ["Vitamin C", "Zinc", "B-Complex", "Glutathione Push"],
    benefits: ["Strengthens immune system", "Cold & flu defense", "Boosts recovery", "Reduces inflammation"],
    marketing: {
      tagline: "Shield your immune system — one drip at a time.",
      cta: "Book an Immunity IV now",
      seo_keywords: ["immune IV Charlotte", "immune boost infusion", "vitamin C drip"]
    },
    icon: "🛡️"
  },
  {
    name: "Hangover Rescue",
    category: "Recovery",
    price_range: "$249 - $349",
    duration: "45-60 minutes",
    ingredients: ["1L IV fluids", "B-Complex", "Magnesium", "Zofran (anti-nausea)", "Toradol (anti-inflammatory)"],
    benefits: ["Relieves nausea & headache", "Restores electrolytes", "Boosts energy"],
    marketing: {
      tagline: "Bounce back from a big night — feel better in an hour.",
      cta: "Book Hangover Rescue now",
      seo_keywords: ["hangover IV Charlotte", "mobile hangover drip", "hydration after party"]
    },
    icon: "🍸"
  },
  {
    name: "Jet Lag & Travel Reset",
    category: "Recovery",
    price_range: "$249 - $299",
    duration: "45 minutes",
    ingredients: ["Fluids", "B12", "B-Complex", "Vitamin C"],
    benefits: ["Re-energizes post travel", "Reduces fatigue", "Supports immune function"],
    marketing: {
      tagline: "Beat jet lag fast — arrive refreshed.",
      cta: "Book Travel Reset drip",
      seo_keywords: ["jet lag IV", "travel fatigue therapy", "mobile IV Charlotte"]
    },
    icon: "✈️"
  },
  {
    name: "NAD+ Cellular Rejuvenation",
    category: "Anti-Aging / Performance",
    price_range: "$399 - $799",
    duration: "90-120 minutes",
    ingredients: ["NAD+ (250mg - 1000mg)", "B-Complex", "Saline base"],
    benefits: ["Boosts metabolism", "Supports brain function", "Improves energy & focus", "Anti-aging benefits"],
    marketing: {
      tagline: "Renew your cells — unlock peak performance.",
      cta: "Book your NAD+ IV today",
      seo_keywords: ["NAD IV Charlotte", "anti-aging therapy", "NAD infusion"]
    },
    icon: "🧬"
  },
  {
    name: "Beauty Glow",
    category: "Aesthetic / Skin",
    price_range: "$249 - $329",
    duration: "45-60 minutes",
    ingredients: ["Vitamin C", "B-Complex", "Biotin", "Glutathione"],
    benefits: ["Supports skin, hair, nails", "Promotes collagen production", "Brightens complexion"],
    marketing: {
      tagline: "Glow from the inside out.",
      cta: "Book Beauty Glow IV",
      seo_keywords: ["beauty drip", "glutathione IV", "skin brightening Charlotte"]
    },
    icon: "✨"
  },
  {
    name: "Performance & Recovery",
    category: "Athletic",
    price_range: "$279 - $349",
    duration: "60 minutes",
    ingredients: ["Fluids", "Amino acids", "B-Complex", "Magnesium", "Vitamin C"],
    benefits: ["Speeds muscle recovery", "Boosts stamina", "Reduces soreness"],
    marketing: {
      tagline: "Recover faster. Perform stronger.",
      cta: "Book Performance IV",
      seo_keywords: ["athlete IV therapy", "fitness recovery drip", "performance infusion"]
    },
    icon: "💪"
  },
  {
    name: "Detox & Cleanse",
    category: "Detox",
    price_range: "$249 - $349",
    duration: "60 minutes",
    ingredients: ["Fluids", "Vitamin C", "Glutathione", "B-Complex"],
    benefits: ["Flushes toxins", "Supports liver function", "Improves skin clarity"],
    marketing: {
      tagline: "Reset your system — detox the natural way.",
      cta: "Schedule Detox IV",
      seo_keywords: ["detox IV therapy", "glutathione detox Charlotte", "vitamin cleanse"]
    },
    icon: "🌿"
  }
];

export const addOns = [
  {
    name: "Glutathione IV Push",
    price: "$50",
    benefits: ["Brightens skin", "Antioxidant support"],
    icon: "💎"
  },
  {
    name: "Extra Vitamin C",
    price: "$20",
    benefits: ["Immune boost"],
    icon: "🍊"
  },
  {
    name: "B12 Injection",
    price: "$30",
    benefits: ["Energy & mood support"],
    icon: "⚡"
  },
  {
    name: "Zinc Add-On",
    price: "$20",
    benefits: ["Immunity enhancement"],
    icon: "🛡️"
  }
];

export const membershipTiers = [
  {
    name: "Silver",
    monthly_price: "$299",
    benefits: ["1 IV per month", "10% off add-ons"],
    icon: "🥈"
  },
  {
    name: "Gold",
    monthly_price: "$549",
    benefits: ["2 IVs per month", "Priority booking", "No mobile fee"],
    icon: "🥇"
  },
  {
    name: "Platinum",
    monthly_price: "$749",
    benefits: ["4 IVs per month", "VIP service", "Exclusive formulas"],
    icon: "💎"
  }
];

export const pricing = {
  mobile_visit_fee: "$99 - $149 (waived for members)",
  after_hours_surcharge: "$100"
};