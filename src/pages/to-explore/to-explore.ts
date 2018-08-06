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
  friendLists: any;
  eventList: any;
  selectedStep = 0;
  programCreation = {
    friends : [],
    time: "",
    where:-1
  }
  bottom_ctn = "3"; //def = 3
  selectedPlace = -1; // will take the index from locationLists
  selectedFriend = -1; // will take the index from friendLists
  selectedEvent = -1; // will take the index from eventLists
  suggest = {
    shown: true
  };
  direction: any;
  geoTracker: any;
  activeMarker: Array<any> = [];
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
    this.friendLists = [
      {
        id: 0,
        name: "Lamine Ben Zekri",
        pic: "https://api.adorable.io/avatars/100/abott@aqsddosrabxle.io.png",
        locationID: 0
      },
      {
        id: 1,
        name: "azdin hamema",
        pic: "https://api.adorable.io/avatars/100/abott@aqsddosrabxle.io.png",
        locationID: 1
      },
      {
        id: 2,
        name: "lasaad zitouna",
        pic: "https://api.adorable.io/avatars/100/abott@aqsddosrabxle.io.png",
        locationID: 2
      }
    ];
    this.eventList = [
      {
        id: 0,
        name: "Yma Winter Shit",
        pic: "https://api.adorable.io/avatars/100/abott@aqsddosrabxle.io.png",
        locationID: "0",
        stat: "open",
        interstedList: [
          {
            id: 0,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          },
          {
            id: 1,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          },
          {
            id: 2,
            pic: "https://api.adorable.io/avatars/100/abqt@aqsdsrabxle.io.png"
          },
          {
            id: 3,
            pic: "https://api.adorable.io/avatars/100/abtz@aqsdsrabxle.io.png"
          },
          {
            id: 4,
            pic: "https://api.adorable.io/avatars/100/abtl@aqsdsrabxle.io.png"
          },
          {
            id: 5,
            pic: "https://api.adorable.io/avatars/100/abjt@aqsdsrabxle.io.png"
          },
          {
            id: 6,
            pic: "https://api.adorable.io/avatars/100/abft@aqsdsrabxle.io.png"
          },
          {
            id: 7,
            pic: "https://api.adorable.io/avatars/100/arbt@aqsdsrabxle.io.png"
          },
          {
            id: 8,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          },
          {
            id: 9,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          },
          {
            id: 10,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          }
        ]
      },
      {
        id: 1,
        name: "Winter Comming",
        pic: "https://api.adorable.io/avatars/100/abott@aqsddosrabxle.io.png",
        locationID: "1",
        stat: "open",
        interstedList: [
          {
            id: 0,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          },
          {
            id: 1,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          },
          {
            id: 2,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          },
          {
            id: 3,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          },
          {
            id: 4,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          },
          {
            id: 5,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          },
          {
            id: 6,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          },
          {
            id: 7,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          },
          {
            id: 8,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          },
          {
            id: 9,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          },
          {
            id: 10,
            pic: "https://api.adorable.io/avatars/100/abt@aqsdsrabxle.io.png"
          }
        ]
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
    /*let m = 0;
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
       });*/
    /**
     * we have removed the native watcher since we do it know with mapbox API (see locatUser function)
     */
    this.geolocation
      .getCurrentPosition(options)
      .then(resp => {
        // resp.coords.latitude
        // resp.coords.longitude
        this.coordsData = resp.coords;
        this.executemap();
      })
      .catch(error => {
        console.log("Error getting location", error);
        // we have to hundle the case that we have no GPS data back
      });
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
    // drop the location pins on the map at start
    // since the map can take time to load the pins drop at the first time will be fired here then it will be form it own hundler
    this.pinDroper(3);
  }
  randomColor() {
    return (
      "#" +
      Math.random()
        .toString(16)
        .slice(2, 8)
    );
  }
  pinProviderLocation(marker) {
    let sel = this;
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
  /**
   * this provider have basicly the same role us pinProviderLocation
   * expect that's its spec for events & freind
   * @param toMark : event or freind object from lists above to marked
   */
  pinProvider(toMark, type) {
    let sel = this;
    var el = document.createElement("div");
    if (type == "friend") {
      el.className = "friendMarker";
      el.style.backgroundImage = "url(" + toMark.pic + ")";
    } else {
      el.className = "marker";
      el.style.backgroundImage = "url(" + toMark.pic + ")";
      el.style.backgroundColor = "#FFFFFF";
      el.style.clipPath = "url(#pathOfPin)";
    }
    el.addEventListener("click", function() {
      if (type === "event") {
        sel.selectedEvent = toMark.id;
        sel.bottom_ctn = "2";
      } else if (type === "friend") {
        sel.selectedFriend = toMark.id;
        sel.bottom_ctn = "1";
      } else {
        throw "type not known";
      }

      //sel.directionHundler(toMark.id, toMark.location);
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
  /**
   * @param cat integer from 1 to 3 for wich the pin map droping coming from
   * @returns fill activeMarker with markers and drop theme
   */
  pinDroper(cat) {
    // clear other pin on the map
    this.activeMarker.forEach(marker => {
      marker.remove();
    });
    switch (cat) {
      case 1:
        // drop friends pin
        this.friendLists.forEach(marker => {
          // create a DOM element for the marker
          let marki = this.pinProvider(marker, "friend");
          let pinMarker = new mapboxgl.Marker(marki)
            .setLngLat(this.locationLists[marker.locationID].location)
            .addTo(this.map);
          this.activeMarker.push(pinMarker);
        });
        break;
      case 2:
        // drop events pin
        this.eventList.forEach(marker => {
          // create a DOM element for the marker
          let marki = this.pinProvider(marker, "event");
          let pinMarker = new mapboxgl.Marker(marki)
            .setLngLat(this.locationLists[marker.locationID].location)
            .addTo(this.map);
          this.activeMarker.push(pinMarker);
        });
        break;
      case 3:
        // drop location pin
        this.locationLists.forEach(marker => {
          // create a DOM element for the marker
          let marki = this.pinProviderLocation(marker);
          let pinMarker = new mapboxgl.Marker(marki)
            .setLngLat(marker.location)
            .addTo(this.map);
          this.activeMarker.push(pinMarker);
        });
        break;

      default:
        break;
    }
  }
  viewrChnager(type) {
    this.bottom_ctn = type;
    this.pinDroper(type);
  }
}
