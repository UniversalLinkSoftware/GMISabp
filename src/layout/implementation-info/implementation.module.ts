import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ImplementationRoutingModule } from './implementation-routing.module';
import { ImplementationInfoComponent } from './implementation-info.component';
import { PageHeaderModule } from './../../shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImplementationViewComponent } from './implementation-view/implementation-view.component';

@NgModule({
    // tslint:disable-next-line:whitespace
    imports: [CommonModule, ReactiveFormsModule, FormsModule ,ImplementationRoutingModule, PageHeaderModule],
    declarations: [ImplementationInfoComponent, ImplementationViewComponent]
})
export class ImplementationModule {}
