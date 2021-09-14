let buttoncolors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userclickedpattern = [];
let v = -1;
let level = 0;
function randd() {
    return Math.floor((Math.random() * 4));
}
$(document).on("keypress", function () {

    if (v == -1) {

        nextsequence();
        ++v;

    }

});
$(".btn").click(function () {

    let idd = $(this).attr("id");
    userclickedpattern.push(idd);
    playsound(idd);
    animatepress(idd);
    checkanswer(userclickedpattern.length - 1);

});
function checkanswer(currentLevel) {

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (gamePattern[currentLevel] === userclickedpattern[currentLevel]) {

        console.log("success");

        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userclickedpattern.length === gamePattern.length) {

            //5. Call nextSequence() after a 1000 millisecond delay.
            setTimeout(function () {
                nextsequence();
            }, 1000);

        }

    } else {

        console.log("wrong");
        playsound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 2000);
        $("h1").text("Game Over, Press Any Key to Restart");
        level = 0;
        gamePattern = [];
        v = -1;

    }

}
function animatepress(name) {
    $("#" + name).addClass("pressed");
    setTimeout(function () {
        $("#" + name).removeClass("pressed");
    }, 200);


}
function playsound(name) {

    let aud = new Audio('sounds/' + name + '.mp3');
    aud.play();




}
function nextsequence() {
    userclickedpattern = [];
    $("h1").text("Level " + level);
    ++level;
    let randomChosenColour = buttoncolors[randd()];
    gamePattern.push(randomChosenColour);
    playsound(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);



};