import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';

import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePortalComponent } from './home-portal/home-portal.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    AboutUsComponent,
    HomePortalComponent,
    ProfileComponent,
    EmployeeDetailsComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
