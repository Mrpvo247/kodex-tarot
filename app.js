async function buildReading(cards, question, spreadName = 'Single') {
  const cosmic = await CosmicTiming.getCosmic();
  const lines = [];
  lines.push(`🔮 ${spreadName} Reading – ${new Date().toLocaleString()}`);
  if (question) lines.push(`Question: “${question}”\n`);

  cards.forEach((c, i) => {
    const pos = spreadPositions(spreadName, i);
    const rk = RKProtocol.interpret(c.name, c.reversed, question);
    const tag = RKProtocol.tag(c.reversed, question);
    lines.push(
      `───────────────────────────────────────────`,
      `${pos}`,
      `───────────────────────────────────────────`,
      ``,
      `Card: ${c.name} (${c.reversed ? 'Reversed' : 'Upright'})`,
      ``,
      `CARD MEANING:`,
      c[c.reversed ? 'reversed' : 'upright'],
      ``,
      `RK 2x2 DIMENSIONAL INSIGHT:`,
      `${rk} ${tag}`
    );
  });

  lines.push(
    '',
    '🌙 COSMIC TIMING CONTEXT',
    '',
    `Current Moon Phase: ${cosmic.moonPhase}`,
    `Moon in: ${cosmic.moonSign}`,
    `Mercury Status: ${cosmic.mercuryStatus}`,
    '',
    `⏰ Action Window: ${cosmic.actionWindow}`,
    '',
    cosmic.cosmicBlurb,
    '',
    'KODEX TAROT provides educational timing insights and symbolic interpretation. Readings do not guarantee outcomes and are not financial, medical, or legal advice. You are responsible for your own decisions.'
  );

  return { text: lines.join('\n'), cards, cosmic };
}
