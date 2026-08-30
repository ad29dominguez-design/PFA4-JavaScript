// A1 - Propuesta A: comportamiento de objetos y funciones

let nombre = "Pepe";

const persona = {
  nombre: "Sacha",
  apellido: "Lifszyc",
  edad: 28,

  saludar: function () {
    console.log(`Hola, me llamo ${this.nombre}`);
  },

  decirAdios: function () {
    console.log("Chau, me voy!");
  }
};

const otraPersona = {
  ...persona,
  nombre: "Eric",
  edad: 24
};

nombre = "Lucas";

otraPersona.saludar();

// A1 - Propuesta B: obtener el botón por su ID

const boton = document.getElementById("btnSubmit");

console.log(boton);

// A2 - Operar con JavaScript

// Ejercicio 1: crear la variable carName
{
  let carName = "Volvo";
  console.log("Ejercicio 1:", carName);
}

// Ejercicio 2: sumar 5 + 10 usando dos variables
{
  let x = 5;
  let y = 10;

  console.log("Ejercicio 2:", x + y);
}

// Ejercicio 3: declarar tres variables en una sola línea
{
  let firstName = "John", lastName = "Doe", age = 35;

  console.log("Ejercicio 3:", firstName, lastName, age);
}

// Ejercicio 4: dividir 10 por 2 y mostrar el resultado
{
  let resultado = 10 / 2;

  alert("Ejercicio 4: " + resultado);
}

// Ejercicio 5: utilizar el operador de asignación correcto
{
  let x = 10;
  let y = 5;

  x += y;

  console.log("Ejercicio 5:", x);
}

// Ejercicio 6: hacer que la función devuelva "Hola"
{
  function myFunction() {
    return "Hola";
  }

  document.getElementById("demo").innerHTML = myFunction();
}

// Ejercicio 7: mostrar "Hola" dentro del elemento con ID "demo"
function myFunction() {
  document.getElementById("demo").innerHTML = "Hola";
}

myFunction();

// Ejercicio 8: agregar país al objeto person
{
  const person = {
    firstName: "John",
    lastName: "Doe"
  };

  person.pais = "Argentina";

  console.log("Ejercicio 8:", person);
}

// Ejercicio 9: crear un objeto persona y mostrar sus datos
{
  const persona = {
    nombre: "Juan",
    edad: 50
  };

  alert(persona.nombre + " tiene " + persona.edad + " años");
}

// Ejercicio 12: convertir un texto a mayúsculas
{
  let txt = "Hello World";

  txt = txt.toUpperCase();

  console.log("Ejercicio 12:", txt);
}

// Ejercicio 13: obtener el valor "Volvo"
{
  const cars = ["Saab", "Volvo", "BMW"];

  console.log("Ejercicio 13:", cars[1]);
}

// Ejercicio 14: cambiar el primer elemento a "Ford"
{
  const cars = ["Volvo", "Jeep", "Mercedes"];

  cars[0] = "Ford";

  console.log("Ejercicio 14:", cars);
}

// Ejercicio 15: eliminar el último elemento
{
  const fruits = ["Banana", "Orange", "Apple"];

  fruits.pop();

  console.log("Ejercicio 15:", fruits);
}

// Ejercicio 16: agregar "Kiwi"
{
  const fruits = ["Banana", "Orange", "Apple"];

  fruits.push("Kiwi");

  console.log("Ejercicio 16:", fruits);
}

// Ejercicio 17: crear un objeto Date y mostrar fecha y hora actuales
{
  const fechaActual = new Date();

  console.log("Ejercicio 17:", fechaActual);
}

// Ejercicio 18: extraer el año con cuatro dígitos
{
  const d = new Date();

  console.log("Ejercicio 18:", d.getFullYear());
}

// Ejercicio 19: bucle mientras i sea menor que 10
{
  let i = 0;

  while (i < 10) {
    console.log("Ejercicio 19:", i);
    i += 2;
  }
}

// Ejercicio 20: cambiar el texto mediante su ID
document.getElementById("demo").innerHTML = "Hola";

// Ejercicio 21: modificar el primer elemento con clase "test"
document.getElementsByClassName("test")[0].innerHTML =
  "Texto modificado con JavaScript";

// Ejercicio 22: cambiar el texto a rojo
document.getElementById("demo").style.color = "red";

// Ejercicio 23: ocultar el párrafo
document.getElementById("demo").style.display = "none";