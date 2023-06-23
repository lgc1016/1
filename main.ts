function 모션3 () {
    music.play(music.stringPlayable("G F G A - F E D ", 120), music.PlaybackMode.LoopingInBackground)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    basic.pause(5000)
    maqueen.motorStop(maqueen.Motors.All)
    music.stopAllSounds()
}
function 모션1 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    basic.pause(3000)
    maqueen.motorStop(maqueen.Motors.All)
    for (let index = 0; index < 4; index++) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        basic.pause(50)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(50)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        basic.pause(50)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.M1)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.M2)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    basic.pause(1100)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    basic.pause(3000)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 50)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    basic.pause(900)
    maqueen.motorStop(maqueen.Motors.All)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        모션1()
        radio.sendString("B")
    } else if (receivedString == "C") {
        basic.showIcon(IconNames.Heart)
        모션2()
        radio.sendString("D")
    } else if (receivedString == "E") {
        모션3()
    }
})
function 모션2 () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    for (let index = 0; index < 3; index++) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        basic.pause(200)
        maqueen.motorStop(maqueen.Motors.All)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
        basic.pause(200)
        maqueen.motorStop(maqueen.Motors.All)
    }
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    basic.pause(1000)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
}
radio.setGroup(5)
basic.showNumber(1)
