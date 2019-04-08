import { Agriculture } from '../agriculture-info.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agriculture-view',
  templateUrl: './agriculture-view.component.html',
  styleUrls: ['./agriculture-view.component.scss']
})
export class AgricultureViewComponent implements OnInit {

  constructor() {}
   // tslint:disable-next-line:member-ordering
   agricultures: Array<Agriculture>;
    ngOnInit() {
  }

}
