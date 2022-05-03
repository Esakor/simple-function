input.onButtonPressed(Button.A, function () {
    number += -1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    Countdown()
})
input.onButtonPressed(Button.B, function () {
    number += 2
    basic.showNumber(number)
})
function Countdown () {
    for (let index = 0; index <= number; index++) {
        basic.showNumber(number - index)
    }
}
let number = 0
number = 0
basic.forever(function () {
	
})
