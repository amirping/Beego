import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EspacesPage } from './espaces';

@NgModule({
  declarations: [
    EspacesPage,
  ],
  imports: [
    IonicPageModule.forChild(EspacesPage),
  ],
})
export class EspacesPageModule {}
