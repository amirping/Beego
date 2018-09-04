import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NgxChartsModule } from "@swimlane/ngx-charts";

/**
 * Generated class for the BeeSensorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-bee-sensor",
  templateUrl: "bee-sensor.html"
})
export class BeeSensorPage {
  timeUnite = [
    { name: "semaine", val: 0 },
    { name: "aujourd'hui", val: 1 },
    { name: "jour", val: 2 },
    { name: "hier", val: 3 },
    { name: "mois", val: 4 },
    { name: "annee", val: 5 }
  ];
  selectedTimeUnite = 1;
  timeUnitOpen = false;
  chartConfig = {
    showXAxis: true,
    showYAxis: true,
    gradient: true,
    showLegend: false,
    showXAxisLabel: false,
    showYAxisLabel: false
  };

  charts = [
    {
      id: 0,
      name: "evolution des visites",
      type: "guest",
      data: [
        {
          name: "Lun",
          value: 120
        },
        {
          name: "Mar",
          value: 70
        },
        {
          name: "Mer",
          value: 55
        },
        {
          name: "Jeu",
          value: 66
        },
        {
          name: "Sam",
          value: 30
        },
        {
          name: "Dim",
          value: 30
        }
      ],
      colorScheme: {
        domain: ["#FB4B7D"]
      }
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad BeeSensorPage");
  }
}
