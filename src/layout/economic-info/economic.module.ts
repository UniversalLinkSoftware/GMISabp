import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EconomicRoutingModule } from './economic-routing.module';
import { EconomicInfoComponent } from './economic-info.component';
import { PageHeaderModule } from './../../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { EconomicViewComponent } from './economic-view/economic-view.component';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, EconomicRoutingModule, PageHeaderModule],
    declarations: [EconomicInfoComponent, EconomicViewComponent]
})
export class EconomicModule {}
