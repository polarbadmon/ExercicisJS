function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicació(a, b) {
    return a * b;
}

function divisió(a, b) {
    if (b === 0) {
    return "No es pot dividir per zero";
    }
    return a / b;
}

document.write(suma(66, 13) + "<br>");
document.write(resta(55, 23) + "<br>");
document.write(multiplicació(59, 90) + "<br>");
document.write(divisió(36, 11) + "<br>");