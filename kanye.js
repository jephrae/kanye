

//string storage
const kanyeStrings = [
    ['I wish I had a friend like me'],
    ['My dad got me a drone for Christmas'],
    ['Fur pillows are hard to actually sleep on'],
    ['If I got any cooler I would freeze to death']
]
const abcArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];


// let lives = 7 //chances at the guess
// let guessed = [] //where guesses go, an empty array
// let correct = ' ' //holder for correct guesses
// let wordStatus = null; //holder for the 'score' of the word

// //getting random string from array string storage
// function randomString() {
//     correct = kanyeStrings[Math.floor(Math.random() * kanyeStrings.length)];
// }

// randomString()
// //showing random string
// console.log(correct)



// //alphabet buttons
// const abcButtons = document.getElementsByClassName('abcButtons')

// function printBtn() {
//     for (let i = 0; i < abcArray.length; i++) {
//        let button = document.createElement("button");
//        let t = document.createTextNode(abcArray[i]);
//        button.id = abcArray[i] ;
//        button.appendChild(t);
//        document.body.appendChild(button).className += 'abcBtn'
//     }
// }
// printBtn()


// //handles clicks on abc buttons and checks against lives, and if letters present in string
// function handleGuess(chosenLetter){
//     guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
//     document.getElementById(chosenLetter).setAttribute('disabled', true);
    
//     if (correct.indexOf(chosenLetter) >= 0){
//         guessedWord();
//         checkIfGameWon();
//     } else if (correct.indexOf(chosenLetter) === -1) {
//         mistakes ++
//         updateMistakes();
//         checkIfGameLost();

//     }
// }
// handleGuess()

// //winning changes keyboard to win message
// function checkIfGameWon() {
//     if (wordStatus === correct){
//         document.getElementById('abcButtons').innerHTML = 'YOU WIN!'
//     }
// }
// //losing changes same thing to you lost
// function checkIfGameLost() {
//     if(mistakes === lives) {
//         document.getElementById('holder').innerHTML = `Sorry, the answer was ${randomString}`;
//         document.getElementById('abcBUttons').innerHTML = 'YOU LOSE!!'
//     }
// }


// function guessedWord(){
//     wordStatus = correct.split('').map(letter => (guessed.indexOf(letter) >=0 ? letter : "_")).join('');
//     document.getElementById('holder').innerHTML = wordStatus;
//     console.log(wordStatus)
// }
// guessedWord()


// //populating sentence spaces








