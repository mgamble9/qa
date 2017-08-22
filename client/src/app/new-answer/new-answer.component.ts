import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from "./../user"
import { Question } from "./../question"
import { UserService } from "./../user.service"

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent implements OnInit {

  question_id: string
  question: Question
  current_user: User
  new_answer; new_adetail: string = ""

  constructor(private _route: ActivatedRoute, private user_service: UserService, private router: Router) {
    this._route.params.subscribe((param)=>{
      console.log("loaded url... id given is: ", param.question_id);
      this.question_id = param.question_id
    })
  }

  ngOnInit() {
    console.log(this.question_id)
    this.user_service.get_question_by_id(this.question_id)
      .then(data => {
        if(data) {
          this.question = data

          console.log(this.question)
        } else {
          this.router.navigate(["/home"])
        }
      })
      .catch(err => console.log(err))

      this.user_service.get_logged_in_user()
        .then(data => {
          if(data) {
            this.current_user = data
            console.log(this.current_user)
          } else {
            this.router.navigate(["/home"])
          }
        })
        .catch(err => console.log(err))

  }

  add_answer() {
    this.question.answers.push( {username: this.current_user.name,
                                adetail: this.new_adetail,
                                answer: this.new_answer,
                                likes: 0})
    this.user_service.update_question(this.question)
      .then( ok => {
        console.log("updating question on server")
        this.router.navigate(["/home"])
      })
      .catch(err => console.log(err))

}


}
