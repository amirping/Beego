import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser";
export class HammerVertical extends HammerGestureConfig {
  overrides = <any>{
    /*pan: { direction: Hammer.DIRECTION_All },
            swipe: { direction: Hammer.DIRECTION_VERTICAL }, */
    swipe: { direction: 30 },
    pan: {
      direction: 30
    }
  };
}
