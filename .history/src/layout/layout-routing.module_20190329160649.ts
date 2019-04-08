import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'project', loadChildren: './layout/project-info/project.module#ProjectModule' },
            { path: 'social', loadChildren: './layout/social-info/social.module#SocialModule' },
            { path: 'agriculture', loadChildren: './layout/agriculture-info/agriculture-info.module#AgricultureModule' },
            { path: 'engineering', loadChildren: './layout/engineering-info/engineering.module#EngineeringModule' },
            { path: 'economic', loadChildren: './layout/economic-info/economic.module#EconomicModule' },
            { path: 'location', loadChildren: './layout/location/location.module#LocationModule' },
            { path: 'implementation', loadChildren: './layout/implementation-info/implementation.module#ImplementationModule' },
            { path: 'groundwater', loadChildren: './layout/groundwater-info/groundwater.module#GroundwaterModule' },
            { path: 'map', loadChildren: './layout/map-info/map-info.module#MapinfoModule' },
            { path: 'report', loadChildren: './layout/report/report.module#ReportModule' }
            // { path: 'riverhydrology', loadChildren: './engineering-info/groundwater.module#GroundwaterModule' },
                       ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
