import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EconomicInfoComponent } from './economic-info.component';
import { EconomicViewComponent } from './economic-view/economic-view.component';

const routes: Routes = [
    {
        path: '', component: EconomicViewComponent
    },
    {
        path: 'economic-edit/:id', component: EconomicInfoComponent
    },
    {
        path: 'economic-new', component: EconomicInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EconomicRoutingModule {
}
