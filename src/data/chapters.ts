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
      full: `It's late at night at the Red Dragon Inn. The Wench calls for last orders as many of the guests start heading up to their rooms or out into the streets. In a small office upstairs, Warthorn Redbeard, the dwarven proprietor, gets an early start on counting the day's take, admiring the glint of gold in the candlelight.
  Your band of famed adventurers remains at your table, as you often do at this time of night. Some of you are slumped over in your chairs, sent temporarily to oblivion by one too many drinks or dances with Gog. Others, like Wrench and Wizgille, who burned through their small stashes of coin hours ago, are paying off their tabs by bringing bottles of wine and ale up from the cellar. Fiona, Zot, and Gerki are all still awake, more or less, playing what looks to be the final round of gambling of the night.
  "You can't win, you know," says Gerki, plucking a gold piece off of his mountainous hoard and throwing it into the ante. "I raise.
  Pooky sticks his head out of Zot's sleeve and favors Gerki with an angry expression as the wizard scans his cards. Gerki grins back, trying not to break into a sweat as the tips of the rabbit's innumerable teeth poke out past his fuzzy lips.
  "Well," says Zot. "It seems like the only thing I can do is..." then he points dramatically over Gerki's shoulder. "What's going on over... "Nothing's going on over there, over there," says Gerki, leaning back in his chair. "I'm not falling for it."
  And yet, despite not falling for it, Gerki does feet running up from behind. Since he knows hear the pitter-patter of both booted and bare better than to let random people walk, or run, up behind him, Gerki turns around just as Wizgille and Wrench race breathlessly up to the table. By the time he turns back around, Fiona has leaned across the table and taken a peek at the five dragon cards in his hand.
  "Seriously, Gerki?" she says, raising an eyebrow. "There's three dragons to a deck. It's like you're not even trying anymore.
  "Well," says Gerki. "I'm actually playing a little-known rules variant where..."
  Wrench slams down his toolbox in the middle of the game, scattering the ante.
  "We need help!" he says, luminous eyes darting. "We were trying to help Warthorn out, but I think we made... a mistake!"
  "What," said Fiona, "you break some bottles or something?"
  "Yes, says Wrench, before shaking his head. "But that's not the biggest problem.
  "What he's trying to say," interrupts Wizgille, "is that something's wrong with our new Danger Room!"
  You feel the entire inn shudder, as if struck by a catapult stone, and a gout of black smoke erupts from the cellar entrance. Glasses shimmy off the tables and shatter on the flagstones. The Wench, annoyed but graceful, negotiates the minor quake without spilling a drop from her fully-laden tray.
  "What the heck was that?!" shouts Fiona. "And what the heck is a Danger Room?"
  "We were working down in the cellar, yeah?" says Wrench. "Trying to build this artificed thing with combat constructs and wing-a-lingers and spinblades and stuff, so that novice adventurers could face off against them and hone their fighting skills."
  "We thought it would be a good way to attract the type of clientele that Warthorn is always looking for," adds Wizgille. "Mostly the reason we've been on bottle duty these past couple of months is so we have better access to the cellar, so that we can finish it and surprise him!"
  Another tremor rocks the inn. A strange, rhythmic chiming sound begins to issue from the cellar.
  "You know," says Gerki, "I'm pretty sure he's going to be surprised."
  "Yeah, we know." Wrench looks over his shoulder. "We were almost finished, but there was a short in the system, and now the Danger Room is powering up and we can't turn it off!"
  Zot purses his lips. "How long do we have until it's fully powered up?"
  Something in the basement falls over, crashes, and explodes. Amidst the din, you hear the unmistakable sounds of unseen constructs whirring to life.
  Wizgille looks down at the floor. "According to my calculations, about ten seconds ago."
  Pooky is already across the room and down the cellar stairs in a flash. Zot stands up, arcane power flowing from his hands. "Make sure whatever's down there doesn't come up here. We'll try to get the rest of them sober... or at least awake! We'll be right behind you!"`,
      compact: `It's late at the Red Dragon Inn, and the adventurers are wrapping up a round of gambling when Wrench and Wizgille burst in, breathless.
  "We need help!" Wrench exclaims, slamming down his toolbox. "Something's wrong with our new Danger Room!"
  The entire inn shudders, black smoke billows from the cellar entrance, and glasses shatter.
  Fiona asks, "What the heck is a Danger Room?"
  Wrench explains that they were secretly building an artificed training area in the cellar with constructs to attract new clientele. "We were almost finished, but there was a short in the system, and now the Danger Room is powering up and we can't turn it off!"
  Another tremor rocks the inn, followed by crashing and the unmistakable whirring of constructs coming to life.
  Wizgille looks down. "According to my calculations, about ten seconds ago."
  Pooky flashes down the stairs instantly. Zot stands up, arcane energy ready. "Make sure whatever's down there doesn't come up here. We'll be right behind you!"`,
    },
    epilogue: {
      title: 'Epilogue',
      full: 'Chapter 1 epilogue: The night quiets as embers fade and plans are set aside.',
      compact: 'Chapter 1 epilogue compact: Embers fade and silence settles.',
    },
    reinforcements: [
      { title: 'Deploy', full: 'The inventors Wizgille and Wrench have enthusiastically filled the storeroom with pointy objects and automatons to wield them. Guess it’s time for a good ol’ fashioned melee!' },
      { title: 'Reinforcements 1', full: 'Warthorn is not going to be a fan of the creative “reorganization” of all his kegs and barrels of ale, but a far more pressing concern is the iron rods that the Gizmoblins are launching at you!' },
      { title: 'Reinforcements 2', full: 'Okay, well that hulking monstrosity actually looks pretty impressive. In the far corner of the room you spy an arcano-mechanical object buzzing away and throwing off arcs of electricity. Looks like you’ve finally found the off switch!' },
    ],
  },
  {
    number: 2,
    name: 'Chapter 2',
    prologue: {
      title: 'Prologue',
      full: `Greyport is built on top of an ancient Undercity, parts of which are deserted and parts of which are quite lively, occupied, and have a complex culture all their own. Fiona and Gerki, who once lived in the Undercity, know that several basements in Greyport have connecting passageways and stairwells which allow the folk from the surface to journey down into the Undercity, and vice versa.
  Thanks to the incursion of these awful rock- eating slimes, one more building in Greyport now has a basement with Undercity access…
  Freshly equipped, your dauntless band of adventurers drives the hideous oozes out of the cellar of the Red Dragon Inn and back down the sinuous, slimy tunnel that the creatures have bored into the rock. You light your torches (or, if you’re a classy, Collegium-trained wizard who can’t be bothered with such common lighting implements, cast a light spell), and make your way down the ale-soaked incline into the depths below.
  Your lights do a fair job of illuminating the area. The cramped space smells of wet earth and ale as the broken barrels continue belching out their contents onto the sloped floor. It looks like there may have been tunnels and passages down here that have since fallen in due to who knows what.
  However, it looks like the most recent cave-in is on the far side of the room. The wall appears to be made from loose rubble. A good whack would probably blow a hole in the wall big enough for even Gog to squeeze through.`,
      compact: `Greyport sits atop an ancient, active Undercity. Thanks to recent rock-eating slime trouble, the Red Dragon Inn's cellar now has a new passageway down.
  Your band, freshly equipped, drives the oozes out of the cellar and down the slimy tunnel they bored. Torches (or a classy Light spell) illuminate the cramped, ale-soaked space.
  The tunnel slopes down into a room smelling of wet earth and ale. Most original passages are caved in, but the most recent collapse—a wall of loose rubble—looks like it could easily be knocked open to reveal more of the Undercity.`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `The great slime beast is dead, felled at last by your swords and sorcery (and maybe a few tons of stone). Once it releases its final squelch, it doesn’t take much effort to search the rest of the cavern and clear out all of its remaining spawn. You and your companions are pleased with your victory, but are also very, very interested in getting back to the Red Dragon Inn for a scalding hot bath and a change of clothes.
  "I don’t know about you," says Deirdre, picking at her slime-covered robes, "but I have half a mind to burn these."
  Zot, on the other hand, seems not to notice Deirdre’s complaints or the sorry state of his own robes. He stands both deep in thought and deep in a puddle of congealing slime innards, stroking his grey beard with his hand and staring up at the spot where, until recently, the giant slime monster had been. Pooky, who has climbed up on top of Zot’s silver skull cap, sniffs at the air, an irritated expression on his bunny face.
  "Zot?"
  "You’re both familiar with the Undercity," he says to Fiona and Gerki at last. "Get a lot of slime down here, do you?"
  "Sure, some," says Gerki.
  "Usually in the dark crawlspaces and abandoned parts," adds Fiona. "They chew on cobwebs and dead things. You know, filth and stuff."
  "Hmm," mumbles the wizard, clearly not put at ease by these replies.
  "Don't worry, Zot," says Fiona, sheathing her sword. "They're just monsters, right? We've beaten monsters before, and we'll beat them again. We're kind of really good at this!"
  "Maybe..." Zot turns and wades out of the puddle of slime guts with as much dignity as he can muster. "I will leave you all to your baths and fresh linens, my friends. I, for one, need to pay a visit to the Collegium. I have a bad feeling that there's more going on here than we might think."
  "You mean it's not a one-off, completely random slime infestation?" asks Gerki, "That's just great."`,
      compact: 'Chapter 2 epilogue compact: Ledger closes softly.',
    },
    reinforcements: [
      { title: 'Deploy', full: 'As you cast about with your light, you hear the all-too-familiar sound of Gizmoblins whirring to life, their flickering eye lamps pinpointing the recesses of the chamber. Oh yeah, and the floor is also moving, because the slimes are attacking...' },
      { title: 'Reinforcements 1', full: 'As the wall of loose rock collapses, the room shudders, dislodging yet more sections of wall, and the oozing monsters hiding behind them.' },
      { title: 'Reinforcements 2', full: 'A long, narrow chamber that is steeper and noticeably more humid opens before you. There’s an ominous loud sound echoing from further into the darkness that can only be described as “sticky”' },
      { title: 'Reinforcements 3', full: 'Upon revealing the room, you encounter a very unwelcome sight - a truly massive slime monster with smaller ones budding off it! The monster jiggles to life upon your entrance, and dust and gravel rain down from above. The ceiling appears to be barely supported by the rotting pillars around the room.' },
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
      { title: 'Deploy', full: 'You’ve abandoned your meals but it appears your enemy has not. The crab-like hulks are spraying living muck this way and that while an undulating mass of slime eats its way through the Grey Market, melting stalls and eroding the rock!' },
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
      compact: `With a rare cry of fury, the pious Deirdre smashes the Crab King's conch, sending the remaining slimes into a frantic retreat. As the party celebrates their victory, a cadre of priests and paladins rushes in, horrified to learn how close the Great Temple came to collapse.
  "Had you not been here to stem the tide," the High Priest of Korash remarks, "we would have been too late."
  Gerki immediately bursts into a fit of giggles at the accidental pun, earning confused stares from the somber clergy. After he regains his composure, the priests offer their curative magics and an audience with Grand Cleric Ohava for a proper "earthly" reward.
  "Sounds good to me," Gerki grins. "Lead the way, your holinesses!"`,
    },
    reinforcements: [
      { title: 'Deploy', full: 'The laughing crab king disappears into the cavern. You are confronted by massive slimes and snapping pincers standing between you and the eroding pillars.' },
      { title: 'Reinforcements Upper Passage', full: 'The acrid smell of acid and slime hits your nose hard when this passage is opened. And the floor is moving. That’s probably not good either' },
      { title: 'Reinforcements Lower Passage', full: 'As the gravel crumbles, you immediately duck under a volley of muck fired from the crab men guarding this passage’s acid spewing plant... animal... things?' },
      { title: 'Reinforcements Back Passage', full: 'This chamber is massive, with the worst infestation of slime-spitting spawn coating the walls.' },
      { title: 'The Crab King', full: 'The Crab King howls with rage as the last of the acid spitters is crushed. He blows his conch once more, summoning the deadly remnants of his horde to his side.' },
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
      { title: 'Deploy', full: 'The laughing crab king disappears into the cavern. You are confronted by massive slimes and snapping pincers standing between you and the eroding pillars.' },
      { title: 'Reinforcements Upper Passage', full: 'The acrid smell of acid and slime hits your nose hard when this passage is opened. And the floor is moving. That’s probably not good either' },
      { title: 'Reinforcements Lower Passage', full: 'As the gravel crumbles, you immediately duck under a volley of muck fired from the crab men guarding this passage’s acid spewing plant... animal... things?' },
      { title: 'Reinforcements Back Passage', full: 'This chamber is massive, with the worst infestation of slime-spitting spawn coating the walls.' },
      { title: 'The Crab King', full: 'The Crab King howls with rage as the last of the acid spitters is crushed. He blows his conch once more, summoning the deadly remnants of his horde to his side.' },
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


