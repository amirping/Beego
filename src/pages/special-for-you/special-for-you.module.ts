import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecialForYouPage } from './special-for-you';

@NgModule({
  declarations: [
    SpecialForYouPage,
  ],
  imports: [
    IonicPageModule.forChild(SpecialForYouPage),
  ],
})
export class SpecialForYouPageModule {}
