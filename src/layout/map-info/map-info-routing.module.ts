import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapInfoComponent } from './map-info.component';




const routes: Routes = [
    {
        path: '', component: MapInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MapinfoRoutingModule {
}
