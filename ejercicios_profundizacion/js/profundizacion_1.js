"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Ejercicios de práctica numérica
// Realice un programa que solicite por propmt 2 números
// Calcule la diferencia entre ellos e informe por pantalla
// si el resultado es positivo, negativo o cero.

const numero1 = parseInt(prompt("Ingrese un número"));
const numero2 = parseInt(prompt("Ingrese otro número"));

if ((numero1-(numero2)) > 0) {
    alert("El resultado es positivo");
    console.log("El resultado es positivo");
} else if ((numero1-(numero2)) < 0) {
    alert("El resultado es negativo");
    console.log("El resultado es negativo");
} else {
    alert("El resultado es 0");
    console.log("El resultado es 0");
}



