import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Projectmgmt } from './project-mgmt.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectmgmtService } from './project-mgmt.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-project-mgmt',
  templateUrl: './project-mgmt.component.html',
  styleUrls: ['./project-mgmt.component.scss']
})
export class ProjectMgmtComponent implements OnInit {
  isCollapsed1 = true;
  isCollapsed2 = true;
  page10Form: FormGroup;
  sub: Subscription;
  projectmgmtInfo: Projectmgmt;
  a: any;
  projectmgmts: Projectmgmt[]=[];

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private projectmgmtService: ProjectmgmtService, private router: Router, private formBuilder: FormBuilder) { }

  createProject() {
    this.isCollapsed1 = !this.isCollapsed1;
    this.isCollapsed2 = true;
  }
  openProject() {
    this.isCollapsed2 = !this.isCollapsed2;
    this.isCollapsed1 = true;
  }
  gotoList() {
    this.router.navigate(['/p']);
  }
  ngOnInit() {
    this.projectmgmtService.getAll().subscribe(data => {
      this.a = data;
      console.log(this.a);
    });
  }
}

