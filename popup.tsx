import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16,
        width: "500px"
      }}>
      <h1>Hey, ✌️</h1>
      <p className="m-0 p-5">folgendes ist eine Chromeextension, die nervige "Adblock bitte schließen" Meldungen auf YouTube blockt.</p>
      <h2>Muss ich noch was einstellen?</h2>
      <p>Nein.</p>
      <p>Einfach diese Chromeextension über den  Chromewebstore installierne und schon sollte alles klappen.</p>
    </div>
  )
}

export default IndexPopup
