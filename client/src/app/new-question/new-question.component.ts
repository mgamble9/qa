import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./../user"
import { Question } from "./../question"
import { UserService } from "./../user.service"

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

  current_user: User
  new_question: Question

  constructor(private user_service: UserService, private router: Router) {}

  ngOnInit() {

    this.new_question = new Question

    this.user_service.get_logged_in_user()
      .then(data => {
        if(data) {
          this.current_user = data
        } else {
          this.router.navigate(["/"])
        }
      })
      .catch(err => console.log(err))

  }

  add_question() {

  console.log(this.new_question)
  this.user_service.add_question(this.new_question)
    .then(() => {
      console.log("sending new question to server")
      console.log(this.new_question)
      this.router.navigate(['/home'])
    })
    .catch(err => console.log(err))
    this.new_question = new Question

}

  }
