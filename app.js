class Spaceship{
    // attributes
    #id = 0;
    #name = "";
    #hp = 0;
    #stats = {hull, firepower, accuracy};

    constructor(id, name, hull, firepower, accuracy){
        this.#id = id;
        this.#name = name;
        this.#hp = hull;

        this.#stats.hull = hull;
        this.#stats.firepower = firepower;
        this.#stats.accuracy = accuracy;
    }

    // attack method
    attack(target){
        
    }
    // take damage method
    takeDamage(dmg){

    }

}

