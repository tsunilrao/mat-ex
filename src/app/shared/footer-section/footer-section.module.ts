import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterSectionComponent } from './footer-section.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterSectionComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [FooterSectionComponent]
})
export class FooterSectionModule { }
