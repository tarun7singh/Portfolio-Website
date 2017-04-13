$(document).ready(function(){
var days = document.getElementById('days'),
    hours = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds');

change();

function update(c_days, c_hours, c_minutes, c_seconds){
  days.innerHTML = c_days;
  hours.innerHTML = c_hours;
  minutes.innerHTML = c_minutes;
  seconds.innerHTML = c_seconds;
}

function change(){
  var prevTime = new Date(2016,9,24,16,4);  // year month date hour minute 
  var thisTime = new Date();              // now
  var diff = thisTime.getTime() - prevTime.getTime();   // console.log(diff/(1000*60*60*24))
  c_hours = parseInt(diff/(1000*60*60)%12);
  c_minutes = parseInt(diff/(1000*60)%60);
  c_seconds = parseInt(diff/(1000)%60);
  c_days = parseInt(diff/(1000*60*60*24));
  update(c_days, c_hours, c_minutes, c_seconds);
  t = setTimeout(change, 500);
  }
});
