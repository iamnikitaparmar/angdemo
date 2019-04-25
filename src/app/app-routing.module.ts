import { Component,NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from '@angular/common/http';
//import { HttpInterceptorClassService } from './http-interceptor-class.service';
import { Globals } from './globals';
//import { SelectModule } from 'ng-select';
//import { HtmlToPlaintextPipe } from './html-to-plaintext.pipe';


import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [

 
  { path: 'employee/add', component: EmployeeListComponent },
  { path: 'employee/edit/:id', component: EmployeeListComponent },
  { path: 'employee/list', component: EmployeeComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
