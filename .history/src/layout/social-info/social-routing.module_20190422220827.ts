import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialInfoComponent } from './social-info.component';
import { SocialViewComponent } from './social-view/social-view.component';

const routes: Routes = [
    {
        path: '', component: SocialInfoComponent
    },
    {
        path: 'social-edit/:id', component: SocialInfoComponent
    },
    {
        path: 'social-edit/:farms.id', component: SocialInfoComponent
    },
    {
        path: 'social-new', component: SocialInfoComponent
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SocialRoutingModule {
}
