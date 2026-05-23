/* Commit 1 – Define stable JavaScript entry point */
/* Commit 2 – Create stable DOM reference map */

document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

function initApp() {
  const dom = {
    form:         document.querySelector('[data-js="discovery-form"]'),
    projectName:  document.querySelector('[data-js="project-name"]'),
    projectGoal:  document.querySelector('[data-js="project-goal"]'),
    targetUser:   document.querySelector('[data-js="target-user"]'),
    coreProblem:  document.querySelector('[data-js="core-problem"]'),
    submitButton: document.querySelector('[data-js="submit-button"]'),
    statusText:   document.querySelector('[data-js="status-text"]')
  };

  if (!hasRequiredDom(dom)) return;

  // DOM references are verified. Behaviour will be added in subsequent commits.
}

function hasRequiredDom(dom) {
  return Object.values(dom).every(function (el) { return el !== null; });
}
