import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendFollowPage } from './friend-follow';

@NgModule({
  declarations: [
    FriendFollowPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendFollowPage),
  ],
})
export class FriendFollowPageModule {}
