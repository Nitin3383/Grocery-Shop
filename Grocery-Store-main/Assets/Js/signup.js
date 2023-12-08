
function validation() {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("useremail").value.trim();
    let password = document.getElementById("userpassword").value.trim();
  
    const userCheck = /^[^\s][A-Za-z.]{3,30}$/;
    const emailCheck = /^[A-Za-z_.0-9]{3,}@[A-Za-z0-9]{3,}[.]{1}[A-Za-z.0-9]{2,6}$/;
    const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  
    document.getElementById("usererror").innerText = "";
    document.getElementById("emailerror").innerText = "";
    document.getElementById("pwderror").innerText = "";
  
    if (!userCheck.test(username)) {
      document.getElementById("usererror").innerText = "** User Name is Required only Alphabet and Should me more than 3 characters"

      // ";
      return false; 
    }
  
    if (!emailCheck.test(email)) {
      document.getElementById("emailerror").innerText = "** Uppercase (A-Z) and lowercase (a-z)  Digits (0-9)";
      return false; 
    }
  
    if (!passwordCheck.test(password)) {
      document.getElementById("pwderror").innerText = "** Password is required minimum 3 characters one special symbol and one number";
      return false; 
    }
  
    store();
    window.location.href = "index.html";
  }
  
  function store() {
    let username = document.getElementById('username').value.trim();
    let email = document.getElementById("useremail").value.trim();
    let password = document.getElementById('userpassword').value.trim();
  
    const usersJSON = localStorage.getItem('users');
    let users = JSON.parse(usersJSON) || [];
  
    const user = { name: username, email, password };
  
    if (username && email && password) {
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
    }
  }