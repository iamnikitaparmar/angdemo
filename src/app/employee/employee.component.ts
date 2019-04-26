import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { Globals } from '../globals';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList;
 

  constructor(public http: HttpClient, private EmployeeService: EmployeeService, public globals: Globals, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    debugger

    this.EmployeeService.getemployee()
      .then((data) => {
        this.employeeList = data;
        console.log(this.employeeList);
      },
        (error) => {
          //alert('error');
        });

   
  }



}
