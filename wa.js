let size = window.innerHeight * 0.97;
document.getElementById("container").style.height = `${size}px`;

class MsjObject {
    constructor(user, msj) {
        this.user = user;
        this.msj = msj;
        this.date = new Date();
    }
}
let conversations = new Map();
conversations.set(
    "Aria",
    '[{"user":1,"msj":"Hola Como estas?","date":"2022-08-03T20:27:57.432Z"},{"user":1,"msj":"que estas haciendo","date":"2022-08-03T20:27:57.432Z"},{"user":2,"msj":"Hola hola, bien y tu?","date":"2022-08-03T20:27:57.432Z"},{"user":2,"msj":"iba a comer algo","date":"2022-08-03T20:27:57.432Z"}]'
);
conversations.set(
    "Carlos",
    '[{"user":1,"msj":"Que onda we","date":"2022-08-03T20:29:57.432Z"},{"user":1,"msj":"que te dijeron?","date":"2022-08-03T20:50:57.432Z"},{"user":2,"msj":"Hola hola, bien y tu?","date":"2022-08-03T20:27:57.432Z"},{"user":2,"msj":"iba a comer algo","date":"2022-08-03T20:27:57.432Z"}]'
);
conversations.set(
    "Pedro",
    '[{"user":1,"msj":"Que dices primo?","date":"2022-08-03T20:30:57.432Z"},{"user":1,"msj":"donde es eso?","date":"2022-08-03T21:10:57.432Z"},{"user":2,"msj":"Hola hola, bien y tu?","date":"2022-08-03T20:27:57.432Z"},{"user":2,"msj":"iba a comer algo","date":"2022-08-03T20:27:57.432Z"}]'
);
conversations.set(
    "+524426847591",
    '[{"user":1,"msj":"Quien eres?","date":"2022-08-03T20:40:57.432Z"},{"user":1,"msj":"no veo tu foto de perfil","date":"2022-08-03T21:15:57.432Z"},{"user":2,"msj":"Hola hola, bien y tu?","date":"2022-08-03T20:27:57.432Z"},{"user":2,"msj":"iba a comer algo","date":"2022-08-03T20:27:57.432Z"}]'
);
function chargeHead(element) {
    let head = document.getElementById("info-head");
    let headChildren = document.getElementById("info-head").children;
    headChildren[0].src = `${element.target.getAttribute(
        "data-user-name"
    )}.png`;
    headChildren[0].setAttribute(
        "data-user-name",
        `${element.target.getAttribute("data-user-name")}`
    );
    headChildren[1].innerHTML = `${element.target.getAttribute(
        "data-user-name"
    )}`;
    headChildren[1].setAttribute(
        "data-user-name",
        `${element.target.getAttribute("data-user-name")}`
    );
    head.setAttribute(
        "data-user-name",
        `${element.target.getAttribute("data-user-name")}`
    );
}

function chargeMsjs(element) {
    let name = element.target.getAttribute("data-user-name");
    let msj = JSON.parse(conversations.get(name));
    let divMsj = document.getElementById("msjs");
    divMsj.innerHTML = "";
    divMsj.setAttribute("data-user-name", name);
    let divEachMsj = null;
    for (const iterator of msj) {
        divEachMsj = document.createElement("div");
        iterator.user == 1
            ? (divEachMsj.className = "msj-mine msj-format")
            : (divEachMsj.className = "msj-yours msj-format");

        divEachMsj.innerHTML = `${iterator.msj}`;
        divMsj.appendChild(divEachMsj);
    }
    chargeHead(element);
    saveMsjs();
}
function sendMsj(user, msj) {
    let divMsj = document.getElementById("msjs");
    let divEachMsj = document.createElement("div");
    user == 1
        ? (divEachMsj.className = "msj-mine msj-format")
        : (divEachMsj.className = "msj-yours msj-format");
    divEachMsj.innerHTML = `${msj}`;
    divMsj.appendChild(divEachMsj);
}
function reciveMsj(user, msj) {
    const currentUser = document
        .getElementById("msjs")
        .getAttribute("data-user-name");
    currentUser === user ? sendMsj(2, msj) : notification(user);
}
function notification(user) {}
function saveMsjs() {}

window.addEventListener("load", () => {
    let contacts = document.getElementById("contacts-list").children;
    for (const iterator of contacts) {
        iterator.addEventListener("click", chargeMsjs);
    }
});
