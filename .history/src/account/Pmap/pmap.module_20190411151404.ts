import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


import {FormsModule} from '@angular/forms';
import { PmapComponent } from './pmap.component';
import { PmapRoutingModule } from './pmap-routing.module';

@NgModule({
  declarations: [
    PmapComponent
  ],
  imports: [
    BrowserModule,
    PmapRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
 
})
export class PmapModule { }
