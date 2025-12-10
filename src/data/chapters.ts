export type ChapterSection = {
  title: string
  full: string
  compact?: string
}

export type Chapter = {
  number: number
  name: string
  prologue: ChapterSection
  epilogue: ChapterSection
  reinforcements: ChapterSection[]
}

export const chapters: Chapter[] = [
  {
    number: 1,
    name: 'Chapter 1',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 1 prologue: Lorem ipsum dolor sit amet, opening the tale with hushed whispers in the inn.',
      compact: 'Chapter 1 prologue compact: Lorem ipsum dolor sit amet.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 1 epilogue: The night quiets as embers fade and plans are set aside.',
      compact: 'Chapter 1 epilogue compact: Embers fade and silence settles.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 1 reinforcements 0: A tired ally arrives with spare gear.' },
      { title: 'Reinforcements 1', full: 'Chapter 1 reinforcements 1: Another friend follows, ready to stand guard.' },
    ],
  },
  {
    number: 2,
    name: 'Chapter 2',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 2 prologue: Crates are stacked and rumors pile higher than the ale.',
      compact: 'Chapter 2 prologue compact: Crates and rumors stack.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 2 epilogue: Footsteps fade and the ledger closes with a sigh.',
      compact: 'Chapter 2 epilogue compact: Ledger closes softly.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 2 reinforcements 0: A scout brings maps stained with coffee.' },
      { title: 'Reinforcements 1', full: 'Chapter 2 reinforcements 1: A courier drops off bandages and bread.' },
    ],
  },
  {
    number: 3,
    name: 'Chapter 3',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 3 prologue: A lantern flickers as an old song returns to the hall.',
      compact: 'Chapter 3 prologue compact: Lanterns and old songs.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 3 epilogue: The tune lingers while shutters close against the rain.',
      compact: 'Chapter 3 epilogue compact: Music lingers in the rain.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 3 reinforcements 0: A fiddler offers sharp eyes and sharper strings.' },
      { title: 'Reinforcements 1', full: 'Chapter 3 reinforcements 1: A brewer swaps ale for watch duty.' },
    ],
  },
  {
    number: 4,
    name: 'Chapter 4',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 4 prologue: Footprints in flour lead toward the locked pantry.',
      compact: 'Chapter 4 prologue compact: Flour prints to the pantry.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 4 epilogue: The door is sealed again and flour dust settles.',
      compact: 'Chapter 4 epilogue compact: Door sealed; dust settles.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 4 reinforcements 0: A cook arrives with a heavy rolling pin.' },
      { title: 'Reinforcements 1', full: 'Chapter 4 reinforcements 1: A porter shoulders sacks to block the hall.' },
    ],
  },
  {
    number: 5,
    name: 'Chapter 5',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 5 prologue: A brass key clinks onto the counter without a hand to drop it.',
      compact: 'Chapter 5 prologue compact: A brass key appears.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 5 epilogue: The key rests in a drawer; the lock it fits remains a mystery.',
      compact: 'Chapter 5 epilogue compact: Key stored; lock unknown.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 5 reinforcements 0: A locksmith offers quiet assistance.' },
      { title: 'Reinforcements 1', full: 'Chapter 5 reinforcements 1: A lookout keeps watch over the counter.' },
    ],
  },
  {
    number: 6,
    name: 'Chapter 6',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 6 prologue: Seawater drips from a banner hung far from any harbor.',
      compact: 'Chapter 6 prologue compact: Salty banner, no harbor.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 6 epilogue: The banner dries; salt crusts the floorboards.',
      compact: 'Chapter 6 epilogue compact: Salt crusts and dries.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 6 reinforcements 0: A sailor brings rope and tall tales.' },
      { title: 'Reinforcements 1', full: 'Chapter 6 reinforcements 1: A deckhand lashes shutters tight.' },
    ],
  },
  {
    number: 7,
    name: 'Chapter 7',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 7 prologue: The casks rumble like distant drums below the inn.',
      compact: 'Chapter 7 prologue compact: Casks rumble like drums.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 7 epilogue: The rumbling stills; mugs raise in relief.',
      compact: 'Chapter 7 epilogue compact: Rumbling fades to cheers.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 7 reinforcements 0: A cooper braces the barrels with iron hoops.' },
      { title: 'Reinforcements 1', full: 'Chapter 7 reinforcements 1: A drummer keeps rhythm for the watch.' },
    ],
  },
  {
    number: 8,
    name: 'Chapter 8',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 8 prologue: A sealed letter stamped with a dragon lands on the bar.',
      compact: 'Chapter 8 prologue compact: A dragon-stamped letter arrives.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 8 epilogue: The seal is broken; its warning tucked away.',
      compact: 'Chapter 8 epilogue compact: Seal broken; warning kept.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 8 reinforcements 0: A courier stays to help decipher the note.' },
      { title: 'Reinforcements 1', full: 'Chapter 8 reinforcements 1: A scribe copies the seal for later.' },
    ],
  },
  {
    number: 9,
    name: 'Chapter 9',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 9 prologue: Frost etches a rune across the storeroom door.',
      compact: 'Chapter 9 prologue compact: Frost rune on the door.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 9 epilogue: The rune melts; a chill lingers in the mugs.',
      compact: 'Chapter 9 epilogue compact: Rune melts; chill remains.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 9 reinforcements 0: A frost mage seals the cracks with ice.' },
      { title: 'Reinforcements 1', full: 'Chapter 9 reinforcements 1: A stoker feeds the hearth to fight the cold.' },
    ],
  },
  {
    number: 10,
    name: 'Chapter 10',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 10 prologue: A relic coin hums when set by the fire.',
      compact: 'Chapter 10 prologue compact: A humming coin by the fire.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 10 epilogue: The coin cools; the hum echoes in memory.',
      compact: 'Chapter 10 epilogue compact: Coin cools; hum fades.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 10 reinforcements 0: A gambler offers luck and lantern oil.' },
      { title: 'Reinforcements 1', full: 'Chapter 10 reinforcements 1: A guard pockets the coin for safekeeping.' },
    ],
  },
  {
    number: 11,
    name: 'Chapter 11',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 11 prologue: An old veteran returns missing an arm and patience.',
      compact: 'Chapter 11 prologue compact: A one-armed veteran returns.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 11 epilogue: He raises a mug and nods; the warning stands.',
      compact: 'Chapter 11 epilogue compact: A nod, a warning kept.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 11 reinforcements 0: A veteran takes the watch by the door.' },
      { title: 'Reinforcements 1', full: 'Chapter 11 reinforcements 1: A recruit listens and learns quickly.' },
    ],
  },
  {
    number: 12,
    name: 'Chapter 12',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 12 prologue: Barrels of black powder arrive with no signature.',
      compact: 'Chapter 12 prologue compact: Unsigned black powder delivery.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 12 epilogue: The kegs are locked away; the fuse stays dry.',
      compact: 'Chapter 12 epilogue compact: Powder locked; fuse dry.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 12 reinforcements 0: A sapper secures the kegs and marks danger.' },
      { title: 'Reinforcements 1', full: 'Chapter 12 reinforcements 1: A runner keeps buckets of sand at hand.' },
    ],
  },
  {
    number: 13,
    name: 'Chapter 13',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 13 prologue: Water drawn at midnight boils without flame.',
      compact: 'Chapter 13 prologue compact: Midnight water boils.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 13 epilogue: The well cools; steam curls into the night air.',
      compact: 'Chapter 13 epilogue compact: The well cools down.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 13 reinforcements 0: A healer tests the water and hums softly.' },
      { title: 'Reinforcements 1', full: 'Chapter 13 reinforcements 1: A carrier brings fresh buckets from upstream.' },
    ],
  },
  {
    number: 14,
    name: 'Chapter 14',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 14 prologue: A child’s sketch shows a tower the inn does not have.',
      compact: 'Chapter 14 prologue compact: Sketch of a missing tower.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 14 epilogue: The sketch is rolled up; new plans are pinned nearby.',
      compact: 'Chapter 14 epilogue compact: Sketch stored; plans pinned.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 14 reinforcements 0: A carpenter measures beams just in case.' },
      { title: 'Reinforcements 1', full: 'Chapter 14 reinforcements 1: An architect doodles in the margins.' },
    ],
  },
  {
    number: 15,
    name: 'Chapter 15',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 15 prologue: Ghostly music maps secret passages through the hall.',
      compact: 'Chapter 15 prologue compact: Ghost music maps paths.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 15 epilogue: The last note fades, leaving chalk marks on the wall.',
      compact: 'Chapter 15 epilogue compact: Notes fade; chalk remains.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 15 reinforcements 0: A bard stays to trace every echo.' },
      { title: 'Reinforcements 1', full: 'Chapter 15 reinforcements 1: A runner maps shortcuts for later.' },
    ],
  },
  {
    number: 16,
    name: 'Chapter 16',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 16 prologue: A lute string snaps, revealing wire meant for traps.',
      compact: 'Chapter 16 prologue compact: Trap wire in a lute string.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 16 epilogue: The wire is coiled; the tune resumes, cautious.',
      compact: 'Chapter 16 epilogue compact: Wire coiled; tune returns.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 16 reinforcements 0: A trapper strings alarms along the stairs.' },
      { title: 'Reinforcements 1', full: 'Chapter 16 reinforcements 1: A guard dog naps near the wire spools.' },
    ],
  },
  {
    number: 17,
    name: 'Chapter 17',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 17 prologue: Scarlet moths gather on the windows, spelling trouble.',
      compact: 'Chapter 17 prologue compact: Scarlet moths on glass.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 17 epilogue: The moths scatter; red dust coats the ledger.',
      compact: 'Chapter 17 epilogue compact: Moths scatter; dust remains.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 17 reinforcements 0: A sweep clears the sills and sharpens blades.' },
      { title: 'Reinforcements 1', full: 'Chapter 17 reinforcements 1: A watcher notes every pattern they formed.' },
    ],
  },
  {
    number: 18,
    name: 'Chapter 18',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 18 prologue: A scholar marks ley lines converging under the taproom.',
      compact: 'Chapter 18 prologue compact: Ley lines underfoot.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 18 epilogue: Wards hum; the floorboards warm then settle.',
      compact: 'Chapter 18 epilogue compact: Wards hum then settle.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 18 reinforcements 0: A warder redraws sigils with steady chalk.' },
      { title: 'Reinforcements 1', full: 'Chapter 18 reinforcements 1: An apprentice carries extra chalk and tea.' },
    ],
  },
  {
    number: 19,
    name: 'Chapter 19',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 19 prologue: Dusty armor in the attic stands facing the cellar door.',
      compact: 'Chapter 19 prologue compact: Armor faces the cellar.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 19 epilogue: The armor rests; helm tilted as if satisfied.',
      compact: 'Chapter 19 epilogue compact: Armor rests, helm tilted.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 19 reinforcements 0: A smith polishes plates to a dull shine.' },
      { title: 'Reinforcements 1', full: 'Chapter 19 reinforcements 1: A squire props the armor with fresh straps.' },
    ],
  },
  {
    number: 20,
    name: 'Chapter 20',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 20 prologue: Violet candles burn low, pointing toward the kitchens.',
      compact: 'Chapter 20 prologue compact: Violet candles lean kitchen-ward.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 20 epilogue: The candles gutter out; warmth lingers in the tile.',
      compact: 'Chapter 20 epilogue compact: Candles out; warmth lingers.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 20 reinforcements 0: A cook carries salt and stories of spice.' },
      { title: 'Reinforcements 1', full: 'Chapter 20 reinforcements 1: A server guards the back door with a ladle.' },
    ],
  },
  {
    number: 21,
    name: 'Chapter 21',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 21 prologue: The same dream repeats: a scale, an eye, a debt.',
      compact: 'Chapter 21 prologue compact: A dream of a scale and debt.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 21 epilogue: Dawn breaks; the dream lingers like smoke.',
      compact: 'Chapter 21 epilogue compact: Dream smoke at dawn.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 21 reinforcements 0: A seer scribbles notes between yawns.' },
      { title: 'Reinforcements 1', full: 'Chapter 21 reinforcements 1: A guard brews coffee for the sleepless.' },
    ],
  },
  {
    number: 22,
    name: 'Chapter 22',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 22 prologue: Moss creeps in, spelling names across the wall.',
      compact: 'Chapter 22 prologue compact: Moss writes names.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 22 epilogue: The moss is brushed away; ink replaces it.',
      compact: 'Chapter 22 epilogue compact: Moss gone; ink remains.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 22 reinforcements 0: A gardener scrubs stone and hums.' },
      { title: 'Reinforcements 1', full: 'Chapter 22 reinforcements 1: A clerk writes the names in a ledger.' },
    ],
  },
  {
    number: 23,
    name: 'Chapter 23',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 23 prologue: The inn cat refuses the pantry, hissing at the floor.',
      compact: 'Chapter 23 prologue compact: Cat hisses at the floorboards.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 23 epilogue: The cat curls up at last; the boards stop creaking.',
      compact: 'Chapter 23 epilogue compact: Cat naps; boards quiet.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 23 reinforcements 0: A mouser sets traps with quiet focus.' },
      { title: 'Reinforcements 1', full: 'Chapter 23 reinforcements 1: A stablehand checks the floor for gaps.' },
    ],
  },
  {
    number: 24,
    name: 'Chapter 24',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 24 prologue: A bell tolls thirteen times at noon, rattling mugs.',
      compact: 'Chapter 24 prologue compact: Thirteen chimes at noon.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 24 epilogue: The bell is silent now; mugs hang as trophies.',
      compact: 'Chapter 24 epilogue compact: Silence and hanging mugs.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 24 reinforcements 0: A ringer pads the clapper with cloth.' },
      { title: 'Reinforcements 1', full: 'Chapter 24 reinforcements 1: A runner secures the rafters above.' },
    ],
  },
  {
    number: 25,
    name: 'Chapter 25',
    prologue: {
      title: 'Prologue',
      full: 'Chapter 25 prologue: A whispered rumor claims the heartfire waits below.',
      compact: 'Chapter 25 prologue compact: Rumor of a heartfire below.',
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 25 epilogue: The rumor lingers; the inn glows a little warmer.',
      compact: 'Chapter 25 epilogue compact: Warmth lingers after rumor.',
    },
    reinforcements: [
      { title: 'Reinforcements 0', full: 'Chapter 25 reinforcements 0: A phoenix-touched ally carries a spark.' },
      { title: 'Reinforcements 1', full: 'Chapter 25 reinforcements 1: A watch captain posts a double shift.' },
    ],
  },
]


