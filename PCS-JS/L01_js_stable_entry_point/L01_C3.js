/* Commit 1 – Define stable JavaScript entry point */
document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

/* Commit 2 – Structure stable initialization flow */
function initApp() {
  const appRoot = getAppRoot();

  /* Commit 3 – Add application root guard */
  if (!appRoot) return;

  prepareApp(appRoot);
}

/* Commit 3 – Add application root guard */
function getAppRoot() {
  return document.querySelector('[data-app="project-discovery"]');
}

/* Commit 2 – Structure stable initialization flow */
function prepareApp(appRoot) {
  // Application root is available. Behaviour will be added in later lessons.
}
