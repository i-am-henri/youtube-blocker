export {}
if (window.location.host == "www.youtube.com") {
  // Element mit der Klasse "ytd-enforcement-message-view-model" auswählen
  console.log("wird erledigt")
  var elements = document.querySelector("ytd-popup-container")
  console.log(elements)
  elements.remove()
} else {
  console.log(window.location.host)
}
