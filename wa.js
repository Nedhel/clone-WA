let size = window.innerHeight * 0.97;
document.getElementById("container").style.height = `${size}px`;

class MsjObject {
    constructor(user, msj) {
        this.user = user;
        this.msj = msj;
        this.hour = new Date().getHours();
        this.minutes = new Date().getMinutes();
    }
}
let conversations = new Map();
conversations.set(
    "Aria",
    '[{"user":1,"msj":"Hola como estas","hour":18,"minutes":51},{"user":2,"msj":"Hola que milagrro","hour":18,"minutes":51},{"user":2,"msj":"bien gracias y tu??","hour":18,"minutes":51},{"user":1,"msj":"tambien bien gracias","hour":18,"minutes":51}]'
);
conversations.set(
    "Carlos",
    '[{"user":2,"msj":"Que onda we","hour":13,"minutes":18},{"user":2,"msj":"que paso we como andas","hour":14,"minutes":00},{"user":2,"msj":"pos mas o menos","hour":14,"minutes":01},{"user":1,"msj":"y eso??","hour":14,"minutes":11}]'
);
conversations.set(
    "Pedro",
    '[{"user":1,"msj":"Que onda Primo","hour":11,"minutes":51},{"user":2,"msj":"que dices primo","hour":11,"minutes":52},{"user":2,"msj":"oye tienes el cel de mi tia que me pases","hour":12,"minutes":15},{"user":1,"msj":"si, ahorita te lo mando","hour":12,"minutes":17}]'
);
conversations.set(
    "+524426847591",
    '[{"user":2,"msj":"Hola como estas","hour":20,"minutes":51},{"user":1,"msj":"Quien eres??, no te tengo agregado","hour":21,"minutes":00},{"user":1,"msj":"no veo tu foto de perfil tampoco","hour":21,"minutes":02},{"user":2,"msj":"hola????","hour":21,"minutes":20}]'
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
    let spanTime = null;
    for (const iterator of msj) {
        divEachMsj = document.createElement("div");
        spanTime = document.createElement("span");
        iterator.user == 1
            ? (divEachMsj.className = "msj-mine msj-format")
            : (divEachMsj.className = "msj-yours msj-format");

        divEachMsj.innerHTML = `${iterator.msj}`;
        spanTime.className = "msj-time";
        spanTime.innerHTML = iterator.hour + ":" + iterator.minutes;
        divEachMsj.appendChild(spanTime);
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
