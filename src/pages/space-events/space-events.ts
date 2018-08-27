import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import * as moment from "moment";
/**
 * Generated class for the SpaceEventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-space-events",
  templateUrl: "space-events.html"
})
export class SpaceEventsPage {
  dateIn = {
    monthes: [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre"
    ],
    days: ["lun", "mar", "mer", "jeu", "ven", "sam", "dim"],
    years: [],
    daysNbr: [],
    startDayPos: 0,
    endDayPos: 0,
    daysLen: 0,
    targetDate: moment(),
    selectedYear: moment().year()
  };
  now = moment();
  // showingMonthes = false;
  showCalendar = false;
  selectedDate: any = "";
  selectedDateIndex: any;
  dateData: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.DaysNbrCalc(this.dateIn.targetDate);
     this.fetchData(this.now);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SpaceEventsPage");
  }
  DaysNbrCalc(targetDate: any) {
    this.dateIn.daysNbr = [];
    // pushing some data in years (10 years from each side start from this year )
    for (let x = targetDate.year() - 10; x <= targetDate.year(); x++) {
      this.dateIn.years.push(x);
    }
    for (let x = targetDate.year() + 1; x <= targetDate.year() + 10; x++) {
      this.dateIn.years.push(x);
    }
    let dat = moment(targetDate);
    let datend = moment(targetDate).endOf("month");
    this.dateIn.startDayPos = dat.startOf("month").day() - 1;
    this.dateIn.startDayPos = dat.startOf("month").day() - 1;
    // the case that the week start sunday (only one case else we are good)
    if (this.dateIn.startDayPos < 0) {
      this.dateIn.startDayPos += 7;
    }
    this.dateIn.daysLen = dat.daysInMonth();
    this.dateIn.endDayPos = this.dateIn.startDayPos + this.dateIn.daysLen;
    /**
     * filling the target date days ....
     */
    for (let t = 0; t < this.dateIn.daysLen; t++) {
      this.dateIn.daysNbr[this.dateIn.startDayPos + t] = t + 1;
    }
    /**
     * working on empty places of the array before the start day of the target date
     */
    let pastDays = [];
    let rev = 0;
    for (let s = 0; s < this.dateIn.startDayPos; s++) {
      pastDays[rev] = dat.clone();
      this.dateIn.daysNbr[rev] = pastDays[rev]
        .subtract(this.dateIn.startDayPos - s, "days")
        .date();
      rev++;
    }
    /**
     * working on the days after the target day days end (it need to be 7n )
     */
    let afterDays = [];
    rev = 0;
    if (this.dateIn.daysNbr.length % 7 != 0) {
      console.log("we need to add some gods here ");
      let k = this.dateIn.daysNbr.length;
      while (this.dateIn.daysNbr.length % 7 != 0) {
        // we keep adding unitl we are good with the condition of 7n
        afterDays[rev] = datend.clone();
        this.dateIn.daysNbr[k] = afterDays[rev].add(rev + 1, "days").date();
        rev++;
        k++;
      }
    }
    console.log(this.dateIn);
  }
  /**
   * @inputs : month from 0 -> 11 [-1 to keep the same month]
   * year : opt
   */
  reCalc(month, ev, year?) {
    if (month != -1) {
      this.dateIn.targetDate.month(month);
      // this.showingMonthes = !this.showingMonthes;
    }
    if (year) {
      this.dateIn.targetDate.year(year);
    }
    this.selectedDate = "";
    this.selectedDateIndex = -100;
    this.DaysNbrCalc(this.dateIn.targetDate);
  }
  selectDate(d, i) {
    console.log(i);
    console.log(this.dateIn.startDayPos + " - " + this.dateIn.endDayPos);
    if (i >= this.dateIn.startDayPos && i < this.dateIn.endDayPos) {
      this.selectedDate = this.dateIn.targetDate.set("date", d);
      this.selectedDateIndex = i;
    } else {
      console.log("not this month days move it back to perv month or next ");
    }
    this.fetchData(this.selectedDate);
  }
  /**
   * keep the needed line dude u know that
   */
  keepLineDays(startPos,endPos)
  {
    if(!this.selectedDateIndex || this.selectedDateIndex == -100){
      // work on today
      let day = this.dateIn.targetDate.date();
      for(let v=startPos;v <endPos;v++){
        if(this.dateIn.daysNbr[v] == day){
          return true;
        }
      }
      return false;
    }
    else{
      // work on selected date
      return (this.selectedDateIndex>=startPos && this.selectedDateIndex<=endPos)
    }
  }
  /**
   * fetch data from back basing on the date
   */
  fetchData(date){
    if(date.date() == 27 ){
      this.dateData.push(
      {
        id: 0,
        type: "evenement",
        img: "https://source.unsplash.com/1600x900/?bar,coffe",
        date: "27 Dec,2017",
        title: "Visual - the next level",
        location: "Yuka lambout"
      },
      {
        id: 1,
        type: "evenement",
        img: "https://source.unsplash.com/1600x900/?nature,camping",
        date: "27 Dec,2017",
        title: "Visual - the next level",
        location: "Yuka lambout"
      }
    );
    }
    else{
      this.dateData= [];
    }
  }
}
