document.querySelector('#check').addEventListener('click',getSpell)
let book = localStorage.getItem('books')
document.querySelector('h2').innerText = book + ',' + localStorage.getItem('books')
function getSpell(){

  const choice = document.querySelector('#chName').value.toLowerCase();
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;
  fetch(url)
  .then(res => res.json())
  .then(data => {
      console.log(data)
    document.querySelector('.putChaName').innerText = data.subclasses[0].name;
    document.querySelector('.putChaDescription').innerText = data.classes[0].name;
    document.querySelector('ul').innerText = ' ';
    data.subclasses.forEach(obj => {
      console.log(obj.name)
      const li = document.createElement('li')
      li.textContent = obj.name;
      document.querySelector('ul').appendChild(li);
     localStorage.setItem('books',data.subclasses[0].name)
     localStorage.getItem('books')
     document.querySelector('h2').innerText = localStorage.getItem('books')

    } )
   
})
}


// function reverseArray(pokeMon){
//   console.log(pokeMon.reverse())
// }
// reverseArray(['BlueLock','Haikyu','Demon','Glitch'])

 

// function returnTrueForArray(a,b){
//   return a.reduce( (acc,c) => Math.pow(c,2),0) > b.reduce( (acc,c) => c**3,0)
// }

// console.log(returnTrueForArray([2,6,7,9,5],[1,1,1,1,1]))

// function MakeExpresso(marName,marBrand,marColor){
//   this.name = marName;
//   this.brand = marBrand;
//   this.color = marColor
//   this.func = function(){
//     console.log(`My name is ${this.name} and i can make sweet Tea`)
//   }
// }

// let Macho = new MakeExpresso('MAcho','Microsoft','Black')
// console.log(Macho)

// class makeExpresso{
//   constructor(name,model,color,price){
//     this.name = name
//     this.model = model
//     this.color = color
//     this.price = price
//   }
//   start(){
//     console.log('Starrrtinng!!!!')
//   }
//   stop(){
//     console.log('Stopinnngg!!!!!')
//   }

// }

// let Chacha = new makeExpresso('Chacha', 'Latest','Black','$250000')
// console.log(Chacha)

// localStorage.setItem('book',data.name)
// let book = localStorage.getItem('name')
// document.querySelector().innerText = book += data.name

// function AgencyCalculator(hourlyRate,hours,taxRate){
//   this.hourlyRate = hourlyRate;
//   this.hour = hours;
//   let rate = this.taxRate
//   let calculateProfit = function(){
//     return this.hourlyRate * this.hours * (1 - rate)
//   }
//   this.invoice = function(){
//     return `You total invoice if ${this.hourlyRate * this.hours}`
//   }
// }

// class FinalYear{
//   constructor(name,sex,grade){
//     this._name = name;
//     this._sex = sex;
//     this._grade = grade;

//   }
//   get name(){
//     return this._name
//   }
//   get sex(){
//     return this._sex
//   }
//   get grade(){
//     return this._grade  
//   }
//   hobby(){
//     console.log(`${this.name} has an hobby`)
//   }
//   grade(){
//     console.log(`${this.name} has a CGPA 0f ${this.grade}`)
//   }
// }

// class NuclearPhysics extends FinalYear{
//   constructor(name,sex,grade){
//     super(name)
//     this._sex = sex;
//     this.grade = grade;

//   }
//   get sex(){
//     return this._sex
//   }
//   hobby(){
//     console.log('My hobby is coding')
//   }
//   sport(){
//     console.log('I play football well')
//   }
// }

// let Abdullah = new NuclearPhysics('Abdullah','Male','First Class')


//Create  a farm of animals and extend with different other animals in the farm

// class Animal{
//   constructor(name){
//     this._name = name
//   }
//   get name(){
//     return this._name
//   }
//   speak(){
//     console.log(`${this._name} makes a particular sound`)
//   }
// }

// class Dog extends Animal{
//   constructor(name,breed,color){
//     super(name)
//     this._breed = breed
//     this._color = color
//   }
//   get breed(){
//     return this._breed
//   }
//   get color(){
//     return this._color
//   }
//   speak(){
//     super.speak()
//     console.log(`${this._name} barks`)
//   }

// }

// class Cat extends Animal{
//   constructor(name,breed,color){
//     super(name)
//     this._breed = breed
//     this._color = color
//   }
//   get breed(){
//     return this._breed
//   }
//   get color(){
//     return this._color
//   }
//   speak(){
//     super.speak()
//     console.log(`${this._name} meows`)
//   }
// }
// class Goat extends Animal{
//   constructor(name,breed,color){
//     super(name)
//     this._breed = breed
//     this._color = color 
//   }
//   get breed(){
//     return this._breed
//   }
//   get color(){
//     return this._color
//   }
//   speak(){
//     super.speak()
//     console.log(`${this._name} bleats`)
//   }
// }

