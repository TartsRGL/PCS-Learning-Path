document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

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

  /* Commit 2 – Render application state to project summary output */
  renderProjectSummary(dom, appState);

  prepareApp(appRoot, dom);
}

function getAppRoot() {
  return document.querySelector('[data-js="app-root"]');
}

function getDomReferences(appRoot) {
  return {
    form: appRoot.querySelector('[data-js="discovery-form"]'),
    formFeedback: appRoot.querySelector('[data-js="form-feedback"]'),
    projectName: appRoot.querySelector('[data-js="project-name"]'),
    projectNameError: appRoot.querySelector('[data-js="project-name-error"]'),
    projectGoal: appRoot.querySelector('[data-js="project-goal"]'),
    projectGoalError: appRoot.querySelector('[data-js="project-goal-error"]'),
    targetUser: appRoot.querySelector('[data-js="target-user"]'),
    targetUserError: appRoot.querySelector('[data-js="target-user-error"]'),
    coreProblem: appRoot.querySelector('[data-js="core-problem"]'),
    coreProblemError: appRoot.querySelector('[data-js="core-problem-error"]'),
    submitButton: appRoot.querySelector('[data-js="submit-button"]'),

    /* Commit 1 – Establish project summary output area contract */
    projectSummary: appRoot.querySelector('[data-js="project-summary"]'),
    summaryProjectName: appRoot.querySelector('[data-js="summary-project-name"]'),
    summaryProjectGoal: appRoot.querySelector('[data-js="summary-project-goal"]'),
    summaryTargetUser: appRoot.querySelector('[data-js="summary-target-user"]'),
    summaryCoreProblem: appRoot.querySelector('[data-js="summary-core-problem"]')
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
    !dom.submitButton ||
    !dom.projectSummary ||
    !dom.summaryProjectName ||
    !dom.summaryProjectGoal ||
    !dom.summaryTargetUser ||
    !dom.summaryCoreProblem
  ) {
    return false;
  }

  return true;
}

function prepareApp(appRoot, dom) {
  dom.form.addEventListener('submit', function (event) {
    handleFormSubmit(event, dom);
  });

  dom.form.addEventListener('input', handleFormInput);
}

function handleFormSubmit(event, dom) {
  event.preventDefault();

  const validationResult = validateDiscoveryForm(appState);

  if (!validationResult.isValid) {
    appState.submissionStatus = 'invalid';
  } else {
    appState.submissionStatus = 'ready';
  }

  renderValidationFeedback(dom, validationResult);
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

function renderValidationFeedback(dom, validationResult) {
  const fields = [
    { key: 'projectName', input: dom.projectName, errorEl: dom.projectNameError },
    { key: 'projectGoal', input: dom.projectGoal, errorEl: dom.projectGoalError },
    { key: 'targetUser', input: dom.targetUser, errorEl: dom.targetUserError },
    { key: 'coreProblem', input: dom.coreProblem, errorEl: dom.coreProblemError }
  ];

  fields.forEach(function (field) {
    const errorMessage = validationResult.errors[field.key];

    if (errorMessage) {
      field.errorEl.textContent = errorMessage;
      field.input.setAttribute('aria-invalid', 'true');
    } else {
      field.errorEl.textContent = '';
      field.input.setAttribute('aria-invalid', 'false');
    }
  });

  if (!validationResult.isValid) {
    dom.formFeedback.textContent = 'Opravte prosím označená pole formuláře.';
  } else {
    dom.formFeedback.textContent = 'Formulář je připraven k odeslání.';
  }
}

/* Commit 2 – Render application state to project summary output */
function renderProjectSummary(dom, state) {
  dom.summaryProjectName.textContent = state.projectName || 'Zatím bez názvu';
  dom.summaryProjectGoal.textContent = state.projectGoal || 'Cíl projektu nebyl zadán.';
  dom.summaryTargetUser.textContent = state.targetUser || 'Nespecifikováno';
  dom.summaryCoreProblem.textContent = state.coreProblem || 'Nespecifikováno';
}
