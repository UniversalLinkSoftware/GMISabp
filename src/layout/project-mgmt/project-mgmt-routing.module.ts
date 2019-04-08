import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectMgmtComponent } from './project-mgmt.component';

const routes: Routes = [
    {
        path: '', component: ProjectMgmtComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectMgmtRoutingModule {
}


