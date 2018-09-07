import { FormControl } from '@angular/forms';
import { Locality } from './../../model';
import { Component, OnInit } from '@angular/core';
import { LocalityService } from './locality.service';

@Component({
  selector: 'app-locality',
  templateUrl: './locality.component.html',
  styleUrls: ['./locality.component.css']
})
export class LocalityComponent implements OnInit {

  districts: any[];
  operationalSites: any[];
  selectedDistrict: number;
  localities: Locality[];
  locality = new Locality();
  disabilitado = true;
  constructor(private localityService: LocalityService) { }

  ngOnInit() {
    this.loadDisctricts();
    this.loadAllLocalities();
  }

  loadDisctricts() {
    this.localityService.listAllDistricts()
    .subscribe(response => {
      this.districts = response.map(d => ({ label: d.name, value: d.id }));
    });
  }

  loadOperationalSites() {
    this.localityService.searchOpSitesByDistrict(this.selectedDistrict)
    .subscribe(response => {
      this.operationalSites = response.map(o => ({ label: o.name, value: o.id}));
    });
    this.disabilitado = false;
  }

  loadAllLocalities() {
    this.localityService.loadAllLocalities().subscribe(response => this.localities = response);
  }

  create(form: FormControl) {
    this.localityService.create(this.locality)
    .subscribe(response => {
      form.reset();
      this.loadAllLocalities();
    });
    }


}
