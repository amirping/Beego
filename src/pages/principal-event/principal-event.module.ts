import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipalEventPage } from './principal-event';

@NgModule({
  declarations: [
    PrincipalEventPage,
  ],
  imports: [
    IonicPageModule.forChild(PrincipalEventPage),
  ],
})
export class PrincipalEventPageModule {}
