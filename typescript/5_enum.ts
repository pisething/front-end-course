enum Color{
    WHITE,
    RED, 
    YELLOW
}

let myColor:Color = Color.RED;
//console.log(myColor);

// enum Day{
//     MON=5,
//     TUE=20,
//     WED=35,
//     THU=12,
//     FRI=55,
//     SAT=56,
//     SUN=32
// }

enum Day{
    MON="Monday",
    TUE="Tue",
    WED="Wed",
    THU="Thu",
    FRI="Friday",
    SAT="Sat",
    SUN="Sunday"
}

console.log(Day.THU);


let dayNum:Day = Day.THU;

if(dayNum > Day.FRI){
    console.log("Holiday");
}else{
    console.log("Working day");
}

// let x =9;
// if(x > 5){
//     console.log("Holiday");
// }else{
//     console.log("Working day");
// }