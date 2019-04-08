// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



// @NgModule decorator with its metadata
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],

})
export class LandingpageModule { }