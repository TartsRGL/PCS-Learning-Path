document.addEventListener('DOMContentLoaded', function () {
  initApp();
});

function initApp() {
  const appRoot = getAppRoot();

  if (!appRoot) return;

  prepareApp(appRoot);
}

function getAppRoot() {
  /* Commit 1 – Add stable DOM hooks to HTML */
  return document.querySelector('[data-js="app-root"]');
}

function prepareApp(appRoot) {
  // L02 C1: JavaScript starts safely, but does not query elements inside the app yet.
}
