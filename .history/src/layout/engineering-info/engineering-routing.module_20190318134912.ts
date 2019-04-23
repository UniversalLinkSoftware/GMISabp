import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EngineeringInfoComponent } from './engineering-info.component';
import { EngineeringViewComponent } from './engineering-view/engineering-view.component';

const routes: Routes = [
    {
        path: '', component: EngineeringViewComponent
    },
    {
        path: 'engineering-edit/:id', component: EngineeringInfoComponent
    },
    {
        path: 'engineering-new', component: EngineeringInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EngineeringRoutingModule {
}
