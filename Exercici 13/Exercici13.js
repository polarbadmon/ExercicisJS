function repetits(array) {
    const resultat = {};
    array.forEach(element => {
        if(resultat[element]) {
            resultat[element]++;
        } else {
            resultat[element] = 1;
        }
    });

    return resultat;
}

const vehicles = ["cotxe", "moto", "cotxe", "bicicleta", "cotxe", "moto"];
const comptat = repetits(vehicles);

for (let element in comptat) {
    document.write(`${element}: ${comptat[element]} vegades <br>`);
}