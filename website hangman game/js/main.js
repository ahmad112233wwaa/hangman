// letters 
let i=0;
const letters="abcdefghigklmnopqrstuvwxyz";
// get array  from letters
let lettersArray=Array.from(letters);
// select letters container 
let lettersContainer=document.querySelector(".letters");
// generator letters
lettersArray.forEach(letter =>{
    let span =document.createElement('span');
    // create letter text node
    let theLetter =document.createTextNode(letter);
    // append the letter to span
    span.appendChild(theLetter);
    // add Class on span
    span.className= 'letter-box';
    // append span to letters Container
    lettersContainer.appendChild(span);
});

//object of words + Categories
const words=
{
    programming:["php","java script","scale","fortran","r","mysql","python"],
    movies:["prestige","Inception","parasite","Interstellar","Whiplash","memento","coco","up"],
    people:["albert","Hitchcock","alexander","cleopatra","mahatma",],
    countries:["syria","palestine","Yamen","egypt","Bahrain","Qatar"]
}

// get random property
let allKeys=Object.keys(words);
// random number depend in keys length
let randomPropertyNumber = Math.floor(Math.random() * allKeys.length);
// category
let randomPropName = allKeys[randomPropertyNumber];
// category words
let randomPropValue=words[randomPropName];
// random number  depend on words
let randomValueNumber= Math.floor(Math.random() * randomPropValue.length);
// the chosen word
let randomValueValue= randomPropValue[randomValueNumber];

// set category info
document.querySelector(".game-info .category span").innerHTML=randomPropName;

//  select Letters Guess element 
let lettersGuessContainer=document.querySelector('.letters-guess');

// convert chosen word to Array
let lettersAndSpace=Array.from(randomValueValue);
// create spans depended on word
lettersAndSpace.forEach(letter =>{
    let emptySpan=document.createElement('span');
    // if letter is space
    if(letter === '')
    {
        emptySpan.className='width-span';

    }
    // Append spans to Guess container 
    lettersGuessContainer.appendChild(emptySpan);
});

//select Guess Spans 
let guessSpans=document.querySelectorAll(".letters-guess span");



// set wrong attempts
let wrongAttempts=0;
// select the draw  attempts
let theDraw=document.querySelector(".hangman-draw");

// handle clicking on letters
document.addEventListener("click" , (e) => {
    // set chosen status
    let theStatus=false;
    if(e.target.className === 'letter-box')
    {
        
        e.target.classList.add("clicked");

        // get clicked letter
        let theClickedLetter=e.target.innerHTML.toLowerCase();
        // the chosen word
        let  theChosenWorld=Array.from(randomValueValue.toLowerCase());
         theChosenWorld.forEach((wordLetter,worldIndex)=> {
            // if the clicked letter
            if(theClickedLetter == wordLetter )
            {
        //         // set status to correct 
                theStatus=true;

        //     // console.log(`found at index number ${index}`);

        //     //  loop on all guess spans 
       
            guessSpans.forEach((span,spanIndex)=>
            {
                if(worldIndex === spanIndex)
                {
                    span.innerHTML= theClickedLetter;
                   i++;
                   console.log(i);
                   if(i == guessSpans.length)
                 {
                     winGame();
                     
                 }

                }
            });


            }
        });
        //  outside loop
        // console.log(theStatus);
        // if letter is wrong
        if(theStatus !== true)
        {
        // increase The Wrong Attempts
        wrongAttempts++;
        // add class wrong in the draw element
        theDraw.classList.add(`wrong-${wrongAttempts}`);
        // paly fail sound
        
        if(wrongAttempts === 8)
        {
            endGame();
            lettersContainer.classList.add("finished");
            document.getElementById("fail").play();
        }
    }
        var countWrong =document.getElementById("count-wrong");
        countWrong.innerText=String(wrongAttempts);
        countWrong.style.backgroundColor(red);
    }
});

// end game Function
function endGame()
{
    // create popup div
    let div =document.createElement("div");
    // create text
    let divText=document.createTextNode(`Game Over The World Is : ${randomValueValue} `);
    // append text to text
    div.appendChild(divText);
    // add class on div
    div.className='popup';
    // append tp body
    document.body.appendChild(div);
}
function winGame()
{
    let div =document.createElement("div");
    // create text
    let divText=document.createTextNode(`You Is Winner the Count Of Wrong It's : ${wrongAttempts}`);
    // append text to text
    div.appendChild(divText);
    // add class on div
    div.className='popup';
    // append tp body
    document.body.appendChild(div);
    document.getElementById("success").play();
}

var again=document.getElementById("again");
again.onclick = function()
{
    history.go();
}