
//string storage
const kanyeStrings = [
    ['I wish I had a friend like me'],
    ['My dad got me a drone for Christmas'],
    ['Fur pillows are hard to actually sleep on'],
    ['If I got any cooler I would freeze to death']
]

//getting random quote from the array above

function randomString(){
    str = kanyeStrings[Math.floor(Math.random() * kanyeStrings.length)]
}
randomString()
console.log(str)

//space cleaner and answer array, win prints you win at lives div

let strNew = str[0].replace(/\s/g,'') //test
let answer = [];
console.log(strNew)
if (strNew == answer){
    document.getElementById('lives').innerHTML = 'YOU WIN!!!'
}



//create underscores based on character length

let underScore =[];

//makes underscores and shits them out on the dom, does by reading underScore Array
function makeUnderscores(){
    for (let i = 0; i<str[0].length; i++){
        underScore.push('_');
        document.getElementById('blanks').innerHTML = underScore.join(' ')
    }console.log(underScore)
}
makeUnderscores()



//button function to change shit in the array 




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
           if(lives >0 ){
               console.log('dookie')
           }
           else if(lives == 0){
               console.log('boo')
           }
       })
    }
}
printBtn()


//lives and counter for them
let lives = 7;
document.getElementById('lives').innerHTML = `Careful! you can only get ${lives} more, wrong`




//win criteria
