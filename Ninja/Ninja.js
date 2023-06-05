class Ninja {
    constructor (name,health,speed,strength){
        this.name = name;
        this.health = 0;
        this.speed= 3;
        this.strength = 3;
    }

        sayName() {
            console.log(`The ninja name is: ${this.name}`);
        }
        showStats(){
            console.log(`The ninja name is: ${this.name},and the health is: ${this.health} and the speed is :${this.speed},the strenght is: ${this.strength} `);
        }
        DrinkSake(){
        this.health += 10 ;
        
        }
        AddSpeed(){
            this.speed += 17;
        }

    }
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.DrinkSake();
ninja1.showStats();

const Shadid = new Ninja("shadid")
Shadid.sayName();
Shadid.showStats();
Shadid.DrinkSake();
Shadid.DrinkSake();
Shadid.DrinkSake();
Shadid.DrinkSake();
Shadid.DrinkSake();
Shadid.showStats();
Shadid.AddSpeed();
Shadid.showStats();