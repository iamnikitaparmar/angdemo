import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClient } from '@angular/common/http';
import { EmployeeListComponent } from './employee-list/employee-list.component';
//import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
   HttpClient
   //HTTP_INTERCEPTORS

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
