import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { PageHeaderModule } from '../../shared/modules';

@NgModule({
    imports: [CommonModule, LocationRoutingModule, PageHeaderModule],
    declarations: [LocationComponent]
})
export class LocationModule {}
