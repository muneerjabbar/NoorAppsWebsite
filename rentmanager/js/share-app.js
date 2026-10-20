(function () {
  var TEXT =
    '🏠 Rent Manager – Make Landlords\'s life Easier!\n\n' +
    'Manage your tenants, simplify rent tracking, and keep everything in one place. 📱\n\n' +
    '✨ How?\n\n' +
    '📃 Contracts, tenant details & documents\n' +
    '💰 Rent payments, discounts & outstanding dues\n' +
    '📅 Flexible rent periods – weekly, monthly, yearly & more\n' +
    '🧾 Issue rent receipts instantly\n' +
    '🛠️ Maintenance & tax records\n' +
    '✉️ Share or email statements & reminders\n\n' +
    '🚀 Get started with Rent Manager today!\n' +
    'Install now from playstore (Android/IOS) -\n' +
    '🔗 https://noorapps.net/rentmanager/app.html';

  var ICON =
    '<svg class="share-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';

  function shareApp() {
    var text = TEXT;
    if (navigator.share) {
      navigator.share({
        title: 'Rent Manager',
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
