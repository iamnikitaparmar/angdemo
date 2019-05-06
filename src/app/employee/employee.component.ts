import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Globals } from '../globals';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employees = [];
  employeeData;
  employeeEntity;
  submitted;
  header;
  button;


  constructor(private router: Router, private EmployeeService: EmployeeService, public globals: Globals, private route: ActivatedRoute) { }
  ngOnInit() {
    debugger
    this.employeeEntity = {};
    this.header = 'Add';
    this.button = 'Add';


    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.header = 'Edit';
      this.button = 'Edit';
      this.EmployeeService.fetchEmpolyee(id)
        .then((data) => {
          this.employeeEntity = data;
          console.log(this.employeeEntity);
        },
          (error) => {
            //alert('error');


          });
    }
  }


  InsertEmployee(employeeForm) {
    debugger

    if (employeeForm.valid) {
      this.EmployeeService.InsertEmployee(this.employeeEntity)
        .then((data) => {
          this.employeeData = data;
          console.log(this.employeeData);
          this.router.navigate(['/employee/list']);
        },
          (error) => {
            //alert('error');
          });
    } else {
    }
  }
}