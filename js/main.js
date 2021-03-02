const mainPage = document.getElementById('mainPage');

let main = ('<div class="row"><div class="col-md-4 offset-md-4 col-sm-12 text-center"><div class="card"><div class="card-body"><h1 id="topPage" class="h-50 overflow-auto text-center">Text View</h1><div id="hider" class="text-center"><button type="button" class="btn btn-outline-info text-center fs-1 m-5" id="next">NEXT</button></div><p id="midPage" class="overflow-auto mt-2 text-center">When you have the number click Next</p><hr><div class="d-flex flex-row-reverse"><button class="btn btn-light rounded-circle fs-1" id="btmBtn">C</button></div></div></div></div></div>');

mainPage.innerHTML = main

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
let rndB = ['go','<i class="fas fa-undo-alt"></i>','<i class="fas fa-undo-alt"></i>','<i class="fas fa-undo-alt"></i>','<i class="fas fa-undo-alt"></i>','<i class="fas fa-undo-alt"></i>'];

let symb = ['<i class="fas fa-bolt"></i>','<i class="fas fa-rocket"></i>','<i class="fas fa-horse"></i>','<i class="fab fa-napster"></i>','<i class="far fa-gem"></i>','<i class="fas fa-guitar"></i>','<i class="fas fa-heart"></i>','<i class="fas fa-chess"></i>','<i class="fas fa-coins"></i>','<i class="fas fa-poop"></i>','<i class="fas fa-fire"></i>','<i class="fas fa-umbrella-beach"></i>','<i class="fas fa-anchor"></i>','<i class="fab fa-slack-hash"></i>','<i class="fas fa-beer"></i>','<i class="fab fa-btc"></i>','<i class="fas fa-bomb"></i>','<i class="fas fa-pizza-slice"></i>','<i class="fas fa-ice-cream"></i>','<i class="fas fa-bacon"></i>','<i class="fab fa-rebel"></i>','<i class="fas fa-hat-wizard"></i>','<i class="fas fa-cat"></i>','<i class="fas fa-skull-crossbones"></i>','<i class="far fa-tired"></i>','<i class="fas fa-toilet-paper"></i>','<i class="fas fa-code"></i>','<i class="fas fa-dollar-sign"></i>','<i class="fas fa-trophy"></i>','<i class="fab fa-wordpress"></i>','<i class="fas fa-yin-yang"></i>','<i class="fas fa-user-secret"></i>','<i class="fas fa-coffee"></i>']


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
    next.innerHTML = nxt[viewNum];
    hider.className = (vis[viewNum]);
    //mid1.textContent = mid[viewNum];
    btmBtn.innerHTML = rndB[viewNum];
}

loadView();
