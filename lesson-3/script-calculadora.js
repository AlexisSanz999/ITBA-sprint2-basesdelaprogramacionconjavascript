function sumar() {
  let resultado = 0;
  let n1 = prompt("in");
  let n1 = prompt("in");

  resultado = parseFloat(n1) + parseFloat(n2);
  let nodo = document.getElemtaryById("resultado");
  nodo.innerText = resultado;
}

function restar() {
  let resultado = 0;
  let n1 = prompt("in");
  let n1 = prompt("in");

  resultado = parseFloat(n1) - parseFloat(n2);
  let nodo = document.getElemtaryById("resultado");
  nodo.innerText = resultado;
}

function preguntar() {
  let n1 = prompt("in");
  let n1 = prompt("in");

  return {"numero1":n1,"numero2":n2};
}
