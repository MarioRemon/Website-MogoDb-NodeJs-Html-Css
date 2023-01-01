const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const eventSelect = document.getElementById("event");

populateUI();

let ticketPrice = +eventSelect.value;

// Save selected event index and price
function setEventData(eventIndex, eventPrice) {
localStorage.setItem("selectedEventIndex", eventIndex);
localStorage.setItem("selectedEventPrice", eventPrice);
}

// Update total and count
function updateSelectedCount() {
const selectedSeats = document.querySelectorAll(".row .seat.selected");

const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

const selectedSeatsCount = selectedSeats.length;

count.innerText = selectedSeatsCount;
total.innerText = selectedSeatsCount * ticketPrice;

setEventData(eventSelect.selectedIndex, eventSelect.value);
}


// Get data from localstorage and populate UI
function populateUI() {
const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

if (selectedSeats !== null && selectedSeats.length > 0) {
seats.forEach((seat, index) => {
    if (selectedSeats.indexOf(index) > -1) {
    console.log(seat.classList.add("selected"));
    }
});
}

const selectedEventIndex = localStorage.getItem("selectedEventIndex");

if (selectedEventIndex !== null) {
eventSelect.selectedIndex = selectedEventIndex;
console.log(selectedEventIndex)
}
}
console.log(populateUI())
// Event select event
eventSelect.addEventListener("change", (e) => {
ticketPrice = +e.target.value;
setEventData(e.target.selectedIndex, e.target.value);
updateSelectedCount();
});

// Seat click event
container.addEventListener("click", (e) => {
if (
e.target.classList.contains("seat") &&
!e.target.classList.contains("sold")
) {
e.target.classList.toggle("selected");

updateSelectedCount();
}
});

// Initial count and total set
updateSelectedCount();