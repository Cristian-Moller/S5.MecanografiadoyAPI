import { listJoke } from "./interface/interface"

function apiJoke(): void {
  const urlJoke: string = "https://icanhazdadjoke.com"

  fetch(urlJoke, {
    method: "GET",
    headers: {
      "Accept": "application/json"
    }
  })
    .then(res => {
      return res.json()
    })
    .then((res: listJoke) => {
      console.log(res)
    })
}

const button = document.getElementById("newJoke");
button?.addEventListener("click", apiJoke);