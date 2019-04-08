import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ImplementationRoutingModule } from './implementation-routing.module';
import { ImplementationInfoComponent } from './implementation-info.component';
import { PageHeaderModule } from '../../shared/modules';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule,ReactiveFormsModule, ImplementationRoutingModule, PageHeaderModule],
    declarations: [ImplementationInfoComponent]
})
export class ImplementationModule {}
