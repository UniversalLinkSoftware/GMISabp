import { SocialViewComponent } from './social-view/social-view.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialRoutingModule } from './social-routing.module';
import { SocialInfoComponent } from './social-info.component';
import { PageHeaderModule } from './../../shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, SocialRoutingModule, FormsModule, PageHeaderModule, ReactiveFormsModule],
    declarations: [SocialInfoComponent, SocialViewComponent]
})
export class SocialModule {}
