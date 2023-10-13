//console.log ("Mon fichier est lié")

// Variables
const rollDices = document.getElementById('rollDices')
const dice = document.getElementById('dice')
let scoreCurrent1 = Number(document.getElementById('scoreCurrent1').textContent)
let score1 = Number(document.getElementById('score1').textContent)
const hold1 = document.getElementById('hold1')




//modifier les constellations au clic sur "Lancer les dés"
rollDices.addEventListener('click', () => {
    //chiffre aléatoire entre 1 et 6 + affichage de l'image correspondante
    const randomDice = Math.floor(Math.random() * 6) + 1
    dice.src = "images/dice" + randomDice + ".png"

    // si chiffre aléatoire différent de 1, ajouter le chiffre aléatoire au score initial et l'afficher sinon afficher 0
    if (randomDice !== 1) {
        scoreCurrent1 = scoreCurrent1 + randomDice
        scoreCurrent1 = document.getElementById('scoreCurrent1').textContent = scoreCurrent1
    } else {
        scoreCurrent1 = 0
        scoreCurrent1 = document.getElementById('scoreCurrent1').textContent = scoreCurrent1
    }
})

//modifier le score final au clic sur "Garder le score"
hold1.addEventListener('click', () => {
    score1 = scoreCurrent1 + score1
    score1 = document.getElementById('score1').textContent = score1
})


// afficher le résultat
