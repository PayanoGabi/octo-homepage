// JavaScript source code

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';

document.getElementsByClassName("btn-default").addEventListener("click", myFunction);

function myFunction() {
    alert("Hello World!");
}
myFunction();

