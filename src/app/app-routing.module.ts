import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: "", loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: "mtx-app-bar", loadChildren: () => import('./mtx-app-bar-demo/mtx-app-bar-demo.module').then(m => m.MtxAppBarDemoModule) },
  { path: "mtx-dialog", loadChildren: () => import('./mtx-dialog-demo/mtx-dialog-demo.module').then(m => m.MtxDialogDemoModule) },
  { path: "mtx-icon", loadChildren: () => import('./mtx-icon-demo/mtx-icon-demo.module').then(m => m.MtxIconDemoModule) },
  { path: "toolbar", loadChildren: () => import('./toolbar/toolbar.module').then(m => m.ToolbarModule) },
  { path: "mtx-toolbar", loadChildren: () => import('./mtx-toolbar-demo/mtx-toolbar-demo.module').then(m => m.MtxToolbarDemoModule) },
  { path: "mtx-bottom-nav", loadChildren: () => import('./mtx-bottom-nav-demo/mtx-bottom-nav-demo.module').then(m => m.MtxBottomNavDemoModule) },
  { path: "mtx-page", loadChildren: () => import('./mtx-page-demo/mtx-page-demo.module').then(m => m.MtxPageDemoModule) },
  { path: "mtx-text", loadChildren: () => import('./mtx-text-demo/mtx-text-demo.module').then(m => m.MtxTextDemoModule) },
  { path: "mtx-color", loadChildren: () => import('./mtx-color-demo/mtx-color-demo.module').then(m => m.MtxColorDemoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
