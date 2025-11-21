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
    "The Fool": {
      "PatternRecognition×Nigredo": "The pattern breaking down: your tendency to leap without looking, creating chaos that could be avoided with a moment’s pause.",
      "PatternRecognition×Rubedo": "The pattern leading to mastery: calculated risk-taking—learning to trust instinct while gathering just enough information to leap wisely.",
      "ShadowIntegration×Nigredo": "The shadow of recklessness is exposed—your fear of commitment masks itself as ‘freedom’ but creates scattered results.",
      "ShadowIntegration×Rubedo": "Your inner fool, once integrated, becomes the spark that ignites every future breakthrough."
    },
    "Eight of Pentacles": {
      "PatternRecognition×Nigredo": "The pattern breaking down: perfectionism that paralyzes progress—your need to get everything ‘just right’ prevents completion.",
      "PatternRecognition×Rubedo": "The pattern leading to mastery: deliberate practice—turning repetitive tasks into ritual that hones expertise over time.",
      "ShadowIntegration×Nigredo": "The shadow of cutting corners is revealed—your rush to finish masks deeper fear that your work won’t be valued.",
      "ShadowIntegration×Rubedo": "Your ability to find efficiency, once integrated, becomes the super-power that lets you work smarter while maintaining quality."
    },
    "Ten of Wands": {
      "PatternRecognition×Nigredo": "The pattern breaking down: saying ‘yes’ to everything while your own goals suffocate under the weight of others’ expectations.",
      "PatternRecognition×Rubedo": "The pattern leading to mastery: selective responsibility—learning to carry only what aligns with your authentic purpose.",
      "ShadowIntegration×Nigredo": "The martyr shadow is exposed—believing that if you don’t do it all, nothing gets done, which feeds ego but drains vitality.",
      "ShadowIntegration×Rubedo": "Your inner martyr, once integrated, becomes the wise leader who delegates effortlessly, multiplying impact through empowered teams."
    },
    "The Hermit": {
      "PatternRecognition×Nigredo": "The pattern breaking down: isolation used as escape—your withdrawal becomes avoidance rather than sacred solitude.",
      "PatternRecognition×Rubedo": "The pattern leading to mastery: intentional solitude—creating structured retreat that yields crystal-clear inner guidance.",
      "ShadowIntegration×Nigredo": "The shadow of excessive self-reliance is revealed—fear that others won’t understand your truth keeps you lonely.",
      "ShadowIntegration×Rubedo": "Your inner hermit, once integrated, becomes the beacon who shares wisdom at exactly the right moment, guiding others without losing self."
    },
    "Ace of Pentacles": {
      "PatternRecognition×Nigredo": "The pattern breaking down: missed opportunities through hesitation—your fear of imperfection prevents planting the seed.",
      "PatternRecognition×Rubedo": "The pattern leading to mastery: seed-planting ritual—turning every practical idea into tangible form through consistent action.",
      "ShadowIntegration×Nigredo": "The shadow of scarcity is exposed—belief that there’s never enough resources blocks you from seeing open doors.",
      "ShadowIntegration×Rubedo": "Your inner provider, once integrated, becomes the magnet that attracts lasting abundance by sharing generously from an infinite well."
    }
  };

  /* DEFAULTS for unlisted cards */
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
