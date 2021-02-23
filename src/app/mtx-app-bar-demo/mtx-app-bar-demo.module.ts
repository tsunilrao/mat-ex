import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxAppBarDemoRoutingModule } from './mtx-app-bar-demo-routing.module';
import { MtxAppBarDemoComponent } from './mtx-app-bar-demo.component';
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MtxAppBarModule, MtxPageModule, MtxContainerModule, MtxCardModule, MtxDrawerModule, MtxToolbarModule, MtxSidesheetModule, MtxTextModule, MtxCodeblockModule } from 'projects/mat-ex/src/public-api';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FooterSectionModule } from '../shared/footer-section/footer-section.module';
import { MobileHeaderModule } from '../shared/mobile-header/mobile-header.module';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [MtxAppBarDemoComponent],
  imports: [
    CommonModule, MtxAppBarDemoRoutingModule, FooterSectionModule, MobileHeaderModule,
    MtxAppBarModule, MtxPageModule, MtxTextModule, MtxContainerModule, MtxCardModule, MtxToolbarModule,
    MtxSidesheetModule, MtxDrawerModule, MtxCodeblockModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatMenuModule,
    MatTabsModule, MatIconModule, MatButtonModule, MatCardModule, MatTooltipModule, MatDividerModule
  ]
})
export class MtxAppBarDemoModule { }
