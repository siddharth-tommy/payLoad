import { OnInit, Component, Inject, ChangeDetectionStrategy } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ViewEncapsulation } from "@angular/compiler/src/core";

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
    ngOnInit() {

    }
    email;
    action;
    phone;
    contactForm: FormGroup;
    constructor(
        public matDialogRef: MatDialogRef<UserComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: any,
        private _formBuilder: FormBuilder
    ) {
        this.contactForm = this._formBuilder.group({
            email: ['', Validators.required],
            phone: ['', Validators.required],
        });
    }
   
}