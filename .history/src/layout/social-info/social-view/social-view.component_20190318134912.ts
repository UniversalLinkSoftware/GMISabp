import { LandTenure } from './../landtenure.model';
import { SocialService } from '../social.service';

import { Component, OnInit } from '@angular/core';
import { Social } from '../social-info.model';
import { Farmsize } from '../farmsize.model';
import { EthnicGroups } from '../ethnicgroups.model';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';



@Component({
  selector: 'app-social-view',
  templateUrl: './social-view.component.html',
  styleUrls: ['./social-view.component.scss']
})
export class SocialViewComponent implements OnInit {
  social: Array<Social>;
  farm: Array<Farmsize>;
  land: Array<LandTenure>;
  ethnic: Array<EthnicGroups>;
  public captureScreen() {
    const data = document.getElementById('a');
    html2canvas(data).then(canvas => {

      // tslint:disable-next-line:prefer-const
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = 297;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('l', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('Social.pdf');
    });
  }

  constructor(private socialService: SocialService) {

   }

    ngOnInit() {
    this.socialService.getAll().subscribe(data => {
      this.social = data;
      console.log(data);
    });
    this.socialService.getAllFarm().subscribe(data => {
      this.farm = data;
      console.log(data);

    });
    this.socialService.getAllLand().subscribe(data => {
      this.land = data;
      console.log(data);

    });
    this.socialService.getAllEthnic().subscribe(data => {
      this.ethnic = data;
      console.log(data);

    });

}
}
