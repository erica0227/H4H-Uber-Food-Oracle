import { useState, useRef, useEffect } from "react";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { FOOD_ART } from "./food-art";
import {
  Trash2,
  Star,
  Clock,
  Tag,
  ArrowLeft,
  X,
  ShoppingCart,
  Users,
  ChefHat,
  ChevronDown,
  Trophy,
  LogOut,
  Utensils,
  Coffee,
  Cookie,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

type View = "landing" | "friends" | "kitchen" | "tournament" | "result";
type KitchenTab = "main" | "snack" | "drink";

interface Ingredient {
  id: string;
  name: string;
  emoji: string;
  kitchen: KitchenTab;
}

interface PlacedItem {
  uid: string;
  ingId: string;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  zIndex: number;
}
interface FlyingItem {
  uid: string;
  ingId: string;
  kitchen: KitchenTab;
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  placed?: PlacedItem; // only set for main-kitchen items going into the bowl
}
interface Particle {
  id: string;
  x: number; y: number;
  angle: number;
  color: string;
}

interface Recommendation {
  id: string;
  dish: string;
  restaurant: string;
  time: string;
  deliveryCost: number;
  cost: number;
  rating: number;
  discount: string;
  ingredients: string[];
  description: string;
  cuisine: string;
  imageId: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const INGREDIENTS: Ingredient[] = [
  { id: "chicken", name: "Chicken", emoji: "🍗", kitchen: "main" },
  { id: "beef", name: "Beef", emoji: "🥩", kitchen: "main" },
  { id: "salmon", name: "Fish", emoji: "🐟", kitchen: "main" },
  { id: "tofu", name: "Tofu", emoji: "🫘", kitchen: "main" },
  { id: "pasta", name: "Pasta", emoji: "🍝", kitchen: "main" },
  { id: "rice", name: "Rice", emoji: "🍚", kitchen: "main" },
  { id: "eggs", name: "Eggs", emoji: "🥚", kitchen: "main" },
  { id: "broccoli", name: "Broccoli", emoji: "🥦", kitchen: "main" },
  { id: "tomato", name: "Tomato", emoji: "🍅", kitchen: "main" },
  { id: "garlic", name: "Garlic", emoji: "🧄", kitchen: "main" },
  { id: "onion", name: "Onion", emoji: "🧅", kitchen: "main" },
  { id: "potato", name: "Potato", emoji: "🥔", kitchen: "main" },
  { id: "pork", name: "Pork", emoji: "🥩", kitchen: "main" },
  { id: "noodles", name: "Noodles", emoji: "🍜", kitchen: "main" },
  { id: "greens", name: "Greens", emoji: "🥬", kitchen: "main" },
  { id: "bokchoi", name: "Bok Choi", emoji: "🥬", kitchen: "main" },
  { id: "salad", name: "Salad", emoji: "🥗", kitchen: "main" },
  { id: "nuts", name: "Nuts", emoji: "🥜", kitchen: "snack" },
  { id: "cheese", name: "Cheese", emoji: "🧀", kitchen: "snack" },
  { id: "crackers", name: "Crackers", emoji: "🍘", kitchen: "snack" },
  { id: "apple", name: "Apple", emoji: "🍎", kitchen: "snack" },
  { id: "banana", name: "Banana", emoji: "🍌", kitchen: "snack" },
  { id: "yogurt", name: "Yogurt", emoji: "🥛", kitchen: "snack" },
  { id: "popcorn", name: "Popcorn", emoji: "🍿", kitchen: "snack" },
  { id: "chocolate", name: "Chocolate", emoji: "🍫", kitchen: "snack" },
  { id: "coffee", name: "Coffee", emoji: "☕", kitchen: "drink" },
  { id: "tea", name: "Tea", emoji: "🍵", kitchen: "drink" },
  { id: "juice", name: "Juice", emoji: "🧃", kitchen: "drink" },
  { id: "smoothie", name: "Smoothie", emoji: "🥤", kitchen: "drink" },
  { id: "soda", name: "Soda", emoji: "🫙", kitchen: "drink" },
  { id: "water", name: "Water", emoji: "💧", kitchen: "drink" },
  { id: "wine", name: "Wine", emoji: "🍷", kitchen: "drink" },
  { id: "boba", name: "Boba", emoji: "🧋", kitchen: "drink" },
];

const ALL_RECS: Recommendation[] = [
  {
    id: "r1",
    dish: "Grilled Chicken Teriyaki Bowl",
    restaurant: "Tokyo Garden",
    time: "25 min",
    deliveryCost: 1.99,
    cost: 14.99,
    rating: 4.8,
    discount: "15% off",
    ingredients: ["Chicken", "Rice", "Broccoli", "Garlic"],
    description:
      "Tender grilled chicken glazed with house-made teriyaki sauce over steamed jasmine rice, topped with sesame broccoli, pickled ginger, and toasted sesame seeds.",
    cuisine: "Japanese",
    imageId: "1679279726946-a158b8bcaa23",
  },
  {
    id: "r2",
    dish: "Salmon Pasta al Limone",
    restaurant: "Trattoria Bella",
    time: "30 min",
    deliveryCost: 2.99,
    cost: 18.5,
    rating: 4.6,
    discount: "10% off",
    ingredients: ["Salmon", "Pasta", "Garlic", "Tomato"],
    description:
      "Fresh Atlantic salmon over al dente spaghetti with bright lemon cream sauce, cherry tomatoes, capers, and fresh dill. Light and aromatic.",
    cuisine: "Italian",
    imageId: "1559058789-672da06263d8",
  },
  {
    id: "r3",
    dish: "Beef Bulgogi Bibimbap",
    restaurant: "Seoul Street",
    time: "20 min",
    deliveryCost: 0,
    cost: 16.99,
    rating: 4.9,
    discount: "Free delivery",
    ingredients: ["Beef", "Rice", "Eggs", "Broccoli"],
    description:
      "Marinated wagyu-style beef over stone pot rice with seasonal vegetables, a perfectly fried egg, house gochujang paste, and sesame oil drizzle.",
    cuisine: "Korean",
    imageId: "1718777791262-c66d11baaa3b",
  },
  {
    id: "r4",
    dish: "Tofu Mapo Noodles",
    restaurant: "Spice Route",
    time: "15 min",
    deliveryCost: 1.49,
    cost: 12.99,
    rating: 4.5,
    discount: "20% off",
    ingredients: ["Tofu", "Pasta", "Garlic", "Tomato"],
    description:
      "Silken tofu in numbing Sichuan chili broth with wheat noodles, crispy scallions, chili oil, and house Sichuan peppercorn seasoning. Vegan-friendly.",
    cuisine: "Chinese",
    imageId: "1555126634-323283e090fa",
  },
  {
    id: "r5",
    dish: "Egg Fried Rice Supreme",
    restaurant: "Golden Wok",
    time: "10 min",
    deliveryCost: 0.99,
    cost: 11.5,
    rating: 4.7,
    discount: "$2 off",
    ingredients: ["Eggs", "Rice", "Garlic", "Onion"],
    description:
      "Wok-tossed jasmine rice with farm-fresh eggs, roasted garlic, golden onions, soy-ginger glaze, and crispy shallots.",
    cuisine: "Chinese",
    imageId: "1603133872878-684f208fb84b",
  },
  {
    id: "r6",
    dish: "Honey Garlic Salmon Steak",
    restaurant: "Harbor Fresh",
    time: "22 min",
    deliveryCost: 3.49,
    cost: 22.0,
    rating: 4.8,
    discount: "None",
    ingredients: ["Salmon", "Garlic", "Broccoli", "Potato"],
    description:
      "Pan-seared wild-caught salmon with honey-garlic glaze, roasted tenderstem broccoli, crispy potato wedges, and lemon caper butter.",
    cuisine: "Western",
    imageId: "1611599537845-1c7aca0091c0",
  },
  {
    id: "r7",
    dish: "Classic Smash Burger",
    restaurant: "The Stack House",
    time: "18 min",
    deliveryCost: 1.99,
    cost: 15.99,
    rating: 4.4,
    discount: "Free fries",
    ingredients: ["Beef", "Tomato", "Onion", "Eggs"],
    description:
      "Double smashed beef patty with aged cheddar, beefsteak tomato, caramelised onion, special sauce on a toasted brioche bun with golden fries.",
    cuisine: "American",
    imageId: "1713330801172-03f8d1c0dde7",
  },
  {
    id: "r8",
    dish: "Chicken Tikka Masala",
    restaurant: "Bombay Brasserie",
    time: "28 min",
    deliveryCost: 2.49,
    cost: 17.5,
    rating: 4.7,
    discount: "12% off",
    ingredients: ["Chicken", "Tomato", "Garlic", "Rice"],
    description:
      "Chargrilled tandoor chicken in rich creamy tomato masala sauce, served with fragrant saffron basmati rice and warm garlic naan.",
    cuisine: "Indian",
    imageId: "1565557623262-b51c2513a641",
  },
  {
    id: "r9",
    dish: "Classic Pasta Carbonara",
    restaurant: "Nonna Roma",
    time: "20 min",
    deliveryCost: 2.99,
    cost: 16.0,
    rating: 4.6,
    discount: "Happy hour",
    ingredients: ["Pasta", "Eggs", "Garlic"],
    description:
      "Traditional Roman carbonara — silky egg sauce, guanciale, freshly cracked black pepper, and aged pecorino romano. No cream, just pure technique.",
    cuisine: "Italian",
    imageId: "1546549032-9571cd6b27df",
  },
  {
    id: "r10",
    dish: "Veggie Buddha Bowl",
    restaurant: "Green Earth",
    time: "12 min",
    deliveryCost: 0.99,
    cost: 13.5,
    rating: 4.5,
    discount: "15% off",
    ingredients: ["Tofu", "Rice", "Broccoli", "Tomato"],
    description:
      "Baked sesame tofu, brown rice, roasted broccoli, cherry tomatoes, edamame, pickled cabbage, and tahini miso dressing.",
    cuisine: "Healthy",
    imageId: "1505576633757-0ac1084af824",
  },
  {
    id: "r11",
    dish: "Avocado Eggs Benedict",
    restaurant: "The Morning Table",
    time: "18 min",
    deliveryCost: 1.99,
    cost: 14.5,
    rating: 4.7,
    discount: "Free coffee",
    ingredients: ["Eggs", "Cheese", "Potato", "Coffee"],
    description:
      "Poached eggs on toasted sourdough with whipped ricotta, crispy hash browns, and a side of freshly brewed house coffee. Weekend brunch staple.",
    cuisine: "Brunch",
    imageId: "1687276287139-88f7333c8ca4",
  },
  {
    id: "r12",
    dish: "Smoothie Bowl & Granola",
    restaurant: "Bloom Kitchen",
    time: "8 min",
    deliveryCost: 0.99,
    cost: 12.0,
    rating: 4.6,
    discount: "10% off",
    ingredients: ["Smoothie", "Banana", "Yogurt", "Nuts"],
    description:
      "Thick blended acai and banana base topped with house granola, fresh banana slices, toasted almonds, coconut flakes, and a drizzle of honey.",
    cuisine: "Healthy",
    imageId: "1627308594190-a057cd4bfac8",
  },
  {
    id: "r13",
    dish: "Artisan Cheese Board",
    restaurant: "The Cork & Board",
    time: "10 min",
    deliveryCost: 2.49,
    cost: 19.0,
    rating: 4.8,
    discount: "Wine pairing included",
    ingredients: ["Cheese", "Crackers", "Nuts", "Wine"],
    description:
      "Three seasonal cheeses — aged cheddar, brie, and manchego — with seeded crackers, candied walnuts, fig preserve, and a glass of house red.",
    cuisine: "European",
    imageId: "1601912262364-3a35aa0d9399",
  },
  {
    id: "r14",
    dish: "Chocolate Fondue Platter",
    restaurant: "Sweet Theory",
    time: "15 min",
    deliveryCost: 1.49,
    cost: 16.5,
    rating: 4.5,
    discount: "20% off after 8pm",
    ingredients: ["Chocolate", "Banana", "Nuts", "Apple"],
    description:
      "Rich 70% dark chocolate fondue with skewered banana, apple slices, toasted hazelnuts, and mini marshmallows for dipping.",
    cuisine: "Dessert",
    imageId: "1639337479586-18651b428be4",
  },
  {
    id: "r15",
    dish: "Cold Brew Protein Bowl",
    restaurant: "Fuel & Form",
    time: "10 min",
    deliveryCost: 0.99,
    cost: 13.0,
    rating: 4.4,
    discount: "Loyalty stamp",
    ingredients: ["Coffee", "Yogurt", "Banana", "Nuts"],
    description:
      "Greek yogurt base with cold brew–soaked oats, sliced banana, almond butter swirl, roasted mixed nuts, and a shot of cold brew on the side.",
    cuisine: "Healthy",
    imageId: "1542691457-cbe4df041eb2",
  },
  {
    id: "r16",
    dish: "Matcha Yogurt Parfait",
    restaurant: "Bloom Kitchen",
    time: "6 min",
    deliveryCost: 0.99,
    cost: 10.5,
    rating: 4.5,
    discount: "None",
    ingredients: ["Tea", "Yogurt", "Apple", "Nuts"],
    description:
      "Layers of ceremonial matcha-infused yogurt, caramelised apple compote, candied pecans, and house granola. Light, bright, and energising.",
    cuisine: "Healthy",
    imageId: "1717603545586-208c9d67fcbe",
  },
  {
    id: "r17",
    dish: "Loaded Potato Skins",
    restaurant: "The Stack House",
    time: "20 min",
    deliveryCost: 1.99,
    cost: 11.0,
    rating: 4.3,
    discount: "$3 off",
    ingredients: ["Potato", "Cheese", "Onion", "Yogurt"],
    description:
      "Crispy twice-baked potato skins loaded with aged cheddar, caramelised onion, sour cream, and smoked paprika. A comfort classic.",
    cuisine: "American",
    imageId: "1505576633757-0ac1084af824",
  },
  {
    id: "r18",
    dish: "Boba French Toast",
    restaurant: "Late Morn",
    time: "22 min",
    deliveryCost: 2.49,
    cost: 15.0,
    rating: 4.6,
    discount: "Brunch special",
    ingredients: ["Eggs", "Banana", "Boba", "Chocolate"],
    description:
      "Thick-cut brioche French toast, banana foster topping, crushed boba pearls, and a drizzle of dark chocolate ganache. A dessert for breakfast.",
    cuisine: "Fusion",
    imageId: "1484723091739-30a097e8f929",
  },
  {
    id: "r19",
    dish: "Sparkling Juice & Mezze",
    restaurant: "The Vine Table",
    time: "12 min",
    deliveryCost: 1.99,
    cost: 17.0,
    rating: 4.5,
    discount: "None",
    ingredients: ["Juice", "Cheese", "Crackers", "Tomato"],
    description:
      "Chilled sparkling apple and elderflower juice paired with whipped feta, heirloom tomatoes, seeded crackers, and marinated olives.",
    cuisine: "Mediterranean",
    imageId: "1763637674539-5ef67d4a4506",
  },
  {
    id: "r20",
    dish: "Popcorn Chicken Bento",
    restaurant: "Bento Box Co.",
    time: "16 min",
    deliveryCost: 1.49,
    cost: 14.0,
    rating: 4.6,
    discount: "Free drink",
    ingredients: ["Chicken", "Popcorn", "Rice", "Soda"],
    description:
      "Crispy popcorn chicken bites, steamed jasmine rice, pickled radish, edamame, and a cold soda. A proper lunchbox in a box.",
    cuisine: "Japanese-Fusion",
    imageId: "1594955332421-2033cfd867b4",
  },
];

const FRIENDS = [
  "Alex Chen",
  "Maya Patel",
  "Jordan Kim",
  "Sam Rivera",
  "Casey Wong",
  "Taylor Lee",
];

// ─── Bowl Slots ───────────────────────────────────────────────────────────────

const BOWL_SLOTS: Array<{ x: number; y: number; z: number; scale: number }> = [
  { x: 50, y: 85, z: 2, scale: 0.95 }, { x: 34, y: 83, z: 1, scale: 0.90 },
  { x: 66, y: 83, z: 1, scale: 0.90 }, { x: 42, y: 89, z: 1, scale: 0.85 },
  { x: 58, y: 89, z: 1, scale: 0.85 }, { x: 50, y: 74, z: 3, scale: 0.92 },
  { x: 30, y: 72, z: 2, scale: 0.88 }, { x: 70, y: 72, z: 2, scale: 0.88 },
  { x: 42, y: 78, z: 3, scale: 0.90 }, { x: 58, y: 78, z: 3, scale: 0.90 },
  { x: 50, y: 63, z: 4, scale: 0.84 }, { x: 32, y: 62, z: 3, scale: 0.80 },
  { x: 68, y: 62, z: 3, scale: 0.80 }, { x: 42, y: 67, z: 4, scale: 0.82 },
  { x: 58, y: 67, z: 4, scale: 0.82 }, { x: 50, y: 53, z: 5, scale: 0.74 },
  { x: 35, y: 54, z: 5, scale: 0.71 }, { x: 65, y: 54, z: 5, scale: 0.71 },
  { x: 44, y: 58, z: 5, scale: 0.77 }, { x: 56, y: 58, z: 5, scale: 0.77 },
  { x: 50, y: 46, z: 6, scale: 0.67 }, { x: 41, y: 47, z: 6, scale: 0.64 },
  { x: 59, y: 47, z: 6, scale: 0.64 },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function pickRecs(selected: Ingredient[]): Recommendation[] {
  if (selected.length === 0) {
    // Nothing selected — return top-rated recs
    return [...ALL_RECS].sort((a, b) => b.rating - a.rating).slice(0, 6);
  }

  const names = new Set(selected.map((i) => i.name));

  const scored = ALL_RECS.map((rec) => ({
    rec,
    // Count how many of this rec's ingredients the user actually selected
    score: rec.ingredients.filter((n) => names.has(n)).length,
  }));

  // Recs with at least one match, sorted by overlap then rating
  const matched = scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score || b.rec.rating - a.rec.rating)
    .map((s) => s.rec);

  // Recs with no overlap at all, sorted by rating as fallback padding
  const unmatched = scored
    .filter((s) => s.score === 0)
    .sort((a, b) => b.rec.rating - a.rec.rating)
    .map((s) => s.rec);

  // Fill to exactly 6: matched first, then pad with highest-rated unmatched
  const combined = [...matched, ...unmatched];
  return combined.slice(0, 6);
}

// ─── Ucook API adapter ───────────────────────────────────────────────────────
// Translates between our frontend shape and Lenka's Ucook backend contract.
const UCOOK_BASE = "http://localhost:8000";

// Lenka's 30 ingredient keys. Request body = each key -> 0 or 1.
const UCOOK_KEYS = [
  "rice", "noodles", "potato", "pasta", "tomato", "broccoli", "greens",
  "bak_choi", "salad", "chicken", "beef", "pork", "fish", "tofu", "eggs",
  "nuts", "crackers", "popcorn", "apple", "banana", "yogurt", "cheese",
  "chocolate", "coffee", "tea", "juice", "smoothie", "soda", "water", "wine",
];

// our ingredient id -> Lenka's key (null = no equivalent on her side)
const UCOOK_ING_MAP: Record<string, string | null> = {
  chicken: "chicken", beef: "beef", salmon: "fish", tofu: "tofu",
  pasta: "pasta", rice: "rice", eggs: "eggs", broccoli: "broccoli",
  tomato: "tomato", garlic: "greens", onion: "greens", potato: "potato",
  nuts: "nuts", cheese: "cheese", crackers: "crackers", apple: "apple",
  banana: "banana", yogurt: "yogurt", popcorn: "popcorn",
  chocolate: "chocolate", coffee: "coffee", tea: "tea", juice: "juice",
  smoothie: "smoothie", soda: "soda", water: "water", wine: "wine",
  boba: null,
};

// selected ingredients -> { rice:0, chicken:1, ... } (all 30 keys, 0/1)
function buildUcookPayload(selected: Ingredient[]): Record<string, number> {
  const body: Record<string, number> = {};
  for (const k of UCOOK_KEYS) body[k] = 0;
  for (const ing of selected) {
    const k = UCOOK_ING_MAP[ing.id];
    if (k) body[k] = 1;
  }
  return body;
}

// Lenka's dish object -> our Recommendation (translate each field name)
function adaptUcookDish(d: any, i: number): Recommendation {
  const pct = Number(d.discount_from_restaurant) || 0;
  return {
    id: String(d.dish_id ?? `u${i}`),
    dish: d.dish_name ?? "",
    restaurant: d.restaurant_name ?? "",
    time: d.restaurant_delivery_time ?? "—",
    deliveryCost: Number(d.restaurant_delivery_fee) || 0,
    cost: Number(d.dish_price) || 0,
    rating: Number(d.restaurant_rating) || 0,
    discount: pct > 0 ? `${pct}% off` : "None",
    // she doesn't return these two; default safely so the UI never breaks
    ingredients: Array.isArray(d.ingredients) ? d.ingredients : [],
    cuisine: d.cuisine ?? "",
    description: d.dish_description ?? "",
    imageId: d.dish_image_url ?? "", // full URL; <img> handles both forms
  };
}

// Fetch recs from Ucook backend, translated into our shape.
async function fetchUcookRecs(selected: Ingredient[]): Promise<Recommendation[]> {
  const res = await fetch(`${UCOOK_BASE}/recommendations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildUcookPayload(selected)),
  });
  if (!res.ok) throw new Error(`Ucook ${res.status}`);
  const dishes = await res.json();
  return (Array.isArray(dishes) ? dishes : []).map(adaptUcookDish);
}

// ─── TiltCard ────────────────────────────────────────────────────────────────

function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [rot, setRot] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width;
        const ny = (e.clientY - r.top) / r.height;
        setRot({ x: (ny - 0.5) * -16, y: (nx - 0.5) * 16 });
        setActive(true);
      }}
      onMouseLeave={() => {
        setRot({ x: 0, y: 0 });
        setActive(false);
      }}
      style={{
        transform: `perspective(900px) rotateX(${rot.x}deg) rotateY(${rot.y}deg) scale(${active ? 1.015 : 1})`,
        transition: active
          ? "transform 0.08s ease"
          : "transform 0.55s cubic-bezier(0.23, 1, 0.32, 1)",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </div>
  );
}

// ─── Landing ─────────────────────────────────────────────────────────────────

function LandingPage({
  onMe,
  onFriend,
}: {
  onMe: () => void;
  onFriend: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-primary/8 blur-3xl" />
        <span className="absolute top-12 right-16 text-7xl opacity-[0.12]">🍜</span>
        <span className="absolute bottom-16 left-12 text-7xl opacity-[0.12]">🥗</span>
        <span className="absolute top-1/3 left-8 text-5xl opacity-[0.08]">🍕</span>
        <span className="absolute bottom-1/3 right-8 text-5xl opacity-[0.08]">🍣</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-xl relative z-10"
      >
        <div className="text-6xl mb-6 select-none">🧑‍🍳</div>
        <h1
          className="text-5xl sm:text-6xl font-bold text-foreground mb-5 leading-[1.1]"
          style={{ fontFamily: "var(--font-family-display)" }}
        >
          Who is cooking today?
        </h1>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          Pick your ingredient, then let us find your perfect meal match.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onMe}
            className="px-10 py-4 bg-primary text-primary-foreground rounded-2xl text-xl font-semibold hover:opacity-90 transition-opacity shadow-2xl shadow-primary/30"
          >
            Me 🙋
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={onFriend}
            className="px-10 py-4 bg-card text-foreground border border-border rounded-2xl text-xl font-semibold hover:bg-secondary transition-colors"
          >
            Choose a Friend 👥
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

// ─── Friends ─────────────────────────────────────────────────────────────────

function FriendsPage({ onBack }: { onBack: () => void }) {
  const [invited, setInvited] = useState<Set<string>>(new Set());

  return (
    <div className="min-h-screen p-8 max-w-md mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-10 transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="flex items-center gap-3 mb-2">
          <Users size={22} className="text-primary" />
          <h2
            className="text-3xl font-bold"
            style={{ fontFamily: "var(--font-family-display)" }}
          >
            Friend List
          </h2>
        </div>
        <p className="text-muted-foreground mb-8 text-sm">
          Send an invitation to a friend to help choose your ingredients.
        </p>

        <div className="space-y-3">
          {FRIENDS.map((friend, i) => (
            <motion.div
              key={friend}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center justify-between p-4 bg-card border border-border rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-sm font-bold text-primary">
                  {friend
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span className="font-medium">{friend}</span>
              </div>
              <button
                onClick={() =>
                  setInvited((p) => new Set([...p, friend]))
                }
                disabled={invited.has(friend)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  invited.has(friend)
                    ? "bg-green-500/15 text-green-400 cursor-default"
                    : "bg-primary text-primary-foreground hover:opacity-80 active:scale-95"
                }`}
              >
                {invited.has(friend) ? "✓ Sent" : "Invite"}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

// ─── Kitchen ─────────────────────────────────────────────────────────────────

// Splits an array into fixed-size rows
function chunkArray<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// Deterministic number from a string so animations don't re-randomise on re-render
function strSeed(s: string): number {
  return s.split("").reduce((acc, c, i) => acc + c.charCodeAt(0) * (i + 1), 0);
}

const KITCHEN_CATEGORIES: Record<
  KitchenTab,
  { label: string; desc: string; ids: string[] }[]
> = {
  main: [
    { label: "Protein", desc: "Pick one or more", ids: ["chicken", "beef", "pork", "salmon", "tofu", "eggs"] },
    { label: "Vegetables", desc: "Add as many as you like", ids: ["broccoli", "tomato", "garlic", "onion", "greens", "bokchoi", "salad"] },
    { label: "Carbs & Noodles", desc: "Add some substance", ids: ["rice", "pasta", "noodles", "potato"] },
  ],
  snack: [
    { label: "Crunchy", desc: "Pick one or more", ids: ["nuts", "crackers", "popcorn"] },
    { label: "Fresh & Dairy", desc: "Light and refreshing", ids: ["apple", "banana", "yogurt"] },
    { label: "Indulgent", desc: "A little treat", ids: ["cheese", "chocolate"] },
  ],
  drink: [
    { label: "Hot Drinks", desc: "Something warm", ids: ["coffee", "tea"] },
    { label: "Cold & Fresh", desc: "Refreshing picks", ids: ["juice", "smoothie", "soda", "water", "boba"] },
    { label: "Other", desc: "Wind down a little", ids: ["wine"] },
  ],
};

const KITCHEN_TABS: { id: KitchenTab; label: string; icon: React.ReactNode }[] = [
  { id: "main", label: "Main Kitchen", icon: <ChefHat size={15} /> },
  { id: "snack", label: "Snack", icon: <Cookie size={15} /> },
  { id: "drink", label: "Drink", icon: <Coffee size={15} /> },
];

function BowlSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <radialGradient id="bwl-rim" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#ddd5c5"/>
        </radialGradient>
        <radialGradient id="bwl-body" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#f8f4ec"/>
          <stop offset="100%" stopColor="#e8e0d0"/>
        </radialGradient>
        <radialGradient id="bwl-inner" cx="50%" cy="32%" r="70%">
          <stop offset="0%" stopColor="#faf8f2"/>
          <stop offset="100%" stopColor="#ede7d8"/>
        </radialGradient>
      </defs>
      {/* Drop shadow */}
      <ellipse cx="200" cy="314" rx="155" ry="10" fill="rgba(0,0,0,0.10)"/>
      {/* Outer body */}
      <path d="M 45 140 Q 52 296 200 308 Q 348 296 355 140 Z" fill="url(#bwl-body)"/>
      {/* Interior */}
      <path d="M 60 140 Q 66 284 200 296 Q 334 284 340 140 Z" fill="url(#bwl-inner)"/>
      {/* Interior edge shadow */}
      <path d="M 60 140 Q 66 284 200 296 Q 334 284 340 140 Z" fill="none" stroke="rgba(80,60,30,0.07)" strokeWidth="24"/>
      {/* Outer rim */}
      <ellipse cx="200" cy="140" rx="155" ry="52" fill="url(#bwl-rim)"/>
      {/* Rim surface */}
      <ellipse cx="200" cy="140" rx="142" ry="46" fill="#f2ece0"/>
      {/* Inner rim */}
      <ellipse cx="200" cy="140" rx="128" ry="38" fill="#faf8f4"/>
      {/* Specular highlight on rim */}
      <path d="M 88 122 Q 168 106 258 118" fill="none" stroke="rgba(255,255,255,0.85)" strokeWidth="6" strokeLinecap="round"/>
      {/* Inner rim edge */}
      <ellipse cx="200" cy="140" rx="128" ry="38" fill="none" stroke="#ddd6c5" strokeWidth="1.5"/>
    </svg>
  );
}

function KitchenSection({
  onConfirm,
  initialPlate = [],
}: {
  onConfirm: (ingredients: Ingredient[]) => void;
  initialPlate?: Ingredient[];
}) {
  const [activeKitchen, setActiveKitchen] = useState<KitchenTab>("main");
  const [plate, setPlate] = useState<Ingredient[]>(initialPlate);
  // Only main-kitchen items land inside the bowl
  const [placedItems, setPlacedItems] = useState<PlacedItem[]>([]);
  // Snacks and drinks are shown beside the bowl, never inside it
  const [snackIds, setSnackIds] = useState<string[]>([]);
  const [drinkIds, setDrinkIds] = useState<string[]>([]);
  const [flyingItems, setFlyingItems] = useState<FlyingItem[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dragOver, setDragOver] = useState(false);
  const dragSourceRef = useRef<DOMRect | null>(null);
  const bowlRef = useRef<HTMLDivElement>(null);
  const snackAreaRef = useRef<HTMLDivElement>(null);
  const drinkAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialPlate.length === 0) return;
    const jitter = (s: string, r: number) => ((strSeed(s) % (r * 2 + 1)) - r);
    let mainIdx = 0;
    const mainPlaced: PlacedItem[] = [];
    const snacks: string[] = [];
    const drinks: string[] = [];
    initialPlate.forEach((ing, i) => {
      if (ing.kitchen === "snack") { snacks.push(ing.id); return; }
      if (ing.kitchen === "drink") { drinks.push(ing.id); return; }
      const slot = BOWL_SLOTS[mainIdx % BOWL_SLOTS.length];
      mainPlaced.push({
        uid: `${ing.id}-init-${i}`,
        ingId: ing.id,
        x: slot.x + jitter(ing.id + 'x', 3),
        y: slot.y + jitter(ing.id + 'y', 2),
        rotation: jitter(ing.id + 'r', 12),
        scale: slot.scale,
        zIndex: slot.z,
      });
      mainIdx++;
    });
    setPlacedItems(mainPlaced);
    setSnackIds(snacks);
    setDrinkIds(drinks);
  }, []); // eslint-disable-line

  const getNextSlot = (mainCount: number, ingId: string) => {
    const slot = BOWL_SLOTS[mainCount % BOWL_SLOTS.length];
    const jitter = (s: string, range: number) => ((strSeed(s) % (range * 2 + 1)) - range);
    return {
      ...slot,
      x: slot.x + jitter(ingId + 'x', 3),
      y: slot.y + jitter(ingId + 'y', 2),
      rotation: jitter(ingId + 'r', 12),
    };
  };

  const spawnParticles = (cx: number, cy: number) => {
    const COLORS = ["#06c167", "#ffc040", "#ff6040", "#60c8ff", "#ff60a0", "#c0ff60"];
    const pts: Particle[] = Array.from({ length: 8 }, (_, i) => ({
      id: `${Date.now()}-${i}`, x: cx, y: cy,
      angle: (360 / 8) * i, color: COLORS[i % COLORS.length],
    }));
    setParticles(prev => [...prev, ...pts]);
    setTimeout(() => setParticles(prev => prev.filter(p => !pts.find(n => n.id === p.id))), 700);
  };

  const addIngredientWithFly = (ingId: string, sourceRect: DOMRect) => {
    if (plate.find(p => p.id === ingId)) return;
    const ing = INGREDIENTS.find(i => i.id === ingId)!;
    const fromX = sourceRect.left + sourceRect.width / 2;
    const fromY = sourceRect.top + sourceRect.height / 2;
    const uid = `${ingId}-${Date.now()}`;

    if (ing.kitchen === "main") {
      const bowlRect = bowlRef.current?.getBoundingClientRect();
      if (!bowlRect) return;
      const mainCount = plate.filter(p => INGREDIENTS.find(i => i.id === p.id)?.kitchen === "main").length;
      const slot = getNextSlot(mainCount, ingId);
      const toX = bowlRect.left + bowlRect.width * (slot.x / 100);
      const toY = bowlRect.top + bowlRect.height * (slot.y / 100);
      const placed: PlacedItem = { uid, ingId, x: slot.x, y: slot.y, rotation: slot.rotation, scale: slot.scale, zIndex: slot.z };
      setFlyingItems(prev => [...prev, { uid, ingId, kitchen: "main", fromX, fromY, toX, toY, placed }]);
    } else {
      const targetRef = ing.kitchen === "snack" ? snackAreaRef : drinkAreaRef;
      const rect = targetRef.current?.getBoundingClientRect();
      if (!rect) return;
      const toX = rect.left + rect.width / 2;
      const toY = rect.top + rect.height / 2;
      setFlyingItems(prev => [...prev, { uid, ingId, kitchen: ing.kitchen, fromX, fromY, toX, toY }]);
    }
    setPlate(prev => [...prev, ing]);
  };

  const handleFlyComplete = (item: FlyingItem) => {
    setFlyingItems(prev => prev.filter(f => f.uid !== item.uid));
    if (item.kitchen === "snack") setSnackIds(prev => [...prev, item.ingId]);
    else if (item.kitchen === "drink") setDrinkIds(prev => [...prev, item.ingId]);
    else if (item.placed) setPlacedItems(prev => [...prev, item.placed!]);
    spawnParticles(item.toX, item.toY);
  };

  const removeIngredient = (ingId: string) => {
    const ing = INGREDIENTS.find(i => i.id === ingId);
    setPlate(prev => prev.filter(p => p.id !== ingId));
    if (ing?.kitchen === "snack") setSnackIds(prev => prev.filter(id => id !== ingId));
    else if (ing?.kitchen === "drink") setDrinkIds(prev => prev.filter(id => id !== ingId));
    else setPlacedItems(prev => prev.filter(p => p.ingId !== ingId));
  };

  const clearAll = () => {
    setPlate([]); setPlacedItems([]); setSnackIds([]); setDrinkIds([]); setFlyingItems([]);
  };

  const categories = KITCHEN_CATEGORIES[activeKitchen];

  // Group plate items by kitchen for the right panel
  const plateByKitchen = (["main", "snack", "drink"] as KitchenTab[])
    .map((k) => ({
      kitchen: k,
      label: k === "main" ? "Main" : k === "snack" ? "Snacks" : "Drinks",
      icon: k === "main" ? "🥘" : k === "snack" ? "🍿" : "🥤",
      items: plate.filter((p) => p.kitchen === k),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="min-h-screen bg-background flex flex-col" style={{ fontFamily: "var(--font-family-sans)" }}>
      {/* ── Header ── */}
      <div className="px-6 pt-6 pb-4 flex items-start justify-between gap-4 border-b border-border">
        <div>
          <h1 className="text-2xl font-bold leading-tight" style={{ fontFamily: "var(--font-family-display)" }}>
            Choose your ingredient
          </h1>
          <p className="text-muted-foreground text-sm mt-0.5">
            Customise fresh ingredients just the way you like
          </p>
        </div>
        <motion.button
          whileHover={{ scale: plate.length > 0 ? 1.03 : 1 }}
          whileTap={{ scale: plate.length > 0 ? 0.97 : 1 }}
          onClick={() => plate.length > 0 && onConfirm(plate)}
          disabled={plate.length === 0}
          className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
            plate.length > 0
              ? "bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/20"
              : "bg-muted text-muted-foreground cursor-not-allowed"
          }`}
        >
          Confirm Ingredients
          {plate.length > 0 && <span className="text-xs opacity-80">→</span>}
        </motion.button>
      </div>

      {/* ── Body: 3-col on lg, stacked on mobile ── */}
      <div className="flex-1 flex flex-col lg:grid lg:grid-cols-[1fr_440px_220px] overflow-hidden">

        {/* ── Left: Ingredient Categories ── */}
        <div className="overflow-y-auto px-6 py-5 flex flex-col gap-7">
          {categories.map((cat) => {
            const catItems = cat.ids
              .map((id) => INGREDIENTS.find((i) => i.id === id)!)
              .filter(Boolean);
            return (
              <div key={cat.label}>
                <div className="flex items-end justify-between mb-3">
                  <div>
                    <h3 className="text-sm font-bold text-foreground">{cat.label}</h3>
                    <p className="text-xs text-muted-foreground">{cat.desc}</p>
                  </div>
                </div>
                {/* Horizontal scroll row */}
                <div
                  className="flex gap-3 overflow-x-auto pb-1"
                  style={{ scrollbarWidth: "none" }}
                >
                  {catItems.map((ing) => {
                    const added = !!plate.find((p) => p.id === ing.id);
                    return (
                      <div
                        key={ing.id}
                        draggable={!added}
                        onDragStart={(e) => {
                          if (added) return;
                          e.dataTransfer.setData("id", ing.id);
                          dragSourceRef.current = e.currentTarget.getBoundingClientRect();
                        }}
                        onClick={(e) => {
                          if (added) {
                            removeIngredient(ing.id);
                          } else {
                            addIngredientWithFly(ing.id, e.currentTarget.getBoundingClientRect());
                          }
                        }}
                        className={`relative flex-shrink-0 flex flex-col items-center justify-end gap-1.5 w-[78px] pt-3 pb-2.5 px-1 rounded-2xl border-2 select-none transition-all cursor-pointer ${
                          added
                            ? "border-primary bg-primary/6 shadow-sm shadow-primary/15"
                            : "border-border bg-white hover:border-primary/40 hover:shadow-sm cursor-grab active:cursor-grabbing"
                        }`}
                      >
                        {FOOD_ART[ing.id] ? (
                          <div className="w-11 h-11">
                            {React.createElement(FOOD_ART[ing.id])}
                          </div>
                        ) : (
                          <span className="text-[2rem] leading-none">{ing.emoji}</span>
                        )}
                        <span className="text-[11px] font-medium text-center leading-tight text-foreground w-full truncate px-0.5">
                          {ing.name}
                        </span>
                        {added && (
                          <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center shadow-sm">
                            <span className="text-[10px] font-bold leading-none">✓</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* ── Kitchen Switcher ── */}
          <div className="mt-auto pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground font-semibold uppercase tracking-widest mb-3">
              Change kitchen
            </p>
            <div className="flex flex-wrap gap-2">
              {KITCHEN_TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveKitchen(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    activeKitchen === tab.id
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-white border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Center: side panel (snacks + drinks) on the left + main bowl ── */}
        <div
          className={`flex flex-col items-center justify-center py-5 px-3 gap-3 transition-all duration-200 ${dragOver ? "bg-primary/5" : "bg-white"}`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault(); setDragOver(false);
            const id = e.dataTransfer.getData("id");
            if (id && dragSourceRef.current) addIngredientWithFly(id, dragSourceRef.current);
          }}
        >
          <div className="flex items-end gap-4 w-full justify-center">

            {/* ── Left side panel: Snacks (top) + Drinks (bottom) ── */}
            <div className="flex flex-col gap-2.5 flex-shrink-0" style={{ width: 128 }}>

              {/* Snacks */}
              <div className="flex flex-col gap-1">
                <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Snacks</p>
                <div
                  ref={snackAreaRef}
                  className="rounded-2xl border border-[#e8e2d8] bg-[#faf8f4] p-2 min-h-[80px]"
                >
                  {snackIds.length === 0 ? (
                    <div className="flex items-center justify-center h-14">
                      <p className="text-[10px] text-muted-foreground/50 text-center leading-snug">snacks<br/>here</p>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      <AnimatePresence>
                        {snackIds.map(id => {
                          const FoodComp = FOOD_ART[id];
                          const ing = INGREDIENTS.find(i => i.id === id);
                          if (!FoodComp) return null;
                          const restRot = ((strSeed(id) % 13) - 6);
                          return (
                            <motion.div
                              key={id}
                              initial={{ scale: 0, opacity: 0, y: -12 }}
                              animate={{ scale: 1, opacity: 1, y: 0, rotate: restRot }}
                              exit={{ scale: 0, opacity: 0, transition: { duration: 0.15 } }}
                              transition={{ type: "spring", stiffness: 440, damping: 20 }}
                              className="relative cursor-pointer group flex flex-col items-center"
                              onClick={() => removeIngredient(id)}
                              title={`Remove ${ing?.name}`}
                            >
                              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-1.5 rounded-full bg-black/10 blur-sm" />
                              <div style={{ width: 44, height: 44 }} className="relative">
                                <FoodComp />
                                <div className="absolute inset-0 rounded-full bg-destructive/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                  <X size={11} className="text-destructive" />
                                </div>
                              </div>
                              <p className="text-[9px] text-muted-foreground truncate max-w-[44px] text-center mt-0.5">{ing?.name}</p>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </div>

              {/* Drinks */}
              <div className="flex flex-col gap-1">
                <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground">Drinks</p>
                <div
                  ref={drinkAreaRef}
                  className="rounded-2xl border border-[#e8e2d8] bg-[#faf8f4] p-2 min-h-[80px]"
                >
                  {drinkIds.length === 0 ? (
                    <div className="flex items-center justify-center h-14">
                      <p className="text-[10px] text-muted-foreground/50 text-center leading-snug">drinks<br/>here</p>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      <AnimatePresence>
                        {drinkIds.map(id => {
                          const FoodComp = FOOD_ART[id];
                          const ing = INGREDIENTS.find(i => i.id === id);
                          if (!FoodComp) return null;
                          return (
                            <motion.div
                              key={id}
                              initial={{ scale: 0, opacity: 0, y: -12 }}
                              animate={{ scale: 1, opacity: 1, y: 0 }}
                              exit={{ scale: 0, opacity: 0, transition: { duration: 0.15 } }}
                              transition={{ type: "spring", stiffness: 440, damping: 20 }}
                              className="relative cursor-pointer group flex flex-col items-center"
                              onClick={() => removeIngredient(id)}
                              title={`Remove ${ing?.name}`}
                            >
                              <div className="relative" style={{ width: 46, height: 46 }}>
                                <FoodComp />
                                <div className="absolute inset-0 bg-destructive/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg">
                                  <X size={11} className="text-destructive" />
                                </div>
                              </div>
                              <p className="text-[9px] text-muted-foreground truncate max-w-[44px] text-center mt-0.5">{ing?.name}</p>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* ── Main bowl ── */}
            <div ref={bowlRef} className="relative flex-shrink-0" style={{ width: 280 }}>
              <BowlSVG className="w-full" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ clipPath: "ellipse(34% 24% at 50% 68%)" }}
              >
                <AnimatePresence>
                  {placedItems.map(item => {
                    const FoodComp = FOOD_ART[item.ingId];
                    if (!FoodComp) return null;
                    const size = Math.round(item.scale * 68);
                    return (
                      <motion.div
                        key={item.uid}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0, transition: { duration: 0.18 } }}
                        transition={{ type: "spring", stiffness: 480, damping: 18 }}
                        style={{
                          position: "absolute",
                          left: `${item.x}%`, top: `${item.y}%`,
                          width: size, height: size,
                          marginLeft: -size / 2, marginTop: -size / 2,
                          zIndex: item.zIndex,
                          rotate: item.rotation,
                          filter: "drop-shadow(0 2px 5px rgba(0,0,0,0.20))",
                          pointerEvents: "auto",
                          cursor: "pointer",
                        }}
                        onClick={() => removeIngredient(item.ingId)}
                        title={`Remove ${item.ingId}`}
                      >
                        <FoodComp />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
              {placedItems.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ paddingTop: "32%" }}>
                  <p className="text-xs text-muted-foreground opacity-60">main ingredients here</p>
                </div>
              )}
              {dragOver && (
                <div className="absolute inset-0 pointer-events-none rounded-full" style={{ border: "3px dashed #06c167", opacity: 0.4 }} />
              )}
            </div>

          </div>

          {/* Status + clear */}
          <div className="flex flex-col items-center gap-2 mt-2">
            <p className={`text-xs transition-colors ${dragOver ? "text-primary font-semibold" : "text-muted-foreground"}`}>
              {plate.length === 0
                ? "Drag or click ingredients to build your meal"
                : `${plate.length} ingredient${plate.length !== 1 ? "s" : ""} · tap any item to remove`}
            </p>
            {plate.length > 0 && (
              <motion.button
                initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                onClick={clearAll}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border text-xs font-medium text-muted-foreground hover:text-destructive hover:border-destructive/40 transition-colors"
              >
                <Trash2 size={11} /> Clear all
              </motion.button>
            )}
          </div>
        </div>

        {/* ── Right: Added items panel ── */}
        <div className="border-t lg:border-t-0 lg:border-l border-border px-5 py-5 overflow-y-auto bg-white">
          <h3 className="text-sm font-bold text-foreground mb-0.5">Your selections</h3>
          <p className="text-xs text-muted-foreground mb-5">
            {plate.length === 0 ? "Nothing added yet" : "Tap an item to remove it"}
          </p>

          {plate.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-10 text-muted-foreground gap-2">
              <Utensils size={28} strokeWidth={1.5} />
              <span className="text-xs">Your plate is empty</span>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {plateByKitchen.map((group) => (
                <div key={group.kitchen}>
                  <div className="flex items-center gap-1.5 mb-2">
                    <span className="text-sm">{group.icon}</span>
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      {group.label}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    {group.items.map((ing) => (
                      <div
                        key={ing.id}
                        className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-card border border-border group hover:border-destructive/30 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          {FOOD_ART[ing.id] ? (
                            <div className="w-5 h-5 flex-shrink-0">
                              {React.createElement(FOOD_ART[ing.id])}
                            </div>
                          ) : (
                            <span className="text-base">{ing.emoji}</span>
                          )}
                          <span className="text-sm font-medium">{ing.name}</span>
                        </div>
                        <button
                          onClick={() => removeIngredient(ing.id)}
                          className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-all"
                        >
                          <X size={13} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Trash drop zone */}
          {plate.length > 0 && (
            <div
              className="mt-6 flex items-center gap-2 p-3 rounded-xl border-2 border-dashed border-border text-muted-foreground transition-all duration-200 hover:border-destructive/40 hover:text-destructive"
              onDragOver={(e) => { e.preventDefault(); }}
              onDrop={(e) => {
                e.preventDefault();
                const id = e.dataTransfer.getData("id");
                removeIngredient(id);
              }}
            >
              <Trash2 size={14} />
              <span className="text-xs font-medium">Drop here to remove</span>
            </div>
          )}
        </div>
      </div>

      {/* ── Flying food items (fixed, over everything) ── */}
      {flyingItems.map(item => {
        const FoodComp = FOOD_ART[item.ingId];
        if (!FoodComp) return null;
        const midX = (item.fromX + item.toX) / 2;
        const arcTop = Math.min(item.fromY, item.toY) - 110;
        return (
          <motion.div
            key={item.uid}
            style={{ position: "fixed", left: 0, top: 0, width: 60, height: 60, zIndex: 9999, pointerEvents: "none" }}
            initial={{ x: item.fromX - 30, y: item.fromY - 30, rotate: 0, scale: 1, opacity: 1 }}
            animate={{
              x: [item.fromX - 30, midX - 30, item.toX - 30],
              y: [item.fromY - 30, arcTop - 30, item.toY - 30],
              rotate: [0, -180, -360],
              scale: [1.0, 0.88, 0.65],
              opacity: [1, 1, 0],
            }}
            transition={{ duration: 0.52, times: [0, 0.44, 1], ease: "easeInOut" }}
            onAnimationComplete={() => handleFlyComplete(item)}
          >
            <FoodComp />
          </motion.div>
        );
      })}
      {/* ── Particle burst ── */}
      {particles.map(p => (
        <motion.div
          key={p.id}
          style={{ position: "fixed", left: p.x - 4, top: p.y - 4, width: 8, height: 8, borderRadius: "50%", backgroundColor: p.color, zIndex: 9998, pointerEvents: "none" }}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: Math.cos(p.angle * Math.PI / 180) * 44, y: Math.sin(p.angle * Math.PI / 180) * 44, opacity: 0, scale: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

// ─── Recommendation Card ─────────────────────────────────────────────────────

function RecCard({
  rec,
  onChoose,
  label,
}: {
  rec: Recommendation;
  onChoose: () => void;
  label: "A" | "B";
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <TiltCard className="flex flex-col bg-card border border-border rounded-3xl overflow-hidden h-full">
      {/* Hero image */}
      <div className="relative h-40 flex-shrink-0 bg-muted overflow-hidden">
        <img
          src={
            rec.imageId.startsWith("http")
              ? rec.imageId // Ucook gives a full URL
              : `https://images.unsplash.com/photo-${rec.imageId}?w=600&h=320&fit=crop&auto=format`
          }
          alt={rec.dish}
          className="w-full h-full object-cover"
        />
        {/* Gradient fade into card */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />
        {/* Discount chip */}
        {rec.discount !== "None" && (
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-full text-[10px] font-bold shadow">
            <Tag size={9} />
            {rec.discount}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <h3
            className="text-lg font-bold leading-snug"
            style={{ fontFamily: "var(--font-family-display)" }}
          >
            {rec.dish}
          </h3>
          <p className="text-muted-foreground text-xs mt-0.5">
            {rec.restaurant}
            {rec.cuisine && ` · ${rec.cuisine}`}
          </p>
        </div>

        <div className="flex gap-2">
          <div className="flex items-center gap-1.5 bg-secondary rounded-xl px-3 py-2 flex-shrink-0">
            <Star size={12} className="text-amber-400 fill-amber-400 shrink-0" />
            <span className="text-sm font-semibold">{rec.rating}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-secondary rounded-xl px-3 py-2 flex-1 min-w-0">
            <Clock size={12} className="text-muted-foreground shrink-0" />
            <span className="text-xs font-medium truncate">
              {rec.time} · {rec.deliveryCost === 0 ? "Free delivery" : `$${rec.deliveryCost.toFixed(2)}`}
            </span>
          </div>
          <div className="flex items-center gap-1 bg-secondary rounded-xl px-3 py-2 flex-shrink-0">
            <span className="text-sm font-bold">${rec.cost.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
        >
          <ChevronDown
            size={15}
            className={`transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          />
          {expanded ? "Hide details" : "View ingredients & description"}
        </button>

        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="text-sm text-muted-foreground leading-relaxed border-t border-border pt-4 overflow-hidden"
          >
            <p className="mb-3">{rec.description}</p>
            {rec.ingredients.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {rec.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="px-2.5 py-1 bg-secondary rounded-full text-xs font-medium text-foreground"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        )}

        <div className="flex-1" />

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
          onClick={onChoose}
          className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all ${
            label === "A"
              ? "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20"
              : "bg-foreground text-background hover:opacity-90 shadow-lg shadow-foreground/15"
          }`}
        >
          Choose This One
        </motion.button>
      </div>
    </TiltCard>
  );
}

// ─── Tournament ───────────────────────────────────────────────────────────────

function TournamentSection({
  recs,
  winners,
  onChoose,
  onGoBack,
  onKitchen,
  onExit,
}: {
  recs: Recommendation[];
  winners: Recommendation[];
  onChoose: (rec: Recommendation) => void;
  onGoBack: () => void;
  onKitchen: () => void;
  onExit: () => void;
}) {
  const currentRound = winners.length; // 0–4
  // Keep each winner in the slot it already occupied — don't shuffle the
  // winning card to the front. The new challenger fills the opposite slot.
  let leftCard = recs[0];
  let rightCard = recs[1];
  for (let r = 1; r <= currentRound; r++) {
    const challenger = recs[r + 1];
    if (winners[r - 1] === leftCard) {
      rightCard = challenger; // winner stays left
    } else {
      leftCard = challenger; // winner stays right
    }
  }

  return (
    <div className="min-h-screen flex flex-col p-6 max-w-5xl mx-auto">
      {/* Nav */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-2">
          <button
            onClick={onGoBack}
            disabled={winners.length === 0}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border text-sm font-medium hover:bg-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ArrowLeft size={15} />
            Previous
          </button>
          <button
            onClick={onKitchen}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border text-sm font-medium hover:bg-secondary transition-all"
          >
            <ChefHat size={15} />
            Kitchen
          </button>
        </div>
        <button
          onClick={onExit}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl border border-border text-sm text-muted-foreground hover:text-foreground transition-all"
        >
          <LogOut size={15} />
          Exit
        </button>
      </div>

      {/* Round indicator */}
      <motion.div
        key={currentRound}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-4">
          <Trophy size={15} className="text-primary" />
          <span className="text-sm font-semibold">
            Round {currentRound + 1} of 5
          </span>
        </div>
        <div className="flex justify-center gap-1.5 mb-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                i < currentRound
                  ? "w-8 bg-primary"
                  : i === currentRound
                  ? "w-8 bg-primary/40"
                  : "w-4 bg-border"
              }`}
            />
          ))}
        </div>
        <p className="text-muted-foreground text-sm">
          {currentRound === 0
            ? "Pick your first favourite to advance"
            : `Your Round ${currentRound} pick faces a new challenger`}
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_56px_1fr] gap-4 items-start">
        <motion.div
          key={`left-${currentRound}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <RecCard
            rec={leftCard}
            onChoose={() => onChoose(leftCard)}
            label="A"
          />
        </motion.div>

        <div className="hidden md:flex flex-col items-center justify-center py-12 gap-2">
          <div className="h-16 w-px bg-border" />
          <span
            className="text-2xl font-black text-muted-foreground/30"
            style={{ fontFamily: "var(--font-family-display)" }}
          >
            VS
          </span>
          <div className="h-16 w-px bg-border" />
        </div>

        <div className="flex items-center justify-center md:hidden my-1">
          <span
            className="text-xl font-black text-muted-foreground/40"
            style={{ fontFamily: "var(--font-family-display)" }}
          >
            VS
          </span>
        </div>

        <motion.div
          key={`right-${currentRound}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <RecCard
            rec={rightCard}
            onChoose={() => onChoose(rightCard)}
            label="B"
          />
        </motion.div>
      </div>
    </div>
  );
}

// ─── Result ───────────────────────────────────────────────────────────────────

function ResultPage({
  winner,
  onKitchen,
  onTournament,
  onExit,
}: {
  winner: Recommendation;
  onKitchen: () => void;
  onTournament: () => void;
  onExit: () => void;
}) {
  const [bought, setBought] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 max-w-xl mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        <div className="text-center mb-8">
          <div className="text-5xl mb-3 select-none">🏆</div>
          <h2
            className="text-4xl font-bold mb-2"
            style={{ fontFamily: "var(--font-family-display)" }}
          >
            Your Winner!
          </h2>
          <p className="text-muted-foreground text-sm">
            After 5 rounds, this is your perfect meal choice.
          </p>
        </div>

        <TiltCard className="bg-card border-2 border-primary/25 rounded-3xl overflow-hidden mb-6">
          <div className="h-1 bg-primary w-full" />
          <div className="p-7">
            <h3
              className="text-3xl font-bold mb-1 leading-snug"
              style={{ fontFamily: "var(--font-family-display)" }}
            >
              {winner.dish}
            </h3>
            <p className="text-muted-foreground mb-6 text-sm">
              {winner.restaurant}
              {winner.cuisine && ` · ${winner.cuisine}`}
            </p>

            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="text-center p-3 bg-secondary rounded-2xl">
                <div className="flex items-center justify-center gap-1 mb-0.5">
                  <Star
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                  <span className="font-bold text-lg">{winner.rating}</span>
                </div>
                <p className="text-[11px] text-muted-foreground">Rating</p>
              </div>
              <div className="text-center p-3 bg-secondary rounded-2xl">
                <p className="font-bold text-lg">{winner.time}</p>
                <p className="text-[11px] text-muted-foreground">
                  {winner.deliveryCost === 0
                    ? "Free delivery"
                    : `+$${winner.deliveryCost.toFixed(2)} delivery`}
                </p>
              </div>
              <div className="text-center p-3 bg-secondary rounded-2xl">
                <p className="font-bold text-lg">${winner.cost.toFixed(2)}</p>
                <p className="text-[11px] text-muted-foreground">Total</p>
              </div>
            </div>

            {winner.discount !== "None" && (
              <div className="flex items-center gap-2 px-4 py-3 bg-primary/10 border border-primary/20 rounded-xl mb-5">
                <Tag size={15} className="text-primary shrink-0" />
                <span className="text-sm font-semibold text-primary">
                  {winner.discount}
                </span>
              </div>
            )}

            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {winner.description}
            </p>

            {winner.ingredients.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {winner.ingredients.map((ing) => (
                  <span
                    key={ing}
                    className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            )}
          </div>
        </TiltCard>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <motion.button
            whileHover={{ scale: bought ? 1 : 1.02 }}
            whileTap={{ scale: bought ? 1 : 0.97 }}
            onClick={() => setBought(true)}
            disabled={bought}
            className={`w-full py-4 rounded-2xl text-lg font-bold transition-all ${
              bought
                ? "bg-green-500/15 text-green-400 cursor-default"
                : "bg-primary text-primary-foreground shadow-xl shadow-primary/25 hover:opacity-90"
            }`}
          >
            {bought ? (
              <span className="flex items-center justify-center gap-2">
                <span>✓</span> Order Placed!
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <ShoppingCart size={18} />
                Buy Now
              </span>
            )}
          </motion.button>

          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={onTournament}
              className="py-3 rounded-xl border border-border text-sm font-medium hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              ← Round 5
            </button>
            <button
              onClick={onKitchen}
              className="py-3 rounded-xl border border-border text-sm font-medium hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              Kitchen
            </button>
            <button
              onClick={onExit}
              className="py-3 rounded-xl border border-border text-sm font-medium hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              Exit
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [view, setView] = useState<View>("landing");
  const [recs, setRecs] = useState<Recommendation[]>([]);
  const [winners, setWinners] = useState<Recommendation[]>([]);
  const [finalWinner, setFinalWinner] = useState<Recommendation | null>(null);
  // Persist plate across kitchen visits
  const [savedPlate, setSavedPlate] = useState<Ingredient[]>([]);

  const handleKitchenConfirm = async (ingredients: Ingredient[]) => {
    setSavedPlate(ingredients);
    setWinners([]);
    setRecs(pickRecs(ingredients)); // local result first → instant, no blank
    setView("tournament");
    try {
      const recs = await fetchUcookRecs(ingredients); // Ucook backend
      if (recs.length) setRecs(recs); // swap in backend result
    } catch {
      /* backend not running → keep local result, demo still works */
    }
  };

  const handleChoose = (rec: Recommendation) => {
    const next = [...winners, rec];
    setWinners(next);
    if (next.length === 5) {
      setFinalWinner(rec);
      setView("result");
    }
  };

  const handleReturnToTournament = () => {
    setWinners((w) => w.slice(0, 4));
    setView("tournament");
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "var(--font-family-sans)" }}
    >
      {view === "landing" && (
        <LandingPage
          onMe={() => setView("kitchen")}
          onFriend={() => setView("friends")}
        />
      )}
      {view === "friends" && (
        <FriendsPage onBack={() => setView("landing")} />
      )}
      {view === "kitchen" && (
        <KitchenSection
          onConfirm={handleKitchenConfirm}
          initialPlate={savedPlate}
        />
      )}
      {view === "tournament" && recs.length >= 6 && (
        <TournamentSection
          key={recs.map((r) => r.id).join(",")}
          recs={recs}
          winners={winners}
          onChoose={handleChoose}
          onGoBack={() => setWinners((w) => w.slice(0, -1))}
          onKitchen={() => setView("kitchen")}
          onExit={() => setView("landing")}
        />
      )}
      {view === "result" && finalWinner && (
        <ResultPage
          winner={finalWinner}
          onKitchen={() => setView("kitchen")}
          onTournament={handleReturnToTournament}
          onExit={() => setView("landing")}
        />
      )}
    </div>
  );
}
