const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container1');

const emailAddr = document.getElementById('email2'),
password = document.getElementById('password2');


signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});




//login submit check user email and password if valid then show home page
//for invalid credentials show error message
const login = document.getElementById('sign-in');
login.addEventListener('click', (e) => {
  // Write you code here
})





