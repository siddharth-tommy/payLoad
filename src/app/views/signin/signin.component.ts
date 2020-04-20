import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AppService } from 'app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar, { static: false }) progressBar: MatProgressBar;
  @ViewChild(MatButton, { static: false }) submitButton: MatButton;

  signinForm: FormGroup;

  constructor(public service: AppService, public router: Router) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl(false)
    })
  }
  username;
  password;
  signin() {
    // const signinData = this.signinForm.value

    //if(this.username == 'admin' && this.password == 'admin') {
      let data = { 'UserName': this.username, 'Password': this.password };
      let url = 'login';
      this.submitButton.disabled = true;
      this.progressBar.mode = 'indeterminate';
      this.service.post(url, data).subscribe(
        (data: any) => {
          if (data.status) {
            localStorage.setItem('payloadtoken', data.Data[0].sessionId);
            this.router.navigate(['/Dashboard']);
            this.service.toaster('Welcome','Success!');
          } else {
  
          }
        }, error => {
          this.submitButton.disabled = false;
          console.log(error);
        });
    // } else {
    //   this.service.toaster('Error','Invalid username or password');
    // }
    }
}
