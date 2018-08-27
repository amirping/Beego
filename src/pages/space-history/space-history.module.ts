import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaceHistoryPage } from './space-history';

@NgModule({
  declarations: [
    SpaceHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(SpaceHistoryPage),
  ],
})
export class SpaceHistoryPageModule {}
