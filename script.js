// script.js - client-side behavior for the auth pages

function togglePassword(buttonId, inputId){
  const btn = document.getElementById(buttonId);
  const input = document.getElementById(inputId);
  if(!btn || !input) return;
  btn.addEventListener('click', () => {
    if(input.type === 'password'){
      input.type = 'text';
      btn.textContent = 'Hide';
    } else {
      input.type = 'password';
      btn.textContent = 'Show';
    }
  });
}

// Login page
if(document.getElementById('loginForm')){
  togglePassword('togglePw','password');
  const f = document.getElementById('loginForm');
  f.addEventListener('submit', (e)=>{
    e.preventDefault();
    const uid = document.getElementById('userid').value.trim();
    const pw = document.getElementById('password').value;
    if(!uid || !pw){alert('Please enter User ID and Password');return}
    // Simulated login - replace with real auth call
    alert('Logged in as ' + uid + ' (simulated)');
    // Redirect or update UI
  });
}

// Signup page
if(document.getElementById('signupForm')){
  togglePassword('toggleSignPw','signpass');
  const f = document.getElementById('signupForm');
  f.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('signpass').value;
    const repass = document.getElementById('repass').value;
    if(!name || !email || !pass || !repass){alert('Please fill all required fields');return}
    if(pass !== repass){alert('Passwords do not match');return}
    // Simulated signup
    alert('Account created for ' + name + ' (simulated)');
    window.location.href = 'index.html';
  });
}

// Forgot page
if(document.getElementById('forgotForm')){
  const f = document.getElementById('forgotForm');
  f.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById('emailreset').value.trim();
    if(!email){alert('Enter your email');return}
    alert('If an account exists for ' + email + ', a reset link has been sent (simulated)');
    window.location.href = 'index.html';
  });
}
