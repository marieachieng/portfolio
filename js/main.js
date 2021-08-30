const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

/* Toggle mobile menu */
function toggleMenu(){
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        //adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i>&#10133</i>";
    } else {
        menu.classList.add("active");
        //adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<a>&#10013</a>";
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

const items = document.querySelectorAll(".item");

/* Activate Submenu */
function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")){
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
}

/* Event Listener */
for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
        item.addEventListener("keypress", toggleItem, false);
    }
    
}

function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);
    if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
}

/* Event Listener */
document.addEventListener("click", closeSubmenu, false);

/*function scrollView(){
    for (let item = 0; item < array.length; item++) {
        const elmnt = array[item];
        if (array[1]) {
            elmnt = document.querySelector(".about-me");
            elmnt.scrollIntoView();
        }
        
    }
    /*const elmnt = document.querySelector(".about-me");
    elmnt.scrollIntoView();*/
        
    /*if(x.style.display ==='none'){
        x.style.display="block";
    }else{
        x.style.display='none';
    }

    let btn = document.querySelector(".btn");
    let el = document.querySelector(".special");

    btn.addEventListener('click',function(){el.scrollIntoView(true);});
}*/

function scrollView(){
    const elmnt = document.querySelector(".about-me");
    elmnt.scrollIntoView();
}
function scrollView1(){
    const elmnt = document.querySelector(".skills");
    elmnt.scrollIntoView();
}
function scrollView2(){
    const elmnt = document.querySelector(".portfolio");
    elmnt.scrollIntoView();
}
function scrollView3(){
    const elmnt = document.querySelector(".my-contact");
    elmnt.scrollIntoView();
}
