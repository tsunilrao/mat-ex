import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtxTextDemoComponent } from './mtx-text-demo.component';

const routes: Routes = [
  { path: "", component: MtxTextDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtxTextDemoRoutingModule { }
