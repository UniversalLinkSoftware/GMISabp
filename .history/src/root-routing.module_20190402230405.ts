import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

const routes: Routes = [
    { path: '', redirectTo: '/layout/dashboard', pathMatch: 'full' },
    {
        path: 'account',
        loadChildren: 'account/account.module#AccountModule', // Lazy load account module
        data: { preload: true }
    },
    {
        path: 'app',
        loadChildren: 'app/app.module#AppModule', // Lazy load account module
        data: { preload: true }
    },
    {
        path: 'layout',
        loadChildren: 'layout/layout.module#LayoutModule', // Lazy load account module
        data: { preload: true }
    },
    {
        path: 'landingpage',
        loadChildren: 'landingpage/landingpage.module#LandingpageModule', // Lazy load account module
        data: { preload: true }
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [ToastrService]
})
export class RootRoutingModule { }
