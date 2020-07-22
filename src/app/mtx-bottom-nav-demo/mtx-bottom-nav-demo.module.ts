import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxBottomNavDemoRoutingModule } from './mtx-bottom-nav-demo-routing.module';
import { MtxBottomNavDemoComponent } from './mtx-bottom-nav-demo.component';
import { MtxBottomNavModule } from 'projects/mat-ex/src/lib/mtx-bottom-nav/mtx-bottom-nav.module';
import { SharedModule } from '../shared/shared.module';
import { MtxBottomNavDemoInteractiveDemoComponent } from './mtx-bottom-nav-demo-interactive-demo/mtx-bottom-nav-demo-interactive-demo.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [MtxBottomNavDemoComponent, MtxBottomNavDemoInteractiveDemoComponent],
  imports: [
    CommonModule, SharedModule,
    MtxBottomNavDemoRoutingModule, MtxBottomNavModule, 
    MatSelectModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatTabsModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class MtxBottomNavDemoModule { }
