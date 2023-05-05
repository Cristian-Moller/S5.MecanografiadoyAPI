import { listJoke } from "./interface/interface"

function apiJoke(): void {
  const urlJoke: string = "https://icanhazdadjoke.com",
    $jokeBox: HTMLElement = <HTMLElement> document.getElementById("joke-box"),
    fragment: Node = document.createDocumentFragment()

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
      const $p: HTMLElement = document.createElement("p")

      document.getElementById('fun')?.remove()
      
      $p.setAttribute('id', 'fun')
      $p.innerHTML = res.joke
      
      fragment.appendChild($p)

      $jokeBox.appendChild(fragment)
      console.log(res)
    })
}

const button = document.getElementById("newJoke");
button?.addEventListener("click", apiJoke);