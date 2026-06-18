const question = document.getElementById("question");
const subtitle = document.getElementById("subtitle");

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

// -------------------------
// INTRO STORY
// -------------------------

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
            "Maan Ja Yrr 🥺❤️";

        subtitle.innerText =
            "Choose carefully 🐼💕";

        continueBtn.style.display = "none";

        gif.src = "gifs/hipanda.gif";

        yesBtn.style.display = "inline-block";
        noBtn.style.display = "inline-block";
    }

});

// -------------------------
// MOVE NO BUTTON
// -------------------------

function moveNoButton() {

    noBtn.style.position = "fixed";

    const buttonWidth = noBtn.offsetWidth;
    const buttonHeight = noBtn.offsetHeight;

    const padding = 20;

    const minX = padding;
    const minY = padding;

    const maxX =
        window.innerWidth -
        buttonWidth -
        padding;

    const maxY =
        window.innerHeight -
        buttonHeight -
        padding;

    let randomX;
    let randomY;

    if(noCount < 3){

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        randomX =
            centerX +
            (Math.random() * 200 - 100);

        randomY =
            centerY +
            (Math.random() * 150 - 75);

    } else {

        randomX =
            Math.random() * (maxX - minX) + minX;

        randomY =
        Math.random() *
        (maxY - window.innerHeight * 0.3)
        +
        window.innerHeight * 0.3;
    }

    // Final safety clamp

    randomX = Math.max(minX, Math.min(randomX, maxX));
    randomY = Math.max(minY, Math.min(randomY, maxY));

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

// -------------------------
// NO BUTTON CLICK
// -------------------------

noBtn.addEventListener("click", () => {

    if (noCount < noMessages.length) {

        question.innerText =
            noMessages[noCount];

        subtitle.innerText =
            `No Attempts: ${noCount + 1}`;

        if(noCount < gifList.length){
            gif.src = gifList[noCount];
        }

        yesSize += 0.15;

        yesBtn.style.transform =
            `scale(${yesSize})`;

        // Make Yes pulse after some No clicks

        if(noCount >= 3){

            yesBtn.style.animation =
                "pulse 1s infinite";
        }

        // Change No button text

        if(noCount >= 3){
            noBtn.innerText = "Maybe 🤔";
        }

        if(noCount >= 5){
            noBtn.innerText = "Catch Me 😜";
        }

        if(noCount >= 7){
            noBtn.innerText = "Too Slow 😆";
        }

        if(noCount >= 9){
            noBtn.innerText = "Impossible 😎";
        }

        moveNoButton();

        noCount++;

    }
    else {

        question.innerText =
            "System Error: Too many No attempts detected 🤖💔";

        subtitle.innerText = "";

        setTimeout(() => {

            question.innerText =
                "The No Button Has Officially Resigned 😭";

        }, 2000);

        noBtn.style.display = "none";
    }

});

// -------------------------
// DESKTOP ESCAPE MODE
// -------------------------

noBtn.addEventListener("mouseenter", () => {

    if(noCount >= 5){

        moveNoButton();

    }

});

// -------------------------
// YES BUTTON
// -------------------------

yesBtn.addEventListener("click", () => {

    document.body.innerHTML = `

        <div style="
            height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:center;
            background:
            linear-gradient(
                135deg,
                #ffd6e7,
                #ffc2d9,
                #ffe4ec
            );
            font-family:Arial,sans-serif;
        ">

            <img
                src="gifs/happypanda.gif"
                style="
                    width:300px;
                    border-radius:20px;
                    box-shadow:0 5px 20px rgba(0,0,0,0.15);
                "
            >

            <h1>
                ❤️ YAYYYYY ❤️
            </h1>

            <h2>
                You just made this panda very happy 🐼💕
            </h2>

            <h3>
                The No Button Has Been Terminated.
            </h3>
            <p style="
    margin-top:30px;
    color:#666;
    font-size:14px;
">
    🐼 Crafted with ❤️ by Kripansh Pandey
</p>

<a href="https://github.com/kripanshpandey"
   target="_blank"
   style="color:#888;text-decoration:none;">
   GitHub
</a>

        </div>

    `;

});