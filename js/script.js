const num = 21;
let firstname, surname, color;
// input name
firstname = prompt('Inserisci qui il tuo nome:');
// input surname
surname= prompt('Inserisci qua il tuo cognome:')
// input color
color= prompt('Qual\'è il tuo colore preferito?');
//concat newPsw
let newPsw= (`${firstname.toLowerCase()}${surname.toLowerCase()}${color.toLowerCase()}${num}`);

document.getElementById('firstname').innerHTML=`${firstname}`
document.getElementById('surname').innerHTML=`${surname}`
document.getElementById('color').innerHTML=`${color}`


function showPsw(){
    document.getElementById('psw-container').innerHTML=`<h2>${newPsw}</h2>`;
}

