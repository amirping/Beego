import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { MyTastesPage } from "./my-tastes";
import { HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { HammerVertical } from "../../providers/hammerConfig/HammerVertical";

@NgModule({
  declarations: [MyTastesPage],
  imports: [IonicPageModule.forChild(MyTastesPage)],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerVertical
    }
  ]
})
export class MyTastesPageModule {}
