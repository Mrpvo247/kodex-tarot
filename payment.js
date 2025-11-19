/* KODEX Stripe Payment Handler – $4.99/month Premium subscription */
window.KODEXPayment = (() => {
  const STRIPE_PUBLISHABLE = 'pk_test_51SRxka2NKVaILuO4vuFVji03WGKnJLkOYZBmxKyZSh9qeZBH3Zen7vJqIi9M6hwqLqkFgPcDHk0w8pSp7mX0rYxc006tf9mEJA';
  const PRICE_ID           = 'price_1SRxka2NKVaILuO4DnA2qIfiqgDHihW0ixugKCMqtqNt7lCoqoXlriWG7XH40VdSWQy73HPphXrC1FHO7CD2bC2g00yLjcYQXo';

  function loadStripe() {
    return new Promise(res => {
      if (window.Stripe) return res(window.Stripe);
      const s = document.createElement('script');
      s.src = 'https://js.stripe.com/v3/';
      s.onload = () => res(window.Stripe(STRIPE_PUBLISHABLE));
      document.head.appendChild(s);
    });
  }

  async function startCheckout() {
    const stripe = await loadStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: PRICE_ID, quantity: 1 }],
      mode: 'subscription',
      successUrl: `${window.location.origin}${window.location.pathname}?premium=success`,
      cancelUrl:  `${window.location.origin}${window.location.pathname}?premium=cancelled`
    });
    if (error) alert('Stripe redirect failed: ' + error.message);
  }

  function verifyStatus() {
    const params = new URLSearchParams(location.search);
    if (params.get('premium') === 'success') {
      localStorage.setItem('kodexPremium', 'true');
      localStorage.setItem('kodexPremiumDate', new Date().toISOString());
      history.replaceState({}, '', location.pathname);
      return true;
    }
    return localStorage.getItem('kodexPremium') === 'true';
  }

  async function openPortal() {
    const stripe = await loadStripe();
    alert('Customer Portal coming soon.\nEmail kodextarot@gmail.com to cancel or manage billing.');
  }

  return { startCheckout, verifyStatus, openPortal };
})();
