

//PolyMorphism
Poly - Many
Morph - Form
 PolyMorphism in OOP is the ability to create a variable, functionm or an ibject that has more than
one form.

    class Animal{
    constructor(name){
        this.name = name
    }

    eats(){
        console.log(`I am a happy ${this.name}`)
    }
}
let me = new Animal('Obi')
console.log(me.eats())

class Aligator extends Animal{

    constructor(hobby,name){
        super();
        this.hobby = hobby;
        this.name = name
    }
    // //
    eats(){
        super.eats();
        console.log( this.hobby+ ' I am happy with Andela Job')
    }
}
let Vic = new Aligator('Jessy','Blessing')
console.log(Vic.eats())

//  Encapsulation
class Employee{
    setEmpDetails(name, id, photo) {
        this.name = name;
        this.id = id;
        this.photo = photo;
    }

    getEmpName(){
        return this.name
    }
    getEmpId(){
        return this.id
    }
    getEmpPhoto(){
        return this.photo
    }
}

let emp1 = new Employee();

emp1.setEmpDetails('Victoria','007','8948494')
console.log(emp1.getEmpName())
console.log(emp1.getEmpId())
console.log(emp1.getEmpPhoto())

//Inheritance
class Car{
    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log('Engine started for '+this.name)
    }

    stopEngine(){
        console.log('Engine stop for '+this.name)
    }
}

class Toyoto extends Car{

    topSpeed(speed){
        console.log('Top speed for '+this.name+' is '+speed)
    }
}
let myCar = new Toyoto();
myCar.setName('Nissan')
console.log(myCar.startEngine())
console.log(myCar.stopEngine())
console.log(myCar.topSpeed('333'))


//Abstraction
// function Employee(name, age, baseSalary){
//     this.name = name;
//     this.age = age;
//     this.baseSalary = baseSalary;
//     let monthlyBonus = 1000;
//
//     let calculateFinalSalary = function(){
//         let finalSalary = baseSalary + monthlyBonus;
//         console.log('Final Salary is: '+finalSalary);
//     }
//     this.getEmpDetails = function() {
//         console.log('Name : '+this.name+' | Age : '+this.age);
//         calculateFinalSalary()
//     }
// }

// let emp1 = new Employee('John',30,2000)
// emp1.getEmpDetails()

