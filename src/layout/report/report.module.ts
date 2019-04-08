import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { ReportComponent } from './report.component';
import { ReportRoutingModule } from './report-routing.module';

@NgModule({
    imports: [CommonModule, ReportRoutingModule, PageHeaderModule],
    declarations: [ReportComponent]
})
export class ReportModule {}
