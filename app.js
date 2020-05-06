const buttonColours = ["pink", "blue", "yellow", "green"];

let gamePattern = [];
let userClickedPattern = [];

let gameStarted = false;
let level = 0;


$("body").on("keypress", x => {
    if (!gameStarted) {
        nextSequence();
        gameStarted = true;
    }
});

playSound = (name) => {
    let sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
    
}





$("button").click(clickedButton => {
    let userChosenColour = clickedButton.target.id;
    userClickedPattern.push(userChosenColour);
    
    playSound(userChosenColour);
    
    checkAnswer(userClickedPattern.length-1);
    
});




nextSequence = () => {
    userClickedPattern = [];

    level++;
    $("h1").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);

    console.log(gamePattern);

}




checkAnswer = (numberOfUserClicks) => {

    // 

    if (gamePattern[numberOfUserClicks] === userClickedPattern[numberOfUserClicks]) {
        console.log("successful so far... " + gamePattern + userClickedPattern);

        if (userClickedPattern.length === gamePattern.length) {
            console.log("Level up!");

            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong" + gamePattern[numberOfUserClicks] + userClickedPattern[numberOfUserClicks]);

    }

}




// Press any key to play - triggers h1 change to Level 1 and triggers first sequence
