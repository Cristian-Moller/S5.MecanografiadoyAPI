import { listJoke, listScore } from "./interface/interface"

let reportAcudits = new Array<listScore>

function apiJoke(): void {
  const urlJoke: string = urlRandom(),
    $jokeBox: HTMLElement = <HTMLElement> document.getElementById("joke-box"),
    $buttonsBox: HTMLElement = <HTMLElement> document.getElementById("buttons"),
    fragment: Node = document.createDocumentFragment(),
    fragmentOne: Node = document.createDocumentFragment();

  const jsonResponse: Promise<Response> = (urlJoke == "https://icanhazdadjoke.com") ?
    fetch(urlJoke, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    })
    : 
    fetch(urlJoke)

      jsonResponse.then(res => {
        return res.json()
      })
      .then((res: listJoke) => {
        const $p: HTMLElement = document.createElement("p")
        const $buttonOne: HTMLElement = document.createElement("button")
        const $buttonTwo: HTMLElement = document.createElement("button")
        const $buttonThree: HTMLElement = document.createElement("button")

        document.getElementById('fun')?.remove()
        document.getElementById('buttonOne')?.remove()
        document.getElementById('buttonTwo')?.remove()
        document.getElementById('buttonThree')?.remove()
        
        $p.setAttribute('id', 'fun')
        $p.innerHTML = (res.joke) || (res.value)
        $buttonOne.setAttribute('id', 'buttonOne')
        $buttonOne.setAttribute('value', '1')
        $buttonOne.innerHTML = '1'
        $buttonTwo.setAttribute('id', 'buttonTwo')
        $buttonTwo.setAttribute('value', '2')
        $buttonTwo.innerHTML = '2'
        $buttonThree.setAttribute('id', 'buttonThree')
        $buttonThree.setAttribute('value', '3')
        $buttonThree.innerHTML = '3'
        
        fragment.appendChild($p)
        fragmentOne.appendChild($buttonOne)
        fragmentOne.appendChild($buttonTwo)
        fragmentOne.appendChild($buttonThree)

        $jokeBox.appendChild(fragment)
        $buttonsBox.appendChild(fragmentOne)

        function buttonEvent(event: any) {
          if(reportAcudits.find(elem => elem.broma == ((res.joke) || (res.value))) == null){
            reportAcudits.push({
              broma: ((res.joke) || (res.value)),
              puntuacion: Number(event.target.value),
              fecha: date()
            })
          }

          let index = reportAcudits.findIndex(elem => ((elem.broma == ((res.joke) || (res.value))) && (elem.puntuacion != Number(event.target.value))))
          if(index != -1){
            reportAcudits.splice(index, 1, {broma: ((res.joke) || (res.value)), puntuacion: Number(event.target.value), fecha: date()})
          } 
          
        }
        function buttonEventSee(event: any) {
          if((event.currentTarget.id || event.target.id) == 'newJoke'){
            let index = reportAcudits.findIndex(elem => (elem.broma == ((res.joke) || (res.value))))

            if(index === -1){
              reportAcudits.push({broma: ((res.joke) || (res.value)), puntuacion: 0, fecha: date()})
            }
          }
        }
      
        const buttonOne = document.getElementById("buttonOne");
        buttonOne?.addEventListener("click", buttonEvent)
                                    
        const buttonTwo = document.getElementById("buttonTwo");
        buttonTwo?.addEventListener("click", buttonEvent)
                                    
        const buttonThree = document.getElementById("buttonThree");
        buttonThree?.addEventListener("click", buttonEvent)

        button?.addEventListener("click", buttonEventSee)
        console.log(reportAcudits)
      })
} 

const button = document.getElementById("newJoke");
button?.addEventListener("click", apiJoke);

function date(): string {
  const d: Date = new Date();
  let day: string = d.toISOString();
  return day
}


function weatherApi(): void {
  const params = new URLSearchParams({
    "access_key": 'cb7ce89cfb64f769c534da7bda63141c',
    "query": 'Barcelona'
  }),
  $tempBox: HTMLElement = <HTMLElement> document.getElementById("temp-box"),
  fragmentTemp: Node = document.createDocumentFragment()


  fetch(`http://api.weatherstack.com/current?${params}`)
    .then(res => res.json())
    .then(data => {
      console.log('temp', data)
      const $div: HTMLElement = document.createElement("div")

      $div.setAttribute('id', 'temp')
      $div.innerHTML = 'Temperature: ' + data.current.temperature + 'ºC'
      fragmentTemp.appendChild($div)
      $tempBox.appendChild(fragmentTemp)
    })
}
//weatherApi()


function urlRandom(): string {
  var urls = new Array("https://icanhazdadjoke.com", "https://api.chucknorris.io/jokes/random");
  var aleatory = Math.random() * urls.length;
  aleatory = Math.floor(aleatory);
  //console.log('aleatorio',urls[aleatory])
  return urls[aleatory]
}