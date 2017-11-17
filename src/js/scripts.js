$(document).ready(function() {
  removeLoader('loader', 'main');
});

function removeLoader(loaderTarget, mainTarget) {
  document.getElementById(loaderTarget).style.display = "none";
}
