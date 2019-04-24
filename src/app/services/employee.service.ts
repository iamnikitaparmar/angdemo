import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string ="http://localhost/angdemo/api/employee";

  constructor(private http: HttpClient) { }

  getemployee(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
    
    }
    
  }
}
