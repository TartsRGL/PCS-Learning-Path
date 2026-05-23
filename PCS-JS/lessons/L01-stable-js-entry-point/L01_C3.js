/* Commit 1 – Define stable JavaScript entry point */
/* Commit 2 – Structure stable initialization flow */
/* Commit 3 – Add application root guard */

document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

function initApp() {
  const appRoot = getAppRoot();

  if (!appRoot) return;

  prepareApp(appRoot);
}

function getAppRoot() {
  return document.querySelector('[data-app="project-discovery"]');
}

function prepareApp(appRoot) {
  // Application root is available. Behaviour will be added in later lessons.
}
