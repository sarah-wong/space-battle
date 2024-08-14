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
        
    }
    // take damage from an attack
    takeDamage(dmg){

    }
    get name(){
        return this.#name;
    }
    get currentHealth(){
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

