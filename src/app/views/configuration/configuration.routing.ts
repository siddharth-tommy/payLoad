import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigurationComponent } from './configuration.component';


export const Configuration: Routes = [
  { path: '', component: ConfigurationComponent, data: { title: 'Configuration' } }
];
@NgModule({
  imports: [
    RouterModule.forChild(Configuration)
  ],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
