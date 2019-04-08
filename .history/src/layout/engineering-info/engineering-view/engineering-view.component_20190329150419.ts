

import { Component, OnInit } from '@angular/core';
import { EngineeringService } from '../engineering.service';
import { RiverHydology, BranchCanal, MainCanal } from '../engineering-info.model';
import { MainTable } from '../maintable.model';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-engineering-view',
  templateUrl: './engineering-view.component.html',
  styleUrls: ['./engineering-view.component.scss']
})
export class EngineeringViewComponent implements OnInit {
  riverhydrology: Array<RiverHydology>;
  maintable: Array<MainTable>;
  branchcanal: Array<BranchCanal>;

  maincanal: Array<MainCanal>;
  public captureScreen() {
    const data = document.getElementById('a');
    html2canvas(data).then(canvas => {

      const imgWidth = 210;

      const imgHeight = 297;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0 , position, imgWidth, imgHeight);
      pdf.save('engineering.pdf');
    });
  }

  constructor(private engineeringService: EngineeringService) { }



  ngOnInit() {
  this.engineeringService.getAllRiverhydrology().subscribe(data => {
    this.riverhydrology = data;
    console.log(data);
  });
  this.engineeringService.getAllMaintable().subscribe(data => {
    this.maintable = data;
    console.log(data);
});
this.engineeringService.getAllBranchcanal().subscribe(data => {
  this.branchcanal = data;
  console.log(data);
});
this.engineeringService.getAllMaincanal().subscribe(data => {
  this.maincanal = data;
  console.log(data);
});
  }
}
