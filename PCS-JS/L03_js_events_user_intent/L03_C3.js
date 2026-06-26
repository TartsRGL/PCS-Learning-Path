document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

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
  /* Commit 1 – Recognize form submit intent */
  dom.form.addEventListener('submit', handleFormSubmit);

  /* Commit 2 – Recognize field editing intent */
  dom.form.addEventListener('input', handleFormInput);
}

/* Commit 1 – Recognize form submit intent */
function handleFormSubmit(event) {
  event.preventDefault();
}

/* Commit 2 – Recognize field editing intent */
function handleFormInput(event) {
  const field = event.target;

  if (!isDiscoveryField(field)) return;

  /* Commit 3 – Identify the edited discovery field */
  const fieldIntent = getDiscoveryFieldIntent(field);

  if (!fieldIntent) return;

  // fieldIntent identifies which discovery field the user edited.
}

/* Commit 2 – Recognize field editing intent */
function isDiscoveryField(field) {
  const hooks = ['project-name', 'project-goal', 'target-user', 'core-problem'];
  const hookName = field.getAttribute('data-js');
  return hooks.includes(hookName);
}

/* Commit 3 – Identify the edited discovery field */
function getDiscoveryFieldIntent(field) {
  if (!isDiscoveryField(field)) return null;

  return field.getAttribute('data-js');
}
