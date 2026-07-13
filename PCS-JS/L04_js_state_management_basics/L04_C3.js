document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

/* Commit 1 – Introduce initial application state */
const appState = {
  projectName: '',
  projectGoal: '',
  targetUser: '',
  coreProblem: '',
  submissionStatus: 'idle'
};

function initApp() {
  const appRoot = getAppRoot();

  if (!appRoot) return;

  const dom = getDomReferences(appRoot);

  if (!isDomValid(dom)) return;

  prepareApp(appRoot, dom);
}

function getAppRoot() {
  return document.querySelector('[data-js="app-root"]');
}

function getDomReferences(appRoot) {
  return {
    form: appRoot.querySelector('[data-js="discovery-form"]'),
    projectName: appRoot.querySelector('[data-js="project-name"]'),
    projectGoal: appRoot.querySelector('[data-js="project-goal"]'),
    targetUser: appRoot.querySelector('[data-js="target-user"]'),
    coreProblem: appRoot.querySelector('[data-js="core-problem"]'),
    submitButton: appRoot.querySelector('[data-js="submit-button"]')
  };
}

function isDomValid(dom) {
  // Stop initialization if any required DOM element is missing.
  if (
    !dom.form ||
    !dom.projectName ||
    !dom.projectGoal ||
    !dom.targetUser ||
    !dom.coreProblem ||
    !dom.submitButton
  ) {
    return false;
  }

  return true;
}

function prepareApp(appRoot, dom) {
  dom.form.addEventListener('submit', handleFormSubmit);

  dom.form.addEventListener('input', handleFormInput);
}

function handleFormSubmit(event) {
  event.preventDefault();
}

function handleFormInput(event) {
  const field = event.target;

  if (!isDiscoveryField(field)) return;

  const fieldIntent = getDiscoveryFieldIntent(field);

  if (!fieldIntent) return;

  // fieldIntent identifies which discovery field the user edited.

  /* Commit 2 – Map field intent to state key */
  const stateKey = getStateKey(fieldIntent);

  if (!stateKey) return;

  // stateKey identifies the matching key in appState.

  /* Commit 3 – Update application state from field input */
  const fieldValue = field.value;
  appState[stateKey] = fieldValue;
}

function isDiscoveryField(field) {
  const hooks = ['project-name', 'project-goal', 'target-user', 'core-problem'];
  const hookName = field.getAttribute('data-js');
  return hooks.includes(hookName);
}

function getDiscoveryFieldIntent(field) {
  if (!isDiscoveryField(field)) return null;

  return field.getAttribute('data-js');
}

/* Commit 2 – Map field intent to state key */
function getStateKey(fieldIntent) {
  const stateKeyMap = {
    'project-name': 'projectName',
    'project-goal': 'projectGoal',
    'target-user': 'targetUser',
    'core-problem': 'coreProblem'
  };

  return stateKeyMap[fieldIntent] || null;
}
