//string storage
const kanyeStrings = [
    ['I wish I had a friend like me'],
    ['My dad got me a drone for Christmas'],
    ['Fur pillows are hard to actually sleep on'],
    ['If I got any cooler I would freeze to death']
]

let randomString = kanyeStrings[Math.floor(Math.random() * kanyeStrings.length)];
console.log(randomString)



//alphabet buttons

const abcArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

const abcButtons = document.getElementsByClassName('abcButtons')

function printBtn() {
    for (let i = 0; i < abcArray.length; i++) {
       let btn = document.createElement("button");
       let t = document.createTextNode(abcArray[i]);
       btn.appendChild(t);
       document.body.appendChild(btn);
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