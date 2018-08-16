import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaceSettingPage } from './space-setting';

@NgModule({
  declarations: [
    SpaceSettingPage,
  ],
  imports: [
    IonicPageModule.forChild(SpaceSettingPage),
  ],
})
export class SpaceSettingPageModule {}
