/* Imports and Requires */
let express               = require('express');
let router                = express.Router();
const mongoose            = require("mongoose");
const { render }          = require('../app');
const userDb              = require("../model/userDb");
const competitionDb       = require("../model/competitionDb");
const eventDb             = require("../model/eventDb");
const answerDb            = require("../model/answerDb");
const ticketDb            = require("../model/ticketDb");
const weddingDb           = require("../model/weddingDb");
const { urlencoded }      = require('express');

/* DB connection */
async function main() {
  let uri = "mongodb+srv://Mario:123@cluster0.msy4ut4.mongodb.net/test"
  await mongoose
    .connect(process.env.MONGODB_URI || uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((config) => {
      console.log("connected to DB successfully");
    });
}
main().catch(console.error);

////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

/* GET Home page. */
router.get('/', function(req, res, next) {
  // check if user is logged in, by checking cookie
  let userName = req.cookies.userName;

  res.render('../views/home.ejs',{userName,});
});

/* Get Home Page for Admin */
router.get('/homeAdmin', async function(req, res, next) {
  res.render("../views/homeAdmin.ejs");
});

////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

/* GET SignUp page. */
router.get('/signUp', function(req, res, next) {
  res.render('../views/signUp.ejs');
});

/* submit SignUp form */
router.post("/submitRegistration", async (req, res) => {
  const newRecord = new userDb({
    firstName   :  req.body.firstName,
    secondName  :  req.body.secondName,
    email       :  req.body.email,
    phoneNumber :  req.body.phoneNumber,
    dateOfBirth : req.body.dateOfBirth,
    gender      : req.body.gender,
    userName    : req.body.userName,
    password    :  req.body.password,
    schoolLevel : req.body.schoolLevel,
    status      : req.body.status,
    rankOfDeacon: req.body.rankOfDeacon,
    points      : 0,
  });
  try {
    await newRecord.save();
    res.status(200);
    res.render('../views/home.ejs');
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
});

////////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//////////////////////////////////////////////////////

/* Get Competition Maker Page */ 
router.get('/competitionMaker', function(req, res, next) {
  res.render('../views/competitionMaker.ejs');
});

router.post("/newCompetition", async (req, res) => {
  const newRecord = new competitionDb({
    competitionName         : req.body.competitionName,
    competitionStartDate    : req.body.competitionStartDate,
    competitionEndDate      : req.body.competitionEndDate,
    competitionImage        : req.body.competitionImage,
    question1               : req.body.question1,
    question1Answer1        : req.body.question1Answer1,
    question1Answer2        : req.body.question1Answer2,
    question1Answer3        : req.body.question1Answer3,
    question1Answer4        : req.body.question1Answer4,
    question1RightAnswer    : req.body.question1RightAnswer,
    question2               : req.body.question2, 
    question2Answer1        : req.body.question2Answer1,
    question2Answer2        : req.body.question2Answer2, 
    question2Answer3        : req.body.question2Answer3,
    question2Answer4        : req.body.question2Answer4, 
    question2RightAnswer    : req.body.question2RightAnswer,
    question3               : req.body.question3, 
    question3Answer1        : req.body.question3Answer1,
    question3Answer2        : req.body.question3Answer2, 
    question3Answer3        : req.body.question3Answer3,
    question3Answer4        : req.body.question3Answer4, 
    question3RightAnswer    : req.body.question3RightAnswer,
    question4               : req.body.question4, 
    question4Answer1        : req.body.question4Answer1,
    question4Answer2        : req.body.question4Answer2, 
    question4Answer3        : req.body.question4Answer3,
    question4Answer4        : req.body.question4Answer4, 
    question4RightAnswer    : req.body.question4RightAnswer,
    question5               : req.body.question5, 
    question5Answer1        : req.body.question5Answer1,
    question5Answer2        : req.body.question5Answer2, 
    question5Answer3        : req.body.question5Answer3,
    question5Answer4        : req.body.question5Answer4, 
    question5RightAnswer    : req.body.question5RightAnswer,
  });
  try {
    await newRecord.save();
    res.render('../views/Home.ejs');
    res.status(200);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
});

/* Get Competition Page */
router.get('/competition', async function(req, res, next) {
  try{
    let competition = await competitionDb.findOne({ competitionName: req.query.competitionName });
    res.render('../views/competition.ejs', {competition : competition});
  }
  catch(error) {
    res.status(405).json({ message: error.message });
  }
});

/* Submit Competition Answers */
router.post("/submitCompetitionAnswers", async (req, res) => {
  try {
  let competition = await competitionDb.findOne({ competitionName: req.query.competitionName });
  const newRecord = new answerDb({
    userName                : req.cookies,
    competitionName         : competition.competitionName,
    competitionStartDate    : competition.competitionStartDate,
    competitionEndDate      : competition.competitionEndDate,
    question1               : competition.question1,
    question1Answer         : req.body.question1Answer,
    question2               : competition.question2, 
    question2Answer         : req.body.question2Answer,
    question3               : competition.question3, 
    question3Answer         : req.body.question3Answer,
    question4               : competition.question4, 
    question4Answer         : req.body.question4Answer,
    question5               : competition.question5, 
    question5Answer         : req.body.question5Answer,
    });
  

    await newRecord.save();
    res.render('../views/home.ejs');
    res.status(200);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
});

/* Request a Wedding */
router.post("/requestWedding", async (req, res) => {
  try {
  const newRecord = new weddingDb({
    clientFirstName     : req.body.clientFirstName,
    clientLastName      : req.body.clientLastName,
    clientEmail         : req.body.clientEmail,
    clientPhoneNumber   : req.body.clientPhoneNumber,
    clientAddress       : req.body.clientAddress,
    date                : req.body.date,
    numberOfGuests      : req.body.numberOfGuests,
    });
  

    await newRecord.save();
    res.render('../views/home.ejs');
    res.status(200);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
});

/* Validate the Login process */
router.post("/validateUserLogin", async (req, res) => {
  if(req.body.userNameLogin == "admin" && req.body.passwordLogin == "admin")
  {
    res.cookie("userName", "admin");
    res.status(201).render("../views/homeAdmin.ejs");
    user.save();
  }
  else
  {
    try{
      userDb.findOne({userName: req.body.userNameLogin}).then(user => {
        if(!user)
        {
          return res.status(401).json({
          error: new Error('User not found!')});
        }
          else{
            if(user.password == req.body.passwordLogin)
            {
              // saving the data to the cookies
              res.cookie("userName", req.body.userNameLogin);
              res.status(201).render("../views/home.ejs");
              user.save();
            }
            else
            {
              return res.status(401).json({message: 'Wrong UserName or Password!'});
            }
            
        }
      });
    }catch(error)
    {
      res.status(405).json({ message: error.message });
    }
  } 
});

/* Get Event Page */
router.get('/event', async function(req, res, next) {
  let event = await eventDb.find();
  res.render("../views/event.ejs", {event: event});
});

/* Get Event Maker Page */
router.get('/eventMaker', async function(req, res, next) {
  res.render("../views/eventMaker.ejs");
});

/* create a new Event */
router.post('/newEvent', async function(req, res, next) {
  const newRecord = new eventDb({
    organizerName              : req.body.organizerName,
    organizerEmail             : req.body.organizerEmail,
    organizerPhoneNumber       : req.body.organizerPhoneNumber,
    organizerDateOfBirth       : req.body.organizerDateOfBirth,
    organizerGender            : req.body.organizerGender,
    eventName                  : req.body.eventName,
    eventDate                  : req.body.eventDate,
    eventStartHour             : req.body.eventStartHour,
    eventEndHour               : req.body.eventEndHour,
    eventDescription           : req.body.eventDescription,
    ticketPriceForFirstSection : req.body.ticketPriceForFirstSection, 
    ticketPriceForMediumSection: req.body.ticketPriceForMediumSection,
    ticketPriceForLastSection  : req.body.ticketPriceForLastSection, 
  });
  try {
    await newRecord.save();
    res.render('../views/Home.ejs');
    res.status(200);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
});

/* Get Wedding Page */
router.get('/wedding', async function(req, res, next) {
  res.render("../views/wedding.ejs");
});

/* Get Booking Page */
router.get('/booking', async function(req, res, next) {
  res.render("../views/seatBooking.ejs",{eventName: req.query.eventName});
});

/* Get Contact Us page */
router.get('/contactUs', async function(req, res, next) {
  res.render("../views/reachOut.ejs");
});

/* Get Payment Page */
router.get('/payment', async function(req, res, next) {
  res.render("../views/payment.ejs",{eventName: req.query.eventName, price: req.query.price});
});

/* Get Donation Page */
router.get('/donation', async function(req, res, next) {
  res.render("../views/donation.ejs");
});

/* Get Payment Page */
router.get('/pay', async function(req, res, next) {
  res.render("../views/PaymentPage.ejs");
});

/* Get Ticket Page */
router.get('/ticket', async function(req, res, next) {
  let event = await eventDb.findOne({eventName: req.query.eventName});
  res.render("../views/ticket.ejs",{event:event, price: req.query.price});
});

/* Get General Competitions Page */
router.get('/competitionsHome', async function(req, res, next) {
  let compDb = await competitionDb.find();
  res.render("../views/generalCompetitionsPage.ejs", {competition: compDb});
});

/* Get Wedding Admin Page */
router.get('/weddingAdmin', async function(req, res, next) {
  res.render("../views/weddingAdmin.ejs");
});

/* Get About us Page */
router.get('/aboutUs', async function(req, res, next) {
  res.render("../views/aboutUs.ejs");
});

/* Get Ticket Page */
router.get('/ticket', async function(req, res, next) {
  res.render("../views/ticket.ejs");
});

/* Set cookies */
router.get('/setcookie', (req, res) => {
  res.cookie(`Cookie token name`,`encrypted cookie string Value`,{
    maxAge: 5000,
    // expires works the same as the maxAge
    // expires: new Date('01 12 2021'),
    secure: false,  // it have to be true after deployment to use https not http
    httpOnly: true,
    sameSite: 'lax'
});
  res.send('Cookie have been saved successfully');
});

// get the cookie incoming request
router.get('/getcookie', (req, res) => {
  //show the saved cookies
  res.send(req.cookies);
});

// delete the saved cookie
router.get('/deletecookie', (req, res) => {
  //show the saved cookies
  res.clearCookie()
  res.send('Cookie has been deleted successfully');
});

module.exports = router;