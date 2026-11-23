let activites = [
{ id:"A01", image:"image/medina.png", titre:"Découverte de la médina", lieu:"Nabeul", categorie:"Culture", duree:"2h", prix:20, 
    description:"Découvrez les ruelles de la médina de Nabeul. Observez les commerces et les traditions locales. Une expérience pour découvrir le patrimoine de la ville." },

{ id:"A02", image:"image/atelier.png", titre:"Atelier d'initiation à la poterie", lieu:"Nabeul", categorie:"Artisanat", duree:"1 h 30", prix:35, 
    description:"Découvrez les bases de la poterie à Nabeul. Apprenez comment travailler l'argile. Une activité pour découvrir un savoir-faire artisanal." },

{ id:"A03", image:"image/kerkouane.png", titre:"Parcours découverte de Kerkouane", lieu:"Kerkouane", categorie:"Culture", duree:"2 h 30", prix:30, 
    description:"Partez à la découverte du site de Kerkouane. Découvrez son histoire et son patrimoine. Une visite culturelle dans le Cap Bon." },

{ id:"A04", image:"image/randonee.png", titre:"Randonnée découverte", lieu:"Djebel Abderrahmane", categorie:"Nature", duree:"3h", prix:25, 
    description:"Profitez d'une randonnée pour découvrir les paysages naturels. Observez les environs et passez un moment en plein air." },
{ id:"A05", image:"image/littoral.png", titre:"Circuit du littoral", lieu:"Kélibia", categorie:"Nature", duree:"3h", prix:40, 
    description:"Découvrez le littoral de Kélibia. Profitez des paysages de la côte et de la mer. Une sortie consacrée à la nature." },

{ id:"A06", image:"image/peinture.png", titre:"Peinture sur céramique", lieu:"Nabeul", categorie:"Artisanat", duree:"2h", prix:25, 
    description:"Découvrez la décoration de la céramique. Initiez-vous aux motifs et aux couleurs. Une activité autour de l'artisanat local." },

{ id:"A07", image:"image/marche.png", titre:"Découverte d'un marché local", lieu:"Nabeul", categorie:"Découverte", duree:"1 h 30", prix:15, 
    description:"Parcourez un marché local de Nabeul. Découvrez les produits et l'ambiance du marché. Une expérience de découverte." },

{ id:"A08", image:"image/promenade.png", titre:"Promenade photographique", lieu:"Hammamet", categorie:"Découverte", duree:"2h", prix:30, 
    description:"Découvrez Hammamet pendant une promenade photographique. Observez les paysages et les lieux intéressants. Prenez le temps de regarder la ville." }   ];

let recherche = document.getElementById("recherche");
let categorie = document.getElementById("categorie");
let liste = document.getElementById("liste");

function afficherActivites() {
    liste.innerHTML = "";
    let mot = recherche.value.toLowerCase();
    let cat = categorie.value;
    let nombre = 0;

    for (let i = 0; i < activites.length; i++) {
        let a = activites[i];
        if ((a.titre.toLowerCase().includes(mot) || a.lieu.toLowerCase().includes(mot)) &&
            (cat === "Toutes" || a.categorie === cat)) {
            liste.innerHTML += `
            <div class="col-md-6 col-lg-4">
                <div class="carte">
                    <img src="${a.image}" alt="${a.titre}">
                    <h3>${a.titre}</h3>
                    <p>${a.categorie} - ${a.lieu}</p>
                    <p>Durée : ${a.duree}</p>
                    <p>Prix : ${a.prix} TND / personne</p>
                    <button class="btn btn-success bouton-details" data-index="${i}">Voir les détails</button>
                </div>
            </div>`;
            nombre++;
        }
    }

    document.getElementById("compteur").textContent = "Nombre d'activités visibles : " + nombre;
    if (nombre === 0) {
        document.getElementById("aucun").style.display = "block";
    } else {
        document.getElementById("aucun").style.display = "none";
    }
}

function voirDetails(i) {
    document.getElementById("titreModal").textContent = activites[i].titre;
    document.getElementById("texteModal").textContent = activites[i].description;
    let modal = new bootstrap.Modal(document.getElementById("detailsModal"));
    modal.show();
}

liste.addEventListener("click", function(e) {
    if (e.target.classList.contains("bouton-details")) {
        let numero = Number(e.target.getAttribute("data-index"));
        voirDetails(numero);
    }
});

recherche.addEventListener("input", afficherActivites);
categorie.addEventListener("change", afficherActivites);
afficherActivites();
