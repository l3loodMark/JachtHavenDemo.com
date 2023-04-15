const square = document.querySelector('.square');

square.addEventListener('mouseover', () => {
  square.style.backgroundColor = 'red';
  square.style.transform = 'scale(1.5)';
});

square.addEventListener('mouseout', () => {
  square.style.backgroundColor = 'blue';
  square.style.transform = 'scale(1)';
});

const circle = document.querySelector('.circle');

let angle = 0;
setInterval(() => {
  angle += 5;
  circle.style.transform = `rotate(${angle}deg)`;
}, 100);

const triangle = document.querySelector('.triangle');

triangle.addEventListener('click', () => {
  triangle.style.transform = 'translateX(200px)';
  triangle.style.transition = 'transform 1s';
});


const form = document.querySelector('form');
const submitButton = document.querySelector('#submit-button');
const bedanktMelding = document.querySelector('#bedankt-melding');

function validateForm() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var message = document.forms["myForm"]["message"].value;

  if (name == "" || email == "" || message == "") {
    alert("Vul alstublieft alle velden in.");
    return false;
  } else {
    alert("Bedankt voor uw bericht! We nemen zo snel mogelijk contact met u op.");
    return true;
  }
}


