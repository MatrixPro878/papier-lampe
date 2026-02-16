function licht_anmachen () {
    basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 10)
}
let abweichung = 0
let akktuell = 0
basic.turnRgbLedOff()
let grundwert = input.compassHeading()
let schnellwert = 50
basic.forever(function () {
    akktuell = input.compassHeading()
    abweichung = Math.abs(akktuell - grundwert)
    if (abweichung > 180) {
        abweichung = 360 - abweichung
    }
    if (abweichung > schnellwert) {
        licht_anmachen()
    } else {
        basic.turnRgbLedOff()
    }
})
