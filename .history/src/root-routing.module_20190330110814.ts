import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LayoutComponent } from 'layout/layout.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
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
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'project', loadChildren: './project-info/project.module#ProjectModule' },
            { path: 'social', loadChildren: './social-info/social.module#SocialModule' },
            { path: 'agriculture', loadChildren: './agriculture-info/agriculture-info.module#AgricultureModule' },
            { path: 'engineering', loadChildren: './engineering-info/engineering.module#EngineeringModule' },
            { path: 'economic', loadChildren: './economic-info/economic.module#EconomicModule' },
            { path: 'location', loadChildren: './location/location.module#LocationModule' },
            { path: 'implementation', loadChildren: './implementation-info/implementation.module#ImplementationModule' },
            { path: 'groundwater', loadChildren: './groundwater-info/groundwater.module#GroundwaterModule' },
            { path: 'map', loadChildren: './map-info/map-info.module#MapinfoModule' },
            { path: 'report', loadChildren: './report/report.module#ReportModule' }
            // { path: 'riverhydrology', loadChildren: './engineering-info/groundwater.module#GroundwaterModule' },
                       ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [ToastrService]
})
export class RootRoutingModule { }
