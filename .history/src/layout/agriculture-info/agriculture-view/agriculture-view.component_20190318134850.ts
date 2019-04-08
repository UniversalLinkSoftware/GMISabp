import { Agriculture } from '../agriculture-info.model';
import { Component, OnInit } from '@angular/core';
import {DoiService} from 'src/app/shared/api/doi.service';

@Component({
  selector: 'app-agriculture-view',
  templateUrl: './agriculture-view.component.html',
  styleUrls: ['./agriculture-view.component.scss']
})
export class AgricultureViewComponent implements OnInit {

  constructor(private doiService: DoiService) {

   }
   agricultures: Array<Agriculture>;
    ngOnInit() {
    this.doiService.getAll().subscribe(data => {
      this.agricultures = data;
    });
  }

}
