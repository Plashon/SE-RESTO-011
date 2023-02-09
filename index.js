//show menu
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector("header .flex .navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};
//show search
let search = document.querySelector('#search-icon');
search.onclick = () =>{
let search_form = document.querySelector('#search-form');
     search_form.classList.toggle('active');
} 
//close search
let close_icon = document.querySelector('#close');
close_icon.onclick = () =>{
let search_form = document.querySelector('#search-form');
     search_form.classList.remove('active');
} 