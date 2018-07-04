import { Pipe, PipeTransform } from '@angular/core';
import {  NavController, NavParams } from "ionic-angular";


import { AngularFireDatabase } from 'angularfire2/database';
import { data } from "../../models/data/data.interface";
import { Observable } from 'rxjs/Observable';

@Pipe({
   name: 'searchRadio'
   })
export class SearchRadioPipe implements PipeTransform {

  pagesData :any;

 
    
    transform( data  ,name :string , category : string ) {
      console.log(data);
      if(name && name!="")
      {
        switch (category) {
        case "shopping":
        case "beauty":
        case "chillout":{
        return this.filterChillout(data,name);}
        case "evenement" : 
        {
        console.log(category);
        return this.filterEvenement(data,name);
        }


         
      
        default:
        return this.filterEspace(data,name);
        
      }
    }
      
  
   else
   
      return data;
    }



  private filterChillout(data: any, name: string) {
    console.log("ee",name);
    return data.filter(d => d.title.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      || d.subtitle.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }
  private filterEspace(data: any, name: string) {
    console.log("",name);
    return data.filter(d => d.espaceName.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }
  private filterEvenement(data: any, name: string) {
   
    return data.filter(d => d.Place.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    || d.Name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
  }
  }
  