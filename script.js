const question = document.getElementById("question");

const continueBtn = document.getElementById("continueBtn");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const gif = document.getElementById("gif");

const introMessages = [
    "🐻 Hi there...",
    "I wanted to ask you something...",
    "Something very important...",
    "I'm a little nervous...",
    "Okay..."
];

const noMessages = [
    "Think again 🥺",
    "Phir se soch lo 😔",
    "Take your time ⏳",
    "Are you sure? 😢",
    "I think you clicked the wrong button 🤔",
    "Maybe try the green one? 💚",
    "I'll wait 🥹",
    "Mera dil toot jayega 💔",
    "Really really sure? 😭",
    "The No button is getting nervous 😰",
    "The No button wants a transfer 😵"
];

const gifList = [
    "gifs/please.gif",
    "gifs/pleading.gif",
    "gifs/nervous.gif",
    "gifs/cryingpanda.gif",
    "gifs/cryingpanda.gif",
    "gifs/cryingpanda.gif",
    "gifs/cryingpanda.gif"
];

let introIndex = 0;
let noCount = 0;
let yesSize = 1;

noBtn.style.left = "55%";
noBtn.style.top = "55%";


// INTRO STORY

continueBtn.addEventListener("click", () => {

    introIndex++;

    if (introIndex < introMessages.length) {

        question.innerText = introMessages[introIndex];

        if(introIndex === 1){
            gif.src = "gifs/happypanda.gif";
        }

        if(introIndex === 3){
            gif.src = "gifs/nervous.gif";
        }

        if(introIndex === 4){
            gif.src = "gifs/pleading.gif";
            continueBtn.innerText = "I'm Ready ➜";
        }

    } else {

        question.innerText =
            "Will you go out with me? ❤️";

        continueBtn.style.display = "none";

        gif.src = "gifs/hipanda.gif";

        yesBtn.style.display = "inline-block";
        noBtn.style.display = "inline-block";
    }

});


// MOVE NO BUTTON

function moveNoButton() {

    noBtn.style.position = "absolute";

    const maxX =
        window.innerWidth - noBtn.offsetWidth;

    const maxY =
        window.innerHeight - noBtn.offsetHeight;

    const randomX =
        Math.random() * maxX;

    const randomY =
        Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}


// NO BUTTON CLICK

noBtn.addEventListener("click", () => {

    if (noCount < noMessages.length) {

        question.innerText =
            noMessages[noCount];

        if(noCount < gifList.length){
            gif.src = gifList[noCount];
        }

        yesSize += 0.15;

        yesBtn.style.transform =
            `scale(${yesSize})`;

        moveNoButton();

        noCount++;

    }
    else {

        question.innerText =
            "The No Button Has Officially Resigned 😭";

        noBtn.style.display = "none";
    }

});


// ESCAPE CURSOR AFTER 6 CLICKS

noBtn.addEventListener("mouseover", () => {

    if (noCount >= 6) {

        moveNoButton();

    }

});


// YES BUTTON

yesBtn.addEventListener("click", () => {

    document.body.innerHTML = `

        <div style="
            height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            background:pink;
            text-align:center;
            font-family:Arial;
        ">

            <img
                src="gifs/happypanda.gif"
                style="width:300px;"
            >

            <h1>
                ❤️ I KNEW IT! ❤️
            </h1>

            <h2>
                The Yes Button Believed In Us All Along 😌
            </h2>

            <h3>
                The No Button Has Been Terminated.
            </h3>

        </div>

    `;

});