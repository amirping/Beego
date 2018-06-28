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

 
    
    transform( data  ,name :string ) {
      console.log(data);
      if(name && name!="")
   return data.filter(d => d.title.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  || d.subtitle.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );
   else
   
      return data;
    }
  }
  