import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroundwaterInfoComponent } from './groundwater-info.component';
import { GroundwaterViewComponent } from './groundwater-view/groundwater-view.component';


const routes: Routes = [
    {
        path: '', component: GroundwaterViewComponent
    },
    {
        path: 'groundwater-edit/:id', component: GroundwaterInfoComponent
    },
    {
        path: 'groundwater-new', component: GroundwaterInfoComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GroundwaterRoutingModule {
}
