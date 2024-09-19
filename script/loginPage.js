// search: from submit reloading this page

// step - 1: set event handler
document
  .getElementById('login-btn')
  .addEventListener('click', function (event) {
    // step-2: prevent default behavior (prevent reloading browser)
    event.preventDefault();

    const Number = document.getElementById('phone-number').value;
    const Password = document.getElementById('password').value;

    if (Number.length === 11 && Password === '1234') {
      window.location.href = 'homePage.html';
    } else {
      alert('Sorry your number & pin not mach');
    }
  });
