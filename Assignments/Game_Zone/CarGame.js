/* Part 3 Start */
const Score = document.querySelector('.score');
const startScreen = document.querySelector('.startScreen');
const gameArea = document.querySelector('.gameArea');

/* Part 5 */
let Keys = {ArrowUp : false, ArrowDown : false, ArrowLeft:false, ArrowRight:false};

/* Part 4 */ 
document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);

function keyDown(e){
    e.preventDefault(); // Off your default functionality
    Keys[e.key] = false;
    console.log(e.key);
    console.log(Keys);
}

function keyUp(e){
    e.preventDefault(); //Off Your default functionality
    Keys[e.key] = false;
    console.log(e.key);
    console.log(Keys);
}

/* Part 6 */ 
document.addEventListener('click',Start);

var You = { };

//Part - 7
function playYourGame()
{
    console.log('Play the game');
    if(You.Start)
    {
        window.requestAnimationFrame(playYourGame);
    }
}

function Start(){
    gameArea.classList.remove('hide');
    startScreen.classList.add('hide');

    You.Start = true;
    window.requestAnimationFrame(playYourGame);

    //Create Your Car
    let yourCar = document.createElement('div');
    yourCar.setAttribute('class','Car');
    yourCar.innerText = "First Random Car";
    gameArea.appendChild(yourCar);

    // Part - 8 
    You.x = yourCar.offsetLeft;
    You.y = yourCar.offsetTop;
    console.log("Left Side : ",yourCar.offsetLeft);
    console.log("Right Side : ",yourCar.offsetTop);

}