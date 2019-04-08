import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project-info.model';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent implements OnInit {
  project: Array<Project>;
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
      pdf.save('ProjectInfo.pdf');
    });
  }

  constructor(private projectService: ProjectService) {

  }


  ngOnInit() {
    this.projectService.getAll().subscribe(data => {
      this.project = data;
    });
  }

}
