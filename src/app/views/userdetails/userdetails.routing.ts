import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedMaterialModule } from 'app/shared/shared-material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedComponentsModule } from 'app/shared/components/shared-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsersDetailsComponent } from './userdetails.component';

export const TablesRoutes: Routes = [
  { path: '', component: UsersDetailsComponent, data: { title: 'userdetails' } },
  
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
