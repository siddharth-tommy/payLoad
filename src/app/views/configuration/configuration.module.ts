import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './configuration.component';
import { ConfigurationRoutingModule } from './configuration.routing';
import { MatInputModule, MatListModule, MatIconModule, MatButtonModule, MatCardModule, MatMenuModule, MatSlideToggleModule, MatGridListModule, MatProgressBarModule, MatToolbarModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatCheckboxModule, MatSelectModule, MatProgressSpinnerModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  imports: [
    ConfigurationRoutingModule,
    CommonModule,
    MatInputModule,
    FormsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatProgressBarModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatFormFieldModule,
    ReactiveFormsModule ,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatProgressSpinnerModule
  ],
  declarations: [ConfigurationComponent]
})
export class ConfigurationModule { }
