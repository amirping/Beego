import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  Platform
} from "ionic-angular";
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
  clipingConfig = {
    pros: true,
    sizeSide: 45
  };
  chartConfig = {
    showXAxis: true,
    showYAxis: true,
    gradient: true,
    showLegend: false,
    showXAxisLabel: false,
    showYAxisLabel: false,
    padding: 0
  };
  selectedChartsCat = "all";
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
    },
    {
      id: 1,
      name: "evolution des passants",
      type: "traffic",
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
        domain: ["#FEC180"]
      }
    },
    {
      id: 2,
      name: "Répartition des visiteurs",
      type: "traffic",
      data: [
        {
          name: "Zahrouni",
          value: 30
        },
        {
          name: "menzah 5",
          value: 35
        },
        {
          name: "gafsa",
          value: 25
        },
        {
          name: "Sidi bouzid",
          value: 10
        }
      ],
      colorScheme: {
        domain: ["#FEC180", "#FEFF00", "#00FF55", "#665588"]
      }
    },
    {
      id: 3,
      name: "Evolution des satisfaction",
      type: "smile",
      data: [
        {
          name: "Lun",
          value: 70
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
          value: 90
        },
        {
          name: "Dim",
          value: 30
        }
      ],
      colorScheme: {
        domain: ["#d81b60"]
      }
    },
    {
      id: 4,
      name: "comparaison visieurs / passants",
      type: "rapport",
      data: {
        chartType: "ComboChart",
        dataTable: [
          ["days", "Visiteurs", "Passants", "Attractevité"],
          ["lun", 300, 938, 30],
          ["Mar", 450, 1120, 45],
          ["Mer", 670, 1167, 55],
          ["Jeu", 670, 1110, 60],
          ["Ven", 200, 691, 30],
          ["Sam", 500, 691, 90],
          ["Dim", 600, 691, 95]
        ],
        options: {
          seriesType: "bars",
          height: 150,
          width: 305,
          series: {
            0: { targetAxisIndex: 0 },
            1: { targetAxisIndex: 0 },
            2: { type: "line", targetAxisIndex: 1 }
          },
          legend: { position: "top" },
          chartArea: {
            width: "100%",
            height: "100%",
            bottom: "10%",
            left: "10%",
            right: "10%",
            top: "10%"
          },
          backgroundColor: "transparent",
          vAxis: {
            gridlines: {
              color: "transparent"
            },
            textStyle: { color: "#FFF" },
            0: { title: "personnes" },
            1: { title: "per" }
          },
          hAxis: {
            textStyle: { color: "#FFF" }
          },
          bar: { groupWidth: "50%" }
        }
      }
    },
    {
      id: 5,
      name: "Nombre moyen des visiteurs par heure",
      type: "guest",
      data: [
        {
          name: "Visiteurs Number",
          series: [
            {
              name: "5h",
              value: 4
            },
            {
              name: "7h",
              value: 70
            },
            {
              name: "9h",
              value: 55
            },
            {
              name: "11h",
              value: 66
            },
            {
              name: "13h",
              value: 30
            },
            {
              name: "15h",
              value: 30
            },
            {
              name: "17h",
              value: 100
            },
            {
              name: "19h",
              value: 30
            },
            {
              name: "21h",
              value: 30
            },
            {
              name: "23h",
              value: 30
            },
            {
              name: "01h",
              value: 30
            }
          ]
        }
      ],
      colorScheme: {
        domain: ["#148BB3"]
      }
    },
    {
      id: 6,
      name: "Evolution du premier et derniere visiteur par jour",
      type: "guest",
      data: [
        {
          name: "entree",
          series: [
            {
              name: "Lun",
              value: 6.3
            },
            {
              name: "Mar",
              value: 6.33
            },
            {
              name: "Mer",
              value: 6.45
            },
            {
              name: "Jeu",
              value: 6.22
            },
            {
              name: "Ven",
              value: 6.15
            },
            {
              name: "Sam",
              value: 7.0
            },
            {
              name: "Dim",
              value: 9.3
            }
          ]
        },
        {
          name: "sortie",
          series: [
            {
              name: "Lun",
              value: 24.33
            },
            {
              name: "Mar",
              value: 24.0
            },
            {
              name: "Mer",
              value: 25.33
            },
            {
              name: "Jeu",
              value: 25.15
            },
            {
              name: "Ven",
              value: 25.4
            },
            {
              name: "Sam",
              value: 26.33
            },
            {
              name: "Dim",
              value: 24.33
            }
          ]
        }
      ],
      colorScheme: {
        domain: ["#41CC6B", "#E24344"]
      }
    }
  ];
  loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _loadingCtrl: LoadingController,
    public plt: Platform
  ) {
    this.showLoader();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad BeeSensorPage");
    this.ClipingWormer();
  }
  ionViewWillEnter() {}
  showLoader() {
    this.loading = this._loadingCtrl.create({ content: "Please wait..." });
    this.loading.present();
  }
  hideloader() {
    this.loading.dismiss();
  }
  ClipingWormer() {
    let bars = document.querySelectorAll(
      "g[ngx-charts-bar]"
    ) as HTMLCollectionOf<HTMLElement>;
    if (bars.length != 0) {
      let barWidth = bars[0].getBoundingClientRect().width;
      console.log(barWidth);
      let lowVal = 8 / barWidth;
      let percent = lowVal * 100;
      let sizeSide = (100 - percent) / 2;
      this.clipingConfig.sizeSide = sizeSide;
      // applay on bars
      // expect on ios , we have a bug with cliping
      if (!this.plt.is("ios")) {
        for (let index = 0; index < bars.length; index++) {
          bars[index].style.clipPath =
            "inset(0 " + sizeSide + "% 0 " + sizeSide + "%)";
          /**
           * we need a fix for iOS , the idea is to add the cliped size as padding
           */
          // bars[index].style.webkitClipPath =
          //   "inset(0 " + sizeSide + "% 0 " + sizeSide + "%)";
        }
      }

      if (this.plt.is("ios")) {
        console.log("Ios hack for the bar width");
        this.chartConfig.padding = barWidth;
        console.log(this.chartConfig);
      }
      this.clipingConfig.pros = false;
      console.log(this.clipingConfig);
      this.hideloader();
    }
  }
  timeAxeY(val) {
    let tr = val + "";
    let gg = tr.split(".");
    // case one number front add  0
    if (gg[0].length == 1) {
      gg[0] = "0" + gg[0];
    }
    // case after 23

    let m = parseInt(gg[0]);
    if (m > 23) {
      let z = m - 24;
      gg[0] = "0" + z;
    }

    let str = gg[0] + ":";
    if (gg[1]) {
      if (gg[1].length == 1) {
        gg[1] += "0";
      }
      str = str + gg[1];
    } else {
      str = str + "00";
    }
    return str;
  }
}
