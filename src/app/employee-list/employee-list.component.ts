import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { Globals } from '../globals';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
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
        }
      );
  }

  deleteEmployee(employee) {
    debugger
          this.EmployeeService.deleteEmployee(employee.EmployeeId)
            .then((data) => {
                  let index = this.employeeList.indexOf(employee);
                  if (index != -1) {
                    this.employeeList.splice(index, 1);
                  }

            },
              (error) => {
                if (error.text) {
                 //error
                }
              });
     
  }
}