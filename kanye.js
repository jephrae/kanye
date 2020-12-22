
//string storage
const kanyeStrings = [
    ['I wish I had a friend like me'],
    ['My dad got me a drone for christmas'],
    ['fur pillows are hard to actually sleep on'],
    // ['If I got any cooler I would freeze to death']
]

//getting random quote from the array above

function randomString(){
    str = kanyeStrings[Math.floor(Math.random() * kanyeStrings.length)]
    str = str[0]
}
randomString()
console.log(str)

//space cleaner and answer array, win prints you win at lives div

let strNew = str.replace(/\s/g,'') //test
let answer = [];
console.log(strNew)
console.log(str)


// win function

function win() {
if (strNew == answer){
    document.getElementById('lives').innerHTML = 'YOU WIN!!!'
    }
}
// loss function
function checkLoss(){
if (lives == 0){
    document.getElementById('lives').innerHTML = 'YOU LOSE!!!!!'
    }
}

//create underscores based on character length

let underScore =[];

//makes underscores and shits them out on the dom, does by reading underScore Array
function makeUnderscores(){
    for (let i = 0; i<str.length; i++){
        if(str[i]=== ' '){
            underScore.push('&nbsp;')
        } else {
        underScore.push('_');
        }
        document.getElementById('blanks').innerHTML = underScore.join(' ')
    }console.log(underScore)
}
makeUnderscores()




//keyboard buttons
const abcArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];


const abcButtons = document.getElementsByClassName('abcButtons')
//makes the buttoms show up on page via dom, makes button for each element of abcArray
function printBtn() {
    for (let i = 0; i < abcArray.length; i++) {
       let button = document.createElement("button");
       let t = document.createTextNode(abcArray[i]);
       button.id = abcArray[i] ;
       button.appendChild(t);
       document.getElementById('abcButtons').appendChild(button).className += 'abcBtn'
       button.addEventListener('click', function(){
           if(lives >0 && strNew.includes(button.id)){
                for(let i = 0;i < str.length;i++){
                    // console.log(str[i])
                    // console.log(button.id)
                    if(str[i].toLowerCase()==button.id){
                        underScore[i] = button.id
                    }
                }
               document.getElementById('blanks').innerHTML = underScore.join(' ')
            //    console.log('succcess')
               answer.push(button.id)
               console.log(answer)
               win()
           }
           else if(lives >0 && !strNew.includes(button.id)){
               console.log('boo')
               lives --
               console.log(lives)
               checkLoss()
           }
       })
    }
}
printBtn()


//lives and counter for them
let lives = 7;
document.getElementById('lives').innerHTML = `Careful! you can only get ${lives} more, wrong`


// function handleGuess(button) {
//     strNew.indexOf(button) === -1 ? strNew.push(button) : null;
//     document.getElementById(button).setAttribute('disabled', true);

//     if(strNew.indexOf(chosenLetter) >= 0){
//         // guessedWord();
//         win();
//     } else if (strNew.indexOf(chosenLetter)=== -1){
//         lives -1;
//         checkLoss();

//     }

// }

