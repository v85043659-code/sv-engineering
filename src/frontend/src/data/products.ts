import type { Product, ProductCategory } from "@/types";

export const categories: ProductCategory[] = [
  {
    id: "1",
    slug: "pneumatic-cylinders",
    name: "Pneumatic Cylinders",
    description: "Single & double acting cylinders for precise linear motion",
    count: 4,
  },
  {
    id: "2",
    slug: "solenoid-valves",
    name: "Solenoid Valves",
    description: "Electrically operated valves for automated flow control",
    count: 3,
  },
  {
    id: "3",
    slug: "pneumatic-fittings",
    name: "Pneumatic Fittings & Connectors",
    description:
      "Legris and compatible push-in fittings for leak-free connections",
    count: 4,
  },
  {
    id: "4",
    slug: "pneumatic-tubing",
    name: "Pneumatic Tubing",
    description: "Flexible polyurethane and nylon tubing for air lines",
    count: 3,
  },
  {
    id: "5",
    slug: "frl-units",
    name: "Air Preparation Units (FRL)",
    description:
      "Filter-Regulator-Lubricator units for clean, regulated air supply",
    count: 3,
  },
  {
    id: "6",
    slug: "directional-control-valves",
    name: "Directional Control Valves",
    description: "Mechanical and manual directional control valves",
    count: 3,
  },
  {
    id: "7",
    slug: "pressure-gauges",
    name: "Pressure Gauges",
    description: "Industrial glycerin-filled pressure gauges",
    count: 3,
  },
];

