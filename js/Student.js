class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    info(){
        return "This is my student";
    }

    setAge(a){
        if(a> 18){
            this.age = a;
        }
    }
}