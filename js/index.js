const row = document.querySelector(".row");
let checkOutBox = document.querySelector("#checoutbox");
let container = ``;

let cart = document.querySelector(".fa-cart-plus");
let cart2 = document.querySelector(".item");

let count = 0;

const data = fetch("https://fakestoreapi.com/products/category/men's clothing");
const response = data
  .then((res) => res.json())
  .then((data) => {
    data.forEach((items) => {
      console.log(items);
      container += `<div class="col-sm-4">
                      
                      <img src="${items.image}" class="card-img-top" alt="...">
                      <div class="card-body">

                          <p class="card-text">
                          ${items.description}
                          </p>
                      </div>

                      <div class="card-body">
                          <a href="#" class="">${items.price}</a>
                          <a href="#" class="card-link click">Add cart</a>
                      </div>

                  </div>`;
    });
    console.log(container);
    row.innerHTML = container;
  });

//console.log(cart);
setTimeout(() => {
  const allClicks = document.querySelectorAll(".click");
  console.log(allClicks[3]);
  for (let i = 0; i < allClicks.length; i++) {
    allClicks[i].addEventListener("click", function () {
      count += 1;
      console.log(count);
      cart.innerHTML = count;
      cart2.innerHTML = count;
    });
  }
  cart.addEventListener("click", function () {
    alert(`You are about to checkout ${count} product`);
  });
}, 9000);
