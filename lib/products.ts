export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: string;
  variants?: string[];
  tag: string;
};

export const products: Product[] = [
  // Acoustic Series
    { id: 1, name: "Acoustic Pendant — Round A", category: "acoustic", image: "/products/acoustic-1.jpeg", description: "Iron + PET acoustic absorbing material pendant. E27 base, IP20 rated.", specs: "Material: Iron + PET · AC220–240V · IP20 · Lamp Base: E27", variants: ["φ330×180mm", "φ430×250mm", "φ530×280mm"], tag: "3 size variants" },
    { id: 2, name: "Acoustic Pendant — Round B", category: "acoustic", image: "/products/acoustic-2.png", description: "Compact single-size acoustic absorbing pendant. E27 base, IP20 rated.", specs: "Material: Iron + PET · AC220–240V · IP20 · Lamp Base: E27", variants: ["φ350×200mm"], tag: "Single size" },
    { id: 3, name: "Acoustic Pendant — Round C", category: "acoustic", image: "/products/acoustic-3.jpeg", description: "Mid-range acoustic pendant in two diameter options. E27 base, IP20 rated.", specs: "Material: Iron + PET · AC220–240V · IP20 · Lamp Base: E27", variants: ["φ350×260mm", "φ500×380mm"], tag: "2 size variants" },
    { id: 4, name: "Acoustic Pendant — Wide", category: "acoustic", image: "/products/acoustic-4.jpeg", description: "Wide-diameter acoustic absorbing pendant. E27 base, IP20 rated.", specs: "Material: Iron + PET · AC220–240V · IP20 · Lamp Base: E27", variants: ["φ400×180mm", "φ500×160mm", "φ650×180mm"], tag: "3 size variants" },
    
    // Linear Light
    { id: 5, name: "Linear Direct — Slim", category: "linear", image: "/products/linear-1.jpeg", description: "Direct light distribution. Bluetooth, WiFi, DALI dimming. Suspended, surface, recessed or wall mount.", specs: "CCT: 3000K/4000K/6500K · CRI ≥80/90 · Power: 15–30W · Lm/W: 125 · Beam: 100° · UGR <22", variants: ["572×102×78mm", "852×102×78mm", "1132×102×78mm"], tag: "Direct · UGR <22" },
    { id: 6, name: "Linear Double-Sided — Slim", category: "linear", image: "/products/linear-2.jpeg", description: "Double-sided light distribution. Bluetooth, WiFi, DALI dimming. Multiple installation modes.", specs: "CCT: 3000K/4000K/6500K · CRI ≥80/90 · Power: 7–30W · Lm/W: 141/125 · Beam: 100° · UGR <22", variants: ["572×102×78mm", "852×102×78mm", "1132×102×78mm"], tag: "Double-sided · UGR <22" },
    { id: 7, name: "Linear Direct — Narrow", category: "linear", image: "/products/linear-3.png", description: "Narrow-body direct linear light. Bluetooth, WiFi, DALI dimming.", specs: "CCT: 3000K/4000K/6500K · CRI ≥80/90 · Power: 22–38W · Lm/W: 80 · Beam: 75° · UGR <19", variants: ["572×88×65mm", "852×88×65mm", "1132×88×65mm"], tag: "Direct · 75° · UGR <19" },
    { id: 8, name: "Linear Double-Sided — Narrow", category: "linear", image: "/products/linear-4.png", description: "Narrow-body double-sided linear light. Bluetooth, WiFi, DALI dimming.", specs: "CCT: 3000K/4000K/6500K · CRI ≥80/90 · Power: 7–30W · Lm/W: 133/80 · Beam: 100°/75° · UGR <19", variants: ["572×88×65mm", "852×88×65mm", "1132×88×65mm"], tag: "Double-sided · UGR <19" },
    
    // Lighting System
    { id: 9, name: "Combined Lighting System", category: "lighting-system", image: "/products/system-1.png", description: "Fully integrated combined lighting system. Parameters available in product folder.", specs: "Custom configuration — see product documentation", tag: "System" },
    { id: 10, name: "Belt Lighting System", category: "lighting-system", image: "/products/system-2.jpeg", description: "Belt-style integrated lighting system. Parameters available in product folder.", specs: "Custom configuration — see product documentation", tag: "System" },
    { id: 11, name: "Magnetic Spotlight — AC", category: "lighting-system", image: "/products/magnetic-1.png", description: "AC220V magnetic track spotlight. DALI/0-10V/TRIAC dimming. Sand Black or Sand White.", specs: "Voltage: AC220V · CRI: RA80/90 · CCT: 2700K–6000K · Power: 10–20W · Beam: 15°/24°/36°", variants: ["Φ55×93mm · 10W", "Φ62.5×115mm · 20W"], tag: "AC · 2 sizes" },
    { id: 12, name: "Magnetic Track Spotlight", category: "lighting-system", image: "/products/magnetic-2.png", description: "AC220V magnetic track-mounted spotlight. DALI/0-10V/TRIAC dimming.", specs: "Voltage: AC220V · CRI: RA80/90 · CCT: 2700K–6000K · Beam: 15°/24°/36°/45°", variants: ["φ70×122.5mm · 15W", "φ95×166mm · 30W"], tag: "Track mount · 2 sizes" },
    { id: 13, name: "Magnetic Mini Spotlight — DC", category: "lighting-system", image: "/products/magnetic-3.png", description: "DC48V compact magnetic track spotlight. DALI/0-10V/PWM dimming.", specs: "Voltage: DC48V · CRI: ≥RA80 · CCT: 2700K–6000K · Beam: 15°/24°/36°", variants: ["Φ35×70mm · 5W · 480lm", "Φ35×110mm · 8W · 1014lm"], tag: "DC48V · 2 sizes" },
    { id: 14, name: "Magnetic Bar Spotlight — DC", category: "lighting-system", image: "/products/magnetic-4.png", description: "DC48V bar-style magnetic spotlight. Selectable beam angle.", specs: "Voltage: DC48V · CRI: ≥RA80 · CCT: 2700K–6000K · Beam: 25°/45°/60°", variants: ["196×22×98mm · 12W", "292×22×98mm · 18W"], tag: "DC48V · selectable beam" },
    { id: 15, name: "Magnetic Flood Bar — DC", category: "lighting-system", image: "/products/magnetic-5.png", description: "DC48V wide-angle flood bar for track mounting.", specs: "Voltage: DC48V · CRI: ≥RA80 · CCT: 2700K–6000K · Beam: 110°", variants: ["196×22×98mm · 8W", "388×22×98mm · 15W"], tag: "DC48V · 110°" },
    { id: 16, name: "Magnetic Tube Light — DC", category: "lighting-system", image: "/products/magnetic-6.png", description: "DC48V slender tube for magnetic track. DALI/0-10V/PWM.", specs: "Voltage: DC48V · CRI: ≥RA80 · CCT: 2700K–5000K · Power: 5W · Beam: 15°/24°/36°", variants: ["Φ20×200mm", "Φ20×300mm"], tag: "DC48V · tube" },
    { id: 17, name: "Acoustic Panel Spotlight", category: "lighting-system", image: "/products/acoustic-system-1.png", description: "Acoustic panel with integrated spotlights. Track mounted, IP20.", specs: "Voltage: AC110–265V · CRI: ≥RA80 · CCT: 2700K–5000K · Power: 5W/spot · Beam: 24°/36°", variants: ["578×578×193mm"], tag: "Acoustic integrated" },
    { id: 18, name: "Acoustic Felt Panel Light", category: "lighting-system", image: "/products/acoustic-system-2.png", description: "Thermoformed acoustic felt panel with COB light. CRI Ra90, UGR <19.", specs: "CCT: 2700K–6000K · CRI: Ra90 · Power: 25W · Beam: 24°/36° · IP20 · Lifespan: 30,000h", variants: ["596×596×141mm"], tag: "COB · Ra90 · UGR <19" },
    
    // Table Light
    { id: 19, name: "Table Lamp — Compact", category: "table", image: "/products/table-1.png", description: "Rechargeable metal table lamp with touch control and three-tone light.", specs: "Size: Φ155×205mm · Power: 3W · Battery: 2000mAh · Charge: 4–5h · Endurance: 9–12h", tag: "Touch · rechargeable" },
    { id: 20, name: "Table Lamp — Tall", category: "table", image: "/products/table-2.png", description: "Aluminum push-button dimmable table lamp in modern style.", specs: "Size: Φ130×280mm · Material: Aluminum · Switch: Push button · Dimmable", tag: "Dimmable" },
    { id: 21, name: "Table Lamp — Tube", category: "table", image: "/products/table-3.png", description: "Iron and silicone tube-style LED table lamp with dimming.", specs: "Size: Φ98×355mm · Material: Iron + Silicone · Power: LED 18W · Dimmable", tag: "18W · dimmable" },
    { id: 22, name: "Table Lamp — Cube", category: "table", image: "/products/table-4.png", description: "Compact cube table lamp in iron, plastic and wood.", specs: "Size: 25×25×30cm · Power: 9W · Voltage: 220V · Material: Iron + Plastic + Wood", tag: "9W · 220V" },
    
    // Wall Light
    { id: 23, name: "Wall Sconce — Vertical", category: "wall", image: "/products/wall-1.png", description: "Tall vertical silicone wall sconce, dimmable with push-button switch.", specs: "Size: 120×102×400mm · Material: Silicone · Power: LED 12W · Dimmable", tag: "Indoor · 12W" },
    { id: 24, name: "Wall Lamp — Rechargeable", category: "wall", image: "/products/wall-2.png", description: "Compact rechargeable aluminum wall lamp with adjustable brightness.", specs: "Size: 100×100×80mm · Power: 3W · Battery: 5200mAh · CCT: 2700K · Charging: 5V Type-C", tag: "Type-C · rechargeable" },
    { id: 25, name: "Wall Spotlight — Square S", category: "wall", image: "/products/wall-3.png", description: "Small IP65 die-cast aluminum outdoor wall spotlight.", specs: "Size: 65×65mm · Power: 4W · Voltage: AC85–265V · CCT: 3000K/4000K/6500K · IP65", tag: "IP65 · outdoor" },
    { id: 26, name: "Wall Spotlight — Square L", category: "wall", image: "/products/wall-4.png", description: "Large IP65 die-cast aluminum outdoor wall spotlight.", specs: "Size: 160×160×42mm · Power: 8W · Voltage: AC85–265V · CCT: 3000K/4000K/6500K · IP65", tag: "IP65 · outdoor" },
    
    // Floor Light
    { id: 27, name: "Floor Lamp — Slim", category: "floor", image: "/products/floor-1.jpeg", description: "Slim iron and glass floor lamp. E27 base, switch dimming.", specs: "Size: 320×1900mm · Power: 10W · CCT: 3000K · CRI: Ra90 · Colors: White/Black/Silver", tag: "E27 · 10W" },
    { id: 28, name: "Floor Lamp — Arc", category: "floor", image: "/products/floor-2.jpeg", description: "Sweeping arc iron and glass floor lamp. E27 base.", specs: "Size: 1600×2070mm · Power: 7W · CCT: 3000K · CRI: Ra90 · Colors: White/Black/Silver", tag: "E27 · arc" },
    { id: 29, name: "Floor Lamp — Tripod", category: "floor", image: "/products/floor-3.jpeg", description: "Tripod-base iron and aluminum floor lamp with cool white light.", specs: "Size: 1200×1700mm · Power: 30W · CCT: 6000K · CRI: Ra90 · Colors: White/Black", tag: "30W · 6000K" },
    { id: 30, name: "Floor Lamp — Spotlight", category: "floor", image: "/products/floor-4.jpeg", description: "High-output aluminum spotlight floor lamp.", specs: "Size: 620×320×1960mm · Power: 30W · CCT: 4000K · Luminous flux: 9000lm · Colors: White/Black", tag: "9000lm · 4000K" },
    
    // General Lighting
    { id: 31, name: "Downlight — Round 10W", category: "general", image: "/products/downlight-1.png", description: "Round recessed downlight, CRI ≥90, three CCT options.", specs: "Size: Ø82×45mm · Cutout: φ75mm · Power: 10W · CCT: 3000K/4000K/6000K · CRI: ≥90 · AC220–240V", tag: "Downlight · CRI ≥90" },
    { id: 32, name: "Downlight — Round 12W", category: "general", image: "/products/downlight-2.png", description: "Slightly deeper round recessed downlight, CRI ≥90.", specs: "Size: Ø82×H55mm · Cutout: φ75mm · Power: 12W · CCT: 3000K/4000K/6000K · CRI: ≥90 · AC220–240V", tag: "Downlight · CRI ≥90" },
    { id: 33, name: "Downlight — Square 12W", category: "general", image: "/products/downlight-3.png", description: "Square recessed downlight, CRI ≥90.", specs: "Size: 87×87×60mm · Cutout: 80×75mm · Power: 12W · CCT: 3000K/4000K/6000K · CRI: ≥90 · AC220–240V", tag: "Square · CRI ≥90" },
    { id: 34, name: "Spotlight — Single 12W", category: "general", image: "/products/spotlight-1.png", description: "Recessed spotlight with four selectable beam angles, CRI ≥90.", specs: "Size: Ø82×H60mm · Cutout: φ75mm · Power: 12W · Beam: 12°/24°/36°/50° · CRI: ≥90 · AC220–240V", tag: "Spotlight · 4 beam angles" },
    { id: 35, name: "Spotlight — Double 16W", category: "general", image: "/products/spotlight-2.png", description: "Twin-head recessed spotlight, two 8W heads, CRI ≥90.", specs: "Size: 96×49×69mm · Cutout: L92×W45mm · Power: 2×8W · Beam: 12°/24°/36°/50° · CRI: ≥90 · AC220–240V", tag: "Twin · CRI ≥90" },
    { id: 36, name: "Spotlight — Precision 7W", category: "general", image: "/products/spotlight-3.jpeg", description: "High-CRI precision spotlight. EAGLERISE driver, BRIDGELUX chip, 3-year warranty.", specs: "Size: Φ68×62mm · Cutout: Φ55mm · Power: 7W · CRI: ≥95 · Lm/W: 100 · Lm: 700 · Beam: 15°/24°/36° · IP30", tag: "CRI ≥95 · 3yr warranty" },
    { id: 37, name: "Spotlight — Narrow 7W", category: "general", image: "/products/spotlight-4.png", description: "Narrow recessed spotlight with 5 beam angle options. EAGLERISE driver, BRIDGELUX chip.", specs: "Size: φ62×H75mm · Cutout: Ø55mm · Power: 7W · Lm/W: 90 · Beam: 8°/15°/24°/36°/60° · IP30", tag: "5 beam angles" },
    { id: 38, name: "Spotlight — Standard 15W", category: "general", image: "/products/spotlight-5.png", description: "Standard 15W recessed spotlight with 5 beam angles. EAGLERISE driver, BRIDGELUX chip.", specs: "Size: φ83×H98mm · Cutout: Ø75mm · Power: 15W · Lm/W: 90 · Beam: 8°/15°/24°/36°/60° · IP30", tag: "15W · 5 beam angles" },
    { id: 39, name: "Downlight — Magnetic Surface", category: "general", image: "/products/downlight-4.png", description: "Surface-mount magnetic downlight with DALI dimming and 5 CCT options.", specs: "Size: φ75×90mm · Power: 10W · CCT: 2700K/3000K/4000K/5000K/6000K · CRI: RA80/90 · Beam: 12°/24°/38° · DALI/1-10V/TRIAC", tag: "DALI · 5 CCT" },
];

export function getProductById(id: number) {
  return products.find((p) => p.id === id);
}