/*
| A class is a bit like a blueprint. We use it to create an object that has
| different fields (values) and methods (functions) attached to it. We use
| these classes to represent different things or objects inside our applications.
| 
*/

class Vehicles {
  drive(): void {
    console.log('vroom vroom');
  }
  honk(): void {
    console.log('beep beep');
  }
}

// const fordFocus = new Vehicle();
// fordFocus.drive();
// fordFocus.honk();

/*
| Basic inheritance
|_____________________
| 
| By extending the Vehicle inside the Car class we get all of the Vehicles
| methods.
| 
| As the Car class has extended the Vehicle class, we'd refer to them as...
| A Super Class = the Vehicle class
| A Child Class = the Car class
| 
| We can optionally choose to override different methods i.e we can redefine
| drive so that our constant of car can have a different implementation of it.
*/

class Car extends Vehicles {
  drive(): void {
    console.log('rev rev');
  }
}

/*
| As we've redefined drive in the car, when we fire it with car.drive() we get
| rev rev, instead of vroom vroom.
*/

const car = new Car();
car.drive();
car.honk();
