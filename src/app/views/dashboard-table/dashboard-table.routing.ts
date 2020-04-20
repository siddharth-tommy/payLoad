import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardtableComponent } from './dashboard-table.component';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'app/shared/components/shared-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';

export const TablesRoutes: Routes = [
  { path: '', component: DashboardtableComponent, data: { title: 'Dashboardtable' } },
  
];
@NgModule({
  imports: [
    RouterModule.forChild(TablesRoutes),
    SharedMaterialModule,
    CommonModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    SharedComponentsModule,
    FlexLayoutModule
  ],
  exports: [RouterModule]
})
export class DashboardTableRoutingModule { }
