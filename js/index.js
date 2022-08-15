// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};



// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

  // Iteration 1: set the visibility of `<section class="green-pepper">`
function renderMushrooms() {
  //console.log(document.querySelector(".mushroom"))
  document.querySelectorAll('.mushroom').forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}


function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((oneGreen) => {
    if (state.greenPeppers) {
      oneGreen.style.visibility = 'visible';
    } else {
      oneGreen.style.visibility = 'hidden';
    }
  });
}

  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
function renderWhiteSauce() {
  if(state.whiteSauce){
  document.querySelector(".sauce").classList.add("sauce-white")
  }
  if(!state.whiteSauce){
  document.querySelector(".sauce").classList.remove("sauce-white")
    }
  }

  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  if(state.glutenFreeCrust){
    document.querySelector(".crust").classList.add("crust-gluten-free")
    }
    if(!state.glutenFreeCrust){
    document.querySelector(".crust").classList.remove("crust-gluten-free")
      }
    }


  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  if(state.pepperoni){
  document.querySelector(".btn-pepperoni").classList.add("active")
}if (!state.pepperoni){
  document.querySelector(".btn-pepperoni").classList.remove("active")
}
if(state.mushrooms){
  document.querySelector(".btn-mushrooms").classList.add("active")
}if (!state.mushrooms){
  document.querySelector(".btn-mushrooms").classList.remove("active")
}
if(state.greenPeppers){
  document.querySelector(".btn-green-peppers").classList.add("active")
}if (!state.greenPeppers){
  document.querySelector(".btn-green-peppers").classList.remove("active")
}
if(state.whiteSauce){
  document.querySelector(".btn-sauce").classList.add("active")
}if (!state.whiteSauce){
  document.querySelector(".btn-sauce").classList.remove("active")
}
if(state.glutenFreeCrust){
  document.querySelector(".btn-crust").classList.add("active")
}if (!state.glutenFreeCrust){
  document.querySelector(".btn-crust").classList.remove("active")
}

}

  // Iteration 4: change the HTML of `<aside class="panel price">`
function renderPrice() {
const list= document.querySelector(".panel.price ul").children;
console.log(list)
let price = 10
let newPrice = price 
const extraPriceP = 1;
const extraPriceM = 1;
const extraPricePe = 1;
const extraPriceS = 3;
const extraPriceC = 5;


if(state.pepperoni){
  list[0].style.display ="block";
  newPrice += extraPriceP
  document.querySelector(".panel.price strong").innerHTML = newPrice
}
if(!state.pepperoni){
  list[0].style.display ="none";
  newPrice -= extraPriceP
  document.querySelector(".panel.price strong").innerHTML = newPrice
}
if(state.mushrooms){
list[1].style.display ="block";
newPrice += extraPriceM
document.querySelector(".panel.price strong").innerHTML  = newPrice

}if (!state.mushrooms){
  list[1].style.display="none";
  newPrice -= extraPriceM
  document.querySelector(".panel.price strong").innerHTML = newPrice
}
if(state.greenPeppers){
  list[2].style.display ="block";
  newPrice += extraPricePe
  document.querySelector(".panel.price strong").innerHTML = newPrice
}if (!state.greenPeppers){
  list[2].style.display ="none";
  newPrice -= extraPricePe
  document.querySelector(".panel.price strong").innerHTML = newPrice
}
if(state.whiteSauce){
  list[3].style.display ="block";
  newPrice += extraPriceS
  document.querySelector(".panel.price strong").innerHTML = newPrice
}if (!state.whiteSauce){
  list[3].style.display ="none";
  newPrice -= extraPriceS
  document.querySelector(".panel.price strong").innerHTML = newPrice
}
if(state.glutenFreeCrust){
  list[4].style.display ="block";
  newPrice += extraPriceC
  document.querySelector(".panel.price strong").innerHTML = newPrice
}if (!state.glutenFreeCrust){
  list[4].style.display ="none";
  newPrice -= extraPriceC
  document.querySelector(".panel.price strong").innerHTML = newPrice
}
}
  /*
if(state.pepperoni){
  document.querySelector(".price.panel").classList.add("#pp")
}
if(!state.pepperoni){
  document.querySelector(".price.panel").classList.remove("#pp")
}

if(!state.mushrooms){ 
  document.querySelector("#mm").innerHTML = "10"
}
}
*/
renderEverything();




// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').addEventListener('click', function() {
  //console.log(document.querySelector('.btn.btn-mushrooms'))
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', function() {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function() {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})