import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EconomicRoutingModule } from './economic-routing.module';
import { EconomicInfoComponent } from './economic-info.component';
import { PageHeaderModule } from '../../shared/modules';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, EconomicRoutingModule, PageHeaderModule],
    declarations: [EconomicInfoComponent]
})
export class EconomicModule {}
