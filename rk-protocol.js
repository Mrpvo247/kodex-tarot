/* KODEX RK 2×2 Protocol – card-specific dimensional insights */
window.RKProtocol = (() => {
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

  /* CARD-SPECIFIC INSIGHTS */
  const insights = {
    /* MAJOR */
    "The Fool": {
      "PatternRecognition×Nigredo": "The pattern of endless new beginnings is collapsing—choose one path before dispersion wins.",
      "PatternRecognition×Rubedo": "Mastering the art of calculated leaps turns spontaneity into your strategic super-power.",
      "ShadowIntegration×Nigredo": "The shadow of recklessness is exposed—integrate foresight to transform chaos into freedom.",
      "ShadowIntegration×Rubedo": "Your inner fool, once befriended, becomes the spark that ignites every future breakthrough."
    },
    "The Magician": {
      "PatternRecognition×Nigredo": "The pattern of scattered tricks is dissolving—focus your will to avoid empty illusions.",
      "PatternRecognition×Rubedo": "Owning every tool at your table lets you manifest outcomes others call magic.",
      "ShadowIntegration×Nigredo": "Manipulative shadow surfaces—own it to convert persuasion into authentic influence.",
      "ShadowIntegration×Rubedo": "Integrated shadow becomes manifesting force—your word now shapes reality."
    },
    "Death": {
      "PatternRecognition×Nigredo": "The cycle of forced endings is breaking—stop resisting what must die.",
      "PatternRecognition×Rubedo": "Mastering surrender turns every ending into raw material for rebirth.",
      "ShadowIntegration×Nigredo": "Fear of finality is revealed—face mortality to unlock fearless living.",
      "ShadowIntegration×Rubedo": "Death-shadow integrated becomes your power to release and renew at will."
    },
    /* WANDS */
    "Ace of Wands": {
      "PatternRecognition×Nigredo": "The spark pattern fizzles—rekindle passion before opportunity cools.",
      "PatternRecognition×Rubedo": "Mastering ignition lets you launch projects with unstoppable momentum.",
      "ShadowIntegration×Nigredo": "Creative shadow of apathy is exposed—ignite curiosity to banish inertia.",
      "ShadowIntegration×Rubedo": "Integrated creative spark becomes perpetual engine of innovation."
    },
    /* CUPS */
    "Ace of Cups": {
      "PatternRecognition×Nigredo": "Emotional well is capped—break the seal to feel fully again.",
      "PatternRecognition×Rubedo": "Mastering emotional flow turns you into a conduit for healing connections.",
      "ShadowIntegration×Nigredo": "Repressed emotion surfaces—welcome it to prevent inner flood.",
      "ShadowIntegration×Rubedo": "Owned emotional depth becomes limitless compassion that refills every cup."
    },
    /* SWORDS */
    "Three of Swords": {
      "PatternRecognition×Nigredo": "Heartbreak pattern repeats—notice the narrative stitch and cut it cleanly.",
      "PatternRecognition×Rubedo": "Mastering heartbreak turns pain into precise boundaries that protect future love.",
      "ShadowIntegration×Nigredo": "Sorrow shadow is exposed—sit with pain to alchemize it into wisdom.",
      "ShadowIntegration×Rubedo": "Integrated sorrow becomes empathic blade that severs illusion and guards truth."
    },
    /* PENTACLES */
    "Seven of Pentacles": {
      "PatternRecognition×Nigredo": "Impatient ROI pattern collapses—long-game strategy now required.",
      "PatternRecognition×Rubedo": "Mastering cultivation turns waiting into compound abundance.",
      "ShadowIntegration×Nigredo": "Shadow of scarcity-based hustle is revealed—release panic to reap real yield.",
      "ShadowIntegration×Rubedo": "Integrated patience becomes magnetic field that draws mature rewards."
    }
  };

  /* DEFAULTS for cards not listed yet */
  const defaultBank = {
    "PatternRecognition×Nigredo": "The old pattern is dissolving—notice what keeps repeating and let it break.",
    "PatternRecognition×Rubedo": "Mastering this pattern unlocks the next level—refine the cycle and it carries you.",
    "ShadowIntegration×Nigredo": "A buried fear rises for confrontation—face it to dissolve its grip.",
    "ShadowIntegration×Rubedo": "The shadow, once integrated, becomes fuel for evolution—transmute it."
  };

  /* PUBLIC API */
  return {
    interpret: (cardName, cardReversed, questionText) => {
      const { route } = pickRoute(cardReversed, questionText);
      const cardMap = insights[cardName] || defaultBank;
      const pool = cardMap[route] || defaultBank[route] || defaultBank["PatternRecognition×Nigredo"];
      return pool;
    },
    tag: (cardReversed, questionText) => {
      const { route } = pickRoute(cardReversed, questionText);
      return `Powered by KODEX RK 2×2 Protocol – Route: ${route}`;
    }
  };
})();
