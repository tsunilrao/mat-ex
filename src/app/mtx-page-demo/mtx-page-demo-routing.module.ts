import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtxPageDemoComponent } from './mtx-page-demo.component';


const routes: Routes = [
  { path: "", component: MtxPageDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtxPageDemoRoutingModule { }
