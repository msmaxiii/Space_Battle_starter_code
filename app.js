 // Start the game
// Attack the Enemy
// Attack USS
// Battle
// Retreat
// Stats for each ship


let person = prompt("Please enter your name", "");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! How are you today?";
}

class SpaceShip {
    constructor(name,firepower,accuracy,stats) {
    this._hull = hull;
    this._firepower = firepower;
    this._accuracy = accuracy;
    this._stats = stats;
    }
   
}
showStats()
    document.getElementById(this.nameId).innerHTML = `${this.name}`;
    document.getElementById(this.statsId).innerHTML = `Hull : ${this.hull}:<br>FirePower : ${this.firepower}<br>Accuracy : ${this.accuracy}`;

// create two space ships that are objects and method
class USS_Schwarzenegger extends SpaceShip{
constructor (name,) {
    super (name)
    this._playerID
hull: 20,
firepower =5,
accuracy = .7,
 isAlive = true,
   attack(target) 
        const ranNum = Math.random();
        console.log(`Accuracy threshold is ${ranNum}`);

        if (ranNum < this.accuracy) {
            console.log(`It's a hit`);
            target.hull = target.hull - this.firepower;
            console.log(`enemy has ${target.hull} hull points left.`);

            if (target.hull <= 0) {
                target.isAlive = false;
                console.log(`Alien ship is destroyed `)
    }
} else {
    console.log(`You Missed!`);
}
   
// Enemy ship following properties
// hull: between 3 and 6
// firepower: between 2 and 4
// accuracy: between .6 and .8
   }
}
     
class Enemy extends SpaceShip{
   super (name){
   this._emenystatID
         random_enemy()
         hull = Math.floor(Math.random() * 3) +6,
         firepower = Math.floor(Math.random() * 2) +4,
         accuracy = Math.floor(Math.round((0.8-0.6) * Math.random()*10 /10),
         isPresent = false,
   } 

         attack(target)
            let ranNum = Math.random();

                 console.log(`Accuracy threshold is ${ranNum}`);
         
            if (ranNum < this.accuracy) {
                console.log(`It's a hit`);

                target.hull = target.hull - this.firepower;}
                console.log(`USS has ${target.hull} hull points left.`);
            
                if (target.hull <= 0) {
                    target.isPresent = false;
                    console.log(`USS ship is destroyed `)         
                    }
                
                
                   
        //  Attack the player
    
     attack(player);
        if (Math.random() < this.accuracy){
            // calculate  damage
            const damage = Math.round(Math.min(this.firepower,) * Math.random());
            // decrease player's hull
            player.hull -= (this.firepower - damage);
                    
            // player.showStats();
            Attack.log(`${this.name} hit ${player.name} [${this.firepower}],`);
        } else {
            Attack.log(`${this.name} missed`);
        }
        return player.hull;
    
    
    //   Generate random number of ships to attack Earth
    
     moreShips(min, max);
        const numAlienShips = min + Math.round((max - min) * Math.random());
        const moreShips = [];
        for (let i = 0; i < numAlienShips; i++) {
            moreShips.push(new Alien(`Alien${i + 1}`))
        
        return moreShips;
    }
    class Battle {
        constructor(player, enemies) {
            this.player = player;
            this.enemies = enemies;
            this.round = 0;
            this.status = 'inProgress';
        }
    }window.addEventListener('load', startNewGame)

