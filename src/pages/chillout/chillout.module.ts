import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ChilloutPage } from "./chillout";

@NgModule({
  declarations: [ChilloutPage],
  imports: [IonicPageModule.forChild(ChilloutPage)],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChilloutPageModule {}
