export {}
if (window.location.host == "www.youtube.com") {
  // Element mit der Klasse "ytd-enforcement-message-view-model" auswählen
  var elementToRemove = document.querySelector(".ytd-popup-container")

  // Überprüfen, ob das Element gefunden wurde, bevor es entfernt wird
  if (elementToRemove) {
    // Element entfernen
    elementToRemove.remove()
  }
} else {
  console.log(window.location.host)
}
