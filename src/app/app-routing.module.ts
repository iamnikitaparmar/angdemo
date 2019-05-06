import { Component, NgModule } from '@angular/core';
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
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from './services/project.service';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [

      { path: 'employee/add', component: EmployeeComponent },
      { path: 'employee/edit/:id', component: EmployeeComponent },
      { path: 'employee/list', component: EmployeeListComponent },

      { path: 'project/add', component: ProjectComponent },
      { path: 'project/edit/:id', component: ProjectComponent },
      { path: 'project/list', component: ProjectListComponent },

      { path: 'task/add', component: TaskComponent },
      { path: 'task/edit/:id', component: TaskComponent },
      { path: 'task/list', component: TaskListComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
