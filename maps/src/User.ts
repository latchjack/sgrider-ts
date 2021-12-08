import faker from 'faker';

// export the User class and tell TS what types of value it'll have
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

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
