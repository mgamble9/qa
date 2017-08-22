

const mongoose = require("mongoose")
const User = mongoose.model("User")
const Question = mongoose.model("Question")

module.exports = {
  login: (req, res) => {
    User.findOne({name: req.body.name})
        .then(data => {
          if(data){
            // save to session
            req.session.user_id = data._id;
            console.log("user found in db")
            console.log(req.session)
            res.json(true);
          } else {
            let new_user = new User({name: req.body.name});
            new_user.save()
              .then(user => {
                //save into session
                console.log("user entered into db");
                req.session.user_id = new_user._id;
                res.json(true);
              })
              .catch(err => res.status(500).json(err))
          }
        })
  },

  update_question: function(req,res) {
    console.log("updating question with id" + req.body._id);
    console.log("POST DATA", req.body);
    Question.findOne({_id: req.body._id}, function(err, question) {
      if(err) {
        console.log('something went wrong');
        // return res.redirect('/');
      } else { // else console.log that we did well and then redirect to the root route
          console.log('ready to update an question');
          console.log(question);
          question.answers = req.body.answers
          console.log(question);
          question.save()
            .then(ok => {
              console.log("question is updated");
              res.json(true);
            })
            .catch(err => res.status(500).json(err))
      }
    })
  },

  add_question: (req, res) => {
    Question.findOne({question: req.body.question})
        .then(data => {
          if(data){
            console.log("question already exists.");
            res.redirect('/new-question');
    //         res.json(true)
          } else {
            let question = new Question({question: req.body.question,
                              qdetail: req.body.qdetail,
                                });
            question.save()
              .then(question => {
                res.json(true)
              })
              .catch(err => res.status(500).json(err))
          }
        })
      },

  //
    get_question_by_id: (req, res) => {
        console.log("Here is the incoming id:", req.body)
         Question.findOne({_id: req.body.id})
          .then(data => {
            console.log("Question found by id is",data);
            res.json(data);
          })
          .catch(err => res.status(500).json(err))
     },
  //




  get_question_list: (req,res) => {
    console.log(req.session)
    Question.find()
      .then(data => res.json(data))
      .catch(err => res.status(500).json(err))
  },

  get_logged_in_user: (req, res) => {
    if(req.session.user_id) {
      console.log("getting user");
      // res.json(USERS[0]);
      User.findOne({_id: req.session.user_id})
        .then(user => {
          console.log(user);
          res.json(user);
        })
        .catch(err => res.status(500).json(err))
    } else {
      res.json(false);
    }
  },






  logout: (req,res) => {
    req.session.destroy();
    // console.log(req.session.name)
    res.redirect("/");
  }
}
