import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxPageComponent } from './mtx-page/mtx-page.component';
import { MtxPageHeaderComponent } from './mtx-page-header/mtx-page-header.component';
import { MtxPageContentComponent } from './mtx-page-content/mtx-page-content.component';
import { MtxPageFooterComponent } from './mtx-page-footer/mtx-page-footer.component';



@NgModule({
  declarations: [MtxPageComponent, MtxPageHeaderComponent, MtxPageContentComponent, MtxPageFooterComponent],
  imports: [
    CommonModule
  ],
  exports: [MtxPageComponent, MtxPageHeaderComponent, MtxPageContentComponent, MtxPageFooterComponent]
})
export class MtxPageModule { }
