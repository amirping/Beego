import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EspaceHomePage } from './espace-home';

@NgModule({
  declarations: [
    EspaceHomePage,
  ],
  imports: [
    IonicPageModule.forChild(EspaceHomePage),
  ],
})
export class EspaceHomePageModule {}
