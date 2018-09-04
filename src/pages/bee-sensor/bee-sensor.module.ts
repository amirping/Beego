import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeeSensorPage } from './bee-sensor';

@NgModule({
  declarations: [
    BeeSensorPage,
  ],
  imports: [
    IonicPageModule.forChild(BeeSensorPage),
  ],
})
export class BeeSensorPageModule {}
