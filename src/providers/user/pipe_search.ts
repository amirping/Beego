import { Pipe, PipeTransform } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";


import { AngularFireDatabase } from 'angularfire2/database';
import { data } from "../../models/data/data.interface";
import { Observable } from 'rxjs/Observable';

@Pipe({
  name: 'searchRadio'
})
export class SearchRadioPipe implements PipeTransform {

  pagesData: any;



  transform(data, filter: string | [any], category: string, text, text2) {
    //text2="";
    console.log(data);
    console.log(category);
    switch (category) {
      case "shopping":
      case "beauty":
      case "chillout": {
        if (name && name != "")
          return this.filterChillout(data, name);
        return data;
      }
      case "evenement":
        {
          console.log(category);
          

          return this.filterEvenement(data, filter);
        }




      default:
        return this.filterEspace(data, name);

    }


  }

  private filterChillout(data: any, name: string) {
    console.log("filterChillout", name);
    return data.filter(d => d.title.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      || d.subtitle.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }
  private filterEspace(data: any, name: string) {
    console.log("", name);
    return data.filter(d => d.espaceName.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }
  private filterEvenementByName(data: any, name: string) {
    console.log("", name);
    return data.filter(d => d.Name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }

  private filterEvenement(data: any, filter: any) {

    console.log("filter", filter);
    if (!filter) { return data; }
    return data.filter(d => {
      for (let item of filter) {
        if (item.name == "name") {
          if (!d.Name.toLocaleLowerCase().includes(item.value.toLocaleLowerCase())) {
            return false;
          }
        }
        else 
        if (d[item.name] != item.value && item.value != "ALL") {
          console.log("item.name", item.name)
          console.log("d", d);
          console.log("d[item.name]", d[item.name])
          return false;
        }

      }

      return true;
    });
  }
}
