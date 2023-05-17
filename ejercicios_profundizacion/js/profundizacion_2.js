"use strict";

/* Inove Coding School
 * Tarea! Ejercicios avanzados de condicionales.
 */

// Deben generar el enlace de este documento hacia index.html

// Práctica numérica
// Realice un programa que solicite el ingreso de tres números
// enteros, y luego en cada caso informe si el número es par
// o impar.
// Para cada caso imprimir el resultado en pantalla.

const numero1 = parseInt(prompt("Ingrese un número entero"));
const numero2 = parseInt(prompt("Ingrese otro número entero"));
const numero3 = parseInt(prompt("Ingrese otro número entero"));

if(numero1 % 2 == 0){
    alert("El número " +numero1+ " es par");
    console.log("El número " +numero1+ " es par");
} else {
   alert("El número "+numero1+ " es impar");
    console.log("El número "+numero1+ " es impar");
}

if (numero2 % 2 == 0) {
    alert("El número " +numero2+ " es par");
    console.log("El número " +numero2+ " es par");
} else {
    alert("El número "+numero2+ " es impar");
    console.log("El número " +numero2+ " es impar");
}

if (numero3 % 2 == 0){
    alert("El número " +numero3+ " es par");
    console.log("El número " +numero3+ " es par");
} else {
    alert("El número "+numero3+ " es impar");
    console.log("El número " +numero3+ " es impar");
}