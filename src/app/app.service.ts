import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBarConfig } from "@angular/material";
@Injectable()
export class AppService {
    constructor(private http: HttpClient, public snackBar: MatSnackBar) {

    }

    setAutoHide: boolean = true;
    autoHide: number = 2000;
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    logout() {
        localStorage.removeItem('payloadtoken');
    }

    get(url) {
        return this.http.get(url);
    }

    post(url, data) {
        return this.http.post(url, data);
    }
    put(url, data) {
        return this.http.put(url, data);
    }
    getFile(url) {
        return this.http.get(url, { responseType: "arraybuffer" });
    }
    delete(url) {
        return this.http.delete(url);
    }
    toaster(msg, label) {
        let config = new MatSnackBarConfig();
        config.verticalPosition = this.verticalPosition;
        config.horizontalPosition = this.horizontalPosition;
        config.duration = this.setAutoHide ? this.autoHide : 0;
        //config.extraClasses = this.addExtraClass ? ['test'] : undefined;
        this.snackBar.open(msg, label, config);
    }
}