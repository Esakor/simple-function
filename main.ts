input.onButtonPressed(Button.A, function () {
    Countdown()
})
function Countdown () {
    for (let index = 0; index <= 15; index++) {
        basic.showNumber(15 - index)
    }
}
basic.forever(function () {
	
})
