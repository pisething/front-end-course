type Piseth = string;

let n:Piseth="data";
console.log(n);

//----------------
interface Rectangle{
    width: number,
    height: number
}

let rec1: Rectangle = {width: 20, height:40};
console.log(rec1);
//----- entend interface

interface Rec2 extends Rectangle{
    color: string
}

let rec:Rec2 = {
    width: 20, height:40,color:"red"
};