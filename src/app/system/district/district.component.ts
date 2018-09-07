import { Component, OnInit } from '@angular/core';
import { District } from '../../model';
import { DistrictService } from './district.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent implements OnInit {
  districts: District[];
  district = new District();
  constructor(private districtService: DistrictService) { }

  ngOnInit() {
    this.loadAll();
  }

  loadAll() {
    this.districtService.listaAll()
     .subscribe(response => this.districts = response);
  }

  create(form: FormControl) {
    this.districtService.create(this.district)
     .subscribe(response => {
       form.reset();
       this.loadAll();
     });
  }

}
