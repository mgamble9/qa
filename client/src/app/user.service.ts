import { Injectable } from '@angular/core';
import { Http } from "@angular/http" // added when ready to try sending data to server

import "rxjs"

import { User } from "./user"
import { Question } from "./question"
// import { Auction } from "./auction"

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  login(user: User){ // returns a promise
    return this.http.post("/login", user)
        .map(data => data.json())
        .toPromise()
    }

  get_logged_in_user() {
      return this.http.get("/get_logged_in_user")
        .map(data => data.json())
        .toPromise()
    }

  add_question(question: Question){ // returns a promise
    return this.http.post("/add_question", question)
        .map(data => data.json())
        .toPromise()
    }

  update_question(question: Question){ // returns a promise
    return this.http.post("/update_question", question)
        .map(data => data.json())
        .toPromise()
    }

  get_question_list() {
      return this.http.get("/get_question_list")
        .map(data => data.json())
        .toPromise()
    }

  get_question_by_id(question_id: String){ // returns a promise
    return this.http.post("/get_question_by_id", {id: question_id})
        .map(data => data.json())
        .toPromise()
    }

}
