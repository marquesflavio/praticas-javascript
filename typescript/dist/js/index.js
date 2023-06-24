"use strict";
let x = 10;
// Definição de variáveis por: inferência e annotation
let y = 12; //inferência
let z = 13; // annotation
// tipos básicos
let firstName = "Flávio";
let age = 30;
let isDev = true;
// object
const myNumbers = [1, 2, 3];
// o number[] é para tipar que é uma array numerico
console.log(myNumbers.length); //existe
// console.log(myNumbers.toUpperCase()) não existe, pois é método de array de string.
// tuplas
let myTuple;
myTuple = [5, "Flávio", ["a", "b"]];
// objetos literais -> {props: value}
const user = {
    name: "Flávio",
    age: 30
};
console.log(user.name);
// any, valor que aceita qualquer valor
let a = 0;
a = "teste";
a = true;
a = [];
// any é meio estranho, pois aceita qualquer coisa.
