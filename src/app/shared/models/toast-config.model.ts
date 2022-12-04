import { HorizontalPosition } from "../enums/horizontal-position.enum";
import { PanelClass } from "../enums/panel-class.enum";
import { VerticalPosition } from "../enums/vertical-position.enum";

export default class ToastConfigSharedModel {
    verticalPosition: VerticalPosition;
    duration: number;
    horizontalPosition: HorizontalPosition;
    panelClass: PanelClass;
}