import { FormControl } from '@angular/forms';
import { SprayOperatorService } from './spray-operator.service';
import { Component, OnInit } from '@angular/core';
import { SprayOperator } from '../../model';

@Component({
  selector: 'app-spray-operator',
  templateUrl: './spray-operator.component.html',
  styleUrls: ['./spray-operator.component.css']
})
export class SprayOperatorComponent implements OnInit {
  districts: any[];
  sprayOperators: SprayOperator[];
  sprayOperator = new SprayOperator();
  constructor(private sopService: SprayOperatorService) { }

  ngOnInit() {
    this.loadDistricts();
    this.loadSprayOperators();
  }

  loadDistricts() {
    this.sopService.loadDistricts()
    .subscribe(response => {
      this.districts = response.map(d => ({ label: d.name, value: d.id }));
    });
  }

  loadSprayOperators() {
    this.sopService.loadSprayOperators()
    .subscribe(response => this.sprayOperators = response);
  }

  create(form: FormControl) {
    this.sopService.create(this.sprayOperator)
    .subscribe(response => {
      form.reset();
      this.loadSprayOperators();
    });
  }

}
