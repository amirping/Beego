import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaceEventAndPromotionPage } from './space-event-and-promotion';

@NgModule({
  declarations: [
    SpaceEventAndPromotionPage,
  ],
  imports: [
    IonicPageModule.forChild(SpaceEventAndPromotionPage),
  ],
})
export class SpaceEventAndPromotionPageModule {}
