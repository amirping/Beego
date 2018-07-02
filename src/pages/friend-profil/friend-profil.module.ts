import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendProfilPage } from './friend-profil';

@NgModule({
  declarations: [
    FriendProfilPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendProfilPage),
  ],
})
export class FriendProfilPageModule {}
