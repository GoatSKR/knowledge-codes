
if(JSON.parse(localStorage.getItem('isLoggedIn'))){
    document.getElementById('logout').style.display = 'block'
}else{
    document.getElementById('logout').style.display = 'none'
}
const logout = document.getElementById('logout-icon');
logout.addEventListener('click', (e) => {
    console.log('logout')
  e.preventDefault();
  localStorage.setItem('isLoggedIn', false);
  localStorage.removeItem('user');
  window.location.href = './login.html';
});
let cartData = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : '';

cartUpdate()

function cartUpdate(){
    let cartId = document.getElementById('lmain');
   
    let cartList  =''
    cartData.length > 0 ? cartData.forEach(items=>{
    
    cartList += `
    <div class="grid-container">
      <div class="grid-item"><img src=${items.img} style="width:100%; height:20vh"/></div>
      <div class="grid-item">
      <h3 style="padding-left:0">${items.name}</h3>
      <p class="text-height"><b>Color: </b>Mercedes Team Silver</p>
      <p class="text-height"><b>Size: </b>Adult</p>
      <select class="select-box" onchange="changeSelector(event, ${items.id})">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      </select>
      </div> 
      <div class="grid-item price-rate right">
      <p>$${items.price}</p>
      <img class="text-height" onclick="deletedata(${items.id})" style="cursor: pointer; width:20px; height:20px; float:right"  src="./assets/images/delete.png" />
      </div> 
        
    </div>`
    
    }) :` `;  
    cartId.innerHTML = cartList;
}

function deletedata(id){
    console.log(id);
    let item = cartData.find(data=> data.id == id);
    console.log(item)
    let index = cartData.indexOf(item);
    cartData.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartData))
    totalupdate();
    cartUpdate();
    cartBadge();
    cartData.length == 0 ? cartEmpty() :'';


    
}

function changeSelector(event, idss){
    let finddata = cartData.find(item=> item.id == idss);
    finddata.qty = event.target.value
    console.log(finddata);
    let index = cartData.indexOf(finddata);
    cartData.splice(index, 1);
    cartData = [...cartData, finddata]
    localStorage.setItem('cart', JSON.stringify(cartData));
    totalupdate()
}

totalupdate()
function totalupdate(){
    let sum = 0;
console.log(cartData)
    cartData.length > 0 ? cartData.forEach(item => {
        console.log(item.id)

    sum += (Number(item.price) * Number(item.qty ? item.qty : 1));
}) : '';
console.log(sum)
let cartSubTotal = document.getElementById('rmain');
let cartListSubTotal = `
<div class="grid-containers second-grid">
            <div class="grid-items text-aligns">
              <p>Subtotal</p>
            </div>
            <div class="grid-items text-aligns-price">
              <p>${sum.toFixed(2)}</p>
            </div>
          </div>
          <div class="grid-containers">
            <div class="grid-items text-aligns">
              <p>Grand Total:</p>
            </div>
            <div class="grid-items text-aligns-price">
              <p>${sum.toFixed(2)}</p>
            </div>
          </div>
          <div class="grid-containers">
            <a href="./checkout.html"
              ><button
                class="btn btn-primary btn-checkout"
                onclick="checkout()"
              >
                Check Out
              </button></a
            >
          </div>

`;
cartSubTotal.innerHTML = cartData.length > 0 ? cartListSubTotal : ''
    
}



function checkout(){
    localStorage.removeItem("cart");
}
let wlength = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')).length : 0;
let wishlistId = document.getElementById('wishlistBadgeId');
wishlistId.innerHTML = `${wlength}`

cartBadge()
function cartBadge(){
     let clength = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0;
     let cartbadgeId =document.getElementById('cartBadgeId');
    cartbadgeId.innerHTML = `${clength}`  
    
}
cartEmpty()

function cartEmpty(){
  if(cartData.length <= 0){
    let cmain = document.getElementById('cmain');
    cmain.innerHTML = '<div style="display:flex; justify-content:center; align-items:center; flex-direction:column"><img  src="./assets/images/cart.png" style="height:30vh; background-color:white"><h2>Cart is empty</h2></div>'
}
}

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



/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");