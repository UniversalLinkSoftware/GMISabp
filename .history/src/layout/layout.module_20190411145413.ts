import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { ToastrService } from 'ngx-toastr';
import { ProjectMgmtModule } from './project-mgmt/project-mgmt.module';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AccountComponent } from 'account/account.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule,
        ProjectMgmtModule,
        LeafletModule.forRoot(),
    ],
    providers:[ToastrService],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent,AccountComponent]
})
export class LayoutModule {}
