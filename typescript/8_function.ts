function test(): number{
    return 56.4;
}

let limit = test();
//console.log(limit);
//------------- void 

function displayInfo(): void{
    let d = new Date();
    console.log(d);
}

//displayInfo();

//---------------------
function sum(a: number, b: number){
    return a +b;
}

let total = sum(2,3);
//let total2 = sum("2",3);
//console.log(total);

function info(a: number, message?: string){
    console.log(a);
    if(message != undefined){
        console.log(message);
    }
}

//info(20);
//info(45,"Test");
//----------- default value 
function sum2(a: number, b:number, c:number = 10){
    return a + b + c;
}

let y = sum2(2,3);
let y2 = sum2(2,3,6);

console.log(y);
console.log(y2);
// named parameters

function getArea({width,height}: {width:number, height:number}){
    return width * height;
}

let area = getArea({width:20, height:30});
console.log(area);

