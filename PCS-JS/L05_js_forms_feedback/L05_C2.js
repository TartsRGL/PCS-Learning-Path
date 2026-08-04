document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

/* Commit 1 – Establish accessible feedback element contract */
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
    /* Commit 1 – Establish accessible feedback element contract */
    formFeedback: appRoot.querySelector('[data-js="form-feedback"]'),
    projectName: appRoot.querySelector('[data-js="project-name"]'),
    projectNameError: appRoot.querySelector('[data-js="project-name-error"]'),
    projectGoal: appRoot.querySelector('[data-js="project-goal"]'),
    projectGoalError: appRoot.querySelector('[data-js="project-goal-error"]'),
    targetUser: appRoot.querySelector('[data-js="target-user"]'),
    targetUserError: appRoot.querySelector('[data-js="target-user-error"]'),
    coreProblem: appRoot.querySelector('[data-js="core-problem"]'),
    coreProblemError: appRoot.querySelector('[data-js="core-problem-error"]'),
    submitButton: appRoot.querySelector('[data-js="submit-button"]')
  };
}

function isDomValid(dom) {
  // Stop initialization if any required DOM element is missing.
  if (
    !dom.form ||
    !dom.formFeedback ||
    !dom.projectName ||
    !dom.projectNameError ||
    !dom.projectGoal ||
    !dom.projectGoalError ||
    !dom.targetUser ||
    !dom.targetUserError ||
    !dom.coreProblem ||
    !dom.coreProblemError ||
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

  /* Commit 2 – Validate discovery form state model on submission */
  const validationResult = validateDiscoveryForm(appState);

  if (!validationResult.isValid) {
    appState.submissionStatus = 'invalid';
    return;
  }

  appState.submissionStatus = 'ready';
}

function handleFormInput(event) {
  const field = event.target;

  if (!isDiscoveryField(field)) return;

  const fieldIntent = getDiscoveryFieldIntent(field);

  if (!fieldIntent) return;

  // fieldIntent identifies which discovery field the user edited.

  const stateKey = getStateKey(fieldIntent);

  if (!stateKey) return;

  // stateKey identifies the matching key in appState.

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

function getStateKey(fieldIntent) {
  const stateKeyMap = {
    'project-name': 'projectName',
    'project-goal': 'projectGoal',
    'target-user': 'targetUser',
    'core-problem': 'coreProblem'
  };

  return stateKeyMap[fieldIntent] || null;
}

/* Commit 2 – Validate discovery form state model on submission */
function validateDiscoveryForm(state) {
  const errors = {};

  if (!state.projectName || !state.projectName.trim()) {
    errors.projectName = 'Zadejte název projektu.';
  }

  if (!state.projectGoal || !state.projectGoal.trim()) {
    errors.projectGoal = 'Popište hlavní cíl projektu.';
  }

  if (!state.targetUser || !state.targetUser.trim()) {
    errors.targetUser = 'Uveďte, pro koho je projekt určen.';
  }

  if (!state.coreProblem || !state.coreProblem.trim()) {
    errors.coreProblem = 'Popište problém, který projekt řeší.';
  }

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid: isValid,
    errors: errors
  };
}
