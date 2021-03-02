const top1 = document.getElementById('topPage');
const mid1 = document.getElementById('midPage');
const bottom = document.getElementById('bottomPage');
const next = document.getElementById('next');
const btmBtn = document.getElementById('btmBtn');
const hider = document.getElementById('hider');
let viewNum = 0;

let randomArr = [];

let nxt = ['', 'NEXT', 'NEXT', 'NEXT', 'REVEAL',''];
let vis = ['invisible', 'visible', 'visible', 'visible', 'visible', 'invisible'];
let rndB = ['go','C','C','C','C','C'];

let symb = ['%','$','#','@','*','!','&']


function randSym() {
    for (let i = 0; i < 100; i ++) {
        randomArr[i] = symb[Math.floor(Math.random() * symb.length)];
    }
    for (let i = 9; i < 100; i += 9) { 
        randomArr[i] = randomArr[0];
    }
}

randSym();

let views = ['I can read your mind','Pick a number from 01-99','Add both digits together to get a new number','Subtract your new number from the original number','','<center><em>' + randomArr[0] + '</em></center>'];
let mid = ['','when you have your next number click next','Ex. 14 is 1 + 4 = 5<br>click next to proceed','Ex. 14 - 5 = 9<br>click next to proceed','Find your new number.<br>Note the symbol beside the number.','Your symbol is:<br>' + randomArr[0]]

btmBtn.onclick = function BottomBtn() {
    if (viewNum === 0) {
        Next();
    } else {
        Reset();
    }

}

next.onclick = function MidBtn() {
    if (viewNum < 5) {
        Next();
    } else {
        /// reveal;
    }

}

function ansKey() {
    views[4] += '<center>'
    for (let i = 0; i < 100; i++) {
        views[4] += i + ' - ' + randomArr[i] + '<br>';
    }
    views[4] += '</center>'
}

ansKey();

function Next() {
    viewNum++ ;
    loadView();

}

function Reset() {
    viewNum = 0;
    loadView();
    randSym();
}

function loadView() {
    top1.innerHTML = views[viewNum];
    mid1.innerHTML = mid[viewNum];
    next.textContent = nxt[viewNum];
    hider.className = (vis[viewNum]);
    //mid1.textContent = mid[viewNum];
    btmBtn.textContent = rndB[viewNum];
}

loadView();
