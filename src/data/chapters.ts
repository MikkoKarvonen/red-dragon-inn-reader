export type ChapterSection = {
  title: string
  full: string
  compact?: string
}

export type Chapter = {
  number: number
  name: string
  prologue: ChapterSection
  partTwo?: ChapterSection
  epilogue: ChapterSection
  reinforcements?: ChapterSection[]
}

export const chapters: Chapter[] = [
  {
    number: 1,
    name: 'Chapter 1',
    prologue: {
      title: 'Prologue',
      full: `It's late at night at the Red Dragon Inn. The Wench calls for last orders as many of the guests start heading up to their rooms or out into the streets. In a small office upstairs, Warthorn Redbeard, the dwarven proprietor, gets an early start on counting the day's take, admiring the glint of gold in the candlelight.
  Your band of famed adventurers remains at your table, as you often do at this time of night. Some of you are slumped over in your chairs, sent temporarily to oblivion by one too many drinks or dances with Gog. Others, like Wrench and Wizgille, who burned through their small stashes of coin hours ago, are paying off their tabs by bringing bottles of wine and ale up from the cellar. Fiona, Zot, and Gerki are all still awake, more or less, playing what looks to be the final round of gambling of the night.
  "You can't win, you know," says Gerki, plucking a gold piece off of his mountainous hoard and throwing it into the ante. "I raise."
  Pooky sticks his head out of Zot's sleeve and favors Gerki with an angry expression as the wizard scans his cards. Gerki grins back, trying not to break into a sweat as the tips of the rabbit's innumerable teeth poke out past his fuzzy lips.
  "Well," says Zot. "It seems like the only thing I can do is..." then he points dramatically over Gerki's shoulder. "What's going on over..."
  "Nothing's going on over there, over there," says Gerki, leaning back in his chair. "I'm not falling for it."
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
      full: `The last of the strange machines explodes in a shower of sparks, gears, and noxious black smoke. All around the hidden room inside the Red Dragon Inn’s basement, the few constructs that are still functional lurch to a stop or topple face-first onto the ale-soaked floor. A lone gizmoblin bravely tries to continue the fight, crawling toward you with its one remaining arm.
  “Danger Room Program Error 404,” it says, in an electronic voice that becomes gradually slower and quieter. “Battle... not... found...”
  Then the gizmoblin’s servos seize and its red eyes go dark.
  You survey the room. Several barrels, broached in the battle, continue to disgorge their contents all over the floor. The basement’s wooden support columns bear the scars, arrows, scorch marks, and acid etching of the recent pitched battle. Other than that, and the small fortune in artificed machinery that has just fallen beneath your mighty blows, the damage is minimal.
  In the relative quiet following the battle, Pooky splashes across the floor and runs up Zot’s robe to sit upon the wizard’s shoulder, leaving ale-stained rabbit prints on Zot’s velvety finery. Fiona, apparently because the battle hasn’t been finished to her satisfaction, wanders around kicking the constructs in the face.
  “This is going to set us back months,” says Wizgille, wrinkling her nose. “It’s our fault, though. We should have told you to fight the constructs with padded weapons.”
  “Oh,” says Fiona. “I guess that makes sense, but it’s not nearly as much fun!”
  Amidst all this, you hear a strange, bubbling, fizzing sound coming from the back of the room. Splashing through the ale puddles, you resolve to investigate.
  “What in the gold-durned heck is goin’ on down here?” says Warthorn as he comes clomping down the stairs, the puffball on the tip of his nightcap bouncing against a face that is currently as red as his hair. The whiskers of his normally well-maintained beard bristle wildly in every direction. “I thought ya were runnin’ bottles and kegs upstairs, not turnin’ the cellar into a mechanical death trap. Look at all this damage here! You’ve destroyed all my stock!”
  “Not all of the stock,” says Gerki, gesturing theatrically with his daggers at the significant number of lightly-damaged barrels. “I’d say less than… what do you think, Zot? Fifteen percent?”
  Zot merely wrings out the hem of his robe and grumbles.
  “What is all o’ this even for, anyhow? People come here to drink and unwind, not to get attacked by out-of-control whirl-a-gigs and foolery.”
  “We just wanted to make you a training room to attract more guests,” says Wrench, nervously wringing the neck of his spanner. “It was supposed to be a surprise. So. Well. Uh. Surprise?”
  “That’s right!” says Wizgille. “Even though we caused some damage, I’d say this was a pretty good alpha test of the equipment. Once we make some modifications and track down that short in the wire, we can have it all ready to go, good as new. No! Better than new! I think I saw a way to improve the tactical programming of the constructs. Oh! Maybe if I added a remote kill switch, that would solve...”
  “Oh, fer the love o’ Korash,” grumbles Warthorn, covering his eyes with the palm of one hand. “You adventurers’ll be the death of me. Or of the inn... one or the other.”
  In the silence that follows, the mysterious bubbling and fizzing noise sounds as if it is both louder and closer.
  Warthorn takes a deep breath to calm himself. “Look, I appreciate the offer, and all yer hard work, I really do, but I really wish you’d’ve asked me before...”
  “Uh, Warty?” says Gerki, pointing to a distant corner of the room.
  “Don’t call me ‘Warty,’” says Warthorn. “Now look, it’s late, so why don’t you lot leave off this training room nonsense for now. Tomorrow mornin’, ye can ask Olivia for some cleanin’ supplies, and then...”
  “Sorry to keep interrupting, Thorny,” says Gerki, gesturing at the corner again, “But I was just wondering… is the floor meant to be doing... that?”
  You all turn to look at the corner of the room, just in time to watch a large section of the basement floor give way, crashing down into darkness with a thundering boom, taking a rack of ale barrels and several broken construct carcasses with it.
  “What in the bleedin’ heck is all that?” mutters Warthorn, his face falling.
  A pack of oozing, multi-colored slimes begins undulating over the lip of the huge, dark hole and into the basement. They burble and fizzle as they swarm over ale puddles, splintered barrels, and the broken constructs alike. Soon, the back corner of the basement is covered in a shuddering carpet of myriad colors and textures.
  “That’s bad,” says Deirdre.
  “No. That’s awesome,” says Fiona.
  “I am assuming,” says Zot, looking from the advancing slime back to the party’s two artificers, “that this is not part of the Danger Room’s protocols?”
  “No,” says Wizgille, pulling her goggles down over her eyes. “No it’s not.”
  “Right then. We’re going to have to force these slimes back into the hole before they eat the Red Dragon Inn, then we’ll need to go upstairs and get our other equipment.” Zot pauses to pat Warthorn reassuringly on the shoulder. “Don’t worry, my friend. We won’t let them destroy your livelihood.”
  “Thanks,” says Warthorn, looking on in stunned disbelief. “Much appreciated.”`,
      compact: `The last construct sparks out with a final "Battle... not... found..." error, leaving the cellar a wreck of gears and ale. Warthorn arrives, red-faced and furious at his new "mechanical death trap" of a basement, while Wrench and Wizgille weakly defend their "surprise" alpha test.
  The argument is cut short by a bubbling hiss as a large section of the floor collapses into a thundering void. From the darkness, a carpet of multi-colored, fizzing slimes swarms into the room, devouring barrels and broken robots alike.
  "I assume," Zot says, watching the oozes advance, "this is not part of the protocol?"
  "No," Wizgille admits, snapping her goggles on. The party readies their gear, determined to save the inn from being eaten.`,
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
      compact: `The giant slime is dead, leaving the party covered in gunk and Deirdre ready to burn her robes. While the others dream of hot baths, Zot stands knee-deep in ooze, troubled.
  "Get a lot of slime down here?" he asks Fiona and Gerki. They note that while slimes are common in the Undercity's dark corners, this massive infestation is unusual.
  "I have a bad feeling," Zot mutters, wading out of the slime with grim dignity. "I’m heading to the Collegium. I don't think this was random."
  "Great," Gerki sighs. "Just great."`,
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
      full: `You find yourself in the Undercity beneath the streets of Greyport, walking along a subterranean thoroughfare fitfully lit by glowing moss, candles, and torches. The few Undercitizens that you have seen on your way down below hardly seem to have noticed you, despite Zot tugging on the coarse fabric of his ill-fitting clothing and letting off a constant stream of grumbling.
  “I just don’t see why I have to wear this costume,” he says.
  “Because we have to blend in,” replies Fiona. “The people down here aren’t going to open up to us if they think we’re a bunch of nosy adventurers from the surface.”
  “Yeah,” says Gerki. “We gotta look the part, you know, so that we can win the long game.”
  “You’re right,” says Zot. “we desperately need to know more about that giant slime. My research at the Collegium indicated that the thing we battled was not one of the ones native to the Undercity, but actually a distantly-related oceanic species that lives in the sea beds near gas vents.”
  “Which raises all manner of questions,” says Deirdre, still looking effortlessly elegant in a shapeless, brown dress and loosely-knit hair wrap. “For instance, how did it find its way from the ocean floor to almost the surface of Greyport? What caused it to leave its home? And are there more of them down here?”
  “Indeed,” sighs Zot, scratching irritably at his neck. “And I, for one, fear for the safety of the city... and the Undercity... until we know the answers to those questions. I just wish we could have disguised ourselves in such a way that it didn’t involve me getting a nasty rash!”
  At the back of the party, Eve raises her head. “I could probably have just disguised us with illusion magic,” she says, smirking, though her voice is carefully neutral.
  Zot wheels around. “Why didn’t you just do it then?”
  “Two reasons,” says Eve, counting them off with a pair of upraised fingers. “In the first, I wanted to conserve my power in case we ran into trouble. In the second, this is much more entertaining.”
  “Quiet,” says Gerki. “We’re almost to the Grey Market. So, you know, act casual.”

  The Grey Market is a bustling place, larger and more varied than any marketplace on the surface, so long as you count all of the approach tunnels. Though the stalls are drab, made of bits of cast-off wood and fabric, they possess an almost endless selection of goods, from the common to the esoteric. Undercitizens jostle one another to locate bargains and necessary goods, while hawkers accost you from every corner, trying to attact your attention to their wares. Urchins play in the crossroads between stalls, and musicians, singers, jugglers, and beggars are set up in the few remaining open places in the market, performing and competing for coin from passersby.
  You spread out, dividing your time between buying things that interest you and surreptitiously interviewing the inhabitants. Despite the Grey Market’s outwardly festive appearance, you discover that the Undercitizens are tense and fearful. Many of them indicate that they are studiously avoiding the outlying passages and districts of the city, especially the ones nearer to the harbor.
  Your party reconvenes at the market’s Great Bonfire, flanked by a handful of the market’s more permanent structures. You go to a cafe to eat and share what you’ve discovered. Well, most of you eat. Deirdre sniffs the food on her battered plate warily and pushes it around with a delicate finger.
  “What... what is this?”
  “Mushrooms, mostly,” says Fiona between bites.
  “And this? The meat?”
  “Best not to think about it,” says Gerki.
  “What we do need to think about,” says Zot, as he passes the charred meat on his plate to Pooky, “is that the people here have seen, or heard about, other large slimes, oozing up from below and digging tunnels through the bedrock. It may be coincidence that the one we fought almost reached the surface, or it may not. I wonder if...”
  The Grey Market starts to shake! Undercitizens scream and run in all directions, carrying armloads of goods and children, as stone dust rains from the ceiling and sections of the floor hiss and dissolve into the inky darkness.
  As you abandon your dishes and rush to the bonfire, you see them. From the tunnel entrances to the market pour several nightmarish-looking creatures, humanoid in shape, though much larger in size. They seem to be of a decidedly crustacean-like cast, with bony, colorful carapaces, cruel crushing claws, and arm cannons with oozing nozzles. As they advance, a much larger, much more heavily armored and armed crab creature appears briefly in one of the passageways, winding a howling dirge from a horn shaped like a giant conch.
  “Destroy the cave dwellers!” the impressive specimen booms. “Feast upon their bones and flesh! Then onward, upward, to their Great Temple!”
  You lose sight of the giant crab man as his smaller bretheren rush into the market, snapping at the fleeing citizens and driving them back with their arm cannons belching putrid muck. The citizens shriek as the offspring of the deadly oceanic slime bubble up from the depths of newly-formed fissures, attempting to ensnare the unfortunate Undercitizens in their rubbery embraces.
  Fiona draws her blade. “We’ve got to help these people! Let’s smash these crab men!”
  “I’ve got daggers, not crackers and crab mallets,” shouts Gerki, “but I’ll do the best I can!”`,
      compact: `Disguised in itchy rags to "blend in," the party prowls the Undercity while Zot grumbles about his rash. Eve admits she could have used illusion magic, but watching Zot suffer was "more entertaining."
  At the Grey Market, the group learns that the locals are terrified of monsters emerging from the harbor-side tunnels. Zot confirms his theory: these aren't local slimes, but deep-sea invaders from the ocean floor.
  The investigation is cut short by a violent quake. Humanoid crab-men, led by a massive commander blowing a conch shell, swarm the market. "Destroy the cave dwellers!" the leader bellows. "Then onward to their Great Temple!"
  As oceanic slimes bubble up from new fissures to ensnare the fleeing citizens, Fiona draws her sword.
  "I've got daggers, not crab mallets," Gerki shouts, "but I'll do my best!"`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `You survey the broken wreckage of several market stalls, the oozing puddles of slime remains, and the splintered carapaces of the crab men. Though the damage to the Grey Market is extensive, you are pleased to know that your timely arrival and intervention has saved the lives of the Undercitizens trapped here by the terrifying sea creatures. As you explore the now-deserted market, you are concerned to discover that there seem to be far fewer corpses of oceanic creatures here than there were living oceanic creatures in the initial attack.
  “I didn’t see the biggun after the fight started,” says Fiona, echoing everyone else’s concerns. “The chatty one. Anyone see him? Did we get him?”
  “I don’t think so, no,” says Zot. “And I’m worried about that. He seems to be their leader.”
  Deirdre’s eyes go wide with shock. “Do you remember what he said, about pressing onward toward the Great Temple? Maybe that’s where he and his followers are going! We need to warn them!”
  Gerki points toward an inconsequential-looking cavern entrance, indistinguishable from many others around the Grey Market.
  “This way!” he shouts. “I know a shortcut!”`,
      compact: `The market is a mess of slime and splintered shells, but as the party surveys the wreckage, they realize the crab leader is missing.
  "The biggun's gone," Fiona notes.
  Deirdre pales, remembering his war cry. "He said they were heading for the Great Temple! We have to warn them!"
  Gerki points to a nondescript tunnel. "This way! I know a shortcut!"`,
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
      full: `You hurtle down the Undercity’s subterranean tunnels, pursuing the giant crab man who seems to be the leader of this underground assault against Greyport. True to his word, Gerki takes you on the most direct path from the Grey Market’s massive cavern to the place in the Undercity that stands beneath the Great Temple.
  As you travel, it becomes clear that you heard the crab man’s threat correctly, for the closer you get to your goal, the more signs you see of the sea creatures’ infestation. Brackish pools of salt water have settled in low places in cavern and hallway, bright tracks of phosphorescent slime—no doubt left behind by the great oceanic oozes—stretch out into the distance and light your way, and the air grows thick with heat and a sour, acidic smell.
  “It’s just up ahead,” says Gerki, a touch breathless. He vaults over a puddle of slime that shimmers and bubbles on a patch of the bedrock floor and leads you through an opening into a massive chamber beyond.
  “By the Goddess!” shouts Deirdre, raising her holy symbol in a warding gesture.
  The chamber is the largest one you have yet seen in the Undercity, brightly lit by long- duration light spells impregnated into its walls, and by the glowing, fluid bodies of the oozes that slip and slither around the room. Holding up the ceiling of the chamber are four pillars of cyclopean size and construction, clearly wrought by dwarven hands. Each pillar bears the symbols and carved scriptures of one of Greyport’s gods.
  “This is it,” shouts Gerki, pointing up. “The temple is right above us!”
  “Behold the power of the sea, drylanders!” booms a voice. In the distance, surrounded by a protective cordon of slime, the giant crab man regards you with a contemptuous grimace. “This is but the first wave of many as the ocean rises against you, and its power is great enough to wash even your gods away! The waves that follow...”
  “Oh, wow,” says Deirdre, looking up at the four huge pillars with a look of rapturous awe on her face. “These pillars are engraved with all of the scriptures to the four great divinities of Greyport. I didn’t even know this was down here! Thank you, Gerki, this is truly a wondrous...”
  The giant crab man sputters. “Are you drylanders even listening to me?”
  Eve rolls her eyes. “Look, you have to understand. We’ve heard megalomaniacal speeches before, so we get it.”
  The giant crab man clacks one of his claws in irritation. “Do you not see the terrors that will soon afflict you? The seas will batter your dry and dusty city in a storm unending, until you and all your horrid works are washed clean from the surface of the land!”
  “Nice imagery,” sniffs Eve, “but not very original. I’ll award you a... five and a half out of ten.”
  The giant crab man blinks at your party in disbelief. “I’m going to enjoy destroying you!”
  At that, the creature raises its smaller claw— and the large conch shell that it grips between its pincers—to its mouth. It blows a note that echoes off the walls of the chamber, so loud that the temple’s four support columns ring out an answering call.
  The walls begin to shudder as, in places, circular sections of acid-eaten stone erupt out onto the chamber floor. From these perfectly round holes pour in not only a seemingly endless supply of oozes, great and small, but also great pressurized gouts of noxious, glowing…
  “SLIME!” shouts Fiona.
  The slime splashes down in mighty torrents, fizzing, hissing, and dissolving everything it touches. In a few moments, there will be only a few areas of the chamber floor that are barren of slime, so you know that you will need to hurry if you are to make your way across.
  As you move to confront your foe, the oozes, jiggling with an intensity you have not yet seen, converge on the four great pillars, swarming up the stonework and beginning to dissolve it with their caustic juices.
  “We need to get to the pillars,” shouts Deirdre. “If those supports fail…”
  “Rest assured, we’re not going to let that happen,” says Zot, pointing at the few spots of floor that are still clear. “Get to the pillars! Stop that slime!”
  Pooky acts before his master can finish speaking, hopping off Zot’s shoulder and bouncing from bare spot to bare spot, drawing ever nearer to the hideous creatures on the nearest pillar.
  As you ready your weaponry and shout a desperate battle cry, the giant crab man throws back his head and replies with a gout of mocking laughter…`,
      compact: `Following Gerki’s shortcut, you reach a massive chamber directly beneath the Great Temple. Four cyclopean pillars—the foundations of Greyport’s faith—hold up the ceiling. The giant crab leader waits there, surrounded by a cordon of slime, and launches into a megalomaniacal speech about the ocean washing away the "drylanders."
  "I'll give that a 5.5 out of 10," Eve sniffs, unimpressed by his lack of originality.
  Enraged, the crab man blows his conch. Walls erupt as pressurized gouts of glowing, acidic slime flood the room. The oozes swarm the four pillars, immediately beginning to dissolve the ancient stonework.
  "Save the supports!" Deirdre cries.
  As Pooky bounces across the vanishing dry ground toward the nearest pillar, the crab man lets out a mocking laugh.`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `With a cry of fury surprising for one normally so friendly and pious, Deirdre sweeps up the dead crab man’s conch and bashes it against the floor until it shatters into pieces. The moment the conch is sundered, the slime still pouring into the chamber slows to a trickle, and the few remaining oozes begin to burble across the floor, making a relatively speedy retreat to the holes and fissures through which they issued. In a few moments, they are gone.
  You look around, surveying the damage. The pillars holding up the Great Temple will need to be repaired and reinforced before too long, but, for now, they are still strong enough to bear the weight of the holy place above them. Relieved and grateful for your success, you and the other party members swat one another on the back, congratulate each other, and laugh at the irregular holes the slimes have eaten into your clothing.
  As you stand there, surveying your hard- fought victory, a large contingent of priests and paladins enter the room from one of the passageways leading out to the rest of the Undercity. Shouting prayers of thanks to Greyport’s gods, they run over to you, talking over one another as they try to ask you what happened.
  “Sea creatures sought to pull down the Great Temple,” says Deirdre, kicking at the broken remains of the Crab King with a delicate foot. “This one seemed to be their leader, but we stopped him.”
  “By the burning mane!” shouts one of the high priests of Korash. “We had no idea anything of the sort was occurring until the temple started to shake. Had you not been here to stem the tide, I fear we would have arrived too late to stop them.”
  As the priests and paladins look at one another with sober and horrified expressions, Gerki guffaws, clutching at his stomach with both hands. The high priest of Korash regards him with a sharply raised eyebrow.
  After a long moment, Gerki manages to get himself under control, though he is redfaced, weepy, and still giggling a little. “I get it,” he says, looking at the somber, confused faces of the assembled clergy. “Stem the tide? Of the sea creatures? No? Uh. Too soon?”
  “Oh… that was unintentional,” Says the high priest with a shrug. “Anyway, you have our boundless and sincere gratitude for your bravery here today. Please accompany us to the Great Temple. We cannot offer much ourselves, other than our curative and restoration magics, but I would imagine that Grand Cleric Ohava will be able to give you a more… earthly… reward for your great deeds.”
  “Sounds good to me,” says Gerki. “Lead the way, your holinesses!”`,
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
      full: `It has been a busy couple of weeks following your epic battle with the nefarious crab man and his legions of hundreds of thousands of gallons of slime. Artisans and stonemasons from Greyport and the territories beyond have descended into the Undercity, working day and night to repair the support pillars that hold up the Great Temple.
  Life has been busy for you as well. Under Gerki and Fiona’s direction, you have been working with the Greyport City Guard and the Undercity’s Runoff Rangers to probe every nook and cranny in the Undercity that you can find. Your mission, ostensibly, is to root out any last little bits of slime that managed to tuck themselves away after your big battle, as well as to clean up any spores that might someday grow into new slime. After attacking countless walls with scrub brushes, soap, and magic, you are sure that you have eradicated any future menace the slime might have posed.
  One day—at least, you think it’s daytime; it’s rather hard to tell down here in the Undercity— you wander far afield of your Runoff Ranger “chaperones.” You soon find yourselves at the far end of a dusty, crumbling tunnel, its roof supported by square stone columns. Eve, who has seemed taciturn and bored during your whole tenure in the Undercity, notices something on the nearest column, lets out a low grunt of surprise and walks over to it.
  She peers at a carving in the wall before cocking her head and calling out to Zot. “Hey, Professor! You’re the expert on these sorts of things. Can you tell me if this symbol is what I think it is?”
  Zot strides over to the wall, the hem of his robes kicking up dust as he moves. He draws close to Eve, scrutinizes the wall for a moment, and then recoils in shock.
  “Aha,” says Eve, with a smirk. “That’s what I thought.”
  “Indeed,” sniffs Zot. “Though there’s no need to pay it any mind. It’s probably just graffiti, carved by a student with a bizarre sense of humor.”
  “What you talking about?!” shouts Gog. “Gog not get it!”
  “Sorry, Gog,” says Eve, before gesturing to Zot. “You should explain this one.” Zot presses his palms together and immediately assumes his teacher stance. His sonorous voice spins a brief tale of an ancient and disbanded order of mystics, who ignored the warnings of the Wizards’ Council and dabbled in forbidden and dangerous arts. They enslaved elementals, using their stolen power to create powerful magical items, and that was only the least of their unsavory powers.
  “He’s leaving out the good stuff,” says Eve with a wink. “What he’s not telling you about are the legends about them pumping raw magic into captured test subjects, just to see what would happen to them, or warping their bodies with fleshcrafting and demonic magic.”
  “Because that sort of magic is impossible. Ludicrous! Tales of them are just unsubstantiated rumors spread around by the student body at the Collegium!”
  “And yet…” says Eve, pointing at the symbol.
  “As I said, the result of a bored student with an overactive imagination.”
  Deirdre steps forward, giving the strange symbol the once-over. “Still, it looks fresh.”
  Everyone looks at her, with various expressions of surprise on their faces.
  “Oh, what?” says Deirdre, giggling. “I can’t know anything about stone because I’m an elf? I’ll have you know I spend a lot of time adventuring with Dimli, and he taught me quite a bit about stones and stone carving. This,” she points at the symbol again, “looks freshly carved. Even if it is a joke, I feel like I don’t want to leave the area without knowing who made it or why.”
  “There’s an easy way to find out,” says Eve. In unison, she and Zot make identical wriggling motions with their fingers and make sweeping gestures encompassing the subterranean hallway. One short, in-unison chant later, and the hallway flares briefly with blue light.
  “See anything?” asks Fiona.
  Zot frowns, glances worriedly at Pooky, and then back to the rest of you. “Active and unstable elemental magic. Relatively nearby.” The elder wizard points down the hallway. “That way.”
  “That sounds like it’s worth investigating,” says Deirdre.
  “Agreed,” says Zot. “This way.”
  As your group marches farther down the hallway, Eve strides briskly to the front, one hand raised to shield her eyes.
  “Everything all right, Eve?” asks Zot.
  “Yeah. We all just have too many magical items. Looking at everyone with this detection spell up is like staring into the sun.”
  “Ah,” says Zot. “True.”
  “How do you manage it, Zot?”
  Zot smirks. “Lots of practice. Also, very bushy wizard eyebrows.” Your group turns a corner, squeezes its way through a much narrower, more roughly-hewn passageway, and into a large chamber. Before you, the bodies of several people have been arranged in a circle on the floor, their dead and empty eyes staring up at the ceiling. The bodies show signs of having been... altered... in unpleasant ways. Even from the doorway, you can see criss-crossing wounds that have been roughly sutured shut, as well as strange runes that have been branded on their faces and arms.
  Bolts of energy crackle up from the floor, arcing between the stone and the corpses. Galvanized by the magical energy, the dead leap to their feet, their limbs rigid, electricity sparking out of their eyes. You watch as their prostheses hum to life and their musculature bulges grotesquely beneath their tortured skin.
  Then they rush you, shrieking and wailing.`,
      compact: `Weeks after the slime battle, the party is stuck on "scrubbing duty" until they stumble into a dusty, forgotten tunnel. Eve spots a symbol of a disbanded order of rogue mystics—infamous for forbidden fleshcrafting and elemental slavery.
  Zot dismisses it as a student prank, but Deirdre notes the carving is suspiciously fresh. Casting a detection spell, the mages pick up a trail of "unstable elemental magic" leading deeper into the gloom.
  They enter a chamber where surgically altered corpses—branded with runes and roughly sutured—lie in a circle. Suddenly, crackling energy arcs through the room, jolting the bodies awake. Muscles bulge grotesquely and mechanical prostheses hum as the monstrosities leap to their feet, eyes sparking with magical lightning.
  Shrieking and wailing, the reanimated horrors rush the party.`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `“So, fleshcrafting and all that is impossible, eh?” says Eve, with a smirk.
  “It was widely reputed to be so,” huffs Zot.
  “But clearly, the magio-historians were wrong. And that makes what we discovered here all the more alarming.”
  Deirdre wanders through the aftermath of the battle, taking breaks from taming her staticky hair to imbue your wounded companions with the benefit of Elaana’s healing. “I hope that this is the last of them,” she says, a look of concern on her face. “Those poor people! What those mystics did to them was just… awful.”
  “Yeah,” says Fiona, whose own hair is so interestingly coiffed that the static of the orbs can’t do much more to it. “That was… brrr…”
  “Don’t worry!” shouts Gerki from somewhere on the other side of the room. “I’ve found something that’ll raise all our spirits quite a bit.”
  The plucky thief then emerges from the shadows, dragging a very large, very ornate trunk behind him. He sets it down on the stone floor with a heavy clunk, and all of you can hear the familiar rattle of valuable items banging around inside.
  Gerki rubs his hands together and sets about picking the lock, scrunching up his face as he manipulates the tumblers. He seems to almost have it when…
  “Oh no!” shouts Zot.
  Zot’s sudden cry causes Gerki to flinch. A moment later, he pulls a bent pick out of the chest’s lock. He throws a dirty look over his shoulder at Zot.
  “Hey, what gives?” he says, as Zot approaches the rest of you, holding a leather- bound book stamped with the symbol of the Ancient Order of Mystics.
  “I found this on one of the mystics,” Zot explains, flipping back and forth between pages and showing you various blocks of texts and pen-and-ink drawings. “It seems as though the order is far larger and far more entrenched than we had originally assumed.”
  “Not that hard,” says Eve, “since we assumed they didn’t exist.”
  Zot, who is engrossed in the book, ignores the comment. “They are apparently working with other nefarious factions in and around the city, and have established at least one more base in a place that is both well-provisioned for magic and far away from prying eyes.”
  Zot holds the book open to you, showing off a drawing of a large domed building set upon a lonely mountaintop. Stars shine down in the dark sky above, and a section of the building’s domed roof appears to be open and emitting strange energies, represented on the page by lots of swirling linework and carefully drawn beams of black, pseudofractal energy.
  “The old Collegium Observatory,” Zot says. “In the mountains west of the city. There’s no telling what they could be doing up there. We have to investigate.”
  “Agreed,” says Gerki, with a smile and a deft flick of his wrist. “But first, can’t we please take a minute to savor my very favorite part of being an adventurer?”
  Gerki pulls the chest’s lock open and swings back the lid, revealing all manner of wondrous objects. For a moment, the ominous presence of the Ancient Order of Mystics fades away from your minds, as you lean forward and appreciate your rewards. You have to agree with Gerki. Sometimes, being an adventurer is really, really great.`,
      compact: `"Fleshcrafting is real, then?" Eve smirks as Zot begrudgingly admits the "impossible" has happened. While Deirdre heals the group's wounds, Gerki drags out the silver lining: a massive, ornate treasure chest.
  Zot interrupts the lock-picking to reveal a recovered journal. The Ancient Order of Mystics isn't just a myth—they are an entrenched conspiracy operating out of the old Collegium Observatory in the western mountains.
  "We have to investigate," Zot says, pointing to sketches of the observatory emitting dark, fractal energy.
  "Agreed," Gerki replies, finally clicking the lock open to reveal a hoard of wondrous objects. "But first, let's savor my favorite part of adventuring!" For a moment, the dark Order is forgotten in the golden glow of the loot.`,
    },
    reinforcements: [
      { title: 'Reinforcements 1', full: 'The energy wall deactivates and you press on. The unfortunate use of magic here has attracted the attention of elementals who seem to be jealously guarding a large orb on a pedestal in one corner of the room. The orb pulsates with arcane energy, and conduits along the floor indicate that it powers the entire chamber.' },
      { title: 'Reinforcements 2', full: 'You are about to cry out when the orb suddenly goes dead. The arcane energy quickly travels through the conduits. When it reaches the barrier, there is one last crackle. The barrier disappears and everything is quiet - for a moment. On the other side of the open doorway, you hear a gravelly voice shout, “No! Our work must not be disturbed!” It seems your task is not yet finished here. New foes appear right in front of you and in the room beyond!' },
    ],
  },
  {
    number: 6,
    name: 'Chapter 6',
    prologue: {
      title: 'Prologue',
      full: `The trek up into the mountains is a long one, not unpleasant, but a touch dull. It is made even duller by Zot, who spends most of the time monologuing about the intricacies of the Collegium, its politics, and its internal workings. By the time your party passes the tree line and into the upper mountains where only scrubby-looking bushes and lichen- covered rocks remain, you’re not sure if you’re tired from all the walking, from Zot droning on, or from mild hypoxia.
  “Still doesn’t explain why they built their stupid observatory all the way out here,” says Gerki, pausing every few words to take deep gulps of the thin mountain air.
  “Partly because of the amazing view,” says Zot, gesturing at the huge, star-bedecked vault of the sky above you, “but mostly out of necessity. It was constructed after the dragon destroyed most of Greyport, and the Collegium was in stasis.”
  “Oh, right,” says Fiona. “That’s when you and Pooky were in time jail.”
  Zot sniffs, and Pooky looks a bit nervous. “Once the city started to come back and the Collegium came out of stasis, they decided to build a more modern on-site observatory. Mostly because wizards enjoy mountaineering just about as much as you’d expect.”
  Moonlight gleams off the round dome of the distant observatory, illuminating it with a pearlescent glow that makes the damage caused by time and neglect that much more obvious. Here and there, you can see dark voids on the dome, where the roof has collapsed inward, and where parts of the observatory’s once majestic façade have fallen away, littering the dusty mountain valley with jumbled piles of marble and granite.
  Gradually, you all feel rather than hear an invasive, irritating buzzing noise on the air that vibrates your teeth in their sockets. Zot and Eve seem to be much more discomfited than the rest of you. Gog, however, seems unfazed. Whether that is due to the massiveness of his molars, or to the thickness of his skull is, alas, unknown to you.
  “Are you all right?” asks Deirdre, the talisman of her Goddess glowing softly blue on her breastbone.
  “No,” says Zot, as he absently pats a very agitated Pooky. The rabbit’s soft, white fur, usually sleek and smooth, is now standing up on end. “There’s magic being used here, powerful and poorly implemented. The harmonics are not well-aligned. We might be damaged if we stay here for too long.”
  Gerki sucks on his teeth. “Damaged how? I don’t want to grow horns or a tail or anything like that, if I can help it…”
  “Oh, Gog would like horns!” says Gog, excitedly. “Maybe big curly ones! Like mountain sheep!”
  “Shh,” whispers Fiona, motioning everyone to crouch down behind a moss-covered boulder. Once everyone has concealed themselves, she points at a line of shadowy figures moving toward the observatory. “We got company.”
  “Something’s definitely going on here,” says Deirdre.
  “Let’s go find out what,” says Gerki, “before my teeth decide to jump out of their sockets.”
  You creep through the shadowed foyer, past darkened workshops and storage rooms, and into the main chamber of the observatory. The domed ceiling is decorated with a depiction of the night sky, all done in dark-purple lacquer, with jewels to represent the stars. Well, some of the stars—many of the jewels have been crudely pried out of the ceiling by looters. Looters, the curious, or perhaps sentimental Collegium members, also seem to have taken much of the observatory’s magical machinery and equipment, as there are numerous marks on the floor and walls that hint at their absence.
  Some of the arcane equipment remains, however, and that has been crudely cobbled together into several large constructs, each of which glows with light and poorly-aligned magical energies. Three energy-focusing prismatic devices direct their mystical energy toward what looks like a large silver sarcophagus, causing it to glow brightly and arc bolts of chaotic power into the air and the floor nearby. Though the omnipresent hum is no more audible than it was outside, it is so intense as to be almost unbearable.
  Deeper into the room, several people garbed in the robes and cerements of the Ancient Order of Mystics stand in conversation with another group of people who wear the nondescript and faded clothing common to those who deal in smuggled goods. This second group of people escorts a third group of very short, stumpy people who have bags over their heads and their arms tied behind their backs. A long, slender chain links this last group of people together.
  “Yes,” says one of the mystics. “These slaves should be sufficient for our needs at present.”
  “Good,” says one of the slavers, “then we’ll be taking our payment now.”
  Two of the mystics come forward, bearing a large trunk between them. They set it down on the floor and open the lid, revealing a wide array of well-made and glowing magical weaponry. The slavers take it into custody before handing over the leading end of the chain to the mystics.
  “If you don’t mind my asking, what’s this all for?” asks one of the slavers. “Seems like you got a lot of serious magical hoobajoobery going on here, and I can’t imagine that a bunch of goblin slaves is going to be of much use to you.”
  “We did not buy them to use as laborers,” says a mystic, gesturing at the sarcophagus. “They are here to help us refine our Mana Forge, and, eventually our final product—the perfect and permanent enchantment of living flesh. If you and your brethren are interested, I’m more than happy to show you a sampling that we prepared earlier today.”
  Some of the mystics and most of the slavers head toward the sarcophagus, and one of the goblins on the slave chain takes this as her opportunity to slip her bonds, pull off her hood, and run for it. The mystics and the slavers notice immediately, giving chase as the goblin tries to lose herself in the cobbled together machinery, pulling at cables and kicking at pipes in her desperate attempt to escape.
  “Let’s put a stop to this,” says Fiona.
  “Agreed,” says Zot. “And mind the beams coming from the…”
  As if on cue, the beams from the prisms, which were already unstable, suddenly lose their coherence. Magical energy pours out of the prisms in chaotic cascades, bathing swaths of the main chamber in unstable energies. Your party desperately attempts to avoid being cooked by the uncontrolled arcane power while attempting to stop the mystics and their evil deeds!`,
      compact: `The climb was long, high-altitude, and made even more exhausting by Zot’s endless monologues on wizardly politics. Reaching the crumbling mountain observatory, the party felt an invasive magical hum that made their teeth rattle and Pooky’s fur stand on end. "Poorly-aligned harmonics," Zot warned. "We might be damaged if we stay too long."
  Inside, beneath a jewel-looted dome, they witnessed a grim trade: the Ancient Order of Mystics was buying goblin slaves from smugglers in exchange for enchanted weapons. The goal? Test subjects for a "Mana Forge"—a silver sarcophagus designed to permanently enchant living flesh.
  The scene erupted into chaos when a captive goblin slipped her bonds and sabotaged the machinery. Unstable prismatic beams immediately lashed out, bathing the room in chaotic energy.
  "Let's put a stop to this," Fiona growled, as the party charged into the magical crossfire to end the Mystics' cruel experiments.`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `With the battle over, Zot very quickly—but very, very carefully—disables the Ancient Order of Mystics’ malfunctioning prism devices. Judging by the soft bluish glow that seems to emanate from, well, everything, the immediate area is still experiencing much higher magical radiation than what would be considered baseline. At least the death beams and the horrible humming have finally stopped.
  You take the cache of magical weapons into custody and free the goblins from their bindings and their uncomfortable-looking bag hoods. They are grateful for your timely, and surprising, intervention, and their profuse and squeaky thanks echo across the observatory dome in a cacophonous din.
  “You’re welcome, you’re welcome,” says Deirdre, smiling beneficently. “Can you tell us how you got here?”
  The goblin who made the valiant escape attempt, damaging the prismatic machinery in the process, steps forward. “We was wandering around the mountains, looking for more shiny stuff for King Torglesnarf Duncleton, First of His Name...”
  “May he live a longish time, if not forever!” shout the other goblins, in unison.
  Your party glances back and forth at one another in a kind of grim bemusement, wondering what Torglesnarf would think of you rescuing his “subjects.” Maybe you could ask him the next time he takes it into his head to “conquer” Greyport.
  “Anyway,” continues the goblin, “these tallish folks came up into the mountains from the greyish port. They popped sacks over our heads and took us their prisoners, to sell to these misty mystics. They said that they were runners, but they never did run anywhere, as far as I could tell. Mostly they just be loping across the mountains like the tallish folk do.”
  “Runners,” says Gerki, passing a hand through his unruly hair. “That’s not good.”
  “No,” interjects the goblin. “Then they were to get paid in shiny weapons, which would only make them betterish at grabbing even more greenyskins.”
  “We have a lot of evidence now,” says Zot, “both that the Ancient Order of Mystics is back in operation, and that they are misappropriating Collegium equipment for their own nefarious ends. We need to get back to Greyport and see if we can get a meeting with Chancellor Darvishon, the head of the Collegium. He needs to know about this, and he’ll be able to tell us what to do next.”
  “I’m not looking forward to a lot of waiting or boring meetings,” says Fiona, “but yeah, this seems like it’s too big of a deal not to tell someone. Let’s bind our wounds and head back.”
  “What will you be doing about all of us?” asks the goblin, somewhat tentatively.
  “You’re free to go,” says Deirdre. “Let us know if any of these runners or mystics bother any of you ever again.”
  “We shall be doing so, elfish lady,” says the goblin, saluting your party with a final, rubbery bow.`,
      compact: `The battle is won, and Zot carefully disables the prisms, though everything still emits a faint, radioactive blue glow. At least the death beams are gone.
  After freeing the goblins, the party learns they were kidnapped by "Runners" from Greyport to be sold as test subjects. "Runners?" Gerki mutters. "That’s not good."
  Zot is grim. Between the "impossible" fleshcrafting and the stolen Collegium gear, it's clear the Ancient Order of Mystics is a major threat. "We need to return to Greyport and see Chancellor Darvishon," Zot insists. "He needs to know the Collegium’s own equipment is being used for this."
  Fiona groans at the thought of boring meetings, but agrees it’s too big to ignore. The goblins are set free with a rubbery salute, and the adventurers begin the long trek back to the city.`,
    },
    reinforcements: [
      { title: 'The Arcane Golem', full: 'With a thunderous crash, the lid of the silver sarcophagus is thrown from its base. A flash of brilliant electricity makes your hair stand on end as a large shape hurtles through the air and smashes to the ground beside you. When the dust clears, you see the menacing construct. Its silver shell, loosely held together, encases an orb of pure energy in its chest. As its hands open, lightning arcs between its fingers, and with a bloodcurdling scream it lashes out!' },
    ],
  },
  {
    number: 7,
    name: 'Chapter 7',
    prologue: {
      title: 'Prologue',
      full: `There are complicated networks of spies, agents, and informants in the Undercity. They know the underground lanes, as well as the layout of the streets of the city above, better than anyone else in the city, even including the Greyport Postal Service. With silence and speed, they maneuver in the shadows, utilizing secret tunnels, hiding in bolt holes, and keeping ear and eye open for anything that would interest their employers.
  One such network has recently uncovered something particularly seamy and untoward and has set into motion a plan to alert their employer of this recent development. A coded message, written in a dark cavern deep beneath the city, begins its slow and untraceable journey up from the bowels of the Undercity to a dead drop outside of a certain famous inn. It passes from hand to hand, spends time in a mail carrier’s pouch and is even, briefly, baked into a pie before, at long last, it reaches its intended recipient…

  The party convenes hastily at your usual table at the Red Dragon Inn. Gerki, who has called you all here, surveys you with an expression that contains not a hint of his usual sardonic humor. He withdraws a scrap of parchment, which smells faintly of apples and cinnamon, from his tunic and passes it around to each of you. On it appears to be a message written out in a confusing and impenetrable code. Fortunately, Gerki has already taken the time to decipher the message, though it takes a moment to translate his spidery writing, which is jammed in between the coded lines. The note is short and worrying.
  “I told my contacts to get in touch with me if they noticed anything weird going on down below. Figured that anyone who spent all that effort to try and sink the Great Temple wouldn’t just give up if they failed the one time. This seems like it’s unrelated, but it’s still worth looking into.”
  Fiona nods sharply. “Yeah. I agree. A gang of slave traders appears at the same time as a bunch of Undercitizens go missing? Not a good sign.”
  “I don’t like it either, Fi,” says Gerki. “Especially since we’ve seen that these ‘Runners’, as they call themselves, are unusually well-equipped.”
  Deirdre, her brow creased with worry, looks over the letter. “Do your contacts know anything about what’s happened to the people who disappeared?”
  “Don’t know,” says Gerki. “That’s the only message I got. But it does say they know a couple of spots where smugglers are known to meet. I say we go down there and find out…”

  After receiving a disguising glamor from Eve, your party makes the trek to the Greyport Docks, following the ever-narrowing streets of the city as they slope steadily downward to the sea. The smell of brine, fish, and unwashed dock worker assaults your nostrils as you wander down the splintered planks, past ships from far-flung ports of call. At last, you arrive at the entrance of a ramshackle warehouse. While the building looks like it’s on the verge of falling apart, the doors are in good repair and have been fitted with sturdy new locks. The gang of dock hands and other toughs loitering outside the warehouse seem none too pleased to see a large group of people rolling up unannounced all at once. Gerki diffuses the situation with a few coins and some secret hand gestures, and the whole lot of you are eventually let inside. You begin to investigate, looking around dusty packing cases and behind moldering barrels, but you see little evidence of the Runners or of their nefarious deeds.
  Just then, a key turns in one of the locks outside, and your party scampers to one of the corners of the warehouse, secreting yourselves in deep shadow behind a tall wall of unsteadily- stacked merchandise. You barely manage to reach this cover when the warehouse doors open and several individuals step inside. They secure the door behind them and move across the warehouse to a smaller room in the back, lighting their way with hooded lanterns.
  Fiona lets out a low whistle of appreciation as the new arrivals vanish into the back room.
  “You see their weapons? Fancy as all get-out.”
  “Agreed,” says Zot. “And they’re all enchanted, too. We seem to be in the right place.”
  “Quiet,” says Gerki pulling back his hood slightly. “And c’mon. That’s the room we want.”
  It takes some doing, but your party slowly trickles across the main room of the warehouse toward the entrance of the room in the back. Fiona is in the lead as you creep inside, hands on your weapons (or, in Zot’s case, on his rabbit).
  The chamber behind is dimly lit by lanterns and a fireplace. Mangy furs and tattered tapestry cloths hang on the walls. The well- armed individuals sit around a wobbly wooden table that is chipped and scarred by long misuse, poring over numerous documents.
  “…been paying us real good for them components,” says a rough-looking dwarf with a scarred eye. “Gonna pay us even better for this new shipment, if we can make the quota and get the merchandise to the harbor in time.”
  “I don’t like it,” says a gangly woman, who is in the process of paring her nails back with a razor-sharp knife. “Stolen goods is one thing. This is something else.”
  “We’re already neck-deep in it,” says a man whose face is obscured by a thick brown kerchief. “We abandon this job, we abandon our backers and our reputations. We do that, we’re done for. I know things are getting hot right now, but they say they only need a few dozen or so. Once we get ‘em, and get ‘em to the docks, we’ll be done, and we’ll get paid.” The woman sighs. “I think it’s hotter than you think it is, Brek. The Guard and the Guild are only too happy to look the other way if we smuggle in herbs, spices, and them luxury items people don’t want to do without. It’s another thing entirely to deal in slaves. Nobody likes that.”
  “I don’t like it, either!” says Fiona, drawing her sword and rushing toward the room. “These slaver scum are gonna taste hot steel!”
  “Fi!” shouts Gerki, “Look out!”
  But Fiona runs on, heedless of the tripwire in her path. It snaps in half as the dauntless warrior passes through it, triggering a hidden mechanism in the shadowed rafters of the warehouse. With a torturous groan, stacks scatters, barely avoiding getting crushed by the trap.
  Runners hear the noise, obviously, and before you and your compatriots can regroup, they draw their enchanted weapons and rush forward to join you in battle.`,
      compact: `Deep in the Undercity, a coded message—passed through spies and briefly baked into a pie—finally reaches Gerki at the Red Dragon Inn. The note, smelling of apples and cinnamon, confirms the worst: a gang of "Runners" is kidnapping citizens and selling them as "components" to a mysterious backer.
  Disguised by Eve’s magic, the party stakes out a ramshackle warehouse at the Greyport Docks. Hidden behind stacks of crates, they overhear the Runners discussing their lucrative, if dangerous, trade in human lives.
  "Stolen goods is one thing," a gangly woman mutters, paring her nails with a razor. "Slaves is another. It's getting too hot."
  "We get the shipment to the docks, we get paid," the leader, Brek, retorts.
  Fiona has heard enough. "These slaver scum are gonna taste hot steel!" she roars, charging the room. In her fury, she snaps a hidden tripwire, sending heavy merchandise crashing down from the rafters. The party barely dodges the trap as the Runners draw their glowing, enchanted weapons and rush into the fray.`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `“That’s one band of slavers who won’t be plaguing Greyport anymore,” says Deirdre, gently touching her holy symbol. “Thank the Goddess.”
  Gerki, who has been looking over the scattered paperwork on the table, shakes his head. “Maybe, but it’s not over yet. Zot, c’mere and look at these.”
  Zot sits across from Gerki and begins to read the documents, while Pooky hops down off his shoulder and gingerly sniffs a puddle of blood that is slowly spreading across the table.
  “Oh,” says Zot. “Oh. This is unfortunate.”
  “What’s unfortunate?” says Fiona, the expression on her stormy face hinting that she is still more than ready to live up to her appellation of “Fiona the Volatile.”
  “There’s more smugglers in the Runners than just these folks,” says Gerki, pushing over a pile of manifests and shipping records. “These ones were the money managers, but the rest are still out there, bringing in black market goods and trading with anyone who is willing to pay them.”
  “Yes,” says Zot, “and, according to this, it appears that their ship is going to rendezvous with their buyers at a predetermined location out in the middle of the sea, three nights from now. That’s when they’re going to transfer half- a-dozen units of ‘exotic merchandise’ from their vessel to their employer’s ship.”
  “More slaves?” asks Deirdre.
  “Sounds like,” says Gerki.
  “But we know the where and the when,” says Fiona. “We can put a stop to this once and for all.”
  “We can,” says Zot, rising. “But I suspect we are going to need some help to do it. Tomorrow, we need to come back here and see if the Crimson Drake is in port. I suspect that Captain Whitehawk and her crew would happily aid us if they knew what was happening.”
  “Good,” says Gog. “Gog not like slavers!”`,
      compact: `The battle is won, but the threat remains. While Deirdre offers thanks for the victory, Gerki and Zot pore over the Runners' abandoned manifests.
  "There's more of them," Gerki warns. "These were just the bookkeepers."
  Zot uncovers a more urgent detail: a rendezvous is scheduled for three nights from now in the open sea. The Runners plan to transfer "exotic merchandise"—more captives—to their employer’s vessel.
  "We know the where and the when," Fiona says, her hand on her sword. "We stop this for good."
  Zot nods, already planning their next move. "We'll need a ship. Tomorrow, we look for the Crimson Drake. Captain Whitehawk won't take kindly to slavers in her waters."
  "Good," Gog grunts. "Gog not like slavers!"`,
    },
  },
  {
    number: 8,
    name: 'Chapter 8',
    prologue: {
      title: 'Prologue',
      full: `It is fortunate indeed for your party that the Crimson Drake is in the harbor. Captain Whitehawk and her dauntless crew have as little love for slavers as you do, and they agree to help you in your mission. Bryn the Boatswain, her enthusiasm bubbling over, goes below decks to prep the cannons and to make sure she has enough powder and shot for the ensuing battle.
  As Bryn departs, singing a jaunty cannoneering tune, Zot hands over the documents you acquired from the smugglers to Captain Whitehawk. She gives them a quick vetting before guiding them into the hands of Tara, the Drake’s blind, but psychic navigator. Tara’s white-filmed and unblinking eyes seem to be looking at a spot somewhere above and behind your heads, while her fingertips deftly play over the ink and parchment. After a long moment, a sly smile forms upon her lips.
  “Something promising?” asks the captain.
  “Aye, indeed,” replies Tara. “It’ll be no trouble at all to plot a course to this meeting place, and I foresee that the night of the exchange shall be one in which the temperature drops swiftly and unexpectedly. This will create a thick bank of fog upon the ocean waters, which will obscure our approach and allow us to close with the slavers before they can see us.”
  “Excellent news,” says Captain Whitehawk. “Shalni be praised.”
  “Indeed,” smiles Tara, handing back the documents. “And thank you, Zot, for letting me read these. Very helpful.”

  On the night of the rendezvous, you board the Crimson Drake and set sail out of Greyport’s mighty harbor. Streamers of mist curl up from the waters of the bay, growing in size and number as you head out to the open sea. By the time the lights of Greyport are too distant to see, you are surrounded in a fog as thick as the proverbial bowl of pea soup, just as Tara had foretold.
  There is the occasional clang of a buoy bell sounding in the distance, but otherwise the Crimson Drake sails alone. You are glad that Tara has such a strong command of her mystical eighth sense—left to your own devices, you might wind up sailing around in circles, or crashing into some hidden reef.
  At long last, the fog begins to thin a bit, just as the clouds slide away from the face of the moon far above you. The Drake glides quietly across the calm sea waters, surrounded by silvery fog banks as massive as the distant mountains. Captain Whitehawk strides to the bow, raises her spyglass to her eye, and peers out across the fog-bedecked waters.
  “There,” she whispers, pointing at a gap between two fog banks. “I think that’s our vessel.”
  As if in answer, a small signal light flashes half-a-dozen times on the prow of the distant ship. First Mate Remy, his eyes narrow, his deadly rapier hanging from his side, uses his own signal lamp to return the greeting. A moment later, you hear low shouts of command from the distant vessel, and the ship slowly moves to close with you.
  “Now what?” whispers Fiona, her gleaming armor hidden underneath a cloak of black oilskin.
  Captain Whitehawk gestures to her crew, and the Crimson Drake slowly turns broadside.
  “When we get into range, we shoot them,” says the captain, winking, “we’ll splinter the masts, cripple the rudder, and demand their unconditional surrender. How’s that sound?”
  “I hope it works,” replies Deirdre, shivering in the chill mist, “and I hope that Bryn can aim well enough so that we avoid hitting the prisoners.”
  “We should be fine. Bryn is known for her precise demolitions, and…”
  A warning bell clangs from the other ship, and shadowy figures upon begin scurrying like rats along its deck and up its rigging. They are shouting in alarm, and the ocean carries some of their voices to you. “…not the Venalicus… another ship…ambush…ready the cannons!”
  “Oh, bloody hell,” shouts the captain.
  “Hard a’larbord. Bryn! Fire!”
  The concussive blast of the Crimson Drake’s cannons rattles the stays on the ship and the teeth in your head. Deirdre claps her hands over her delicate, pointed ears and grimaces, while the rest of your party reflexively takes cover as tongues of flame shatter the night. Only Pooky seems unmoved by the cacophony, blinking twice before idly resuming his grooming.
  The slaver ship is damaged, but not crippled, though smoke billows up from its deck and one of its mainsails collapses in flames. You expect the enemy vessel to turn broadsides and return fire, but instead it continues sounding its warning bell and aims its prow directly at the Drake’s amidships.
  “She’s trying to ram us! Turn! Turn!”
  The Drake responds, but not quickly enough. There is a shuddering, splintering crash as the slaver ship collides and grinds into your vessel. Pooky hops onto the deck as Zot topples over backward from the force of the impact. The rest of you stumble and tumble, trying to keep your footing, and swiftly lose one another in the chaos of fog, flames, and smoke.
  “Standby to repel boarders!” roars someone on the other ship. “Look lively now!”`,
      compact: `Fortunately, Captain Whitehawk and her crew hate slavers as much as you do. While Bryn the Boatswain preps the cannons, the blind psychic navigator, Tara, uses her "eighth sense" to plot a course. She predicts a sudden temperature drop—and right on cue, a thick, pea-soup fog rolls in to mask the Crimson Drake's approach.
  Under the moonlit mist, the Drake intercepts the slaver vessel. "When we get in range, we cripple them and demand surrender," Whitehawk winks. But the enemy spots the ambush. "It’s not the Venalicus!" they scream. "Ready the cannons!"
  "Bryn! Fire!" Whitehawk bellows.
  The Drake’s cannons roar, shattering the night and settting the slaver's sails ablaze. Instead of returning fire, the enemy ship steers for a desperate maneuver. "She's trying to ram us!"
  A splintering crash rocks both vessels, throwing everyone to the deck. Through the smoke and fire, a roar rises from the enemy deck: "Standby to repel boarders!"`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `The prisoners are glad to be freed, and you are glad that they have no reason to vent their limitless rage and frustration at their imprisonment upon you. The slavers, on the other hand, are less lucky, and you have quite a time of it convincing the ogres, and Gog, not to grind the slavers’ bones down into meal. After a good deal of fast talking and promises that the slavers will be harshly dealt with by the proper authorities, the ogres demure, just barely, and the surviving slavers are able to continue to do so.
  As the last of the fighting subsides,Captain Grolnar takes as firm a knee before you as his requisite peg-leg will allow, and offers up his notched and battle-scarred cutlass to Captain Whitehawk.
  Fiona, who has no patience for this ceremonial sea surrender, grabs the ogre captain in a headlock. “All right, talk! Why are you carrying slaves? Who are you delivering them to…”
  “To whom,” offers Zot.
  Fiona glares at Zot and bears down on the ogre captain’s head with even more rage-fueled strength.
  “I be just the middleman, lassie,” says Captain Grolnar, his eyes bulging in their sockets. “I take whatever to whoever…”
  “Whomever,” says Zot.
  Captain Grolnar taps his hand desperately against Fiona’s elbow until her grip loosens slightly. He gasps for air, and says, “...and I be not asking...too many questions...which is how I be stayin’ alive. Ow. But if ye must know, my flame-haired sea harpy...one of the facilitators I be workin’ with...mentioned that this particular cargo was acquired...for none other than Lord Maybury.”
  “I know that name,” says Zot.
  “So do I,” says Deirdre. “He’s quite the well-heeled merchant, who donates a substantial portion of his income to the Great Temple every year. I think he’s angling to get a plaque with his name on it put up on the altar.”
  “What would a prominent merchant want with slaves?” shouts Fiona.
  Captain Grolnar shrugs, as best as he can, while dangling in her grip. “I dunno. That’s only what I be hearing.”
  “Oh, and your word is your bond, eh?”
  “I never said such a fool thing, lassie,” he says, with a sly grin.
  Gerki stands quietly in the background, looking out to sea and drumming his fingers on the battle-scarred railing of the slaver vessel. After a long moment, he turns, and favors everyone with his customary buck-toothed smile.
  “I have a plan!”
  “Before Zoog hear plan,” bellows one of the ogres, “Zoog want Gog autograph! Zoog love you, Gog! Zoog think you greatest adventurer!”
  “Gog love you, too!” shouts Gog, smiling and waving.
  Upon hearing this, Zoog promptly squeals and faints.`,
      compact: `The battle ends with the prisoners freed and the slavers barely saved from being ground into meal by the angry ogres. Captain Grolnar, the ogre leader, surrenders his cutlass, but Fiona skips the ceremony and puts him in a bone-crunching headlock.
  "Talk!" she snarls. "Who were you delivering them to?"
  "Whomever," Zot corrects.
  Gasping for air, Grolnar reveals the buyer: Lord Maybury, a wealthy merchant famous for his massive donations to the Great Temple. "I’m just the middleman," the pirate wheezes. "I don't ask questions."
  While Deirdre reels at the thought of a "pious" merchant dealing in slaves, Gerki drums his fingers on the railing with a sly, buck-toothed grin. "I have a plan!"
  Before he can share it, a rescued ogre named Zoog interrupts to beg for Gog’s autograph. When Gog waves back, Zoog promptly squeals and faints from pure fandom.`,
    },
    reinforcements: [
      { title: 'Reinforcements 1', full: 'You spot the pirate captain shouting orders from the quarterdeck. He is an ogre who seems to be among the top ten scurviest of dogs you have ever seen.' },
      { title: 'Reinforcements 2', full: 'There are several cages on the lower deck holding the “cargo”: ogre slaves. Some look dejected at their imprisonment, but most look angry. Very angry.' },
    ],
  },
  {
    number: 9,
    name: 'Chapter 9',
    prologue: {
      title: 'Prologue',
      full: `Having liberated the ogres, arrested the surviving smugglers, and taken the Runners’ ship in tow, you return to Greyport Harbor. You turn over the freed ogres to the Harbor Patrol for processing and release to their homelands, after making numerous assurances that no, the ogres, are not, in fact, an advance raiding party bent on destroying the city. At least, not this time.
  Following that, you are once again reacquainted with the complex bureaucratic machinery of the city, as the Harbor Patrol requests that you take the captured smugglers to the City Guard. When Zot protests that it would be much easier and make more sense for the Harbor Patrol to just do its job and take custody of the seafaring slavers, they point out that the slavers are, currently, on land, and thus fall under the jurisdiction of the Guard.
  Later that evening, you help incarcerate the surviving slavers at City Guard headquarters. Well, all but one, anyway. You take Grolnar, captain of the Runners’ ship, back to the Danger Room beneath the Red Dragon Inn for some quality alone time.

  “I don’t trust him!” shouts Deirdre, the expression on her face indicating that there is a likely storm of holy smiting in the weather forecast.
  Captain Grolnar, expertly tied to one of the Danger Room’s broken and deactivated robots, lowers his head and wiggles his peg leg as much as he can. “Fair enough, lassie, If I be ye, I’d not trust me as far as I could be throwin’ me.”
  “We don’t use that as a measure of trusting people anymore,” says Fiona with a grin, leaning in toward the captive captain. “It turns out that Gog can throw people pretty far…”
  Gog grunts and flexes his massive arms. If possible, Captain Grolnar turns even more grey.
  “All right, all right,” says Gerki, pushing himself past Fiona and Deirdre. “It’s high time that the two of you stopped playing Bad Guard and Worse Guard. You’re right, though, we can’t trust him. Which means that we need to make a deal sweet enough so that Captain Grolnar here has no reason not to go along with it. Right?”
  Grolnar bobs his head in agreement. As much as he can, anyway. “Aye. That be the right of it, lad.”
  “Great. Here’s the plan. You complete the handoff, making it look as real as possible. Then you take the money and you…” Gerki runs his fingers through his thick, wavy hair, glances at Deirdre, and sighs. “…you donate it—all of it— to the Great Temple Reconstruction Fund.”
  “Oh, I like that,” says Deirdre, brightly.
  “Knew you would,” replies Gerki, his smile looking artificial and crooked. “Then, after that, you keep your head down, you leave Greyport, and you never come back. You got that?”
  “I savvy, lad,” says Grolnar, “and I’d shake on that deal, so ye’d know I’d keep my word, except…” the leathery old sea dog gestures with his head at the ropes that bind him fast.
  “We know,” says Deirdre, her face looking a touch stormy again. “But we’re going to keep you tied up for now, just in case.”

  Later, your party approaches Lord Maybury’s estate. It’s one of the older residences in the city, all columns and buttresses and crenellations and whatnot, decorated with hanging lanterns, well-manicured pathways, marble fountains, classically-carved statues that are definitely art, and random shapes made out of stone or wood that are…probably art.
  Eve has worked her illusion magic on your behalf, disguising you all as a pack of warty, slouching, uncouth ogres clad in very thick metal chains. Thus enchanted, you follow Grolnar single-file down around to the back of the estate, where he taps a secret knock on an unusually large service door.
  “Remember,” says Zot, “Lord Maybury is very highly-regarded in the city, so that means we have to apprehend him, not kill him.”
  “Can I take his stuff?” asks Gerki.
  “No,” says Zot.
  The mechanisms on the other side of the door are unbolted, unlocked, and thrown back. The door opens, revealing a small room made of ancient stone. Several very large prison cells, their bars as thick around as some of your wrists, line the sides of the room.
  The contingent of well-armed and very nervous-looking guards escorts you into the room and puts you each in one of the large cages, locking the doors shut behind you. Captain Grolnar watches the proceedings from the center of the room, rocking back and forth on his peg-leg and whistling to himself. You realize, as the last cage door locks securely, that now is the perfect time for him to betray you…
  …but he doesn’t! Instead, he takes his fat purse of money with his customary garrulousness and incomprehensible sailors’ talk, and beats feet—well, foot—out into the night and, hopefully, as far away from Greyport as he can get.
  “Right,” says the captain of the guards, after giving your cages a thorough going-over. “That should hold this lot for a bit. Let’s go inform his lordship that we’ve completed the transaction.”
  The guards depart, leaving one of their number behind to stand guard...who promptly falls asleep at the desk in the center of the room. Eve casually snaps her fingers and drops your ogre disguises. Though the bars of your cages are sturdy enough to thwart an ogre’s strength, they are also spaced rather widely apart, and so it is no trouble for you to step between them to freedom. A quick cantrip from Zot unlocks Gog’s cage, and suddenly you have the drop on the sleeping guard!`,
      compact: `Back in Greyport, the party navigates a sea of bureaucracy before stashing Captain Grolnar in the Red Dragon Inn’s cellar for some "quality time." Under the threat of being thrown a record distance by Gog, Grolnar agrees to Gerki’s plan: finish the handoff to Lord Maybury, donate the blood money to the Great Temple, and vanish from the city forever.
  Disguised by Eve’s illusions as a chain-gang of slouching ogres, the party follows Grolnar to the back door of Lord Maybury’s opulent estate. The merchant’s nervous guards lead you into a stone dungeon and lock you in massive, wide-barred cages.
  To everyone’s relief, Grolnar takes his payment and flees into the night without snitching. Once the head guard leaves to inform his lordship, the lone sentry at the desk promptly falls asleep.
  Eve snaps her fingers, dissolving the disguises. Since the bars were designed for ogres, the adventurers simply step through the gaps. With a quick cantrip from Zot to release Gog, the party now has the drop on Maybury’s dungeon!`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `“You’re under arrest for slave trading, Lord Maybury,” says Deirdre, dragging the rather worse-for-wear nobleman to his feet.
  “And I would have gotten away with it, too, were it not for you meddlesome adventurers and your stupid pet rabbit.”
  From his perch on Zot’s shoulder, Pooky smiles, showing all his teeth. Lord Maybury immediately turns a lighter shade of pale.
  “Yeah, well, you didn’t,” says Deirdre. “Now tell us why you went through all the trouble of getting ogre slaves, anyway.”
  “I don’t know,” says Lord Maybury, with an indolent shrug.
  Gog grabs the nobleman by the shoulders and slams him up against the nearest wall. Several curios and knickknacks, which somehow survived the recent battle, rattle off their shelves and crash to the floor, shattering into tiny bits. “No lying! You buy ogres! You make them slaves! Now you talk to Gog!”
  “They’re not for me!” says Lord Maybury, thoroughly rattled now. “I bought them for someone else.”
  “Who?” shouts Deirdre.
  “I don’t know the name of my contact. I was just a middleman!”
  “Just a middleman?!” says Fiona. “We already met the middleman! How many middlemen are we even talking about here?”
  “Fiona. Gog.” says Zot, his hands folded into the sleeves of his robes. “It’s been a very long day, and while none of us are particularly overfond of Lord Maybury, at present, he is a pillar of the community.”
  “Yeah,” says Fiona, “a dirty and cracked pillar.”
  “Nevertheless, there are certain rules that must be adhered to, so I think we should take him over to the City Guard for processing.”
  Gog dumps Lord Maybury on the carpet and shoves him toward the door. “Okay! Gog not want get hands any more dirty with puny lord anyway!”

  After a very long wait in the lobby of the local City Guard chapterhouse, your party is finally discharged out into the brightening dawn of another Greyport morning. You were certain that the Guard, considering Lord Maybury’s position in the city, would have just slapped him on the wrist and let him go.
  Fortunately, you had more than enough evidence to get the nobleman taken into custody. The Guard is eager to keep his arrest as quiet as possible, both because of how important he is and because of the nature of the charges. They hope that they can use that moment of quiet, however brief, to track down more information on the true leader of the slave trading ring.
  “Job well done, everyone,” says Zot, squinting into the sun.
  “Yay, us,” says Fiona, yawning. “As a reward for our bravery and valor in battle, I award us with the coveted prize of…going the hell to bed!”
  “Praise the Goddess,” says Deirdre, gratefully.`,
      compact: `"You're under arrest, Lord Maybury," Deirdre declares, hauling the disheveled noble to his feet.
  "I would have gotten away with it, too," Maybury snarls, "if not for you meddlesome adventurers and your stupid rabbit!" Pooky grins, revealing a terrifying number of teeth, and Maybury blanches.
  Under a bit of "persuasion" from Gog, the nobleman cracks. "I don't know who I bought them for! I was just a middleman!"
  "Another middleman?!" Fiona shouts. "How many are there?"
  Zot intervenes before things get too violent, insisting they turn Maybury over to the City Guard. After a long night of processing at the chapterhouse, the guard takes the noble into custody, hoping the quiet arrest will lead them to the true mastermind.
  As they emerge into the brightening dawn, Zot commends the group on a job well done. Fiona just yawns. "As a reward for our bravery, I award us the prize of going the hell to bed!"
  "Praise the Goddess," Deirdre sighs in agreement.`,
    },
    reinforcements: [
      { title: 'Reinforcements 1', full: 'You hear a distant shout: “Guards! Intruders!” You’ll need to hurry to catch Lord Maybury before he can escape!' },
    ],
  },
  {
    number: 10,
    name: 'Chapter 10',
    prologue: {
      title: 'Prologue',
      full: `In between your recent harrowing adventures, Zot has been trying to get an appointment to see Chancellor Darvishon of the Mages’ Collegium to inform him of your disturbing discoveries about the presumed-fictitious Ancient Order of Mystics. Although Zot is a faculty member, Darvishon’s busy schedule means that getting a meeting takes rather longer than you expected. Eventually, however, he manages to convince the chancellor’s administrative assistant that, “it is important. No, really,” and soon you are all ushered into the chancellor’s office.
  In person, Darvishon is not much different from his portrait, which hangs in the main atrium of the Collegium. He is tall, slender, aquiline, regal, but with an air of benign and easy-going charm. His white hair is combed into a severe, but neat, widow’s peak, and his robes are, if possible, even more sumptuous and finely-decorated than Zot’s.
  He goes around the room shaking hands. His handshake is firm and welcoming. He looks each of you in the eye.
  “Professor Zot, a pleasure as always. And at last I meet your esteemed companions, who have saved this city more than once, if memory serves.” The chancellor sits down behind his highly-polished mahogany desk and favors you all with a smile of saturnine good will. “How may I assist you?”
  You leap from your chairs and begin talking all at once about the observatory, the Ancient Order of Mystics, the prisms, the slaves, the sea battle, Lord Maybury, and everything else about your recent adventures. Chancellor Darvishon pushes himself back into his chair, as if the force of your combined narrative has rooted him in place.
  Eventually, Zot notices that the chancellor appears just a touch overwhelmed.
  “Apologies, Chancellor Darvishon. It’s just that this is a matter of some urgency.”
  “Agreed,” says Chancellor Darvishon, his smile much thinner now. “How about you each take turns?”
  “I was just going to suggest that…” says Zot, as Pooky covers his little rabbit face with his little rabbit forepaws.
  You go back to the beginning, telling the story of your discovery that the Ancient Order of Mystics was not as much of a myth as everyone has been led to believe. You continue, describing your self-appointed mission out to the Collegium’s decommissioned observatory, and what you found there. By the time you get to the details about the prismatic constructs, the so-called Mana Forge, and what the mystics were planning to do with the goblin slaves, Darvishon is leaning forward, arms tented on his desk, a serious expression on his face.
  “This is very grave news,” he says, when you finish your story. “We had expected that there were a few opportunists and thieves helping themselves to the old observatory equipment—it’s not guarded, after all, and it’s too far away from the city for us to make regular checks on it—but this is appalling! To think that such dangerous and illegal magic was going on practically under our noses...”

  (Hours later, back at the Red Dragon Inn, Gerki will joke at the ironic timing of the explosion that occurred at precisely this moment.)

  The force of the explosion knocks several of Darvishon’s awards and diplomas off the walls, and rattles the glass in his office window. The chancellor rises, walking across his office as expertly as Captain Whitehawk would cross the deck of her ship as she sailed a storm-tossed sea. He stops at a small marble table tucked away in one of the corners of his office, upon which rests a large sphere of smoky white glass. As the tremors of the explosion subside, Darvishon passes his hand over the globe once, twice, three times. Though you can’t quite make it out, you can all see an image slowly resolve within the depths of the crystal.
  “Damn!” mutters Darvishon. “The Vault! It’s under attack!”
  “The mystics?” gasps Zot.
  Darvishon turns, his face grim. “It appears so, my friend.” He pauses, glancing down briefly at the carpet. “I don’t suppose you’d be willing...”
  “To stop the thieves?” asks Fiona, her blade already half drawn.
  “Yes,” says Darvishon. “And also make sure the students, faculty, and professors are all right. There’s no telling how much damage that explosion caused.”
  “To the Vault, everyone!” exclaims Zot.

  Let us not mince words: The Collegium Vault is a weird place. It exists only partially in the world and dimension inhabited by Greyport, with the rest of it being pushed into an artificial, pseudopodal, paradimensional pocket dimension created by some of the most powerful magics the Collegium faculty has ever wielded. To accurately describe the space and its exact dimensions would require far more pages and far more equations than can be managed in this brief volume.
  Suffice it to say that it is a vast room, bounded by walls of flickering and swirling magical energies and walls of rune-engraved stone alike. One of the stone walls has been blown open by an arcane explosion of disturbing power and disharmonic energies—so much so that the lingering magical radiance is still eating away at the stone wall, turning it into purple slime and causing it to run like water. Throughout the room, on levitating platforms, are stored innumerable books, scrolls, crystals, orbs, staves, wands, rods, rings, and other paraphernalia of the magical arts. These are intermixed with skulls of humans, dragons, and every being in between, strange pieces of furniture, astrolabes, trunks, alchemical equipment, and other objects that defy description.
  The mystics are already here, ransacking the place. Some of them are on the same level as you, while others have somehow reached the floating platforms above, digging through the piles of objects and causing delicate artifacts and rare spell components to rain down on the floor below.
  “I found one!” shouts one of the mystics, holding aloft a glowing sphere.
  “We need more!” shouts another. “And hurry, the Collegium’s forces will be here before long.”
  You know that you need to get up to the platforms, but you’re not sure how. You’re about to ask Darvishon for a little help—something in the way of a flight or levitate spell—when he points to a globe-shaped device near you. “These are teleport nodes. Touch that one!”
  Darvishon then drops into a typical battlecasting stance, touches another of the nodes himself and vanishes from sight.`,
      compact: `After weeks of waiting, Zot finally secures a meeting with Chancellor Darvishon, the regal and charming head of the Mages’ Collegium. The party piles into his opulent office, all talking at once about the Ancient Order of Mystics, the Mana Forge, and Lord Maybury’s slave-trading.
  Darvishon is appalled. "To think such illegal magic was happening under our noses..."
  His words are cut short by a massive explosion that rattles the office. Darvishon rushes to a smoky crystal ball, his face turning grim. "The Vault! It’s under attack!"
  The party doesn't hesitate. Fiona’s blade is out before the Chancellor can even ask for help.
  The Battle for the Vault
  The Collegium Vault is a surreal pocket dimension of floating platforms and rune-carved stone. One wall has been liquefied into purple slime by an arcane blast. Mystics are already everywhere, ransacking floating shelves and tossing priceless artifacts aside.
  "I found one!" a mystic shouts, clutching a glowing sphere.
  "We need more! Hurry!" another bellows.
  To reach the looters, Darvishon points to a series of glowing, globe-shaped teleport nodes. "Touch these!" he commands. The Chancellor strikes a battle-casting stance, taps a node, and vanishes. It’s time to take the fight to the platforms!`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `After a pitched and desperate battle, you have defeated the Ancient Order of Mystics, along with their allies and summoned elementals. You have also prevented them from making off with any of the magical items that they needed for the nefarious purposes they had planned.
  Shortly after the end of the battle, Collegium security personnel teleport into the Vault. You watch as they use their powerful spells to place the surviving rogue wizards into temporal stasis before informing Chancellor Darvishon that they will be taken to an anti-magic prison.
  “I just hope that it’s more secure than the Vault,” says Gerki, eyeing the still-growing hole Rewards in the chamber wall.
  Zot elbows him as Darvishon approaches you, all smiles and handshakes.
  “My friends! Very well done! Very well done, indeed! Thank you for helping to neutralize this threat to the Collegium, and to ensure the safety of the students, faculty, and staff.”
  “Of course, Chancellor Darvishon,” says Zot, trying to extricate his hand from the Chancellor’s grip. “We’re glad that we were on- site to help. Think nothing of it.”
  Darvishon releases Zot’s hand and steps back, giving you all an appraising look. “I’ve never been what you would call an ‘adventuring wizard,’ but I have heard tell of a little ritual that you adventurer types like to partake in following a successful escapade.” He smiles. “What say we all head down to the Red Dragon Inn? My treat!”
  You all offer your thanks to the chancellor and his generosity, and Fiona lifts her bloodied sword and cheers at the prospect of drinking at the Red Dragon.
  Gerki, for his part, looks up at the chancellor and winks. “I like the sound of that, though I think you’re going to regret treating us in, oh, say an hour or two.”
  Zot elbows Gerki again, but the plucky thief keeps right on grinning.`,
      compact: `The Battle for the Vault is over. The Mystics are defeated, their elemental allies banished, and the Collegium's artifacts secured. Security personnel quickly arrive, placing the rogue wizards into temporal stasis for transport to an anti-magic prison.
  "I just hope it’s more secure than the Vault," Gerki remarks, eyeing the melted hole in the wall.
  Zot elbows him as Chancellor Darvishon approaches, beaming with gratitude. "My friends! Well done indeed! You’ve saved the Collegium and everyone in it."
  The Chancellor gives the party an appraising look. "I’m not much of an adventurer, but I believe there's a ritual for this sort of thing. What say we head to the Red Dragon Inn? My treat!"
  Fiona cheers, hoisting her bloodied sword at the prospect of free ale. Gerki just winks at the Chancellor. "I like the sound of that, though you’re going to regret the 'my treat' part in about two hours."
  Zot elbows him again, but the party is already halfway to the door.`,
    },
  },
  {
    number: 11,
    name: 'Chapter 11',
    prologue: {
      title: 'Prologue',
      full: `The Runners have been run off. The Ancient Order of Mystics are now, once again, a myth for the ages, and your brave party of heroes gets to take a rare moment to rest on your laurels and drink yourselves silly. So, it is no surprise that you once again find yourself seated at your usual table in the Red Dragon Inn, swapping war stories, gambling, boozing, and punching one another’s shoulders just a bit too hard.
  Later on in the night, you look up and, through your good-time haze, see that three people have joined your festivities. You don’t know how long the tavern staff members Warthorn, Molly, and Roxana have been sitting with you, regarding you all with sly and knowing smiles, but it worries you.
  Gerki is the first to voice your concerns. “How did you all do that? I’m usually much better at spotting ambushes!”
  “S’not an ambush,” says Warthorn, still grinning into his beard.
  “The hell it isn’t,” says Gerki. “The three of you are clearly up to something, and you all know it.”
  Zot, who has been cleaning up yet another drink spilled by his overly-energetic familiar, looks up and regards Gerki with a quizzical frown. “Is it possible you’ve forgotten to pay your bar tab. Again?”
  “No way, no way,” says Gerki. “Warty and I are square! Isn’t that right?”
  Fiona slams her gauntleted fist down on the table, rattling both drinks and empties. “You’d better be, because there is no way I am getting dishpan hands working off another one of your tabs, Gerki!”
  Warthorn’s smile widens during this interchange, and his cheeks take on an even brighter reddish hue than normal. He raises his hands. “No, no, it’s nothin’ like that at all. The three of us have got a little somethin’ that the lot of you can help us with.”
  Roxana clears her throat. “That’s right! i’ve been experimenting with some new menu options out in the kitchen, you know, to liven things up for our regular clientele? I found this new recipe that I think is going to blow everyone’s boots right off, but I’m going to need some kwiiop fruit in order to cook it, and it doesn’t grow locally.”
  “What’s a kwiiop fruit?” asks Deirdre. Roxana cups her hands to form a rough sphere. “They’re about this big. Mostly purple, with white striations. Hard as a coconut, but when you crack ‘em open, they have the savoriest orange-yellow pulp you’ve ever tasted. So good!”
  She pauses to wipe her mouth with one hand before continuing. “Anyway, the only trees I know of grow in a faraway land, and even then, I’m not exactly sure how to get there from here. But since you’re adventurers, I figured…”
  Gerki leans back in his chair. “Look, we’d love to help. But gathering produce isn’t something we usually do. So maybe you could find a bunch of druids or rangers or...”
  Warthorn’s sharp cough cuts right through Gerki’s refusal. “That’s a maybe,” says the innkeeper. “But you all remember that yer owin’ me a favor, right? You can’t have forgotten already about the extensive basement renovations you all...surprised…me with?”
  “That was Wrench and Wizgille’s fault.” says Gerki. “We actually saved the inn from more damage, not to mention the Great Temple! Maybe you should be talking to them.”
  “They aren’t here. You are. And, since you’re all in the same party...” 
  Gerki starts to slide down in his chair, until only the top of his head is visible above the table. “No!”
  “We’d be happy to help,” says Zot, his voice carefully measured and emotionless, “but if you don’t know where we’re supposed to go to get this fruit for you, well, how can we go there and get it?”
  “That’s where I come in,” says Molly, her braids flapping as she jumps up from her chair. “It turns out that kwiiop fruit is one of the favorite foods of the dire chicken, and since I happen to have Brock in the stables now, and since he happens to be a dire chicken, I thought…”
  The rest of Gerki vanishes underneath the table. “Nope. Nope! Absolutely not! The last time I was anywhere near that thing, it thought I was a grub and tried to eat me!”
  “Don’t be mean!” Molly frowns. “He’s not a bad birdy, and he wasn’t trying to eat you. He’s just a little bit territorial, is all! Besides, you’d be doing him and his owner a favor taking him with you to get the kwiiop fruit! See, this is the time of year when poor Brocky should be going home to roost, but Sir Aubyn is upstairs in bed with a nasty case of the bird flu and...”
  “What?!” shouts Gerki, as everyone else backs away from Molly reflexively.
  The stablehand raises her hands in a reassuring gesture. “Oh! Sorry! Unrelated case! Brock is fine! Other than the fact he’s been cooped up in the stable when he should be going home, which has made him a little cranky, but…”
  Gerki’s head pops up. “The giant, territorial, giant, very hungry, giant dire chicken is angry now? Oh, that’s great! That’s just wonderful!”
  “He is a little,” continues Molly. “But he’ll be much happier once he gets outdoors. And, the kwiiop trees are near to where he usually roosts this time of year, so once he finds the trees for you, you can just let him go off on his own. He’ll come back to the Inn once he’s done… whatever he’s doing.”
  “Sounds perfect,” says Eve. “We can kill two birds with one stone that way.”
  Molly suddenly looks like she’s swallowed a bug. She turns very pale for a moment and says, “You could put it like that. Just…not in front of Brock. He won’t like it very much…”
  
  You head southward over the next few days, letting Brock run ahead to burn off some of his aggression, and ensuring that he stays far, far away from Gerki. The dire chicken is his typically peeved and stubborn self, but after a few days he begins to realize where he’s going and starts to become a bit more cheerful, if not any easier to manage.
  The temperature steadily rises and the air becomes increasingly humid as you continue south. Eventually, you crest a line of rolling hills and see a stand of trees growing in the valley on the other side. The trees all possess smooth, pale trunks with a tight cluster of leaves at the top. Half-hidden in the treetops are the strange kwiiop fruits that Roxana mentioned, hanging heavy and ripe from the branches. As you descend into the valley, your journey nearly over, one of them falls from its perch and hits the ground with a dull thunk.
  Brock, excited by the sound, clucks loudly as he races down the hill and into the trees. A moment later, his very sharp beak has fractured the shell of the fallen kwiiop fruit and he feasts on its innards in a noisy, messy way.
  “Great, we’re here,” says Gerki, passing out several large sacks. “Let’s split up, grab whatever fruit we can carry, and leave the chicken to do...whatever he’s gonna do.”
  At that moment, a loud, long howl splits the air. It is soon answered by a series of howls that echo up from the line of hills behind you.
  “What is that,” asks Gerki, craning his neck. “Wolves?”
  “Worse than that,” says Fiona, readying her weapons. “Shadow wolves. With fancy magical auras and everything.”
  “Seriously? Seriously?!?” Gerki buries his head in his hands. “I’d rather be washing dishes!”`,
      compact: `The party’s victory celebration at the Red Dragon Inn is cut short when Warthorn, Molly, and Roxana corner them with a "favor." Roxana needs exotic kwiiop fruit for a new recipe, and Warthorn reminds the group they still owe him for that "surprise basement renovation."
  The catch? The only guide is Brock, a giant, territorial dire chicken who once tried to eat Gerki. Brock needs to return to his ancestral roosting grounds—which just happen to be where the fruit grows.
  Days later, the group reaches a humid southern valley filled with pale trees and ripe, purple-and-white fruit. As Brock happily smashes a fallen kwiiop to feast on the pulp, a bone-chilling howl echoes through the hills.
  "Wolves?" Gerki asks hopefully.
  "Worse," Fiona says, unsheathing her sword. "Shadow wolves. Magical auras and everything."
  Gerki buries his face in his hands. "I’d rather be washing dishes!"`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `At long last, you manage to drive off the very persistent wildlife. With the cart and your individual carrying sacks as full as they are going to get, you bid Brock farewell and start your return journey to Greyport. Brock lets out a loud cock-a-doodle-doo, nuzzles each one of you in turn, and then spends a moment trying to eat Gerki’s hair, before he flaps off into the brush.
  “Good riddance,” says Gerki, with a smile and a wave. “I hope you fall in a vat of hot oil!”
  Deirdre steps up behind Gerki and tries to do…something…with his wet and matted hair.
  “That’s a little rude, don’t you think?” she asks.
  “I mean, it really seems like he likes you.”
  “Yeah, as an appetizer,” sniffs Gerki, waving off Deirdre’s maternal gesture with a bit of determined arm flailing.
  A loud crunching noise startles you and causes you all to turn around. You see Gog holding a cracked kwiiop fruit in one hand, its juices dripping between his fingers. As you watch, Gog brings the split-open fruit toward his large, tusked mouth.
  “Gog,” says Zot, very patiently. “What are you doing?”
  “Fighting animals work up Gog’s appetite,” says Gog. “Roxana said fruit is tasty, so Gog try some!”
  “You can have one,” says Zot. “But that’s all. We need to get all the rest of the fruit to Warthorn to pay off our debt, and we can’t do that if you eat them all.”
  “Okay, Zot,” says Gog, before tossing the fruit into his mouth. He devours it in cacophony of crunching noises, and his face steadily widens into a toothy, juicy smile. “Mmm! Brock and Roxana right! Fruit real good! Gog like.”
  “Pleased to hear it,” says Zot. “And that’s the only one you’re going to have, right?”
  Gog nods vigorously. “Mmmhmm!” 
  Your party continues its long journey northward, back to Greyport, stopping periodically to allow Gog to look over some distant landmark or to take a very distant rearguard to see if anyone nefarious is following you back to the city. Your return trip is uneventful, apart from the sharp crunching noises you occasionally hear. The only setback seems to be that, when you reach the inn, Gog’s sack looks empty.
  “Did you eat all of your fruit?” asks Zot with a sigh.
  “No!”
  “Gog,” says Zot, with the patience of someone who has asked wizards-in-training for their homework for the better part of two decades. “I think you did. Give me your sack.”
  “What sack?” says Gog, his voice muffled by a mouthful of burlap.`,
      compact: `After driving off the persistent shadow wolves, the party loads the cart with fruit and bids Brock farewell. The giant bird nuzzles everyone—except Gerki, whose hair it tries to eat—before flapping away.
  "Good riddance," Gerki grumbles, "I hope you find a vat of hot oil!"
  On the long trek back, the silence is punctuated by suspicious crunching noises. Every time Zot looks back, Gog is "distracted" by a landmark or "checking the rearguard." By the time the Red Dragon Inn is in sight, Gog’s sack appears suspiciously light.
  "Gog," Zot sighs with practiced teacher patience, "did you eat all your fruit?"
  "No!" Gog insists.
  "Then give me the sack."
  "What sack?" Gog asks, his voice muffled by the fact that he is currently chewing on the burlap itself.`,
    },
    reinforcements: [
      { title: 'Reinforcements 1', full: 'You almost have enough fruit to take back to Roxana, but a certain feasting dire chicken is greatly interfering with your plans. The lowhanging fruit is gone - literally - so you will have to work harder to get the rest of what you need!' },
    ],
  },
  {
    number: 12,
    name: 'Chapter 12',
    prologue: {
      title: 'Prologue',
      full: `Fiona interrupts what would be yet another lovely, carefree night at the Red Dragon Inn by running excitedly over to your table and slapping down a tattered piece of parchment amidst all the drinks.
  “By the gods!” she says, her eyes bright and lively. “We’re going to this!”
  Zot, very gingerly, slips the piece of parchment from beneath Fiona’s splayed palm and shows it to everyone. The parchment itself is a bit curled and weathered, and seems to have been hastily torn free from the nails that affixed it to one building or another. A crude woodcut, featuring several bare-chested warriors beating one another with cudgels, is surrounded by dense pickets of blocky letters.
  FARNSDAY! FARNSDAY! FARNSDAY! aT THE GREYPORT DWARVEN RUINS!
  THE RUMBLE IN THE RUINS!
  CHAMPIONS OF THE NORTHERN BARBARIAN CLANS DUKE IT OUT IN 1-V-1, 2-V-2, 4-V-4, CAGE MATCH, AND BATTLE ROYALE! PLUS CROWN PRINCE CORMAC’S EXHIBITION BOUT!
  8 GOLD PAYS FOR YOUR WHOLE SEAT, BUT YOU’LL ONLY NEED THE EDGE!
  “This looks barbaric,” says Zot, as he hands off the parchment to Fiona and wipes his fingertips on Pooky’s back fur.
  “It...literally is,” says Eve, pointing at the word “barbarian” on the parchment.
  “This looks awesome,” says Fiona. “And we are going!”
  “Gog go, too!” says Gog, banging the table so hard with his fists that he almost rattles the nails out of the boards. “Gog want to see Cormac!”
  “Yeah, that’d be good,” says Gerki, placing his mug of ale back on the now no longer vibrating table. “It’s been too long. I wonder if he’s gotten any more money in his adventures, and whether he’s gotten any better at cards...”
  “It would be a nice change of pace,” says Deirdre, as she flags down the Wench for another glass of elven wine. “I mean, I love the Red Dragon Inn, but I also like getting outside and taking in some culture.”
  “I don’t know that it quite counts as culture,” mutters Zot.
  “Oh, come on, you old fossil,” says Eve, “it’ll be fun.”
  “Not for me,” says Zot.
  “Is it wrong that you not having fun makes it more likely that I’ll have fun?” says Eve, with a wink.
  “Yes,” sighs Zot.

  The day is crisp and cool as your party follows a torch-lined path up the mountainside and into the dwarven ruins. Festive banners, animal skulls, and strange totems decorate your approach to the site of the festivities—partially- standing remnants of what is believed to have once been a great dwarven amphitheater. The stands are crowded with barbarians from the north, people from Greyport, a contingent from Copperforge, and random groups of out-of-towners, all of whom are amped up to witness the beatdown spectacular. Soon you are all in the stands, talking loudly over the cheering crowd, the barbarian drum circle that spontaneously started playing some time ago, and the explosions of fireworks let off by overzealous Collegium students.
  “This is going to be so, so good,” says Fiona, adjusting her newly-bought ale helmet on her head. She positions the downspout of the copper tube so that it is nearer to her mouth and gives it an experimental swig. “The people of the northlands are some of the best fighters around. You’re going to see a lot of really great technique today.”
  “You’ll have to explain it to me,” says Zot, who seems to be enjoying the spectacle despite himself. “One headlock looks very much like another when you’re a wizard.”
  Explosive firepots ignite to brilliance in the center of the amphitheater. A bronzed, muscular man with long, dark hair strides across the open space, light gleaming off of the gemstones set into the white, furry robe he wears. With all the noise, fire, smoke, and glittering gemstones, it takes you a moment to realize that the man is Cormac. He is accompanied by two phalanxes of well-muscled barbarians clad in furs, bones, and animal horn.
  “Gog see Cormac,” says Gog, as the crowd gets to its feet, cheering and hooting. “There Cormac! Hello, Cormac!” gog stuffs his hand into a contraption of rigid leather and sinew that he has been stitching together for the last couple of hours. It looks like a crudely-fashioned replica of a very large fist. Painted on the side is a stick figure with large circles for arm and leg muscles, as well as a smudge around its head that is almost recognizable as a barbarian-style haircut.
  Gog raises the leather fist into the sky and howls, “CORMAC! CORMAC! COOOOORMAAAC! HIIIIIIII!”
  The spectators in the rows in front of you are almost bowled over by the force of Gog’s exclamation. Some of them turn, annoyed, only to blanche at the sight of Gog and turn back around, resolutely staring face forward.
  Cormac seems to hear Gog’s bellowing, even above the general cacophony of the crowd. His mouth splits wide, revealing a smile of bright, even teeth. He flexes, gaining the adoration of the crowd, and points directly up at where you are sitting.
  “HE SEE GOG!”
  “Easy, big guy,” says Eve, gently tugging on Gog’s tunic. “We know.”
  Cormac and his honor guard parade in a circle around the boundary of the amphitheater before marching to the center and coming to a halt. Then, the barbarian prince places his fists on his hips, takes in a deep breath, and bellows loudly enough to be easily heard in the farthest seats.
  “Southerners, northerners! Soon you will behold such prowess of strength and fighting as has not been seen since the world arose from the depths of the seas and the dragons held all its people in their thrall. I pray that the mighty gods of the north and the soft gods of the south...”
  His slandering of the gods of Greyport is met with raucous boos from the home crowd. Deirdre, of course, boos the loudest of everyone, going so far as to stand up and shake her fist at Cormac, smiling all the while.
  “...shall be pleased by the prowess that is displayed today! But first, before our northern warriors take the field, it is customary for those that host us to exhibit their own mettle and martial prowess. It is my honor as prince of the united clans to ask for volunteers from the crowd, to come join me here upon the ancient dwarven sands and pit their skill against my corded muscles, mighty thews, and animal cunning.”
  The stands erupt with applause and cheers. Numerous spectators, who have evidently been waiting for this, either lift their hands into the air or leap bodily to their feet. The cries of, “pick me!” “I’ll fight you!” and “let’s do this!” echo through the crowd.
  Your party is not at all surprised that Fiona has not only stood up, but climbed up on Gog’s shoulders and has started waving her arms around and screaming. The ale sloshes out of her helmet, splattering foam and bitters everywhere.
  Zot, very calmly, places his head in his hands.
  “Cease your cries and resume your seats!” shouts Cormac, pointing up into the stands. “I have decided who shall face me in this exhibition battle. My friends and boon companions from the Red Dragon Inn, I see you there! Well do i know your bravery and fighting spirit. Come face me in honorable combat! Let us make these old mountains shake with the fury of our blows.”
  “YES!” screams Fiona. “YES! YES!”
  “No,” says Zot, though his voice is slightly muffled by his hands.
  “C’mon, Zot!” says Fiona, climbing down off Gog. “You know you want to.”
  “I really don’t,” says Zot.
  Pooky, however seems to have different intentions, and bares his numerous teeth at Zot in disagreement.
  But there is no further time for discussion. The crowd, realizing that Cormac has chosen you, begins to push and carry you all forward until you reach the floor of the amphitheater. Cormac crosses his massive arms, gives you all the once over, and lets out one thunderous laugh.
  “It is good to see you, my friends,” says Cormac, in a quieter voice that the crowd likely cannot hear. “Take a moment to limber up for the fight. And for the love of the northern gods, use the blunted weapons off the rack over there. We’re not trying to kill one another.”
  “Also,” says one bespectacled barbarian, who appears in your midst bearing a dripping quill and a sheaf of parchment. “Please sign these waivers before the beginning of the fight.”
  “So, what is this,” says Fiona, as you all sign the forms. “We gonna fight you one-on-one or do you just want us to mob you, king of the mountain style?”
  “Neither,” says Cormac, gesturing at the people in his honor guard. “Us versus you.” and with that, the barbarians charge you.`,
      compact: `Fiona starts a peaceful night at the Red Dragon Inn by slamming down a weathered flyer: THE RUMBLE IN THE RUINS. The barbarian clans are hosting a brutal tournament in the dwarven ruins, featuring Crown Prince Cormac’s exhibition bout. Zot calls it barbaric (Eve notes that’s the point), but Fiona, Deirdre, and a foam-finger-waving Gog insist on going.
  The ruins are packed with a rowdy, ale-soaked crowd. Cormac strides into the arena, glistening with gems and muscles. Spotting the party, he bellows a challenge: "My friends from the Red Dragon Inn! Come face me in honorable combat!"
  Before Zot can finish his polite refusal, the crowd surges, carrying the party onto the ancient sands. Fiona is ecstatic; Zot is miserable; Pooky is ready for blood.
  "Good to see you," Cormac grins, his voice dropping as a barbarian clerk rushes over with liability waivers. "Sign these. Use the blunted weapons—we're not trying to kill each other. Ready?"
  As the last signature is blotted, Cormac gestures to his elite honor guard. "It’s us versus you!"
  With a roar, the barbarians charge.`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `As the last of Cormac’s barbarian honor guard yields to your powerful, impressive, and very definitely non-lethal blows, the crowd and all the firepots around the amphitheater erupt. The din of cheering, shouting, and explosions make all previous outbursts seem, in comparison, like crickets on a field at night. You wonder if you will ever be able to hear normally again. 
  Amidst the cheers of the home crowd, a few of the barbarians in the stands wave their Cormac banners and boo you as loudly and as vigorously as they can. Some of the other barbarians, however, seem at least mildly impressed with your exhibitional display of tactics and physical might, favoring you with small smiles and head nods that are the currency of warriors across the world.
  Cormac levers himself to his feet. Bruised and a little bloodied, he walks over to each one of you, seizes your hand in his, and hoists it into the air. Each time, the crowd answers with another thunderclap of applause.
  You turn to leave the arena and return to your seats when, all of a sudden, Cormac’s honor guard hoists you onto the their shoulders and carries you in a circle around the sand-dusted fighting ground. Zot bears it with all the dignity he can muster. Fiona whoops and hollers. Gog, very graciously, offers to carry four members of the honor guard, instead, after their combined strength cannot lift him.
  You are paraded around to another crescendo of applause and cheering before being carried out toward the healers’ tents. As you leave, you can hear Cormac’s voice boom out across the ruins.
  “A stunning battle, my friends! Wouldn’t you agree?”
  After a dramatic pause for cheering, he adds. “WELL, THIS IS ONLY THE BEGINNING!”`,
      compact: `As the last of the honor guard yields to your (mostly) non-lethal blows, the ruins explode in a deafening roar of firepots and cheers. While some die-hard northern fans boo, many warriors offer the silent, respectful nods reserved for those who can hold their own against a Prince.
  Cormac, bruised but beaming, hauls himself up and hoists each of your hands in victory. The celebration doesn't stop there—the barbarians hoist the party onto their shoulders for a victory lap. Zot clings to his dignity, Fiona whoops at the crowd, and Gog ends up carrying four members of the guard himself after they fail to lift him.
  As you're paraded toward the healers' tents to patch up your scrapes, Cormac’s voice booms over the mountains one last time.
  “A stunning battle, my friends! But believe me... THIS IS ONLY THE BEGINNING!”`,
    },
  },
  {
    number: 13,
    name: 'Chapter 13',
    prologue: {
      title: 'Prologue',
      full: `“It doesn’t make any sense!” shouts Eve, banging down her mug.
  Gerki looks up from his cards and rolls his eyes. “We know, Eve. We’ve been over this.”
  Eve leans forward, her elbows on the scarred wood of the table. “But you agree with me, right Gerki? You’re a thief.”
  “Keep your voice down!”
  Eve’s voice shifts into a stage whisper. “You know that the Collegium Vault is one of the most well-protected places in Greyport, right? So how could a bunch of upstart wizards, who we thought were a myth until about two weeks ago, just waltz in there without any trouble?”
  Gerki places his cards face down on the table. “It is strange, sure, but people like you always think that vaults are impregnable, or that doors are impassible when they’re really not.”
  Zot takes a meditative sip from his glass of wine while Pooky, briefly unattended, starts nosing around the corners of Gerki’s face down cards. “He’s right. They also didn’t ‘waltz in,’ as you put it. They had very powerful, very specific spells that allowed them to breach the Vault’s defenses.”
  “That’s what I’m saying!” says Eve. “How did they know that they would need those particular spells? No one outside of the higher- ups in the Collegium would know that! Never mind that they were using the old observatory as their main base of operations and no one in the Collegium knew about it.”
  “It’s really remote, though,” says Gerki.
  “You walked out there. Would you want to go out there every couple of months and check up on it?”
  “Of course not!” Eve runs both hands through her perfectly coiffed hair, doing absolutely nothing to it. “It just…it’s bothering me, is all. It feels like there’s a big piece that we’re missing.”
  “We could always ask Lord Maybury,” says Fiona. “He said he was just a middle man. Maybe he can tell us if there’s some evil mastermind pulling the strings.”
  “That’s true,” says Deirdre. “He might want to talk to us, especially since we might be able to convince the guard to go easy on him.”
  “Or you could let me at him,” grins Fiona. “I like playing bad guard.”
  Eve nods. “Yeah. Yeah! Good plan. Let’s go.”
  “Hold on a second,” says Gerki, picking up his cards. “I’ve got a game to win first.” with a grin, Gerki hurls a pair of cards on the table, gesturing triumphantly. The rest of your party starts to giggle, and his face falls when he realizes that he’s thrown two rogue cards. He glances suspiciously from the rest of his hand over to Zot.
  “Gerki, do you even know how to play this game?” asks Zot, as he gently pats Pooky’s head.
  For someone whom you escorted to jail, Lord Maybury seems surprisingly happy to see you. It turns out that, though he has been permitted access to his lawyers, his business contacts, members of his family, and prominent members of the City Guard, the bureaucracy of Greyport is proving to be quite the troublesome thicket for him to navigate. Realizing that your party might be the metaphorical equivalent of a machete in a jungle, he’s thrilled to work with you.
  “We’ll talk to the magistrate,” says Deirdre, “but no promises.”
  “Hang on. We’ll talk to him if your information is good,” interjects Fiona.
  “No no, that’s fine. That’s fine. Completely reasonable,” says Lord Maybury, looking askance at the close, windowless, and dripping walls of his cell. “How about we schedule a meeting with my liaison. All I’ll need is for someone to convey a letter I write to a dead drop location. Then I’ll need to be released on my own recognizance to…”
  Gerki shakes his head. “What do you take us for, amateurs?”
  Lord Maybury sucks on his teeth and drums his fingertips on the cold, iron bars. “No, of course not. That would be silly of me, especially since you have me at a rather steep disadvantage. How about this? You can read the letter that I write and convey it to the dead drop yourself. You can also…erm…take me into temporary custody and chaperone me to the meeting place. How about that?”
  “If the City Guard allows it,” says Deirdre, “And if you keep your word, I don’t see why not.” fiona jabs a finger at the imprisoned noble. “And if you don’t keep your word, I’ll leave you alone with Gog for five minutes.” gog, who has folded himself up in a rather uncomfortable way to fit into the cramped holding area, shifts his weight, accidentally bangs his head against the ceiling, and snorts in irritation.
  “Certainly, certainly! Gods know I’m familiar with just how strong and angry ogres can be.”
  At that, Gog narrows his eyes and presents his tusks.
  “H…How about you get me a quill and some parchment?” says Lord Maybury, who is now staring at a particularly riveting crack on the ceiling.

  Gerki delivers the letter to the dead drop without incident. At the appointed time and the appointed place, you have Lord Maybury released into your custody, give him some time to clean up, and then follow him at a discreet distance to the meetup. About a half hour later, you and Lord Maybury arrive at a warehouse in one of the many out-of-the-way parts of the city.
  Lord Maybury goes on ahead, whistling loudly and holding a lantern, while your party secrets itself in the shadows. After a tense few minutes waiting in the dark and listening to his lordship overacting being casual, you hear the approach of booted footsteps from down a side corridor. Moments later, a cloaked and hooded figure steps into the outermost ring of Lord Maybury’s lantern light.
  “Thank you for seeing me,” says Lord Maybury with a gracious bow. “I know that I’m not supposed to contact you, but I have information…”
  “Yes, yes,” says the figure, his voice terse and nervous. “Give it to me quickly and then leave. If you and I were to be seen together, it would be disastrous!”
  “No, it can’t be!” shouts Zot. He steps out of the darkness, wreathed in flame, a look of dawning horror on his face. “I know that voice!”
  Eve steps out from the darkness on the far side of the chamber, holding a pale, glowing orb of magical energy. “I knew it! It all makes sense now!”
  “Lying turncoat coward!” shouts the figure, shaking an angry fist at Lord Maybury with one hand while tugging his hood free of his head with the other. “I should have known better than to trust your message. I should have burned you to cinders when I had the chance!” the rest of your party steps out to surround Lord Maybury and the figure whose face is now revealed for all of you to see. Your shock is palpable as you behold the curly hair, moustache, and round face of none other than Arben Longmont, Vice-Chancellor of the Collegium. His expression of cruel contempt is such a contrast to his usual benign and fatherly look that it takes a moment for you to react.
  “You’re...Drop your weapon...Wand!” stammers Fiona at last. “Whatever! Surrender now or…”
  A dart of magical energy flashes from Longmont’s hands, forcing you to take cover in the nearby warehouse. Longmont makes a mystical gesture, creating a wall of white-hot flames and closing the warehouse doors behind you.
  You hear a feral shriek and leathery wings. Multiple windows shatter as monstrous creatures burst into the building!`,
      compact: `The celebration at the Red Dragon Inn turned into a forensic debate as Eve’s sharp mind picked apart the gaps in the story. "How did the Mystics know exactly which spells to use for the Vault? How did they stay hidden in the observatory?" she pressed. "It feels like we’re missing a piece."
  The party decided to use Lord Maybury as their "machete" to cut through the mystery. Eager to escape his damp cell, Maybury offered a deal: he’d lead them to his contact if they escorted him.
  The plan worked—until it worked too well. After a cloak-and-dagger meeting at a secluded warehouse, the hooded figure stepped into the light.
  "I know that voice!" Zot cried, stepping out with his staff wreathed in flame.
  As the hood fell, the party froze in shock. It wasn't some shadowy cultist, but Arben Longmont, Vice-Chancellor of the Collegium. The fatherly mask had vanished, replaced by a sneer of pure malice. Before Fiona could even shout a coherent order to surrender, Longmont unleashed a flash of arcane power.
  A wall of white-hot fire slammed shut behind you, sealing the warehouse doors. Then came the sound that made your blood run cold: the shattering of glass and a feral, leathery shriek. Monstrous creatures are bursting through the high windows!`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `Your magical foes suddenly vanish. “Dammit,” shouts Eve. “He teleported!”
  “Can’t we teleport after him?” asks Fiona.
  Zot walks over to where Longmont had been standing, kneels down, and scrutinizes the area with a furrowed brow. “It’s not so simple as that, I’m afraid. There’s no telling where he’s gone.”
  “Gog know where this one go,” says Gog, dumping a terrified (and slightly scorched) Lord maybury on the floor in your midst.
  “I…I wasn’t leaving, I assure you,” says Lord Maybury, as he curls up into a tiny ball. “I was just getting out of the way, you know, so as not to impede you in the thick of battle.”
  “Gog saw you sneak out door!” roars Gog.
  “Honest mistake,” whimpers the quivering nobleman. “Please! I swear! Won’t happen again! I promise!”
  “You best believe it won’t,” says Fiona. “We’re bringing you right back to the guardhouse and locking you up again.”
  “And then,” says Zot, rising, “we need to have a chat with the Chancellor. He needs to know what Longmont is up to.”
  “Suits me just fine!” says Lord Maybury. “Yes! I am a bad person and I deserve to be in jail! Lock me back up!”

  You return Lord Maybury to the authorities and proceed directly from the guardhouse to Darvishon’s office. The Chancellor is deeply disturbed by what you tell him, and agrees with a very emphatic Eve that Longmont was likely the inside man providing the Ancient Order of Mystics with their base of operations and access to the Vault.
  He suggests that all of you go have a look at Longmont’s chambers, to see if you can find any clues. He awakens the Collegium custodian, instructs him to unlock the Vice-Chancellor’s door, and leads you all into Longmont’s living quarters.
  The rooms beyond are the picture of austere and boring, without any plants, curios, or other bric-a-brac to liven them up. About the only thing of interest is a freestanding, double- sided blackboard standing against the wall in Longmont’s preternaturally tidy study. Zot consults the runes and formulas drawn on the blackboard in yellow chalk before shaking his head.
  “It’s a new spell for making toast blander,” says Zot. “Not germane to our search at all.”
  “Well, no,” says Eve, approaching the chalkboard, “but how about...”
  She maneuvers the blackboard away from the wall, pulls its restraining pin, and flips the board around to the other side. Tacked to the back side of the board is a large, parchment map, with numerous notes, drawings, and incomprehensible scrolls of runic script tacked up in a messy ring around it. The requisite bits of red yarn are on display as well, interconnecting various points of interest on the numerous documents.
  The map depicts the Barren Wastes, an inhospitable and nearly circular desert located beyond the ridge of mountains west of Greyport. Someone, perhaps the Vice-Chancellor, has drawn and heavily-annotated several ley lines, which travel across the continent and converge both on Greyport and on something in the exact center of the Wastes. Peering at the convergence point in the desert reveals a drawing of a heart glowing with a magical radiance, while looking at the one on Greyport reveals a complicated and unpleasant-looking symbol.
  “This looks bad,” says Gerki.
  “It is,” says Deirdre. She points at the symbol drawn on top of Greyport. “That is one of the markings from the Obsidian Door... well, an alleged marking from the alleged door, anyway.”
  “The what?” says Eve.
  “The ancient portal woven by priests and wizards to seal off a rift that leads from this world to a world that’s a lot more unpleasant.”
  “Okay,” says Eve. “I’m in agreement. That’s bad.”
  “Look at this!” says Zot, tugging one of the rune-covered parchments from off the board and showing it around.
  Fiona obeys, screwing up her lip and scratching her head. “What is it?”
  “Oh,” says Zot, taking the parchment back. “Right. This is an old account suggesting that, quote, ‘the rumors of the monuments in the center of the Barren Wastes are true, and much treasure do they contain therein, as well as secrets most dreadful. Alas, there are strong protections about these monuments, too, and my guides are too fearful of the ancient traps and curses to bring me thither. There must be another way.’ Unquote.”
  Darvishon looks around the room, clearly dismayed. “It seems as though Longmont was interested in finding this lost grouping of monuments, as well as the location of the obsidian Door. But why?”
  “We find out, of course,” says Zot. “But first, we’ll need to do some research, and get some expert advice. Fortunately, we know an expert.”
  “Yeah,” says Gerki. “Me.”
  “No,” says Zot.
  “But...treasures! Lost cities! Traps! Zot. Buddy. I’m your guy!”
  “Not this time,” says Zot. “We need Keet.”`,
      compact: `Longmont vanished in a flash of magic, leaving the party with a terrified Lord Maybury. "Gog saw you sneak out!" the ogre roared, dumping the scorched noble onto the floor. Maybury, now fully cooperative in his cowardice, was hauled back to the Guard while the party rushed to inform Chancellor Darvishon of the Vice-Chancellor’s betrayal.
  Darvishon led them to Longmont’s austere chambers, where a search revealed nothing—until Eve flipped over a blackboard covered in "bland toast" spells. On the back was a conspiracy board of maps and red yarn centered on the Barren Wastes.
  Ley lines converged on a glowing heart in the desert and a dark symbol over Greyport. "That’s a mark of the Obsidian Door," Deirdre whispered, "the seal against a world of nightmares." Notes tucked into the map spoke of "secrets most dreadful" and monuments protected by curses that petrified the local guides.
  "Longmont is hunting the door," Zot concluded.
  "Treasures! Traps! I’m your guy!" Gerki shouted, already checking his lockpicks.
  "No," Zot replied firmly. "We need an archaeologist. We need Keet."`,
    },
    reinforcements: [
      { title: 'Longmont Appears!', full: 'With a wave of his hand, Longmont opens the magically-sealed door. “Idiots!” he snarls at his minions. “I’ll have to take care of this turncoat myself!”' },
    ],
  },
  {
    number: 14,
    name: 'Chapter 14',
    prologue: {
      title: 'Prologue',
      full: `The city of Copperforge hosts a Convocation that happens every year. Attendees arrive from all over the continent to trade in ideas, food, and goods. They wander the stalls set up all around Copperforge’s fairgrounds, looking over the latest advancements in magical and mundane technologies. It is, conveniently, something that your friend Keet religiously attends every single year. It is also, more conveniently, approximately in the direction of the Barren Wastes.
  Your party arrives in Copperforge early on the first morning of the Convocation and, after paying through the nose for single-day passes, wanders around the area near the town square looking for Keet. Accosted by vendors of every type and description, and briefly distracted by a group of kobold merchants squealing loudly about some noisy, steam-powered contraption they have made, you make your way closer to copperforge’s fountain and the heart of the Convocation.
  “Look!” shouts Gog, over the din. You see him holding up a kettle drum almost as big as he is. “Gog Adonis now!”
  “Yes, yes, very droll,” says Zot, pinching the bridge of his nose. “Don’t actually try to be Adonis, Gog, otherwise we’re going to have to pay for that.”
  “’Kay,” says Gog, a touch crestfallen as he gently sets the drum back down on the floor of its booth as a nervous-looking merchant looks on. “But Gog make funny, though.”
  “It was very funny,” says Deirdre, all smiles and reassurance.
  “Thank you!” says Gog, brightening. Fiona stands on tiptoes, peering over the heads of most of the other attendees as best as she can. “I don’t know how we’re going to find Keet in all these people,” she says.
  “I do,” replies Gerki, pointing up at a lavishly-painted sign. “‘Antiquities Avenue.’ Bet he’s in there!”
  “No bet,” says Fiona, leading the way.
  Antiquities Avenue provides something of an oasis from the hustle and bustle of the Convocation crowd. Here, small groups of wizards, scholars, and antiquarians cluster around displays of dusty tablets, dustier artifacts, and dust-producing mummified corpses. Awed by being in the presence of so much history, you almost don’t notice when a goblin in a snappy hat and a leather vest comes around the corner.
  “Hello!” says Keet, leaping forward eagerly to greet you. Much to the annoyance of the scattered scholars, Keet cups a hand to his mouth and shouts back the way he had come. “Hey! Lookit who I found!”
  You are soon joined by Nitrel, whose overstuffed sack of bombs has been peace- bonded for admission into the Convocation, and Zariah, who has a sleepy ferret draped over one of her shoulders.
  “Zee!” shouts Fiona. “It’s good to see you again! You still palling around with these two?”
  “I am, indeed,” says Zariah, brightly. “Keet and Nitrel sure know how to keep a mage’s life interesting.”
  After additional rounds of greetings and a bit of catching up, Zot comes straight to the point about why you’re all in Copperforge, asking Keet if he knows anything about the monuments in the center of the Barren Wastes.
  “As a matter of fact,” says Keet, “we were just out there a little while ago.”
  “Really?” says Zot, eyes wide. “What did you find?”
  “A lot,” says Keet. “And also not terribly much. Let’s go grab a bite to eat and we can talk about it.”

  A few moments later, you are seated at a table near the stalls of the Convocation’s food vendors.
  “So yeah, all those old rumors are true,” Keet begins. “There is a large collection of monuments in the center of the desert. We were within a stone’s throw of them, but we couldn’t get in. There was a force field around the entire complex.”
  “It was so frustrating!” says Nitrel. “I used all of my explosives at once! That should have been enough to penetrate the shield…but nothing happened. Not even a dent! I’m still mad about it!”
  “I suppose magic didn’t help either,” says Eve, sipping from the single most expensive cup of tea any of you have ever seen.
  Zariah shakes her head, causing Bandit to wriggle a bit in his sleep. “It didn’t. I called on my friend Basalt—she’s an earth elemental— and asked her to try to dig a tunnel under the force field. She couldn’t. She said the field isn’t a dome…it’s a sphere. It completely encases the site above and below. No holes or breaks anywhere.”
  Zot scratches at his beard. “What about…”
  “Teleportation?” asks Zariah, with a wry smile. When Zot nods, she says, “Good guess, but it didn’t work, either. Either there are specific spells in place that prevent movement magic, or there’s a magic-dampening field in effect in addition to the force field, which hampered me and my friends more generally. It’s hard to say without a lot more study.”
  “But it is out there,” says Zot.
  “Yeah,” says Keet. “We figured the place would keep, so we decided to attend the Convocation and see if we couldn’t get a line on some other...”
  “Attention, Convocation attendees!” says a disembodied voice—clearly the work of a distant wizard and their sound-amplification spell, “Please be advised that the area around the fountain is under attack by bandits.
  “We ask that you proceed in an orderly fashion away from the exhibition area and allow security to deal with the issue,” the disembodied voice continues, barely audible above the panicked screams of the crowd. “Also, please note that, due to this issue, Wizgille’s autograph session is being rescheduled from its current time slot to…”
  “Right,” says Fiona. “We’re gonna have to deal with these attackers!”
  “Yes,” says Gerki, “and at least one of us is going to have to stay here and protect the merchandise. I nominate me.”
  “No,” says Zot.`,
      compact: `The party tracked Keet to the Copperforge Convocation, a massive trade fair for magic and technology. After a brief detour involving Gog nearly breaking a kettle drum, they found the goblin archaeologist in "Antiquities Avenue" alongside his companions, Nitrel (the bomber) and Zariah (the summoner).
  Over expensive food-stall snacks, Keet confirmed the rumors: the monuments in the Barren Wastes are real, but currently impenetrable. "There’s a force field," Keet explained. "Nitrel blew up everything she had, Zariah tried tunneling with an earth elemental, and teleportation is a total wash. It's an airtight magical sphere."
  Their debrief was cut short by a booming, magically-amplified voice: "Attention! The fountain area is under attack by bandits!" As the crowd descended into a panic—and the announcer lamented the rescheduling of Wizgille’s autograph session—Fiona reached for her sword. "Attackers? We’re on it!"
  Gerki immediately volunteered to "stay behind and protect the merchandise," but Zot shut him down with a firm look. "No. We move."`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `“Bet you these weren’t really bandits,” says Fiona, sheathing her blade at last.
  “No bet,” says Gerki. “Bandits don’t usually have this many wizards along with them. And they usually pick up a lot more loot when they’re wading through a Convocation filled with magitech gizmos.”
  “And by ‘a lot more,’” says Eve, still holding her teacup. “You mean ‘any.’”
  “Yeah,” says Gerki, a quizzical look on his face. He points at the teacup. “How did you…”
  “I’m amazing,” says Eve. Then she takes a sip.
  “Why did you...?” asks Fiona.
  “It cost nine gold,” says Eve.
  Zariah and Nitrel come running up from the other side of the Convocation. Bandit (the ferret, not one of the folks you just fought), now awake and a touch skittish-looking, perches on Zariah’s shoulder.
  “Everyone got out safely,” says Zariah.
  “Good job,” says Zot. “How did you manage it?”
  Nitrel tosses an unlit bomb from hand to hand. “Had to clear a few stalls to accommodate the traffic, but it all worked out.”
  Deirdre presses her delicate fingertips to her temple. “That…I don’t know…that seems very reckless and unsafe to me.”
  Nitrel drops the bomb back in her bag and shrugs. “Maybe, but the important thing is that it worked. And if Copperforge has an issue with that, they can bill me.”`,
      compact: `The battle is over, and the "bandits" have been dealt with—though everyone is skeptical about their true identity.
  "Bandits don't usually bring a wizarding corps," Gerki noted, "and they usually bother to actually steal something."
  "Especially when wading through a sea of magitech gizmos," Eve added, miraculously still holding her nine-gold teacup. When Fiona asked why she’d bothered to save the drink during a lethal skirmish, Eve was blunt: "It cost nine gold. And I’m amazing."
  Zariah and Nitrel rejoined the group, reporting that the civilians were safe. Nitrel admitted she had to "clear a few stalls" with explosives to manage the crowd flow, a tactic that left Deirdre more than a little concerned about the local repair bill. Nitrel, however, remained unfazed: "If Copperforge has an issue, they can bill me."`,
    },
  },
  {
    number: 15,
    name: 'Chapter 15',
    prologue: {
      title: 'Prologue',
      full: `Keet, Nitrel, and Zariah ccompany you on your buying spree around Copperforge. You take their advice on what orts of equipment and supplies you will need to urvive an extended trek into the Barren Wastes. You also take the opportunity to ask them as any questions as you can think of about the uins at its center.
  Keet is most concerned that you will have nough water for your long journey. In the brief ime that you are with him, he says “buy another ater keg” at least as many times as Gerki has aid “let me check for traps” over the course of is entire career.
  At one point, Fiona buys two water kegs at he same time and shows them off to him.
  “Not bad, but you may want a backup,” says Keet, seemingly oblivious to the jest.
  Some time later, you, your horses, and our wagons - which are creaking beneath the eight of your accumulated water casks - are ssembled on the outskirts of Copperforge. Keet, Nitrel, and Zariah all take their turns iving you hugs and handshakes goodbye.
  “Best of luck to all of you,” says Keet. “If ou do manage to get in, try not to destroy verything. I’m sure there’s some priceless rchaeological finds out there just waiting to be atalogued.”
  “Yeah,” says Zariah, with a smile. “Besides, f you destroy it all, there won’t be anything left or Nitrel to blow up.”
  “It’s true!” shouts Nitrel, pantomiming  huge mushroom cloud with her hands. “KABOOOOSH!”
  With a final laugh, your party sets off for the Barren Wastes.

  Traversing the nigh-impassable mountains hat stand between Copperforge and the Barren Wastes, especially with all your extra baggage, s difficult, but you do eventually manage it. You decide to stop at the ruins of an abandoned aystation, built near the top of one of the eaks by dwarves from the long-lost kingdom f Dwarvenhold. You take a few minutes to rest our feet and drink away some of your excess eight.
  As you are about to resume your journey own the far side of the mountains to the border f the desert below, you hear an audible ticking oise from somewhere in the air around you. You all look to one another and around the rea, hands near your weapons, as the ticking oise grows steadily in volume before being nterrupted with a loud chiming noise.
  At the sound of the chimes a sparkling oorway opens in the air in front of you and Chronos the Time Mage steps out. You can tell y the neat wings of grey hair growing in at his emples that he is an instance of Chronos from he near, but not-too-distant, future.
  “Hello, everyone,” says Chronos, with a ave. “Sorry to interrupt.”
  “Did we break causality again?” asks Eve, “or is this a social call?”
  “Neither,” says Chronos, before looking lightly embarrassed. “Well. That is to say, you re my friends and I do like spending time with ou, even if that time is often...asynchronous.”
  “How can we help you?” says Zot. Chronos starts to look genuinely ncomfortable. He scratches at the back of his ead for a moment before saying, “Well, all ight. Causality isn’t broken, and the timeline s doing just fine from a temporal standpoint. Normally, I’d be the first one to tell you that e should just leave well enough alone and let ime continue its current course, but…things are oing to turn out very badly if we don’t intervene o change things.”
  “I don’t understand,” says Deirdre. “What’s oing to happen?”
  “I can’t tell you,” says Chronos.
  “Of course not,” says Gerki, rolling his yes. “Because if we know about the future… lah blah blah…destroy time as we know it… lah blah blah…win too much at gambling.”
  Chronos looks crestfallen. “Does that mean ou won’t help me?”
  “What?” says Gerki, grinning. “No, of ourse we will. Time travel adventures are reat! Especially when compared to being ooked alive in a burning desert!”
  The rest of your party agrees, and Chronos isibly brightens. “All right!” he says, beginning he magical spell to conjure a time door. “The ood news is that you’ve already intervened, ort of. I mean, kind of. It’s complicated. Never ind. Anyway, we have to go back in time to ave the Great Temple.”
  “But, Chronos,” says Deirdre. “We already id that!”
  “Erm,” says Chronos, as the swirling time oor opens before you. “Yes, but you wouldn’t ave done it if...um. It’s easier to show you than ell you. Come on!”

  You step through the time door into a damp nd fetid tunnel that, you assume, is somewhere n the labyrinth of Greyport’s Undercity. Quickly ecovering from the temporal displacement, you onjure your light spells and get your bearings.
  “All right,” Chronos says. “Now, here’s the hing. I’ve taken you back in time so that you an deal with…”
  “SLIMES!” yells Fiona, as her blade leaps rom her scabbard. You follow the razor-sharp oint of her sword to see an undulating mass of ulticolored slime a goodly distance down the allway, slowly dissolving the rock walls with heir digestive juices.
  “Let’s waste ‘em!” says Fiona. She starts to are off down the tunnel, but Chronos quickly, nd very bravely, steps in front of her.
  “You can’t kill them!” says Chronos. “I ean, you can, but that’s not really what you’re ere for, and if you do it too much, you’ll ruin he timeline for sure!”
  Fiona gestures helplessly at the slime with er sword and pouts. “But…”
  “All right, I’ll bite,” says Eve, surveying the cene with her arms crossed. “What do we do?”
  “I can’t give too many details right now,” ays Chronos, “but I can tell you that you need o herd these slimes to a certain area over that ay.”
  He points down the opposite side of the unnel, which rapidly disappears into darkness.
  “Do the slimes know they’re meant to be erded?” asks Deirdre.
  Chronos looks a touch anxious. “Well…no. So please be very careful.”`,
      compact: `After a water-buying spree that would satisfy a desert-dwelling army, you bid farewell to Keet, Nitrel, and Zariah. Your wagons, creaking under the weight of endless casks, barely made it over the mountains. But just as the Barren Wastes came into view, the air began to tick.
  With a loud chime, a slightly older version of Chronos the Time Mage stepped through a sparkling portal. He looked worried. Though the timeline was technically intact, he warned of a future so grim he had to intervene. "We have to go back in time to save the Great Temple," he insisted.
  "But we already did that!" Deirdre pointed out.
  "It’s complicated," Chronos sighed, ushering you through the door.
  You emerged in the damp, fetid tunnels of Greyport’s Undercity. Fiona’s sword was out in a flash as she spotted a mass of multicolored, wall-dissolving slimes undulating toward you.
  "Let's waste 'em!" she cheered.
  "No!" Chronos jumped in front of her. "You can't kill them! If you do, you'll ruin the timeline. You have to... well, you have to herd them." He pointed into the dark, opposite tunnel. "That way. And please, be careful—they don't know they're being moved."`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `“All right!” says chronos, “that’s far enough. Sorry about the mess and the being evasive and everything, but everyone did a fantastic job. We can head back now.”
  Relieved and exhausted, you follow Chronos toward his time door, leaving the giant slime in its new home. Some smaller slime stragglers are left, but they become markedly less hostile as you move away. They undulate peacefully, slowly dissolving the passageway’s walls, floor and ceiling.
  A moment later, Fiona intercepts Chronos and brings your party to a halt.
  “Chronos, buddy,” she says. “We’ve been really patient and did everything you told us to do. So, what was this all about?”
  “Well,” says Chronos, glancing up at a point on the ceiling. “You see, the thing of it is… it’s actually very interesting…Uh…”
  Chronos seems to be very relieved to be interrupted by someone shouting somewhere above you. It is hard to make out words through the thick stone of the ceiling, but you do catch something that sounds like “gold-durned heck,” and something else that sounds like, “whirl-a- gigs and foolery.”
  “Wait,” says Eve. “That sounds like warthorn. Does that mean we’re right under…”
  At that moment, the section of the ceiling that the slimes have just started dining on collapses with an ear-splitting crash. As the dust settles, you see light streaming in through the fresh hole of the ceiling, as well as several familiar-looking silhouettes peering down into rewards the tunnel.
  “Come on!” Chronos whispers, “before you see you!”
  You retreat a fair distance before daring a look back. You see that the slimes are flowing up the walls, through the hole, and into the basement of the Red Dragon Inn. You hear your own distant voices as your past selves prepare for battle.
  Chronos lets out a sigh of relief. “Your past selves didn’t see you. That’s good. You don’t even want to know the kind of causality paradox that causes.”
  “Great,” says Fiona. “Now would you mind telling us…”
  “Let’s go back to your present first,” says chronos, hustling you all through the time door. “I’ll explain everything then.”

  Moments (actually weeks) later, you are back at the waystation atop the mountains. Despite his repeated promises, Chronos still seems reluctant to tell you what all of this was about. His resolve swiftly withers beneath your repeated and insistent questions, however.
  Finally, with a hanging head and a nervous cough, Chronos explains, “I needed to alter the timeline just enough so that, in the past, you would stumble upon the slimes, start investigating the Undercity, and, ultimately, put a stop to the mysterious crab man’s plan to destroy the Great Temple. I realized that if I took you back to a certain tunnel and had you nudge the slimes in a certain direction, they’d eat their way into the Red Dragon Inn at just the right moment for you to discover them. Past you, I mean.”
  “We understand,” says Zot.
  “We think,” says Eve.
  “And thank you for helping us help ourselves to save the Great Temple,” says Deirdre.
  “You’re welcome!” Chronos is now all smiles and relief. “It was very important to save the Great Temple—it’s one of the most important buildings in Greyport, the center of four of the major faiths, and a pillar of the community in times of crisis. And, considering what’s coming, you’re going to need all the divine help you can…”
  He stops abruptly, and looks like he’s just swallowed his tongue.
  “Chronos,” says Deirdre, her voice very level, very patient. “What did you mean by that?”
  “Oh my, look at the time!” says the time mage. “Listen! The important thing for you to focus on is what you’re doing right now. It is absolutely critical that you succeed on this adventure.”
  “Why?” says Deirdre. “What’s going to happen, Chronos?”
  “It’s just that…” he gasps, pointing behind you. “By Shalni! It’s the Lich King!”
  You whip around to face your dreaded enemy, your weapons at the ready. By the time you realize that you have been duped and spin back around, Chronos has already vanished into the timestream.`,
      compact: `After a messy session of slime-herding, you watched the ceiling collapse to reveal the basement of the Red Dragon Inn. Through the dust, you heard the distant, familiar voices of your past selves.
  "Quickly, before you see you!" Chronos hissed, ushering you back through the time door.
  Weeks later (but only a moment for you), you were back at the mountain waystation. Under a barrage of questions, Chronos finally folded. He confessed that he’d set the whole thing up: the slimes had to eat through that specific ceiling at that specific moment so your past selves would investigate the Undercity and stop the Crab Man from destroying the Great Temple.
  "You're going to need all the divine help you can get for what's coming," he added, before turning pale.
  "What's coming, Chronos?" Deirdre asked, her voice dangerously calm.
  "Look! The Lich King!" Chronos shrieked, pointing behind you.
  By the time you realized there wasn't a skeleton in sight and spun back around, the time mage had vanished, leaving only a fading shimmer in the air and a very ominous feeling in your gut.`,
    },
    reinforcements: [
      { title: 'Reinforcements 1', full: 'Just as you think you have the endless slimes under control, some stragglers appear!' },
    ],
  },
  {
    number: 16,
    name: 'Chapter 16',
    prologue: {
      title: 'Prologue',
      full: `It takes your party, and your substantial train of wagons, the better part of a day to descend into the far foothills of the western mountains. From there, it is another few hours’ journey over dry and sparsely-vegetated hill lands until you at last reach the relative flatness of the Barren Wastes. Even though the sun is setting on the distant horizon, the day’s heat still radiates from the arid expanse before you.
  Zot, not sweating at all despite still being dressed in his velvet robes, suggests that everyone rest and drink water. “We’ll start crossing once the sun is down.”
  “Keet say desert get cold at night,” says gog, as he takes a large, lumpy sweater out of his backpack. “Gog not get it, but Gog dress warm anyway.”
  “Where did you get that sweater, Gog?” asks Eve, eyebrow raised.
  “Gog have sweater a long time,” says Gog, holding out the sweater as he favors you with a tusked smile. On closer inspection, you can see that it has clearly been knitted with love. “Mom make for Gog!”
  You hydrate, make necessary changes to your attire, and prepare to set out across the hard-packed earth once the sun is merely a glowing memory behind the horizon. Armed with a copy of Vice-Chancellor Longmont’s map, various direction-finding spells, and your knowledge of the stars, you expect that you should reach the center of the Barren Wastes… eventually.
  The moon is soon high in the sky, its light reflecting brilliantly off the desert hardpan beneath your feet. The whole desert takes on the look of a vast, wintry plane, and you can see for miles in every direction.
  “By the goddess,” Deirdre says in a reverent voice. “Isn’t this lovely?”
  “It is,” says Gerki. “Much rather do this than have our brains cooked out of our heads in the daytime.”
  “True,” says Zot. “If coarsely put. Also, we should make sure that we have set up our first camp well before the sun is up, otherwise…”
  “Hang on,” says Fiona, pointing northwesterly across the desert. “What’s that?”
  Off in the distance, you can see that something has kicked up a substantial cloud of dust. The dust hangs thick and heavy in the air, almost like a cloud that has come to earth. As you watch it, still unsure of what it is, shouts and screams begin drifting across the Barren Wastes toward you.
  “A battle!” says Fiona. “At least, I think it is! We should check it out!”
  “Or it could be a bunch of people being scoured to death in a dust storm,” says Eve.
  “In which case,” says Deirdre, meeting Eve’s eye. “We should help.”
  Eve shrugs. “Yeah, sure we should. We should just take care not to get scoured ourselves, is what I’m saying.” you make haste toward the commotion. As you approach, the clash and clang of metal, as well as the desperate shouts and the terrified whinnies of horses grows clearer. Amidst the noise, you can also hear other sounds that you cannot quite identify—harsh grinding noises that echo through the thin desert air.
  You are almost within bowshot of the great dust cloud when a horse and rider emerge from it, racing at great speed in your general direction. The horse is scared out of its wits, its eyes wide and white, its sides covered with a thick lather. Its rider is a woman waving a broken sword. She is covered in dust, and is bleeding freely from two puncture wounds on her shoulder. Her eyes are almost as wild as her horse’s, but when they focus briefly on you, some vestige of intelligence reasserts itself over her panic.
  “Thank the gods!” she cries. “You have to help us! The golems! They’re trying to kill us!” you have many questions, but there will be time to ask them when the battle is done. You plunge headlong into the swirling dust cloud, your weapons at the ready. You cast various light spells to give an almost daytime level of brightness to the area, revealing huge lumbering stone figures, their bodies grinding and scraping. They have encircled a small band of wounded and overwhelmed human travelers, loading them onto the back of a massive, brutal scorpion.
  One golem turns its nearly featureless face to you and swings wide with its glowing stone staff. A silent command ripples across the sand, launching the scorpion into action and causing the sand to shift. You can immediately sense that in addition to the foes you can see, there is something else beneath you!`,
      compact: `As the moon turns the desert floor into a shimmering wintry plane, your trek across the Barren Wastes is interrupted by the sounds of battle and grinding stone. After encountering a panicked, wounded rider, you dive into a choking cloud of dust to find a scene of mechanical horror.
  Stone golems, their joints shrieking with the sound of grinding rock, are rounding up travelers and loading them onto the back of a monstrous, chitinous scorpion. These aren't just mindless guardians; they move with a cold, synchronized purpose.
  As you reveal the scene with your light spells, a golem swings a glowing stone staff in a wide arc, signaling your arrival. The massive scorpion skitters forward, but your feet catch on shifting ground. A low vibration thrums through the soles of your boots—there is a predator beneath the sand, and it’s moving faster than the giants above.`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `The last of the foes crumbles, and you escort the four people you rescued—along with their mounts—back to your wagons. Deirdre tends to their wounds while Gog gets them each a cup of water.
  The two women and two men are all quite young, just barely out of their teens, and seem to be poorly equipped for a journey across the desert. They are all sunburned—one of them quite badly—and seem to be suffering from mild dehydration. They are lightly armed and armored, kitted out with simple blades, bucklers, cut-down leather jacks, and armor pieces cobbled together from small sheets of rusty chain mail. The most sunburned of them, a man with red hair and pale eyes, wears no armor and carries no weapon, but does have a class ring from the Collegium adorning one finger.
  Once they’ve had a chance to rest and drink, you start to pepper them with questions.
  Pherry, the dark-haired, olive-skinned woman who rode her horse out of the dust storm as you arrived, is the most talkative of the group. “Thank you for the water,” she says, breathlessly, pausing just long enough to wipe her damp lips on a crusty sleeve. “And for the help! We really bit off more than we could chew coming out here.”
  “It’s true,” says the red-headed man, who introduces himself as Thamart. “We started across the desert three days ago and got lost almost immediately.”
  When you explain how close you are to the eastern border of the Barren Wastes, Thamart blushes. At least, you think he does. It’s hard to tell with the sunburn. “Like I said, we were really lost.”
  “And we didn’t have nearly enough supplies,” grumbles Artin, a slender man dressed impractically in likely-ineffective armor, whose goatee has grown in patchy and irregular. He glowers at the fourth member of their band and says, “Should’ve brought more water, for starters.”
  Gog pours more water into the quartet’s cups. “Gog say you drink more!”
  “I figured three skins for each of us would be enough,” says Runa, the other woman, her rusty chainmail armor clinking as she jabs a finger at Artin. “Besides, you’re the one who said you were good at tracking and pathfinding and all that nonsense.”
  “Look, I’m sorry,” says Artin. “I didn’t realize that navigating a desert would be different from navigating a forest. There’s no landmarks, for one.”
  “You can see to the horizon,” shouts Runa, as Thamart stifles a laugh. “I thought that would make it easier.”
  As the foursome falls to name-calling and bickering, Gerki nudges Fiona with an elbow. “Now who do these youngsters remind you of?”
  “Two wet-behind-their-ears dumb kids from the Undercity,” says Fiona, smiling.
  Zot nods, his stern expression lightening. “Honestly, how the two of you managed to survive for so long before Deirdre and I met up with you is beyond me.”
  “I know!” Fiona keeps on smiling. “Wow, this really takes me back. Ha!”
  “People, please,” says Pherry, waving her hands to get the attention of everyone in her group. “I can’t stand this anymore. We’ve been at one another’s throats ever since we got into this damnable desert, and all it’s done has nearly gotten us killed. Can we please just… back off?”
  Thamart agrees with a good-natured nod. Under Pherry’s watchful eye, Runa and Artin grudgingly shake hands.
  “Anyway,” says Pherry, turning towards you and taking another sip from her cup. “We thought we were done for, but earlier today, we stumbled upon an oasis. A real one. We watered the horses and were in the process of filling our skins when these monsters showed up and started waving their staffs at us. We tried to negotiate with them, but they just came after us. The rest you know.”
  “Well, we don’t know everything,” says Eve. “For example, why are you in the desert in the first place?”
  Runa extracts a faded piece of vellum from inside of her tattered armor and holds it out to you. On it is inscribed a very familiar map. “Pherry won this in a hand of cards from an Estradian merchant. The merchant said that right out here,” She taps the inscription in the center of the map, “is a set of old ruins that are chock full of treasure. We were hoping to get our hands on some and, you know, start to make a name for ourselves.”
  Runa seems to notice something in your expressions and shoves the vellum map back inside her armor. “What are you doing out here?”
  You exchange looks with one another. Finally, Zot says. “It appears that we are going to the same place, though our purpose for going out there is to investigate some magical anomalies that we’ve been hearing about.”
  “Hey,” says Pherry, looking tentative. “If you’re going to the same place we’re going, do you want to…”
  “Team up?” shouts an enthusiastic Fiona. “Sure, why not? The more the merrier, right? besides, you kids look like you’re just starting out on your adventuring careers, and we’d be more than happy to show you the ropes.”
  Eve mouths something that looks like, “We would?”
  Zot shrugs, but Deirdre smiles at Fiona with approval.
  “That’s great,” says Pherry, shaking Fiona’s hand. “Thank you. Thank you all!”`,
      compact: `After rescuing the quartet of "aspiring heroes"—Pherry, Thamart, Artin, and Runa—it’s clear they are essentially the younger, less prepared mirrors of your own party. Between the sunburns, the empty water skins, and the fact that they got lost in a place where you can see for miles, it’s a miracle they survived at all.
  "Three skins of water!" Runa snapped at Artin, who defended his poor navigation by blaming the lack of trees.
  Gerki nudged Fiona, whispering, "Now who do these youngsters remind you of?" Fiona laughed, admitting they were just like her and Gerki back in the Undercity days.
  Pherry explained that they were hunting treasure based on a map she won in a card game—a map that looks suspiciously like Vice-Chancellor Longmont’s. When Fiona enthusiastically agreed to team up and "show them the ropes," Eve looked skeptical, but Zot and Deirdre gave in to the nostalgia of helping a new generation of adventurers.
  "Thank you!" Pherry said, beaming. "With you lot helping us, I think we might actually make it to those ruins in one piece."`,
    },
  },
  {
    number: 17,
    name: 'Chapter 17',
    prologue: {
      title: 'Prologue',
      full: `The nights of travel slowly bleed into one another, becoming one long, unbroken, trudge across the empty desert expanse. You are filthy, exhausted, and slightly thirsty all the time. Were you not determined to find out what Vice chancellor Longmont and his minions want with the old monuments in the desert’s center, you would have turned back long ago.
  The one joy on your journey is your new adventuring companions. Though they sometimes annoy you with their bickering, or with their, frankly, grandiose plans for the treasure that none of you are sure even exists yet, their spirits remain unbowed. They are, as you suspected, a new party of fresh-faced adventurers on their first adventure, and they are having just the best time ever.
  Thamart, the Collegium grad, discusses magical theory and old professors with Zot and eve. Runa and Pherry sometimes talk about combat strategy and tactics, but mostly just try to gross one another out by describing the nastiest battle wounds they’ve ever seen. Artin mostly keeps the hood up on his black cloak and tries to look menacing, but even his brooding, “dangerous loner in the darkest corner of the tavern” persona is no match for the twin efforts of Deirdre’s charm and Gog’s friendliness. Soon, Artin is telling them bits and pieces of his perfectly ordinary pre-adventurer life as a server in a small tavern.

  The moon is but a sliver in the sky now, making your nightly march a dark and dreary one. You are almost relieved when you begin to catch the faint ruddy glow of the rising sun on the eastern horizon.
  “Hey,” says Gerki, pointing ahead of your group and a bit off to the left. “I don’t want to get anyone’s hopes up or anything, but is that a mirage, or…”
  Eve shades her eyes with her hand and peers off into the distance. “No! It’s not a mirage!” she shouts, in a voice that, for once, possesses more excited optimism than sardonic sarcasm. “It’s real! We’re here! I think we’re here!”
  You are too excited to keep to your normal routine of setting up a daytime camp. Fortifying yourselves with a deep belt of water, you move as quickly as you can across the open desert toward your destination. The sun is a hand’s span above the horizon—and the desert already blisteringly warm—by the time you reach your goal, but still you press on. The novice adventurers are hard pressed to keep up with you.
  Ahead of you, the wind scarred monoliths of a lost and vanished age rise out of the hard- packed desert sands. Stone structures are arranged in a rough, rectangular shape around what must have once been a grand plaza or parade area. Free-standing stones, obelisks, and pillars bear the names and deeds of a people long since vanished into time’s deep abyss.
  At least, that’s what you assume the hieroglyphs say. They could contain recipes for flatbread, for all you know.
  Beyond the plaza, towering over the other structures, is a massive pyramid constructed of pale stone. The pyramid gleams in the morning sunshine, cowing you with both its brilliance and its physical presence.
  “All right,” says Thamart, conjuring up a basic light spell, “Let’s check out that pyramid!”
  “Good idea,” replies Pherry. “C’mon gang, let’s get at that treasure!”
  You watch, bemused, as the quartet of young adventurers race toward the ancient monuments. As they speed ahead of you, you all remember, almost at the same time, the key feature of this group of monuments.
  “Wait!” you all cry. “Stop!”
  It’s too late. The adventurers, buoyed up by the promise of exploring ancient ruins and leaving with heaps of treasure, run full tilt into the invisible shield protecting the pyramid. A tremendous bonging noise fills the air as the four of them bounce off, toppling in a messy tangle of arms and legs onto the ground.
  Fiona gestures at Deirdre. “You may want to…”
  But Deirdre is already raising up her holy symbol. “I’m on it.”

  You set up camp a stone’s throw from the magical barrier. While most of you nap, Zot and eve set to work analyzing the magical barrier and casting information-gathering spells in its general direction. Eventually, they reach a conclusion about what they’ve found.
  “There is a way to collapse it,” says Zot. “We think.”
  “You think?” asks Gerki.
  “Yes,” says Zot. “In layman’s terms, either eve or I will have to attune ourselves to the barrier and match its intrinsic frequency with our own magical power. Once we can match the frequency, we will be able to overwhelm the barrier’s defensive capabilities and bring it down.”
  “Those were layman’s terms?” says Fiona.
  “Not really,” says Eve, glancing at Zot out of the corners of her eyes. “It’s more like, ‘one of us make barrier go boom.’ But while we’re doing that, that’s all we’re going to be doing until it drops. And we’ve also discovered that trying to destroy the barrier will activate some secondary defenses.”
  Artin’s brooding demeanor fades away. He looks around nervously. “Secondary defenses? what are those?”
  “Unknown at this time,” says Zot. “But I surmise that they are likely summoned monsters or elementals of some sort. I’d imagine that beasts of this type are well outside your areas of experience,” he continues, looking over the quartet of adventurers. “Best that you stay well back, just in case.”
  “No arguments here,” says Artin.
  “Now then,” says Eve. “The only thing we have to do now is to decide which of us is going to be bringing down the barrier. Then we wait for the explosions. Or monsters. Or whatever.”

  You arrange yourself in a small group near the barrier. You are well-watered, with weapons in hand, and ready for action. As you watch and wait, you hear rhythmic magical chanting floating up into the air behind you.
  A beam of energy lances out of the sky, striking the barrier and illuminating it with a pearlescent glow. Portions of the barrier begin to flicker in and out of existence as you watch. Small holes appear near the peak of the magical dome, slowly widening and spreading as you look on.
  Hidden doors on the pyramid grind open slowly on sand-clogged mechanisms, letting forth a deluge of monstrous beasts into the ruined plaza. The creatures look up at the slowly-collapsing dome before directing their attention—and their rage—at the group of you arrayed outside the barrier. Letting out loud, bestial calls, they advance upon you, talons raised.
  The creatures phase effortlessly through the barrier and into the plaza. You shout your battle cries as they engage you.`,
      compact: ``,
    },
    epilogue: {
      title: 'Epilogue',
      full: `As the last of the obelisks falls, so too does the barrier. A moment later, the scintillating column of energy winks out of existence, leaving the pyramid before you open and undefended.
  As the defenders disperse, the novice adventurers rush out from their hiding places, hooting and cheering.
  “That was amazing!” says Pherry, rushing to Fiona and pantomiming sword blows. “You were all like ha! And ha! And eat this! It was great!”
  “A really impressive display of battle and ritual magic,” says Thamart, shaking Zot and Eve’s hands. “Really impressive. I could probably write a very compelling monograph on all the types of sorceries employed!”
  “Thank the Four Gods we ran into you,” says Runa. “We wouldn’t have been able to get in there without your help. Or avoid being killed.”
  Artin offers up a rare smile and nods, curtly.
  “Nice,” is all he says.
  “Yeah, yeah,” says Gerki. “We know we’re great.”
  Gerki pauses dramatically, before smiling and rubbing his hands together. “Now, who wants to go loot the monuments and tombs of a long-dead civilization and grab literally everything that’s not nailed down?”
  The four young adventurers, as well as gerki, Gog, and Fiona, enthusiastically shoot their hands up into the air.`,
      compact: `The desert heat is forgotten as you stand before the towering, pale pyramid. The shimmering heat distortion is nothing compared to the literal shimmer of the Ancient Aegis—the spherical force field Keet warned you about.
  After patching up the bruised egos (and foreheads) of Pherry’s crew, Zot and Eve identified the solution: a Harmonic Overload. By matching the magical resonance of the shield, one of them can shatter it. However, as the shield begins to ripple like water under their chant, the "secondary defenses" make their grand entrance.
  From the pyramid's base, massive stone slabs grind open, releasing Guardian Chimera and Sand-Stalkers—beasts of jagged obsidian and shifting dunes that ignore the barrier as if it were mere mist.`,
    },
  },
  {
    number: 18,
    name: 'Chapter 18',
    prologue: {
      title: 'Prologue',
      full: `Despite your new companions’ initial excitement, their footsteps slow and they grow increasingly nervous as you approach the massive, sun-seared pyramid. The remnants of a clay brick roadway lead up to the base, but despite that, there seems to be no way in at ground level. You circumnavigate the base, pausing briefly to drink water while Gerki checks out some promising-looking stones for signs of a hidden lever or secret catch.
  “Nothing,” he grunts, at last. “Either the way in is really well hidden, or it’s not on this level.”
  “Where then?” asks Zot.
  Gerki gestures at the steep side of the pyramid, and the layers of tall, barely-climbable stones that gradually diminish in size as they rise toward the top. “Let’s try going up.”
  “Ugh,” says Fiona. “Are you sure? This is starting to seem like work.”
  “It’s either that or we start digging,” says gerki. “And since that sounds even more like work...”
  “Got it.” Fiona hoists herself up on top of the first layer of stone blocks. “Let’s give it a try.”
  “Even if we don’t find anything,” says deirdre, smiling, “I’m sure the view from up top will be beautiful.”
  “We’ll be able to see even more of the barren Wastes,” says Eve. “Hooray.”

  After an exhausting, and sometimes harrowing, climb, you and the novice adventurers manage to heave your way up to the next-to-last layer of the great pyramid. Ahead of and above you is the topmost layer, a square of carefully-hewn stones that is both shorter than the rest and far too small for all of you to stand on comfortably. In the center of the square sits a bronze disc about three feet in diameter. Its tarnished and abraded surface is decorated with the bas-relief carving of a heart.
  “This looks promising,” says Zot, a little out of breath, as Pooky hops off his shoulder and sniffs at the carving.
  “Yeah, agreed,” says Gerki, before climbing up to the top of the pyramid and giving both it and the disc a thorough looking over. “It’s clean. Gog, do you mind?”
  “Gog not mind,” says Gog, joining Gerki with a mighty, half-ogrish bound. “Gog like to pick up things!”
  The rest of you watch, the sun beating down, as Gog bends, seizes the disc around its edges, and lifts. Even his prodigious strength is barely enough to shift the three-inch thick disc out of the hole. Grunting and straining, Gog slides the disc along the stones, revealing a deep, dark hole.
  Gerki pokes his head in. “Big chamber. No ladder though. Or stairs. Or, you know, walls that we could reach. How do you suppose we’re gonna get down there?” He looks up at Zot. “You learn the flight spell yet?”
  Zot strokes his beard pensively. “No. I could teleport us all, but first...”
  He turns to face the novice adventurers, a gleam in his eye and a professorial lilt to his voice. “As we all know, casting magical spells requires an expenditure of energy. Since we don’t know what’s inside the pyramid, it would be prudent for me to save my magical strength. Taking that into account, is there anything else that we could do to gain entry into the pyramid?”
  “Well,” says Pherry, slinging her pack off her back. “I have fifty feet of rope. Will that help?”
  “Yes, very good,” says Zot. “Now you’re thinking!”
  “It won’t help that much?” says Gerki. “The pyramid is a lot taller than…”
  “I also have fifty feet of rope,” says Thamart, reaching into his knapsack.
  “Me, too,” says Runa, before casting a significant, stony-eyed glare at Artin.
  “I do, too,” he says, with a huff. “Plus, I’m pretty good with knots.”
  “All right,” says Gerki, “two hundred feet should just about do it. Now, if only we had…”
  Zot smiles as Pherry, unprompted, pulls ten iron spikes and a small hammer out of her pack.
  “Very good,” says Zot. “We’ll make professionals of you yet!”

  After a tense few minutes of waiting, Gerki shouts up to you.
  “Come on down. Just don’t leave the general area when you do. I haven’t checked the rest of the room for traps yet.”
  One by one, the rest of you brave the length of knotted-together ropes, descending into the body of the pyramid. After an uneventful trip—other than several rope burns—you and your new companions find yourself in a large, cool, trapezoidal chamber, dimly lit by sunlight streaming in through the hole far above you.
  Eve, Zot, and Thamart all conjure light spells, driving back the gloom even further and allowing you to see the pyramid’s main chamber. Even after countless delves into dungeons, tombs, crypts, catacombs, and labyrinths, the sight that greets your eyes takes your collective breaths away.
  The walls are decorated with hieroglyphs, cartouches, and faded murals. Most of the murals depict graceful, dark-skinned elves, dressed in veils and flowing robes, enacting scenes of daily life. Some pilot long boats across an azure lake. Others harvest wheat in vast fields. Still others seem to be reading scrolls in an ornate pavilion.
  On the floor around you are several massive stone statues in the form of elven soldiers. The statues are adorned with gold leaf, inset with precious stones, and feature ample inlays of silver and bronze.
  “This is so great,” says Pherry, who is practically vibrating. “We’ve never tomb raided before. I’m so excited!”
  “Take it easy,” says Gerki. “We’ll loot the room once I check for tra…”
  *click*
  In the cavernous chamber, the echoing click of an activated pressure plate causes you all to freeze in place. Your blood runs cold in your veins as hidden machinery grinds to life behind the chamber’s walls. Your eyes dart around the room, until they finally land on Artin, who had moved slightly away from your group toward one of the statues. The normally dour-looking novice adventurer now looks particularly young and extremely terrified. This probably has a great deal to do with the fact that a well-hidden section of the floor has depressed ever so slightly beneath the weight of his right foot.
  “Oh,” says Artin, his voice a quavering whisper. “I didn’t mean…”
  “GET DOWN!” shouts Gerki.
  You all hit the deck as a volley of several dozen javelins, fired from hidden launchers, flash across the room. You wince as the javelins crash into the opposite walls, as well as the statues all around you.
  “Good timing,” says Fiona as she rises to her feet.
  “S…sorry,” whimpers Artin.
  The rest of you join Fiona, looking around the room for further signs of danger. The smoking, now-exposed holes of the launchers, as well as the numerous javelins, have done significant damage to the once-pristine walls of the chamber.
  As you take stock of your situation, you hear a distant skittering noise that steadily becomes louder.
  “That’s not me this time,” shouts Artin, from his hiding place behind a statue, “I promise!”
  From below the statues come torrents of blue-black scarab beetles, their mandibles hissing and clacking. The smaller ones aren’t much of a threat, but several gigantic ones approach you menacingly. While you are distracted by the wave of insects, you barely even notice that some of the statues are now stepping down from their pedestals.
  “This bad,” says Gog, cracking his massive knuckles. The novice adventurers run toward you to try to get into a defensive formation. Unfortunately, thamart clumsily steps on another pressure plate. He trips forward onto his face right before a gout of bluish-purple lightning cooks the stone upon which he previously stood. As Thamart rises, he realizes that he has two scarab beetles squirming around in his hair. His screams echo around the room as he swats them off.
  Eve raises her staff and turns to Gog. “No. This worse.”`,
      compact: `After an exhausting climb, you reached the pyramid's summit and discovered a bronze disc carved with a heart. Gog heaved it aside, revealing a dark drop into the depths.
  Zot seized the moment for a "teaching opportunity," leading the novice adventurers to combine their rope and spikes into a 200-foot lifeline. One by one, you descended into a breathtaking chamber filled with elven murals and gold-adorned statues.
  "We’ve never tomb raided before!" Pherry chirped. "I’m so excited!"
  "Take it easy," Gerki warned. "I need to check for tra—"
  Click.
  Artin’s foot depressed a hidden plate. A volley of javelins hissed through the air, followed by a distant, ominous skittering. Suddenly, blue-black scarab beetles flooded the floor, mandibles clacking.
  As the party prepared for the swarm, Thamart stumbled onto a second plate. A gout of purple lightning scorched the air where he’d just been standing, and the massive stone statues began to step down from their pedestals with a heavy, grinding thud.
  "This bad," Gog muttered, cracking his knuckles.
  Eve raised her staff as the novices panicked. "No," she corrected. "This is worse."`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `The statues have been destroyed and the scarab beetles have all— you hope—been squashed beneath your boots and weaponry. Moving carefully, under the assumption that it is distantly possible that you haven’t yet triggered all of the traps in this room, you and the group of novice adventurers gather together. Fiona gives the rather harrowed- looking novices a pep talk while Deirdre mends wounds and Gerki scrapes poison off of the initial volley of javelins into a metal flask.
  “That was a mess,” says Runa, hugging herself. “I was sure we were going to die here.”
  “Nah,” says Fiona. “Not a chance. You all did great. Really great. You hung together, fought like a team…”
  “Yeah we did!” says Pherry, high-fiving fiona.
  “And you found all the traps,” says Gerki, looking slightly annoyed.
  Artin, his surly demeanor returning now that he’s no longer fighting for his life, leans up against one of the pedestals that formerly held a statue and crosses his arms. “Yeah, and I found something else, too. A couple of things, as a matter of fact.”
  “Oh?” asks Deirdre, mid-heal.
  In the face of Deirdre’s earnest interest, artin’s persona crumples a bit. He scratches the back of his head. “Y…yeah. There’s a secret door, I think, over in that wall. And I noticed that one of these pedestals had a staircase underneath it. Over there.”
  Spurred on by this information, the rest of you move to investigate. You soon find that there is, indeed, a secret door hidden on one wall. You are unable to find a mechanism to open it. Fortunately, Zot is able to unlock it with a magic spell before Gog takes matters into his own prodigious hands. Inside is what can only be called an embarrassment of riches— enough gold, jewels, silver, precious gems, art objects, and ancient religious relics to make even Keet turn green (well, more green) with excitement. Gerki gives the pile of treasure a thorough looking over before turning the novice adventurers loose on it.
  “We get a share, too,” he says, stepping deftly out of the way as they converge upon the treasure. To the rest of you, he says quietly, “Lots of really nice stuff. No heart, though.”
  “I think it’s this way. Look,” says Fiona, waving you over to the pedestal Artin pointed out.
  As the surly young rogue noticed, a flight of well-trodden steps leads down into a gloomy tunnel that runs beneath the pyramid. Fiona points out several carvings on the pedestal. They include depictions of an elven woman clad in regal splendor, scarab beetles, scorpions, and, most notably, a stylized heart.
  “I do believe you’re right,” says Zot. “It appears that we must continue downward to find that which we seek.”
  Gerki looks back and sees that the quartet of young adventurers are still going ga-ga over the treasure. Thamart and Runa are already adorned in necklaces, rings, and ancient crowns.
  “Hey, kids!” says Gerki. “You look great wearing all that stuff that you found inside of a long-lost and likely cursed tomb! We’re gonna explore this staircase.”
  “Uh...” says Pherry, as a double handful of ancient treasures topples out of Artin’s hands to clatter noisily on the floor.
  “Stay out of trouble, okay?” says Gerki, as your party descends into the depths of the earth.`,
      compact: `The statues lie in rubble and the last of the scarabs have been crushed. While Fiona gives the shaken novices a pep talk and Deirdre mends their scrapes, Artin—regaining his surly confidence—points out two discoveries: a secret door in the wall and a hidden staircase beneath a pedestal.
  Behind the secret door, the party finds a literal mountain of gold, jewels, and ancient relics. It's enough to make a dragon blush. While the novices dive into the pile like kids in a candy store, Gerki pulls the veterans aside. "Plenty of loot," he whispers, "but no heart."
  Fiona waves everyone over to the pedestal. Carved into the stone are images of a regal elven queen and that same stylized heart symbol. A dark staircase leads even deeper into the earth.
  "Hey, kids!" Gerki calls out to the novices, who are currently draping themselves in cursed-looking necklaces and crowns. "You look lovely in your tomb-jewelry. We’re heading down. Stay out of trouble, okay?"
  The four of them are too busy counting gold to do much more than wave a distracted goodbye. Leaving your apprentices to their spoils, your party descends into the cool, silent dark beneath the pyramid.`,
    },
    reinforcements: [
      { title: 'Reinforcements 1', full: 'Fortunately, the mechanical grinding noise coming from behind the walls finally stops. Unfortunately, more defenders spring forth to put a stop to your tomb raiding!' },
    ],
  },
  {
    number: 19,
    name: 'Chapter 19',
    prologue: {
      title: 'Prologue',
      full: `The stairs from the pyramid’s entrance chamber deposit you in a room that opens out into a maze of twisty little passages, all alike. Mazes certainly aren’t high on your list of “most favorite places to have adventures.” Realizing that you could easily become lost beneath this already-lost pyramid, your party gathers together at the base of the stairwell and talks options.
  “All right,” says Gerki, counting off the potential hazards on his fingers. “pit traps, swinging blade traps, pit traps with spikes… um…”
  “Illusion hallways,” says Eve, helpfully. “And disorienting magic at passageway junctions.”
  “Ugh,” says Fiona. “I hope not.”
  “Me, too,” says Eve. “And don’t even get me started on the zones that teleport us from one place in the maze to an identical looking place in the maze…”
  “Or the low-magic version,” says Zot. “the ‘spinning room.’”
  “They make Gog sick!” says Gog.
  “Here’s my thought,” says Gerki. “We keep in a group. We always have eyes on one another. Whenever we need to choose which direction we go, we always follow the left wall. It’ll be slow going, but we’re sure to eventually get to where we need to go without having to go in too many circles.”
  “All right,” says Fiona, hefting her blade. “You go first, Gerki. I’ll cover you.”
  “Just like old times,” says Gerki with a gap- toothed grin, before leading you into the maze.
  The next hour or so is as ponderous as being in a giant, featureless, sandstone labyrinth usually is—and this one doesn’t even feature any interesting carvings on the walls to break up the monotony. You follow Gerki leftward, ever leftward, discovering dead end after dead end and switchback after switchback. The typical defenses, however, are lacking—presumably, whoever built the pyramid was expecting that the entry chamber would feature sufficient dangers to either obliterate or drive off the typical team of relic-grubbing archaeologists.
  You, however, are more skilled at relic- grubbing than the typical team of archaeologists.

  “Another dead end,” says Gerki. “Keep following the left wall and we’ll be alright.”
  You all groan as you turn left, hugging the wall so that Fiona and Gerki can pass by you to the front.
  “Ow,” says Eve. “Those are my toes, Gog. Again.”
  “Gog sorry!”
  “It’s okay. I just need to buy better boots.”
  You resume following Gerki at a cautious pace, back the way that you came. You reach the most recent junction and turn left—again— following the new tunnel deeper into the maze.
  “Oho!” says Gerki from up ahead. “Check this out!”
  The rest of you emerge into a small, trapezoidally-shaped chamber, with no other exits apart from a set of stairs that leads down into even deeper darkness. Gerki takes a long moment to peer down the steps as you crowd into the room behind him. It’s a tight fit, even before Gog tries to enter.
  “Is this where we want to go?” asks Deirdre, hunching over to better accommodate your half- ogre companion.
  “If we’re lucky, yes,” says Gerki. “If we’re not, whatever’s down there is bound to be a trap of some kind.”
  “Sounds like a lovely diversion in any case,” says Eve. “What are we waiting for?”

  The stairs descend in a long, slow spiral, going far deeper into the earth than you initially expected. It is cold down here, so much so that drops of moisture have formed on the walls of the staircase, shining like tiny jewels beneath your magical illumination.
  As you continue downward, you notice a soft, subtle glow of amber light that grows in brightness as you approach. You can also hear a soft, but constant rasping noise, that sounds like someone dragging a chainmail shirt along a block of sandstone.
  The room at the bottom of the stairs is damp and far more ancient than even the monuments above you. Enchanted spheres of glowing glass float near the ceiling, bathing the room in a soft light. The light shines upon brilliantly-colored frescoes that decorate the walls. In their time, they must have been truly magnificent, but the neglect of many ages and the constant action of the water has caused much of them to flake and peel from the walls, dropping piles of curled paint chips on the floor. Yet another staircase leads downward.
  “Defilers!” booms a voice, echoing all around you. “Interlopers!”
  Instinctively, your party drops into a defensive ring, weapons at the ready. The rasping noise, now accompanied by the all-too familiar skittering sound of scarab beetles on the move, rises in volume as shadowy figures loom in the near darkness beyond the doorways.
  “Through this doorway,” shouts Gerki. “Quick! Before they surround us!”
  As you flee through the door, the rattling clanks of long-dormant machinery resounds in the air above you. A portcullis wrought of stone and heavy bronze slams down behind you, while another blocks the way ahead of you.
  The voice booms again. “How dare you defile this most sacred of places with your presence? None of you is worthy to stand in the presence of the Protector!”
  A swarm of scarab beetles floods the room, crawling up the walls and the bars of the portcullis. Behind them come several scorpions that are as large as horses, their stingers gleaming wetly with potent venom.
  Last come a group of stone mages, their rough-hewn faces truly nightmarish in the chamber’s amber light.
  “You will fall here, interlopers!” booms one of the mages. “Your bones shall decorate the protector’s crypt!”`,
      compact: `The maze was a tedious trudge of "left turns only," dead ends, and Gog accidentally crushing Eve's toes. But the monotony shattered when you descended a spiraling, moisture-slicked staircase into a truly ancient sub-level.
  Amber light from floating glass spheres reveals flaking frescoes and the unmistakable, rhythmic rasp of metal on stone. Then, the chamber erupts.
  "Defilers! Interlopers!" a voice booms, echoing through the damp air.
  Before you can orient yourselves, stone portcullises slam down, trapping your party in a killing jar. A tide of scarab beetles pours through the bars, followed by scorpions the size of warhorses and a coven of Stone Mages with faces like jagged rock.
  "None are worthy to stand before the Protector!" the lead mage roars, raising a hand to command the stone. "Your bones shall decorate the crypt!"`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `After a desperate battle, you manage to cut down the mages and their scorpion minions and rout the few surviving scarab beetles. The large door ahead of you opens. Through it, the scarabs skitter away from you into the deepening darkness of the underground complex, polished shells twinkling in the light.
  “Follow those scarabs!” shouts Zot.
  “What?” asks Fiona, looking puzzled as pooky leaps off of Zot’s shoulder and hops after the retreating scarabs. “Why?”
  “Because I think someone, or something, summoned them to attack us, and I have a feeling that the survivors are retreating to report their failure to their master.”
  “That makes about as much sense as anything else in here does,” says Eve. “I say we follow the professor.”
  As you race after the scarab beetles, Gog bends his head down low, toward Deirdre.
  “Deirdre hear stone wizards talk?”
  “Um, yes?” says Deirdre. After a long pause, she adds. “They said a lot of things, Gog. What specifically were you talking about?”
  “Talk about Protector! What that mean?!”
  “I’m afraid I don’t know,” says Deirdre. “And I’m also afraid that we’re about to find out…”
  “Deirdre no be afraid. Gog protect Deirdre from Protector.” Gog smashes one massive fist into one massive open hand for emphasis. “Gog protect all friends from Protector!”`,
      compact: `The mages and giant scorpions are finally broken, their stone bodies shattered and their venomous stingers stilled. As the heavy doors ahead grind open, the surviving scarab beetles skitter away, their shells glinting in the gloom.
  "Follow those scarabs!" Zot commands, as Pooky leaps from his shoulder to lead the chase.
  "Why?" Fiona asks, wiping ichor from her blade.
  "Because they’re retreating to their master," Zot explains. "We follow the failure back to its source."
  As the party races deeper into the complex, Gog leans toward Deirdre. "Deirdre hear stone wizards talk? Talk about 'Protector.' What that mean?"
  "I don't know, Gog," she replies, her hand tightening on her holy symbol. "But I’m afraid we’re about to find out."`,
    },
  },
  {
    number: 20,
    name: 'Chapter 20',
    prologue: {
      title: 'Prologue',
      full: `Just when you think you can’t go any deeper beneath the desert, your party descends one final, dust-covered stairway and exits out into a subterranean room of truly massive size. Numerous fire pots give the room a warm glow, illuminating a stunning mural on one wall depicting elves locked in battle with demons.
  Across the chamber from you stands a hut- sized golden pyramid, its smooth sides reflecting the light brilliantly. In front of the pyramid is a tall obelisk-like structure. Hovering just above the obelisk’s point, shrouded in magical energies, a glowing heart beats, as if alive.
  You are not the first to have penetrated this deeply into the labyrinth beneath the great desert pyramid, for the room is littered with the bones of former adventurers. Rusted armor and other equipment lay in loose piles around the bodies, and, judging by their condition, they were of no help whatsoever to their original owners.
  A slender golden doorway opens in the base of the pyramid and, through it, more light pours into the chamber. A moment later, a shadowed figure stands revealed in the light, walking out of the pyramid with a slow and regal grace. As the figure enters the chamber, you can see that she is an elf. Her brown skin is as hard and tight as stretched leather on her face, and her limbs are thickly swaddled with ancient linen bandages. Upon her head, the figure wears a strange, cylindrical blue headdress, accented in gold and weighty with jewels.
  You are all overcome by her innate majesty, by her ancient grace, by the aura of power that radiates palpably from her thin and desiccated form. Unable to seize the initiative, you watch, open-mouthed, as she crosses the chamber to stand between you and the obelisk.
  “Well,” says the elven woman, at last. “What do you want?”
  After a long, tense moment, Zot strides forward. “We are here for the Heart of the protector.”
  The woman throws back her head and laughs. Impressively, her headdress remains firmly seated upon her head. “Very honest and straightforward of you,” she says, “but also very, very foolish.”
  She gestures gleefully around the chamber, pointing out the choicest piles of corpses. “I have protected the Heart for thousands of years. None who have come to seize it, whether for power or glory, has ever come close to winning it from me. You will fall as the rest of them have fallen, poisoned and picked clean by my insectoid minions, becoming tomb decorations for eternity.”
  “And arachnoid,” offers Zot.
  “What?”
  “Zot!” hisses Eve.
  “Scarabs are insects. Scorpions are arach...”
  “I have existed for thousands of years. Mine is the deep lore of eons!” says the elf. “Well do I know the difference between insects and arachnids! Spare me your tedious lessons on taxonomy!”
  “Then be more precise,” mutters Zot.
  “He can’t help it,” says Deirdre, with a mollifying smile. “He’s a professor.”
  “And I am Amundyr the Cursed!”
  “Hello!” says Gog, with a wave, as everyone else readies their weapons.
  Amundyr raises her hands, and baleful magical flames erupt from her fingertips. “I will not be lectured by mortals, especially not by mortals who would dare to take the treasure that was entrusted to me ages ago!
  “Now, intruders,” shouts Amundyr, “like countless others before you, like countless others who will come after you. You. Shall. FALL!”
  A chorus of skittering and scuttling noises issues from the doorways behind Amundyr. You run toward the obelisk, trying to close the distance between you and the ancient elf. Before you can reach her, two portcullises slam shut, blocking your way as Amundyr’s insectoid - and arachnoid - minions attack.`,
      compact: `You’ve reached the bedrock of the world. In this massive, fire-lit vault, the Heart of the Protector pulses above a golden obelisk, casting a rhythmic red glow over the bleached bones of those who failed before you.
  Then, she emerges: Amundyr the Cursed. A mummy of regal elven grace, swaddled in ancient linen and crowned with a jewel-encrusted headdress. Her presence is a physical weight, ancient and suffocating.
  "What do you want?" she asks, her voice like dry parchment.
  Zot, ever the academic, manages to turn a life-or-death confrontation into a faculty meeting. When Amundyr threatens them with "insectoid minions," Zot can't resist a correction. "And arachnoid," he mutters, sparking a heated debate on taxonomy with a thousand-year-old lich-queen.
  "I will not be lectured by mortals!" Amundyr shrieks, her patience finally snapping. "You. Shall. FALL!"
  With a wave of her bandaged arms, portcullises slam down, separating you from the Heart. From the shadows behind her, the true swarm arrives: thousands of hissing scarabs and scorpions the size of wagons.`,
    },
    partTwo: {
      title: 'Part 2',
      full: `Though her minions fall efore your attacks, Amundyr herself seems as ale and as dangerous as she was at the start of he battle. Shrugging off your strongest attacks nd spells with mocking laughter, she continues o direct her surviving minions and her eldritch nergies against you.
  “You have done better than most, fools,” she aughs. “But you will not prevail! I am already ead, and can neither weaken nor tire, while our soft, living flesh already flags with exertion nd injury. I control the ancestral magics of the ncient…”
  An interesting sight causes your party to une out Amundyr’s villainous monologue. Out f the corners of your eyes, you see, to your orror, that the party of novice adventurers ave come into the chamber via one of the ther passageways. As one, you resolve to trenuously ignore the other adventuring party, eeping Amundyr and her minions busy while he quartet sneaks across the room to the base f the obelisk.
  Amundyr continues to cheerfully throw ave after wave of her minions and magic into ou, unaware that anything amiss is going on ehind her until Artin, after a desperate shimmy p the side of the obelisk, takes the Heart of the Protector from its perch.
  “NO!” shrieks Amundyr, wheeling to face he obelisk. “NO! NO!”
  Her cries so startle Artin that he topples off he top of the obelisk, bobbling the Heart from and to hand as he plummets to the floor. Pherry nd Runa move quickly, rushing to catch their alling comrade and the obscenely important nd valuable treasure before either can strike he chamber floor.
  Howling with rage, Amundyr fires waves f necrotic, purple-black energy from her ingertips. You are relieved, and, frankly, urprised, that Thamart manages to raise a orce field strong enough to repel the elvish haraoh’s magical fury.
  “Kill them, my children!” screams Amundyr. “Kill them all!”
  You push forward, eager to defend the young dventurers from Amundyr’s deadly wrath. The ovices gather themselves together and hustle ack the way they came, the Heart clutched rotectively between them. As they flee back oward the surface, you muster what strength nd energy you have left and face your foes.
  The flames in the fire pots suddenly change rom a warm orange to a cold blue, matching  sudden change of temperature in the room. Amundyr herself begins glowing with a sparkling apphire radiance. Her body regenerates before our eyes, centuries of undeath pouring like ater off of her shoulders, until she appears as ital and powerful as she must have in life. As Amundyr regenerates, you can feel some of your wn strength fading.
  Amundyr grows taller as well, and her eyes urn brightly with apocalyptic rage. Though he seems far mightier and more terrifying han before, you note that subtle cracks have ppeared in her otherwise fresh and healthy kin, and her joints creak under the increased urden of both her larger size and magical nergy.
  This is small comfort to you, as Amundyr estures in frustration at the obelisk and ulverizes it with a single word.
  “NO MORE FUN AND GAMES, INTERLOPERS!” she roars. “TIME TO DIE!”
  The three statues surrounding the now- estroyed obelisk step down from their pedestals, eady to fight alongside their pharoah.`,
      compact: `Amundyr’s laughter was cut short by a sight she never expected. While she was busy monologuing and trading spells with you, the novice adventurers—decked out in their looted crowns and necklaces—had snuck into the chamber behind her.
  With a desperate shimmy, Artin snatched the Heart of the Protector right off its perch!
  "NO!" Amundyr shrieked, a sound that nearly sent Artin tumbling to his doom. He bobbled the glowing Heart like a hot coal before Pherry and Runa caught both him and the treasure. Thamart, showing more backbone than ever before, threw up a shimmering force field that barely deflected Amundyr’s necrotic wrath as the kids bolted back toward the surface with the prize.
  But the battle isn't over. Without the Heart to anchor her, Amundyr has undergone a terrifying metamorphosis. The room’s fire pots turned ice-blue as she shed centuries of undeath, her form growing taller and radiating a sapphire glow. She is now a living avatar of apocalyptic rage—though you notice her new, powerful joints are creaking and cracking under the strain of her own unstable magic.
  "NO MORE FUN AND GAMES!" she roars, pulverizing the stone obelisk with a single word. Beside her, three massive guardian statues step down to join the fray.`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `Though her minions fall before your attacks, Amundyr herself seems as hale and as dangerous as she was at the start of the battle. Shrugging off your strongest attacks and spells with mocking laughter, she continues to direct her surviving minions and her eldritch energies against you.
  “You have done better than most, fools,” she laughs. “But you will not prevail! I am already dead, and can neither weaken nor tire, while your soft, living flesh already flags with exertion and injury. I control the ancestral magics of the ancient…” an interesting sight causes your party to tune out Amundyr’s villainous monologue. Out of the corners of your eyes, you see, to your horror, that the party of novice adventurers have come into the chamber via one of the other passageways. As one, you resolve to strenuously ignore the other adventuring party, keeping Amundyr and her minions busy while the quartet sneaks across the room to the base of the obelisk. Amundyr continues to cheerfully throw wave after wave of her minions and magic into you, unaware that anything amiss is going on behind her until Artin, after a desperate shimmy setup up the side of the obelisk, takes the Heart of the protector from its perch.
  “NO!” shrieks Amundyr, wheeling to face the obelisk. “NO! NO!” her cries so startle Artin that he topples off the top of the obelisk, bobbling the Heart from hand to hand as he plummets to the floor. Pherry and Runa move quickly, rushing to catch their falling comrade and the obscenely important and valuable treasure before either can strike the chamber floor. Howling with rage, Amundyr fires waves of necrotic, purple-black energy from her fingertips. You are relieved, and, frankly, surprised, that Thamart manages to raise a force field strong enough to repel the elvish pharaoh’s magical fury.
  “Kill them, my children!” screams Amundyr.
  “Kill them all!” you push forward, eager to defend the young adventurers from Amundyr’s deadly wrath. The novices gather themselves together and hustle back the way they came, the Heart clutched protectively between them. As they flee back toward the surface, you muster what strength and energy you have left and face your foes. The flames in the fire pots suddenly change from a warm orange to a cold blue, matching a sudden change of temperature in the room. Amundyr herself begins glowing with a sparkling sapphire radiance. Her body regenerates before your eyes, centuries of undeath pouring like water off of her shoulders, until she appears as vital and powerful as she must have in life. As amundyr regenerates, you can feel some of your own strength fading. Amundyr grows taller as well, and her eyes burn brightly with apocalyptic rage. Though she seems far mightier and more terrifying than before, you note that subtle cracks have appeared in her otherwise fresh and healthy skin, and her joints creak under the increased burden of both her larger size and magical energy. This is small comfort to you, as Amundyr gestures in frustration at the obelisk and pulverizes it with a single word.
  “NO MORE FUN AND GAMES, iNTERLOPERS!” she roars. “TIME TO DIE!” the three statues surrounding the now- destroyed obelisk step down from their pedestals, ready to fight alongside their pharoah.`,
      compact: `Amundyr’s transformation is a sight of terrifying beauty. The sapphire radiance illuminates every crack in the chamber walls as she sheds eons of decay to become a giantess of living, breathing magic. But as she grows, the sound of her "new" bones grinding against each other is like tectonic plates shifting.
  "TIME TO DIE!" she screams, her voice vibrating in your very marrow.
  The three guardian statues move with surprising speed, their stone fists whistling through the air. You are weakened, your stamina siphoned away to fuel her rebirth, but you have one advantage: the Heart is gone, and Amundyr’s new body is a vessel too small for the power she’s trying to hold.`,
    },
  },
  {
    number: 21,
    name: 'Chapter 21',
    prologue: {
      title: 'Prologue',
      full: `Following Amundyr out of her inner sanctum, your party passes through one of the side passageways to an unobtrusive-looking door. Through this door is a cunningly-made and beautifully-carved ancient elevator. Amundyr opens the lattice door of the elevator and ushers you inside of it. Once she has fastened the door behind her, the mummified pharaoh points to a giant, wooden crank installed in the side of the elevator.
  “Crank!” she commands.
  And so, you do. Well, Gog does, anyway.
  Thanks to Gog’s unflinching and unflagging strength, as well as the clever mechanical design of the elevator itself, your party and amundyr rise swiftly out of the earth. At last, the elevator reaches the top of its shaft, locking safely into place with a satisfying clunk. Gog mops his green brow and grins tuskily at you.
  Amundyr escorts you out of the elevator and through the exit of the small, dark room in which you find yourselves. You emerge from one of the smaller buildings located around the ruins, blinking and squinting in the sudden blast of desert sunshine. Amundyr pauses, spreading her arms wide and looking straight into the face of the sun, before resuming her regal comportment and bidding you to lead the way.
  Your walk to the camp is brisk and uneventful, apart from Amundyr occasionally glancing at the numerous corpses of scorpions littered about the ruins and making angry clicking noises. You are surprised that nothing much seems to be happening at the camp as you approach. You were expecting to see the four novice adventurers dancing, carousing, and whooping up a storm. Instead, the only thing that greets you is an eerie, somewhat oppressive silence.
  “Hey,” says Gerki, “where are the horses?”
  Sensing something untoward in the air, you fan out and step up the pace, not stopping until you reach the center of your camp. Once there, you behold an awful and grisly scene. Artin lies face down, limp and unmoving in a pool of his own spreading blood. Nearby, Runa sits slumped in the broken remains of a tent, clutching at her stomach with both hands. Her armor has been shattered and burned by arcane forces, and blood seeps in a slow, pulsing rhythm between her clenched fingers.
  Runa’s face is a rictus of grief and agony, but it softens a bit in relief when she sees you. “Thank the gods!” she says.
  Deirdre is already running over to the injured young woman, while Gerki, mindful of all the blood, kneels next to Artin. He reaches under the young man’s hood and feels around for a bit, before looking up at Fiona and shaking his head.
  “Dead,” he says. “His throat’s been cut.”
  “What the hell?” says Fiona, looking around, sword drawn. “By what?”
  “Pherry…” gasps Runa, a rivulet of blood pouring out of the corner of her mouth. “Pherry…Thamart.”
  “It’s okay,” says Deirdre, as she begins to channel the power of the Goddess through her holy symbol. “We’ll find them. We’ll make sure they’re safe.”
  “No,” says Runa. “They…attacked…took the Heart.”
  “WHAT?!” shouts Fiona. “What do you mean, they took the Heart?”
  “Fiona, please,” says Deirdre, gently but firmly.
  “I’d have thought what she said was self- evident enough,” says Amundyr, who has finally arrived in the middle of the camp. She surveys the horrible scene with a look of haughty indifference carved onto her leather-like face. Then she turns her glowing amber eyes on Runa.
  “Where did they go? Tell me.”
  Runa removes a bloodied hand from her stomach wound and points eastward, out of the barren Wastes, toward Greyport. “That way… tried to stop them…Killed Artin…”
  “I thought you said that these were your idiots,” says Amundyr, rounding on Fiona.
  “Clearly,” says Eve, “there was a lot more going on behind the scenes than we were aware of.”
  Amundyr raises her hand. The sandy wastes around your campsite come alive, shaking and rising up into uneven mounds. As you watch, unsure of what is about to happen, several of the mummy pharaoh’s giant scorpions burrow up into view, clacking their pincers menacingly.
  “Enough of this,” says Amundyr. “You have caused this problem and you will fix it. Mount my pets. Ride after the ones who have taken the Heart. Retrieve it from them by any means necessary and return it here.”
  “What about...?” asks Gerki, pointing at the nearest scorpion’s poison stinger.
  Amundyr scowls at him and brusquely points one bony finger across the desert. Gerki backs up toward the nearest scorpion.
  “Okay, okay!”

  The scorpions are fast. Faster even than the swiftest horses you have ever ridden. The barren Wastes flash past you in a blur, and it is not long at all before even the tallest of the ancient monuments have disappeared behind you.
  You approach a small herd of horses— your own, by the looks of them, driven out into the desert and left abandoned by Pherry and thamart. They raise their dust-covered heads, looking at you quizzically as you pass by.
  A moment later, you can just make out a dust cloud on the horizon. It grows larger, clearer, and soon you can make out two individuals on horseback. They are riding with reckless abandon, urging their mounts to truly destructive speeds to escape the Barren Wastes as quickly as possible.
  The rider in the rear, Thamart, turns in his saddle as you approach. He shouts a warning to pherry, who is just ahead of him. She looks back at your party, a grim expression on her face, and gives her steed a few savage kicks. The horse obeys as well as it can, but it is clearly struggling beneath the weight of its rider and the large, roundish lump in Pherry’s saddlebag.
  The scorpions zoom, arrow-swift, at the two fleeing adventurers. Thamart glances back at you, realizes the gap between your two groups is diminishing rapidly, and raises one hand in a familiar, mystical gesture…`,
      compact: `The celebration of victory vanished the moment you reached the surface. The camp was a nightmare of silence and blood. Artin lay dead, his throat cut with cold precision. Runa, slumped in the ruins of a tent, clutched a mortal stomach wound, her armor scorched by treachery.
  "Pherry... Thamart," Runa gasped, pointing a bloodied finger eastward. "They attacked... took the Heart."
  The "novices" weren't idiots; they were infiltrators. While you fought the Queen, they were waiting for the perfect moment to steal the prize for their true master. Amundyr’s indifferent mask fractured into a snarl of command. She didn't care about your grief—only her charge. At her gesture, the sands heaved, and several giant scorpions burrowed to the surface.
  "Mount my pets," Amundyr hissed. "Retrieve the Heart by any means necessary."
  Now, you are hurtling across the desert on the backs of chitinous nightmares. The speed is terrifying, the wind whipping past as the scorpions close the distance in minutes. Ahead, two riders are pushing their horses to the breaking point. Thamart looks back, sees the skittering horrors gaining on him, and begins to weave a spell.`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `You run the two adventurers down and off their horses. They lie sprawled on the hardpan of the Barren Wastes, blood oozing from numerous wounds. Thamart, knocked off his horse by a final blow, seems to have landed in a twisted and unnatural position.
  Pherry, however, still has some life and fight left in her. As you dismount your scorpions and move to surround her, she crawls over to Thamart, Heart of the Protector tucked under one arm. With her free hand, she twists thamart’s Collegium ring off his finger.
  “Figured the mummy would have taken care of you,” she calls out to you. “Guess she didn’t. Thamart was right. You’re way tougher and cleverer than you look.”
  Pherry cocks a thumb at the broken body beside her. “Yeah, the two of us were only pretending to be novices. We met up with Runa and Artin and let them come along, one big happy party. They were excited to get some experience and treasure, and they made our story look that much better.”
  She coughs, clutches the Heart tighter. “If artin hadn’t started yelling at us to go back and save your lousy hides, we would have gotten away clean. He just wouldn’t leave well enough alone, though, so I cut his damn throat.”
  By this point, you have Pherry fully encircled. She looks up and around at all of you, turning her head slightly so that you can all see the smile on her face.
  “You got me, right? That’s what you think?” she says, laughing. “Well, you haven’t. First of all, your big badass wizards weakened the anti-teleport field in the area when they brought down the barrier.”
  A soft, purplish glow surrounds Pherry. She shows off Thamart’s ring, which now adorns her middle finger. “And second of all, this is a ring of teleportation.”
  With that, she vanishes.

  You return to your camp, riding on the scorpions, with your horses following you at a careful distance. Amundyr watches your approach, posture rigid, arms crossed. Knowing the wrath that is sure to come, you enter the camp and tell the others about what happened out in the desert.
  “To the seven hells with both of them,” says runa, shaking her head. Though she is still weak and shaky, she appears to be out of any immediate danger.
  “This is awful,” says Zot. “I fear that, instead of safeguarding the Heart and stopping longmont, we have been duped into facilitating whatever his plan is.”
  “Yes,” says Amundyr, her dry lips stretched taut. “And you will fix it. You will leave this desert at once. You will return to your own lands. You will find the Heart. You will punish the ones who have stolen it. You will return it to me.”
  “Yes, we will,” says Deirdre, her normally cheerful face adopting a very serious expression.
  Gog rubs his tusks with his tongue, his expression grave. “Yes. Gog help too.”
  Fiona and Gerki look at one another, then at amundyr, and nod.
  “I’ll go with you,” says Runa, getting gingerly to her feet.
  “Yes, you will,” says Amundyr, fixing Runa with a death glare.
  “This is my fault,” says Zot. “I will, of course, work to put right what has gone wrong.”
  “This is why you should look at things like an illusionist does,” says Eve, winking at Zot. “Nothing is ever as it seems.”
  “Says the illusionist who also got tricked,” snarks Fiona.
  “Enough,” says Amundyr. “Go. Now!”`,
      compact: `The pursuit ended in blood on the hardpan. Thamart lay broken in the dust, but Pherry still had enough spite to laugh. As you surrounded her, she slid Thamart’s Collegium ring onto her own finger.
  "Artin wouldn't leave well enough alone," she spat, clutching the Heart. "He wanted to go back and save your lousy hides, so I cut his damn throat." She looked up with a jagged smile. "You think you've got me? Your wizards weakened the anti-teleport field when they broke the barrier. And this? This is a Ring of Teleportation."
  In a flash of purplish light, she vanished.
  You returned to camp to face Amundyr’s rigid, icy wrath. The truth was bitter: you hadn't stopped Longmont; you had hand-delivered him the prize.
  "You will fix this," Amundyr commanded, her voice like grinding stone. "Find the Heart. Punish the thieves. Return it to me."
  "We will," Deirdre promised, her cheer replaced by a cold, sharp resolve. Even Runa, pale and bandaged, struggled to her feet to join you. The "novices" were gone, the Heart was in the wind, and the Vice-Chancellor’s endgame had officially begun.`,
    },
  },
  {
    number: 22,
    name: 'Chapter 22',
    prologue: {
      title: 'Prologue',
      full: `Deirdre lapses into an awkward silence as Darvishon, shocked at the news that the Heart f the Protector has been stolen by Pherry, hokes on his tea. While Zot helpfully thumps n the Chancellor’s back, the rest of you remain ore or less focused on the other very important erson in the room.
  Ohava the Grand Cleric stands with her rms crossed behind her back, staring out of Darvishon’s office window onto the Collegium uad. The sunlight plays on her ornately- ecorated mantle, and glints off the hair in er silver-white braid. When she turns to face ou, at last, her face does not bear the serene nd benevolent countenance of one skilled at eeping the oft-quarreling gods of Greyport in armony. Instead, she looks a touch…peeved.
  “You…Did. WHAT?!” she says, as Deirdre hrivels beneath her gaze.
  “It wasn’t…entirely…our fault,” ventures Deirdre, with a nervous smile.
  Storm clouds gather in Ohava’s face, ut Chancellor Darvishon intervenes. “I’m artially to blame as well, Ohava. You see, Longmont seemed very interested in the desert onuments, this Heart of the Protector, as well s…what did you call it, Deirdre? The Obsidian Door? Anyway, Zot suggested that they go to he desert to find out all that they could about Longmont’s plans, and I encouraged it. If that as reckless, then I was also reckless.”
  Ohava pinches the bridge of her nose, eturns to her seat, and slowly sinks down into t. “Reckless, perhaps,” she says, after a very ong pause. “But understandable. You were rying to help the realm, not to destroy it, and so ou should be granted a bit of leeway.”
  “Thank you, Grand Cler…” says Deirdre.
  “But still,” says Ohava, thumping her fist n the arm of her chair. “You should have come o me beforehand, instead of haring off into the Barren Wastes trying to be heroes. Deirdre! I’m urprised at you. Don’t you remember - I was he one who told you about the Obsidian Door n the first place?”
  “Yes, Grand Cleric,” says Deirdre, “and ou’re right. But we’ve come to you now, and e need to recover the Heart before Longmont oes whatever he’s going to do.”
  “And before Amundyr mummifies us or turns s into scarab chow, or something,” says Gerki.
  At that, Ohava’s face turns white. “You alked to Amundyr? The Protector lives?!”
  “Not exactly,” says Fiona. “She’s undead. Pretty spry, though.”
  Ohava covers her mouth with her hand.
  Zot leans forward in his chair. “You seem to now a great deal about the dangers facing us ow, Grand Cleric. Perhaps you could enlighten s?”
  Ohava nods her head and steeples her fingers editatively. “In another age, demons from the Stygian Expanse, aided by their cultists, created  gateway known as the Obsidian Door. The oor linked our two realms together, allowing he demons to invade, plunging our realm into a ightmare of destruction and war.
  “Our world would have fallen to the emons’ invasion, had not Amundyr - the great haraoh of the central empire and the high riestess of its many gods - sacrificed her life o close and seal the door. It was said that she ied when the door swung closed, trapping the emons in their own dark dimension, and that he Heart of the Protector was created out of hat great expenditure of magic and sacrifice. According to our records, the protective magic hat shut and sealed the door still radiates from he Heart, keeping our world safe from demonic nvasion.
  “But to discover now that she has suffered  fate even worse than death. It is…” Ohava’s yes well up, but she calms herself and ontinues. “Despite that, it is good news that he still exists. Not only has she guarded the Heart for a millennium, but perhaps it is her nbreakable will that has, thus-far, prevented Longmont from simply disjoining the protective pells and throwing open the Obsidian Door. If e could retrieve it, and get it back to her…”
  “She said that, too,” says Gerki. “Only she as a lot more threatening about it.”
  “Right!” says Fiona, smacking a mailed ist into her palm. “We just have to chase down Longmont, kick his ass, and take back the Heart.”
  “We may not have time,” says Zot. “He as a significant head start on us, plus he may lready know where the Obsidian Door is. It eems unlikely that we could overtake him.”
  Here, Ohava smiles a little. “The gods are n our side. Long ago, the clerics of the Great Temple destroyed all knowledge of the Obsidian Door’s location, so that people like the Vice- Chancellor…”
  “Former Vice-Chancellor,” interjects Darvishon.
  “…would be unable to find it.”
  “Okay, great, no one knows where the door s,” says Eve. “How does that help us?”
  “We don’t know the door’s exact location,” ays Ohava, “but it is tradition for the Grand Cleric to pass on the knowledge of the door’s eneral location to their successor. It is omewhere under the Skyanvil Mountains.”
  “That big place!” says Gog. “How we find oor?”
  “We’ll have to pool all of our resources,” ays Darvishon. “I suggest we split up into three eams and search the mountains for the door. I ill lead the senior faculty of the Collegium. Ohava, gather the highest-ranking priests of the Great Temple. And you, my friends…”
  “Will be the third group,” says Zot.
  “Indeed. I can equip each group with magical rtifacts that will allow us to communicate.”
  Grand Cleric Ohava arises from her chair. “Then let’s hurry, my friends.”
  “That’s right,” says Eve, with a trace of motion in her usually sardonic voice. “Move ike the world’s at stake.”

  Sometime later, your party is once again andering under the Skyanvil Mountains. This ime, however, you are armed with a stash of ld dwarven maps that Dimli added to your rchives several years ago. They do not, as Dimli had hoped, point the way to the legendary uins of Dwarvenhold, but they do permit you o move relatively quickly through the numerous uins that dot the mountains, as well as down nto the cave systems beneath.
  “Right,” says Zot, consulting the maps as ou travel. “That’s another section we can cross ff. Now, let’s go back to the junction and take hat eastern passage.”
  “Remember,” says Deirdre. “We need to eep on the lookout for anything that looks like agical runes, shielding…”
  “And arcane energy,” says Eve. “We know.”
  “All right,” says Deirdre. “I’m just trying to ake sure we’re thorough.”
  “I get it,” says Eve. “I have all of my etection spells enhanced and up. If an llusionary frog so much as faux-hiccups, I’m oing to notice.”
  “Well, then,” says Deirdre, with a grin. “Keep me informed if you find any illusionary rogs, because that would be something to see.”
  “Golem,” says Gog.
  “Or golems,” agrees Deirdre.
  “No.” Gog points along a side passage. “Gog see golem.”
  You look and, sure enough, a roughly umanoid stony shape, glowing with the intense ed heat of fresh magma, is walking down the ncient dwarven hallway ahead of you.
  “After it!” says Fiona.
  “Discreetly!” admonishes Zot.
  As the rest of you follow, Eve frowns and uickly blinks her eyes several times.
  You follow the golem into a large, hexagonal dwarven chamber. It faces a large magical nexus in the center of the room and then stands there, unmoving. You are about to engage it when other similar creatures enter the room through the nexus. The other creatures form neat ranks around the first, face the nexus, and stop moving.
  “That’s a lot of magic,” says Fiona. “How come you didn’t see it, Eve?”
  “I don’t know,” says Eve, who is irritably tapping her temple. “I’m looking right at them, and I’m not getting anything at...”
  A loud, rumbling laugh echoes throughout the chamber. “Ah, children of stone and earth, indled to life by the Fires of Hell themselves! How readily do you answer my bidding! Come and form ranks behind me! Make my first sortie into the damp and dismal dimension a memorable one.”
  And then a figure, wreathed in baleful flame, emerges from the nexus. It is huge and muscular, with weapons in each hand a flaming sword in one, a whip in the other. He uses the whip to lash at the dwarven masonry, scoring the runes carved there.
  “Demon,” says Deirdre, clutching her holy ymbol.
  “What do we do?” says Gerki.
  The elven priestess strides forward into he room, pure radiance blazing from her utstretched hand.
  “We kill it.”
  “Challengers already?!” shouts the demon, oaring with laughter. “How delightful. You hall be the first to fall in our conquest of this iserable realm.”
  He stomps a huge foot upon the floor. You all ive for cover as sections of the floor ignite in earing red flame. The infernal heat drives you oward the only sections of floor that are safe o stand on…and into the path of the demon’s ummoned creatures.`,
      compact: `Back in Greyport, the news of the theft hit like a physical blow. Grand Cleric Ohava was "peeved" would be an understatement—she was livid. But as the shock subsided, she revealed the true stakes: The Obsidian Door wasn't just a myth; it was a scar on the world held shut by the Heart of the Protector and Amundyr’s ancient sacrifice. If the Heart is used as a key, the Stygian Expanse will spill into your realm.
  Following Ohava’s lead, the search shifted to the Skyanvil Mountains. While the mages of the Collegium and the priests of the Great Temple searched other sectors, your party delved into the deep dwarven ruins.
  The search was dry work until Gog spotted a Magma Golem. Following it led you to a massive hexagonal chamber where a swirling magical nexus pulsed with unnatural heat. Then, a roar echoed off the stones as a Demon Lord, wreathed in baleful flames and brandishing a whip and sword, stepped through the portal.
  "Challengers already?!" the demon laughed, lashing his whip and igniting the very floor. "You shall be the first to fall in our conquest!"
  The floor is turning into a lake of fire, forcing you into a tight, safe zone—right into the waiting ranks of magma golems.`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `The Avatar of slaughter’s physical form, ravaged by your blows, collapses in the center of the nexus. Exhausted, you ready your weapons, fully expecting it to rise up, re-empowered and ready to continue the battle.
  Instead, its extremities burst into hideous blackflame. As you watch, the ebon fire races up the creature’s limbs, swiftly consuming its fingers, toes, feet, hands, legs, arms, and torso. The Avatar screams in agony, reaches out to you with the engulfed remains of its arms in what you think looks almost like an imploring gesture.
  “NO! MASTER! NO! MERCY! PLEASE!” it screams, shaking the walls of the ancient dwarven ruin with its cries.
  A moment later, it is consumed. The unholy nexus fades away. All around you, the last of the demonflame withers and dies. Gasping in the putrid, smoky air, the members of your party convene by the doorway and patch up your wounds.
  “This is bad,” says Eve. “I had all my spells up. I should have detected the demon long before we saw it. And I should have detected the golem before Gog did, no offense, Gog.”
  “Is okay,” says Gog.
  “I am not able to sense anything, either,” replies Zot, stroking his beard. “With all the forces at play in this room, I should have at least picked up arcane, if not demonic, enchantments.”
  “There was a demon,” says Deirdre, holy symbol still in her hand. “We saw it. We defeated it. What’s going on here?”
  Zot shrugs helplessly. “Latent magic from the Heart of the Protector, perhaps? Hiding the obsidian Door so that no one can find it?”
  “Could be,” says Eve, tapping her temple again. “Dammit. Still nothing.”
  “I mean, I know that magic is literally the best at solving every problem,” says Gerki, with a sardonic smile, “but a couple of us feeble plebs still know how to, you know, track things, and stuff. For example...”
  Gerki points down the hall. “The golem came from thataway. I bet we’ll find the obsidian Door if we keep going in the direction it came from.”
  “Yeah,” says Fiona. “And if the door is that way, then so is Longmont.”
  Zot pats Pooky meditatively for a moment. “You’re right, of course. That will likely take us closer to the Door. Gerki, get on the horn and let Darvishon know what’s just transpired. Tell him to have his and Ohava’s groups convene on our location.”
  Gerki pulls a small drinking horn out of one of the concealed pouches in his coat. He holds the large end to his lips, relaying everything that Zot just said. The horn glows briefly and vibrates once, at which point Gerki holds the small end up to his ear, listening.
  “They’re on their way.”
  “We should be, too,” says Zot. “Let’s put a stop to this nonsense once and for all.”`,
      compact: `The Avatar of Slaughter is gone, consumed by its own master’s blackflame after a pathetic plea for mercy. The nexus has vanished, leaving only the stench of sulfur and the unsettling realization that your magic is failing you.
  "I should have sensed that demon miles away," Eve mutters, frustrated. Zot agrees; some force—perhaps the Heart itself—is masking the local reality. But where magic fails, old-fashioned scouting succeeds. Gerki, ever the "feeble pleb," points toward the tunnel the golem emerged from.
  After a quick update to the other teams via Gerki's enchanted communication horn, the word is clear: converge on the eastern tunnels. The hunt for the Obsidian Door and the treacherous Longmont is nearing its end.`,
    },
  },
  {
    number: 23,
    name: 'Chapter 23',
    prologue: {
      title: 'Prologue',
      full: `It feels like you have been following the dwarven tunnels under the Skyanvil Mountains for ages. The sulphurous scent on the air and the steadily increasing temperature made you feel like you were making progress, at first. But you’ve been ready for action for so long that you’re starting to feel exhausted, your weaponry heavy in your hands.
  Zot consults the party’s maps. “I don’t know if this is good news or bad, but we’re approaching a portion of the tunnels that are either unexplored or simply not recorded. It may be we’re finally getting close to what we seek, or it may…”
  “Shhh!” says Fiona, holding up a gauntleted fist. “I think I hear chanting.”
  You become still and quiet, listening. Fiona is right—you do hear the faint sounds of a rhythmic chant. Worse, it sounds like the chant is not only ominous, but also entirely in one of the realm’s dead languages.
  “That settles that,” says Zot. “Let’s go.”
  You leave the dwarven corridors behind, entering what appears to be a large, dripping complex of natural caverns. The heat and the humidity are particularly intense here, and the stench of brimstone hangs heavily all around you. The chanting has grown both louder and increasingly more ominous as you travel, until, at last, you discover its source.
  Ahead of you and downward, a ritual circle has been cast onto the cavern floor. Standing around it are a contingent of figures in black hooded robes. The figures hold hands, making a second, larger circle with their bodies, their chant directed at the demonic figures in the center of the ritual circle. The demons are in the process of transitioning across the dimensional divide, gaining opaqueness and solidity as you approach.
  “What’s the plan?” says Fiona.
  “Fi! Look out!” shouts Gerki.
  But it’s too late. Another figure, hooded and cloaked like the others, steps out of an irregular shadow in the cavern wall, seizes Fiona, and holds a nasty-looking knife up to her throat.
  “Gotcha,” says the figure, pulling off her hood. “Not bad for a novice adventurer, eh?”
  In the dim light, Pherry stands revealed, slim-faced and smirking evilly at you. She flexes a bicep around Fiona’s neck and waggles the knife. “Hands away from your weapons and where I can see them. And tell your damned bunny to stand down, wizard, because I’m not playing around here.”
  Fiona’s sword clatters from her hand. At the sound, Pooky bares his teeth, but remains perched Zot’s shoulder.
  Despite the presence of the knife at her throat, Fiona struggles against Pherry’s grip, swearing loudly in dwarvish the entire time. The sound of Fiona’s loud, and rather crude, oaths carries down to the assemblage around the ritual circle, all of whom look in your direction to see what is causing the commotion. Even the demons glance up, vaguely horrified expressions upon their infernal countenances.
  “Kaz durhakk mak terak?!” says one demon, in their infernal tongue. (Translation: “Can you believe the mouth on that one?!”)
  “Zukzz’a!” replies the other, its burning eyes wide. (Translation: “My goodness!”)
  “Aha,” says one of the figures down below, in a voice you instantly recognize, “it appears our greatest enemies have discovered us right on time.”
  Vice-Chancellor Longmont throws off his hood with an appropriately dramatic gesture and directs a tirade of mocking laughter at you. At the sound, Pherry scoffs, but does not slacken the pressure of her grip upon Fiona.
  “Oh, great, another monologue,” mutter pherry and Fiona at the same time.
  “Fools!” shouts Longmont. “You try and try to prevail, but it is already too late! For you see…”
  Your party tunes him out.
  Eve continues to keep her hands visible as she stares at Pherry. “Come on, Pherry. You can’t seriously be allied with this dullard.” the knife moves fractionally closer to fiona’s throat.
  “Yeah, I seriously am,” says Pherry, in case the repositioning of the knife wasn’t enough. “There’s a lot of perks to being on the winning side.”
  “The winning side is demons,” says Gerki. “Those aren’t just bad odds. Those are the worst odds. They’re going to destroy the world and everything in it. They’re going to destroy you!” for a moment, Pherry looks uncertain. As she gathers herself, Longmont’s voice filters up from below.
  “And then I realized that what I wanted was power,” the former Vice-Chancellor drones. “True power! That the Collegium had long denied me…”
  “He’s not going to destroy the world,” says pherry. “He’s going to change it. He’s going to wipe away the old order and start again. And this time, we’ll be on top.”
  “No,” says Deirdre. “It’s the demons who will be on top.”
  “I really liked you, you know,” says Fiona quietly, her voice quavering. “You seemed nice, and sweet, and earnest, and you reminded me a lot of a younger me.”
  “Then this must really hurt you a lot,” says pherry.
  “Not as much as I’m going to hurt you if you don’t get your head on straight,” replies fiona. “If the rest of the demons make it to this dimension, it’s over for us. You’re a good fighter. You’re clever. You’ve got guts. It’s not too late for you to turn this thing around. Help us stop longmont and get the Heart back. Help us save the world.”
  A long silence follows. Well, it would be a long silence if not for Longmont. “And then you fools led my agents right to the Heart,” he says, cackling. “I hardly even needed to bother with the masquerade!”
  “If I don’t go along with this,” says Pherry, her voice tight, her words clipped, “then thamart will have died for nothing.”
  “What about Artin?” says demands Fiona. “You killed him, or don’t you remember? You nearly got Runa, too. Face it, you’re just trying to justify your murders.”
  At this, Pherry laughs. While she is distracted, Fiona takes a moment to subtly shift her position under Pherry’s loosened grip.
  “I don’t have all day to split hairs on whether i murdered Thamart or you did. What I will say is that when I’m hired to do a job, I do that job. I don’t ask questions and I fulfill my obligations to the letter. If that means that anyone who gets in my way dies, they die. I figured if anyone would respect that, it’d be Fiona the Volatile! how many people have gotten in your way? how many living, breathing creatures have you killed? Honestly, we’re not so…”
  Fiona brings her head back with a hard snap, catching Pherry full in the nose. There is a familiar crunching noise as your former adventuring companion stumbles backward, blood running from both nostrils.
  “Now who’s monologuing?” shouts Fiona. “And I’ve heard the ‘not so different’ speech before, traitor!”
  “Do you mind?” shouts Longmont from below. “I’m trying to detail how foolproof my cunning plan is.”
  “SHUT UP!” shouts Gog.
  “Fine, fine,” sniffs Longmont. “We’ll skip to the end, then. Kill them. I still have much to do.”
  Pherry dabs a sleeve against her nose, trying to stem the flow of blood. “Width pleathure,” she says as Longmont and his cultists leave.
  “Oh, bring it on, girl,” snarls Fiona, diving for her sword.
  “Scatter!” says Gerki, pointing over at the ritual circle. “Demonfire incoming!”
  You wheel away from one another and spread out, presenting smaller and more widely spaced targets for the incoming barrage of hellfire. Words of magic spells leap to your lips and weapons find your ready hands as you prepare to engage in another desperate battle.`,
      compact: `The tension in the cavern is thick enough to choke on. Between Longmont’s tedious villain monologue, the infernal bickering of the transitioning demons, and Pherry’s bloodied nose, the diplomatic phase of this mission is officially over.
  Fiona’s headbutt didn't just break Pherry’s nose; it broke the stalemate. As Longmont and his inner circle retreat deeper into the caverns to finalize the ritual at the Obsidian Door, he leaves you to the mercies of his "agent" and the half-solid horrors in the ritual circle.
  Pherry, eyes watering and voice nasal with rage, isn't playing the "earnest novice" anymore. She’s a professional killer who feels she has nothing left to lose but her contract. Meanwhile, the demons in the circle have finally found their footing in our reality, and they are hungry.`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `Fiona sheathes her sword so hard that the metallic ring of hilt on scabbard echoes sharply around the cave.
  “Fi?” ventures Gerki. “You okay?”
  “No,” replies Fiona, as she stalks across the cavern in the direction that Longmont has fled. “We’ve got a job to do.”
  With that, she walks off into the darkness.
  “Gog not let Fiona go alone,” says gog, jutting out his tusks in an expression of determination.
  “We’re not going to let her go on alone either, big guy,” says Gerki. He looks in the direction that Fiona went, but there is nothing but darkness there now. “C’mon.”`,
      compact: `Fiona sheathes her sword with a sharp, metallic ring that echoes through the silence.
  "Fi? You okay?" Gerki asks cautiously.
  "No," she snaps, already stalking into the darkness where Longmont vanished. "We've got a job to do."
  "Gog not let Fiona go alone," the half-ogre grunts, jaw set in determination.
  "Neither are we, big guy," Gerki mutters, peering into the gloom. "C'mon."`,
    },
  },
  {
    number: 24,
    name: 'Chapter 24',
    prologue: {
      title: 'Prologue',
      full: `You pass into an area where numerous urving tunnels intersect with one another in ays you cannot immediately fathom. The air n here is hot, oppressively heavy, and tainted ith the now very familiar sulphuric smell you ssociate with anything having to do with the Stygian Expanse.
  “Fiona?” calls Zot quietly, peering around.
  “I don’t see her,” says Deirdre, concerned.
  “I should see her,” says Eve, trying to keep he frustration out of her voice. “With all the agic items she’s carrying, she should light up ike the sun, but I have nothing. Nothing!”
  Up ahead, there is the very brief sound of  scuffle, which swiftly devolves into quiet himpers and painful groaning.
  “Fi?” ventures Gerki.
  A moment later, she calls back. “Yeah. Over ere.”
  You follow the sound of her voice to a place here several of the curving passageways join p to form an irregular, almost hexagonal room. Two defeated black-robed cultists lie sprawled cross what seems like another ritual circle arved into the floor. Fiona kneels between hem, studying a tattered and blood-stained crap of parchment. Her tongue is stuck out of he side of her mouth in concentration.
  “There you are!” says Deirdre running up.
  Fiona stands. Though she still looks upset, ou can tell that her recent battle with the two roaning cultists has improved her mood a little it. “Hey,” she says, offering up the parchment. “Look what I found.”
  Zot takes it from her and shows it around. On it is a crude map of what you assume is the urrent area, showing several circular tunnels rranged in a ring around a central point. The location of several red symbols, placed in ertain tunnel intersections, seem to match up ith the ritual circles that you have recently ound.
  Zot traces his finger over the dense aragraph of handwriting scribbled beneath he map. “Apparently, once the Heart of the Protector is in place, the wards on the door are eakened, but still sealed.”
  “That’s good,” says Gerki.
  “In order to fully open the door, the cultists ave to perform summoning rituals at these key oints, which will re-establish the connection etween our world and the Stygian Expanse so hat the door will swing open.”
  As Zot makes this pronouncement, the unnels around you shudder with unconstrained ower.
  “And…how many more summoning rituals o they need to do before they succeed?” asks Gerki.
  “A very small number between some and one,” says Eve. “Also, I didn’t get top marks n my ritual magic class, but if I was going to uess,” she adds, pointing to the blank spot at he center of the map, “I’d say that the Obsidian Door is somewhere around here.”
  “Agreed,” says Zot. “Let’s follow this tunnel o the center and see what we find.”

  “Where the hell is it?!” shouts Eve, her oice echoing along the curving passage.
  Pooky, seemingly irritated at the noise, perks is ears up as his eyes dart around the area. You oon realize that Pooky is more than just merely gitated, however, as he begins sniffing the air nd darting back and forth between Zot’s bony houlders.
  “I don’t know,” says Zot, thoughtfully, naware of his familiar’s sudden burst of ctivity.
  “If you’re right, and there is a door,” says Gerki. “It has to be here somewhere. We can do  thorough, grid-based search. See if we can’t ind…”
  “We may not have time,” says Deirdre.
  “Gog make hole!” offers Gog.
  Pooky vaults off Zot’s shoulder, lands n the tunnel floor, and runs full speed at the all. You all watch, confused and concerned, s Pooky drops his ears flat, tucks in his chin, rges himself forward with a final burst of speedand...
  ...passes effortlessly through the wall.
  “What the... says Fiona, watching as energy arcs across the wall from Pooky ’s point of entry.
  Zot runs forward. “It ’s here! You were right, Eve! The Obsidian Door must be... ’
  Whatever Zot is about to say next is driven from his lungs as he collides with the wall. He teeters back, and is about to topple over onto the floor, except that Gog gently catches Zot by the shoulders and sets him back on his feet.
  “Zot okay?”
  “Yes,” says Zot, a touch embarrassed. “Thank you, Gog.”
  Eve, meanwhile, is running her hands over the wall. “This is good. This is really good. 
  “What is it?” says Gerki, staring up at the wall quizzically. “Is it an illusion?”
  “Yeah. Best one I ’ve ever seen. Undetectable to my spells. Solid to the touch. Very resistant to disjunction caused by ontological disbelief.” Eve raps her knuckles on the wall. “Pooky probably saw right through it because he ’s got a bit of chaos magic in him.”
  “A bit?” mutters Zot.
  “Can you dispel it?” asks Fiona.
  Eve doesn ’t answer, instead sending probing beams of magical energy at the wall. You watch s one, then another, and still another rebound off the surface of the wall with seemingly no effect. Eve ’s frown lines deepen as she tries another spell, and another.
  “I think I ’m going to need some help. Deirdre, can you lend me some of that good, wholesome, divine magic?”
  “Of course,” says Deirdre, joining hands with Eve.
  The two of them begin to cast a spell in unison, weaving their voices and energies together until the entire wall is suffused with a glow of blue-white light. Despite this, it remains obdurate, eternal, and...stony.
  “I attempt to disbelieve,” intones Eve, her voice thick with magical power. You watch as the wall crumbles silently away to nothing.
  A short distance beyond the illusory wall, Pooky sits on his haunches and stares back at you, a bored expression on his fuzzy white face. Beyond him is a massive cavern glowing with magical light. Despite all of this magically- created radiance, though, the far side of the cavern stands in deep shadow. You can just make out a massive door, about as tall as a castle wall, made of polished black stone. Reddish-purple light leaks in from beneath and around the sides of the door, though even this does little to illuminate the shadows.
  Robed cultists kneel in a circle before the Obsidian Door, chanting their terrible chants nd raising their hands in mystical gestures.
  “Gerki,” says Zot. “Get back on the horn. Tell Darvishon and Ohava…”
  “Already on it,” says Gerki, who has, ndeed, extracted the horn from within his acket.
  All at once, the ritualistic chanting ends. The cultists rise to their feet in unison and turn o face you. Vice-Chancellor Longmont removes is hood and smiles at you, though his rictus- ike grin is infinitely more terrifying than it is ovial.
  “You fools don’t know when to quit!” he ays, laughing. “You are too late! Far, far too ate! For you see, the last key has just been urned! In moments, the door will open, and he demons from the Stygian Expanse will be ree and entirely under my command. First, Greyport shall fall to me! Then the neighboring ingdoms! Then the world! All knees will bend o me! All rulers will grovel before me!”
  “Seven out of ten for that performance,” niffs Eve. Then she turns to you and sighs, her ace falling. “He may be right, though. It may ctually be too late this time.”
  “Like hell it is,” shouts Fiona. “CHARGE!”`,
      compact: `The air grows heavy with the stench of the Stygian Expanse as you find Fiona standing over two defeated cultists. She’s found a tattered map: the ritual circles you've been breaking are nodes in a massive web designed to weaken the final seals of the Obsidian Door.
  "How many rituals are left?" Gerki asks as the tunnels shudder with power.
  "Somewhere between 'some' and 'one,'" Eve replies grimly.
  You reach the cavern's center, but find only a solid stone wall. While Zot and Eve struggle to detect any magic, Pooky—fueled by his own chaotic nature—simply runs full-tilt into the rock and vanishes. It’s a masterwork illusion: solid to the touch and invisible to spells. Only by combining Eve’s arcane power with Deirdre’s divine light does the wall finally crumble.
  Beyond lies the true nightmare. A massive, castle-sized door of polished obsidian pulses with a sickly violet light. Longmont stands before it, cackling as the final ritual ends.
  "You are too late!" he bellows. "The last key has turned! The demons are mine to command, and the world will grovel at my feet!"
  "Seven out of ten for the speech," Eve sighs, "but he might be right."
  "Like hell he is," Fiona roars. "CHARGE!"`,
    },
    partTwo: {
      title: 'Part 2',
      full: `Longmont, overwhelmed by your assault, alls to his hands and knees. He looks around, asping and sweating, and seems to notice for he first time just how many of his cultists have allen. His remaining lackeys draw slowly away rom him. You can tell that they can sense the Vice-Chancellor’s immediate defeat, and are rying to decide if they should surrender, run, r pretend that they wandered into the wrong avern by mistake.
  “It’s over, Longmont,” says Zot. “Give us he Heart. Close the Door. End this madness.”
  Longmont gulps down a lungful of air. “Madness?” he says. “You think this is adness?”
  “Yes, obviously,” says Eve. “You can’t onestly think that linking our world with the Stygian Expanse is a mentally sound…”
  The Vice-Chancellor heaves himself to his eet. “I WILL SHOW YOU MADNESS!”
  “Guess it was a rhetorical question?” says Gerki, shrugging.
  “Seems like,” says Eve.
  “Arben, please,” says Zot, his voice strained ut still reasonable. “You don’t have to do this.”
  The Vice-Chancellor stretches out his arms, ausing his billowing cult robes to unfurl around im like a pair of great, black wings. “By the Nine Abyssal Lords! By the Autarchs of Pain, Suffering, and Death! I unleash the powers of he Pit and claim them for my own! May all the Overlords of Torment Unending hear my cry nd give me. My. Revenge!”
  The Obsidian Door creaks open the merest andspan behind Longmont, and reddish- urple flames flash through the gap from the ellish place that stands just on the other side. The flames strike Longmont and several of the ultists nearest the door, causing them to thrash nd scream in unspeakable agony. You watch as Longmont and the afflicted cultists grow, their odies twisting, distorting into shapes that are ockeries of the human form. Their robes swell nd burst, revealing livid flesh, vestigial limbs, isshapen horns, and jagged fangs.
  The thing that was once Longmont strides oward you. He stares down at you with eyes hat are spread all around his demonic head, nd opens his giant misshapen maw.
  “Holy…” whispers Deirdre.
  The giant mouth screams, drowning out the ollowing word.`,
      compact: `Longmont, battered and deserted by his cultists, finally snaps. Ignoring Zot’s plea for reason, he bellows a final, desperate prayer to the Lords of the Pit.
  "I WILL SHOW YOU MADNESS!"
  The Obsidian Door creaks open a hair’s breadth, and tongues of violet hellfire lash out. They engulf Longmont and his remaining lackeys, melting their flesh and knitting it back together into screaming, multi-limbed mockeries of life.
  The creature that was once the Vice-Chancellor towers over you now—a mountain of livid flesh, vestigial horns, and a dozen eyes scattered across a distorted skull. It opens a cavernous, jagged maw and lets out a reality-shaking shriek.
  "Holy..." Deirdre whispers, her voice lost in the demon’s roar.`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `“NO!” shrieks the demon-thing that was once Longmont. It sags to the floor of the cavern, leaking pus and ichor from its many wounds. “NO! IT CANNOT BE! mY POWER! I WAS PROMISED!”
  You race across the cavern toward the obsidian Door, and to the knot of surviving cultists standing in its shadow. They are the last things standing between you and the slightly open portal to the Stygian Expanse, and they know it. Glancing nervously at the deflating pool of flesh and fluid that was once their leader, they raise their hands in defensive postures.
  “We surrender!” one says. “Please! Let us live! We’ll do…”
  “It’s opening!” shouts Deirdre.
  An explosion of purple-red flames blasts the Obsidian Door wide open, roaring into the room like the blazing fire of a blacksmith’s forge. The cultists in front of you don’t have a chance. You watch in horror as the nether fires engulf them, igniting cloth, hair, and flesh. You stumble backward against the wave of intense heat, hands thrown across your eyes, fearing that you, too, are only seconds away from meeting the same fate.
  But nothing happens.
  You look and see that a curving field of blue- white magic has interposed itself between you and the hot fires of the Stygian Expanse. Deirdre kneels in your midst, her hands tight and white- knuckled around the holy symbol of the Goddess elaana, praying with all her strength.
  The flames beyond Deirdre’s field of holy protection gradually sputter and die, leaving behind smeared streaks of ash on the cavern floor that are all that remain of the cultists. As the flames subside, you see the red, arid, and burning land that stands revealed beyond the threshold of the Obsidian Door. In the distance, you see an army of demons marching toward you, their ranks stretching back to the crimson horizon.
  You turn at a sudden commotion behind you, expecting demons or cultists. Instead, you see Ohava and Darvishon enter the chamber, breathless and terrified, with the Collegium wizards and the priests of the Great Temple filing in behind them. Their horrified eyes dart from the spreading pool that is all that remains of demon Longmont’s corpse, to Deirdre’s protective barrier, to the open Obsidian Door beyond.
  “We’re too late,” says Darvishon.
  “We may not be,” says Ohava. “Where is the Heart?”
  You all look at one another. You were so focused on stopping the ritual and keeping the door closed that you…
  “Found it!” says Gerki, plunging into the waist-deep foulness that is Longmont’s liquefying organs. He rummages around in the slime and bubbling flesh until he extracts the heart, which is clean and untainted.
  “Bring it here,” says Ohava. “Deirdre, keep that spell up. Quickly now!”
  Ohava and Darvishon’s groups pour into the cavern. The clerics of the Great Temple heal your wounds and use the rest of their divine energies to reinforce Deirdre’s shield, while the wizards of the Collegium begin prepping spells and setting up their own magical defenses.
  Ohava stares at the Heart of the Protector, now clutched tightly in her hands, and sends a whispered prayer winging to the four gods of greyport. “I can use the Heart to close the door and seal it,” she says, favoring you all with a calm and resolute gaze. “All you need to do is hold off legions of demons.”
  “Sounds easy,” says Gerki, with a wry smile.`,
      compact: `The demon-Longmont sags into a heap of leaking ichor, his promises of power dissolving with his flesh. But the victory is short-lived. A sudden explosion of hellfire blasts the Obsidian Door wide open, incinerating the surrendering cultists in an instant.
  Only Deirdre’s white-knuckled prayer holds back the heat, her holy barrier the only thing between you and the Stygian Expanse. Beyond the threshold, a crimson horizon reveals an army of demons already on the march.
  Darvishon and Ohava burst into the cavern with the full might of the Collegium and the Great Temple behind them. Panic flares until Gerki dives waist-deep into the sludge of Longmont’s remains, triumphantly pulling out the untainted Heart of the Protector.
  Ohava grips the relic, her gaze resolute. "I can use this to seal the door forever," she says over the roar of the abyss. "All you need to do is hold off the legions."
  Gerki wipes slime from his sleeve and offers a wry smile. "Sounds easy."`,
    },
  },
  {
    number: 25,
    name: 'Chapter 25',
    prologue: {
      title: 'Prologue',
      full: `A great cacophony of flames and shrieking echoes throughout the cavern as a cloud of small, winged demons burst forth from the open obsidian Door like a plague of locusts. The front ranks hurl themselves against Ohava’s reinforced divine barrier, and you watch, horrified, as it shatters like glass, falling to the earth in pieces before dissolving altogether. The demon swarm cackles and screams in fearsome joy as it makes a circuit of the cavern—encrusted talons slashing down at any hat, hood or hair they can reach—before vanishing through the opening in the wall behind you.
  “Students and faculty! Follow me!” shouts darvishon, “we have to stop them before they reach the surface!”
  “Take the clerics with you,” says Ohava. The assembled brethren of the Great Temple look at her, concerned and confused, but she makes a brisk gesture toward the opening in the wall and they reluctantly obey.
  “What about you?” asks the Chancellor, bushy eyebrow raised in concern.
  Ohava manages a thin smile as she points at your party. “I have them.”
  “Fair enough,” says Darvishon. “Let’s stop those demons.”
  As the others race out of the room, Ohava kneels on the floor of the cavern and lifts the heart of the Protector up toward the heavens.
  “I’ll worry about sealing the Obsidian door,” she says. “You worry about protecting me. If I can’t finish this ritual, we’re all doomed.”
  Ohava intones the first words of the ritual. The crystalline orb that holds the Heart begins to glow with a warm, white radiance. You watch, fascinated and a little horrified, as the withered heart inside kindles to life and slowly begins to beat.
  You turn to face the Obsidian Door. The demonic horde is far closer now, its vanguard is within a stone’s throw of the threshold of the otherworldly portal.
  “Look!” says Deirdre, pointing.
  The great door of black stone creaks noisily on its hinges, swinging a few inches back toward the doorway.
  “It’s working,” Deirdre continues. “Praise the Goddess.”
  “Yeah, but not fast enough,” says Gerki, with a flourish of daggers. “That first squad of demons is coming through.”
  “That’s where we come in,” says Fiona.
  Gog cracks his knuckles. “Gog ready!”
  “I’m not,” says Eve, and even her careful façade of sarcasm cannot keep the quaver from her voice.
  “Ready or not,” says Zot, as magic arcs from his hands. “Here they come!”
  The Obsidian Door moves a few more inches, but it is not nearly enough. The first demon—a great, hulking thing with weapons in each hand—stomps into the cavern and roars. In the confined space, the sound is like the rolling crash of thunder.`,
      compact: `The divine barrier shattered like glass, and the initial swarm of winged demons has already spiraled upward toward the surface. Darvishon and the other clerics have raced off to protect Greyport, leaving only your party to stand between Ohava and the rising tide of the Styx.
  Ohava kneels, lifting the Heart of the Protector. As she chants, the withered organ begins to beat with a warm, rhythmic white light. The massive Obsidian Door groans, inching shut, but the demonic vanguard is already here.
  A hulking brute of a demon, bristling with jagged steel, stomps into the cavern. Its roar is a physical blow, shaking dust from the ceiling. Behind it, the silhouettes of a thousand more wait for their turn to spill into your world.
  "Ready or not," Zot says, his hands sparking with desperate power. "Here they come!"`,
    },
    epilogue: {
      title: 'Epilogue',
      full: `The demonic monolith splinters at its base, fel energy erupting from the cracks spreading across its surface. The massed legions of the Stygian Expanse howl in frustration and rage as it begins to topple over. Several of the nearest demons sprint or fly toward the collapsing structure, attempting to shore up its unfathomable weight with the strength of their own bodies. Others rush the obsidian Door, trying to force their way into the physical world while they still have a chance to do so.
  You collectively hold your breaths, watching as the demons, with all their might and all their magic, wrestle against the cruel and unforgiving force of gravity. For a moment, it seems that the demons will prevail, and the monolith pauses briefly in its descent.
  But it is only for a moment.
  The monolith crashes to the rocks below, crushing several squealing, straining demons beneath it. It shatters, breaking into a dozen fragments, and its glow fades and goes dark.
  Behind you, in the world that is your home, you hear the tortured shriek of ancient hinges swinging. You turn at the sound, and see that you have succeeded. The Obsidian Door, now no longer influenced by the demonic sorceries of the Stygian Expanse, continues to swing shut under Ohava’s command. In fact, it is almost closed.
  You run feverishly toward the door. Some of the demons, realizing that they are losing their chance to invade, barrel toward you, wings wide, horns gleaming in the omnipresent reddish light, hoping to either prevent your escape or vent their rage upon you.
  “Hurry!” you hear Ohava call, weakly.
  The gap between the Obsidian Door and its frame is less than two feet. A foot. Now mere inches.
  Gog lets out a roar and throws all his half- ogrish might against the Obsidian Door. His muscles creak and his tendons strain with the prodigious effort, but he manages, for however briefly, to keep the portal open.
  “GO…NOW!” he shouts.
  The rest of you push your way through the gap, tearing your clothes and sacrificing the odd button as you attempt to return to the mortal world. Once you are all through, Zot reaches up to touch the part of Gog’s left hand that is on the Greyport side of the Obsidian Door. Gog disapparates into sparkles. Without his weight against the Obsidian Door, it swings to the rest of the way, closing with a satisfying boom.
  “I think I have him!” shouts Zot. “Give me some room!”
  You step back, leaving a large, clear area on the floor in front of the door for Zot to work. Sparks of light twinkle into being in the open space, growing in number and in brightness until they take on the rough outline of a hulking, half-ogre form. Sweating and shaking, Zot snaps his hands sharply downward, ending the teleportation spell.
  You blink the spots from your eyes and smile broadly as you see Gog standing before you, grinning sheepishly.
  “Hi!”
  You embrace in a group hug, cheering and shouting, tears of joy and relief streaming down your cheeks as you celebrate your hard won, nearly impossible victory.
  “Everyone out!” shouts Gog. “Gog so happy!”
  Deirdre wiggles her way free of Gog’s crushing embrace and rushes over to the Grand cleric’s side.
  “Ohava!” she cries, kneeling beside the now-prone figure of Greyport’s most venerated cleric.
  You gather around, suddenly silent, as deirdre takes one of Ohava’s hands in hers and gently massages it. Ohava’s other hand lies inert upon the now extinguished and lifeless Heart of the Protector.
  “Is she…” ventures Fiona.
  “Deirdre,” Ohava whispers. “Is that you?”
  “Yes...yes, Grand Cleric.”
  “I feel...I feel so light,” says Ohava, her voice growing weaker. “The gods call to me in harmony. We have...” she pauses, lets out a little cough. “We have done great work today.”
  “I know, Grand Cleric. I know,” says deirdre, tears forming in her eyes.
  “Come closer. There is something I have to tell you.”
  Deirdre, still holding the Grand Cleric’s hand, leans over to her, pressing one sharply- angled ear to Ohava’s lips.
  “Yes?” she says, her voice thick with emotion. “What is it?”
  You watch as the life slowly comes back into ohava’s face. Her lips pull back in a small, sly smile.
  “Drinks are on you tonight.”`,
      compact: `The demonic monolith shatters, crushing the vanguard beneath its unfathomable weight. With the Stygian sorcery broken, the Obsidian Door finally obeys Ohava’s command, groaning shut.
  "Hurry!" Ohava cries, her voice failing.
  The gap shrinks to mere inches. In a final act of heroism, Gog throws his massive frame against the stone, straining every tendon to hold the portal open. "GO… NOW!"
  You scramble through the closing crack, shedding buttons and cloth to reach the mortal side. As the door nears its frame, Zot touches Gog’s hand and magically teleports the half-ogre through the stone just as the Door slams shut with a world-shaking BOOM.
  For a moment, there is only the sound of heavy breathing. Then, Gog reappears in a shower of sparks, sheepish and grinning. "Hi!"
  The celebration is cut short as Deirdre rushes to Ohava’s side. The Grand Cleric lies prone, her hand resting on the now-dark and lifeless Heart.
  "Is she…?" Fiona whispers.
  Ohava’s eyes flutter open. She looks at Deirdre, a sly, weak smile touching her lips. "I feel so light," she murmurs. "The gods call to me... we have done great work today."
  Deirdre leans in, ear to the Grand Cleric's lips, bracing for a final, holy benediction.
  "Yes?" Deirdre chokes out. "What is it?"
  Ohava’s smile widens just a fraction. "Drinks are on you tonight."`,
    },
  },
]


