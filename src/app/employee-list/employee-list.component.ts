import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Globals } from '../globals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
  
})
export class EmployeeListComponent implements OnInit {
     public employees = [];
     employeeData;
     employeeEntity;
    

  constructor(private router: Router,private EmployeeService: EmployeeService,public globals: Globals,private route: ActivatedRoute) { }
    ngOnInit() {
      debugger
      this.employeeEntity={};
    }
    InsertEmployee(employeeForm){
      
      this.EmployeeService.InsertEmployee(this.employeeEntity)
      .then((data) => {
        this.employeeData = data;
        console.log(this.employeeData);
      },
        (error) => {
          //alert('error');
        });
    }

  }


