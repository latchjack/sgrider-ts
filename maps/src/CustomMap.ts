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
  // This is not as reusable so we want the constructor to take
  // some props insteado of hardcoded in the 'map' id.
  //   constructor() {
  //     this.googleMap = new google.maps.Map(document.getElementById('map'), {
  //       zoom: 1,
  //       center: { lat: 0, lng: 0 },
  //     });
  //   }
}
