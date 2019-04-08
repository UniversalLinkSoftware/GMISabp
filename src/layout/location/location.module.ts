import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { PageHeaderModule } from './../../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { LocationViewComponent } from './location-view/location-view.component';

@NgModule({
    imports: [CommonModule, LocationRoutingModule, PageHeaderModule, ReactiveFormsModule],
    declarations: [LocationComponent, LocationViewComponent]
})
export class LocationModule {}
