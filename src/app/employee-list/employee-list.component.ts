import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from '../services/employee.service';
import { Globals } from '../globals';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
declare var $, swal: any;
declare function myInput(): any;
declare var $, Bloodhound: any;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList;



  constructor(public http: HttpClient, private EmployeeService: EmployeeService, public globals: Globals, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {


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

  isActiveChange(changeEntity, i) {
    if (this.employeeList[i].IsActive == 1) {
      this.employeeList[i].IsActive = 0;
      changeEntity.IsActive = 0;
    } else {
      this.employeeList[i].IsActive = 1;
      changeEntity.IsActive = 1;
    }
   
    this.EmployeeService.isActiveChange(changeEntity)
      .then((data) => {
        
        swal({
          //position: 'top-end',
          type: 'success',
          title: 'Employee updated successfully',
          showConfirmButton: false,
          timer: 4000
        })

      },
        (error) => {
         //error
        });
  }

  deleteEmployee(employee) {

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