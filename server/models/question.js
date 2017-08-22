const mongoose = require("mongoose")

const QuestionSchema = mongoose.Schema({
    question: String,
    qdetail: {type:String,
              default: ""},
    answers: [{answer: String,
            adetail: {type:String,
                      default: ""},
            username: String,
            likes: {type:Number,
                    default: 0},
          }]
})

mongoose.model("Question", QuestionSchema)
