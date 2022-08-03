let size = window.innerHeight * 0.97;
document.getElementById("container").style.height = `${size}px`;

class MsjObject {
    constructor(user, msj) {
        this.user = user;
        this.msj = msj;
        this.date = new Date();
    }
}

let ari =
    '[{"user":1,"msj":"Hola Como estas?","date":"2022-08-03T20:27:57.432Z"},{"user":1,"msj":"que estas haciendo","date":"2022-08-03T20:27:57.432Z"},{"user":2,"msj":"Hola hola, bien y tu?","date":"2022-08-03T20:27:57.432Z"},{"user":2,"msj":"iba a comer algo","date":"2022-08-03T20:27:57.432Z"}]';
function chargeMsjs(user) {
    let msj = JSON.parse(user);
    let divMsj = document.getElementById("msjs");
    let divEachMsj = null;
    for (const iterator of msj) {
        divEachMsj = document.createElement("div");
        iterator.user == 1
            ? (divEachMsj.className = "msj-mine msj-format")
            : (divEachMsj.className = "msj-yours msj-format");

        divEachMsj.innerHTML = `${iterator.msj}`;
        divMsj.appendChild(divEachMsj);
    }
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
        .getAttribute("data-user-msjs");
    currentUser === user ? sendMsj(2, msj) : notification(user);
}
function notification(user) {}
