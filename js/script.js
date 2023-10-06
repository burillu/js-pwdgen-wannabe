const num = 21;
let firstname, surname, color;
firstname = prompt('Inserisci qui il tuo nome:');
surname= prompt('Inserisci qua il tuo cognome:')
color= prompt('Qual\'è il tuo colore preferito?');
let newPsw= (`${firstname}${surname}${color}${num}`)
console.log(newPsw);
document.getElementById('psw-container').innerHTML=`<h2>${newPsw}</h2>`;