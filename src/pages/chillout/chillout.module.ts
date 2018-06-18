import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChilloutPage } from './chillout';

@NgModule({
  declarations: [
    ChilloutPage,
  ],
  imports: [
    IonicPageModule.forChild(ChilloutPage),
  ],
})
export class ChilloutPageModule {}
