import { Location } from './../location-info.model';
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.scss']

})
export class LocationViewComponent implements OnInit {
  location: Array<Location>;
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
      pdf.save('location.pdf');
    });
  }

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getAll().subscribe(data => {
    this.location = data;
  });
  }

}






