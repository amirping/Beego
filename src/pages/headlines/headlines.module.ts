import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeadlinesPage } from './headlines';

@NgModule({
  declarations: [
    HeadlinesPage,
  ],
  imports: [
    IonicPageModule.forChild(HeadlinesPage),
  ],
})
export class HeadlinesPageModule {}
