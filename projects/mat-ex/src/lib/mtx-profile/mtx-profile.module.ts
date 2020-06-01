import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MtxProfileComponent } from './mtx-profile/mtx-profile.component';
import { MtxProfileTitleComponent } from './mtx-profile-title/mtx-profile-title.component';
import { MtxProfileSubtitleComponent } from './mtx-profile-subtitle/mtx-profile-subtitle.component';
import { MtxProfilePhotoComponent } from './mtx-profile-photo/mtx-profile-photo.component';
import { MtxProfileHeaderComponent } from './mtx-profile-header/mtx-profile-header.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    MtxProfileComponent, MtxProfileTitleComponent, MtxProfileSubtitleComponent, 
    MtxProfilePhotoComponent, MtxProfileHeaderComponent
  ],
  imports: [
    CommonModule, MatIconModule
  ],
  exports: [
    MtxProfileComponent, MtxProfileTitleComponent, MtxProfileSubtitleComponent, 
    MtxProfilePhotoComponent, MtxProfileHeaderComponent
  ]
})
export class MtxProfileModule { }
