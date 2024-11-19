// LICENSE
const password = document.querySelector('#license');
const passCopy = document.querySelector('#passCopy');
passCopy.addEventListener('click', passwordCopy);

// Copy license text to clipboard
function passwordCopy(e) {
  e.preventDefault();
  let passValue = password.value;
  navigator.clipboard.writeText(passValue);
}
