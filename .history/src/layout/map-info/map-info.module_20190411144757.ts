import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MapInfoComponent } from './map-info.component';
import { MapinfoRoutingModule } from './map-info-routing.module';
import { PmapComponent } from 'account/Pmap/pmap.component';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MapinfoRoutingModule
    
  ],
  declarations: [MapInfoComponent, PmapComponent]
})
export class MapinfoModule { }
