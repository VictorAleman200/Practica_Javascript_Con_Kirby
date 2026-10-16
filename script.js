var btn1 = document.getElementById("transformation1");
var btn2 = document.getElementById("transformation2");
var btn3 = document.getElementById("transformation3");
var btn4 = document.getElementById("cuenca");
var btn5 = document.getElementById("enemy");

var c1 = document.getElementById("C1");
var c2 = document.getElementById("C2");
var c3 = document.getElementById("C3");
var c4 = document.getElementById("C4");
var c5 = document.getElementById("C5");


let transf = "";
let limite = 0;
var gemasRojas = 0;
var gemasN = 0;
var gemasP = 0;

const texto = "HOLA KIRBY";
document.write('<h1 style="color: #df0068">' + texto + '</h1>');

function asignarPoder(trans) {
    switch (trans) {
        case "metamortexDigger":
            console.log("Kirby forma Digger");
            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
            c4.style.display = "flex";
            c5.style.display = "flex";
            limite = 41;
            break;
        case "metamortexDolphin":
            console.log("Kirby forma Dolphin");
            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
            c4.style.display = "flex";
            c5.style.display = "flex";
            limite = 30;
            break;
        case "metamortexFireEngine":
            console.log("Kirby forma Fire Engine");
            c1.style.display = "none";
            c2.style.display = "none";
            c3.style.display = "none";
            c4.style.display = "flex";
            c5.style.display = "flex";
            limite = 22;
            break;
        default:
            console.log("Kirby no tiene forma");
            limite = 35;
            break;
    }
}

btn1.addEventListener("click", function () {
    asignarPoder("metamortexDigger")
});
btn2.addEventListener("click", () => asignarPoder("metamortexDolphin"));
btn3.addEventListener("click", () => asignarPoder("metamortexFireEngine"));
btn4.addEventListener("click", () => contadorGemas("sumo"));
btn5.addEventListener("click", () => contadorGemas("resto"));

function contadorGemas(accion) {
    gemasN = 0;
    gemasP = 0;
    if (accion == "sumo") {
        for (var conteo = 1; conteo <= 5; conteo++) {
            console.log("+1 Gema Roja")
            gemasP++;
            gemasRojas++;
        }
        console.log("Gemas Obtenidas: " + gemasP);
        console.log("Gemas: " + gemasRojas);
    }
    else if (accion == "resto") {
        for (var conteo = 1; conteo <= 5; conteo++) {
            console.log("-1 Gema Roja")
            gemasN++;
            gemasRojas--;
        }
        console.log("Gemas perdidas: " + gemasN);
        console.log("Gemas: " + gemasRojas);
    }
    c1.style.display = "flex";
    c2.style.display = "flex";
    c3.style.display = "flex";
    c4.style.display = "none";
    c5.style.display = "none";
}
