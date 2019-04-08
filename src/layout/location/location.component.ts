
import { Component, OnInit, OnDestroy  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LocationService} from './location.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Popup2Component } from './popup2/popup2.component';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, OnDestroy {
  pageForm: FormGroup;
  id: string;
  editMode = false;
  sub: Subscription;
  modalRef: BsModalRef;

  public rows: Array<{
      ecologicalRegion: string,
     nearestRoad: string,
     distance: Date,
     nearestAirport: string,
     airportDistance: number,
     nearestMarket: string,
     marketDistance: number,
     localRiverBasin: string,
     majorRiverBasin: string,
     riverSource: string,
     province: number,
     district: string,
     ward: number,
     metroCity: string,
     subMetroCity: string,
     municipality: string,
     ruralMunicipality: number,
     localBodyType: string,
     }> = [];

     buttonClicked() {
      // tslint:disable-next-line:prefer-const
      let ecologicalRegion = this.pageForm.controls['ecologicalRegion'].value;
      // tslint:disable-next-line:prefer-const
      let nearestRoad = this.pageForm.controls['nearestRoad'].value;
      // tslint:disable-next-line:prefer-const
      let distance = this.pageForm.controls['distance'].value;
      // tslint:disable-next-line:prefer-const
      let nearestAirport = this.pageForm.controls['nearestAirport'].value;
      // tslint:disable-next-line:prefer-const
      let airportDistance = this.pageForm.controls['airportDistance'].value;
      // tslint:disable-next-line:prefer-const
      let nearestMarket = this.pageForm.controls['nearestMarket'].value;
      // tslint:disable-next-line:prefer-const
      let marketDistance = this.pageForm.controls['marketDistance'].value;
       // tslint:disable-next-line:prefer-const
       let localRiverBasin = this.pageForm.controls['localRiverBasin'].value;
       // tslint:disable-next-line:prefer-const
       let majorRiverBasin = this.pageForm.controls['majorRiverBasin'].value;
        // tslint:disable-next-line:prefer-const
      let riverSource = this.pageForm.controls['riverSource'].value;
       // tslint:disable-next-line:prefer-const
       let province = this.pageForm.controls['province'].value;
        // tslint:disable-next-line:prefer-const
      let district = this.pageForm.controls['district'].value;
       // tslint:disable-next-line:prefer-const
       let ward = this.pageForm.controls['ward'].value;
       // tslint:disable-next-line:prefer-const
       let metroCity = this.pageForm.controls['metroCity'].value;
       // tslint:disable-next-line:prefer-const
       let subMetroCity = this.pageForm.controls['subMetroCity'].value;
       // tslint:disable-next-line:prefer-const
       let municipality = this.pageForm.controls['municipality'].value;
       // tslint:disable-next-line:prefer-const
       let ruralMunicipality = this.pageForm.controls['ruralMunicipality'].value;
       // tslint:disable-next-line:prefer-const
       let localBodyType = this.pageForm.controls['localBodyType'].value;


     this.rows.push( {
      ecologicalRegion: ecologicalRegion,
      nearestRoad: nearestRoad,
      distance: distance,
      nearestAirport: nearestAirport,
      airportDistance: airportDistance,
      nearestMarket: nearestMarket,
      marketDistance: marketDistance,
      localRiverBasin: localRiverBasin,
      majorRiverBasin: majorRiverBasin,
      riverSource: riverSource,
      province: province,
      district: district,
      ward: ward,
      metroCity: metroCity,
      subMetroCity: subMetroCity,
      municipality: municipality,
      ruralMunicipality: ruralMunicipality,
      localBodyType: localBodyType,
       } );
    this.pageForm.reset(); }


  // tslint:disable-next-line:max-line-length
  constructor(private modalService: BsModalService, private route: ActivatedRoute , private locationService: LocationService, private router: Router) { }
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
  }
  onSubmit() {
    this.locationService.save(this.pageForm.value).subscribe(
      result => {
        this.gotoList();
      },
      error => console.error(error)
    );
  }
  gotoList() {
    this.router.navigate(['/location']);
  }

  private initForm() {

    // tslint:disable-next-line:prefer-const
    let EcologicalRegion = '';
    // tslint:disable-next-line:prefer-const
    let  NearestRoad = '' ;
    // tslint:disable-next-line:prefer-const
    let Distance = '';
    // tslint:disable-next-line:prefer-const
    let NearestAirport = '';
    // tslint:disable-next-line:prefer-const
    let AirportDistance = '';
    // tslint:disable-next-line:prefer-const
    let NearestMarket = '';
    // tslint:disable-next-line:prefer-const
    let MarketDistance = '';
    // tslint:disable-next-line:prefer-const
    let LocalRiverBasin = '';
    // tslint:disable-next-line:prefer-const
    let MajorRiverBasin = '';
    // tslint:disable-next-line:prefer-const
    let RiverSource = '';
    // tslint:disable-next-line:prefer-const
    let Province = '';
    // tslint:disable-next-line:prefer-const
    let District = '';
    // tslint:disable-next-line:prefer-const
    let Ward = '';
    // tslint:disable-next-line:prefer-const
    let MetroCity = '';
    // tslint:disable-next-line:prefer-const
    let SubMetroCity = '';
    // tslint:disable-next-line:prefer-const
    let Municipality = '';
    // tslint:disable-next-line:prefer-const
    let RuralMunicipality = '';
    // tslint:disable-next-line:prefer-const
    let LocalBodyType = '';

    this.pageForm = new FormGroup({
      'id': new FormControl(),
      'ecologicalRegion': new FormControl(EcologicalRegion, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'nearestRoad': new FormControl(NearestRoad, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'distance': new FormControl(Distance, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'nearestAirport': new FormControl(NearestAirport, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'airportDistance': new FormControl(AirportDistance, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'nearestMarket': new FormControl(NearestMarket, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'marketDistance': new FormControl(MarketDistance, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'localRiverBasin': new FormControl(LocalRiverBasin, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'majorRiverBasin': new FormControl(MajorRiverBasin, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'riverSource': new FormControl(RiverSource, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'province': new FormControl(Province, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'district': new FormControl(District, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'ward': new FormControl(Ward, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'metroCity': new FormControl(MetroCity, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'subMetroCity': new FormControl(SubMetroCity, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'municipality': new FormControl(Municipality, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'ruralMunicipality': new FormControl(RuralMunicipality, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),
      'localBodyType': new FormControl(LocalBodyType, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]),



    });




    if (this.editMode) {
      this.sub = this.locationService.get(this.id).subscribe((location: any) => {
        // const economic = economics;
        console.log(location);
        // if (location) {
        //   console.log(location.totalProjectCost);
          if (location) {
          this.pageForm.patchValue({
            ecologicalRegion: location.ecologicalRegion,
            nearestRoad : location.nearestRoad,
            distance : location.distance,
            nearestAirport : location.nearestAirport,
            airportDistance : location.airportDistance,
            nearestMarket : location.nearestMarket,
            marketDistance : location.marketDistance,
            localRiverBasin : location.localRiverBasin,
            majorRiverBasin : location.majorRiverBasin,
            riverSource : location.riverSource,
            province : location.province,
            district : location.district,
            ward : location.ward,
            metroCity : location.metroCity,
            subMetroCity : location.subMetroCity,
            municipality : location.municipality,
            metroruralMunicipalityity : location.ruralMunicipality,
            localBodyType : location.localBodyType,
          });
        }
      });
}
}
openModal() {
  this.modalRef = this.modalService.show(Popup2Component);
}
}
