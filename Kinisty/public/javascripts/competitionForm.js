//const {competition} = require('./competitionDetails.js');
//import competition from "./competitionDetails"; 
document.getElementById("competitionName").innerHTML      = "competition.competitionName";
document.getElementById("competitionStartDate").innerHTML = "Start Date: " + "competition.competitionStartDate";
document.getElementById("competitionEndDate").innerHTML   = "End Date: " + "competition.competitionEndDate";

document.getElementById("question1").innerHTML            = "competition.question1";
document.getElementById("question1Answer1Text").innerHTML = "competition.question1Answer1";
document.getElementById("question1Answer2Text").innerHTML = "competition.question1Answer2";
document.getElementById("question1Answer3Text").innerHTML = "competition.question1Answer3";
document.getElementById("question1Answer4Text").innerHTML = "competition.question1Answer4";

document.getElementById("question2").innerHTML            = "competition.question2";
document.getElementById("question2Answer1Text").innerHTML = "competition.question2Answer1";
document.getElementById("question2Answer2Text").innerHTML = "competition.question2Answer2";
document.getElementById("question2Answer3Text").innerHTML = "competition.question2Answer3";
document.getElementById("question2Answer4Text").innerHTML = "competition.question2Answer4";

document.getElementById("question3").innerHTML            = "competition.question3";
document.getElementById("question3Answer1Text").innerHTML = "competition.question3Answer1";
document.getElementById("question3Answer2Text").innerHTML = "competition.question3Answer2";
document.getElementById("question3Answer3Text").innerHTML = "competition.question3Answer3";
document.getElementById("question3Answer4Text").innerHTML = "competition.question3Answer4";

document.getElementById("question4").innerHTML            = "competition.question4";
document.getElementById("question4Answer1Text").innerHTML = "competition.question4Answer1";
document.getElementById("question4Answer2Text").innerHTML = "competition.question4Answer2";
document.getElementById("question4Answer3Text").innerHTML = "competition.question4Answer3";
document.getElementById("question4Answer4Text").innerHTML = "competition.question4Answer4";

document.getElementById("question5").innerHTML            = "competition.question5";
document.getElementById("question5Answer1Text").innerHTML = "competition.question5Answer1";
document.getElementById("question5Answer2Text").innerHTML = "competition.question5Answer2";
document.getElementById("question5Answer3Text").innerHTML = "competition.question5Answer3";
document.getElementById("question5Answer4Text").innerHTML = "competition.question5Answer4";

function correctCompetition() {
    let score  = 0;
    if(question1Answer == competition.question1RightAnswer)
    {
        score += 1;
    }
    if(question2Answer == competition.question2RightAnswer)
    {
        score += 1;
    }
    if(question3Answer == competition.question3RightAnswer)
    {
        score += 1;
    }
    if(question4Answer == competition.question4RightAnswer)
    {
        score += 1;
    }
    if(question5Answer == competition.question5RightAnswer)
    {
        score += 1;
    }
    window.alert("Here is Your score in this competition " + score + "");
}

//const competitionDb = require("../model/competitionDb");
// try{
//     const competition =  competitionDb.findOne({ competitionName: "First Competition"});
//     console.log(competition.competitionName);
// }
// catch(error) {
//     res.status(405).json({ message: error.message });
// }
