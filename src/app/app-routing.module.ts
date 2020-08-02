import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", loadChildren: () => import('./mtx-demo/mtx-demo.module').then(m => m.MtxDemoModule) },
  { path: "mtx-app-bar", loadChildren: () => import('./mtx-app-bar-demo/mtx-app-bar-demo.module').then(m => m.MtxAppBarDemoModule) },
  { path: "mtx-bottom-nav", loadChildren: () => import('./mtx-bottom-nav-demo/mtx-bottom-nav-demo.module').then(m => m.MtxBottomNavDemoModule) },
  { path: "mtx-page", loadChildren: () => import('./mtx-page-demo/mtx-page-demo.module').then(m => m.MtxPageDemoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
