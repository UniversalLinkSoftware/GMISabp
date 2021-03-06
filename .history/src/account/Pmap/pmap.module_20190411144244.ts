import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PmapComponent
  ],
  imports: [
    BrowserModule,
    PmapRoutingModule,
    LeafletModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
 
})
export class PmapModule { }
