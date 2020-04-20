import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule, MatPaginatorModule, MatTableModule, MatSortModule, MatBadgeModule, MatListModule, MatIconModule, MatButtonModule, MatCardModule, MatMenuModule, MatSlideToggleModule, MatGridListModule, MatProgressBarModule, MatToolbarModule, MatFormFieldModule, MatProgressSpinnerModule, MatTabsModule, MatCheckboxModule, MatRadioModule
 } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DashboardTableRoutingModule } from './userdetails.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NumberDirective } from '../directive/numbers-only.directive';
import { UsersDetailsComponent } from './userdetails.component';
import { CallLogComponent } from './call-log/call-log.component';
import { SmsLogComponent } from './sms-log/sms-log.component';
import { CallRecordComponent } from './call-record/call-record.component';

@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    NgxDatatableModule,
    DashboardTableRoutingModule,
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
    MatProgressSpinnerModule,
    MatTabsModule,
    MatCheckboxModule,
    MatRadioModule,
    SharedModule
  ],
  declarations: [UsersDetailsComponent, CallLogComponent, SmsLogComponent, CallRecordComponent ],
  entryComponents: []
})
export class UserDetailsModule { }
