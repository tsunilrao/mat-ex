import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", loadChildren: () => import('./mtx-demo/mtx-demo.module').then(m => m.MtxDemoModule) },
  { path: "app-bar", loadChildren: () => import('./mtx-app-bar-demo/mtx-app-bar-demo.module').then(m => m.MtxAppBarDemoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
