input.onButtonPressed(Button.A, function () {
    input.calibrateCompass()
})
led.setBrightness(105)
basic.forever(function () {
    if (input.compassHeading() < 45) {
        basic.showString("N")
    } else if (input.compassHeading() < 135) {
        basic.showString("E")
    } else if (input.compassHeading() < 225) {
        basic.showString("S")
    } else if (input.compassHeading() < 315) {
        basic.showString("W")
    } else {
        basic.showString("N")
    }
})
