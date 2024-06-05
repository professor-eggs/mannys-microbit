input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("G B A G C5 B A B ", 300), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Emmanuel")
})
input.onButtonPressed(Button.B, function () {
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Yes)
        basic.pause(100)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(100)
    }
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.spring), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
