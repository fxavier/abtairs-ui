import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LocalityComponent } from './locality/locality.component';

import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

import { FormsModule } from '@angular/forms';
import { DistrictComponent } from './district/district.component';
import { OperationasiteComponent } from './operationasite/operationasite.component';
import { VillageComponent } from './village/village.component';
import { RouterModule } from '@angular/router';
import { SprayOperatorComponent } from './spray-operator/spray-operator.component';
import { TeamLeaderComponent } from './team-leader/team-leader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    TableModule,
    InputTextModule,

    HttpClientModule,
    RouterModule
  ],
  declarations: [LocalityComponent,
                 DistrictComponent,
                 OperationasiteComponent,
                 VillageComponent,
                 SprayOperatorComponent,
                 TeamLeaderComponent],
  exports: [LocalityComponent,
            DistrictComponent,
            OperationasiteComponent,
            VillageComponent,
            SprayOperatorComponent,
            TeamLeaderComponent]
})
export class SystemModule { }
