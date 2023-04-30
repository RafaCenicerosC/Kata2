const username = document.getElementById('username');
const password = document.getElementById('password');
const button = document.getElementById('button');
const alertDiv = document.getElementById('alert');

const users = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' },
  { username: 'user3', password: 'pass3' },
];

button.addEventListener('click', (e) => {
  e.preventDefault();
  const data = {
    username: username.value,
    password: password.value,
  };

  // Check if username and password match any user
  const user = users.find((u) => u.username === data.username && u.password === data.password);

  if (user) {
    // Redirect to new page
    if(username.value == "user1"){
      document.cookie = "usuario=user1";
      window.location.href = "bankapp.html";
    }
    else if(username.value == "user2"){
      document.cookie = "usuario=user2";
      window.location.href = "bankapp.html";
    }
    else if(username.value == "user3"){
      document.cookie = "usuario=user3";
      window.location.href = "bankapp.html";
    }
    
    
  } else {
    // Show alert
    alertDiv.innerHTML = 'Username or password is incorrect.';
    alertDiv.classList.add('alert');
  }
});


