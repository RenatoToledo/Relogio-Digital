

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');


const relogio = setInterval(function time() {
    let dateToday = new Date();

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();
    let d = dateToday.getDate();
    let m = dateToday.getMonth()+1;
    let y = dateToday.getFullYear();



    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;
    if (d < 10) d = '0' + d;
    if (m < 10) m = '0' + m;

    hours.textContent = hr;
    minutes.textContent = min;
    seconds.textContent = s;
    day.textContent = d;
    month.textContent = m;
    year.textContent = y;

})


/*
const dt = setInterval(function date() {
    let date = new Date();
    let d = date.getDate();
    let m = date.getMonth()+1;
    let y = date.getFullYear();

    if (d < 10) hr = '0' + d;
    if (m < 10) min = '0' + m;
    if (y < 10) s = '0' + y;

    day.textContent = d;
    month.textContent = m;
    year.textContent = y;
})
*/

const data=new Date()

