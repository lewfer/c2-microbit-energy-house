function switchDevice (index: number, onoff: number) {
    if (index == 0) {
    	
    } else if (index == 1) {
    	
    } else if (index == 2) {
    	
    } else if (index == 3) {
    	
    } else if (index == 4) {
    	
    }
}
let deviceOn = 0
let device = ""
let splitMessage: string[] = []
let message = ""
basic.showIcon(IconNames.No)
serial.setBaudRate(BaudRate.BaudRate9600)
basic.forever(function () {
    message = serial.readLine()
    splitMessage = message.split("=")
    device = splitMessage[0]
    deviceOn = parseFloat(splitMessage[1])
    basic.showString("" + (randint(0, 9)))
    if (device == "light") {
        pins.digitalWritePin(DigitalPin.P0, deviceOn)
    } else if (device == "toaster") {
        pins.digitalWritePin(DigitalPin.P1, deviceOn)
    } else if (device == "car") {
        pins.digitalWritePin(DigitalPin.P2, deviceOn)
    } else if (device == "tv") {
        pins.digitalWritePin(DigitalPin.P13, deviceOn)
    } else if (device == "dishwasher") {
        pins.digitalWritePin(DigitalPin.P14, deviceOn)
    }
})
