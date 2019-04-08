import { Component, OnInit } from '@angular/core';
import { Economic } from '../economic-info.model';
import { EconomicService } from '../economic.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-economic-view',
  templateUrl: './economic-view.component.html',
  styleUrls: ['./economic-view.component.scss']
})
export class EconomicViewComponent implements OnInit {
  economic: Array<Economic>;
  public captureScreen() {
    const data = document.getElementById('a');
    html2canvas(data).then(canvas => {

      const imgWidth = 210;
      const pageHeigt = 297;

      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('economic.pdf');
    });
  }

  constructor(private economicService: EconomicService) {

  }

   ngOnInit() {
   this.economicService.getAll().subscribe(data => {
     this.economic = data;
   });
 }

}
