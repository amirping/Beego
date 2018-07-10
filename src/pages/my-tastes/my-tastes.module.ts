import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyTastesPage } from './my-tastes';

@NgModule({
  declarations: [
    MyTastesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyTastesPage),
  ],
})
export class MyTastesPageModule {}
