import faker from 'faker';
import { Mappable } from './CustomMap';

/*
By 'implementing' Mappable we are telling TS that an instance of
the User class will satisfy all of the properties required by the
Mappable interface.
We're not required to use the implements feature of TS, but it 
makes it easier to see where errors are coming from when working
with instances of classes. If you fail to implement an interface
TS will tell you what is missing and point you to the true source
of the issue.

Export the User class and tell TS what types of value it'll have
*/
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  // Use the constructor to initialise each User with data for the values
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `User name: ${this.name}`;
  }
}
