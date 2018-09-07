import { FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';
import { DistrictService } from './../district/district.service';
import { Component, OnInit } from '@angular/core';
import { OperationalSite } from '../../model';
import { OperationalsiteService } from './operationalsite.service';

@Component({
  selector: 'app-operationasite',
  templateUrl: './operationasite.component.html',
  styleUrls: ['./operationasite.component.css']
})
export class OperationasiteComponent implements OnInit {
  opsites: OperationalSite[];
  operationalSite = new OperationalSite();
  districts: any[];

  constructor(private operationalsiteservice: OperationalsiteService,
              private districtService: DistrictService) { }

  ngOnInit() {
    this.loadDistricts();
    this.loadAllOpSites();
  }

  loadAllOpSites() {
    this.operationalsiteservice.loadAll()
    .subscribe(response => this.opsites = response);

  }

  loadDistricts() {
    this.districtService.listaAll()
     .subscribe(response => {
       this.districts = response.map(d => ({ label: d.name, value: d.id }));
     });
  }

  create(form: FormControl) {
    this.operationalsiteservice.create(this.operationalSite)
    .subscribe(response => {
      form.reset();
      this.loadAllOpSites();
      console.log(response);
    });
  }

}
