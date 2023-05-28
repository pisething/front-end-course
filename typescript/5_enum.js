var Color;
(function (Color) {
    Color[Color["WHITE"] = 0] = "WHITE";
    Color[Color["RED"] = 1] = "RED";
    Color[Color["YELLOW"] = 2] = "YELLOW";
})(Color || (Color = {}));
var myColor = Color.RED;
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
var Day;
(function (Day) {
    Day["MON"] = "Monday";
    Day["TUE"] = "Tue";
    Day["WED"] = "Wed";
    Day["THU"] = "Thu";
    Day["FRI"] = "Friday";
    Day["SAT"] = "Sat";
    Day["SUN"] = "Sunday";
})(Day || (Day = {}));
console.log(Day.THU);
var dayNum = Day.THU;
if (dayNum > Day.FRI) {
    console.log("Holiday");
}
else {
    console.log("Working day");
}
// let x =9;
// if(x > 5){
//     console.log("Holiday");
// }else{
//     console.log("Working day");
// }
