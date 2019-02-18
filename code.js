// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// const helloWorld = function() {
//     return "Hello, World";
// }

// function sayHello(input) {
//     if (input === "Alex") {
//         return "Hello, Alex!";
//     } else if (input === "Pat"){
//         return "Hello, Pat!"
//     } else {
//         return "Hello, Jane!";
//     }
// }

function sayHello(input) {
    return "Hello, " + input + "!";
}

//All of these keep the tests green...
sayHello("Megan");
sayHello("7");
sayHello(7);
sayHello(true);