document.addEventListener('DOMContentLoaded', function(){
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');
  if(toggle){
    toggle.addEventListener('click', () => {
      if(nav.style.display === 'flex' || nav.style.display === 'block') {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'block';
      }
    });
  }

  const greetEl = document.getElementById('greeting');
  if(greetEl){
    const now = new Date();
    const hours = now.getHours();
    let g = 'Hello — welcome!';
    if(hours < 12) g = 'Good morning!';
    else if(hours < 18) g = 'Good afternoon!';
    else g = 'Good evening!';
    greetEl.textContent = g + ' Today is ' + now.toLocaleDateString() + ', ' + now.toLocaleTimeString();
  }

  const signup = document.getElementById('signupForm');
  if(signup){
    signup.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('fullname');
      const email = document.getElementById('emailSign');
      const pw = document.getElementById('password');
      const conf = document.getElementById('confirm');
      const msg = document.getElementById('signupMessage');
      msg.textContent = '';
      const errors = [];
      if(!name.value.trim()) errors.push('Full name is required.');
      if(!email.value.includes('@')) errors.push('Enter a valid email.');
      if(pw.value.length < 6) errors.push('Password must be at least 6 characters.');
      if(pw.value !== conf.value) errors.push('Passwords do not match.');
      if(errors.length){
        msg.style.color = 'crimson';
        msg.textContent = errors.join(' ');
      } else {
        msg.style.color = 'green';
        msg.textContent = 'Success! You can now leave comments after login.';
        signup.reset();
      }
    });
  }

  const contact = document.getElementById('contact');
  if(contact){
    contact.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thanks! This demo does not send messages.');
      contact.reset();
    });
  }

  const login = document.getElementById('loginForm');
  if(login){
    login.addEventListener('submit', function(e){
      e.preventDefault();
      const em = document.getElementById('emailL').value;
      const message = document.getElementById('loginMessage');
      message.style.color = 'green';
      message.textContent = 'Demo login accepted for ' + em + '.';
    });
  }
});

function openModal(img) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popupImg").src = img.src;
    document.getElementById("popupText").innerText = img.alt;
}

function closeModal() {
    document.getElementById("popup").style.display = "none";
}