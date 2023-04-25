/*jslint browser:true */
/*global document */
/*

const menuToggle = document.querySelector(".menu-toggle");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll(".nav-item a");

let showMenu = false;
menuToggle.addEventListener("click", toggleMenu);




const currentPage = window.location.pathname.split("/").pop().replace(".html", "").replace("_"," "); // get the current page name
console.log(currentPage);

navLinks.forEach(function(link) {
    if (link.getAttribute("href") === currentPage) {
        link.parentElement.classList.add("active"); // add "active" class to the link's parent if it matches the current page
    }
    
    link.addEventListener("click", function () {
        // remove "active" class from all links
        navItems.forEach((navItem) => navItem.classList.remove("active"));

        // add "active" class to the clicked link's parent
        link.parentElement.classList.add("active");
    });

    link.addEventListener("mouseover", function () {
        link.style.textShadow = "2px 2px 4px rgba(0,0,0,0.9)";
        link.style.color = "black";
    });
    
    link.addEventListener("mouseout", function () {
        link.style.textShadow = "none";
        link.style.color = "white";
    });
});

//dla mniejszych ekranów
function toggleMenuSmall() {
    if (window.innerWidth <= 768) {
        menuToggle.classList.remove("hidden");
        menuToggle.addEventListener("click", toggleMenu);
    } else {
        menuToggle.classList.add("hidden");
        menuToggle.removeEventListener("click", toggleMenu);
        menuNav.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));
        showMenu = false;
    }
}

window.addEventListener("resize", toggleMenuSmall);

function toggleMenu() {
    if (!showMenu) {
        menuToggle.classList.add("close");
        menuNav.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));

        showMenu = true;

    } else {
        menuToggle.classList.remove("close");
        menuNav.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));

        showMenu = false;
    }

    // hide all other links except the active one
    const activeLink = document.querySelector(".nav-item.active");
    navItems.forEach((item) => {
        console.log(activeLink);
        console.log(item);
        if (item !== activeLink) {
            item.classList.remove("show");
        }
    });

    


}
*/






/*
function toggleMenu() {
    if (!showMenu) {
        menuToggle.classList.add("close");
        menuNav.classList.add("show");
        navItems.forEach((item) => item.classList.add("show"));

        // hide all other links except the active one
        const activeLink = document.querySelector(".nav-item.active");
        navItems.forEach((item) => {
            if (item !== activeLink) {
                item.classList.remove("show");
            }
        });

        showMenu = true;

    } else {
        menuToggle.classList.remove("close");
        menuNav.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));

        // remove "show" class from all navItems except the active one
        const activeLink = document.querySelector(".nav-item.active");
        navItems.forEach((item) => {
            if (item !== activeLink) {
                item.classList.remove("show");
            }
        });

        showMenu = false;
    }
}
*/


/*jslint browser:true */
/*global document */

const menuToggle = document.querySelector(".menu-toggle");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const navLinks = document.querySelectorAll(".nav-item a");

const header = document.querySelector('header'); // pobierz element header

header.classList.remove('no-js'); // usuń klasę 'no-js' z elementu header


let showMenu = false;

menuToggle.addEventListener("click", toggleMenu);
window.addEventListener("load", toggleMenuSmall);
window.addEventListener("resize", toggleMenuSmall);

document.documentElement.classList.add('js');

//const navbar = document.querySelector(".menu-nav");


function toggleMenu() {
    const ul = document.querySelector('.menu-nav');
    const li = ul.querySelectorAll('li');
    const activeLi = ul.querySelector('.active');
    const middleIndex = Math.floor(li.length / 2);
  
    if (!showMenu) {
      menuToggle.classList.add("close");
      menuNav.classList.add("show");
      navItems.forEach((item) => item.classList.add("show"));
  
      // hide all other links except the active one
      const activeLink = document.querySelector(".nav-item.active");
      navItems.forEach((item) => {
        if (item !== activeLink) {
          item.classList.remove("show");
        }
      });
  
      showMenu = true;
  
    } else {
      menuToggle.classList.remove("close");
      menuNav.classList.remove("show");
      navItems.forEach((item) => item.classList.remove("show"));
  
      // remove "show" class from all navItems except the active one
      const activeLink = document.querySelector(".nav-item.active");
      navItems.forEach((item) => {
        if (item !== activeLink) {
          item.classList.remove("show");
        }
      });
  
      // swap middle link back with active one
      if (activeLi && li.length > 1) {
        if (activeLi !== li[middleIndex]) {
            if (window.innerWidth <= 768) {
          ul.insertBefore(li[middleIndex], activeLi);}
        }
      }
  
      showMenu = false;
    }
  }


function toggleMenuSmall() {
    console.log("tomekl");
    if (window.innerWidth <= 768) {
        menuToggle.classList.remove("hidden");
        menuToggle.addEventListener("click", toggleMenu);
    } else {
        menuToggle.classList.add("hidden");
        menuToggle.removeEventListener("click", toggleMenu);
        menuNav.classList.remove("show");
        navItems.forEach((item) => item.classList.remove("show"));
        showMenu = false;
    }


    const currentPagee = window.location.pathname.split("/").pop().replace("_"," "); // get the current page name

navLinks.forEach(function(link) {
        console.log(link.getAttribute("href").replace("./", ""));
        console.log(currentPagee);
    if (link.getAttribute("href").replace("./", "").replace("_"," ") === currentPagee) {
        link.parentElement.classList.add("active"); // add "active" class to the link's parent if it matches the current page
    }
  
    

})  

const ul = document.querySelector('.menu-nav');
const activeLi = ul.querySelector('.active');
const li = ul.querySelectorAll('li');
const middleIndex = Math.floor(li.length / 2);
const activeIndex = Array.from(li).indexOf(activeLi);

console.log(activeLi);
console.log(li[middleIndex]);

if (li.length > 1) {
    console.log("chuj");
    const firstLi = li[middleIndex];
    const thirdLi = activeLi;
    let secondLi;
    let fourthLi;

    if (window.innerWidth <= 768) {
        if (activeIndex < middleIndex) {

            //zaintere
            secondLi = li[middleIndex];
    
            //zaintere
            fourthLi = activeLi.nextElementSibling;
    
            //
        
            ul.insertBefore(secondLi, activeLi);
            ul.insertBefore(thirdLi, activeLi);
        } else {
            secondLi = li[middleIndex];
            fourthLi = activeLi.previousElementSibling;
    
            ul.insertBefore(firstLi, thirdLi.previousElementSibling);
            ul.insertBefore(thirdLi, secondLi);
            ul.insertBefore(fourthLi, firstLi);
        }
    }
    
}}

const currentPage = window.location.pathname.split("/").pop().replace("_"," "); // get the current page name

navLinks.forEach(function(link) {
    /*
        console.log(link.getAttribute("href").replace("./", ""));
        console.log(currentPage);
    if (link.getAttribute("href").replace("./", "") === currentPage) {
        link.parentElement.classList.add("active"); // add "active" class to the link's parent if it matches the current page
    }
    */
    
    link.addEventListener("click", function (event) {
        if (showMenu) {
            // remove "active" class from all links
            navItems.forEach((navItem) => navItem.classList.remove("active"));
    
            // add "active" class to the clicked link's parent
            event.target.parentElement.classList.add("active");

        }
    });

    link.addEventListener("mouseover", function () {
        link.style.textShadow = "2px 2px 4px rgba(0,0,0,0.9)";
        link.style.color = "black";
    });
    
    link.addEventListener("mouseout", function () {
        link.style.textShadow = "none";
        link.style.color = "white";
    });
});



