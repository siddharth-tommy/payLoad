import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { SigninRoutingModule } from './signin.routing';
import { SigninComponent } from './signin.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';




@NgModule({
  imports: [
    SigninRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    PerfectScrollbarModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyBNcjxo_35qnEG17dQvvftWa68eZWepYE0' }),
    
  ],
  declarations: [SigninComponent]
})
export class SigninModule { }

