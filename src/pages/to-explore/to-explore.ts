import { Component, ViewChild, AfterViewInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import { MapProvider } from "../../providers/map/map";
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
  bottom_ctn = "3";
  selectedPlace = -1; // will take the index from locationLists
  suggest = {
    shown: true
  };
  direction: any;
  geoTracker: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    private _mapProvider: MapProvider
  ) {
    console.log("hello crash");
    // loading all location from db etc
    this.locationLists = [
      {
        id: 0,
        name: "Le Bon Coin",
        picPin: "http://www.zachalbert.com/images/ruf-s2.png",
        picCover: "https://source.unsplash.com/900x900/?coffe,bar",
        location: [10.147603, 36.85459],
        place: "el manzeh7 , tunis",
        rating: "4",
        startHour: "8am",
        endHour: "6pm",
        distance: "0"
      },
      {
        id: 1,
        name: "Disny spacy",
        picPin: "http://www.zachalbert.com/images/ruf-s2.png",
        picCover: "https://source.unsplash.com/900x900/?coffe,bar",
        location: [10.148847, 36.853388],
        place: "el manzeh8 , tunis",
        rating: "4",
        startHour: "8am",
        endHour: "6pm",
        distance: "0"
      },
      {
        id: 2,
        name: "Rolem spacy",
        picPin: "http://www.zachalbert.com/images/ruf-s2.png",
        picCover: "https://source.unsplash.com/900x900/?coffe,bar",
        location: [10.148847, 36.853488],
        place: "el manzeh8 , tunis",
        rating: "4",
        startHour: "8am",
        endHour: "6pm",
        distance: "0"
      }
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ToExplorePage");
  }
  clearSelection() {
    this.selectedPlace = -1;
    this.bottom_ctn = "3";
    // force remove
    this.map.removeLayer("line");
    this.map.removeSource("line");
    this.direction = "";
  }
  locateUser() {
    // ok look here dude
    /**
     * i can do it with own geolocation of ionic but we have to do more work to keep the pos visible on chnage
     * for that i rather to use mapbox watcher (on the same biblio) but here i don't have to keep watching and rendring
     * the only problem that we have to select and trigger the button .
     */
    let btn = document.getElementsByClassName("mapboxgl.ctrl.geolocate");
    console.log(btn);
    console.log(this.geoTracker);
    //this.geoTracker._onClickGeolocate.bind(this.geoTracker);
    this.geoTracker._geolocateButton.click();
  }
  ngOnInit() {}
  ionViewDidEnter() {
    /*Initializing geolocation*/
    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };
    let m = 0;
    this.watch = this.geolocation
      .watchPosition(options)
      .subscribe((position: Geoposition) => {
        m++;
        console.log(position);
        if (
          this.coordsData == undefined ||
          position.coords.latitude != this.coordsData.latitude ||
          position.coords.longitude != this.coordsData.longitude
        ) {
          this.coordsData = position.coords;
          if (m <= 1) {
            this.executemap();
          }
        }
      });
    //this.executemap();
  }
  executemap() {
    /*Initializing Map*/
    console.log("called ex map");

    mapboxgl.accessToken =
      "pk.eyJ1IjoicGluZ2dob3N0IiwiYSI6ImNqanpoZnd4ZGFoMGMzd3I1dWpscWRxYTYifQ.lZRd3uq4m4g3U73uAX5h3g";
    this.map = new mapboxgl.Map({
      style: "mapbox://styles/pingghost/cjjznmwyr6edk2spfve2zuo3c",
      center: [this.coordsData.longitude, this.coordsData.latitude],
      //[this.coordsData.longitude, this.coordsData.latitude]
      zoom: 15,
      minZoom: 7.5, //restrict map zoom - buildings not visible beyond 13
      maxZoom: 20,
      container: "map"
    });

    this.geoTracker = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    });
    this.map.addControl(this.geoTracker);
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
    let sel = this;
    let btctn = this.bottom_ctn;
    var el = document.createElement("div");
    el.className = "marker";
    el.style.backgroundImage = "url(" + marker.picPin + ")";
    el.style.backgroundColor = this.randomColor();
    el.style.clipPath = "url(#pathOfPin)";
    el.addEventListener("click", function() {
      sel.selectedPlace = marker.id;
      sel.bottom_ctn = "5";
      sel.directionHundler(marker.id, marker.location);
    });
    return el;
  }
  directionHundler(idPlace, target) {
    this._mapProvider
      .getDirectionWay(
        [this.coordsData.longitude, this.coordsData.latitude],
        target
      )
      .then(response => {
        if (response.body.code === "Ok") {
          console.log(response.body);
          let route = response.body.routes[0];
          this.locationLists[idPlace].distance = route.distance / 1000;
          this.direction = route.geometry.coordinates;
          // draw on map
          var geojson = {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: { coordinates: this.direction, type: "LineString" }
              }
            ]
          };
          // in case we are called the 2 time
          try {
            this.map.removeLayer("line");
            this.map.removeSource("line");
          } catch (err) {
            console.log(
              "its ok dude i know it hurt as fuck but u have to do it"
            );
          }
          this.map.addSource("line", {
            type: "geojson",
            lineMetrics: true,
            data: geojson
          });
          this.map.addLayer({
            id: "line",
            type: "line",
            source: "line",
            layout: {
              "line-join": "round",
              "line-cap": "round"
            },
            paint: {
              "line-color": "gray",
              "line-width": 8,
              "line-gradient": [
                "interpolate",
                ["linear"],
                ["line-progress"],
                0,
                "#79a7f2",
                1,
                "#31af4a"
              ]
            }
          });
        } else {
          // no response show error msg here ya m3alem
          console.log("fail motherfucker");
        }
      });
  }
}
