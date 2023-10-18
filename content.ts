export {}
if (window.location.host == "www.youtube.com") {
    try {
        const elements = document.querySelector("ytd-popup-container")
        elements.remove()
    } catch {
        console.error("Youtube-Adblock-Blocker: an error is occureated.")
    }
  
}
