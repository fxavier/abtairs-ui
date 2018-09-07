import { FormControl } from '@angular/forms';
import { VillageService } from './village.service';
import { Component, OnInit } from '@angular/core';
import { Village } from '../../model';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {

  districts: any[];
  operationalSites: any[];
  localities: any[];
  selectedDistrict: number;
  selectedOpSite: number;
  villages: Village[];
  village = new Village();
  constructor(private villageService: VillageService) { }

  ngOnInit() {
    this.loadDisctricts();
    this.loadAllVillages();
  }

  loadDisctricts() {
    this.villageService.loadDisctricts()
    .subscribe(response => {
      this.districts = response.map(d => ({ label: d.name, value: d.id }));
    });
  }

  loadOperationalSitesByDistrict() {
    this.villageService.loadOperationalSites(this.selectedDistrict)
    .subscribe(response => {
      this.operationalSites = response.map(o => ({ label: o.name, value: o.id}));
    });
  }

  loadLocalitiesByOpsite() {
    this.villageService.loadLocalitiesByOpsites(this.selectedOpSite)
    .subscribe(response => {
      this.localities = response.map(l => ({ label: l.name, value: l.id }));
    });
  }

  loadAllVillages() {
    this.villageService.loadAllVillages()
    .subscribe(response => this.villages = response);
  }

  create(form: FormControl) {
    this.villageService.create(this.village)
    .subscribe(response => {
      form.reset();
      this.loadAllVillages();
    });
  }

}
