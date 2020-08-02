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
import { MtxAppBarModule, MtxPageModule } from 'projects/mat-ex/src/public-api';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [MtxAppBarDemoComponent],
  imports: [
    CommonModule, MtxAppBarDemoRoutingModule,
    MtxAppBarModule, MtxPageModule,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, MatMenuModule,
    MatTabsModule, MatIconModule, MatButtonModule
  ]
})
export class MtxAppBarDemoModule { }
