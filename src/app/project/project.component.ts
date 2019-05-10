import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Globals } from '../globals';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projectData;
  projectEntity;
  submitted;
  header;
  button;
 

  constructor(private router: Router, private ProjectService: ProjectService, public globals: Globals, private route: ActivatedRoute) { }

  ngOnInit() {
    debugger
    this.projectEntity = {};
    this.projectEntity.IsActive = "1";
    this.header = 'Add';
    this.button = 'Add';

    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.header = 'Edit';
      this.button = 'Edit';
     
      this.ProjectService.fetchProject(id)
        .then((data) => {
          this.projectEntity = data;
          if (data['IsActive'] == 0) {
            this.projectEntity.IsActive = 0;
          } else {
            this.projectEntity.IsActive = '1';
          }
          console.log(this.projectEntity);
        },
          (error) => {
            //alert('error');
           

          });
    }
  }

  Insertproject(projectForm) {
    debugger

    if (projectForm.valid) {
      this.ProjectService.Insertproject(this.projectEntity)
      .then((data) => {
        this.projectData = data;
        console.log(this.projectData);
        this.router.navigate(['/project/list']);
      },
        (error) => {
          //alert('error');
        });
    } else {
    }
  }

}
