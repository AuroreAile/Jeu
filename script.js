//console.log ("Mon fichier est lié")

// Variables bouton
const rollDices = document.getElementById('rollDices')
let dice = document.getElementById('dice')
let scoreCurrent1 = Number(document.getElementById('scoreCurrent1').textContent) 
let score1 = Number(document.getElementById('score1').textContent)
let scoreCurrent2 = Number(document.getElementById('scoreCurrent2').textContent)
let score2 = Number(document.getElementById('score2').textContent)
const hold = document.getElementById('hold')
const newGame = document.getElementById('newGame')
const cercle1 = document.getElementById('cercle1')
const cercle2 = document.getElementById('cercle2')
const gradient = document.getElementById('gradient')
let challenger1 = document.getElementById('player1')
let challenger2 = document.getElementById('player2')
let activePlayer = true
let randomDice

//bouton "Lancer les dés"
rollDices.addEventListener('click', () => {
    //afficher le dé
    dice.style.display = 'block'

    //suite chiffre aléatoire entre 1 et 6 : affichage de l'image correspondante
    randomDice = Math.floor(Math.random() * 6) + 1
    dice.src = "images/dice" + randomDice + ".png"
                                                                     
    //si joueur 1 actif appel de la fonction joueur 1 sinon appel de la fonction joueur 2                                                  
    if (activePlayer) {
        player1()
    } else {
        player2()
    }                                                                 
})


//modifier le score final au clic sur "Garder le score"
hold.addEventListener('click', () => {
    //si joueur 1 ectif et si joueur 2 actif
    if (activePlayer) {
        score1 = scoreCurrent1 + score1
        score1 = document.getElementById('score1').textContent = score1
        scoreCurrent1 = 0
        scoreCurrent1 = document.getElementById('scoreCurrent1').textContent = scoreCurrent1
    } else {
        score2 = scoreCurrent2 + score2
        score2 = document.getElementById('score2').textContent = score2
        scoreCurrent2 = 0
        scoreCurrent2 = document.getElementById('scoreCurrent2').textContent = scoreCurrent2
    }

    //changer de joueur actif
    activePlayer = !activePlayer
    

    // si score joueur 1 ou joueur 2 supérieur ou égal à 100, afficher "GAGNANT"
    if (score1 >= 100) {
        challenger1.innerHTML = "GAGNANT !"
        challenger1.style.color = 'rgb(38, 116, 250)'
    } else if (score2 >= 100) {
        challenger2.innerHTML = "GAGNANT !"
        challenger2.style.color = 'rgb(38, 116, 250)'
    }                  

    //si joueur 1 actif appel de la fonction joueur 1 sinon appel de la fonction joueur 2
    if (activePlayer) {
        player1()
    } else {
        player2()
    }   
})


// Remise à 0 des paramètres au clic sur "Nouvelle partie"
newGame.addEventListener('click', () => {
    cercle1.style.display = 'block'
    cercle2.style.display = 'none'
    
    //joueur 1
    challenger1.style.color = 'black'
    challenger1.innerHTML = "Joueur 1"
    scoreCurrent1 = 0
    scoreCurrent1 = document.getElementById('scoreCurrent1').textContent = scoreCurrent1
    score1 = 0
    score1 = document.getElementById('score1').textContent = score1
    
    //joueur 2
    challenger2.style.color = 'black'
    challenger2.innerHTML = "Joueur 1"
    scoreCurrent2 = 0
    scoreCurrent2 = document.getElementById('scoreCurrent2').textContent = scoreCurrent2
    score2 = 0
    score2 = document.getElementById('score2').textContent = score1
    
    //dé
    document.getElementById('dice').style.display = 'none' 
})




//fonction pour le joueur 1
function player1() {
    //apparaître et disparaître les cercles de couleur qui indique le joueur en cours
    cercle1.style.display = 'block'
    cercle2.style.display = 'none'
    gradient.style.background = 'linear-gradient(to right, rgb(171, 219, 253) 50%, rgb(180, 224, 254) 50%)'        
     // si chiffre aléatoire différent de 1, ajouter le chiffre aléatoire au score initial et l'afficher sinon afficher 0 + passer au joueur 2
    if (randomDice !== 1) {
         scoreCurrent1 = scoreCurrent1 + randomDice
         scoreCurrent1 = document.getElementById('scoreCurrent1').textContent = scoreCurrent1
    } else {
         scoreCurrent1 = 0
         scoreCurrent1 = document.getElementById('scoreCurrent1').textContent = scoreCurrent1
         activePlayer = false
    }
}  

 //fonction pour le joueur 2
    function player2 () { 
       //apparaître et disparaître les cercles de couleur qui indique lejoueur en cours
    cercle1.style.display = 'none'
    cercle2.style.display = 'block'
    gradient.style.background = 'linear-gradient(to left, rgb(171,219, 253) 50%, rgb(180, 224, 254) 50%)'
     //si chiffre aléatoire différent de 1, ajouter le chiffre aléatoire au score initial et l'afficher sinon afficher 0 + passer au joueur 1
    if (randomDice !== 1) {
        scoreCurrent2 = scoreCurrent2 + randomDice
        scoreCurrent2 = document.getElementById('scoreCurrent2').textContent = scoreCurrent2
    } else {
        scoreCurrent2 = 0            
        scoreCurrent2 = document.getElementById('scoreCurrent2').textContent = scoreCurrent2
        activePlayer = true
    }  
}
