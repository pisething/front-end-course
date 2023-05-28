let student: {id: number, name:string, gender?:string};
student = {id:1, name: "Dara", gender: "Male"};
student.name = "Socheata";
//console.log(student.name);
/*
let st1 = {name: "Dara", age: 20};
st1.name = "dfs";
console.log(st1);
*/

student = {id:1, name: "Dara"};

let ob : {[index:string]: string} = {};
ob.name = "Dara";
ob.gender = "Male";
console.log(ob);


