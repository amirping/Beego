import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DislikeListPage } from './dislike-list';

@NgModule({
  declarations: [
    DislikeListPage,
  ],
  imports: [
    IonicPageModule.forChild(DislikeListPage),
  ],
})
export class DislikeListPageModule {}
