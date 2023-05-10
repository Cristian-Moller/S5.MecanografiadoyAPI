let reportAcudits = new Array;
function apiJoke() {
    const urlJoke = "https://icanhazdadjoke.com", $jokeBox = document.getElementById("joke-box"), $buttonsBox = document.getElementById("buttons"), fragment = document.createDocumentFragment(), fragmentOne = document.createDocumentFragment();
    fetch(urlJoke, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
        .then(res => {
        return res.json();
    })
        .then((res) => {
        var _a, _b, _c, _d;
        const $p = document.createElement("p");
        const $buttonOne = document.createElement("button");
        const $buttonTwo = document.createElement("button");
        const $buttonThree = document.createElement("button");
        (_a = document.getElementById('fun')) === null || _a === void 0 ? void 0 : _a.remove();
        (_b = document.getElementById('buttonOne')) === null || _b === void 0 ? void 0 : _b.remove();
        (_c = document.getElementById('buttonTwo')) === null || _c === void 0 ? void 0 : _c.remove();
        (_d = document.getElementById('buttonThree')) === null || _d === void 0 ? void 0 : _d.remove();
        $p.setAttribute('id', 'fun');
        $p.innerHTML = res.joke;
        $buttonOne.setAttribute('id', 'buttonOne');
        $buttonOne.setAttribute('value', '1');
        $buttonOne.innerHTML = '1';
        $buttonTwo.setAttribute('id', 'buttonTwo');
        $buttonTwo.setAttribute('value', '2');
        $buttonTwo.innerHTML = '2';
        $buttonThree.setAttribute('id', 'buttonThree');
        $buttonThree.setAttribute('value', '3');
        $buttonThree.innerHTML = '3';
        fragment.appendChild($p);
        fragmentOne.appendChild($buttonOne);
        fragmentOne.appendChild($buttonTwo);
        fragmentOne.appendChild($buttonThree);
        $jokeBox.appendChild(fragment);
        $buttonsBox.appendChild(fragmentOne);
        function buttonEvent(event) {
            if (reportAcudits.find(elem => elem.broma == res.joke) == null) {
                reportAcudits.push({
                    broma: res.joke,
                    puntuacion: Number(event.target.value),
                    fecha: date()
                });
            }
            let index = reportAcudits.findIndex(elem => ((elem.broma == res.joke) && (elem.puntuacion != Number(event.target.value))));
            if (index != -1) {
                reportAcudits.splice(index, 1, { broma: res.joke, puntuacion: Number(event.target.value), fecha: date() });
            }
        }
        function buttonEventSee(event) {
            if (event.currentTarget.id == 'newJoke') {
                let index = reportAcudits.findIndex(elem => (elem.broma == res.joke));
                if (index === -1) {
                    reportAcudits.push({ broma: res.joke, puntuacion: 0, fecha: date() });
                }
            }
        }
        const buttonOne = document.getElementById("buttonOne");
        buttonOne === null || buttonOne === void 0 ? void 0 : buttonOne.addEventListener("click", buttonEvent);
        const buttonTwo = document.getElementById("buttonTwo");
        buttonTwo === null || buttonTwo === void 0 ? void 0 : buttonTwo.addEventListener("click", buttonEvent);
        const buttonThree = document.getElementById("buttonThree");
        buttonThree === null || buttonThree === void 0 ? void 0 : buttonThree.addEventListener("click", buttonEvent);
        button === null || button === void 0 ? void 0 : button.addEventListener("click", buttonEventSee);
    });
}
const button = document.getElementById("newJoke");
button === null || button === void 0 ? void 0 : button.addEventListener("click", apiJoke);
function date() {
    const d = new Date();
    let day = d.toISOString();
    return day;
}
function weatherApi() {
    const params = new URLSearchParams({
        "access_key": 'cb7ce89cfb64f769c534da7bda63141c',
        "query": 'Barcelona'
    }), $tempBox = document.getElementById("temp-box"), fragmentTemp = document.createDocumentFragment();
    fetch(`http://api.weatherstack.com/current?${params}`)
        .then(res => res.json())
        .then(data => {
        const $div = document.createElement("div");
        $div.setAttribute('id', 'temp');
        $div.innerHTML = 'Temperature: ' + data.current.temperature + 'ºC';
        fragmentTemp.appendChild($div);
        $tempBox.appendChild(fragmentTemp);
    });
}
weatherApi();
export {};
/* setInterval(() =>{
  document.getElementById('temp')?.remove()
  weatherApi()
  }, 5000) */ 
