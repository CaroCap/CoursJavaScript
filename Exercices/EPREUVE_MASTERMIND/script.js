//DEPART
const nbreEssai = 12;
const longueurCode = 4;
const nbrePossibiliteCode = 4;
let victoire = false;

// ESSAIS RESTANTS
let essais = nbreEssai;
placeEssai = document.getElementById("essai");
placeEssai.innerText = essais;

// CODE ORDI
function creationCodeOrdi(longueurCode, nbrePossibiliteCode) { 
    codeOrdi = [];
    for (let index = 0; index < 4; index++) {
        codeOrdi.push(Math.floor(Math.random()*4)); 
    }
    return codeOrdi;
}

let codeOrdi = [];
codeOrdi = creationCodeOrdi(longueurCode, nbrePossibiliteCode)
console.log(codeOrdi) // ! A SUPPRIMER 


// BOUTON JOUER -> LANCEMENT PARTIE (Showme, Timer)
let boutonJouer = document.getElementById('play');
boutonJouer.addEventListener("click", lancementPartie);

function lancementPartie(event) {
    // ! SHOWME
    // ! LANCEMENT TIMER
}

// SUBMIT PROPOSITION
let boutonSubmit = document.getElementById("submit");
boutonSubmit.addEventListener("click", submitProposition);

function submitProposition(event) {
    let placeMessageSubmit = document.getElementById("messageSubmit");
    let codeJoueurTableau = [];
    let placeProposition = document.getElementById("codeJoueur");
    let propositionSubmited = placeProposition.value;
        for (let index = 0; index < propositionSubmited.length; index++) {
            codeJoueurTableau[index] = parseInt(propositionSubmited[index]);
        }

        //Validation 4 chiffres
    if(codeJoueurTableau.length == 4){
        let validationCode;
        //Validation chiffres 1 à 4
        for (let index = 0; index < codeJoueurTableau.length; index++) {
            if(codeJoueurTableau[index]>0 && codeJoueurTableau[index] < 5){
                validationCode = true;
            }
            else{
                validationCode = false;
                placeMessageSubmit.innerHTML = "Merci d'utiliser des chiffres de 1 à 4"
                return
            }
        }

        //CHECK BON PLACEMENT
        let copieCodeJoueur = codeJoueurTableau;
        let copieCodeOrdi = codeOrdi;
        let bonPlacement = 0;
        for (let index_user = 0; index_user < copieCodeJoueur.length; index_user++) {
            if(copieCodeJoueur[index_user] == copieCodeOrdi[index_user])
            {
                bonPlacement += 1;
                copieCodeJoueur[index_user] == -1;
                copieCodeOrdi[index_user] == -1;
            }
        }
        if (bonPlacement == 4){
            victoire = true;
        }

        //CHECK MAUVAISE PLACE
        let mauvaisePlace = 0;
        for (let index_user = 0; index_user < copieCodeJoueur.length; index_user++) {
            for (let index_ordi = 0; index_ordi < copieCodeOrdi.length; index_ordi++) {
                if ((copieCodeJoueur[index_user] == copieCodeOrdi[index_ordi])
                &&copieCodeJoueur[index_user] != -1 
                && copieCodeOrdi[index_ordi] != -1) {
                    mauvaisePlace += 1;
                    copieCodeJoueur[index_user] == -1;
                    copieCodeOrdi[index_ordi] == -1;
                }
            }
        }

        let validationReponse = ""


        //changer tableau code en string
        codeJoueurTableau=codeJoueurTableau.toString();
        for (let index = 0; index < codeJoueurTableau.length; index++) {
            codeJoueurTableau = codeJoueurTableau.replace(",", " ");
        }

        //Vider le champs texte
        placeMessageSubmit.innerHTML = "";
        console.log(codeJoueurTableau);

        //Creation Div pour résultat proposition
        let placeColonnePropositions = document.getElementsByClassName("colonnePropositions");
        let newDivLigne = document.createElement("div");
        newDivLigne.setAttribute("id","ligneProposition");
        newDivLigne.setAttribute("class","ligneProposition");
        let newDivProposition = document.createElement("div");
        newDivProposition.setAttribute("id","proposition");
        let newDivValidation = document.createElement("div");
        newDivValidation.setAttribute("id","validation");

        document.getElementById("colonnePropositions").appendChild(newDivLigne);

        document.getElementById('ligneProposition').appendChild(newDivProposition);
        newDivProposition.innerHTML = codeJoueurTableau;
        document.getElementById('ligneProposition').appendChild(newDivValidation);
        // ! ajouter info validation

        newDivLigne.setAttribute("id",""); // cleaner id pour prochaine proposition




        
    // VICTOIRE ?

        
        //ENLEVER ESSAI
        essais = essais-1;
        placeEssai = document.getElementById("essai");
        placeEssai.innerText = essais;

        //cleaner le input code joueur
        document.getElementById("codeJoueur").value = "";
    }
    else{
        placeMessageSubmit.innerHTML = "Merci d'indiquez 4 chiffres"
    }
}

//FIN PARTIE
let placeReponse = document.getElementById("reponseOrdi");
placeReponse.innerText = codeOrdi;

function finPartie(codeOrdi) {
    codeOrdi=codeOrdi.toString();
    for (let index = 0; index < codeOrdi.length; index++) {
            codeOrdi = codeOrdi.replace(",", " ");
    }
}

// ! AJOUTER ||TIMER==00
if(essais == 0){
    finPartie(codeOrdi);
}



// ? AJOUTER BOUTON REINITIALISER
