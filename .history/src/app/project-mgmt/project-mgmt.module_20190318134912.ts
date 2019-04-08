import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectMgmtRoutingModule } from './project-mgmt-routing.module';
import { ProjectMgmtComponent } from './project-mgmt.component';
import { HeaderComponent } from '../layout/components/header/header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageHeaderModule } from '../shared';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    ProjectMgmtRoutingModule,
    ReactiveFormsModule,
    PageHeaderModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ProjectMgmtComponent]
})
export class ProjectMgmtModule { }
