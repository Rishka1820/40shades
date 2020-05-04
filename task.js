let card4 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
let card5 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
let card6 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56];

var boxes = document.querySelectorAll('.grid-item');
let shuffle = function (arr) {
    let newposition, temp;
    for (let i = arr.length - 1; i > 0; i--) {
        newposition = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[newposition];
        arr[newposition] = temp;
    }
    return arr;

}
let shuffled4 = shuffle(card4)
let shuffled5 = shuffle(card5)
let shuffled6 = shuffle(card6)





    let mytime;
    let object=document.getElementById('stopwatch')
    function starttime(){
        const start = new Date()
        mytime = setInterval(() => {
        let now = new Date()
        let dt = now.getTime() - start.getTime()
        object.innerHTML = dt / 1000
    }, 1)}


   
    function stoptimer(){
        
        clearInterval(mytime);
        mytime = null;
        console.log(mytime)
    }

function timer(r) {

    document.getElementById("k").style.visibility = "visible";


    console.log(r)
    let levels = document.querySelectorAll('.level')
    for (var i = 0; i < levels.length; i++)
        levels[i].onclick = function () {
            return false;
        }
    
    var counter = 4;
    var s = setInterval(function () {
        --counter
        if (counter > 0) {
            span = document.getElementById("k");
            span.innerHTML = counter;
            console.log(counter);
        }
        if (counter == 0) {
            game(r)

        }


    }, 1000)

    function game(r) {
        clearInterval(s);
        document.getElementById("k").innerHTML = "";
        document.getElementById("k").style.visibility = "collapse";
        makeRows(r)

    }
    let count = 0;

    let shuffled;
    function makeRows(r) {
        let a = r;
        console.log(a)
        if (a == 4) { shuffled = shuffled4; }
        else if (a == 5) { shuffled = shuffled5; }
        else { shuffled = shuffled6; }
        console.log(shuffled)
        gameBoard.setAttribute('style', 'grid-template-columns: repeat(' + a + ', 1fr)');

        for (c = 0; c < (r * r); c++) {

            let cell = document.createElement("div");

            cell.innerText = shuffled[c];
            gameBoard.appendChild(cell).className = "box";
            cell.id = c;

            cell.addEventListener("click", function () { change(this.id, this.innerHTML, a) })


            
        };
        starttime();

    }
   
    if (r == 4) { var y = Math.min.apply(Math, card4); i = 16, m = 53, d = 32 }
    else if (r == 5) { var y = Math.min.apply(Math, card5); i = 25, m = 71, d = 50 }
    else { var y = Math.min.apply(Math, card6); i = 36, m = 93, d = 72 }
   

    function change(id, x) {

        if (x == y) {
            x = parseInt(x) + i;
            count++;
            y = y + 1;
            console.log(y);
           



            if (parseInt(x) < m) {
                document.getElementById(id).innerHTML = x;
                console.log(document.getElementById(id).innerHTML)
            }
            else {
                document.getElementById(id).style.visibility = 'collapse';
            }
            if (count == d) {
                while (gameBoard.firstChild) {
                    gameBoard.removeChild(gameBoard.firstChild)
                }
                end();
            }

        }
        else {
            while (gameBoard.firstChild) {
                gameBoard.removeChild(gameBoard.firstChild)
            }

            gameover();
        }
    }
   
    }

    function gameover() {
        let timetaken= object.innerHTML
        console.log(timetaken)

        stoptimer();
        let gameBoard = document.getElementById('gameBoard')
        document.getElementById('stopwatch').innerHTML = "00:00";
        while (gameBoard.firstChild) {
            gameBoard.removeChild(gameBoard.firstChild)
        }
        
        document.getElementById("gameBoard").style.visibility = "collapse";
        let over = document.createElement("div");
        document.body.appendChild(over);
        over.className = 'end';
        over.innerHTML = "YOU LOST";
        let timetake = document.createElement("div");
        document.body.appendChild(timetake);
        timetake.className = 'end';
        timetake.innerHTML = timetaken;
        let newGame = document.getElementById('newGame')
        newGame.style.visibility = "visible";
        newGame.innerHTML = "Play Again";
        newGame.addEventListener('click', newgame);


    }



    function end() {
        let timetaken= object.innerHTML
        stoptimer();
        document.getElementById('stopwatch').innerHTML = "00:00";
        document.getElementById("gameBoard").style.visibility = "collapse";
        let over = document.createElement("div");
        document.body.appendChild(over);
        over.className= 'end'
        over.innerHTML = "END";
        let timetake = document.createElement("div");
        document.body.appendChild(timetake);
        timetake.className = 'end';
        timetake.innerHTML = timetaken;
        let newGame = document.getElementById('newGame')
        newGame.style.visibility = "visible";
        newGame.innerHTML = "Play Again";
        newGame.addEventListener('click', newgame);
        console.log(over.innerHTML)

    }
    function newgame() {
       let end=document.querySelectorAll('.end')
       for(i=0;i<end.length;i++)
       {
           end[i].style.visibility="collapse"
       }
      
        let newGame = document.getElementById('newGame')
        newGame.style.visibility="collapse"
     let levels=document.querySelectorAll('.level')
        for (var i = 0; i < levels.length; i++){
        
        let e=i+4
        levels[i].onclick = function () {
           timer(e)}
    }




}


