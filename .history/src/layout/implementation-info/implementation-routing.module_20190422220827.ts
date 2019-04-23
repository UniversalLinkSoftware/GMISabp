import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImplementationInfoComponent } from './implementation-info.component';
import { ImplementationViewComponent } from './implementation-view/implementation-view.component';


const routes: Routes = [
    {
        path: '', component: ImplementationInfoComponent
    },
    {
        path: 'implementation-edit/:id', component: ImplementationInfoComponent
    },
    {
        path: 'implementation-new', component: ImplementationInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImplementationRoutingModule {
}
