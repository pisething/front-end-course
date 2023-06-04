class Student{
     //name: string;

     public constructor(private name: string){
        this.name =name;
     }

    setName(n : string){
        this.name = n;
    }
}

let st = new Student("Thida");
//st.name = "Dara";
st.setName("Dara");
console.log(st);

interface Shape {
    getArea: () => number; 
}

class Rectangle implements Shape{

    getArea(){
        return 2;
    }

}

