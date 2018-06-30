import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalHistoryPage } from './personal-history';

@NgModule({
  declarations: [
    PersonalHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalHistoryPage),
  ],
})
export class PersonalHistoryPageModule {}
