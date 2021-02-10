import faker from "faker";
import { Mappable } from "./CustomMap";

// an instance of user must satisfy all requirements of the Mappable interface
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = "red";

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  color: string;

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
