/* KODEX Swiss Ephemeris Integration – live Moon phase, sign, action window */
window.CosmicTiming = (() => {
  const API_KEY = 'YOUR_ASTROAPI_KEY'; // <-- paste key here when ready
  const ENDPOINT = 'https://api.astroapi.com/v1/current_planetary_positions';

  function phaseName(angle) {
    const p = angle % 360;
    if (p < 45) return 'New Moon';
    if (p < 90) return 'Waxing Crescent';
    if (p < 135) return 'First Quarter';
    if (p < 180) return 'Waxing Gibbous';
    if (p < 225) return 'Full Moon';
    if (p < 270) return 'Waning Gibbous';
    if (p < 315) return 'Last Quarter';
    return 'Waning Crescent';
  }

  function actionWindow(phase) {
    const map = {
      'New Moon': 'Optimal for setting intentions and planting seeds for this guidance',
      'Waxing Crescent': 'Optimal for taking initial action on this insight',
      'First Quarter': 'Optimal for pushing through obstacles revealed by this reading',
      'Waxing Gibbous': 'Optimal for refining and adjusting your approach',
      'Full Moon': 'Optimal for bringing this guidance to full manifestation',
      'Waning Gibbous': 'Optimal for sharing wisdom gained from this reading',
      'Last Quarter': 'Optimal for releasing what no longer serves this path',
      'Waning Crescent': 'Optimal for rest and reflection on this message'
    };
    return map[phase] || 'Optimal for contemplation';
  }

  async function getCosmic() {
    if (!API_KEY || API_KEY === 'YOUR_ASTROAPI_KEY') {
      // DEMO fallback
      const now = new Date();
      const day = now.getDate();
      const phase = ['Waxing Crescent', 'First Quarter', 'Waxing Gibbous', 'Full Moon'][day % 4];
      const sign = ['Taurus', 'Gemini', 'Cancer', 'Leo'][day % 4];
      return {
        moonPhase: phase,
        moonSign: sign,
        mercuryStatus: 'Direct',
        actionWindow: actionWindow(phase),
        cosmicBlurb: `This reading occurs during steady ${phase} energy—perfect for incremental growth.`
      };
    }

    try {
      const res = await fetch(`${ENDPOINT}?api_key=${API_KEY}`);
      const data = await res.json();
      const moon = data.data.find(p => p.name === 'Moon');
      const mercury = data.data.find(p => p.name === 'Mercury');
      const phase = phaseName(moon.angle);
      return {
        moonPhase: phase,
        moonSign: moon.zodiac,
        mercuryStatus: mercury.is_retrograde ? 'Retrograde' : 'Direct',
        actionWindow: actionWindow(phase),
        cosmicBlurb: `This reading occurs during ${phase} in ${moon.zodiac}—cosmic energy supports ${phase.toLowerCase()} themes.`
      };
    } catch (e) {
      console.warn('CosmicTiming: API failed, using demo data', e);
      return getCosmic(); // recursive fallback
    }
  }

  return { getCosmic };
})();
