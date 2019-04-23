import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppRoutingModule } from './app-routing.module';

import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    PmapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
 
})
export class PmapModule { }
