const profile = {
  name: 'Tim',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// Annotating types to destructured object keys.

// To destructure the age key from profile.
const { age }: { age: number } = profile;

// To destructure 2 different types of keys from the profile object
// const { age, name }: { age: number; name: string } = profile;

// To destructure the coords from profile
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
