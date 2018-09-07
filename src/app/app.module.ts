import { OperationalSite } from './model';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SystemModule } from './system/system.module';
import { DistrictComponent } from './system/district/district.component';
import { LocalityComponent } from './system/locality/locality.component';
import { OperationasiteComponent } from './system/operationasite/operationasite.component';
import { VillageComponent } from './system/village/village.component';


const routes: Routes = [
  { path: 'districts', component: DistrictComponent },
  { path: 'opsites', component: OperationasiteComponent },
  { path: 'localities', component: LocalityComponent },
  { path: 'villages', component: VillageComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SystemModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
