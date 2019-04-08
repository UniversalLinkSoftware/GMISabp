import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  sub: Subscription;
  projectmgmtInfo: Projectmgmt;
  projectmgmts: Projectmgmt[]=[];
  projectForm: FormGroup;
  

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private projectmgmtService: ProjectmgmtService, private router: Router, private formBuilder: FormBuilder) { }
  onSubmit() {
  let r=    this.projectForm.get("name");
    console.log("r");
    // this.projectmgmtService.save(projectForm).subscribe(
    //   result => {
        
    //     console.log(projectForm)
    //   },
    //   error => console.error(error)
    // );
  }

  createProject() {
    this.isCollapsed1 = !this.isCollapsed1;
    this.isCollapsed2 = true;
  }
  openProject() {
    this.isCollapsed2 = !this.isCollapsed2;
    this.isCollapsed1 = true;
  }
  gotoList() {
    this.router.navigate(['/projectmgmt']);
  }
  ngOnInit() {
    this.projectmgmtService.getAll().subscribe((data:any) => {
      console.log(data);
      this.projectmgmts=data.result.items;
      console.log(this.projectmgmts)
    });
    this.projectForm = new FormGroup ({
      'name': new FormControl(),
      'id':new FormControl()
    })
  }

}

