//console.log ("Mon fichier est lié")

// Variables
const rollDices = document.getElementById('rollDices')
const dice = document.getElementById('dice')
let scoreCurrent1 = Number(document.getElementById('scoreCurrent1').textContent) 
let score1 = Number(document.getElementById('score1').textContent)
let scoreCurrent2 = Number(document.getElementById('scoreCurrent2').textContent)
let score2 = Number(document.getElementById('score2').textContent)
const hold1 = document.getElementById('hold1')
const hold2 = document.getElementById('hold2')
const newGame = document.getElementById('newGame')
const cercle1 = document.getElementById('cercle1')
const cercle2 = document.getElementById('cercle2')
let activePlayer = document.getElementById('player1')


//bouton "Lancer les dés"
rollDices.addEventListener('click', () => {
    //afficher le dé
    dice.style.display = 'block'

    //chiffre aléatoire entre 1 et 6 + affichage de l'image correspondante
        const randomDice = Math.floor(Math.random() * 6) + 1
        dice.src = "images/dice" + randomDice + ".png"
    
    function player1() {
        //apparaître et disparaître les cercles de couleur qui indique le joueur en cours
        cercle1.style.display = 'block'
        cercle2.style.display = 'none'
        // si chiffre aléatoire différent de 1, ajouter le chiffre aléatoire au score initial et l'afficher sinon afficher 0
        if (randomDice !== 1) {
            scoreCurrent1 = scoreCurrent1 + randomDice
            scoreCurrent1 = document.getElementById('scoreCurrent1').textContent = scoreCurrent1
        } else {
            scoreCurrent1 = 0
            scoreCurrent1 = document.getElementById('scoreCurrent1').textContent = 
            scoreCurrent1
            cercle1.style.display = 'none'
            cercle2.style.display = 'block'
            return player2()                                           
        }
        return
       }   
    player1()

   function player2 () {
        //  /si chiffre aléatoire différent de 1, ajouter le chiffre aléatoire au score initial et l'afficher sinon afficher 0
        if (randomDice !== 1) {
            scoreCurrent2 = scoreCurrent2 + randomDice
            scoreCurrent2 = document.getElementById('scoreCurrent2').textContent = scoreCurrent2
        } else {
           return player1()                                                
      }
        return
   }
   //
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
    scoreCurrent2 = document.getElementById('scoreCurrent2').textContent = scoreCurrent2
    score2 = 0
    score2 = document.getElementById('score2').textContent = score1
    //dé
    document.getElementById('dice').style.display = 'none'
    
})

