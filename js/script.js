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
