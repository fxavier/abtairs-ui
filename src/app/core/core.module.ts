import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
