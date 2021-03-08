import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxFormComponent } from './mtx-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [MtxFormComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatInputModule, MatFormFieldModule, MatCheckboxModule
  ],
  exports: [MtxFormComponent]
})
export class MtxFormModule { }
