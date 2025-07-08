function arrayToObj(array) {
    return array.map(nom => ({ nom }));
}

document.write(JSON.stringify(arrayToObj(["Anna", "Lluis", "Miquel"]), null, 2));
