

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


//getting random string from array string storage

let randomString = kanyeStrings[Math.floor(Math.random() * kanyeStrings.length)];
console.log(randomString)

// taking the characters out of random string, with the spaces


//making blanks using array for each make a blank item on HTML
const stringBlanks = document.getElementsByClassName('blankString')
console.log(stringBlanks)

function printBlanks() {  //need to change for argument to point to spiced array made from randomstring
    for (let i = 0; i < randomString.length; i++) {
       let blank = document.createElement("h2");
       let blanks = document.createTextNode(randomString);
       blank.appendChild(blanks);
       document.body.appendChild(blank);
    }
}
printBlanks()








//alphabet buttons


const abcButtons = document.getElementsByClassName('abcButtons')

function printBtn() {
    for (let i = 0; i < abcArray.length; i++) {
       let button = document.createElement("button");
       let t = document.createTextNode(abcArray[i]);
       button.appendChild(t);
       document.body.appendChild(button);
    }
}
printBtn()


console.log(abcButtons)


// let buttons = function() {
//     abcButtons = document.getElementById('abcButtons')
//     abcs = document.createElement('ul')
//     for(let i =0; i <abcArray.length; i++) {
//         let makeList = document.createElement('li')
//         makeList.innerHTML = abcs[i];
//         abcButtons.appendChild(abcs);
//     }
// }

// console.log(abcButtons)


//populating sentence spaces
const stringSpaces = 0




//alphabet button click functionality


//turn counter for now

