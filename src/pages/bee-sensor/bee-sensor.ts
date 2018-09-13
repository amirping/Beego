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
 * zone of test
 */
import * as shape from "d3-shape";
import { ComboChartComponent } from "../../components/combo-chart/combo-chart";
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
  /**
   * some options for the combo
   */
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = "Legend";
  showXAxisLabel = true;
  tooltipDisabled = false;
  xAxisLabel = "Country";
  showYAxisLabel = true;
  yAxisLabel = "GDP Per Capita";
  showGridLines = true;
  innerPadding = "10%";
  barPadding = 8;
  groupPadding = 16;
  roundDomains = false;
  maxRadius = 10;
  minRadius = 3;
  showSeriesOnHover = true;
  roundEdges: boolean = true;
  animations: boolean = true;
  xScaleMin: any;
  xScaleMax: any;
  yScaleMin: number;
  yScaleMax: number;
  showDataLabel = false;
  // Combo Chart
  barChart: any[] = [
    {
      name: "USA",
      value: 50000
    },
    {
      name: "United Kingdom",
      value: 30000
    },
    {
      name: "France",
      value: 10000
    },
    {
      name: "Japan",
      value: 5000
    },
    {
      name: "China",
      value: 500
    }
  ];
  lineChartSeries: any[] = [
    {
      name: "Tablets",
      series: [
        {
          name: "USA",
          value: 50
        },
        {
          value: 80,
          name: "United Kingdom"
        },
        {
          value: 85,
          name: "France"
        },
        {
          value: 90,
          name: "Japan"
        },
        {
          value: 100,
          name: "China"
        }
      ]
    },
    {
      name: "Cell Phones",
      series: [
        {
          value: 10,
          name: "USA"
        },
        {
          value: 20,
          name: "United Kingdom"
        },
        {
          value: 30,
          name: "France"
        },
        {
          value: 40,
          name: "Japan"
        },
        {
          value: 10,
          name: "China"
        }
      ]
    },
    {
      name: "Computers",
      series: [
        {
          value: 2,
          name: "USA"
        },
        {
          value: 4,
          name: "United Kingdom"
        },
        {
          value: 20,
          name: "France"
        },
        {
          value: 30,
          name: "Japan"
        },
        {
          value: 35,
          name: "China"
        }
      ]
    }
  ];
  lineChartScheme = {
    name: "coolthree",
    selectable: true,
    group: "Ordinal",
    domain: ["#01579b", "#7aa3e5", "#a8385d", "#00bfa5"]
  };
  comboBarScheme = {
    name: "singleLightBlue",
    selectable: true,
    group: "Ordinal",
    domain: ["#01579b"]
  };
  showRightYAxisLabel: boolean = true;
  yAxisLabelRight: string = "Utilization";
  /**
   * end
   */
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
      dataBar: [
        {
          name: "Lun",
          series: [
            {
              name: "Visiteurs",
              value: 2063
            },
            {
              name: "Passants",
              value: 3695
            }
          ]
        },
        {
          name: "Mar",
          series: [
            {
              name: "Visiteurs",
              value: 2063
            },
            {
              name: "Passants",
              value: 3695
            }
          ]
        },
        {
          name: "Mer",
          series: [
            {
              name: "Visiteurs",
              value: 2063
            },
            {
              name: "Passants",
              value: 3695
            }
          ]
        },
        {
          name: "Jeu",
          series: [
            {
              name: "Visiteurs",
              value: 2063
            },
            {
              name: "Passants",
              value: 3695
            }
          ]
        },
        {
          name: "Ven",
          series: [
            {
              name: "Visiteurs",
              value: 2063
            },
            {
              name: "Passants",
              value: 3695
            }
          ]
        },
        {
          name: "Sam",
          series: [
            {
              name: "Visiteurs",
              value: 2063
            },
            {
              name: "Passants",
              value: 3695
            }
          ]
        },
        {
          name: "Dim",
          series: [
            {
              name: "Visiteurs",
              value: 2063
            },
            {
              name: "Passants",
              value: 3695
            }
          ]
        }
      ],
      dataLine: [
        {
          name: "Satisfaction",
          series: [
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
          ]
        }
      ],
      colorScheme: {
        domain: ["#d81b60"]
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
  /**
   * testting zone
   */
  yLeftAxisScale(min, max) {
    return { min: `${min}`, max: `${max}` };
  }

  yRightAxisScale(min, max) {
    return { min: `${min}`, max: `${max}` };
  }

  yLeftTickFormat(data) {
    return `${data.toLocaleString()}`;
  }

  yRightTickFormat(data) {
    return `${data}%`;
  }
}
