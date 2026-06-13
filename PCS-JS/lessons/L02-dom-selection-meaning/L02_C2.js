document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

function initApp() {
  const appRoot = getAppRoot();

  if (!appRoot) return;

  /* Commit 2 – Collect required DOM references */
  const dom = getDomReferences(appRoot);

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

function prepareApp(appRoot, dom) {
  // L02 C2: Elements are selected and mapped, but not used yet.
}
