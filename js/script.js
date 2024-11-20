// LICENSE
const license = document.querySelector('#license');
const licenseCopy = document.querySelector('#licenseCopy');
licenseCopy.addEventListener('click', licCopy);

// Copy license text to clipboard
function licCopy(e) {
  e.preventDefault();
  navigator.clipboard.writeText(license.value);
}

// PROMPT BUILD
const summary = document.querySelector('#summary');
const action = document.querySelector('#action');
const resource = document.querySelector('#resource');
const resolve = document.querySelector('#resolve');
const promptCopy = document.querySelector('#promptCopy');
promptCopy.addEventListener('click', promptCreate);

// Copy license text to clipboard
function promptCreate(e) {
  e.preventDefault();

  let summaryValue = summary.value;
  let actionValue = action.value;
  let resourceValue = resource.value;
  let resolveValue = resolve.options[resolve.selectedIndex].text;
  clipBoard(summaryValue, actionValue, resourceValue, resolveValue);
}

function clipBoard(sum, act, resourse, resolve) {
  // PROMPT
  const prompt = `Using this format:

S-Situation: What's the end goal of the customer? The situation should be what they want to ultimately achieve. I.e. balance check register

T-Trouble: What prevents the customer from completing the task?

A-Actions Taken: What resources and actions solved the concern?
Resources used: Include all resources used. 

R-Resolution: What solution was provided? This is the customer’s status at the close of the interaction i.e. was a full resolution reached during the contact? Where should the next agent pick back up should the customer contact reach out again? If a full resolution was reached, then a single line stating Issue resolved with a bit of context is all that is needed.

Remember the situation should be what the customer wants to do. In other words what can they do after the issue is resolved. 

Take these notes and summary and write my case notes:
-------------------------------------------------------
${sum}

Actions we took:
${act}

Resources used:
${resourse}

Was it resolved: ${resolve}
`;

  navigator.clipboard.writeText(prompt);
}

//CLEAR FORM
const customerName = document.querySelector('#customerName');
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearForm);

function clearForm(e) {
  e.preventDefault();

  license.value = '';
  summary.value = '';
  action.value = '';
  resource.value = '';
  customerName.value = '';
  resolve.value = 'resolved';
}

// PROBING QUESTIONS

//Variables
const categories = [
  document.querySelector('#bankFeed'),
  document.querySelector('#billingCharge'),
  document.querySelector('#multiUser'),
  document.querySelector('#singleUser'),
  document.querySelector('#loginIssue'),
  document.querySelector('#onlineBanking'),
  document.querySelector('#recon'),
  document.querySelector('#report'),
  document.querySelector('#saleTran'),
  document.querySelector('#sub'),
];

// Add event listeners to all categories
categories.forEach((category) => {
  category.addEventListener('click', adjustRight);
});

function adjustRight(event) {
  const clickedId = event.target.id;

  //hide all divs
  for (let i = 0; i < 10; i++) {
    document.querySelector(`#${categories[i].id}Div`).classList.add('d-none');
  }

  //Show correct div
  document.querySelector(`#${clickedId}Div`).classList.remove('d-none');
  document.querySelector(`#${clickedId}Div`).classList.add('d-block');
}
