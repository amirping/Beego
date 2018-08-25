import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaceConversationPage } from './space-conversation';

@NgModule({
  declarations: [
    SpaceConversationPage,
  ],
  imports: [
    IonicPageModule.forChild(SpaceConversationPage),
  ],
})
export class SpaceConversationPageModule {}
