import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import mbxDirections from "@mapbox/mapbox-sdk/services/directions";
/*
  Generated class for the MapProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MapProvider {
  private tokenAPI: string =
    "pk.eyJ1IjoicGluZ2dob3N0IiwiYSI6ImNqanpoZnd4ZGFoMGMzd3I1dWpscWRxYTYifQ.lZRd3uq4m4g3U73uAX5h3g";
  private directionsClient: any;
  constructor(public http: HttpClient) {
    console.log("Hello MapProvider Provider");
    this.directionsClient = mbxDirections({
      accessToken: this.tokenAPI
    });
  }
  getDirectionWay(startPoint: Array<number>, targetPoint: Array<number>) {
    let daway = this.directionsClient.getDirections({
      waypoints: [
        {
          coordinates: startPoint
        },
        {
          coordinates: targetPoint
        }
      ],
      geometries: "geojson",
      overview: "full"
    });
    return daway.send();
  }
}
