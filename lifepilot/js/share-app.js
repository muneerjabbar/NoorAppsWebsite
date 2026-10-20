(function () {
  var TEXT =
    '🌟 *Meet LifePilot — Your All-in-One Personal Life Assistant!*\n\n' +
    'Why should you need 100 apps?\n\n' +
    'Stay organised and manage everything that matters in *one place*\n' +
    '🚫 no ads, no clutter, no mandatory accounts.\n' +
    '🔒 Your data stays on your phone! Or Your Own Drive\n\n' +
    '✨ *Key Features:-*\n' +
    '📏 Measure Objects ,Lands\n' +
    '📐 Calculate Length/Area\n' +
    '📄 PDF Tools\n' +
    '📞 Bulk SMS\n' +
    '📅 Scheduled Calls and Call Trees\n' +
    '🔳 QR & Barcode Creator with Custom Logos\n' +
    '💸 Lend/Borrow Money Tracking/Sharable Reminder Msgs\n' +
    '👥 Contact Management\n' +
    '💰 Expenses, Bills & Subscription Tracking\n' +
    '☁️ Google Drive Backup\n' +
    '🧮 Advanced Calculator\n' +
    '⚖️ Digital Ruler\n' +
    '📷 QR Scanner\n' +
    '🎙️ Voice Recorder\n' +
    '🌸 Menstrual Calendar\n' +
    '🧭 Advanced Compass Features\n' +
    '⏰ Reminders\n' +
    '✅ Tasks, Reminders, Calendar\n' +
    '📊 Daily Dashboard\n' +
    '🧰 Handy Tools\n' +
    '⏱️ Timers\n' +
    '📝 Notes\n' +
    '📔 Journal\n' +
    '🎯 Personal Goals\n' +
    '🔐 Secure Document Vault with Optional PIN Lock\n\n' +
    '📲 *Try LifePilot today and simplify your life!*\n\n' +
    '*Install from Playstore* 👉 https://noorapps.net/lifepilot/app.html';

  var ICON =
    '<svg class="share-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';

  function shareApp() {
    var text = TEXT;
    if (navigator.share) {
      navigator.share({
        title: 'LifePilot',
        text: text,
      }).catch(function () {});
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        alert('Share text copied. Paste it in WhatsApp, email, or any app.');
      }).catch(function () {
        window.prompt('Copy this text to share:', text);
      });
      return;
    }
    window.prompt('Copy this text to share:', text);
  }

  document.querySelectorAll('[data-share-app]').forEach(function (el) {
    if (!el.querySelector('.share-icon')) {
      el.insertAdjacentHTML('afterbegin', ICON);
    }
    el.addEventListener('click', function (e) {
      e.preventDefault();
      shareApp();
    });
  });
})();
