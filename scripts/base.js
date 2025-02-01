const rarities = [ //Bauhaus, Set 1
	//Basic Art (18) (Standard Style, Basic Background)
    { type: "Common"    , chance: 0.750 , multiplier: 1.0   },
    { type: "Uncommon"  , chance: 0.150 , multiplier: 2.0   },
	
	//Special Art (9) (Fun Style going with the guy scheme)
    { type: "Rare"      , chance: 0.070 , multiplier: 5.0   },
	{ type: "Epic"      , chance: 0.020 , multiplier: 10.0  },
	
	//Unique Art 'Shadow' (3)
    { type: "Legendary" , chance: 0.009 , multiplier: 50.0  },
    { type: "Obsidian"  , chance: 0.001 , multiplier: 100.0 }
];

const grades = [
    { grade: 7  , chance: 0.05 , multiplier: 1.0  },
    { grade: 8  , chance: 0.20 , multiplier: 2.0  },
    { grade: 9  , chance: 0.60 , multiplier: 3.0  },
    { grade: 10 , chance: 0.15 , multiplier: 10.0 }
];

const archolia = [
    { name: "Fluffernox" , price: 0.01}, // #1
	{ name: "Zapoodle"   , price: 0.02}, // #2
	{ name: "Gloombite"  , price: 0.03}, // #3
	{ name: "Quibberoo"  , price: 0.04}, // #4
	{ name: "Drizzlisk"  , price: 0.05}, // #5
	{ name: "Mossmunk"   , price: 0.06}, // #6
	{ name: "Spindleek"  , price: 0.07}, // #7
	{ name: "Tufflair"   , price: 0.08}, // #8
	{ name: "Boggleaf"   , price: 0.09}, // #9
	{ name: "Vexowl"     , price: 0.10}, // #10
	{ name: "Fungnash"   , price: 0.12}, // #11
	{ name: "Glimmeruff" , price: 0.14}, // #12
	{ name: "Brambite"   , price: 0.16}, // #13
	{ name: "Zyrmox"     , price: 0.18}, // #14
	{ name: "Cindrake"   , price: 0.20}, // #15
	{ name: "Noxtail"    , price: 0.30}, // #16
	{ name: "Frillusk"   , price: 0.50}, // #17
	{ name: "Skuddle"    , price: 1.00}  // #18
];
