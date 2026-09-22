document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

const appState = {
  projectName: '',
  projectGoal: '',
  targetUser: '',
  coreProblem: '',
  submissionStatus: 'idle',

  /* Commit 1 – Establish async request state and feedback contract */
  requestStatus: 'idle'
};

function initApp() {
  const appRoot = getAppRoot();

  if (!appRoot) return;

  const dom = getDomReferences(appRoot);

  if (!isDomValid(dom)) return;

  renderProjectSummary(dom, appState);

  /* Commit 1 – Establish async request state and feedback contract */
  renderRequestStatus(dom, appState);

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

    /* Commit 3 – Handle simulated errors and allow retry */
    simulateError: appRoot.querySelector('[data-js="simulate-error"]'),

    /* Commit 1 – Establish async request state and feedback contract */
    requestFeedback: appRoot.querySelector('[data-js="request-feedback"]'),

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
    !dom.simulateError ||
    !dom.requestFeedback ||
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

  dom.form.addEventListener('input', function (event) {
    handleFormInput(event, dom);
  });
}

/* Commit 2 – Simulate async submission with loading and success states */
/* Commit 3 – Handle simulated errors and allow retry */
async function handleFormSubmit(event, dom) {
  event.preventDefault();

  if (appState.requestStatus === 'loading') {
    return;
  }

  const validationResult = validateDiscoveryForm(appState);

  if (!validationResult.isValid) {
    appState.submissionStatus = 'invalid';
  } else {
    appState.submissionStatus = 'ready';
  }

  renderValidationFeedback(dom, validationResult);

  if (!validationResult.isValid) {
    return;
  }

  const projectData = {
    projectName: appState.projectName,
    projectGoal: appState.projectGoal,
    targetUser: appState.targetUser,
    coreProblem: appState.coreProblem
  };

  const shouldFail = Boolean(dom.simulateError.checked);

  appState.requestStatus = 'loading';
  renderRequestStatus(dom, appState);

  try {
    await simulateProjectSubmission(projectData, shouldFail);
    appState.requestStatus = 'success';
  } catch (error) {
    appState.requestStatus = 'error';
  } finally {
    renderRequestStatus(dom, appState);
  }
}

/* Commit 2 – Simulate async submission with loading and success states */
/* Commit 3 – Handle simulated errors and allow retry */
function simulateProjectSubmission(projectData, shouldFail = false) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (shouldFail) {
        reject(new Error('Simulated request failure'));
        return;
      }

      resolve({ ok: true });
    }, 1000);
  });
}

function handleFormInput(event, dom) {
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

  renderProjectSummary(dom, appState);
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

function renderProjectSummary(dom, state) {
  dom.summaryProjectName.textContent = state.projectName || 'Zatím bez názvu';
  dom.summaryProjectGoal.textContent = state.projectGoal || 'Cíl projektu nebyl zadán.';
  dom.summaryTargetUser.textContent = state.targetUser || 'Nespecifikováno';
  dom.summaryCoreProblem.textContent = state.coreProblem || 'Nespecifikováno';
}

/* Commit 1 – Establish async request state and feedback contract */
/* Commit 3 – Handle simulated errors and allow retry */
function renderRequestStatus(dom, state) {
  const statusMessages = {
    idle: 'Požadavek zatím nebyl odeslán.',
    loading: 'Odesílání požadavku…',
    success: 'Požadavek byl úspěšně zpracován.',
    error: 'Požadavek se nepodařilo zpracovat. Zkuste jej odeslat znovu.'
  };

  dom.requestFeedback.textContent = statusMessages[state.requestStatus] || '';

  const isLoading = state.requestStatus === 'loading';

  dom.submitButton.disabled = isLoading;
  dom.simulateError.disabled = isLoading;
  dom.form.setAttribute('aria-busy', isLoading ? 'true' : 'false');

  if (state.requestStatus === 'loading') {
    dom.submitButton.textContent = 'Odesílání…';
  } else if (state.requestStatus === 'error') {
    dom.submitButton.textContent = 'Zkusit znovu';
  } else {
    dom.submitButton.textContent = 'Uložit odpovědi';
  }
}

/*
 * Commit 4 – Finalize async and API thinking lesson
 * L07 ends with:
 * - clear separation between form validation status and async request lifecycle
 * - independent data snapshot creation on each valid submission
 * - async/await orchestration around a Promise-based submission service
 * - deterministic loading, success, and error simulation states
 * - manual retry flow without clearing existing form inputs
 * - submission concurrency guard preventing duplicate inflight requests
 * - accessible UI busy state management via aria-busy and disabled controls
 */
