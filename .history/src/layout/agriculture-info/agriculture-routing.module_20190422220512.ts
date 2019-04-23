import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgricultureInfoComponent } from './agriculture-info.component';
import { AgricultureViewComponent } from './agriculture-view/agriculture-view.component';

const routes: Routes = [
    {
        path: '', component: AgricultureViewComponent
    },
    // {
    //     path: 'agriculture-edit/:id', component: AgricultureInfoComponent
    // },
    // {
    //     path: 'agriculture-new', component: AgricultureInfoComponent
    // }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgricultureRoutingModule {
}
