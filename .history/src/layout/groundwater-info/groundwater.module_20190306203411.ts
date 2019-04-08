import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageHeaderModule } from '../../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { GroundwaterRoutingModule } from './groundwater-info.routing.module';
import { GroundwaterInfoComponent } from './groundwater-info.component';


@NgModule({
    imports: [CommonModule, GroundwaterRoutingModule, PageHeaderModule, ReactiveFormsModule],
    declarations: [GroundwaterInfoComponent]
})
export class GroundwaterModule {}
