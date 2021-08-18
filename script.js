'use strict';

const emailFieldEl = document.querySelector('.email-container input[type=email]');
const emailSubmitBtn = document.querySelector('.email-container button');

emailSubmitBtn.addEventListener('click', function () {
  const userInput = emailFieldEl.value;

  // prettier-ignore
  const emailRefExp = new RegExp('^\w+([\.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,3})+$');
  //   https://www.w3resource.com/javascript/form/email-validation.php
  const test = new RegExp('ab*c', 'g');
  console.log(emailRefExp);
  console.log(userInput);
  console.log(typeof userInput);

  console.log(userInput.match(test));

  if (userInput.match(test)) {
    console.log('pass');
  } else {
    console.log('fail');
  }
});
