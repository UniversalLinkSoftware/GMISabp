import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectInfoComponent } from './project-info.component';
import { ProjectViewComponent } from './project-view/project-view.component';

const routes: Routes = [
    {
        path: '', component: ProjectViewComponent
    },
    {
      path: 'projectinfo-edit/:id', component: ProjectInfoComponent
  },
  {
      path: 'projectinfo-new', component: ProjectInfoComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {
}
