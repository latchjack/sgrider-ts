// import { User } from './User';
// import { Company } from './Company';
/*
In TS, classes have a dual purpose. When we make a class, we can
use it to create a new instance of an object. We can also use it
to refer to that type as well.

e.g. The User class can be used to create a new instance of a 
user or be used to refer to the User type.
*/

/*
We create an interface to instruct every other class on how they
can be used as an argument to work with the addMarker function.
Mappable becomes a 'gatekeeper' to the addMarker function.
*/
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

/*
The goal of creating the CustomMap is to protect/hide functions
we do not want other devs to access functions that could break
the application. So we use a modifier to change it from being
public to private, which means it's functions cannot be accessed
from outside of this class.
*/
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  /*
  This function is better as it's dryer. It takes both User or Company
  to generate the marker on the map.

  Using the Or (|) operator makes TS look at both types. We can only
  refer to properties on the arguments (User/Company) if they exist on
  both types.
  
  (i.e location is kept because both Company and User have a location
  and the location object both has lat and lng keys which have a type
  of number. However name, companyName and catchPhrase aren't on both
  objects).

  addMarker(mappable: User | Company): void {} is not the best solution
  because if we start to add more classes to the args of addMarker, it 
  would keep growing to the point of being unreadable.

  To avoid this we invert the dependancy. We use an interface to tell
  all of the classes they need to have a location object with the lat
  and lng keys with the types of numbers.
  */
  //   addMarker(mappable: User | Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: mappable.location.lat,
  //         lng: mappable.location.lng,
  //       },
  //     });
  //   }

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
  }

  // This is not as reusable so we want the constructor to take
  // some props insteado of hardcoded in the 'map' id.
  //   constructor() {
  //     this.googleMap = new google.maps.Map(document.getElementById('map'), {
  //       zoom: 1,
  //       center: { lat: 0, lng: 0 },
  //     });
  //   }

  // Bad code examples (not DRY)
  //   addUserMarker(user: User): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: user.location.lat,
  //         lng: user.location.lng,
  //       },
  //     });
  //   }

  //   addCompanyMarker(company: Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: company.location.lat,
  //         lng: company.location.lng,
  //       },
  //     });
  //   }
}
