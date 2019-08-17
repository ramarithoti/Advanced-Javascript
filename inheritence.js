/*
Implementing Inheritance before ES6 classes
*/

function Animal(name,energy){
    this.name = name;
    this.energy = energy;
}
Animal.prototype ={
    getName:function(){
        return this.name;
    },
    getEnergy:function(){
        return this.energy;
    },
    eat:function(foodType){
        const type = foodType.toLowerCase();
        if(type ==='veg'){
            this.energy+=1;
        }else if(type === 'non veg'){
            this.energy+=2;
        }else{
            this.energy +=0;
        }
        console.log(`${this.name} is eating now...`);
    },
    work:function(){
        if(this.energy<=0){
            console.log(`I can't work now,because My energy is low.Eat something to work`)
        }else{
            console.log(`${this.name} is working...`)
            this.energy-=1;
        }
    }
}
function Dog(name,energy,breed){
    Animal.call(this,name,energy);
    this.breed = breed;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.callMe = function(){
    console.log(`I am a ${this.breed} animal`);
}
const dog = new Dog('Snoopy',2,'bull dog');
dog.work();
dog.callMe();
/*
After ES6 class inheritence
*/

class Animal1{
    constructor(name,energy){
        this.name = name;
        this.energy = energy;
    }
    getName(){
        return this.name;
    };
    getEnergy(){
        return this.energy;
    };
    eat(foodType){
        if(!foodType) throw new Error('Provide food type. veg && non veg etc...')
        const type = foodType.toLowerCase();
        if(type ==='veg'){
            this.energy+=1;
        }else if(type === 'non veg'){
            this.energy+=2;
        }else{
            this.energy +=0;
        }
        console.log(`${this.name} is eating now...`);
    };
    work(){
        if(this.energy<=0){
            console.log(`I can't work now,because My energy is low.Eat something to work`)
        }else{
            console.log(`${this.name} is working...`)
            this.energy-=1;
        }
    }
}

class Dog1 extends Animal1{
    constructor(name,energy,breed){
        super(name,energy);
        this.breed = breed;
    }
    callMe(){
        console.log(`I am a ${this.breed} animal`);
    }
}

const dog1 = new Dog1('Maggie',3,'bull dog');

dog1.work();
dog1.callMe();