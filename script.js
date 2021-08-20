'use strict';

const emailContainer = document.querySelector('.email-container');
const emailFieldEl = document.querySelector('.email-container input[type=email]');
const emailSubmitBtn = document.querySelector('.email-container button');

const emailErrorElCreation = function (e) {
  //guard clause - stops from over generating
  if (document.querySelector('.errMsg')) return;

  // parent element
  const parentContainer = e.target.parentElement;

  //content
  const emailError = document.createElement('p');
  emailError.textContent = 'Oops! Please check your email';
  emailError.classList.add('errMsg');

  // insert html
  parentContainer.insertAdjacentElement('beforeend', emailError);
};

const addShakeClass = function () {
  // remove incase of screen resize and to replay animation
  emailFieldEl.classList.remove('err-animate');
  emailSubmitBtn.classList.remove('err-animate');

  // 640px is when the email form grid separates
  if (window.innerWidth <= 640) {
    emailFieldEl.classList.add('err-animate');
  } else {
    emailFieldEl.classList.add('err-animate');
    emailSubmitBtn.classList.add('err-animate');
  }
};

const addSpinClass = function () {
  // remove incase of screen resize and to replay animation
  emailFieldEl.classList.remove('success');
  emailSubmitBtn.classList.remove('success');

  // 640px is when the email form grid separates
  if (window.innerWidth <= 640) {
    emailFieldEl.classList.add('success');
  } else {
    emailFieldEl.classList.add('success');
    emailSubmitBtn.classList.add('success');
  }
};

const emailFormChecker = function (e) {
  const userInput = emailFieldEl.value;

  // prettier-ignore
  const emailRefExp = new RegExp(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  if (userInput.match(emailRefExp)) {
    setTimeout(() => (emailFieldEl.value = ''), 500);
    addSpinClass();
  } else {
    addShakeClass();
    emailErrorElCreation(e);
  }
};

// event listeners
emailSubmitBtn.addEventListener('click', emailFormChecker);

emailContainer.addEventListener('keydown', function (e) {
  if (e.key !== 'Enter') return;
  emailFormChecker(e);
});

// reset error message when user begins typing again
emailFieldEl.addEventListener('input', function (e) {
  //
  if (!document.querySelector('.errMsg')) return;

  document.querySelector('.errMsg').remove();
});
