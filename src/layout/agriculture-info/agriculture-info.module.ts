import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageHeaderModule } from '../../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { AgricultureInfoComponent } from './agriculture-info.component';
import { AgricultureRoutingModule } from './agriculture-routing.module';
import { AgricultureViewComponent } from './agriculture-view/agriculture-view.component';

@NgModule({
    imports: [CommonModule, AgricultureRoutingModule, PageHeaderModule, ReactiveFormsModule],
    declarations: [AgricultureInfoComponent, AgricultureViewComponent]
})
export class AgricultureModule {}
