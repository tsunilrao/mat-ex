import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterSectionModule } from '../shared/footer-section/footer-section.module';
import { MtxPageModule, MtxAppBarModule, MtxToolbarModule, MtxCardModule, MtxContainerModule } from 'projects/mat-ex/src/public-api';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule, ToolbarRoutingModule, FooterSectionModule,
    MtxPageModule, MtxAppBarModule, MtxToolbarModule, MtxCardModule, MtxContainerModule,
    MatButtonModule, MatIconModule
  ]
})
export class ToolbarModule { }
