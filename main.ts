enum RadioMessage {
    message1 = 49434,
    message2 = 1435
}
input.onButtonPressed(Button.A, function () {
    radio.sendMessage(RadioMessage.message1)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    radio.sendMessage(RadioMessage.message2)
    basic.showIcon(IconNames.Skull)
    basic.pause(500)
    basic.showIcon(IconNames.Square)
})
radio.onReceivedMessage(RadioMessage.message2, function () {
    basic.showIcon(IconNames.Skull)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showIcon(IconNames.Heart)
})
radio.setGroup(1)
basic.forever(function () {
	
})
