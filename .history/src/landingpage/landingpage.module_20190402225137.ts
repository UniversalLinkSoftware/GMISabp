import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage.component';
import { LandingpageRoutingModule } from './landingpage-routing.module';


@NgModule({
    imports: [CommonModule,
        LandingpageRoutingModule],
    declarations: [LandingpageComponent]
})
export class LandingpageModule {}
