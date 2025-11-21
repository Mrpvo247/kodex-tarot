/* KODEX TAROT – 78-card working set */
window.TAROT_DECK = [
  /* MAJOR */
  {id:0,name:"The Fool",suit:"major",svg:"",upright:"Fresh start – trust instinct and leap.",reversed:"Recklessness – pause and look first."},
  {id:1,name:"The Magician",suit:"major",svg:"",upright:"You have the tools – focus and create.",reversed:"Scattered energy – channel power honestly."},
  {id:2,name:"High Priestess",suit:"major",svg:"",upright:"Answers in silence – listen within.",reversed:"Intuition clouded – wait before deciding."},
  {id:3,name:"The Empress",suit:"major",svg:"",upright:"Life blooms – nurture with patience.",reversed:"Over-giving – refill your own well."},
  {id:4,name:"The Emperor",suit:"major",svg:"",upright:"Lead with structure – build stability.",reversed:"Control turns rigid – share the throne."},
  {id:5,name:"The Hierophant",suit:"major",svg:"",upright:"Tradition guides – learn from mentors.",reversed:"Dogma stifles – find your own ethics."},
  {id:6,name:"The Lovers",suit:"major",svg:"",upright:"Meaningful choice – align heart & head.",reversed:"Misalignment – check motives match words."},
  {id:7,name:"The Chariot",suit:"major",svg:"",upright:"Drive & discipline – steer to victory.",reversed:"Wavering direction – reclaim the reins."},
  {id:8,name:"Strength",suit:"major",svg:"",upright:"Quiet courage – tame any beast.",reversed:"Self-doubt – soften your self-talk."},
  {id:9,name:"The Hermit",suit:"major",svg:"",upright:"Solitude reveals inner wisdom.",reversed:"Isolation – re-enter when ready."},
  {id:10,name:"Wheel of Fortune",suit:"major",svg:"",upright:"Cycles turn favorably – act now.",reversed:"Resist change – flow with the cycle."},
  {id:11,name:"Justice",suit:"major",svg:"",upright:"Fair outcome – truth balances past.",reversed:"Bias exposed – own your part."},
  {id:12,name:"Hanged Man",suit:"major",svg:"",upright:"Pause flips view – surrender impatience.",reversed:"Stuck refusal – release old stance."},
  {id:13,name:"Death",suit:"major",svg:"",upright:"Chapter closes – grieve, then step forward.",reversed:"Fear endings – accept inevitable shift."},
  {id:14,name:"Temperance",suit:"major",svg:"",upright:"Blend opposites – healing mixture.",reversed:"Extremes clash – find middle ground."},
  {id:15,name:"The Devil",suit:"major",svg:"",upright:"Temptation – name the chain to break it.",reversed:"Awareness snaps bond – reclaim freedom."},
  {id:16,name:"The Tower",suit:"major",svg:"",upright:"Sudden shake-up – rebuild on truth.",reversed:"Avoid upheaval – brace and renovate willingly."},
  {id:17,name:"The Star",suit:"major",svg:"",upright:"Hope returns – follow steady light.",reversed:"Faith flickers – rekindle belief."},
  {id:18,name:"The Moon",suit:"major",svg:"",upright:"Shadows distort – trust instinct.",reversed:"Confusion lifts – name fear aloud."},
  {id:19,name:"The Sun",suit:"major",svg:"",upright:"Clarity fuels success – shine generously.",reversed:"Clouds dim mood – step into light."},
  {id:20,name:"Judgement",suit:"major",svg:"",upright:"Wake-up call – answer and rise renewed.",reversed:"Ignore call – rise when bell rings."},
  {id:21,name:"The World",suit:"major",svg:"",upright:"Completion – celebrate full circle.",reversed:"Loose ends – tie them to close loop."},

  /* MINOR – 14 per suit */
  ...["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Page","Knight","Queen","King"].map((n,i)=>({
    id:22+i,name:`${n} of Wands`,suit:"wands",svg:"",
    upright:["Creative spark – light fuse and begin.","Future plans – pick route and walk.","Ships appear – collaboration bears fruit.","Milestone – pause to celebrate ground.","Friendly sparring – compete without hostility.","Victory parade – accept applause and lead.","Stand ground – advantage to determined.","Messages fly – say yes to rapid motion.","Battle-scarred – guard final stretch.","Burden heavy – delegate or drop cargo.","Curious enthusiasm – explore new territory.","Charge ahead – momentum clears obstacles.","Charismatic leader – warmth attracts support.","Visionary commander – bold decisions inspire."][i],
    reversed:["Spark damp – rekindle passion first.","Fear comfort blocks – choose boldly.","Impatience slows – trust crew.","Restlessness after – enjoy moment.","Clashing egos – seek common rules.","Imposter syndrome – own worth quietly.","Giving ground – hold longer.","Delays – clear runway first.","Exhaustion – drop shield when safe.","Refusing help – share the weight.","Restlessness – set concrete goal.","Reckless speed – brake strategically.","Burnout – recharge inner fire.","Tyranny – listen as much as speak."][i]
  })),
  ...["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Page","Knight","Queen","King"].map((n,i)=>({
    id:36+i,name:`${n} of Cups`,suit:"cups",svg:"",
    upright:["Emotional fountain – let love pour out.","Mutual respect – partner generously.","Celebrate friendship – shared joy multiplies.","Boredom invites – look up and reach.","Focus on spill – notice cups upright.","Nostalgia gifts – enjoy sweet memories.","Many visions – choose grounded one.","Walk from empty – seek deeper waters.","Wish granted – savor and share.","Harmonious home – rainbow touches all.","Creative message – open envelope.","Romantic quest – follow heart.","Deep empathy – trust caring insight.","Emotional mastery – calm through storms."][i],
    reversed:["Dam closed – release guilt.","Mismatch – re-align expectations.","Gossip tension – keep circles healthy.","Withdrawal serves – return refreshed.","Perspective returns – gather upright cups.","Trapped in past – update story.","Illusions scatter – commit to one.","Fear leaving – step out anyway.","Smug isolation – invite company.","Picture mask – address real needs.","Immaturity – grow before diving.","Unrealistic offer – test before leap.","Overwhelmed – shore boundaries.","Suppressed feelings – allow expression."][i]
  })),
  ...["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Page","Knight","Queen","King"].map((n,i)=>({
    id:50+i,name:`${n} of Swords`,suit:"swords",svg:"",
    upright:["Mental clarity – speak sharp truth.","Stalemate – remove blindfold and decide.","Heartache pierces – acknowledge to heal.","Rest restores – solitude is medicine.","Hollow victory – consider cost first.","Transition – leave rough seas.","Strategic retreat – act discreetly.","Self-prison – notice loose ropes.","Anxiety loops – share to shrink.","Sudden ending – rock bottom to rise.","Curious questions – explore freely.","Swift charge – momentum clears.","Clear honesty – truth serves compassion.","Logical authority – fair decisions."][i],
    reversed:["Clouded judgment – hone blade first.","Indecision paralyses – pick and move.","Re-opening wound – guard heart.","Avoidance exile – rise soon.","Remorse conflict – make amends.","Refusing boat – board and sail.","Deception exposed – honesty prevents loss.","Victim mindset – claim agency.","Nightmares fade – seek support.","Refuse ending – acceptance heals.","Gossip – think before speak.","Reckless haste – balance speed.","Cold criticism – warm delivery.","Tyranny – invite heart in."][i]
  })),
  ...["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Page","Knight","Queen","King"].map((n,i)=>({
    id:64+i,name:`${n} of Pentacles`,suit:"pentacles",svg:"",
    upright:["Material seed – plant and tend well.","Juggle priorities – flexibility prevents drops.","Teamwork builds – collaborate gladly.","Secure assets – don’t clutch till suffocate.","Tough times – seek help; doors open.","Generosity flows – give and receive.","Assess crop – adjust for better yield.","Craft hones – practice sharpens skill.","Self-sufficiency – enjoy garden you grew.","Lasting legacy – family finances thrive.","Student skills – study and experiment.","Steady progress – slow steps reach goal.","Nurturing provider – comfort multiplies.","Material mastery – wealth for community."][i],
    reversed:["Missed chance – share harvest.","Overwhelmed – consolidate before fall.","Poor planning – listen to experts.","Stingy fear – loosen grip to flow.","Pride refuses – accept support.","Strings-attached – ensure fairness.","Impatience – cultivate persistence.","Work drudgery – add meaning.","Isolation – invite company.","Wealth without warmth – add heart.","Daydreams – turn ideas tangible.","Stubborn inertia – change route.","Workaholic burnout – care for self.","Miserly boss – share bounty freely."][i]
  }))
];

/* Utility */
window.TAROT_DECK.getRandom = () => {
  const card = TAROT_DECK[Math.floor(Math.random() * 78)];
  const reversed = Math.random() < 0.5;
  return { ...card, reversed };
};
