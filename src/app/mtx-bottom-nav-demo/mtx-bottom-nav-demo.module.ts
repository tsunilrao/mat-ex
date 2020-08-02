import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxBottomNavDemoRoutingModule } from './mtx-bottom-nav-demo-routing.module';
import { MtxBottomNavDemoComponent } from './mtx-bottom-nav-demo.component';
import { MtxBottomNavDemoInteractiveDemoComponent } from './mtx-bottom-nav-demo-interactive-demo/mtx-bottom-nav-demo-interactive-demo.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MtxPageModule, MtxAppBarModule, MtxBottomNavModule } from 'projects/mat-ex/src/public-api';


@NgModule({
  declarations: [MtxBottomNavDemoComponent, MtxBottomNavDemoInteractiveDemoComponent],
  imports: [
    CommonModule, MtxBottomNavDemoRoutingModule,
    MtxPageModule, MtxBottomNavModule, MtxAppBarModule,
    MatSelectModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatTabsModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class MtxBottomNavDemoModule { }
