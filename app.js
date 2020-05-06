const buttonColours = ["pink", "blue", "yellow", "green"];

let gamePattern = [];
let userClickedPattern = [];

nextSequence = () => {
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    let sound = new Audio("sounds/" + randomChosenColour + ".mp3");
    sound.play()
}



// $("button.squarePink").click(nextSequence());

// $("button").click(x => {
//     let userChosenColour = x.id;
//     $("#myAudioElement")[0].play();
// });