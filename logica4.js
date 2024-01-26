// Declarar variables
let numero = 0;
let serie = [];

// Escuchar evento click del botón calcular
document.getElementById("calcular").addEventListener("click", function() {

  // Obtener el número del input
  numero = document.getElementById("numero").value;

  // Comprobar que el dato de entrada es de tipo number
  if (typeof numero !== "number") {
    // Volver a solicitar el dato
    numero = prompt("Ingrese un número: ");
  }

  // Generar la serie de Fibonacci
  serie = [];
  for (let i = 0; i < numero; i++) {
    if (i === 0 || i === 1) {
      serie.push(i);
    } else {
      serie.push(serie[i - 1] + serie[i - 2]);
    }
  }

// Actualizar el DOM
document.getElementById("serie").innerHTML = serie.join(" ");

} 