export interface Product {
  id: string;
  name: string;
  category: 'Nuts & Roasted' | 'Savoury & Crisps' | 'Wafers & Bakery' | 'Protein & Creatine' | 'Confectionery & Sweets';
  image: string;
  description: string;
  packageSize: string;
  badge?: string;
  popular?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "JJGM & CO Premium Whole Roasted Almonds",
    category: "Nuts & Roasted",
    image: "/products/20260325_151632_1570x.webp",
    description: "Slow-roasted to golden perfection, selected California whole almonds with a subtle crunch.",
    packageSize: "12 x 150g",
    badge: "Best Seller",
    popular: true
  },
  {
    id: "prod-2",
    name: "Cookie Dough Creatine SRP Bar",
    category: "Protein & Creatine",
    image: "/products/cookie_dough_creatine_srp_bar_f26e633a_7520_49ba_8915_d6fcde2024b6.webp",
    description: "Delicious cookie dough protein bar infused with premium creatine monohydrate for workout recovery.",
    packageSize: "12 x 60g SRP Box",
    badge: "High Protein",
    popular: true
  },
  {
    id: "prod-3",
    name: "Ginni's Roasted & Salted Pistachios",
    category: "Nuts & Roasted",
    image: "/products/imghunt_co_20260811_2017_09_21_img_2239.webp",
    description: "Hand-picked naturally opened pistachios, expertly dry roasted with sea salt.",
    packageSize: "20 x 100g",
    badge: "Premium Quality"
  },
  {
    id: "prod-4",
    name: "Ginni's Jumbo Roasted Cashews",
    category: "Nuts & Roasted",
    image: "/products/imghunt_co_20260811_2017_09_21_img_2240.webp",
    description: "Jumbo whole cashew nuts roasted in pure vegetable oil and lightly salted.",
    packageSize: "16 x 150g",
    badge: "Wholesale Pack",
    popular: true
  },
  {
    id: "prod-5",
    name: "Ginni's Hickory Smoked Almonds SRP",
    category: "Nuts & Roasted",
    image: "/products/imghunt_co_20260811_20229824_1638312292879559_4400119219911750088_o_1.webp",
    description: "Smokey, savory almonds infused with natural hickory smoke down to the core.",
    packageSize: "12 x 120g SRP Box",
    badge: "Signature Crunch"
  },
  {
    id: "prod-6",
    name: "Ginni's Honey Glazed Peanuts & Cashews",
    category: "Nuts & Roasted",
    image: "/products/imghunt_co_20260811_20229824_1638312292879559_4400119219911750088_o.webp",
    description: "Sweet and salty nut mix coated in pure blossom honey glaze.",
    packageSize: "12 x 150g",
    badge: "Sweet & Savoury"
  },
  {
    id: "prod-7",
    name: "Ginni's Bacon Crispy Bites (Retail Pack)",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_bacon_bites_1.webp",
    description: "Crunchy bacon flavoured snack bites perfect for quick snacking.",
    packageSize: "24 x 40g"
  },
  {
    id: "prod-8",
    name: "Ginni's Bacon Crispy Bites (Wholesale Bag)",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_bacon_bites.webp",
    description: "Extra crispy bacon savouries in bulk wholesale distribution packs.",
    packageSize: "12 x 120g"
  },
  {
    id: "prod-9",
    name: "Ginn's Wholegrain Salted Popcorn (Retail)",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_ginns_wholegrain_salted_popcorn_1.webp",
    description: "Air-popped wholegrain corn lightly sprinkled with fine sea salt.",
    packageSize: "20 x 30g"
  },
  {
    id: "prod-10",
    name: "Ginn's Wholegrain Salted Popcorn (Bulk Case)",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_ginns_wholegrain_salted_popcorn.webp",
    description: "Case of premium wholegrain salted popcorn bags.",
    packageSize: "12 x 90g Case"
  },
  {
    id: "prod-11",
    name: "Ginni's Traditional Bombay Mix",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_ginnis_bombay_mix_1.webp",
    description: "Authentic spicy mix of fried noodles, peanuts, lentils, and fragrant spices.",
    packageSize: "20 x 150g",
    badge: "Top Seller",
    popular: true
  },
  {
    id: "prod-12",
    name: "Ginni's Bombay Mix (Wholesale Case)",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_ginnis_bombay_mix.webp",
    description: "Wholesale case of traditional crunchy Bombay Mix.",
    packageSize: "12 x 300g"
  },
  {
    id: "prod-13",
    name: "Ginni's Super Cheese Balls",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_ginnis_cheese_balls_1.webp",
    description: "Mouth-watering cheesy puffed corn balls with intense savory flavor.",
    packageSize: "24 x 45g"
  },
  {
    id: "prod-14",
    name: "Ginni's Golden Cheese Balls (Family Bag)",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_ginnis_cheese_balls.webp",
    description: "Large bag of golden puffed cheese balls.",
    packageSize: "12 x 130g"
  },
  {
    id: "prod-15",
    name: "Ginni's Spicy Chilli Rice Crackers",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_ginnis_chilli_rice_crackers_1.webp",
    description: "Crispy Oriental rice crackers seasoned with red chili and soy glaze.",
    packageSize: "20 x 100g"
  },
  {
    id: "prod-16",
    name: "Ginni's Chilli Rice Crackers (Bulk Box)",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_ginnis_chilli_rice_crackers.webp",
    description: "Wholesale box of spicy chili rice cracker mix.",
    packageSize: "10 x 250g"
  },
  {
    id: "prod-17",
    name: "Ginni's Peanut & Sesame Honey Bites",
    category: "Confectionery & Sweets",
    image: "/products/imghunt_co_20260811_ginnis_peanut_sesame_bites_1.webp",
    description: "Handcrafted peanut and toasted sesame seed brittle with natural caramel sugar.",
    packageSize: "16 x 120g"
  },
  {
    id: "prod-18",
    name: "Ginni's Peanut & Sesame Brittle (Wholesale)",
    category: "Confectionery & Sweets",
    image: "/products/imghunt_co_20260811_ginnis_peanut_sesame_bites.webp",
    description: "Bulk display tray of crunchy peanut sesame snacks.",
    packageSize: "12 x 200g"
  },
  {
    id: "prod-19",
    name: "Ginni's Crispy Pork Crunch",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_ginnis_pork_crunch_1.webp",
    description: "Light and airy pork rinds, fried to crisp perfection and seasoned with salt.",
    packageSize: "20 x 30g"
  },
  {
    id: "prod-20",
    name: "Ginni's Traditional Pork Crunch (Wholesale)",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_ginnis_pork_crunch.webp",
    description: "Wholesale case of light pork crunch snacks.",
    packageSize: "12 x 70g"
  },
  {
    id: "prod-21",
    name: "Ginni's Hand-Cooked Pork Scratchings",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_ginnis_pork_scratching_1.webp",
    description: "Pub-style traditional pork scratchings cooked to a deep, savory crunch.",
    packageSize: "20 x 50g"
  },
  {
    id: "prod-22",
    name: "Ginni's Toffee Popcorn (Small Pack)",
    category: "Confectionery & Sweets",
    image: "/products/imghunt_co_20260811_ginnis_sensational_toffee_popcorn_1.webp",
    description: "Butter toffee glazed popcorn with a sweet caramel coating.",
    packageSize: "24 x 50g"
  },
  {
    id: "prod-23",
    name: "Ginni's Toffee Popcorn (Family Bag)",
    category: "Confectionery & Sweets",
    image: "/products/imghunt_co_20260811_ginnis_sensational_toffee_popcorn.webp",
    description: "Large bag of luxurious rich butter toffee coated popcorn.",
    packageSize: "12 x 180g"
  },
  {
    id: "prod-24",
    name: "Ginni's Cinema Sweet Popcorn",
    category: "Confectionery & Sweets",
    image: "/products/imghunt_co_20260811_ginnis_sweet_popcorn_1.webp",
    description: "Classic sweet popcorn popped fresh and lightly sugar coated.",
    packageSize: "20 x 80g"
  },
  {
    id: "prod-25",
    name: "Ginni's Toasted Corn - Chili & Lemon",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_ginnis_toasted_corn_chilli_lemon_flavour_1.webp",
    description: "Giant corn kernels toasted with zesty lemon and fiery chili seasoning.",
    packageSize: "20 x 100g",
    badge: "Fiery Flavor"
  },
  {
    id: "prod-26",
    name: "Ginni's Toasted Corn - Chili & Lemon (Bulk)",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_ginnis_toasted_corn_chilli_lemon_flavour.webp",
    description: "Bulk wholesale pack of zesty chili lemon giant toasted corn.",
    packageSize: "10 x 300g"
  },
  {
    id: "prod-27",
    name: "Ginni's Toasted Corn - Original Salted",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_ginnis_toasted_corn_natural_flavour_1.webp",
    description: "Crunchy giant toasted corn with natural sea salt seasoning.",
    packageSize: "20 x 100g"
  },
  {
    id: "prod-28",
    name: "Ginni's Toasted Corn - Original Salted (Bulk)",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_ginnis_toasted_corn_natural_flavour.webp",
    description: "Wholesale case of natural sea salted toasted giant corn.",
    packageSize: "10 x 300g"
  },
  {
    id: "prod-29",
    name: "Ginni's Hot & Spicy Extra Bombay Mix",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_hot_bombay_mix.webp",
    description: "Extra spicy blend of spicy noodles, chili coated nuts, and fried lentils.",
    packageSize: "12 x 350g",
    badge: "Hot & Spicy",
    popular: true
  },
  {
    id: "prod-30",
    name: "Ginni's Ultimate Party Snack Box",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_party_box_1.webp",
    description: "Assorted party box containing Bombay mix, popcorn, rice crackers, and nuts.",
    packageSize: "1 Box (12 Assorted Bags)"
  },
  {
    id: "prod-31",
    name: "Ginni's Grand Celebration Party Box",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_party_box.webp",
    description: "Mega snack hamper for catering, events, and family gatherings.",
    packageSize: "Large Party Box"
  },
  {
    id: "prod-32",
    name: "JJGM & CO Deluxe Mixed Nuts Assortment",
    category: "Nuts & Roasted",
    image: "/products/imghunt_co_20260811_untitled_design_6.webp",
    description: "Premium blend of roasted cashews, almonds, hazelnuts, and walnuts.",
    packageSize: "12 x 200g",
    popular: true
  },
  {
    id: "prod-33",
    name: "JJGM & CO Slow-Roasted Salted Almonds",
    category: "Nuts & Roasted",
    image: "/products/imghunt_co_20260811_untitled_design.webp",
    description: "Crispy whole almonds slow roasted with pure sea salt.",
    packageSize: "16 x 150g"
  },
  {
    id: "prod-34",
    name: "Ginni's Spicy Bombay Mix Bag",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_bombay_mix_1.webp",
    description: "Handy retail packet of savory Bombay mix noodles and spiced nuts.",
    packageSize: "24 x 100g"
  },
  {
    id: "prod-35",
    name: "Ginni's Bombay Mix Family Tub",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_bombay_mix.webp",
    description: "Wholesale catering tub of fresh crisp Bombay Mix.",
    packageSize: "6 x 500g Tub"
  },
  {
    id: "prod-36",
    name: "Ginni's Bumper Wholesale Snack Box",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_bumper_box.webp",
    description: "Full retail counter display unit packed with top-selling snack bags.",
    packageSize: "1 Display Box (24 Bags)",
    badge: "Wholesale Value"
  },
  {
    id: "prod-54",
    name: "Ginni's Honey Roasted Mustard Peanuts",
    category: "Nuts & Roasted",
    image: "/products/imghunt_co_20260811_image_asset_2.webp",
    description: "Peanuts double roasted with honey, brown sugar, and tangy mustard seasoning.",
    packageSize: "16 x 150g"
  },
  {
    id: "prod-55",
    name: "Ginni's Golden Crispy Onion Rings",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_onion_2brings_1.webp",
    description: "Light corn rings puffed and dusted with sweet onion seasoning.",
    packageSize: "20 x 40g"
  },
  {
    id: "prod-56",
    name: "Ginni's Assorted Pub Snacks Card",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_snacks_1.webp",
    description: "Classic bar hanger card with pork scratchings, nuts, and savouries.",
    packageSize: "1 Hanging Card (12 Bags)"
  },
  {
    id: "prod-57",
    name: "Tago Crispy Wafer Rolls - Tiramisu Cream",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_crispy_wafer_roll_with_tiramisu_filling_9172.jpeg",
    description: "Thin, crispy rolled wafers filled with velvety tiramisu coffee cream.",
    packageSize: "24 x 160g Box",
    badge: "European Bakery",
    popular: true
  },
  {
    id: "prod-58",
    name: "Tago Delicante Jaffa Cake - Cherry",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_delicante_jaffa_cake_cherry_2173.jpeg",
    description: "Soft sponge biscuit topped with dark chocolate and rich cherry fruit jelly.",
    packageSize: "18 x 135g"
  },
  {
    id: "prod-59",
    name: "Tago Delicante Jaffa Cake - Orange",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_delicante_jaffa_cake_orange_2994.jpeg",
    description: "Classic orange jelly sponge biscuits with smooth dark chocolate layer.",
    packageSize: "18 x 135g",
    popular: true
  },
  {
    id: "prod-60",
    name: "Tago Delicante Jaffa Cake - Strawberry",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_delicante_jaffa_cake_strawberry_9501.jpeg",
    description: "Sponge biscuit cakes filled with sweet strawberry jelly glaze.",
    packageSize: "18 x 135g"
  },
  {
    id: "prod-61",
    name: "Tago Duet Family Gingerbread Pack",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_duet_family_gingerbread_3317.jpeg",
    description: "Traditional European gingerbread hearts glazed with sugar and chocolate.",
    packageSize: "14 x 200g"
  },
  {
    id: "prod-62",
    name: "Tago Duet Gingerbread Hearts",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_duet_gingerbread_3955.jpeg",
    description: "Spice infused gingerbread biscuit hearts coated in premium cocoa glaze.",
    packageSize: "16 x 150g"
  },
  {
    id: "prod-63",
    name: "Tago Gingerbread with Plum Filling",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_ginger_bread_with_plum_14x180g_7455.jpeg",
    description: "Soft spiced gingerbread hearts filled with rich plum jam fruit center.",
    packageSize: "14 x 180g Wholesale Box",
    badge: "Plum Jam Center"
  },
  {
    id: "prod-64",
    name: "Tago Glazed Gingerbread Hearts",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_gingerbread_glazed_hearts_14x160g_5693.jpeg",
    description: "Sugar glazed gingerbread biscuits crafted with cinnamon and cloves.",
    packageSize: "14 x 160g Wholesale Box"
  },
  {
    id: "prod-65",
    name: "Tago Gingerbread with Fruit Filling",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_gingerbread_with_fruit_filling_9948.jpeg",
    description: "Assorted fruit jam filled gingerbread cookies coated in rich chocolate.",
    packageSize: "14 x 180g"
  },
  {
    id: "prod-66",
    name: "Tago Gingerbread with Strawberry Filling",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_gingerbread_with_strawberry_filling_4949.jpeg",
    description: "Strawberry jam stuffed gingerbread hearts with dark cocoa outer shell.",
    packageSize: "14 x 180g"
  },
  {
    id: "prod-67",
    name: "Tago Gingerbreads with Orange Filling",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_gingerbreads_with_orange_filling_5466.jpeg",
    description: "Zesty orange jam center encased in fragrant spiced gingerbread dough.",
    packageSize: "14 x 180g"
  },
  {
    id: "prod-68",
    name: "Tago Sunflower Seed Biscuits",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_sunflower_2792.jpeg",
    description: "Crispy butter biscuits encrusted with roasted sunflower seeds.",
    packageSize: "20 x 140g"
  },
  {
    id: "prod-69",
    name: "Tago Wafer Rolls - Choc Orange Cream",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_wafer_rolls_with_choc_orange_cream_9382.jpeg",
    description: "Wafer tubes packed with chocolate orange cocoa cream.",
    packageSize: "24 x 150g"
  },
  {
    id: "prod-70",
    name: "Tago Wafer Rolls - Cocoa Cream (Retail)",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_wafer_rolls_with_cocoa_cream_5239.jpeg",
    description: "Rolled wafers filled with intense dark cocoa chocolate cream.",
    packageSize: "24 x 150g"
  },
  {
    id: "prod-71",
    name: "Tago Wafer Rolls - Cocoa Cream (Wholesale Box)",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_wafer_rolls_with_cocoa_cream_7100.jpeg",
    description: "Bulk wholesale case of cocoa cream wafer rolls.",
    packageSize: "12 x 300g"
  },
  {
    id: "prod-72",
    name: "Tago Wafer Rolls - Tropical Coconut Cream",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_wafer_rolls_with_coconut_cream_2134.jpeg",
    description: "Crispy wafer rolls filled with sweet shredded coconut cream.",
    packageSize: "24 x 150g"
  },
  {
    id: "prod-73",
    name: "Tago Wafer Rolls - Island Coconut Cream (Bulk)",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_wafer_rolls_with_coconut_cream_6022.jpeg",
    description: "Wholesale box of delicate coconut filled wafer rolls.",
    packageSize: "12 x 300g"
  },
  {
    id: "prod-74",
    name: "Tago Wafer Rolls - Nut Cream",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_wafer_rolls_with_nut_cream_8308.jpeg",
    description: "Wafer rolls loaded with roasted hazelnut chocolate filling.",
    packageSize: "24 x 150g"
  },
  {
    id: "prod-75",
    name: "Tago Wafer Rolls - Hazelnut Cream (Wholesale)",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_wafer_rolls_with_nut_cream_9065.jpeg",
    description: "Bulk wholesale display box of hazelnut cream wafer rolls.",
    packageSize: "12 x 300g"
  },
  {
    id: "prod-76",
    name: "Tago Wafer Rolls - Gourmet Pistachio Cream",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_wafer_rolls_with_pistachio_8231.jpeg",
    description: "Luxurious wafer rolls stuffed with real Italian pistachio cream.",
    packageSize: "24 x 150g",
    badge: "Gourmet Edition",
    popular: true
  },
  {
    id: "prod-77",
    name: "Tago Wafer Rolls - Sweet Raspberry Cream",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_wafer_rolls_with_raspberry_cream_3030.jpeg",
    description: "Crispy wafer tubes filled with creamy raspberry fruit filling.",
    packageSize: "24 x 150g"
  },
  {
    id: "prod-78",
    name: "Tago Wafer Rolls - Salted Caramel Cream",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_wafer_rolls_with_salted_caramel_8780.jpeg",
    description: "Golden wafer rolls filled with rich sea salted caramel cream.",
    packageSize: "24 x 150g",
    popular: true
  },
  {
    id: "prod-79",
    name: "Tago Wafer Rolls - Vanilla Cream (Retail)",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_wafer_rolls_with_vanilla_cream_1680.jpeg",
    description: "Delicate wafer rolls filled with sweet Madagascar vanilla bean cream.",
    packageSize: "24 x 150g"
  },
  {
    id: "prod-80",
    name: "Tago Wafer Rolls - French Vanilla Cream (Bulk)",
    category: "Wafers & Bakery",
    image: "/products/imghunt_co_20260811_tago_wafer_rolls_with_vanilla_cream_3553.jpeg",
    description: "Wholesale case of vanilla cream wafer rolls.",
    packageSize: "12 x 300g"
  },
  {
    id: "prod-83",
    name: "JJGM & CO Vegan Friendly Roasted Nut Mix",
    category: "Nuts & Roasted",
    image: "/products/imghunt_co_20260811_vegan_friendly_1.webp",
    description: "100% plant-based dry roasted nuts with sea salt.",
    packageSize: "16 x 150g",
    badge: "100% Vegan"
  },
  {
    id: "prod-84",
    name: "JJGM & CO Vegan Friendly Spicy Nibbles",
    category: "Savoury & Crisps",
    image: "/products/imghunt_co_20260811_vegan_friendly.webp",
    description: "Vegan certified crunchy spiced snack selection.",
    packageSize: "16 x 150g",
    badge: "100% Vegan"
  },
  {
    id: "prod-86",
    name: "Salted Caramel Creatine SRP Bar",
    category: "Protein & Creatine",
    image: "/products/salted_caramel_creatine_srp_bar.webp",
    description: "High-protein energy bar infused with salted caramel & performance creatine.",
    packageSize: "12 x 60g SRP Box",
    badge: "High Performance",
    popular: true
  },
  {
    id: "prod-87",
    name: "JJGM & CO Special Distribution Box",
    category: "Savoury & Crisps",
    image: "/products/whatsapp_image_2026_07_30_at_2_38_49_am.jpeg",
    description: "Custom wholesale assortments packed for regional retail distribution.",
    packageSize: "Wholesale Master Case"
  },
  {
    id: "prod-88",
    name: "Chocolate Brownie Protein SRP Bar (9g Protein)",
    category: "Protein & Creatine",
    image: "/products/white_amazon_brand_listing_choc_brownie_9g_small_f6c8b958_4f94_4f51_91e3_b7b883e39823.webp",
    description: "Compact 9g protein snack bar with rich chocolate brownie taste.",
    packageSize: "18 x 35g SRP Box"
  },
  {
    id: "prod-89",
    name: "Cookies & Cream Protein SRP Bar (9g Protein)",
    category: "Protein & Creatine",
    image: "/products/white_amazon_brand_listing_cookies_cream_9g_small_904d239a_52f9_4b8d_b87d_276eaa9922f7.webp",
    description: "Low sugar cookies and cream protein bar for active daily snacking.",
    packageSize: "18 x 35g SRP Box"
  },
  {
    id: "prod-90",
    name: "White Choc Raspberry Creatine SRP Bar",
    category: "Protein & Creatine",
    image: "/products/white_choc_raspberry_creatine_srp_bar.webp",
    description: "Smooth white chocolate coating with tart raspberry core and 3g creatine.",
    packageSize: "12 x 60g SRP Box",
    badge: "Fitness Choice"
  },
  {
    id: "prod-91",
    name: "Dexter's Strawberry Belts (12 x 180g)",
    category: "Confectionery & Sweets",
    image: "/products/dexters_strawberry_belts_12x180g_22441_p.png",
    description: "Fizzy sour strawberry candy belts packed in retail display tubs.",
    packageSize: "12 x 180g Tub",
    badge: "Kids Favorite"
  },
  {
    id: "prod-92",
    name: "Sweet Candy Selection Pack",
    category: "Confectionery & Sweets",
    image: "/products/images_1.jpg",
    description: "Fruity gummies and sweet candies assortment.",
    packageSize: "24 x 100g"
  },
  {
    id: "prod-99",
    name: "Gourmet Confectionery Master Pack",
    category: "Confectionery & Sweets",
    image: "/products/images.jpg",
    description: "Mixed wholesale confectionery box.",
    packageSize: "12 x 250g"
  },
  {
    id: "prod-100",
    name: "JJGM & CO Halal Certified Gourmet Snacks",
    category: "Savoury & Crisps",
    image: "/products/product_8691707096766_mustakshif.jpg",
    description: "100% Halal certified authentic Mediterranean and South Asian savory snacks.",
    packageSize: "16 x 150g",
    badge: "100% Halal",
    popular: true
  }
];

export const COMPANY_DETAILS = {
  name: "JJGM & CO",
  tagline: "Premier Wholesale Distributor of Nuts, Savouries & Fine Foods",
  founder: "gredy dcosta",
  founderFormatted: "Gredy D'costa",
  address: "105, myrtle road hounslow tw31qe",
  addressFormatted: "105 Myrtle Road, Hounslow, TW3 1QE, United Kingdom",
  phone: "07404548779",
  email: "gredyd'costa1975@gmail.com",
};
