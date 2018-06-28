import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingProfilPage } from './setting_profil';

@NgModule({
  declarations: [
    SettingProfilPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingProfilPage),
  ],
})
export class SettingProfilPageModule {}
