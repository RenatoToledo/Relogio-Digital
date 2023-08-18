const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');


const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})



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

    