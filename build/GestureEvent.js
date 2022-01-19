"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GestureEventTypeEnum;
(function (GestureEventTypeEnum) {
    GestureEventTypeEnum[GestureEventTypeEnum["tap"] = 0] = "tap";
    GestureEventTypeEnum[GestureEventTypeEnum["longpress"] = 1] = "longpress";
    GestureEventTypeEnum[GestureEventTypeEnum["pinch"] = 2] = "pinch";
    GestureEventTypeEnum[GestureEventTypeEnum["rotate"] = 3] = "rotate";
    GestureEventTypeEnum[GestureEventTypeEnum["swipe"] = 4] = "swipe";
    GestureEventTypeEnum[GestureEventTypeEnum["fling"] = 5] = "fling";
    GestureEventTypeEnum[GestureEventTypeEnum["pan"] = 6] = "pan";
    GestureEventTypeEnum[GestureEventTypeEnum["drag"] = 7] = "drag";
    GestureEventTypeEnum[GestureEventTypeEnum["doubletap"] = 8] = "doubletap";
})(GestureEventTypeEnum || (GestureEventTypeEnum = {}));
class GestureEvent extends TouchEvent {
    constructor(type, touchEvent) {
        super(type, {
            touches: Array.from(touchEvent.touches),
            targetTouches: Array.from(touchEvent.targetTouches),
            changedTouches: Array.from(touchEvent.changedTouches),
            ctrlKey: touchEvent.ctrlKey,
            shiftKey: touchEvent.shiftKey,
            altKey: touchEvent.altKey,
            metaKey: touchEvent.metaKey
        });
        this.gestureTarget = touchEvent.touches[0].target ? touchEvent.touches[0].target : window;
    }
}
exports.default = GestureEvent;
//# sourceMappingURL=GestureEvent.js.map