export const products: Product[] = [
  // Pneumatic Cylinders
  {
    id: "cyl-001",
    name: "Double Acting Pneumatic Cylinder — 32mm Bore",
    category: "Pneumatic Cylinders",
    categorySlug: "pneumatic-cylinders",
    description:
      "Heavy-duty double acting cylinder with aluminum body and stainless steel piston rod. Suitable for automation and clamping applications.",
    image: "/assets/generated/product-cylinder.dim_400x300.jpg",
    specs: [
      { label: "Bore Size", value: "32 mm" },
      { label: "Stroke", value: "25–300 mm" },
      { label: "Operating Pressure", value: "1–10 bar" },
      { label: "Body Material", value: "Anodized Aluminum" },
      { label: "Rod Material", value: "Stainless Steel" },
    ],
    tags: ["double-acting", "automation"],
  },
  {
    id: "cyl-002",
    name: "Double Acting Pneumatic Cylinder — 50mm Bore",
    category: "Pneumatic Cylinders",
    categorySlug: "pneumatic-cylinders",
    description:
      "Large bore double acting cylinder for high-force applications in manufacturing and assembly lines.",
    image: "/assets/generated/product-cylinder.dim_400x300.jpg",
    specs: [
      { label: "Bore Size", value: "50 mm" },
      { label: "Stroke", value: "50–500 mm" },
      { label: "Operating Pressure", value: "1–10 bar" },
      { label: "Body Material", value: "Anodized Aluminum" },
      { label: "Rod Material", value: "Stainless Steel" },
    ],
    tags: ["double-acting", "high-force"],
  },
  {
    id: "cyl-003",
    name: "Single Acting Spring Return Cylinder — 20mm Bore",
    category: "Pneumatic Cylinders",
    categorySlug: "pneumatic-cylinders",
    description:
      "Compact spring return cylinder ideal for clamping, ejecting, and valve actuation tasks.",
    image: "/assets/generated/product-cylinder.dim_400x300.jpg",
    specs: [
      { label: "Bore Size", value: "20 mm" },
      { label: "Stroke", value: "10–100 mm" },
      { label: "Operating Pressure", value: "1–8 bar" },
      { label: "Return", value: "Spring Return" },
      { label: "Body Material", value: "Aluminum" },
    ],
    tags: ["single-acting", "compact"],
  },
  {
    id: "cyl-004",
    name: "Compact Thin Cylinder — 40mm Bore",
    category: "Pneumatic Cylinders",
    categorySlug: "pneumatic-cylinders",
    description:
      "Space-saving thin cylinder for applications with limited mounting depth.",
    image: "/assets/generated/product-cylinder.dim_400x300.jpg",
    specs: [
      { label: "Bore Size", value: "40 mm" },
      { label: "Stroke", value: "5–50 mm" },
      { label: "Operating Pressure", value: "1–10 bar" },
      { label: "Type", value: "Double Acting Compact" },
      { label: "Body Material", value: "Aluminum" },
    ],
    tags: ["compact", "thin"],
  },
  // Solenoid Valves
  {
    id: "sol-001",
    name: '5/2 Way Single Solenoid Valve — 1/4" BSP',
    category: "Solenoid Valves",
    categorySlug: "solenoid-valves",
    description:
      "5/2 way single solenoid spring return valve for controlling double acting cylinders. 24V DC coil.",
    image: "/assets/generated/product-solenoid-valve.dim_400x300.jpg",
    specs: [
      { label: "Configuration", value: "5/2 Way" },
      { label: "Port Size", value: '1/4" BSP' },
      { label: "Voltage", value: "24V DC" },
      { label: "Cv Flow", value: "0.42" },
      { label: "Operating Pressure", value: "1.5–10 bar" },
    ],
    tags: ["5/2-way", "solenoid"],
  },
  {
    id: "sol-002",
    name: '5/2 Way Double Solenoid Valve — 1/4" BSP',
    category: "Solenoid Valves",
    categorySlug: "solenoid-valves",
    description:
      "Double solenoid memory valve that retains position on power loss. Ideal for safety-critical applications.",
    image: "/assets/generated/product-solenoid-valve.dim_400x300.jpg",
    specs: [
      { label: "Configuration", value: "5/2 Way Double" },
      { label: "Port Size", value: '1/4" BSP' },
      { label: "Voltage", value: "24V DC / 220V AC" },
      { label: "Response Time", value: "< 20 ms" },
      { label: "Operating Pressure", value: "2–10 bar" },
    ],
    tags: ["5/2-way", "double-solenoid"],
  },
  {
    id: "sol-003",
    name: '3/2 Way Normally Closed Solenoid Valve — 1/8" BSP',
    category: "Solenoid Valves",
    categorySlug: "solenoid-valves",
    description:
      "Compact 3-port valve for single acting cylinders and flow on/off control.",
    image: "/assets/generated/product-solenoid-valve.dim_400x300.jpg",
    specs: [
      { label: "Configuration", value: "3/2 Way N/C" },
      { label: "Port Size", value: '1/8" BSP' },
      { label: "Voltage", value: "24V DC" },
      { label: "Body Material", value: "Aluminum" },
      { label: "Operating Pressure", value: "0–10 bar" },
    ],
    tags: ["3/2-way", "compact"],
  },
  // Fittings
  {
    id: "fit-001",
    name: 'Legris Push-In Straight Connector — 6mm × 1/8" BSP',
    category: "Pneumatic Fittings & Connectors",
    categorySlug: "pneumatic-fittings",
    description:
      "Genuine Legris quick push-in fitting for 6mm OD tubing. One-hand tube insertion and release.",
    image: "/assets/generated/product-fittings.dim_400x300.jpg",
    specs: [
      { label: "Brand", value: "Legris" },
      { label: "Tube OD", value: "6 mm" },
      { label: "Thread", value: '1/8" BSP' },
      { label: "Material", value: "Nickel Plated Brass" },
      { label: "Max Pressure", value: "12 bar" },
    ],
    tags: ["legris", "push-in"],
  },
  {
    id: "fit-002",
    name: 'Legris Push-In Elbow Connector — 8mm × 1/4" BSP',
    category: "Pneumatic Fittings & Connectors",
    categorySlug: "pneumatic-fittings",
    description:
      "90° elbow push-in connector for routing tubing in tight spaces. Genuine Legris quality.",
    image: "/assets/generated/product-fittings.dim_400x300.jpg",
    specs: [
      { label: "Brand", value: "Legris" },
      { label: "Tube OD", value: "8 mm" },
      { label: "Thread", value: '1/4" BSP' },
      { label: "Angle", value: "90°" },
      { label: "Material", value: "Nickel Plated Brass" },
    ],
    tags: ["legris", "elbow"],
  },
  {
    id: "fit-003",
    name: "Push-In Tee Connector — 6mm",
    category: "Pneumatic Fittings & Connectors",
    categorySlug: "pneumatic-fittings",
    description:
      "3-way tee connector for splitting or combining air lines with identical tube OD.",
    image: "/assets/generated/product-fittings.dim_400x300.jpg",
    specs: [
      { label: "Tube OD", value: "6 mm" },
      { label: "Configuration", value: "Equal Tee (3-way)" },
      { label: "Material", value: "Brass / Acetal" },
      { label: "Max Pressure", value: "10 bar" },
      { label: "Temperature", value: "-20 to +60°C" },
    ],
    tags: ["tee", "3-way"],
  },
  {
    id: "fit-004",
    name: "Bulkhead Union Connector — 10mm",
    category: "Pneumatic Fittings & Connectors",
    categorySlug: "pneumatic-fittings",
    description:
      "Panel-mount bulkhead fitting for routing tubing through panels and enclosures.",
    image: "/assets/generated/product-fittings.dim_400x300.jpg",
    specs: [
      { label: "Tube OD", value: "10 mm" },
      { label: "Type", value: "Bulkhead Union" },
      { label: "Material", value: "Nickel Plated Brass" },
      { label: "Max Pressure", value: "12 bar" },
      { label: "Panel Thickness", value: "Up to 10 mm" },
    ],
    tags: ["bulkhead", "panel-mount"],
  },
  // Tubing
  {
    id: "tub-001",
    name: "Polyurethane Tubing — 6mm OD × 4mm ID",
    category: "Pneumatic Tubing",
    categorySlug: "pneumatic-tubing",
    description:
      "Flexible PU tubing for compressed air systems. Resistant to oil, abrasion, and kinking.",
    image: "/assets/generated/product-tubing.dim_400x300.jpg",
    specs: [
      { label: "Outer Diameter", value: "6 mm" },
      { label: "Inner Diameter", value: "4 mm" },
      { label: "Material", value: "Polyurethane" },
      { label: "Colors", value: "Blue, Black, Red, Transparent" },
      { label: "Max Pressure", value: "10 bar at 20°C" },
    ],
    tags: ["pu-tubing", "flexible"],
  },
  {
    id: "tub-002",
    name: "Nylon Tubing — 8mm OD × 6mm ID",
    category: "Pneumatic Tubing",
    categorySlug: "pneumatic-tubing",
    description:
      "Semi-rigid nylon tubing for longer runs. Higher burst pressure and temperature resistance.",
    image: "/assets/generated/product-tubing.dim_400x300.jpg",
    specs: [
      { label: "Outer Diameter", value: "8 mm" },
      { label: "Inner Diameter", value: "6 mm" },
      { label: "Material", value: "Polyamide (Nylon)" },
      { label: "Max Pressure", value: "15 bar" },
      { label: "Temperature", value: "-20 to +80°C" },
    ],
    tags: ["nylon", "high-pressure"],
  },
  {
    id: "tub-003",
    name: "Polyurethane Coiled Tubing — 6mm OD",
    category: "Pneumatic Tubing",
    categorySlug: "pneumatic-tubing",
    description:
      "Retractable coiled tubing for tools and moving equipment. Extends up to 5m.",
    image: "/assets/generated/product-tubing.dim_400x300.jpg",
    specs: [
      { label: "Outer Diameter", value: "6 mm" },
      { label: "Compressed Length", value: "1.5 m" },
      { label: "Extended Length", value: "5 m" },
      { label: "Material", value: "Polyurethane" },
      { label: "Max Pressure", value: "10 bar" },
    ],
    tags: ["coiled", "retractable"],
  },
  // FRL Units
  {
    id: "frl-001",
    name: 'FRL Combination Unit — 1/4" BSP',
    category: "Air Preparation Units (FRL)",
    categorySlug: "frl-units",
    description:
      "3-piece modular FRL unit with filter, regulator, and lubricator. Essential for protecting pneumatic equipment.",
    image: "/assets/generated/product-frl-unit.dim_400x300.jpg",
    specs: [
      { label: "Port Size", value: '1/4" BSP' },
      { label: "Filtration", value: "40 μm" },
      { label: "Regulator Range", value: "0.5–10 bar" },
      { label: "Lubricator Capacity", value: "25 ml" },
      { label: "Flow Rate", value: "1,500 l/min" },
    ],
    tags: ["frl", "combination"],
  },
  {
    id: "frl-002",
    name: 'Filter Regulator Unit — 3/8" BSP',
    category: "Air Preparation Units (FRL)",
    categorySlug: "frl-units",
    description:
      "High-flow filter-regulator for larger pneumatic systems. Transparent bowl for easy inspection.",
    image: "/assets/generated/product-frl-unit.dim_400x300.jpg",
    specs: [
      { label: "Port Size", value: '3/8" BSP' },
      { label: "Filtration", value: "25 μm" },
      { label: "Regulator Range", value: "0.5–12 bar" },
      { label: "Drain", value: "Manual / Auto" },
      { label: "Flow Rate", value: "2,500 l/min" },
    ],
    tags: ["filter-regulator", "high-flow"],
  },
  {
    id: "frl-003",
    name: 'Micro Filter Regulator — 1/8" BSP',
    category: "Air Preparation Units (FRL)",
    categorySlug: "frl-units",
    description:
      "Compact filter-regulator for small pneumatic systems and instrument air supply.",
    image: "/assets/generated/product-frl-unit.dim_400x300.jpg",
    specs: [
      { label: "Port Size", value: '1/8" BSP' },
      { label: "Filtration", value: "5 μm" },
      { label: "Regulator Range", value: "0.05–8 bar" },
      { label: "Type", value: "Miniature" },
      { label: "Flow Rate", value: "600 l/min" },
    ],
    tags: ["micro", "compact"],
  },
  // Directional Control Valves
  {
    id: "dcv-001",
    name: '4/2 Way Hand Lever Valve — 1/4" BSP',
    category: "Directional Control Valves",
    categorySlug: "directional-control-valves",
    description:
      "Manual 4-port hand lever valve for direct operator control of pneumatic actuators.",
    image: "/assets/generated/product-directional-valve.dim_400x300.jpg",
    specs: [
      { label: "Configuration", value: "4/2 Way" },
      { label: "Port Size", value: '1/4" BSP' },
      { label: "Actuation", value: "Hand Lever" },
      { label: "Body Material", value: "Aluminum" },
      { label: "Max Pressure", value: "10 bar" },
    ],
    tags: ["manual", "hand-lever"],
  },
  {
    id: "dcv-002",
    name: "5/3 Way Solenoid Valve — Closed Center",
    category: "Directional Control Valves",
    categorySlug: "directional-control-valves",
    description:
      "Closed center 5/3 way valve for mid-stop cylinder applications requiring precise positioning.",
    image: "/assets/generated/product-directional-valve.dim_400x300.jpg",
    specs: [
      { label: "Configuration", value: "5/3 Way Closed Center" },
      { label: "Port Size", value: '1/4" BSP' },
      { label: "Voltage", value: "24V DC" },
      { label: "Response Time", value: "< 25 ms" },
      { label: "Operating Pressure", value: "2–10 bar" },
    ],
    tags: ["5/3-way", "closed-center"],
  },
  {
    id: "dcv-003",
    name: "Push Button Valve — 3/2 Way",
    category: "Directional Control Valves",
    categorySlug: "directional-control-valves",
    description:
      "Momentary push button valve for manual triggering of pneumatic sequences.",
    image: "/assets/generated/product-directional-valve.dim_400x300.jpg",
    specs: [
      { label: "Configuration", value: "3/2 Way N/C" },
      { label: "Port Size", value: '1/8" BSP' },
      { label: "Actuation", value: "Push Button" },
      { label: "Body Material", value: "Aluminum" },
      { label: "Max Pressure", value: "10 bar" },
    ],
    tags: ["push-button", "manual"],
  },
  // Pressure Gauges
  {
    id: "pg-001",
    name: "Glycerin Pressure Gauge — 0–10 bar, 63mm",
    category: "Pressure Gauges",
    categorySlug: "pressure-gauges",
    description:
      "Stainless steel case glycerin-filled gauge for vibration-prone environments. Bottom entry BSP connection.",
    image: "/assets/generated/product-pressure-gauge.dim_400x300.jpg",
    specs: [
      { label: "Range", value: "0–10 bar" },
      { label: "Dial Size", value: "63 mm" },
      { label: "Connection", value: '1/4" BSP Bottom' },
      { label: "Fill", value: "Glycerin" },
      { label: "Case", value: "Stainless Steel" },
    ],
    tags: ["glycerin", "industrial"],
  },
  {
    id: "pg-002",
    name: "Dry Pressure Gauge — 0–16 bar, 50mm",
    category: "Pressure Gauges",
    categorySlug: "pressure-gauges",
    description:
      "Compact dry dial gauge for clean air applications. Suitable for FRL mounting.",
    image: "/assets/generated/product-pressure-gauge.dim_400x300.jpg",
    specs: [
      { label: "Range", value: "0–16 bar" },
      { label: "Dial Size", value: "50 mm" },
      { label: "Connection", value: '1/4" BSP Back' },
      { label: "Fill", value: "Dry" },
      { label: "Case", value: "ABS Plastic" },
    ],
    tags: ["dry", "compact"],
  },
  {
    id: "pg-003",
    name: "Differential Pressure Gauge — 0–4 bar, 100mm",
    category: "Pressure Gauges",
    categorySlug: "pressure-gauges",
    description:
      "Large dial differential gauge for monitoring filter pressure drop across process equipment.",
    image: "/assets/generated/product-pressure-gauge.dim_400x300.jpg",
    specs: [
      { label: "Range", value: "0–4 bar" },
      { label: "Dial Size", value: "100 mm" },
      { label: "Connection", value: '1/4" BSP High/Low' },
      { label: "Type", value: "Differential" },
      { label: "Case", value: "Stainless Steel" },
    ],
    tags: ["differential", "large-dial"],
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.categorySlug === slug);
}

export const featuredProducts = products.filter((p) =>
  ["cyl-001", "sol-001", "fit-001", "tub-001", "frl-001", "dcv-001"].includes(
    p.id,
  ),
);
