input.onPinPressed(TouchPin.P0, function () {
    radio.setGroup(100)
    basic.showString("c1")
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    Letter = Letter + 1
    if (Letter == 1) {
        basic.showString("A")
    } else if (Letter == 2) {
        basic.showString("B")
    } else if (Letter == 3) {
        basic.showString("C")
    } else if (Letter == 4) {
        basic.showString("D")
    } else if (Letter == 5) {
        basic.showString("E")
    } else if (Letter == 6) {
        basic.showString("F")
    } else if (Letter == 7) {
        basic.showString("G")
    } else if (Letter == 8) {
        basic.showString("H")
    } else if (Letter == 9) {
        basic.showString("I")
    } else if (Letter == 10) {
        basic.showString("J")
    } else if (Letter == 11) {
        basic.showString("K")
    } else if (Letter == 12) {
        basic.showString("L")
    } else if (Letter == 13) {
        basic.showString("M")
    } else if (Letter == 14) {
        basic.showString("N")
    } else if (Letter == 15) {
        basic.showString("O")
    } else if (Letter == 16) {
        basic.showString("P")
    } else if (Letter == 17) {
        basic.showString("Q")
    } else if (Letter == 18) {
        basic.showString("R")
    } else if (Letter == 19) {
        basic.showString("S")
    } else if (Letter == 20) {
        basic.showString("T")
    } else if (Letter == 21) {
        basic.showString("U")
    } else if (Letter == 22) {
        basic.showString("V")
    } else if (Letter == 23) {
        basic.showString("W")
    } else if (Letter == 24) {
        basic.showString("X")
    } else if (Letter == 25) {
        basic.showString("Y")
    } else if (Letter == 26) {
        basic.showString("Z")
    } else if (Letter == 27) {
        basic.showNumber(1)
    } else if (Letter == 28) {
        basic.showNumber(2)
    } else if (Letter == 29) {
        basic.showNumber(3)
    } else if (Letter == 30) {
        basic.showNumber(4)
    } else if (Letter == 31) {
        basic.showNumber(5)
    } else if (Letter == 32) {
        basic.showNumber(6)
    } else if (Letter == 33) {
        basic.showNumber(7)
    } else if (Letter == 34) {
        basic.showNumber(8)
    } else if (Letter == 35) {
        basic.showNumber(9)
    } else if (Letter == 36) {
        basic.showNumber(0)
    } else if (Letter == 37) {
        basic.showString("_")
    }
})
input.onPinPressed(TouchPin.P2, function () {
    radio.setGroup(102)
    basic.showString("c3")
})
input.onButtonPressed(Button.AB, function () {
    if (Letter == 1) {
        radio.sendString("A")
    } else if (Letter == 2) {
        radio.sendString("B")
    } else if (Letter == 3) {
        radio.sendString("C")
    } else if (Letter == 4) {
        radio.sendString("D")
    } else if (Letter == 5) {
        radio.sendString("E")
    } else if (Letter == 6) {
        radio.sendString("F")
    } else if (Letter == 7) {
        radio.sendString("G")
    } else if (Letter == 8) {
        radio.sendString("H")
    } else if (Letter == 9) {
        radio.sendString("I")
    } else if (Letter == 10) {
        radio.sendString("J")
    } else if (Letter == 11) {
        radio.sendString("K")
    } else if (Letter == 12) {
        radio.sendString("L")
    } else if (Letter == 13) {
        radio.sendString("M")
    } else if (Letter == 14) {
        radio.sendString("N")
    } else if (Letter == 15) {
        radio.sendString("O")
    } else if (Letter == 16) {
        radio.sendString("P")
    } else if (Letter == 17) {
        radio.sendString("Q")
    } else if (Letter == 18) {
        radio.sendString("R")
    } else if (Letter == 19) {
        radio.sendString("S")
    } else if (Letter == 20) {
        radio.sendString("T")
    } else if (Letter == 21) {
        radio.sendString("U")
    } else if (Letter == 22) {
        radio.sendString("V")
    } else if (Letter == 23) {
        radio.sendString("W")
    } else if (Letter == 24) {
        radio.sendString("X")
    } else if (Letter == 25) {
        radio.sendString("Y")
    } else if (Letter == 26) {
        radio.sendString("Z")
    } else if (Letter == 27) {
        radio.sendNumber(1)
    } else if (Letter == 28) {
        radio.sendNumber(2)
    } else if (Letter == 29) {
        radio.sendNumber(3)
    } else if (Letter == 30) {
        radio.sendNumber(4)
    } else if (Letter == 31) {
        radio.sendNumber(5)
    } else if (Letter == 32) {
        radio.sendNumber(6)
    } else if (Letter == 33) {
        radio.sendNumber(6)
    } else if (Letter == 34) {
        radio.sendNumber(7)
    } else if (Letter == 35) {
        radio.sendNumber(8)
    } else if (Letter == 36) {
        radio.sendNumber(9)
    } else if (Letter == 37) {
        radio.sendNumber(0)
    } else if (Letter == 38) {
        radio.sendString("_")
    }
    basic.showString("Sent")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Letter = Letter + 5
    if (Letter == 1) {
        basic.showString("A")
    } else if (Letter == 2) {
        basic.showString("B")
    } else if (Letter == 3) {
        basic.showString("C")
    } else if (Letter == 4) {
        basic.showString("D")
    } else if (Letter == 5) {
        basic.showString("E")
    } else if (Letter == 6) {
        basic.showString("F")
    } else if (Letter == 7) {
        basic.showString("G")
    } else if (Letter == 8) {
        basic.showString("H")
    } else if (Letter == 9) {
        basic.showString("I")
    } else if (Letter == 10) {
        basic.showString("J")
    } else if (Letter == 11) {
        basic.showString("K")
    } else if (Letter == 12) {
        basic.showString("L")
    } else if (Letter == 13) {
        basic.showString("M")
    } else if (Letter == 14) {
        basic.showString("N")
    } else if (Letter == 15) {
        basic.showString("O")
    } else if (Letter == 16) {
        basic.showString("P")
    } else if (Letter == 17) {
        basic.showString("Q")
    } else if (Letter == 18) {
        basic.showString("R")
    } else if (Letter == 19) {
        basic.showString("S")
    } else if (Letter == 20) {
        basic.showString("T")
    } else if (Letter == 21) {
        basic.showString("U")
    } else if (Letter == 22) {
        basic.showString("V")
    } else if (Letter == 23) {
        basic.showString("W")
    } else if (Letter == 24) {
        basic.showString("X")
    } else if (Letter == 25) {
        basic.showString("Y")
    } else if (Letter == 26) {
        basic.showString("Z")
    } else if (Letter == 27) {
        basic.showNumber(1)
    } else if (Letter == 28) {
        basic.showNumber(2)
    } else if (Letter == 29) {
        basic.showNumber(3)
    } else if (Letter == 30) {
        basic.showNumber(4)
    } else if (Letter == 31) {
        basic.showNumber(5)
    } else if (Letter == 32) {
        basic.showNumber(6)
    } else if (Letter == 33) {
        basic.showNumber(7)
    } else if (Letter == 34) {
        basic.showNumber(8)
    } else if (Letter == 35) {
        basic.showNumber(9)
    } else if (Letter == 36) {
        basic.showNumber(10)
    } else if (Letter == 37) {
        basic.showString("_")
    }
})
input.onPinPressed(TouchPin.P1, function () {
    radio.setGroup(101)
    basic.showString("c2")
})
let Letter = 0
radio.setGroup(100)
