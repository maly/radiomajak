radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    radio.receivedPacket(RadioPacketProperty.SignalStrength) + 128,
    100
    )
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(0)
    basic.pause(500)
})
