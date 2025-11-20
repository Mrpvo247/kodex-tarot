/* KODEX TAROT – 78-card Rider-Waite equivalent (public-domain meanings) */
window.TAROT_DECK = [
  /* === MAJOR ARCANA === */
  {id:0, name:"The Fool", suit:"major", svg:"", upright:"A fresh path opens—trust instinct and leap.", reversed:"Risk ignored or leap without thought—pause and look."},
  {id:1, name:"The Magician", suit:"major", svg:"", upright:"You have every tool—focus turns desire into result.", reversed:"Scattered energy or hidden motives—channel power honestly."},
  {id:2, name:"The High Priestess", suit:"major", svg:"", upright:"Answers arrive in silence—listen to dreams and signs.", reversed:"Intuition clouded—give yourself space before deciding."},
  {id:3, name:"The Empress", suit:"major", svg:"", upright:"Life blooms—nurture ideas, people, projects with patience.", reversed:"Over-giving or creative blocks—refill your own well first."},
  {id:4, name:"The Emperor", suit:"major", svg:"", upright:"Structure and steady leadership turn vision into stable form.", reversed:"Control turns rigid—loosen rules or share the throne."},
  {id:5, name:"The Hierophant", suit:"major", svg:"", upright:"Tradition or mentor offers valuable guidance now.", reversed:"Dogma stifles—question the system and find your own ethics."},
  {id:6, name:"The Lovers", suit:"major", svg:"", upright:"Meaningful choice or partnership—align heart, head, values.", reversed:"Misalignment or temptation—check motives match words."},
  {id:7, name:"The Chariot", suit:"major", svg:"", upright:"Drive and discipline steer opposing forces toward victory.", reversed:"Wavering direction—reclaim the reins and commit."},
  {id:8, name:"Strength", suit:"major", svg:"", upright:"Quiet courage and compassion tame any beast.", reversed:"Self-doubt or raw temper—soften your approach to yourself."},
  {id:9, name:"The Hermit", suit:"major", svg:"", upright:"Solitude reveals inner lantern—reflection brings wisdom.", reversed:"Isolation becomes loneliness—re-enter the world when ready."},
  {id:10, name:"Wheel of Fortune", suit:"major", svg:"", upright:"Cycles turn in your favor—accept the spin and act.", reversed:"Resisting change prolongs downturn—flow with the cycle."},
  {id:11, name:"Justice", suit:"major", svg:"", upright:"Fair outcome—truth spoken now balances past actions.", reversed:"Bias catches up—own your part to restore balance."},
  {id:12, name:"The Hanged Man", suit:"major", svg:"", upright:"Pause flips the view—surrender impatience, see upside.", reversed:"Refusal to let go keeps you stuck—release the stance."},
  {id:13, name:"Death", suit:"major", svg:"", upright:"One chapter closes—grieve, then step forward renewed.", reversed:"Fear of endings stalls renewal—accept the shift."},
  {id:14, name:"Temperance", suit:"major", svg:"", upright:"Blending opposites creates healing—mix patience with action.", reversed:"Extremes clash—find middle ground before burnout."},
  {id:15, name:"The Devil", suit:"major", svg:"", upright:"Temptation or toxic bonds—name the chain to break it.", reversed:"Awareness snaps the bond—reclaim freedom and self-worth."},
  {id:16, name:"The Tower", suit:"major", svg:"", upright:"Sudden shake-up reveals weak beams—rebuild on truth.", reversed:"Avoiding upheaval delays it—brace and renovate willingly."},
  {id:17, name:"The Star", suit:"major", svg:"", upright:"Hope returns like a star—follow its steady light.", reversed:"Faith flickers—rekindle belief in your direction."},
  {id:18, name:"The Moon", suit:"major", svg:"", upright:"Shadows distort the path—trust instinct over eyesight.", reversed:"Confusion lifts when you name the fear aloud."},
  {id:19, name:"The Sun", suit:"major", svg:"", upright:"Clarity and warmth fuel success—shine generously.", reversed:"Clouds dim confidence—step outside and absorb light."},
  {id:20, name:"Judgement", suit:"major", svg:"", upright:"Wake-up call invites rebirth—answer and rise renewed.", reversed:"Ignoring the call prolongs limbo—rise when bell rings."},
  {id:21, name:"The World", suit:"major", svg:"", upright:"Completion and integration—celebrate the full circle.", reversed:"Last piece missing—tie loose ends to close loop."},

  /* === WANDS === */
  ...["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Page","Knight","Queen","King"].map((n,i)=>({
    id:22+i, name:`${n} of Wands`, suit:"wands", svg:"",
    upright:["Creative spark—light fuse and begin.","Future plans take shape—pick route and walk.","Ships appear—collaboration bears fruit.","Milestone reached—pause to celebrate.","Friendly sparring—compete without hostility.","Victory parade—accept applause and lead.","Stand ground—advantage to determined.","Messages fly—say yes to rapid motion.","Battle-scarred but standing—guard last stretch.","Burden heavy—delegate or drop cargo.","Curious enthusiasm—explore new territory.","Charge ahead—momentum clears obstacles.","Charismatic leader—warmth attracts support.","Visionary commander—bold decisions inspire."][i],
    reversed:["Spark damp—rekindle passion first.","Fear of leaving comfort blocks expansion.","Impatience slows voyage—trust crew.","Restlessness after success—enjoy moment.","Clashing egos create chaos—seek rules.","Imposter syndrome—own worth quietly.","Giving ground too soon—hold longer.","Delays—clear runway first.","Exhaustion—drop shield when safe.","Refusing help turns load to breakdown.","Restlessness without aim—set goal.","Reckless speed causes crashes—brake.","Burnout—recharge inner fire.","Tyranny—listen as much as speak."][i]
  })),

  /* === CUPS === */
  ...["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Page","Knight","Queen","King"].map((n,i)=>({
    id:36+i, name:`${n} of Cups`, suit:"cups", svg:"",
    upright:["Emotional fountain—let love pour out.","Mutual respect forms bond—partner generously.","Celebrate friendship—shared joy multiplies.","Boredom invites missed chances—look up.","Focus on spill—notice cups still upright.","Nostalgia gifts resurface—enjoy memories.","Many visions—choose grounded one.","Walk from empty well—seek deeper waters.","Wish granted—savor and share abundance.","Harmonious home—rainbow touches all.","Creative message arrives—open envelope.","Romantic quest—follow the heart.","Deep empathy guides—trust caring insight.","Emotional mastery—calm through turbulence."][i],
    reversed:["Dam closed—release guilt to feel.","Mismatch—re-align expectations.","Gossip tension—keep circles healthy.","Withdrawal serves introspection—return refreshed.","Perspective returns—gather upright cups.","Trapped in past—update story.","Illusions scatter—commit to one.","Fear of leaving pain—step out anyway.","Smug isolation—stay humble.","Picture mask—address real needs.","Immaturity—grow before diving.","Unrealistic offer—test before leap.","Overwhelmed—shore boundaries.","Suppressed feelings erupt—allow expression."][i]
  })),

  /* === SWORDS === */
  ...["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Page","Knight","Queen","King"].map((n,i)=>({
    id:50+i, name:`${n} of Swords`, suit:"swords", svg:"",
    upright:["Mental clarity—speak sharp truth.","Stalemate—remove blindfold and decide.","Heartache pierces—acknowledge to heal.","Rest restores mind—solitude is medicine.","Hollow victory—consider cost first.","Transition to calm—leave rough seas.","Strategic retreat—act discreetly.","Self-prison—notice loose ropes.","Anxiety loops—share to shrink.","Painful ending—rock bottom to rise.","Curious questions—explore freely.","Swift charge—momentum clears.","Clear honesty—truth serves compassion.","Logical authority—fair decisions."][i],
    reversed:["Clouded judgment—hone blade first.","Indecision paralyses—pick and move.","Re-opening wound—guard heart.","Avoidance turns to exile—rise soon.","Remorse—make amends.","Refusing boat keeps stuck—sail.","Deception exposed—honesty prevents loss.","Victim mindset—claim agency.","Nightmares fade—seek support.","Refuse ending—acceptance heals.","Gossip—think before speak.","Reckless crashes—balance speed.","Cold criticism—warm delivery.","Tyranny—invite heart in."][i]
  })),

  /* === PENTACLES === */
  ...["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Page","Knight","Queen","King"].map((n,i)=>({
    id:64+i, name:`${n} of Pentacles`, suit:"pentacles", svg:"",
    upright:["Material seed—plant and tend well.","Juggle priorities—flexibility prevents drops.","Teamwork builds—collaborate gladly.","Secure assets—don’t clutch till they suffocate.","Tough times—seek help; doors open.","Generosity flows—give and receive.","Assess crop—adjust for better yield.","Craft hones mastery—practice sharpens.","Self-sufficiency—enjoy garden you grew.","Legacy thrives—family and finances safe.","Student of skills—study and experiment.","Steady progress—slow steps reach goal.","Nurture provider—comfort multiplies.","Material mastery—wealth for community."][i],
    reversed:["Missed chance—share harvest.","Overwhelmed—consolidate before fall.","Poor planning—listen to experts.","Stingy fear—loosen grip to flow.","Pride refuses aid—accept support.","Strings-attached—ensure fairness.","Impatience—cultivate persistence.","Drudgery without joy—add meaning.","Isolation—invite company in.","Wealth without warmth—add heart.","Daydreams—turn ideas tangible.","Stubborn inertia—change route.","Workaholic burnout—care for self.","Miserly—share bounty freely."][i]
  }))
];

/* Utility */
window.TAROT_DECK.getRandom = () => {
  const card = TAROT_DECK[Math.floor(Math.random() * 78)];
  const reversed = Math.random() < 0.5;
  return { ...card, reversed };
};
