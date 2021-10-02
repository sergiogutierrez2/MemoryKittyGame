document.addEventListener('DOMContentLoaded', () => {

    var Score = 20

    const cardArray = [
      {
        name: 'lion',
        img: 'images/lion3.png'
      },
      {
        name: 'lion',
        img: 'images/lion3.png'
      },
      {
        name: 'leopard',
        img: 'images/leopard3.png'
      },
      {
        name: 'leopard',
        img: 'images/leopard3.png'
      },
      {
        name: 'cheetah',
        img: 'images/cheetah3.png'
      },
      {
        name: 'cheetah',
        img: 'images/cheetah3.png'
      },
      {
        name: 'panther',
        img: 'images/panther3.png'
      },
      {
        name: 'panther',
        img: 'images/panther3.png'
      },
      {
        name: 'tiger',
        img: 'images/tiger3.png'
      },
      {
        name: 'tiger',
        img: 'images/tiger3.png'
      },
      {
        name: 'jaguar',
        img: 'images/jaguar3.png'
      },
      {
        name: 'jaguar',
        img: 'images/jaguar3.png'
      }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []


    //flip your card
    function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
 }

    //check for matches
    function checkForMatch() {


    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
       alert('These cards match!')
       cards[optionOneId].setAttribute('src', 'images/tile8.png')
       cards[optionTwoId].setAttribute('src', 'images/tile8.png')
       cardsWon.push(cardsChosen)
     } else {
        cards[optionOneId].setAttribute('src', 'images/tile7.png')
        cards[optionTwoId].setAttribute('src', 'images/tile7.png')
        alert('Sorry, try again')
        Score--;
      }
    
       cardsChosen = []
       cardsChosenId = []
       resultDisplay.textContent = "Score: " + Score
       if (cardsWon.length === cardArray.length/2)
       {
         resultDisplay.textContent = 'Congratulations! You Win! Your Score is: ' + Score + "/" + 20;
       }
    }
    
    

    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'images/tile7.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }

    createBoard();


    })