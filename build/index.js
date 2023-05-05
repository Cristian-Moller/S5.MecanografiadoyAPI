function apiJoke() {
    const urlJoke = "https://icanhazdadjoke.com", $jokeBox = document.getElementById("joke-box"), fragment = document.createDocumentFragment();
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
        var _a;
        const $p = document.createElement("p");
        (_a = document.getElementById('fun')) === null || _a === void 0 ? void 0 : _a.remove();
        $p.setAttribute('id', 'fun');
        $p.innerHTML = res.joke;
        fragment.appendChild($p);
        $jokeBox.appendChild(fragment);
        console.log(res);
    });
}
const button = document.getElementById("newJoke");
button === null || button === void 0 ? void 0 : button.addEventListener("click", apiJoke);
export {};
