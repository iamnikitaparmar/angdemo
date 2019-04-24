import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
     public employees = [];

  constructor() { }
    ngOnInit() {
      
      this.employeeservice.getemployee()
        .then((data) => {
          debugger
          this.employee-list = data;
         
        },
          (error) => {
            this.router.navigate(['/admin/pagenotfound']);
          });
      this.msgflag = false;
    }
  }


