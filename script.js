// script.js - client-side behavior for the auth pages and dashboard

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
    // Save user to localStorage so dashboard can personalize
    localStorage.setItem('cp_user', uid);
    // Redirect to dashboard
    window.location.href = 'dashboard.html';
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
    localStorage.setItem('cp_user', name);
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

// Dashboard personalization & simple interactions
if(document.getElementById('dashboardRoot')){
  const user = localStorage.getItem('cp_user') || 'User';
  const userEl = document.getElementById('cpUser');
  if(userEl) userEl.textContent = user;

  // simple demo data - would come from API in real app
  const totalDowntimeEl = document.getElementById('totalDowntime');
  const qaCostEl = document.getElementById('qaCost');
  const prodImpactEl = document.getElementById('prodImpact');
  const envEl = document.getElementById('envCount');

  if(totalDowntimeEl) totalDowntimeEl.textContent = '1.8 hrs';
  if(qaCostEl) qaCostEl.textContent = '$73';
  if(prodImpactEl) prodImpactEl.textContent = '$367';
  if(envEl) envEl.textContent = '1';

  // Quick actions
  const logBtn = document.getElementById('quickLog');
  if(logBtn) logBtn.addEventListener('click', ()=> alert('Open Log Downtime (simulated)'));
  const exportBtn = document.getElementById('quickExport');
  if(exportBtn) exportBtn.addEventListener('click', ()=> alert('Export Report (simulated)'));

  // Sign out
  const signOut = document.getElementById('signOut');
  if(signOut) signOut.addEventListener('click', ()=>{
    localStorage.removeItem('cp_user');
    window.location.href = 'index.html';
  });
}
