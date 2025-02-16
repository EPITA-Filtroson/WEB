function downloadSoftware() {
    alert("Le téléchargement commencera bientôt !");
    window.location.href = "lien_vers_le_fichier.zip";
}
//Info Equipe
const membersInfo = {
    roman: {
        name: "Roman Bouyon",
        text: "Chef de projet et responsable du développement."
    },
    jaisy: {
        name: "Jaisy Brahimi",
        text: "Spécialiste en traitement du signal et en algorithmes."
    },
    mathias: {
        name: "Mathias Gaillard",
        text: "Développeur travaillant sur la structuration du code."
    },
    rayan: {
        name: "Rayan Hamani",
        text: "Responsable de l'optimisation et de la performance."
    },
    youssef: {
        name: "Youssef Menessy",
        text: "Expert en implémentation et en intégration."
    }
};

//Ouverture fenêtre
function openModal(member) {
    document.getElementById("modal-title").innerText = membersInfo[member].name;
    document.getElementById("modal-text").innerText = membersInfo[member].text;
    document.getElementById("modal").style.display = "flex";
}

//Fermeture Fenêtre
function closeModal() {
    document.getElementById("modal").style.display = "none";
}
