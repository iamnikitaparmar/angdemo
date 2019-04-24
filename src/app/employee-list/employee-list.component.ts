import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
     public employees = [];

  constructor(private _employeeServices.get) { }

  ngOnInit() {
    this._employeeServices.getemployee()
      .subscribe(data => this.employees = data);

  }

}
