import { Component, OnInit } from '@angular/core';
import { Report } from './report.model';
import { ReportService } from './report.service';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  groundwater: Array<Report>;
  public captureScreen() {
    const data = document.getElementById('print');
    html2canvas(data).then(canvas => {

      const imgWidth = 210;
      const imgHeight = 297;
      // const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('groundwater.pdf');
    });
  }
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.getAll().subscribe(data => {
      this.groundwater = data;
      console.log(data);
    });
  }
  }

