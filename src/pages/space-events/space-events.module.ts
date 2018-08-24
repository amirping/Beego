import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaceEventsPage } from './space-events';

@NgModule({
  declarations: [
    SpaceEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(SpaceEventsPage),
  ],
})
export class SpaceEventsPageModule {}
