import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtxDialogDemoComponent } from './mtx-dialog-demo/mtx-dialog-demo.component';


const routes: Routes = [
  {path: '', component: MtxDialogDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MtxDialogDemoRoutingModule { }
