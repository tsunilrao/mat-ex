import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MtxPageModule, MtxAppBarModule, MtxScrollviewModule, MtxProfileModule, MtxContainerModule, MtxTextModule, MtxToolbarModule } from 'projects/mat-ex/src/public-api';
import { HomeHeroSectionComponent } from './home-hero-section/home-hero-section.component';
import { HomeFeaturesSectionComponent } from './home-features-section/home-features-section.component';
import { HomeComponentsSectionComponent } from './home-components-section/home-components-section.component';
import { HomeGuidesSectionComponent } from './home-guides-section/home-guides-section.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { FooterSectionModule } from '../shared/footer-section/footer-section.module';
import { HomeUtilitiesSectionComponent } from './home-utilities-section/home-utilities-section.component';
import { HomeScrollviewCardModule } from './home-scrollview-card/home-scrollview-card.module';


@NgModule({
  declarations: [
    HomeComponent, HomeHeroSectionComponent, HomeFeaturesSectionComponent,
    HomeComponentsSectionComponent, HomeGuidesSectionComponent, HomeUtilitiesSectionComponent
  ],
  imports: [
    CommonModule, HomeRoutingModule, FooterSectionModule,
    MtxPageModule, MtxAppBarModule, MtxScrollviewModule, MtxProfileModule, MtxContainerModule, 
    MtxToolbarModule, MtxTextModule,
    MatButtonModule, MatIconModule, MatDividerModule, MatTooltipModule, MatCardModule,
    HomeScrollviewCardModule
  ]
})
export class HomeModule { }
