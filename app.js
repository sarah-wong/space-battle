class Spaceship{
    // attributes
    #name = "";
    #hp = 0;
    #stats = {hull, firepower, accuracy};

    constructor(name, hull, firepower, accuracy){
        this.#name = name;
        this.#hp = hull;

        this.#stats.hull = hull;
        this.#stats.firepower = firepower;
        this.#stats.accuracy = accuracy;
    }

    // attack enemy spaceship
    attack(target){
        if(target instanceof Spaceship){
            console.log(`${this.#name} shoots at ${target.name}...`);
            
            const roll = Math.random();
            if(roll <= this.#stats.accuracy){
                const dmg = this.#stats.firepower;
                target.takeDamage(dmg);
                console.log(`Hit! ${target.name} takes ${dmg} pts. of damage!`);
            }
            else{
                console.log(`Miss! ${target.name} evaded the attack`);
            }
        }
        
    }
    // take damage from an attack
    takeDamage(dmg){
        this.#hp -= Math.max(this.#hp, dmg);
        console.log(`${this.#name}'s hull integrity at ${this.#hp}/${this.#stats.hull}`);
    }
    // is the ship alive?
    isAlive(){
        if(this.#hp <= 0){
            console.log(`${this.#name} was destroyed!`);
            return false;
        }
        else{
            return true;
        }
    }

    get name(){
        return this.#name;
    }
    get health(){
        return this.#hp;
    }
    get maxHealth(){
        return this.#stats.hull;
    }
    get firepower(){
        return this.#stats.firepower;
    }
    get accuracy(){
        return this.#stats.accuracy;
    }
}

