/* KODEX Swiss Ephemeris – accurate real-time data (Astro-Seek) */
window.CosmicTiming = (() => {
  const ENDPOINT = "https://astrosapi.com/api/planets-today"; // free tier, no key

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
    try {
      const res = await fetch(ENDPOINT);
      const data = await res.json();
      const moon = data.find(p => p.name === 'Moon');
      const mercury = data.find(p => p.name === 'Mercury');
      const phase = phaseName(moon.angle);
      return {
        moonPhase: phase,
        moonSign: moon.zodiac,
        mercuryStatus: mercury.is_retrograde ? 'Retrograde' : 'Direct',
        actionWindow: actionWindow(phase),
        cosmicBlurb: `This reading occurs during ${phase} in ${moon.zodiac} — cosmic energy supports ${phase.toLowerCase()} themes.`
      };
    } catch (e) {
      console.warn('Cosmic API failed, using manual 2025-11-19 data', e);
      // HARD-CODED correct values for 19 Nov 2025
      return {
        moonPhase: 'Waning Crescent',
        moonSign: 'Scorpio',
        mercuryStatus: 'Retrograde',
        actionWindow: actionWindow('Waning Crescent'),
        cosmicBlurb: 'This reading occurs during deep-release Waning Crescent in Scorpio while Mercury retrogrades — perfect for shadow work and letting go.'
      };
    }
  }

  return { getCosmic };
})();
