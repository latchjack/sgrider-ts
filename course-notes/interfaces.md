# Interfaces

An interface is when we write code that creates a new type inside our
application. Once created the goal of the new type is for it to be used
for describing the property names and property types, of that created object.
It is a custom type that we define.

### Before using an interface

This is very long-winded. If we had several other functions within this file
that all expected to be called with oldCivic, we would have to repeat the
type annotation that is inside the printVehicle function every single time.

```typescript
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
```

To fix this we create an interface

```typescript
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

// We still have the same object for oldCivic
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};
```

However, now we have the interface we can just annotate the type of the
Vehicle interface in the functions args 'vehicle: Vehicle'. This is much
easier to read and it DRYer.

```typescript
const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
```

We are not limited to only having primitive values inside of the interface.
We can express any different type we want to within it.

If we didn't want the year to be a number but a more complexed object and
wanted a function named summary as part of the interface that tells us more
about the vehicle.

```typescript
interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar}g of sugar`;
  }
};

const printVehicle = (vehicle: Vehicle): void => {
  //   console.log(`Name: ${vehicle.name}`);
  //   console.log(`Year: ${vehicle.year}`);
  //   console.log(`Broken: ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
```

Version 2.

printSummary only has a summary key in the interface. However if we pass
it the oldCivic object as it args in the printSummary function. You see that
we don't get any errors. This is because TS is not looking at it having the extra
keys of name, year and broken. It is only looking for the summary method key.

Because of this we can pass the printSummary function the drink object without
receiving an error, because it also has a summary key.

The point being, that we can use a single interface to describe the shape/different
properties of very different objects. This interface is much simpler than the Vehicle
one from earlier.

Think of the interface like a gatekeeper. Everything that is used by the Reportable
interface must have a summary field.

The general strategy for reusable code in TS is...

1. To create functions that accept arguments that are typed with interfaces.

2. Objects/Classes can decide to implement a given interface to work with a function.

```typescript
interface isReportable {
  summary(): string;
}

const printSummary = (item: isReportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
```
