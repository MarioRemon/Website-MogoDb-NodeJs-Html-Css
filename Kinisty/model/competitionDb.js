const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let competitionDb = new Schema(
{
    competitionName         : { type: String, required: false},
    competitionStartDate    : { type: Date,   required: false},
    competitionEndDate      : { type: Date,   required: false},
    competitionImage        : { type: String, required: false},
    question1               : { type: String, required: false},
    question1Answer1        : { type: String, required: false},
    question1Answer2        : { type: String, required: false},
    question1Answer3        : { type: String, required: false},
    question1Answer4        : { type: String, required: false},
    question1RightAnswer    : { type: String, required: false},
    question2               : { type: String, required: false}, 
    question2Answer1        : { type: String, required: false},
    question2Answer2        : { type: String, required: false}, 
    question2Answer3        : { type: String, required: false},
    question2Answer4        : { type: String, required: false}, 
    question2RightAnswer    : { type: String, required: false},
    question3               : { type: String, required: false}, 
    question3Answer1        : { type: String, required: false},
    question3Answer2        : { type: String, required: false}, 
    question3Answer3        : { type: String, required: false},
    question3Answer4        : { type: String, required: false}, 
    question3RightAnswer    : { type: String, required: false},
    question4               : { type: String, required: false}, 
    question4Answer1        : { type: String, required: false},
    question4Answer2        : { type: String, required: false}, 
    question4Answer3        : { type: String, required: false},
    question4Answer4        : { type: String, required: false}, 
    question4RightAnswer    : { type: String, required: false},
    question5               : { type: String, required: false}, 
    question5Answer1        : { type: String, required: false},
    question5Answer2        : { type: String, required: false}, 
    question5Answer3        : { type: String, required: false},
    question5Answer4        : { type: String, required: false}, 
    question5RightAnswer    : { type: String, required: false},
},
{ collection: " Competition"}
);

module.exports = competitionDb = mongoose.model("Competition", competitionDb);