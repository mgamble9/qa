import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router"

import { User } from "./../user"
import { UserService } from "./../user.service"


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  new_user = new User

    constructor(private user_service: UserService, private router: Router) { }

    ngOnInit() {
    }

    login() {
      console.log(this.new_user)
      this.user_service.login(this.new_user)
        .then(() => {
          this.router.navigate(['/home'])
        })
        .catch(err => console.log(err))
      this.new_user = new User
    }
  }
