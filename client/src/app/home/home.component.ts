import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "./../user"
import { Question } from "./../question"
import { UserService } from "./../user.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  current_user: User
  search_text: string = ''
  question_list: Array<Question>
  answer_count: Array<number> = []

  constructor(private user_service: UserService, private router: Router) {}

  ngOnInit() {
    this.current_user = new User

    this.user_service.get_logged_in_user()
      .then(data => {
        if(data) {
          this.current_user = data
          console.log(this.current_user)
        } else {
          this.router.navigate(["/login"])
        }
      })
      .catch(err => console.log(err))

    this.user_service.get_question_list()
      .then(data => {
        if(data) {
          this.question_list = data
          console.log(this.question_list)
          for (let x = 0; x < this.question_list.length; x++) {
            if (this.question_list[x].answers) {
              this.answer_count[x] = this.question_list[x].answers.length
              }
          }
          console.log(this.answer_count)
        } else {
          console.log("failed to get question list")
        }
      })
      .catch(err => console.log(err))


  }

}
