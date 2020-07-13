import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtxAppBarDemoComponent } from './mtx-app-bar-demo.component';


const routes: Routes = [
  { path: "", component: MtxAppBarDemoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtxAppBarDemoRoutingModule { }
