import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtxBottomNavDemoComponent } from './mtx-bottom-nav-demo.component';


const routes: Routes = [
  { path: "", component: MtxBottomNavDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtxBottomNavDemoRoutingModule { }
