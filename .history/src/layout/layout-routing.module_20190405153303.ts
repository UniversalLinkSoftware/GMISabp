import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { SocialService } from './social-info/social.service';
import { ImplementationService } from './implementation-info/implementation.service';
import { GroundwaterService } from './groundwater-info/groundwater.service';
import { ProjectService } from './project-info/project.service';
import { EconomicService } from './economic-info/economic.service';
import { EngineeringService } from './engineering-info/engineering.service';
import { LocationService } from './location/location.service';
import { ToastrService } from 'ngx-toastr';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
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
            { path: 'report', loadChildren: './report/report.module#ReportModule' },
            { path: 'projectmgmt', loadChildren: './projectmgmt/project-mgmt.module#ProjectMgmtModule' }
            // { path: 'riverhydrology', loadChildren: './engineering-info/groundwater.module#GroundwaterModule' },
                       ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    // tslint:disable-next-line:max-line-length
    providers:[SocialService,ImplementationService,GroundwaterService,ProjectService,EconomicService,EngineeringService,LocationService,ToastrService]
})
export class LayoutRoutingModule {}
