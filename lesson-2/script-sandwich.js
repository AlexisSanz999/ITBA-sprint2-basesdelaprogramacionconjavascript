let base = prompt("Que base desea: pollo, carne o vegano");
let pan = prompt("Que pan desea: blanco, negro o salvado");
let aderezos = prompt("Que aderezos desea: mayonesa, mostaza, queso, tomate, lechuga, cebolla");

let mensajeSalida = "";

let total = 0;

if (base == "carne") {
  total += 200;
} else if (base === "pollo") {
  total += 150;
} else if (base === "vegano") {
  total += 100;
}

if (pan === "blanco") {
  total += 50;
} else if (pan === "negro") {
  total += 60;
} else if (pan === "salvado") {
  total += 75;
}

if (aderezos.includes("queso")) {
  total += 20;
}
if (aderezos.includes("tomate")) {
  total += 15;
}
if (aderezos.includes("lechuga")) {
  total += 10;
}
if (aderezos.includes("cebolla")) {
  total += 15;
}
if (aderezos.includes("mayonesa")) {
  total += 5;
}
if (aderezos.includes("mostaza")) {
  total += 5;
}

mensajeSalida += "El total a pagar es de: $" + total;

let nodo = $("#salida");

nodo.text(mensajeSalida);
