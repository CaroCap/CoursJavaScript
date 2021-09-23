console.log('coucou')

let nombre = 43
let membre = 'bras'
let name = 'vishnu'
console.log(`${name} a ${nombre} ${membre}.`)
console.log(name + ' a ' + nombre + ' ' + membre + '.') 

let nom = 'Cap'
let prenom = 'Caroline'
let age = '31'
let sexe_Femme = true
nom = 'Decarpentrie'
let moi = {
    Nom : nom,
    Prénom : prenom,
    Age : age,
    Sexe : sexe_Femme
}
console.log(moi)

function testVar(){
    var x = 1;
    if(1==1){
        x=2;
        console.log(x);
    }
    console.log(x);
}

function testLet(){
    let x = 1;
    if(1==1){
        x=2;
        console.log(x);
    }
    console.log(x);
}

alert('Test VAR')
testVar();
alert('Test LET')
testLet();

/** 
* ? TABLEAUX
*/
let tableau = ['Pierre', 'Paul', 'Jacques']
tableau.push('Francoise', 'Caro', 'Jean-Claude', 'Natasha', 'Elsa', 'Lucas', 'Valentin')
tableau.pop()

let tableauNombre = [24, 35, 65, 1, 128, 5]
//TRI DE NOMBRE PAR ORDRE CROISSANT
tableauNombre.sort(function(a,b){return a-b})

//SLICE > copie du tableau les élément de l'index 2 à l'index 4 non inclu
let recup = tableau.slice(2,4)

//SPLICE > coupe et supprime (apd l'index 2 > 3 éléments) + remplace
tableau.splice(2,3,'Pierre')

//CHAINE DE CARACTERES
String.fromCharCode(97,98,99,100)

let expression = "Voici une chaine de caractères";
/**
 * ? recherche dans la chaine de caractere tous ce qui commence par 't' suivi d'une voyelle */
expression.match(/[t][aeéèiouy]/g);
expression.split()
expression.replace(/[t]/g,'s');
expression.search('o');
"#".concat(expression);

/** 
* ? DATES
*/
let date = prompt('Veuillez indiquer votre date de naissance (jour/mois/année)');
console.log('On récupère la date sous format string et séparé par de /');
console.log('On découpe le string grace aux / et on les transforme en number');
let date_array = date.split('/');
let year = parseInt(date_array[2]);
let month = parseInt(date_array[1]);
let day = parseInt(date_array[0]);

console.log('Avec les valeurs récupérées, on crée une nouvelle Date');
let birthdate = new Date(year,month-1,day);

console.log(birthdate)

console.log('Récupérons la date d\'aujourd\'hui');
let today = new Date();
console.log(today);

console.log('Récupérons le temps en milliseconds de la date de naissance à aujourd\'hui');
let year_old_ms = today.getTime() - birthdate.getTime();
console.log(year_old_ms + " milliseconds");

console.log('Créons une date avec le temps en milliseconds ( age + temps 0)');
let year_old_time_0 = new Date(year_old_ms).getFullYear();
console.log('Soustrayons le nombre d\'année du temps 0 à notre nouveau temps');
console.log( year_old_time_0 - new Date(0).getFullYear() + " ans");


/** 
* ? OPERATEURS
*/

let entier_1 = 7;
let entier_2 = 5;
console.log(entier_1/entier_2); // division en float
console.log(entier_1/entier_2); // division en float
Math.floor(entier_1/entier_2); //arrondi en dessous
Math.round(entier_1/entier_2); // arrondi au plus près


//OPERATION TERNAIRE
let genre = true;
console.log((genre == true)?"C'est une femme":"C'est un homme");
genre = !genre; // modifier par l'opposer 

//BOUCLES (FOR IN)
let tab = ["a","b","c","d","e"]
for(const index in tab){
    console.log(`${tab[index]} est en ${parseInt(index)+1} position`)
}
//FOR OF = FOREACH => à utiliser pour de la lecture uniquement
for(const value of tab){
    console.log(`${value} est là`)
}