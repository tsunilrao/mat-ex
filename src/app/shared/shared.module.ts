import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MtxPageModule, MtxAppBarModule, MtxBottomNavModule } from 'projects/mat-ex/src/public-api';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatIconModule, MatButtonModule, MatCardModule,
    MtxPageModule, MtxAppBarModule, MtxBottomNavModule
  ],
  exports: [
    MatIconModule, MatButtonModule, MatCardModule,
    MtxPageModule, MtxAppBarModule, MtxBottomNavModule
  ]
})
export class SharedModule { }
