class Car{
    private eng : Engine;
    private tires: Tires;

    // constructor(){
    //     this.eng = new Engine(3);
    //     this.tires = new Tires();

    // }

    constructor(e : Engine, t: Tires){
        this.eng = e;
        this.tires = t;

    }
}