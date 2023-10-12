//console.log ("Mon fichier est lié")


const rollDices = document.getElementById('rollDices')
const dice = document.getElementById('dice')



//modifier les constellations au clic sur "Lancer les dés"

rollDices.addEventListener('click', () => {
    const randomDice = Math.floor(Math.random() * 6) + 1

    dice.src = "images/dice" + randomDice + ".png"

const scoreNumber1 = document.getElementById('scoreNumber1').textContent
console.log (scoreNumber1)
const newScoreeNumber1 = parseInt(scoreNumber1) += randomDice
console.log (newScoreeNumber1)
    })
    



// afficher le résultat
