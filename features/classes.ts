/*
| A class is a bit like a blueprint. We use it to create an object that has
| different fields (values) and methods (functions) attached to it. We use
| these classes to represent different things or objects inside our applications.
| 
*/

// class Vehicles {
//   public drive(): void {
//     console.log('vroom vroom');
//   }
// //   private honk(): void {
// //     console.log('beep beep');
// //   }
//   public honk(): void {
//     console.log('beep beep');
//   }
// }

/*
| Traditionally we initialise a variable when we declare it in a class.
| You can choose to define a default variable in the class in 2 ways...
|
| 1. A default starting value
| color: string = 'red';
|
| 2. The constructor function
| constructor(color: string) {
|   this.color = color;   
| }
*/
class Vehicles {
  /*
    | If we use color: string = 'red', every time we create an instance of
    | vehicle, the instance  will have a color property that is a string
    | and it's default starting value will be 'red'.
    */
  // color: string = 'red';
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('beep beep');
  }
}
/*
| We may want to pass in arguments when we create a new Vehicles object,
| to do this we use the constructor function inside the class.
| The constructor function is executed when we create a new instance of the
| class. The arguments for the constructor will be whatever we pass in when we
| create the instance...
| i.e.
| Sometimes we won't want a red car, so you'll want to initialise with
| another colour. The constructor will take the args given to the newly
| initialised vehicle to overwrite the default 'red'.
*/
const vehicle = new Vehicles('orange');
console.log(vehicle.color); // result would be 'red' if we don't pass it args

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
| 
| A simpler way to do the above...
| By adding the public modifier to the front of the color we are going to take
| whatever first args goes into the new instance of Vehicles, is going to be
| defined as it's colour.
| 
| Note: 
| - If we used the private modifier we would no longer be able to access/read
| the variable outside of the class.
| - If we used the protected modifier we would only be able to access the color
| via an object that extends from the class.
| 
| class Vehicles {
|   constructor(public color: string) {}
| 
|   protected honk(): void {
|     console.log('beep beep');
|   }
| }
*/

/*
| As we've redefined drive in the car, when we fire it with car.drive() we get
| rev rev, instead of vroom vroom.
*/
// const car = new Car();
// startDrivingProcess is public allowing us to execute the private drive method.
// car.startDrivingProcess();
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
