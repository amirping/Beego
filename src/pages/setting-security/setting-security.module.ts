import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingSecurityPage } from './setting-security';

@NgModule({
  declarations: [
    SettingSecurityPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingSecurityPage),
  ],
})
export class SettingSecurityPageModule {}
