
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin.component';



export const routes: Routes = [
  { path: '', component: SigninComponent, data: { title: 'Signin' } }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SigninRoutingModule { }