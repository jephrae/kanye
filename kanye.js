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

let buttons = function () {
    myButtons = document.getElementById('#abcButtons');
    letters = document.createElement('ul');
    for (let i = 0; i < abcArray.length; i++) {
        letters.id = 'abcs';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = abcs[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
    }
}
console.log(myButtons)



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