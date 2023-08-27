

const user_input = document.getElementById('user-input');
const result = document.getElementById('result');
const result2 = document.getElementById('result2');

const AgeCalculate=()=>{
  let birthdate = new Date(user_input.value);
  let d1 = birthdate.getDate();
  let m1 = birthdate.getMonth() + 1;
  let y1 = birthdate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3 , m3 , y3; 
  // calculate year
  y3 = y2 - y1;

  // calculate month
  if (m2 >= m1) {
     m3 = m2 - m1;
  }else{
    m3 = 12 + m2 - m2;
  }

  // claculate day
  if (d2 >= d1) {
    d3 = d2 - d1
  } else {
    d3 = getDayInMonth(y1 , m1) + d2 - d1;
  }

  // calculate hour , minute, second
  let houe , minute , second
  hour = y3 *365 * 24+ m3 * 720 + d3 * 24;
  minute = y3 * 365 * 1440 + m3 *43200 + d3 * 1440;
  second = y3 * 365 * 86400 + m3 * 259200 + d3 * 86400;

result.innerHTML = `${y3} Years , ${m3} Months , ${d3} Days.`
result2.innerHTML = `! ${hour} Hours, ${minute} Minutes , ${second} Seconds !`
}

function getDayInMonth(year , month){

  return new Date(year , month,0).getDate();
}
