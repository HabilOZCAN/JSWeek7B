/**
 * @autor habilozcan@gmail.com
 */

 function bigName (word){
     //in this function all the letter within a string change uperCase letter
     word = word.toUpperCase();
     return word;
 }

 function withoutNumber(word){
     //in this function all the numbers are discarded from a string
     word = word.replace(/[0-9]/g, '');
     //return word.match(/\D/g).join('')
     return word;
 }

 function reverseName(word){
     //in this function the string reversed 
     return word.split("").reverse().join("");
 }

 function standardization(word){
     //in this function prefix "KEREMAG_" added a string
     let prefix = "KEREMAG_";
     word = prefix.concat(word);
     return word;
 }

 function withDatum(word){
     //in this function postfix "date+hrs" added a string
     let today = new Date();
     let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
     let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
     word = word+"_"+date+"_"+time;
     return word;
 }

let itemName = prompt("Please enter name of the İtem: ");
itemName = bigName(itemName);
alert("The Item Name with Upper Case is: "+itemName);
itemName = withoutNumber(itemName);
alert("The Item Name without a number is: "+itemName);
itemName = reverseName(itemName);
alert("The Item Name in reverse style is: "+ itemName);
itemName = standardization(itemName);
alert("The Item Name in standard format is: "+ itemName);
itemName = withDatum(itemName);
alert("The Item Name with datum is: "+itemName);

