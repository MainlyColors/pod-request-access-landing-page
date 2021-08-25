# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

- The design is fully responsive but below were the main design points

Mobile Layout - 320px screen width

![](./screenshots/mobile-layout.png)


Tablet Layout - 768px screen width

![](./screenshots/tablet-layout.png)


Desktop Layout - 1440px screen width

![](./screenshots/desktop-layout.png)


### Links

- Solution URL: [FrontEnd Mentor Solution](https://www.frontendmentor.io/solutions/responsive-site-built-with-mostly-htmlcss-and-js-only-for-email-input-MUmownQWm)
- Live Site URL: [Live GitHub Pages site](https://mainlycolors.github.io/pod-request-access-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS
- DOM Manipulation

### What I learned

During this project I learned about Regular Expressions to validate an email address. A big help to quickly understand expressions was MDN's cheatsheet and Regex101 which lets you type out a regEx string and it will check your supplied text live so you get a grasp of what each token does.

  -[MDN RegEx Cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)
  -[RegEx101](https://regex101.com/)

Below is an example of how I used RegEx in this project. In this function if we match our regular expression to the `emailFieldEl.value` aka the user entered string then a Success class will be applied which is just a simple spin animation. If the regular expression fails then we add a shake class with shake animation to signify to the user the email is not right. Plus a little message gets added.

```js
const emailFormChecker = function (e) {
  const userInput = emailFieldEl.value;
  
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
}
```

To further breakdown what the RegEx is doing the above resources do a better job of explaining but ill also add my own explanation.
This Expression can be broken down into chunks to better understand what is going on. So on the outside im using `new RegExp()` to start a new class instances of the RegExp() class. Regular expressions in javascript can be written with just "/" on either side like this `/abc/` but but creating a class instances we get access to the prototype of RegExp which contains methods created specifically for regular expressions, in this case we didn't use any but in the future we are set up if we have too. For `userInput.match(emailRefExp)` we use `.match()` which is a string method they requires regular expression as a parameter.

```js
  const emailRefExp = new RegExp(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
```
Now for the actually Expression:
  - `^\w+`  
    - `^` is an Asseration aka give a match location and this one means "matches beginning of the input" so start at the first character.
    - `\w` is an escaped "w", because we want to use "w" as the character class it stands for and not just "w". This will match anything in the basic latin alphabet 
        so in this range `[A-Za-z0-9_]` with "_" included.
    - `+` is an Quantifier, these tell how many characters to match. The + will keep matching the previous rule 1 or more times because it is "greedy".
        - example: `/bo+/` will match: "bo", "boo", "boooooooooo"
        - if the + had a "?" after it then it would be "non-greedy", meaning only match once.
        - example: `/bo+?/` will match: "bo"
  - `([\.-]?\w+)`
    - `()` is a capturing group, anything matches with the rules inside the parenthesis's are remembered and other RegEx methods can work with these.
    - `[]` is another group where atleast one thing withing the brackets has to match unless "?" comes after then it becomes 0 or 1 times.
        - example: `/a[bd]c/` will match: "abc", "adc"
    - `[\.-]?` this is saying match "." or "-" but with "?" meaning "non-greedy" so only 0-1 times.
        - example match: ".", "-"
  - @ is matching just the normal character "@", nothing special there
  - `*(\.\w{2,3})+$/)`
      - `*` is an Quantifier like +, this will match 0 or more times. this is to handle multiple TLDs (top-level-domains) so .com.net.wha
      - `\w{2,3}` is a range, so here we want to match 2-3 normal latin alphabet characters, not just 1 because there are no 1 letter TLDs
          - example match: ".com", ".io" not: ".c", ".comm"
      - `$` is an Asseration like ^, this says end of the line needs to happen next, this is to stop whitespace after an email address.
          -example match: "ry@gmail.com" not: "ry@gmail.com    "


## Author

- Frontend Mentor - [@ryan2505](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@MainlyColors](https://www.twitter.com/mainlycolors)



