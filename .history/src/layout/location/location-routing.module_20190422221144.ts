import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location.component';
import { LocationViewComponent } from './location-view/location-view.component';
const routes: Routes = [
    {
        path: '', component: LocationViewComponent
    },
    {
        path: 'location-edit/:id', component: LocationComponent
    },
    {
        path: 'location-new', component: LocationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LocationRoutingModule {
}
