/* Task : 1 , Create a set of interfaces to describe a vehicle, passengers, location, and destination.
Declare properties using type annotations */

interface MyJourny{
    adult:Number;
    childern:Number;
    city:String;
    state:String;
    country:String;
    date: (Number | String);

}

interface MyBooking extends MyJourny{
    advancebook:Boolean;
}

let JournyOne: MyJourny = {
    adult:4,
    childern:2,
    city:"Rajkot",
    state:"Gujarat",
    country:"India",
    date:17-6-2022,

};

let JournyTwo: MyBooking = {
    adult:3,
    childern:1,
    city:"Ahmedabad",
    state:"Gujarat",
    country:"India",
    date:20-6-2022, 
    advancebook:true,
};


// Task : 2 create person name class with have two property ( 1. name , 2. age ) then get name and age of person

class Person{

    name:string;
    age :number;
  
    constructor(name:string, age : number){
        this.name = name;
        this.age = age;
    }
    getPersonName():string{
      return this.name;
    }
    getPersonAge():number{
      return this.age;
    }
  }
  let a1 = new Person("Parth Joshi", 27);
  let a2 = new Person("Amit Joshi", 23);
  console.log(a1.name);
  console.log(a1.age);
  console.log(a1.getPersonName());
  console.log(a1.getPersonAge());

  console.log(a2.name);
  console.log(a2.age);
  console.log(a2.getPersonName());
  console.log(a2.getPersonAge());

  // Task : 3 implement person interface with name , age and getSalary(function) property in Employee class

  interface Person {
    name : string;
    age : number;
    getSalary: (salary:number) => number;
  }

  class Employee implements Person { 
    name:string;
    age:number;

    constructor(name: string, age: number) { 
        
        this.name = name;
        this.age = age;
    }

    getSalary(salary:number):number { 
        return salary;
    }
}

let emp1 = new Employee("Parth", 27);
let emp2 = new Employee("Darshna", 28);
let emp3 = new Employee("Jay", 28);
let emp4 = new Employee("Jinesh", 27);
let emp5 = new Employee("Ishwar", 30);

console.log(emp1.name);
console.log(emp1.age);
console.log(emp1.getSalary(30000));