const heroData = {name:"USS Assembly", hull:20, firepower:5, accuracy:0.7};

function randomInt(min=1,max=100){
    return Math.floor(Math.random() * (max-min+1))+min;
}

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
    
    // attack enemy spaceship
    attack(target){
        if(target instanceof Spaceship){
            console.log(`${this.#name} shoots at ${target.name}...`);
            
            const roll = randomInt()/100;
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

    getShipInfo(){
        const alive = this.isAlive()
        const status = alive?"Operational":"Destroyed";
        const hullPercent = this.#hp/this.#stats.hull * 100;
        const accPercent = this.#stats.accuracy * 100;
        

        let output = this.name;
        output += `\nStatus: ${status}`;
        output += `\nHull Integrity: ${hullPercent}%`;
        output += `\nWeapon Data:`;
        output += `\n\tFirepower: ${this.#stats.firepower} MW`;
        output += `\n\tAccuracy: ${accPercent}%`;

        return output;
    }
}

class Hero extends Spaceship{   
    constructor(){
        
    }
}

