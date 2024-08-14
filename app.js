function randomInt(min=1,max=100){
    return Math.floor(Math.random() * (max-min+1)) + min;
}

class Spaceship{
    // attributes
    #name = "";
    #hp = 0;
    #stats = {hull:0, firepower:0, accuracy:0};

    constructor(name, hull=5, firepower=1, accuracy=0.5){
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
                console.log(`Hit! ${target.name} takes ${dmg} pts of hull damage!`);
                target.takeDamage(dmg);
            }
            else{
                console.log(`Miss! ${target.name} evaded the attack!`);
            }
        }
        
    }
    // take damage from an attack
    takeDamage(dmg){
        this.#hp -= dmg;
        if(this.#hp < 0){
            this.#hp = 0;
        }
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

    getInfo(){
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

const heroData = {name:"USS Assembly",hull:20, firepower:5,accuracy:0.7};
class Hero extends Spaceship{
    constructor(){
        super(heroData.name,heroData.hull,heroData.firepower,heroData.accuracy);
    }
}

const alienHp = {min:3,max:6};
const alienDmg = {min:2,max:4};
const alienAcc = {min:60,max:80};
class Alien extends Spaceship{
    constructor(name){
        super(name,
            randomInt(alienHp.min,alienHp.max),
            randomInt(alienDmg.min,alienDmg.max),
            randomInt(alienAcc.min,alienAcc.max)/100);
    }
}

const Result = {
    WIN: 1,
    LOSE: 2,
    CONTINUE: 3
}

function fight(hero, alien){
    hero.attack(alien);
    if(!alien.isAlive()){
        return Result.WIN;
    }

    alien.attack(hero);
    if(!hero.isAlive()){
        return Result.LOSE;
    }

    return Result.CONTINUE;
}

function announce(hero, alien){
    console.log(hero.getInfo());
    console.log('-'.repeat(6) + "VS." + `-`.repeat(6));
    console.log(alien.getInfo());
    console.log("FIGHT!\n\n");
}

function declareResult(result){
    if(result === Result.WIN){
        console.log("Victory!");
        return true;
    }
    else{
        console.log("Defeat...");
        return false;
    }
}

function logLine(){
    console.log("-".repeat(15));
}

function combatRound(hero, alien){
    
    announce(hero, alien);
    
    let result = Result.CONTINUE;
    while(result === Result.CONTINUE){
        result = fight(hero, alien);
        logLine();
    }

    declareResult(result);
   
}

const hero = new Hero();
const alien = new Alien("HR Geiger");

combatRound(hero, alien);

logLine();
console.log("Simulation Terminated.")