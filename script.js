(() => {
  const form = document.getElementById('subscribe-form');
  const input = document.getElementById('msisdn');
  const error = document.getElementById('phone-error');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const phone = input.value.replace(/[\s()-]/g, '').replace(/^00370/, '+370');
    const valid = /^(?:\+370|370)?6\d{7}$/.test(phone);
    input.setAttribute('aria-invalid', String(!valid));
    error.hidden = valid;
    if (!valid) { input.focus(); return; }
    // Only open the SMS composer. No message is sent and no purchase is confirmed.
    // The mockup specifies shortcode 1337 but supplies no SMS keyword.
    window.location.href = 'sms:1337';
  });
  input.addEventListener('input', () => { input.removeAttribute('aria-invalid'); error.hidden = true; });
})();
