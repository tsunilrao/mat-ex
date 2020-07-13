import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MtxAppBarDemoRoutingModule } from './mtx-app-bar-demo-routing.module';
import { MtxAppBarDemoComponent } from './mtx-app-bar-demo.component';
import { SharedModule } from '../shared/shared.module';
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [MtxAppBarDemoComponent],
  imports: [
    CommonModule, SharedModule,
    MtxAppBarDemoRoutingModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTabsModule
  ]
})
export class MtxAppBarDemoModule { }
