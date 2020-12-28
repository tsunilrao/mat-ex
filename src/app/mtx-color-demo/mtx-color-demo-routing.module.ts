import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtxColorDemoComponent } from './mtx-color-demo.component';

const routes: Routes = [
  { path: "", component: MtxColorDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtxColorDemoRoutingModule { }
