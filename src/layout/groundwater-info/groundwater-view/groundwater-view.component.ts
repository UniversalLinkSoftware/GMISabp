import { Component, OnInit } from '@angular/core';
import { Groundwater } from '../groundwater-info.model';
import { GroundwaterService } from '../groundwater.service';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-groundwater-view',
  templateUrl: './groundwater-view.component.html',
  styleUrls: ['./groundwater-view.component.scss']
})
export class GroundwaterViewComponent implements OnInit {
  groundwater: Array<Groundwater>;
  public captureScreen() {
    const data = document.getElementById('a');
    html2canvas(data).then(canvas => {

      const imgWidth = 210;

      const imgHeight = 297;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('groundwater.pdf');
    });
  }

  constructor(private groundwaterService: GroundwaterService) {

   }

    ngOnInit() {
    this.groundwaterService.getAll().subscribe(data => {
      this.groundwater = data;
      console.log(data);
    });
  }

}
