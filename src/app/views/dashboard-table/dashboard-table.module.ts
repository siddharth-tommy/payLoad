import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule, MatPaginatorModule, MatTableModule, MatSortModule, MatBadgeModule, MatListModule, MatIconModule, MatButtonModule, MatCardModule, MatMenuModule, MatSlideToggleModule, MatGridListModule, MatProgressBarModule, MatToolbarModule, MatFormFieldModule, MatProgressSpinnerModule
 } from '@angular/material';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DashboardTableRoutingModule } from './dashboard-table.routing';

import { DashboardtableComponent } from './dashboard-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserComponent } from './user/user.component';
import { NumberDirective } from '../directive/numbers-only.directive';


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
    MatProgressSpinnerModule
  ],
  declarations: [DashboardtableComponent,UserComponent,NumberDirective ],
  entryComponents: [UserComponent]
})
export class DatabashTableModule { }
