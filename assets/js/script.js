//Have current date and time displayed
$("#currentDay").text(moment().format('LLLL'));

//variable for hours of the day
var displayHour = ['9AM', '10AM', '11AM', '12PM', '13PM', '14PM', '15PM', '16PM', '17PM', '18PM'];

//create timeblocks for the planner using business hours
for (var i=0; i < 10; i++) {
  $(".container").append(`
  <div class="row time-block" id="hour-${i+9}">
  <div class="col-1 hour">${displayHour[i]}</div>
  <textarea class="col-10 description" />
  <button class="col-1 saveBtn">Save</button>
  </div>
  `);

  //check time
  if (moment().format('H') == i+9) {
    $(`#hour-${i+9}`).addClass("present");
  }
  else if (moment().format('H') > i+9) {
    $(`#hour-${i+9}`).addClass("past");
  }
  else {
    $(`#hour-${i+9}`).addClass("future");
  };
};

//check time of day (past/present/future)

//save to local storage

//get from local storage