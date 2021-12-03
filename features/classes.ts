/*
| A class is a bit like a blueprint. We use it to create an object that has
| different fields (values) and methods (functions) attached to it. We use
| these classes to represent different things or objects inside our applications.
| 
*/

// class Vehicles {
//     public drive(): void {
//       console.log('vroom vroom');
//     }
//   public honk(): void {
//     console.log('beep beep');
//   }
// }

class Vehicles {
  //   private honk(): void {
  //     console.log('beep beep');
  //   }
  protected honk(): void {
    console.log('beep beep');
  }
}

const vehicle = new Vehicles();
// Can't call honk here as it's not a child of Vehicles.
// vehicle.honk();

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

// class Car extends Vehicles {
//     public drive(): void {
//       console.log('rev rev');
//     }
// }

/*
| drive() is a private method so it can only be called by another method in
| it's class.
| If we are ever overriding a method we cannot change the modifier in the
| child class. (Commented it out in Vehicles for this reason).
| NOTE: We do not define a method as private for security reasons. The only
| reason we do this is for restrictions, to keep the code from breaking.
*/
class Car extends Vehicles {
  private drive(): void {
    console.log('rev rev');
  }

  startDrivingProcess(): void {
    this.drive();
    /*
    | If we make honk private in Vehicle we wont be able to access it here,
    | but by making it protected, we can access it. However it cannot be
    | accessed anywhere outside of this child class.
    */
    this.honk();
  }
}

/*
| As we've redefined drive in the car, when we fire it with car.drive() we get
| rev rev, instead of vroom vroom.
*/
const car = new Car();
// startDrivingProcess is public allowing us to execute the private drive method.
car.startDrivingProcess();
// car.honk();

/*
| Method Modifiers
|___________________
|
| Modifiers are a keyword that we can place on different methods and properties
| inside of a class. The options are public, private and protected. The goal of these
| modifiers are
| to restrict access to different functions or different variables. By default every
| method and property, that we add to a class is going to have the public modifier
| on it. Until you add a modifier into the class, it is assumed that it is meant
| to be public.
| 
| 
| Public - this method can be called anywhere anytime.
| Private - this method can only be called by other methods in this class.
| Protected - this method can be called by other methods in this class, or by other
| methods in child classes.
*/
