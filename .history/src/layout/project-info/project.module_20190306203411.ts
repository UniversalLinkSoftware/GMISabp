import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { PageHeaderModule } from './../../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectInfoComponent } from './project-info.component';
import { ProjectRoutingModule } from './project-routing.module';

@NgModule({
    imports: [CommonModule, ProjectRoutingModule, PageHeaderModule, ReactiveFormsModule],
    declarations: [ProjectInfoComponent]
})
export class ProjectModule {}
