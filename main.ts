input.onButtonPressed(Button.A, function () {
    if (vyhra == 1) {
        vyhra = 0
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (vyhra == 1) {
        vyhra = 0
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
input.onGesture(Gesture.Shake, function () {
    vyhra = 1
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
let vyhra = 0
vyhra = 1
