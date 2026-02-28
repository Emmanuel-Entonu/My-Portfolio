const eventDate = new Date("August 30, 2025 18:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  updateCountdown('days', days);
  updateCountdown('hours', hours);
  updateCountdown('minutes', minutes);
  updateCountdown('seconds', seconds);

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Event Started!";
  }
}, 1000);

function updateCountdown(id, value) {
  const element = document.getElementById(id);
  const currentVal = parseInt(element.innerText);
  const newVal = value.toString().padStart(2, '0');

  if (currentVal !== value) {
    element.innerText = newVal;
    element.style.transform = "scale(1.3)";
    element.style.color = "#ffd700"; 
    setTimeout(() => {
      element.style.transform = "scale(1)";
      element.style.color = "white";
    }, 300);
  }
}


const form = document.querySelector('.signup-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (name === '' || email === '') {
    alert('Please fill in both fields.');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  
  const successMsg = document.createElement('div');
  successMsg.classList.add('success-message');
  successMsg.innerText = "🎉 You've successfully subscribed! We'll keep you updated.";

  form.reset();
  form.parentElement.appendChild(successMsg);

  setTimeout(() => {
    successMsg.remove();
  }, 4000);
});

function validateEmail(email) {k
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}
