/* KODEX RK 2×2 Protocol – 4-Dimensional Tarot Intelligence */
window.RKProtocol = (() => {
  /* ---------- ROUTE SELECTION ---------- */
  function pickRoute(cardReversed, questionText = "") {
    const protocol = cardReversed ? "ShadowIntegration" : "PatternRecognition";
    const lower = questionText.toLowerCase();
    const nigredoKeys = /problem|obstacle|stuck|confused|breakdown|hurt|fear|loss|end|wrong|bad|difficult/i;
    const rubedoKeys  = /grow|improve|next|step|master|learn|build|achieve|better|success|breakthrough|power/i;
    let stage = "Nigredo";
    if (rubedoKeys.test(lower) && !nigredoKeys.test(lower)) stage = "Rubedo";
    else if (nigredoKeys.test(lower)) stage = "Nigredo";
    return { protocol, stage, route: `${protocol}×${stage}` };
  }

  /* ---------- DYNAMIC SENTENCE BANK ---------- */
  const bank = {
    "PatternRecognition×Nigredo": [
      "Through the RK 2×2 lens: the pattern you rely on is cracking so a wiser cycle can form.",
      "RK insight: an old loop dissolves—notice what keeps repeating and let it break.",
      "4-D view: the system unravels to expose the glitch you’ve ignored—adapt now."
    ],
    "PatternRecognition×Rubedo": [
      "RK 2×2 angle: mastering this pattern unlocks the next level—practice makes power.",
      "Dimensional add-on: when you own the rhythm, it becomes your breakthrough engine.",
      "Protocol note: refine the cycle and it carries you to mastery on autopilot."
    ],
    "ShadowIntegration×Nigredo": [
      "Shadow angle: a buried fear rises for confrontation—face it to dissolve it.",
      "RK addendum: the dark piece you deny is now visible—integration starts with honesty.",
      "Dimensional key: shadow material breaks open—what you hide owns you until welcomed."
    ],
    "ShadowIntegration×Rubedo": [
      "Shadow alchemy: the very trait you hide becomes fuel for evolution—transmute it.",
      "RK lens: integrate the shadow and it turns from enemy to super-power source.",
      "4-D insight: your rejected aspect, once owned, propels authentic strength."
    ]
  };

  /* ---------- PUBLIC API ---------- */
  return {
    interpret: (cardReversed, questionText) => {
      const { route } = pickRoute(cardReversed, questionText);
      const pool = bank[route] || bank["PatternRecognition×Nigredo"];
      return pool[Math.floor(Math.random() * pool.length)];
    },
    tag: (cardReversed, questionText) => {
      const { route } = pickRoute(cardReversed, questionText);
      return `Powered by KODEX RK 2×2 Protocol – Route: ${route}`;
    }
  };
})();
