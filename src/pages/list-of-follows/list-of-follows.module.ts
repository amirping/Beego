import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfFollowsPage } from './list-of-follows';

@NgModule({
  declarations: [
    ListOfFollowsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListOfFollowsPage),
  ],
})
export class ListOfFollowsPageModule {}
