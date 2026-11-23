let activite = document.getElementById("activite");
let participants = document.getElementById("participants");
function calculerPrix() {
    let prix = Number(activite.value);
    let nombre = Number(participants.value);
    let coutTotal = prix * nombre;
    let remise = 0;

    if (nombre >= 4) {
        remise = coutTotal * 0.10;
    }
    let total = coutTotal - remise;
    document.getElementById("unitaire").textContent = prix;
    document.getElementById("coutTotal").textContent = coutTotal;
    document.getElementById("remise").textContent = remise;
    document.getElementById("total").textContent = total;      }


activite.addEventListener("change", calculerPrix);
participants.addEventListener("input", calculerPrix);
document.getElementById("formReservation").addEventListener("submit", function(e) {
    e.preventDefault();
    let date = document.getElementById("date").value;
    let aujourdHui = new Date().toISOString().split("T")[0];
    let nombre = Number(participants.value);
    if (activite.value === "" || date === "" || date < aujourdHui ||
        nombre < 1 || nombre > 6 || document.getElementById("telephone").value === "" ||
        document.getElementById("conditions").checked === false) {
        document.getElementById("message").textContent = "Erreur : verifiez les champs, la date, le nombre de participants et les conditions.";
        document.getElementById("message").className = "alert alert-danger";
    } else {
        let choix = activite.options[activite.selectedIndex].text;
        document.getElementById("message").textContent = "Simulation valide.";
        document.getElementById("message").className = "alert alert-success";
        document.getElementById("recapitulatif").textContent =
        "Activite : " + choix + " | Date : " + date + " | Participants : " + nombre +
        " | Total : " + document.getElementById("total").textContent + " TD.Simulation enregistree localement à l'ecran : aucune réservation reelle n'a été effectue.";
    }
});
document.getElementById("formReservation").addEventListener("reset", function() {
    document.getElementById("message").textContent = "";
    document.getElementById("recapitulatif").textContent = "";
    setTimeout(calculerPrix, 0);         });
calculerPrix();
