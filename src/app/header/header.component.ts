import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Globals } from '../globals';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  db_mode;
  constructor(private AuthService: AuthService, private router: Router, public globals: Globals) { }

  ngOnInit() {
    const body = document.querySelector('body');
    body.style.setProperty('--screen-height', $(window).height() - 150 + "px");

    this.firstNameChar = this.globals.authData.FirstName.slice(0, 1);
    this.lastNameChar = this.globals.authData.LastName.slice(0, 1);
  }
  logout() {
    var panel = { 'Userid': this.globals.authData.UserId, 'paneltype': 0 };
    this.AuthService.logout(panel)
      .then((data) => {
        this.globals.isLoading = true;
        window.location.href = '';
      },
        (error) => {
          //alert('error');
          this.globals.isLoading = false;

        });

  }
  

}
