input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.pause(5000)
    basic.showNumber(2)
    basic.pause(5000)
    basic.showNumber(1)
    basic.pause(5000)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    servos.P1.setAngle(180)
    basic.pause(300)
    servos.P1.setAngle(90)
    basic.pause(1000)
    servos.P2.setAngle(0)
    basic.pause(1000)
    servos.P2.setAngle(90)
    basic.pause(1000)
    servos.P1.setAngle(0)
    basic.pause(300)
    servos.P1.setAngle(90)
    basic.pause(500)
    servos.P2.setAngle(180)
    basic.pause(1000)
    servos.P2.setAngle(90)
    basic.pause(1600)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    servos.P1.setAngle(180)
    basic.pause(300)
    servos.P1.setAngle(90)
    basic.pause(1000)
    servos.P2.setAngle(0)
    basic.pause(1000)
    servos.P2.setAngle(90)
    basic.pause(1000)
    servos.P1.setAngle(0)
    basic.pause(300)
    servos.P1.setAngle(90)
    basic.pause(500)
    servos.P2.setAngle(180)
    basic.pause(1000)
    servos.P2.setAngle(90)
    basic.pause(1600)
})
