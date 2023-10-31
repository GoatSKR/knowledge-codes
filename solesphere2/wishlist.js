let wishlistData = localStorage.getItem("wishlist")
  ? JSON.parse(localStorage.getItem("wishlist"))
  : "";
  cartwishes();



let wisthlistItemId = document.getElementById("gridWishlist");
let itmeElement = wishlistData
  ? `<span style="font-size: 30px; margin-top: 30px">${wishlistData.length} items</span> `
  : `<span style="font-size: 30px; margin-top: 30px">0 items</span> `;
wisthlistItemId.innerHTML = itmeElement;

function addToCart(event) {
  let cartItems = localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : "";
  let isExist = cartItems
    ? cartItems.find((item) => item.id == event.target.value)
    : "";
  console.log(isExist);
  if (!!isExist) {
  } else {
    let carttoadd = wishlistData.find(
      (indexdata) => indexdata.id == event.target.value
    );
    if (carttoadd) {
      localStorage.setItem("cart", JSON.stringify([carttoadd, ...cartItems]));
      let index = wishlistData.indexOf(carttoadd);
      wishlistData.splice(index, 1);
      wishlistData = wishlistData.filter(
        (item) => item != null || item != undefined || item != ""
      );
      localStorage.setItem("wishlist", JSON.stringify(wishlistData));
    }
  }



  itmeElement = wishlistData
  ? `<span style="font-size: 30px; margin-top: 30px">${wishlistData.length} items</span> `
  : `<span style="font-size: 30px; margin-top: 30px">0 items</span> `;
wisthlistItemId.innerHTML = itmeElement;

  if (wishlistData.length <= 0) {
    document.getElementById("lmain").style.display = "flex";
    document.getElementById("lmain").style.justifyContent = "center";
    document.getElementById(
      "lmain"
    ).innerHTML = `<img  src="./assets/images/EmptyWishlist.jpg" style="height:28vh">`;

  }
  cartwishes()
  cartBadge();
  wishlistBadge()

  wishlistData.length == 0 ? emptyWishlist() :'';
}
function cartwishes(){
    let cmainwishlist = document.getElementById("lmain");
  let cmaindata = ``;
  // Write a DOM Logic to get Wishlist here
  cmainwishlist.innerHTML = cmaindata;
}

cartBadge()
function cartBadge(){
     let clength = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0;
     let cartbadgeId =document.getElementById('cartBadgeId');
    cartbadgeId.innerHTML = `${clength}`

}

wishlistBadge()

function wishlistBadge(){
    let wlength = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')).length : 0;
    let wishlistId = document.getElementById('wishlistBadgeId');
    wishlistId.innerHTML = `${wlength}`
}
emptyWishlist()

function emptyWishlist(){
  if (wishlistData.length <= 0) {
    document.getElementById("lmain").style.display = "flex";
    document.getElementById("lmain").style.justifyContent = "center";
    document.getElementById(
      "lmain"
    ).innerHTML = `<div style="height:60vh; display:flex; justify-content:space-evenly; align-items:center; flex-direction:column"><img  src="./assets/images/wishlist.png" style="height:30vh; background-color:white"><h2>Wishlist is empty</h2></div>`;

  }
}

const logout = document.getElementById('logout-icon');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('isLoggedIn', false);
  localStorage.removeItem('user');
  window.location.href = './login.html'
});


function init() {
  let isLoggedIn = localStorage.getItem('isLoggedIn');
  if(isLoggedIn && isLoggedIn == 'true') {
    let userName = localStorage.getItem('user');
    document.getElementById('userName').innerHTML = userName;
  } else {
    window.location.href = './login.html'
  }
}


const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElems = [overlay, navOpenBtn, navCloseBtn];
for (let i of navElems) {
  i.addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}
// for (let i = 0; i < navElems.length; i++) {
//   navElems[i].addEventListener("click", function () {
//     navbar.classList.toggle("active");
//     overlay.classList.toggle("active");
//   });
// }


function removedata(id){

  let item = wishlistData.find(data=> data.id == id);
  console.log(item)
  let index = wishlistData.indexOf(item);
  wishlistData.splice(index, 1);
      wishlistData = wishlistData.filter(
        (data) => data != null || data != undefined || data != ""
      );
      localStorage.setItem("wishlist", JSON.stringify(wishlistData));
      cartwishes()
      cartBadge();
      wishlistBadge();
      itmeElement = wishlistData
      ? `<span style="font-size: 30px; margin-top: 30px">${wishlistData.length} items</span> `
      : `<span style="font-size: 30px; margin-top: 30px">0 items</span> `;
    wisthlistItemId.innerHTML = itmeElement;
emptyWishlist()

}


/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");