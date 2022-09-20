const btn1 = document.querySelector("#myBtn1");
const text = document.querySelector("#text");
let compteur = 0;


btn1.addEventListener("click", () => {
    compteur++;
    if(compteur === 5) {
        text.innerHTML = "Bravo, bel échauffement !";
    } else if (compteur === 10){
        text.innerHTML = "Vous êtes passé maître en l'art du clic !";
    }
    
    btn1.innerHTML ="vous êtes à " + compteur + " clique(s)";
});

