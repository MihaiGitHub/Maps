export class CustomMap {
  // prevent other engineers from referencing this property from outside this class
  private googleMap: google.maps.Map; //googleMap is an instance of the Google Map class

  // create an instance of a custom map with just these properties being able to change
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }
}
