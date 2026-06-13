document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

function initApp() {
  const appRoot = getAppRoot();

  if (!appRoot) return;

  /* Commit 2 – Collect required DOM references */
  const dom = getDomReferences(appRoot);

  /* Commit 3 – Guard required DOM elements */
  if (!isDomValid(dom)) return;

  prepareApp(appRoot, dom);
}

function getAppRoot() {
  /* Commit 1 – Add stable DOM hooks to HTML */
  return document.querySelector('[data-js="app-root"]');
}

/* Commit 2 – Collect required DOM references */
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

/* Commit 3 – Guard required DOM elements */
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
  /* Commit 4 – Finalize lesson documentation */
  // L02 ends here: JavaScript has safely queried and verified all required DOM references.
}
