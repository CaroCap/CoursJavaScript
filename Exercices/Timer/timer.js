/**
 * ? EX 11
 */
// créer un prompt pour demander l'heure de fin
// créer un décompte pour voir le temps restant jusqu'à la fin du cours


// alert('A quelle heure finissent les cours ?')

function DiffHeure(heuresFin, minutesFin, secondesFin, emplacement){
    let today = new Date();
    let heures = today.getHours();
    let minutes = today.getMinutes();
    // if (minutes < 10) minutes = "0"+minutes;
    let secondes = today.getSeconds();
    let minutes_mnt;
    let sec_mnt;
    if (secondesFin - secondes > 0){
        sec_mnt = secondesFin - secondes;
    }
    else{
        sec_mnt = 60 - secondes
        minutesFin -= 1
    }
    if (minutesFin - minutes > 0){
        minutes_mnt = minutesFin - minutes;
    }
    else{
        minutes_mnt = 60 - minutes
        heureFin -= 1
    }
    let heure_mnt = heuresFin - heures;
    if (heure_mnt < 10) heure_mnt = '0'+heure_mnt   
    if (minutes_mnt < 10) minutes_mnt = '0'+minutes_mnt     
    if (sec_mnt < 10) sec_mnt = '0'+sec_mnt     
    let temps_restant = `${heure_mnt.toString()}:${minutes_mnt.toString()}:${sec_mnt.toString()}`;
    // emplacement.innerText = temps_restant;

    let title_time = document.querySelector('#chrono');
    title_time.innerText = temps_restant;
};

let heureFin;
let minFin;
let secFin;
let titre1 = document.createElement('h1');

// do {
//     heureFin = parseInt(prompt('Heures (0 - 23 heures)'));
//     if (heureFin < 10) heureFin = '0'+heureFin   
// } while (isNaN(heureFin) || heureFin < 0 || heureFin > 23);
// do {
//     minFin = parseInt(prompt('Minutes (0 - 59 minutes)'));  
//     if (minFin < 10) minFin = '0'+minFin     
// } while (isNaN(minFin) || minFin < 0 || minFin > 59);
// do {
//     secFin = parseInt(prompt('Secondes (0 - 59 secondes)'));  
//     if (secFin < 10) secFin = '0'+secFin     
// } while (isNaN(secFin) || secFin < 0 || secFin > 59);

// setInterval(function(){
//     DiffHeure(heureFin, minFin, secFin, titre1)},
//     1000);


setInterval(function(){
    DiffHeure(16, 45, 00, titre1)},
    1000);