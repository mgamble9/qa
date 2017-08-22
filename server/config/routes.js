const path = require("path")
const users = require("./../controllers/users.js")
module.exports = (app) => {

  app.post("/login", users.login)
  app.post("/add_question", users.add_question)
  app.post("/update_question", users.update_question)
  app.post("/get_question_by_id", users.get_question_by_id)
  app.get("/get_question_list", users.get_question_list)
  app.get("/logout", users.logout)
  app.get("/get_logged_in_user", users.get_logged_in_user)

// this must be your last route
  app.get("*", (req,res) => {
    res.sendFile(path.resolve("./client/dist/index.html"))
  })
}
