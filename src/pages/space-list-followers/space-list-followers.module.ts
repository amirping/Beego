import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaceListFollowersPage } from './space-list-followers';

@NgModule({
  declarations: [
    SpaceListFollowersPage,
  ],
  imports: [
    IonicPageModule.forChild(SpaceListFollowersPage),
  ],
})
export class SpaceListFollowersPageModule {}
