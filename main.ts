function Track_line () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.car_sport(60, 60)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.car_sport(0, 75)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.car_sport(75, 0)
    } else {
        Tinybit.car_sport(0, 0)
        basic.pause(200)
        if (data != "") {
            Deal_data()
        }
    }
}
function Deal_data () {
    if (data == "1") {
        sport_flag = 1
        basic.showString("R")
        basic.pause(300)
        sport_flag = 2
    } else if (data == "2") {
        basic.showString("G")
        Tinybit.car_sport(60, 60)
        basic.pause(500)
        sport_flag = 2
    } else if (data == "3") {
        basic.showIcon(IconNames.House)
        Tinybit.car_sport(60, 60)
        basic.pause(500)
        sport_flag = 3
    } else if (data == "4") {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            `)
        Tinybit.car_sport(60, 60)
        basic.pause(500)
        sport_flag = 4
    } else if (data == "5") {
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        sport_flag = 5
    } else if (data == "6") {
        basic.showArrow(ArrowNames.West)
        Tinybit.car_sport(60, 60)
        basic.pause(500)
        sport_flag = 6
    } else if (data == "7") {
        basic.showIcon(IconNames.No)
        basic.pause(200)
        sport_flag = 7
    } else if (data == "8") {
        basic.showIcon(IconNames.Square)
        Tinybit.car_sport(60, 60)
        basic.pause(300)
        sport_flag = 8
    } else if (data == "9") {
        basic.showArrow(ArrowNames.East)
        Tinybit.car_sport(60, 60)
        basic.pause(500)
        sport_flag = 9
    } else if (data == "10") {
        basic.showIcon(IconNames.SmallSquare)
        Tinybit.car_sport(60, 60)
        basic.pause(400)
        sport_flag = 10
    } else if (data == "11") {
        basic.showIcon(IconNames.EighthNote)
        Tinybit.car_sport(60, 60)
        beep_flag = 1
        basic.pause(200)
        sport_flag = 10
    }
}
function Car_outbound_track () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.car_sport(60, 60)
        if (chuku_flag == 1) {
            chuku_flag = 2
        }
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.car_sport(0, 70)
        if (chuku_flag == 1) {
            chuku_flag = 2
        }
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.car_sport(70, 0)
        if (chuku_flag == 1) {
            chuku_flag = 2
        }
    } else {
        Tinybit.car_sport(60, 60)
        basic.pause(350)
        chuku_flag = 1
    }
    if (chuku_flag == 2) {
        chuku_flag = 0
        sport_flag = 2
    }
}
function Road_sign_speedlimit () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.car_sport(60, 60)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.car_sport(0, 70)
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.car_sport(70, 0)
    } else {
        Tinybit.car_sport(0, 0)
        if (data != "") {
            Deal_data()
        }
    }
}
function Road_sign_right () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.car_sport(60, 60)
        if (left_right_flag == 1) {
            left_right_flag = 0
            left_right_num += 1
        }
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.car_sport(0, 70)
        if (left_right_flag == 1) {
            left_right_flag = 0
            left_right_num += 1
        }
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.car_sport(70, 0)
        if (left_right_flag == 1) {
            left_right_flag = 0
            left_right_num += 1
        }
    } else {
        Tinybit.car_sport(75, 0)
        basic.pause(900)
        left_right_flag = 1
    }
    if (left_right_num == 2) {
        left_right_num = 0
        sport_flag = 2
    }
}
function Whistle () {
    music.ringTone(880)
    basic.pause(300)
    music.stopAllSounds()
    basic.pause(200)
    music.ringTone(880)
    basic.pause(600)
    music.stopAllSounds()
}
function Reverse_parking_no2 () {
    Tinybit.car_sport(-60, -60)
    basic.pause(1200)
    Tinybit.car_sport(-60, 0)
    basic.pause(1700)
    Tinybit.car_sport(-60, -60)
    basic.pause(1300)
    Tinybit.car_sport(0, 0)
    Car_outbound()
}
function Reverse_parking_no1 () {
    Tinybit.car_sport(-65, -65)
    basic.pause(200)
    Tinybit.car_sport(-60, 50)
    basic.pause(700)
    Tinybit.car_sport(-60, -60)
    basic.pause(1500)
    Tinybit.car_sport(0, 0)
    Car_outbound()
}
function Road_sign_left () {
    if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.car_sport(60, 60)
        if (left_right_flag == 1) {
            left_right_flag = 0
            left_right_num += 1
        }
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.Black) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.White)) {
        Tinybit.car_sport(0, 70)
        if (left_right_flag == 1) {
            left_right_flag = 0
            left_right_num += 1
        }
    } else if (Tinybit.Line_Sensor(Tinybit.enPos.LeftState, Tinybit.enLineState.White) && Tinybit.Line_Sensor(Tinybit.enPos.RightState, Tinybit.enLineState.Black)) {
        Tinybit.car_sport(70, 0)
        if (left_right_flag == 1) {
            left_right_flag = 0
            left_right_num += 1
        }
    } else {
        Tinybit.car_sport(0, 75)
        basic.pause(900)
        left_right_flag = 1
    }
    if (left_right_num == 2) {
        left_right_num = 0
        sport_flag = 2
    }
}
function Car_outbound () {
    basic.pause(2000)
    Tinybit.car_sport(60, 60)
    basic.pause(1500)
    Tinybit.car_sport(60, -50)
    basic.pause(750)
    sport_flag = 12
}
let data = ""
let chuku_flag = 0
let beep_flag = 0
let left_right_flag = 0
let left_right_num = 0
let sport_flag = 0
basic.showString("M")
k210_models.initialization()
sport_flag = 2
left_right_num = 0
left_right_flag = 0
beep_flag = 0
chuku_flag = 0
basic.pause(5000)
basic.forever(function () {
    data = k210_models.object_detect()
})
basic.forever(function () {
    if (sport_flag < 10) {
        basic.showNumber(sport_flag)
    } else {
        basic.showIcon(IconNames.Confused)
    }
})
basic.forever(function () {
    if (beep_flag) {
        beep_flag = 0
        Whistle()
    }
    if (sport_flag == 3) {
        basic.pause(2000)
        sport_flag = 2
    } else if (sport_flag == 4) {
        basic.pause(2000)
        sport_flag = 2
    }
})
basic.forever(function () {
    if (sport_flag == 1) {
        Tinybit.car_sport(0, 0)
    } else if (sport_flag == 2) {
        Track_line()
    } else if (sport_flag == 3) {
        Road_sign_speedlimit()
    } else if (sport_flag == 4) {
        Road_sign_speedlimit()
    } else if (sport_flag == 5) {
        Reverse_parking_no1()
    } else if (sport_flag == 6) {
        Road_sign_right()
    } else if (sport_flag == 7) {
        Reverse_parking_no2()
    } else if (sport_flag == 8) {
        sport_flag = 2
    } else if (sport_flag == 9) {
        Road_sign_left()
    } else if (sport_flag == 10) {
        Road_sign_speedlimit()
    } else if (sport_flag == 11) {
        sport_flag = 2
    } else if (sport_flag == 12) {
        Car_outbound_track()
    }
})
