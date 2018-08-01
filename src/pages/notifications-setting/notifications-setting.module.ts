import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotificationsSettingPage } from './notifications-setting';

@NgModule({
  declarations: [
    NotificationsSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(NotificationsSettingPage),
  ],
})
export class NotificationsSettingPageModule {}
