(function () {
  function appUrl() {
    var path = window.location.pathname.replace(/[^/]+$/, '');
    return window.location.origin + path + 'app.html';
  }

  var TEXT =
    'LifePilot — one app for everyday tools\n\n' +
    'Puts the tools people usually spread across a dozen apps into one place, so you do not have to fill your phone with separate downloads. Your data stays on your device.\n\n' +
    'What you can do with LifePilot:\n' +
    '• PDF scanning, digital measuring for objects and plots, and a digital ruler\n' +
    '• QR code and barcode creator & scanner\n' +
    '• Advanced compass, advanced calculator, world clock, voice recorder, and calendar\n' +
    '• Expense manager, plus borrowed and lent money\n' +
    '• Schedule calls, call tree, and bulk SMS\n' +
    '• Menstrual calendar, notes, journal, document shelf, and vehicle management\n' +
    '• Tasks, reminders, and follow-ups\n\n' +
    'Practical tools for ordinary days, kept locally on your device.\n\n' +
    'Install LifePilot:\n' +
    appUrl();

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
