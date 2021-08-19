'use strict';

const emailContainer = document.querySelector('.email-container');
const emailFieldEl = document.querySelector('.email-container input[type=email]');
const emailSubmitBtn = document.querySelector('.email-container button');

const emailErrorElCreation = function (e) {
  // parent element
  const parentContainer = e.target.parentElement;

  //content
  const emailError = document.createElement('p');
  emailError.textContent = 'Oops! Please check your email';

  //standard css
  emailError.style.position = 'absolute';
  emailError.style.color = '#fb3e3e';
  emailError.style.fontFamily = 'var(--ff-primary)';
  emailError.style.fontSize = '0.75rem';
  emailError.style.lineHeight = '0.75rem';
  emailError.style.fontWeight = '700';
  emailError.style.left = '29px';

  // dynamic css based on parent
  const parentContainerHt = window.getComputedStyle(parentContainer).height;
  emailError.style.top = Number.parseFloat(parentContainerHt) + 8 + 'px';

  // attach css to parent
  parentContainer.style.position = 'relative';

  // insert html
  parentContainer.insertAdjacentElement('beforeend', emailError);
};

emailSubmitBtn.addEventListener('click', function (e) {
  const userInput = emailFieldEl.value;

  // prettier-ignore
  const emailRefExp = new RegExp(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  if (userInput.match(emailRefExp)) {
    console.log('pass');
  } else {
    // console.log(emailError);
    emailErrorElCreation(e);
  }
});

//   https://www.w3resource.com/javascript/form/email-validation.php
