import { Component, OnInit } from '@angular/core';
import { ImplementationService } from '../implementation.service';
import { Implementation } from '../implementation-info.model';
import { ImpTable } from '../table.model';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-implementation-view',
  templateUrl: './implementation-view.component.html',
  styleUrls: ['./implementation-view.component.scss']
})
export class ImplementationViewComponent implements OnInit {
  implementation: Array<Implementation>;
  imptable: Array<ImpTable>;
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
      pdf.save('implementation.pdf');
    });
  }

  constructor(private implementationService: ImplementationService) { }


  ngOnInit() {
  this.implementationService.getAll().subscribe(data => {
    this.implementation = data;
    console.log(data);
  });
  this.implementationService.getAllimpTable().subscribe(data => {
    this.imptable = data;
    console.log(data);
});
  }
}
