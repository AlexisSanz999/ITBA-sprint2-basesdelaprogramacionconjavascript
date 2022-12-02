let divir = 0;
let sumar = 0;
let contar = 0;

function add() {
  let nombre = $("#nombre").val();
  let dinero = $("#cantidad").val();
  contar += 1;

  distribute(nombre, dinero, contar);

  let historial = `<div class="alert alert-secondary" role="alert" style="text-align: center">${nombre}: ${dinero}</div>`;
  $("#historial").append(historial);
}

function distribute(persona, gastado, c) {
  sumar += parseInt(gastado);
  $("#resultado").text("$" + sumar);

  divir = sumar / c;
  $("#aportar").text("$" + Math.round(divir));
}
