'use strict';

const emailContainer = document.querySelector('.email-container');
const emailFieldEl = document.querySelector('.email-container input[type=email]');
const emailSubmitBtn = document.querySelector('.email-container button');
const emailLabelEl = document.querySelector('.email-container label');

const labelMoveUp = function () {
  if (emailLabelEl.id === 'move-up') return;
  emailLabelEl.id = 'move-up';
};

const containerMarginAdjust = function () {
  if (window.innerWidth <= 640) return;
  emailContainer.id === '' ? (emailContainer.id = 'margin-adjust--JS') : (emailContainer.id = '');
};

const emailErrorElCreation = function (e) {
  //guard clause - stops from over generating
  if (document.querySelector('.errMsg')) return;

  // parent element
  const parentContainer = e.target.parentElement;

  //content
  const emailError = document.createElement('p');
  emailError.textContent = 'Oops! Please check your email';
  emailError.classList.add('errMsg');

  containerMarginAdjust();
  // insert html
  parentContainer.insertAdjacentElement('beforeend', emailError);
};

const emailAnimationToggle = function (className) {
  emailFieldEl.classList.toggle(className);
  // 640px is when the email form grid separates
  if (window.innerWidth >= 640) {
    emailSubmitBtn.classList.toggle(className);
  }
};

const addShakeClass = function () {
  emailAnimationToggle('err-animate');
};

const addSpinClass = function () {
  emailAnimationToggle('success');
};

const emailFormChecker = function (e) {
  const userInput = emailFieldEl.value;

  // prettier-ignore
  const emailRefExp = new RegExp(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  if (userInput.match(emailRefExp)) {
    setTimeout(() => (emailFieldEl.value = ''), 500);
    addSpinClass();
    setTimeout(() => addSpinClass(), 1000);
  } else {
    addShakeClass();
    emailErrorElCreation(e);
    setTimeout(() => addShakeClass(), 1000);
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
  if (!document.querySelector('.errMsg')) return;

  containerMarginAdjust();
  document.querySelector('.errMsg').remove();
});

emailFieldEl.addEventListener('focus', labelMoveUp);
