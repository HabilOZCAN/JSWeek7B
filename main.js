/**
 * @autor habilozcan@gmail.com
 */

function bigName(word) {
    //in this function all the letter within a string change uperCase letter
    word = word.toUpperCase();
    return word;
}

function withoutNumber(word) {
    //in this function all the numbers are discarded from a string
    word = word.replace(/[0-9]/g, '');
    //return word.match(/\D/g).join('')
    return word;
}

function reverseName(word) {
    //in this function the string reversed 
    return word.split("").reverse().join("");
}

function standardization(word) {
    //in this function prefix "KEREMAG_" added a string
    let prefix = "KEREMAG_";
    word = prefix.concat(word);
    return word;
}

function withDatum(word) {
    //in this function postfix "date+hrs" added a string
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    word = word + "_" + date + "_" + time;
    return word;
}


let partAutos = ["direks0928234iyon", "tekerlek", "bala444433ta", "dikizaynasi"];
for (let index = 0; index < partAutos.length; index++) {
    console.log("first version of part name in list: " + partAutos[index] + "\n");
}
for (let index = 0; index < partAutos.length; index++) {
    let temp = partAutos[index];
    temp = bigName(partAutos[index]);
    temp = withoutNumber(temp);
    temp = reverseName(temp);
    temp = standardization(temp);
    temp = withDatum(temp);
    partAutos[index] = temp;
}
for (let index = 0; index < partAutos.length; index++) {
    console.log("after process in names: " + partAutos[index] + "\n");
}

let itemName = prompt("Please enter name of the İtem: ");
itemName = bigName(itemName);
alert("The Item Name with Upper Case is: " + itemName);
itemName = withoutNumber(itemName);
alert("The Item Name without a number is: " + itemName);
itemName = reverseName(itemName);
alert("The Item Name in reverse style is: " + itemName);
itemName = standardization(itemName);
alert("The Item Name in standard format is: " + itemName);
itemName = withDatum(itemName);
alert("The Item Name with datum is: " + itemName);