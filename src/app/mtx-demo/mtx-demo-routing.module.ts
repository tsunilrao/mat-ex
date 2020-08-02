import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtxDemoComponent } from './mtx-demo/mtx-demo.component';


const routes: Routes = [
  { path: "", component: MtxDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtxDemoRoutingModule { }
