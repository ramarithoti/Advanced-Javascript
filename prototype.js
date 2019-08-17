// creating Human object in different ways
// (a) with object literal syntax we this way when we don't need multple objects of same types
const Human ={};
Human.name = 'Ram';
Human.age =28;
Human.gender ='Male';
Human.energy =1;
Human.eat = function(){
    if(!this.energy){
        console.log(`${this.name} energy is less so eating food restores energy`)
        this.energy+=1;
    }else{
        console.log(`${this.name} doesn't need food now`)
    }
}
Human.work = function(){
    this.energy-=1;
    console.log(`${this.name} is working now`)
}

Human.work();
Human.eat();
/* (b) using function defination
 This way of creating object will create all the methods on each instance causing heap memory issue
*/
function Animal(name,age,gender,energy){
const Human ={};
Human.name = name;
Human.age =age;
Human.gender =gender
Human.energy =energy;
Human.eat = function(){
    if(!this.energy){
        console.log(`${this.name} energy is less so eating food restores energy`)
        this.energy+=1;
    }else{
        console.log(`${this.name} doesn't need food now`)
    }
}
Human.work = function(){
    this.energy-=1;
    console.log(`${this.name} is working now`)
}
return Human;
}

const animal_1 = Animal('Ram',28,'male',1);
const animal_2 = Animal('Sam',23,'female',2);
console.log('animal_2',animal_2);
animal_1.work();
animal_1.eat();
/*
(c) this way of creating objects is slightly better implementations to above function method
this way creating object will help us to tackle the issue of heap memory issue by avoiding 
the issue of creating all methods in each instance
 However whenevr we need to add new methods our object we need to define that method in Objectmethods and
 need to assign the same manually to our object

Below is the implementations
 */
const Objectmethods = {
    eat:function(){
        if(!this.energy){
            console.log(`${this.name} energy is less so eating food restores energy`)
            this.energy+=1;
        }else{
            console.log(`${this.name} doesn't need food now`)
        }
    },
    work:function(){
        this.energy-=1;
        console.log(`${this.name} is working now`)
    }
}
function Animal1(name,age,gender,energy){
    const Human = {};
    Human.name = name;
    Human.age = age;
    Human.gender = gender;
    Human.energy = energy;
    Human.eat = Objectmethods.eat;
    Human.work = Objectmethods.work;

    return Human;
}
const animal_3 = Animal1('Ram',23,'male',1);
const animal_4 = Animal1('Sam',23,'male',1)
console.log('animal_4',animal_3);
animal_3.work();
animal_3.eat();

/*
(d) Above method helps us tackle memory issue with a minor cavety now we can eliminate this minor cavety 
by using a method (i.e Object.create) that is native to javascript to create Objects
 */
function Animal2(name,age,gender,energy){
    const Human = Object.create(Objectmethods);
    Human.name = name;
    Human.age = age;
    Human.gender = gender;
    Human.energy = energy;
    return Human;
}
const animal_5 = Animal2('Ram',28,'Male',1);
const animal_6 = Animal2('Sam',24,'Female',1);
console.log('animal_6',animal_6);
animal_5.work();
animal_5.eat();
/*
 Prototype is a property that exist on function which points to object
*/
function Animal3(name,age,gender,energy){
    const Human = Object.create(Animal3.prototype);
    Human.name = name;
    Human.age = age;
    Human.gender = gender;
    Human.energy = energy;
    return Human;
}
Animal3.prototype ={
    eat:function(){
        if(!this.energy){
            console.log(`${this.name} energy is less so eating food restores energy`)
            this.energy+=1;
        }else{
            console.log(`${this.name} doesn't need food now`)
        }
    },
    work:function(){
        this.energy-=1;
        console.log(`${this.name} is working now`)
    }
}
const animal_7 = Animal3('Ram',28,'Male',1);
const animal_8 = Animal3('Sam',23,'Female',1);
animal_7.work();
animal_7.eat();

console.log('animal_8',animal_8);
/*
(e) using new keyword
Insted of Calling Object.create method manually and returning the created object we can use new keyword 
to create Objects which will calls Object.create method and return craeted object
       ex: const x = new Fun();
   when we use new keyword underhood javascript following happens
     Fun(){
         let this = Object.create(Fun.prototype);
         return this
     }
     const ArrowFun =()=>{}
     Arrow functions doesn't have this so you cant call const y = new ArrowFun();
 */
function Animal4(name,age,gender,energy){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.energy = energy;
}
Animal4.prototype ={
    eat:function(){
        if(!this.energy){
            console.log(`${this.name} energy is less so eating food restores energy`)
            this.energy+=1;
        }else{
            console.log(`${this.name} doesn't need food now`)
        }
    },
    work:function(){
        this.energy-=1;
        console.log(`${this.name} is working now`)
    }
}

const animal_9 = new Animal4('Ram',28,'Male',1);
const animal_10 = new Animal4('Sam',34,'Female',1);

animal_9.work();
animal_9.eat();
console.log('animal_10',animal_10);

/*
(f) using ES6 class syntax
*/

class Animal5 {
    constructor(name,age,gender,energy){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.energy = energy;
    }
    eat(){
        if(!this.energy){
            console.log(`${this.name} energy is less so eating food restores energy`)
            this.energy+=1;
        }else{
            console.log(`${this.name} doesn't need food now`)
        }
    };
    work(){
        this.energy-=1;
        console.log(`${this.name} is working now`)
    }
}
const animal_11 = new Animal5('Ram',28,'Male',1);
const animal_12 = new Animal5('Sam',23,'Female',1);

animal_11.work();
animal_11.eat();
console.log('animal_12',animal_12);