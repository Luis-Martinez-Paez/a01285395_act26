let height = 0
let short_counter = 0
let sum_height = 0
let medium_counter = 0
let tall_counter = 0
let dice = 0
let counter_green = 0
let counter_blue = 0
let counter_red = 0
let random_number = 0
let even_counter = 0
let odd_counter = 0
let angle = 0
let obstuse_counter = 0
let x = 0
let y = 0
input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 30; index++) {
        height = randint(100, 200)
        if (height <= 150) {
            basic.showNumber(height)
            basic.showString("Short person")
            short_counter += 1
            sum_height += height
        } else if (height > 151 && height >= 170) {
            basic.showNumber(height)
            basic.showString("Medium Height")
            medium_counter += 1
            sum_height += height
        } else {
            basic.showNumber(height)
            basic.showString("Tall person")
            tall_counter += 1
            sum_height += height
        }
    }
    basic.showString("Short person Total:")
    basic.showNumber(short_counter)
    basic.showString("Medium height Total:")
    basic.showNumber(medium_counter)
    basic.showString("Tall person Total:")
    basic.showNumber(tall_counter)
    basic.showString("Average Height:")
    basic.showNumber(sum_height / 30)
})
input.onButtonPressed(Button.A, function () {
    dice = randint(0, 6)
    if (dice == 1 || dice == 3) {
        basic.showString("Team Green")
        counter_green += 1
    } else if (dice == 2 || dice == 5) {
        basic.showString("Team Blue")
        counter_blue += 1
    } else {
        basic.showString("Team Red")
        counter_red += 1
    }
    basic.showString("Team Green Total: ")
    basic.showNumber(counter_green)
    basic.showString("Team Blue Total: ")
    basic.showNumber(counter_blue)
    basic.showString("Team Red Total: ")
    basic.showNumber(counter_red)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        random_number = randint(0, 100)
        basic.showNumber(random_number)
        if (random_number % 2 == 0) {
            basic.showString("Even")
            even_counter += 1
        } else {
            basic.showString("Odd")
            odd_counter += 1
        }
    }
    basic.showString("Total Even:")
    basic.showNumber(even_counter)
    basic.showString("Total Odd:")
    basic.showNumber(odd_counter)
})
input.onPinPressed(TouchPin.P1, function () {
    for (let angle_counter = 0; angle_counter <= 10; angle_counter++) {
        angle = randint(0, 180)
        if (angle < 90) {
            basic.showNumber(angle)
            basic.showString(" Acute")
        } else if (angle == 90) {
            basic.showNumber(angle)
            basic.showString(" Straight")
        } else {
            basic.showNumber(angle)
            basic.showString(" Obstuse")
            obstuse_counter += 1
        }
    }
    basic.showNumber(obstuse_counter)
    basic.showString(" Obstuse Angles")
})
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P2)) {
        x = randint(0, 4)
        y = randint(0, 4)
        led.plot(x, y)
        basic.pause(300)
        if (x == y) {
            music.playMelody("A B F D A B F A ", 120)
        } else {
            music.playTone(262, music.beat(BeatFraction.Whole))
        }
        led.unplot(x, y)
    }
})
