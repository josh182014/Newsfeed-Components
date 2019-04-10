
const toggleMenu = (event) => {
  // Toggle the "menu--open" class on your menu refence. 
  // if (menu.style["display"] === "block") {
  //   menu.style["display"] = "none";
  //   console.log('inside if statement')
  //     return;
  // }
  // menu.style["display"] = "block";
  // console.log('outside of if statement')
  menu.classList.toggle('menu--open');
  
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button').addEventListener('click', function(event){
  toggleMenu();
})
// Using your menuButton reference, add a click handler that calls toggleMenu