
import { ProjectService } from './project.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PopupComponent } from './popup/popup.component';


@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit, OnDestroy {
  modalRef: BsModalRef;
  project: FormGroup;
  id: number;
  editMode = false;
  other = false;
  sub: Subscription;
  profileForm: FormGroup;
  error: string;
  fileUpload = {status: '', message: '', filePath: ''};
  isCollapsed1 = true;



  // public rows: Array<{
  //      subProjectName: string,
  //      commandAreagca: number,
  //      commandAreanca: number,
  //      mgmtSystemOthers: string,
  //      program: string,
  //      statusOfProject: string,
  //      subProjectCmmt: string,
  //      preparedBy: string,
  //      recomendedBy: string,
  //      approvedBy: string,
  //      approvedDate: Date,
  //      startDate: Date,
  //      endDate: Date
  //   }> = [];

  //   buttonClicked() {
  //     // tslint:disable-next-line: prefer-const
  //     let subProjectName = this.project.controls['subProjectName'].value;
  //     // tslint:disable-next-line: prefer-const
  //     let commandAreagca = this.project.controls['commandAreagca'].value;
  //     // tslint:disable-next-line: prefer-const
  //     let commandAreanca = this.project.controls['commandAreanca'].value;
  //     // tslint:disable-next-line: prefer-const
  //     let mgmtSystemOthers = this.project.controls['mgmtSystemOthers'].value;
  //     // tslint:disable-next-line: prefer-const
  //     let program = this.project.controls['program'].value;
  //      // tslint:disable-next-line: prefer-const
  //      let subProjectType = this.project.controls['subProjectType'].value;
  //     // tslint:disable-next-line: prefer-const
  //     let statusOfProject = this.project.controls['statusOfProject'].value;
  //     // tslint:disable-next-line: prefer-const
  //     let subProjectCmmt = this.project.controls['subProjectCmmt'].value;
  //     // tslint:disable-next-line: prefer-const
  //     let preparedBy = this.project.controls['preparedBy'].value;
  //     // tslint:disable-next-line: prefer-const
  //     let recomendedBy = this.project.controls['recomendedBy'].value;
  //     // tslint:disable-next-line: prefer-const
  //     let approvedBy = this.project.controls['approvedBy'].value;
  //     // tslint:disable-next-line: prefer-const
  //     let approvedDate = this.project.controls['approvedDate'].value;
  //     // tslint:disable-next-line: prefer-const
  //     let startDate = this.project.controls['startDate'].value;
  //     // tslint:disable-next-line: prefer-const
  //     let endDate = this.project.controls['endDate'].value;

  //     this.rows.push({
  //       subProjectName: subProjectName,
  //       commandAreagca: commandAreagca,
  //       commandAreanca: commandAreanca,
  //       mgmtSystemOthers: mgmtSystemOthers,
  //       program: program,
  //       subProjectType: subProjectType,
  //       statusOfProject: statusOfProject,
  //       subProjectCmmt: subProjectCmmt,
  //       preparedBy: preparedBy,
  //       recomendedBy: recomendedBy,
  //       approvedBy: approvedBy,
  //       approvedDate: approvedDate,
  //       startDate: startDate,
  //       endDate: endDate,
  //     });
  //     this.project.reset();  }

  // tslint:disable-next-line:max-line-length
  constructor(private fb: FormBuilder, private modalService: BsModalService, private route: ActivatedRoute , private projectService: ProjectService, private router: Router ) { }
  completed() {
    !this.isCollapsed1;
  }
  
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

ngOnInit() {
  this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
       // console.log(this.id);
        this.editMode = params['id'] != null;
       // console.log(this.editMode);
        this.initForm();
      }
    );
    this.profileForm = this.fb.group({
      name: [''],
      profile: ['']
    });
}
onSelectedFile(event){
  console.log(event.target.files);
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    this.profileForm.get('profile').setValue(file);
  }
}
  onSubmit() {
    this.projectService.save(this.project.value).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
    const formData = new FormData();
    formData.append('name', this.profileForm.get('name').value);
    formData.append('profile', this.profileForm.get('profile').value);
    this.projectService.upload(formData).subscribe(
      res => this.fileUpload = res,
      err => this.error = err
      );
  }

  gotoList() {
    this.router.navigate(['/project']);
  }

  save(form: any) {
    this.projectService.save(form).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }

  private initForm() {
      // tslint:disable-next-line: prefer-const
      let spn = '';
      // tslint:disable-next-line: prefer-const
      let cagca = '0';
      // tslint:disable-next-line: prefer-const
      let canca = '0';
       // tslint:disable-next-line: prefer-const
       let ms = '';
      // tslint:disable-next-line: prefer-const
      let pr = '';
      // tslint:disable-next-line: prefer-const
      let spt = '';
      // tslint:disable-next-line: prefer-const
      let sop = '';
      // tslint:disable-next-line: prefer-const
      let spc = '';
      // tslint:disable-next-line: prefer-const
      let pb = '';
      // tslint:disable-next-line: prefer-const
      let rb = '';
      // tslint:disable-next-line: prefer-const
      let aby = '';
      // tslint:disable-next-line: prefer-const
      let adate = '';
      // tslint:disable-next-line: prefer-const
      let apdate = '';
      // tslint:disable-next-line: prefer-const
      let edate = '';

  // onSaveData() {
  //   this.dataStorageService.storeProject().subscribe(
  //     (response: Response) => {
  //       console.log(response);
  //     }
  //   );
  // }

  // onFetch() {
  //   console.log(this.dataStorageService.getProject());
  // }
  // onEditData() {
  //   const projectInfo = this.projectService.getProjectInfo();
  //   this.project.setValue(projectInfo);
  // }


    this.project = new FormGroup({
      'id': new FormControl(),
      'subProjectName': new FormControl(spn, [Validators.required]),
      'commandAreagca': new FormControl(cagca, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'commandAreanca': new FormControl(canca, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'mgmtSystemOthers': new FormControl(ms, [Validators.required]),
      'program': new FormControl(pr, [Validators.required]),
      'subProjectType': new FormControl(spt, [Validators.required]),
      'statusOfProject': new FormControl(sop, [Validators.required]),
      'subProjectCmmt': new FormControl(spc, [Validators.required]),
      'preparedBy': new FormControl(pb, [Validators.required]),
      'recomendedBy': new FormControl(rb, [Validators.required]),
      'approvedBy': new FormControl(aby, [Validators.required]),
      'approvedDate': new FormControl(adate, [Validators.required]),
      'startDate': new FormControl(apdate, [Validators.required]),
      'endDate': new FormControl(edate, [Validators.required]),
  });
  if (this.editMode) {
    this.sub = this.projectService.get(this.id).subscribe((project: any) => {

      console.log(project);

        if (project) {
        this.project.patchValue({
          subProjectName: project.subProjectName,
          commandAreagca : project.commandAreagca,
          commandAreanca : project.commandAreanca,
          mgmtSystemOthers : project.mgmtSystemOthers,
          program : project.program,
          subProjectType : project.subProjectType,
          statusOfProject : project.statusOfProject,
          subProjectCmmt : project.subProjectCmmt,
          preparedBy : project.preparedBy,
          recomendedBy : project.recomendedBy,
          approvedBy : project.approvedBy,
          approvedDate : project.approvedDate,
          startDate : project.startDate,
          endDate : project.endDate,
      });
    }
  } );
}
  }
  openModal() {
    this.modalRef = this.modalService.show(PopupComponent);
  }
}
