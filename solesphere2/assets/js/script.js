'use strict';



/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");


const regsiterForm = document.querySelector('.register-form');
const submitBtn = document.getElementById('submit-btn');
const submissionStatus = document.querySelector('.submission-status');
let cart = [];
let wishlist=[];
// input values
const firstName = document.getElementById('firstname'),
      lastName = document.getElementById('lastname'),
      emailAddr = document.getElementById('email'),
      phoneNumber = document.getElementById('phonenumber'),
      password = document.getElementById('password'),
      confirmPassword = document.getElementById('confirm-password'),
      dateOfBirth = document.getElementById('dob'),
      state = document.getElementById('state');




const navElems = [overlay, navOpenBtn, navCloseBtn];
for (let j of navElems) {
  j.addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");


// error or success status
function inputStatus(status, input){
  let inputGroup = input.parentElement;
  if(status){
      inputGroup.classList.add('success');
  } else {
      inputGroup.classList.add('error');
  }

  setTimeout(() => {
      inputGroup.classList.remove('success', 'error');
  }, 1500);
}

//initializing content based on localstorage values
//showing sections based on whether user is logged in or not
function init() {
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  if(isLoggedIn && isLoggedIn == 'true') {
    let userName = localStorage.getItem('user');
    document.getElementById('home').style.display = 'block';
    document.getElementById('footer').style.display = 'block';
    document.getElementById('wishlist').style.display = 'block';
    document.getElementById('basket').style.display = 'block';
    document.getElementById('logout').style.display = 'block';
    document.getElementById('userName').innerHTML = userName;
    document.getElementById('user').style.display = 'block';
    document.getElementById('login-user').style.display = 'none';
  } else {
    document.getElementById('home').style.display = 'block';
    document.getElementById('footer').style.display = 'block';
    document.getElementById('wishlist').style.display = 'none';
    document.getElementById('basket').style.display = 'none';
    document.getElementById('logout').style.display = 'none';
    document.getElementById('userName').innerHTML = 'Login';
    document.getElementById('login-user').style.display = 'block';
    document.getElementById('user').style.display = 'none';
  }
}



//logout make isLoggedIn false in local storage and user empty and
//hide basket, wishlist, login form, logout and clear user name
const logout = document.getElementById('logout-icon');
// Write the Logout logic here



function isUserLoggedIn() {
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  return isLoggedIn && isLoggedIn == 'true';
}

let cartArr = []
function addToCart(item) {
  if(!isUserLoggedIn()) {
    window.location.href = './login.html';
    return;
  }
  let cartItems = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : ''
    ? JSON.parse(localStorage.getItem("cart"))
    : "";
    if(!!cartItems){
      let isExist = cartItems
      ? cartItems.find((cart) => cart.id == item.id)
      : "";
      let index = cartItems.indexOf(isExist);
      if(index < 0){
        localStorage.setItem('cart', JSON.stringify([...cartItems, item]))
      }
    }else{
      localStorage.setItem('cart', JSON.stringify([...cartArr, item]))
    }



  cartBadge();
}


cartBadge()
function cartBadge(){
     let clength = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0;
     let cartbadgeId =document.getElementById('cartBadgeId');
    cartbadgeId.innerHTML = `${clength}`

  }


let wishlistarr = [];
function addtowishlist(item){
  if(!isUserLoggedIn()) {
    window.location.href = './login.html';
    return;
  }
  let wishlistdata = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : '';
  if(!!wishlistdata){
    let isExist = wishlistdata ? wishlistdata.find(witem=> witem.id==item.id) : '';
    let index = wishlistdata.indexOf(isExist);
    if(index < 0){
      localStorage.setItem('wishlist', JSON.stringify([...wishlistdata, item]))
}
  }else{
    localStorage.setItem('wishlist', JSON.stringify([...wishlistarr, item]))
  }
  wishlistBadge()
}

wishlistBadge()

function wishlistBadge(){
    let wlength = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')).length : 0;
    let wishlistId = document.getElementById('wishlistBadgeId');
    wishlistId.innerHTML = `${wlength}`
}

function updateCart() {
  cartEle.innerHTML = cart.length;
  console.log(cart);
  localStorage.setItem("cart",JSON.stringify(cart));
}

function updateWishlist() {
const wishlistEle = document.getElementById('wl');
  wishlistEle.innerHTML = wishlist.length;
  console.log( wishlist);
  localStorage.setItem("wishlist",JSON.stringify(wishlist));
}



filterAll('all')
function filterAll(c){
  // Write your filter logic here
}


function w3AddClass(element, name) {
  var m, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (m of arr2) {
    if (arr1.indexOf(m) == -1) {
      element.className += " " + m;
    }
  }
}

function w3RemoveClass(element, name) {
  var n, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (n of arr2) {
    while (arr1.indexOf(n) > -1) {
      arr1.splice(arr1.indexOf(n), 1);
    }
    console.log('arr1==>>', arr1)
  }
  element.className = arr1.join(" ");

}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("filter-btn");
for (var i of btns) {
  i.addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
    this.className += " active";
  });
}

function checkoutInit() {
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  if(isLoggedIn && isLoggedIn == 'true') {
    let userName = localStorage.getItem('user');
    document.getElementById('userName').innerHTML = userName;
  } else {
    window.location.href = './login.html'
  }
}

function contactInit() {
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  if(isLoggedIn && isLoggedIn == 'true') {
    let userName = localStorage.getItem('user');
    document.getElementById('user').style.display = 'block';
    document.getElementById('userName').innerHTML = userName;
    document.getElementById('logout').style.display = 'block';
  } else {
    document.getElementById('login-user').style.display = 'block';
  }
}