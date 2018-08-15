import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserSwitcherPage } from './user-switcher';

@NgModule({
  declarations: [
    UserSwitcherPage,
  ],
  imports: [
    IonicPageModule.forChild(UserSwitcherPage),
  ],
})
export class UserSwitcherPageModule {}
