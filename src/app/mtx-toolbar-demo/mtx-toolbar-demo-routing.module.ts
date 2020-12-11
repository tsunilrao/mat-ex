import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtxToolbarDemoComponent } from './mtx-toolbar-demo.component';

const routes: Routes = [
  { path: "", component: MtxToolbarDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtxToolbarDemoRoutingModule { }
