import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectService } from '../services/project.service';
import { Globals } from '../globals';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projectList;

  constructor(public http: HttpClient, private ProjectService: ProjectService, public globals: Globals, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    debugger

    this.ProjectService.getproject()
      .then((data) => {
        this.projectList = data;
        console.log(this.projectList);
      },
        (error) => {
          //alert('error');
        });
  }

}
