/* KODEX TAROT – Main Controller */
(() => {
  const state = {
    premium: KODEXPayment.verifyStatus(),
    todayDraw: null,
    history: JSON.parse(localStorage.getItem('kodexHistory') || '[]')
  };

  const $ = sel => document.querySelector(sel);
  const $$ = sel => [...document.querySelectorAll(sel)];

  function lockPremiumFeature(msg = 'Upgrade to Premium for unlimited access.') {
    if (!state.premium) { alert(msg); return true; }
    return false;
  }

  function drawCards(n = 1) {
    if (n > 1 && lockPremiumFeature()) return [];
    return Array.from({ length: n }, () => TAROT_DECK.getRandom());
  }

  async function buildReading(cards, question, spreadName = 'Single') {
    const cosmic = await CosmicTiming.getCosmic();
    const lines = [];
    lines.push(`🔮 ${spreadName} Reading – ${new Date().toLocaleString()}`);
    if (question) lines.push(`Question: “${question}”\n`);

    cards.forEach((c, i) => {
      const pos = spreadPositions(spreadName, i);
      const rk = RKProtocol.interpret(c.reversed, question);
      const tag = RKProtocol.tag(c.reversed, question);
      lines.push(
        `${pos} ${c.name} (${c.reversed ? 'Reversed' : 'Upright'})`,
        c[c.reversed ? 'reversed' : 'upright'],
        `${rk} ${tag}`
      );
    });

    lines.push(
      '',
      '🌙 Cosmic Timing Context',
      `Current Moon Phase: ${cosmic.moonPhase}`,
      `Moon in: ${cosmic.moonSign}`,
      `Mercury Status: ${cosmic.mercuryStatus}`,
      `⏰ Action Window: ${cosmic.actionWindow}`,
      cosmic.cosmicBlurb,
      '',
      'KODEX TAROT provides educational timing insights and symbolic interpretation. Readings do not guarantee outcomes and are not financial, medical, or legal advice. You are responsible for your own decisions.'
    );
    return { text: lines.join('\n'), cards, cosmic };
  }

  function spreadPositions(name, idx) {
    const map = {
      Single: () => 'Card:',
      '3-Card': i => ['Past:', 'Present:', 'Future:'][i],
      '5-Card': i => ['Present:', 'Challenge:', 'Past:', 'Future:', 'Advice:'][i],
      '7-Card': i => ['Past:', 'Present:', 'Hidden:', 'Obstacle:', 'External:', 'Advice:', 'Outcome:'][i]
    };
    return (map[name] || map.Single)(idx);
  }

  function renderCards(cards, target = '#cards') {
    const html = cards.map(c => `
      <div class="card ${c.reversed ? 'reversed' : ''}" data-id="${c.id}">
        <div class="card-face">${c.svg}</div>
        <p class="label">${c.name} <span>(${c.reversed ? 'Reversed' : 'Upright'})</span></p>
      </div>`).join('');
    $(target).innerHTML = html;
  }

  function saveToHistory(reading) {
    state.history.unshift({ ...reading, timestamp: Date.now() });
    localStorage.setItem('kodexHistory', JSON.stringify(state.history));
  }

  function shareReading(text) {
    if (navigator.share) {
      navigator.share({ title: 'KODEX Tarot Reading', text });
    } else {
      navigator.clipboard.writeText(text);
      alert('Reading copied to clipboard');
    }
  }

  function exportHistory() {
    if (lockPremiumFeature()) return;
    const blob = new Blob([JSON.stringify(state.history, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), { href: url, download: 'kodex-history.json' });
    a.click();
    URL.revokeObjectURL(url);
  }

  function init() {
    $('#dailyBtn').addEventListener('click', async () => {
      if (state.todayDraw && !state.premium) { alert('Free daily reading already taken. Upgrade for unlimited draws.'); return; }
      const cards = drawCards(1);
      const reading = await buildReading(cards, $('#question').value.trim());
      renderCards(cards);
      $('#output').textContent = reading.text;
      saveToHistory(reading);
      state.todayDraw = true;
    });

    $$('.spread-btn').forEach(btn => {
      btn.addEventListener('click', async e => {
        const spread = e.target.dataset.spread;
        const count = { '3': 3, '5': 5, '7': 7 }[spread] || 1;
        const cards = drawCards(count);
        const reading = await buildReading(cards, $('#question').value.trim(), `${count}-Card`);
        renderCards(cards);
        $('#output').textContent = reading.text;
        saveToHistory(reading);
      });
    });

    $('#upgradeBtn').addEventListener('click', () => KODEXPayment.startCheckout());
    $('#shareBtn').addEventListener('click', () => shareReading($('#output').textContent));
    $('#exportBtn').addEventListener('click', exportHistory);
    $('#historyBtn').addEventListener('click', () => {
      if (lockPremiumFeature()) return;
      $('#history').innerHTML = state.history.map(r => `
        <div class="history-item">
          <strong>${new Date(r.timestamp).toLocaleString()}</strong>
          <pre>${r.text.slice(0, 200)}…</pre>
        </div>`).join('');
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
