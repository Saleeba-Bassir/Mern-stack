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
        drinkSake(){
        this.health += 10 ;
        
        }
        addSpeed(){
            this.speed += 17;
        }
    }


class Sensei extends Ninja{
    constructor(name,health,speed,strength,wisdom){
        super(name,health,speed,strength)
        this.wisdom = 10;
        this.speed = 10;
        this.strength = 10;
        this.health = 200 ;
        this.name = name ;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months");
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

