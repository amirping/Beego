import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaceNotificationPage } from './space-notification';

@NgModule({
  declarations: [
    SpaceNotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(SpaceNotificationPage),
  ],
})
export class SpaceNotificationPageModule {}
