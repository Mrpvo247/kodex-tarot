/* KODEX TAROT – 78-card Rider-Waite equivalent (SVG placeholders + original meanings) */
/* All upright & reversed text is original, public-domain-safe wording */

window.TAROT_DECK = [
  /* ---------- MAJOR ARCANA (0–21) ---------- */
  {
    id: 0,
    name: "The Fool",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><circle cx="120" cy="120" r="40" fill="#ffe680"/><text x="120" y="135" text-anchor="middle" font-size="60" fill="#0a0014">0</text><text x="120" y="300" text-anchor="middle" font-size="24" fill="#ffe680">THE FOOL</text></svg>`,
    upright: "A fresh path opens; trust your instinct and take the first step.",
    reversed: "A risk ignored or a leap taken without thought—pause and look."
  },
  {
    id: 1,
    name: "The Magician",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><rect x="40" y="60" width="160" height="280" fill="#6b46c1"/><text x="120" y="200" text-anchor="middle" font-size="100" fill="#ffe680">I</text><text x="120" y="320" text-anchor="middle" font-size="24" fill="#ffe680">THE MAGICIAN</text></svg>`,
    upright: "You have every tool you need; focus will turns desire into result.",
    reversed: "Scattered energy or hidden motives—channel your power honestly."
  },
  {
    id: 2,
    name: "The High Priestess",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><circle cx="120" cy="120" r="50" fill="#ffe680"/><text x="120" y="135" text-anchor="middle" font-size="50" fill="#0a0014">II</text><text x="120" y="300" text-anchor="middle" font-size="22" fill="#ffe680">HIGH PRIESTESS</text></svg>`,
    upright: "Answers arrive in silence—listen to dreams, gut feelings, and signs.",
    reversed: "Intuition is clouded; give yourself space before you decide."
  },
  {
    id: 3,
    name: "The Empress",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><rect x="40" y="60" width="160" height="280" fill="#228b22"/><text x="120" y="200" text-anchor="middle" font-size="100" fill="#ffe680">III</text><text x="120" y="320" text-anchor="middle" font-size="24" fill="#ffe680">THE EMPRESS</text></svg>`,
    upright: "Life blooms—nurture ideas, people, or projects with gentle patience.",
    reversed: "Over-giving or creative blocks—refill your own well first."
  },
  {
    id: 4,
    name: "The Emperor",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><rect x="40" y="60" width="160" height="280" fill="#8b0000"/><text x="120" y="200" text-anchor="middle" font-size="100" fill="#ffe680">IV</text><text x="120" y="320" text-anchor="middle" font-size="24" fill="#ffe680">THE EMPEROR</text></svg>`,
    upright: "Structure and steady leadership turn vision into stable form.",
    reversed: "Control turns to rigidity—loosen the rules or share the throne."
  },
  {
    id: 5,
    name: "The Hierophant",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><rect x="40" y="60" width="160" height="280" fill="#4b0082"/><text x="120" y="200" text-anchor="middle" font-size="80" fill="#ffe680">V</text><text x="120" y="320" text-anchor="middle" font-size="22" fill="#ffe680">THE HIEROPHANT</text></svg>`,
    upright: "Tradition, ceremony, or a mentor offers valuable guidance now.",
    reversed: "Dogma stifles growth—question the system and find your own ethics."
  },
  {
    id: 6,
    name: "The Lovers",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><circle cx="120" cy="120" r="50" fill="#ff69b4"/><text x="120" y="135" text-anchor="middle" font-size="60" fill="#0a0014">VI</text><text x="120" y="300" text-anchor="middle" font-size="24" fill="#ffe680">THE LOVERS</text></svg>`,
    upright: "A meaningful choice or partnership—alignment of heart, head, and values.",
    reversed: "Misalignment or temptation—check that motives match words."
  },
  {
    id: 7,
    name: "The Chariot",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><rect x="40" y="60" width="160" height="280" fill="#ff8c00"/><text x="120" y="200" text-anchor="middle" font-size="80" fill="#ffe680">VII</text><text x="120" y="320" text-anchor="middle" font-size="24" fill="#ffe680">THE CHARIOT</text></svg>`,
    upright: "Drive and discipline steer opposing forces toward victory.",
    reversed: "Wavering direction or loss of control—reclaim the reins."
  },
  {
    id: 8,
    name: "Strength",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><circle cx="120" cy="120" r="50" fill="#ffd700"/><text x="120" y="135" text-anchor="middle" font-size="50" fill="#0a0014">VIII</text><text x="120" y="300" text-anchor="middle" font-size="24" fill="#ffe680">STRENGTH</text></svg>`,
    upright: "Quiet courage and compassion tame any inner or outer beast.",
    reversed: "Self-doubt or raw temper—soften your approach to yourself first."
  },
  {
    id: 9,
    name: "The Hermit",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><rect x="40" y="60" width="160" height="280" fill="#2f4f4f"/><text x="120" y="200" text-anchor="middle" font-size="80" fill="#ffe680">IX</text><text x="120" y="320" text-anchor="middle" font-size="24" fill="#ffe680">THE HERMIT</text></svg>`,
    upright: "Solitude and reflection reveal the lantern of inner wisdom.",
    reversed: "Isolation turns to loneliness—re-enter the world when ready."
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><circle cx="120" cy="120" r="50" fill="#00ffff"/><text x="120" y="135" text-anchor="middle" font-size="40" fill="#0a0014">X</text><text x="120" y="300" text-anchor="middle" font-size="20" fill="#ffe680">WHEEL OF FORTUNE</text></svg>`,
    upright: "Cycles turn in your favor—accept the spin and act in the moment.",
    reversed: "Resisting change prolongs the downturn—flow with the cycle."
  },
  {
    id: 11,
    name: "Justice",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><rect x="40" y="60" width="160" height="280" fill="#800080"/><text x="120" y="200" text-anchor="middle" font-size="100" fill="#ffe680">XI</text><text x="120" y="320" text-anchor="middle" font-size="24" fill="#ffe680">JUSTICE</text></svg>`,
    upright: "Fair outcome—truth spoken now balances past actions.",
    reversed: "Bias or avoidance catches up—own your part to restore balance."
  },
  {
    id: 12,
    name: "The Hanged Man",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><circle cx="120" cy="120" r="50" fill="#20b2aa"/><text x="120" y="135" text-anchor="middle" font-size="30" fill="#0a0014">XII</text><text x="120" y="300" text-anchor="middle" font-size="18" fill="#ffe680">HANGED MAN</text></svg>`,
    upright: "A deliberate pause flips the view—surrender impatience and see the upside.",
    reversed: "Stuck by refusal to let go—release the old stance to move again."
  },
  {
    id: 13,
    name: "Death",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><rect x="40" y="60" width="160" height="280" fill="#000000" stroke="#ffe680" stroke-width="4"/><text x="120" y="200" text-anchor="middle" font-size="100" fill="#ffe680">XIII</text><text x="120" y="320" text-anchor="middle" font-size="24" fill="#ffe680">DEATH</text></svg>`,
    upright: "One chapter closes so another can begin—grieve, then step forward.",
    reversed: "Fear of endings stalls renewal—accept the inevitable shift."
  },
  {
    id: 14,
    name: "Temperance",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><circle cx="120" cy="120" r="50" fill="#7fffd4"/><text x="120" y="135" text-anchor="middle" font-size="40" fill="#0a0014">XIV</text><text x="120" y="300" text-anchor="middle" font-size="20" fill="#ffe680">TEMPERANCE</text></svg>`,
    upright: "Blending opposites creates healing—mix patience with action.",
    reversed: "Extremes clash—find the middle ground before burnout."
  },
  {
    id: 15,
    name: "The Devil",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><rect x="40" y="60" width="160" height="280" fill="#8b0000"/><text x="120" y="200" text-anchor="middle" font-size="80" fill="#ffe680">XV</text><text x="120" y="320" text-anchor="middle" font-size="24" fill="#ffe680">THE DEVIL</text></svg>`,
    upright: "Temptation or toxic bonds—name the chain to break it.",
    reversed: "Awareness snaps the bond—reclaim freedom and self-worth."
  },
  {
    id: 16,
    name: "The Tower",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><rect x="40" y="60" width="160" height="280" fill="#ff4500"/><text x="120" y="200" text-anchor="middle" font-size="80" fill="#ffe680">XVI</text><text x="120" y="320" text-anchor="middle" font-size="24" fill="#ffe680">THE TOWER</text></svg>`,
    upright: "Sudden shake-up reveals weak beams—rebuild on stronger truth.",
    reversed: "Avoiding upheaval only delays it—brace and renovate willingly."
  },
  {
    id: 17,
    name: "The Star",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><circle cx="120" cy="120" r="50" fill="#00bfff"/><text x="120" y="135" text-anchor="middle" font-size="60" fill="#0a0014">XVII</text><text x="120" y="300" text-anchor="middle" font-size="24" fill="#ffe680">THE STAR</text></svg>`,
    upright: "Hope returns like a distant star—follow its steady light.",
    reversed: "Faith flickers—rekindle belief in your own direction."
  },
  {
    id: 18,
    name: "The Moon",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><circle cx="120" cy="120" r="50" fill="#c0c0c0"/><text x="120" y="135" text-anchor="middle" font-size="60" fill="#0a0014">XVIII</text><text x="120" y="300" text-anchor="middle" font-size="24" fill="#ffe680">THE MOON</text></svg>`,
    upright: "Shadows distort the path—trust instinct more than eyesight.",
    reversed: "Confusion lifts when you name the fear aloud."
  },
  {
    id: 19,
    name: "The Sun",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><circle cx="120" cy="120" r="50" fill="#ffd700"/><text x="120" y="135" text-anchor="middle" font-size="60" fill="#0a0014">XIX</text><text x="120" y="300" text-anchor="middle" font-size="24" fill="#ffe680">THE SUN</text></svg>`,
    upright: "Clarity and warmth fuel success—shine generously.",
    reversed: "Clouds dim confidence—step outside and absorb real light."
  },
  {
    id: 20,
    name: "Judgement",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><rect x="40" y="60" width="160" height="280" fill="#dc143c"/><text x="120" y="200" text-anchor="middle" font-size="70" fill="#ffe680">XX</text><text x="120" y="320" text-anchor="middle" font-size="22" fill="#ffe680">JUDGEMENT</text></svg>`,
    upright: "A wake-up call invites rebirth—answer and rise renewed.",
    reversed: "Ignoring the call prolongs limbo—rise when the bell rings."
  },
  {
    id: 21,
    name: "The World",
    suit: "major",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><circle cx="120" cy="120" r="50" fill="#ffe680"/><text x="120" y="135" text-anchor="middle" font-size="50" fill="#0a0014">XXI</text><text x="120" y="300" text-anchor="middle" font-size="24" fill="#ffe680">THE WORLD</text></svg>`,
    upright: "Completion and integration—celebrate the full circle.",
    reversed: "Last piece missing—tie up loose ends to close the loop."
  },

  /* ---------- MINOR ARCANA – WANDS ---------- */
  ...[
    ["Ace of Wands", "Creative spark arrives—light the fuse and begin.", "Spark is damp—rekindle passion before you start."],
    ["Two of Wands", "Future plans take shape—pick a route and walk it.", "Fear of leaving comfort blocks expansion—choose boldly."],
    ["Three of Wands", "Ships appear on the horizon—collaboration bears fruit.", "Impatience or micromanaging slows the voyage—trust the crew."],
    ["Four of Wands", "A milestone reached—pause to celebrate solid ground.", "Restlessness after success—enjoy the moment before the next climb."],
    ["Five of Wands", "Friendly sparring sharpens skills—compete without hostility.", "Clashing egos create chaos—seek common rules."],
    ["Six of Wands", "Victory parade—accept applause and keep leading.", "Imposter syndrome or backlash—own your worth quietly."],
    ["Seven of Wands", "Stand your ground—advantage goes to the determined.", "Giving ground too soon—hold the high spot longer."],
    ["Eight of Wands", "Messages and momentum fly—say yes to rapid motion.", "Delays or mixed signals—clear the runway first."],
    ["Nine of Wands", "Battle-scarred but still standing—guard the final stretch.", "Exhaustion or paranoia—drop the shield when safe."],
    ["Ten of Wands", "Burden grows heavy—delegate or drop non-essential cargo.", "Refusing help turns load into breakdown—share the weight."],
    ["Page of Wands", "Curious enthusiasm—explore new territory with open eyes.", "Restlessness without aim—set a concrete goal."],
    ["Knight of Wands", "Charge ahead with fiery confidence—momentum is your ally.", "Reckless speed causes crashes—apply brakes strategically."],
    ["Queen of Wands", "Charismatic leadership—warmth and determination attract support.", "Burnout or jealousy—recharge inner fire before leading."],
    ["King of Wands", "Visionary commander—bold decisions inspire the team.", "Tyranny or impatience—listen as much as you speak."]
  ].map((n, i) => ({
    id: 22 + i,
    name: n[0],
    suit: "wands",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><rect x="40" y="60" width="160" height="280" fill="#ff4500"/><text x="120" y="200" text-anchor="middle" font-size="100" fill="#ffe680">${i + 1}</text><text x="120" y="320" text-anchor="middle" font-size="24" fill="#ffe680">${n[0].toUpperCase()}</text></svg>`,
    upright: n[1],
    reversed: n[2]
  })),

  /* ---------- CUPS ---------- */
  ...[
    ["Ace of Cups", "Emotional fountain opens—let love or inspiration pour out.", "Emotional dam—release guilt to feel fully again."],
    ["Two of Cups", "Mutual respect forms a powerful bond—partner generously.", "Mismatch or break in trust—re-align expectations honestly."],
    ["Three of Cups", "Celebrate friendship—shared joy multiplies.", "Gossip or third-wheel tension—keep circles healthy."],
    ["Four of Cups", "Boredom invites missed chances—look up and reach out.", "Withdrawal serves needed introspection—return when refreshed."],
    ["Five of Cups", "Focus on spilled wine, miss full chalice—grieve, then notice what remains.", "Perspective returns—gather the cups still upright."],
    ["Six of Cups", "Nostalgia or childhood gifts resurface—enjoy sweet memories.", "Trapped in past—update the story to fit today."],
    ["Seven of Cups", "Many enticing visions—choose the one grounded in reality.", "Illusions scatter—pick a single dream and commit."],
    ["Eight of Cups", "Walk away from empty emotional well—seek deeper waters.", "Fear of leaving familiar pain—step out anyway."],
    ["Nine of Cups", "Wish granted—savor satisfaction and share the abundance.", "Smug isolation or over-indulgence—stay humble and connected."],
    ["Ten of Cups", "Harmonious home—emotional rainbow touches all you love.", "Picture-perfect mask—address real needs behind the image."],
    ["Page of Cups", "Creative message or crush arrives—open the envelope.", "Emotional immaturity—grow before diving too deep."],
    ["Knight of Cups", "Romantic proposal or inspired quest—follow the heart.", "Mood swings or unrealistic offer—test before you leap."],
    ["Queen of Cups", "Deep empathy guides decisions—trust your caring insight.", "Overwhelmed by others’ storms—shore up personal boundaries."],
    ["King of Cups", "Emotional mastery—calm leadership through turbulent seas.", "Suppressed feelings erupt—allow safe expression."]
  ].map((n, i) => ({
    id: 36 + i,
    name: n[0],
    suit: "cups",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><rect x="40" y="60" width="160" height="280" fill="#00bfff"/><text x="120" y="200" text-anchor="middle" font-size="100" fill="#ffe680">${i + 1}</text><text x="120" y="320" text-anchor="middle" font-size="24" fill="#ffe680">${n[0].toUpperCase()}</text></svg>`,
    upright: n[1],
    reversed: n[2]
  })),

  /* ---------- SWORDS ---------- */
  ...[
    ["Ace of Swords", "Mental clarity cuts through fog—speak the sharp truth.", "Clouded judgment or harsh words—hone the blade before swinging."],
    ["Two of Swords", "Stalemate forces a hard choice—remove the blindfold and decide.", "Indecision becomes paralysis—pick the lesser pain and move."],
    ["Three of Swords", "Heartache pierces—acknowledge pain to start healing.", "Re-opening old wound—guard your heart until stitches hold."],
    ["Four of Swords", "Rest and retreat restore the mind—solitude is medicine.", "Prolonged isolation turns to avoidance—rise when ready."],
    ["Five of Swords", "Hollow victory—consider the cost before claiming the prize.", "Remorse after conflict—make amends or set fairer rules."],
    ["Six of Swords", "Transition to calmer waters—leave rough seas behind.", "Refusing the boat keeps you stuck—board and sail."],
    ["Seven of Swords", "Strategic retreat or clever plan—act discreetly.", "Deception exposed—honesty now prevents bigger loss."],
    ["Eight of Swords", "Self-imposed prison—notice the loose ropes and walk free.", "Victim mindset—claim agency and untie the binds."],
    ["Nine of Swords", "Anxiety loops at night—share worries to shrink them.", "Nightmares fade at sunrise—seek support and sleep."],
    ["Ten of Swords", "Sudden painful ending—rock bottom offers solid ground to rise.", "Refusing to accept finale—acceptance brings the first breath of recovery."],
    ["Page of Swords", "Curious mind asks sharp questions—explore and investigate.", "Gossip or thoughtless speech—think before you speak."],
    ["Knight of Swords", "Swift decisive charge—momentum clears obstacles.", "Reckless haste causes crashes—balance speed with strategy."],
    ["Queen of Swords", "Clear-eyed honesty cuts kindly—truth serves compassion.", "Cold criticism—warm the delivery without diluting facts."],
    ["King of Swords", "Logical authority—fair decisions based on facts, not feelings.", "Tyrannical intellect—invite heart into the courtroom."]
  ].map((n, i) => ({
    id: 50 + i,
    name: n[0],
    suit: "swords",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><rect x="40" y="60" width="160" height="280" fill="#c0c0c0"/><text x="120" y="200" text-anchor="middle" font-size="100" fill="#0a0014">${i + 1}</text><text x="120" y="320" text-anchor="middle" font-size="24" fill="#ffe680">${n[0].toUpperCase()}</text></svg>`,
    upright: n[1],
    reversed: n[2]
  })),

  /* ---------- PENTACLES ---------- */
  ...[
    ["Ace of Pentacles", "Seed of material opportunity—plant and tend it well.", "Missed chance or greed—share the harvest for growth."],
    ["Two of Pentacles", "Juggle priorities with grace—flexibility prevents drops.", "Overwhelmed multitask—consolidate before everything falls."],
    ["Three of Pentacles", "Skillful teamwork builds solid structures—collaborate.", "Poor planning or ego blocks progress—listen to experts."],
    ["Four of Pentacles", "Secure your assets—but don’t clutch them until they suffocate.", "Stingy fear of loss—loosen the grip to allow flow."],
    ["Five of Pentacles", "Tough times—seek help; community doors open when you knock.", "Pride refuses aid—accept support to speed recovery."],
    ["Six of Pentacles", "Generosity flows both ways—give or receive with gratitude.", "Strings-attached charity—ensure fairness in exchange."],
    ["Seven of Pentacles", "Pause to assess crop—adjust strategy for better yield.", "Impatience with slow growth—cultivate persistence."],
    ["Eight of Pentacles", "Diligent craft hones mastery—practice sharpens skill.", "Work without joy becomes drudgery—add meaning to labor."],
    ["Nine of Pentacles", "Self-sufficiency bears fruit—enjoy the garden you grew.", "Isolation behind luxury—invite worthy company in."],
    ["Ten of Pentacles", "Lasting legacy—family or finances thrive across generations.", "Wealth without warmth—cultivate emotional richness too."],
    ["Page of Pentacles", "Eager student of practical skills—study and experiment.", "Daydreams without groundwork—turn ideas into tangible steps."],
    ["Knight of Pentacles", "Steady progress—slow, reliable steps reach the goal.", "Stubborn inertia—speed up or change the route when needed."],
    ["Queen of Pentacles", "Nurturing provider—comfort and resources multiply under her care.", "Smothering or workaholic burnout—care for self as well as others."],
    ["King of Pentacles", "Material mastery—secure wealth used for community good.", "Miserly boss or stubborn materialism—share the bounty freely."]
  ].map((n, i) => ({
    id: 64 + i,
    name: n[0],
    suit: "pentacles",
    svg: `<svg viewBox="0 0 240 400" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="400" fill="#0a0014"/><rect x="40" y="60" width="160" height="280" fill="#228b22"/><text x="120" y="200" text-anchor="middle" font-size="100" fill="#ffe680">${i + 1}</text><text x="120" y="320" text-anchor="middle" font-size="24" fill="#ffe680">${n[0].toUpperCase()}</text></svg>`,
    upright: n[1],
    reversed: n[2]
  }))
];

/* ---------- Utility helpers ---------- */
window.TAROT_DECK.getRandom = () => {
  const card = TAROT_DECK[Math.floor(Math.random() * 78)];
  const reversed = Math.random() < 0.5;
  return { ...card, reversed };
};
