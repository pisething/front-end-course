function test() {
    return 56.4;
}
var limit = test();
//console.log(limit);
//------------- void 
function displayInfo() {
    var d = new Date();
    console.log(d);
}
//displayInfo();
//---------------------
function sum(a, b) {
    return a + b;
}
var total = sum(2, 3);
//let total2 = sum("2",3);
//console.log(total);
function info(a, message) {
    console.log(a);
    if (message != undefined) {
        console.log(message);
    }
}
//info(20);
//info(45,"Test");
//----------- default value 
function sum2(a, b, c) {
    if (c === void 0) { c = 10; }
    return a + b + c;
}
var y = sum2(2, 3);
var y2 = sum2(2, 3, 6);
console.log(y);
console.log(y2);
// named parameters
function getArea(_a) {
    var width = _a.width, height = _a.height;
    return width * height;
}
var area = getArea({ width: 20, height: 30 });
console.log(area);
