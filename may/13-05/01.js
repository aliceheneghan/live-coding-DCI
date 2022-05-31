/**
 * The Cat
 * 
 * Create a virtual cat
 * Write a class that represents a cat. It should have properties for 
 * tiredness, hunger, lonliness and happiness
 * 
 * Next, write methods that increase and decrease those properties. 
 * 
 * Call them something that actually represents what would increase or decrease these things,
 * like "feed", "sleep", or "pet".
 * 
 * Last, write a method that prints out the cat's status in each area. 
 * (Be creative e.g. Paws is really hungry, Paws is VERY happy.)
 * 
 * Bonus: Make the functions take arguments that increase or decrease arbitrary amounts
 * Bonus: Make the functions as arbitrary as cats are - 
 * sometimes make it so the cat doesn't want to be petted.
 */

let tiredness = 20

class Cat  {

    tiredness = 1; // it's not used

    constructor(name, hunger) {
        this.tiredness = 50;
        this.hunger = hunger
        this.lonliness = 50 
        this.happiness = 50;
        this.name = name;
        console.log(this)
    }

    feed(food) {
        
        if (this.hunger === 0) {
            console.log('I"done eating today, thanks but no thank you!')
            return
        }

        if (food === 'fish') {
            this.hunger = 0;
            this.happiness += 10 
            console.log('Bruno says: Yummeee!!')
            console.log('happiness is', this.happiness)
        } else {

        }

        console.log(this.name, 'hunger is', this.hunger)
    }

    sleep() {

        // const tiredness = 10
        // if (this.tiredness)

        console.log('sleep:', tiredness)
    }
}

const bruno = new Cat("Bruno", 30)

bruno.feed()
bruno.feed('fish')
bruno.feed('fish')
bruno.sleep()