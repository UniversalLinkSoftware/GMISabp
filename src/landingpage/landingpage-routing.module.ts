import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingpageComponent } from './landingpage.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: LandingpageComponent,
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class LandingpageRoutingModule { }