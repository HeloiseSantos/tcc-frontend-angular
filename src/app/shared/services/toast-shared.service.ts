import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HorizontalPosition } from "../enums/horizontal-position.enum";
import { PanelClass } from "../enums/panel-class.enum";
import { VerticalPosition } from "../enums/vertical-position.enum";
import ToastConfigSharedModel from "../models/toast-config.model";

@Injectable({
    providedIn: 'root',
})
export class ToastSharedService {
    private _toastConfig: ToastConfigSharedModel = {
        verticalPosition: VerticalPosition.top,
        horizontalPosition: HorizontalPosition.right,
        duration: 5000,
        panelClass: PanelClass.success
    };

    constructor(private _matSnackBar: MatSnackBar) { }

    public open(message: string, labelAction: string, config: ToastConfigSharedModel) {
        this._matSnackBar.open(message, labelAction, config)
    }

    public openSuccess(message: string) {
        this._toastConfig.panelClass = PanelClass.success;

        this.open(message, 'OK', this._toastConfig);
    }

    public openWarning(message: string) {
        this._toastConfig.panelClass = PanelClass.warning;

        this.open(message, 'OK', this._toastConfig);
    }

    public openError(message: string) {
        this._toastConfig.panelClass = PanelClass.error;

        this.open(message, 'OK', this._toastConfig);
    }
}