// let simba = new Dog('Simba','Shepperd','Black')
// let machi = new Dog('Machi','German','White')
// let salem = new Cat('Salem','Local','White') 
// let gojo = new Goat('Gojo','American','Black')

// let farm = [simba,salem,gojo,machi]

// for(a of farm){
//   console.log(a.speak())
// }

// class Clothes{
//   constructor(name){
//     this._name = name
//   }
//   get name(){
//     return this._name
//   }
//   sell(){
//     console.log(`${this._name} sells for a particular price`)
//   }
// }

// class Jeans extends Clothes{
//   constructor(name,price,color){
//     super(name)
//     this._price = price 
//     this._color = color
//   }
//   get price(){
//     return this._price
//   }
//   get color(){
//     return this._color
//   }
//   sell(){
//     console.log(`${this._name} sells for ${this._price}`)
//   }
// }

// class Native extends Clothes{
//   constructor(name,price,color){
//     super(name)
//     this._price = price
//     this._color = color
//   }
//   get price(){
//     return this._price
//   }
//   get color(){
//     return this._color
//   }
//   sell(){
//     console.log(`${this._name} sells for ${this._price}`)
//   }
// }

// let nike = new Jeans('Nike','$500','Black')
// let ankara = new Native('Ankara','$200','Green')


// let Shop = [nike,ankara]
// for(a of Shop){
//   console.log(a.sell())
// }

// class Contractor{
//   constructor(name,role){
//     this._name = name
//     this._role = role
//   }
//   get name(){
//     return this._name
//   }
//   get role(){
//     return this._role
//   }
//   greet(){
//     console.log(`Hello my name is ${this._name} and I am ${this._role} developer`)
//   }
//   sayGoodbye(){
//     console.log('Thanks for having me! See you next time')
//   }
// }

// class FrontEnd extends Contractor{
//   constructor(name,role,experience){
//     super(name)
//     this._role = role
//     this._experience = experience
//   }
//   get role(){
//     return this._role
//   }
//   get experience(){
//     return this._experience
//   }
//   greet(){
//     super.greet()
//   }
//   sayGoodbye(){
//     super.sayGoodbye()
//   }
// }

// class BackEnd extends Contractor{
//   constructor(name,role,experience){
//     super(name,role)
//     //this._role = role
//     this._experience = experience
//   }
//   // get role(){
//   //   return this._experience
//   // }
//   get experience(){
//     return this._experience
//   }
//   greet(){
//     super.greet()
//   }
//   sayGoodbye(){
//     super.sayGoodbye()
//   }
// }

// let abdullah = new FrontEnd('Abdullah','Front-End','3 Years')
// let daniel = new BackEnd('Daniel','backend','2 Years')


// let Developer = [abdullah,daniel]

// for(person of Developer){
//   person.greet()
// }

class Vehicle{
  constructor(type,fuelType,maxSpeed){
    this._type = type
    this._fuelType = fuelType
    this._maxSpeed = maxSpeed
  }
  get type(){
    return this._type
  }
  get fuelType(){
    return this._fuelType
  }
  get maxSpeed(){
    return this._maxSpeed
  }
  startEngine(){
    if(this.fuelType === 'electric'){
      console.log('Engine Started Silently')
    }else{
      console.log('Engine Started with roar')
    }
  }
  drive(){
    if(speed > this._maxSpeed){
      console.log('Warning! You are exceeding the maximum speed!')
    }else{
      console.log(`Driving at ${this._maxSpeed}km/hr`)
    }
  }
  describe(){
    console.log(`This is a ${this._type} that runs on ${this._fuelType} and has a maximum speed of ${this._maxSpeed} km/hr`)
  }
}

class Electric extends Vehicle{
  constructor(type,fuelType,maxSpeed,speed){
    super(type,fuelType)
    this._maxSpeed = maxSpeed
    this._speed = speed 
  }
  get maxSpeed(){
    return this._maxSpeed
  }
  get speed(){
    return this._speed
  }
  batteryCapacity(){
    console.log('89')
  }
  charge(){
    console.log('Charging the battery to full capacity')
  }

}

class Truck extends Vehicle{
  constructor(type,fuelType,maxSpeed){
    super(type,fuelType)
    this._maxSpeed = maxSpeed
  }
  get maxSpeed(){
    return this._maxSpeed
  }
 start(){
  console.log('This car is startiing!!!')
 }
}

let Kolo = new Electric('Electric','Eletric','15','50')
let jolo = new Truck('Jolo','Diesel','10')