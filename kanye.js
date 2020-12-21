

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
    }
}
printBtn()

