//console.log ("Mon fichier est lié")

// Variables
const rollDices = document.getElementById('rollDices')
const dice = document.getElementById('dice')
let scoreCurrent1 = Number(document.getElementById('scoreCurrent1').textContent)
let score1 = Number(document.getElementById('score1').textContent)
const hold1 = document.getElementById('hold1')
const newGame = document.getElementById('newGame')
let gamePlayer1 = document.getElementById('gamePlayer1')


//bouton "Lancer les dés"
rollDices.addEventListener('click', () => {
    //afficher le dé
    document.getElementById('dice').style.display = 'block'

    //chiffre aléatoire entre 1 et 6 + affichage de l'image correspondante
        const randomDice = Math.floor(Math.random() * 6) + 1
        dice.src = "images/dice" + randomDice + ".png"
    
    function player1() {
        // si chiffre aléatoire différent de 1, ajouter le chiffre aléatoire au score initial et l'afficher sinon afficher 0
        if (randomDice !== 1) {
            scoreCurrent1 = scoreCurrent1 + randomDice
            scoreCurrent1 = document.getElementById('scoreCurrent1').textContent = scoreCurrent1
        } else {
            scoreCurrent1 = 0
            scoreCurrent1 = document.getElementById('scoreCurrent1').textContent = scoreCurrent1
        }
    }

    if 
    player1()

    function player2 () {
         // si chiffre aléatoire différent de 1, ajouter le chiffre aléatoire au score initial et l'afficher sinon afficher 0
        if (randomDice !== 1) {
            scoreCurrent2 = scoreCurrent2 + randomDice
            scoreCurrent2 = document.getElementById('scoreCurrent2').textContent = scoreCurrent2
            } else {
            scoreCurrent2 = 0
            scoreCurrent2 = document.getElementById('scoreCurrent2').textContent = scoreCurrent2
            }
    }
    player2()                                                                                 
})


//modifier le score final au clic sur "Garder le score"
hold1.addEventListener('click', () => {
        score1 = scoreCurrent1 + score1
        score1 = document.getElementById('score1').textContent = score1
})


// Remise à 0 des paramètres au clic sur "Nouvelle partie"
newGame.addEventListener('click', () => {
    //joueur 1
    scoreCurrent1 = 0
    scoreCurrent1 = document.getElementById('scoreCurrent1').textContent = scoreCurrent1
    score1 = 0
    score1 = document.getElementById('score1').textContent = score1
    //joueur 2
    scoreCurrent2 = 0
    scoreCurrent2 = document.getElementById('scoreCurrent2').textCont
    scoreCurrent2
    score2 = 0
    score2 = document.getElementById('score2').textContent = score1
    //dé
    document.getElementById('dice').style.display = 'none'
})

