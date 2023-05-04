function apiJoke() {
    const urlJoke = "https://icanhazdadjoke.com";
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
        console.log(res);
    });
}
const button = document.getElementById("newJoke");
button === null || button === void 0 ? void 0 : button.addEventListener("click", apiJoke);
export {};
