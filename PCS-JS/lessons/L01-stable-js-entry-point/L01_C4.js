/* Commit 1 – Define stable JavaScript entry point */
/* Commit 2 – Structure stable initialization flow */
/* Commit 3 – Add application root guard */
/* Commit 4 – Finalize L01 entry-point lesson */

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
  // L01 ends here: JavaScript starts safely and recognizes the application root.
}
