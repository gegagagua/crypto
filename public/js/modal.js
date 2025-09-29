// Load Modals dynamically
document.addEventListener("DOMContentLoaded", () => {
  fetch("modals.html")
    .then(response => {
      if (!response.ok) throw new Error("Failed to load modals.html");
      return response.text();
    })
    .then(html => {
      // Inject all modals into container
      document.getElementById("modals-container").innerHTML = html;
      console.log("✅ Modals injected");

      // Debug check for all modals
      ["depositCrypto", "withdrawModal", "convertCrypto", "changeEmailModal", "currencyModal"]
        .forEach(id => {
          console.log(id, document.getElementById(id) ? "✅ Found" : "❌ Missing");
        });

      // Initialize modal logic AFTER injection
      initConvertModal();
      initBalances();
      initEmailChange();
      initCurrencyModal();
    })
    .catch(err => console.error("Error loading modals:", err));
});

// Convert Modal 

document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const modalEl = document.getElementById('convertCrypto');
  const typeSelect = document.getElementById('convert-type');

  const panes = {
    "fiat-crypto": document.getElementById('fiat-crypto-pane'),
    "crypto-crypto": document.getElementById('crypto-crypto-pane'),
    "crypto-fiat": document.getElementById('crypto-fiat-pane')
  };

  const fromCrypto = document.getElementById('fromCrypto');         // Crypto ⇄ Crypto (From)
  const toCrypto   = document.getElementById('toCrypto');           // Crypto ⇄ Crypto (To)
  const fromCryptoFiat = document.getElementById('fromCryptoFiat'); // Crypto ⇄ Fiat (From)

  // Helper: show a pane and sync the selector value
  function showPane(type) {
    Object.values(panes).forEach(p => p && p.classList.add('d-none'));
    if (panes[type]) panes[type].classList.remove('d-none');
    if (typeSelect) typeSelect.value = type;
  }

  // Allow manual switching via dropdown
  if (typeSelect) {
    typeSelect.addEventListener('change', function () {
      showPane(this.value);
    });
  }

  // Disallow selecting same coin in "To" as "From" (Crypto ⇄ Crypto)
  function syncFromTo() {
    if (!(fromCrypto && toCrypto)) return;
    const selectedFrom = fromCrypto.value;
    [...toCrypto.options].forEach(opt => opt.disabled = false);
    const match = [...toCrypto.options].find(opt => opt.value === selectedFrom);
    if (match) match.disabled = true;
    if (toCrypto.value === selectedFrom) {
      const firstAvail = [...toCrypto.options].find(opt => !opt.disabled);
      if (firstAvail) toCrypto.value = firstAvail.value;
    }
  }
  if (fromCrypto) fromCrypto.addEventListener('change', syncFromTo);
  if (toCrypto)   toCrypto.addEventListener('change', syncFromTo);

});


// Convet Modal Balance 

document.addEventListener("DOMContentLoaded", function () {
    // Elements
    const fromFiat = document.getElementById("fromFiat");
    const fiatBalance = document.getElementById("fiatBalance");

    const fromCrypto = document.getElementById("fromCrypto");
    const cryptoBalance = document.getElementById("cryptoBalance");

    const fromCryptoFiat = document.getElementById("fromCryptoFiat");
    const cryptoFiatBalance = document.getElementById("cryptoFiatBalance");

    // Mock balances (replace with API values later)
    const balances = {
        EUR: "500.00 EUR",
        USD: "1000.00 USD",
        GBP: "250.00 GBP",
        BTC: "0.123 BTC",
        ETH: "1.45 ETH",
        BNB: "5.00 BNB",
        XRP: "2000 XRP",
        SOL: "30 SOL",
        TRX: "15000 TRX",
        USDT: "800 USDT"
    };

    // Update functions
    function updateFiatBalance() {
        const coin = fromFiat.value;
        fiatBalance.textContent = balances[coin] || `0.00 ${coin}`;
    }

    function updateCryptoBalance() {
        const coin = fromCrypto.value;
        cryptoBalance.textContent = balances[coin] || `0.00 ${coin}`;
    }

    function updateCryptoFiatBalance() {
        const coin = fromCryptoFiat.value;
        cryptoFiatBalance.textContent = balances[coin] || `0.00 ${coin}`;
    }

    // Init + Listeners
    updateFiatBalance();
    updateCryptoBalance();
    updateCryptoFiatBalance();

    fromFiat.addEventListener("change", updateFiatBalance);
    fromCrypto.addEventListener("change", updateCryptoBalance);
    fromCryptoFiat.addEventListener("change", updateCryptoFiatBalance);
});
