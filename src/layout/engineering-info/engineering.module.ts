import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineeringRoutingModule } from './engineering-routing.module';
import { EngineeringInfoComponent } from './engineering-info.component';
import { PageHeaderModule } from './../../shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EngineeringViewComponent } from './engineering-view/engineering-view.component';

@NgModule({
    imports: [FormsModule, CommonModule, EngineeringRoutingModule, PageHeaderModule, ReactiveFormsModule],
    declarations: [EngineeringInfoComponent, EngineeringViewComponent]
})
export class EngineeringModule {}
