import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtxIconDemoComponent } from './mtx-icon-demo.component';

const routes: Routes = [
  {path:"", component: MtxIconDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtxIconDemoRoutingModule { }
