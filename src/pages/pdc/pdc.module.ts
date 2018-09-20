import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PdcPage } from './pdc';

@NgModule({
  declarations: [
    PdcPage,
  ],
  imports: [
    IonicPageModule.forChild(PdcPage),
  ],
})
export class PdcPageModule {}
