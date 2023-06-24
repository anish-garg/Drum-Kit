let NoOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < NoOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonSound = this.innerHTML;
        makeSound(buttonSound);
        buttonAnimation(buttonSound);

    });

}

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(Key) {

    switch (Key) {

        case "W":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "A":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "S":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "D":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "J":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "K":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "L":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log("Wrong Key")
            break;
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("#" + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);

}