class Vehicle{
   constructor(make,model,year){
       this.make = make;
       this.model=model;
       this.year=year;
   }
   information(){
       console.log(`make:${this.make}, Model: ${this.model},Year : ${this.year}`)
   }
}


class Cars extends Vehicle {
    constructor(make,model,year,doors){
        super(make,model,year);
        this.doors=doors;
    }
    information(){
        super.information();
        console.log(`Doors:${this.doors}`);
    }
}
let myCar = new Cars('vw','Gold', 2011,5);
myCar.information();