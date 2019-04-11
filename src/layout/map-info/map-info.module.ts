import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MapInfoComponent } from './map-info.component';
import { MapinfoRoutingModule } from './map-info-routing.module';
import { PmapComponent } from 'account/Pmap/pmap.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MapinfoRoutingModule,
    LeafletModule
    
    
  ],
  declarations: [MapInfoComponent, PmapComponent]
})
export class MapinfoModule { }
