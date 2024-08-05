export class Car {
    #brand;
    #model;
    speed = 0;
    isTrunkOpen = false;

    constructor(carDetails){
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
    }

    displayInfo(){

        const TrunkStatus = this.isTrunkOpen ? 'open' : 'close'
        console.log(`${this.#brand} ${this.#model} ${this.speed} Km/h trunk :${TrunkStatus}`)
    };

    go(){
        this.speed += 10;

        if(!this.isTrunkOpen){
            this.speed += 10;
        }

        if(this.speed > 200){
            this.speed = 200;
        };
    };

    brake(){
        this.speed -= 10;

        if(this.speed < 0){
            this.speed = 0;
        };
    };

    openTrunk(){
        if(this.speed === 0){
            this.isTrunkOpen = true;
        };
    };

    closeTrunk(){
        this.isTrunkOpen = false;
    };
};


const car1 = new Car({
    brand : 'Toyota',
    model : 'Land crusie'
});



const car2 = new Car({
    brand : 'Tesla',
    model : 'Model 3'
});


console.log(car1.displayInfo());
car1.openTrunk();
car1.go();
car1.go();
car1.go();
car1.brake();
console.log(car1.displayInfo());


console.log(car2.displayInfo());
car2.openTrunk();
car2.go();
car2.go();
car2.brake();
car2.brake();
console.log(car2.displayInfo());




class RaceCar extends Car {

    acceleration;

    constructor(carDetails){
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go(){
        this.speed += this.acceleration;

        if(this.speed > 300){
            this.speed = 300;
        }
    }

    openTrunk(){
        console.log('');
    };

    closeTrunk(){
        console.log('');
    };
};


const car3 = new RaceCar({
    brand : 'mclaren',
    model : 'F1',
    acceleration : 20
});



car3.go();
car3.go();
car3.go();
car3.brake();
car3.openTrunk();
car3.displayInfo();

