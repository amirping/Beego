import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
/**
 * Generated class for the ToExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-to-explore",
  templateUrl: "to-explore.html"
})
export class ToExplorePage {
  private opt = false;
  coordsData: any;
  watch: any;
  map: any;
  locationLists: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation
  ) {
    console.log("hello crash");
    // loading all location from db etc
    this.locationLists = [
      {
        id: 1,
        name: "Le Bon Coin",
        picPin: "https://logo.clearbit.com/cafemom.com",
        picCOver: "https://source.unsplash.com/900x900/?coffe,bar",
        location: [10.147603, 36.85459],
        rating: "4",
        startHour: "8am",
        endHour: "6pm"
      },
      {
        id: 1,
        name: "Le Bon Coin",
        picPin: "https://logo.clearbit.com/cafemom.com",
        picCOver: "https://source.unsplash.com/900x900/?coffe,bar",
        location: [10.148847, 36.853388],
        rating: "4",
        startHour: "8am",
        endHour: "6pm"
      }
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ToExplorePage");
  }
  ngOnInit() {}
  ionViewDidEnter() {
    /*Initializing geolocation*/
    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };

    this.watch = this.geolocation
      .watchPosition(options)
      .subscribe((position: Geoposition) => {
        console.log(position);
        if (
          this.coordsData == undefined ||
          position.coords.latitude != this.coordsData.latitude ||
          position.coords.longitude != this.coordsData.longitude
        ) {
          this.coordsData = position.coords;
          this.executemap();
        }
      });
  }
  executemap() {
    /*Initializing Map*/
    mapboxgl.accessToken =
      "pk.eyJ1IjoicGluZ2dob3N0IiwiYSI6ImNqanpoZnd4ZGFoMGMzd3I1dWpscWRxYTYifQ.lZRd3uq4m4g3U73uAX5h3g";
    this.map = new mapboxgl.Map({
      style: "mapbox://styles/pingghost/cjjznmwyr6edk2spfve2zuo3c",
      center: [this.coordsData.longitude, this.coordsData.latitude],
      zoom: 15,
      minZoom: 7.5, //restrict map zoom - buildings not visible beyond 13
      maxZoom: 20,
      container: "map"
    });

    let geoTracker = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    });
    this.map.addControl(geoTracker);
    // drop the location pins on the map
    this.locationLists.forEach(marker => {
      // create a DOM element for the marker
      let marki = this.pinProvider(marker);
      new mapboxgl.Marker(marki).setLngLat(marker.location).addTo(this.map);
    });
  }
  randomColor() {
    return (
      "#" +
      Math.random()
        .toString(16)
        .slice(2, 8)
    );
  }
  pinProvider(marker) {
    var el = document.createElement("div");
    el.className = "marker";
    el.style.backgroundImage = "url(" + marker.picPin + ")";
    el.style.backgroundColor = this.randomColor();
    el.style.clipPath = "url(#pathOfPin)";
    el.addEventListener("click", function() {
      window.alert(marker.name);
    });
    return el;
  }
}
