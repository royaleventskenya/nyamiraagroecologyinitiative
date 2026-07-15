// Mobile Navigation
Const menuBtn = document.querySelector(“.menu-btn”);
Const navLinks = document.querySelector(“.nav-links”);

menuBtn.addEventListener(“click”, () => {
    navLinks.classList.toggle(“active”);
});

// Close menu when a link is clicked
Document.querySelectorAll(“.nav-links a”).forEach(link => {
    Link.addEventListener(“click”, () => {
        navLinks.classList.remove(“active”);
    });
});

// Sticky Navigation
Window.addEventListener(“scroll”, () => {

    Const header = document.querySelector(“header”);

    If(window.scrollY > 60){
        Header.style.background = “#ffffff”;
        Header.style.boxShadow = “0 4px 15px rgba(0,0,0,.15)”;
    }else{
        Header.style.background = “#ffffff”;
        Header.style.boxShadow = “none”;
    }

});

// Smooth Scroll
Document.querySelectorAll(‘a[href^=”#”]’).forEach(anchor => {

    Anchor.addEventListener(“click”, function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute(“href”)).scrollIntoView({
            behavior:”smooth”
        });

    });

});

// Scroll Reveal Animation

Const cards = document.querySelectorAll(
“.card,.program-card,.team-card,.value-box,.board li”
);

Const reveal = () =>{

    Const trigger = window.innerHeight * 0.85;

    Cards.forEach(card=>{

        Const top = card.getBoundingClientRect().top;

        If(top < trigger){

            Card.style.opacity = “1”;
            Card.style.transform = “translateY(0px)”;

        }

    });

};

Cards.forEach(card=>{

    Card.style.opacity=”0”;
    Card.style.transform=”translateY(50px)”;
    Card.style.transition=”.8s”;

});

Window.addEventListener(“scroll”,reveal);

Reveal();

// Contact Form

Const form = document.querySelector(“form”);

If(form){

Form.addEventListener(“submit”,function(e){

e.preventDefault();

alert(
“Thank you for contacting Africa Women Land Rights and Agro Ecology Initiatives. We will get back to you soon.”
);

Form.reset();

});

}

// Active Navigation Highlight

Const sections = document.querySelectorAll(“section”);
Const navItems = document.querySelectorAll(“.nav-links a”);

Window.addEventListener(“scroll”,()=>{

Let current=””;

Sections.forEach(section=>{

Const top=section.offsetTop-120;

If(pageYOffset≥top){

Current=section.getAttribute(“id”);

}

});

navItems.forEach(link=>{

link.classList.remove(“active”);

if(link.getAttribute(“href”)===”#”+current){

link.classList.add(“active”);

}

});

});

// Scroll to Top Button

Const topButton=document.createElement(“button”);

topButton.innerHTML=”↑”;

topButton.id=”topBtn”;

document.body.appendChild(topButton);

topButton.style.position=”fixed”;
topButton.style.right=”20px”;
topButton.style.bottom=”20px”;
topButton.style.width=”50px”;
topButton.style.height=”50px”;
topButton.style.borderRadius=”50%”;
topButton.style.border=”none”;
topButton.style.background=”#2e7d32”;
topButton.style.color=”#fff”;
topButton.style.fontSize=”22px”;
topButton.style.cursor=”pointer”;
topButton.style.display=”none”;
topButton.style.zIndex=”999”;

window.addEventListener(“scroll”,()=>{

if(window.scrollY>500){

topButton.style.display=”block”;

}else{

topButton.style.display=”none”;

}

});

topButton.addEventListener(“click”,()=>{

window.scrollTo({

top:0,

behavior:”smooth”

});

});

// Footer Year

Const year = new Date().getFullYear();

Const footer = document.querySelector(“footer p:last-child”);

If(footer){

Footer.innerHTML = “© “ + year + “ AWLRAEI. All Rights Reserved.”;

}

Console.log(“AWLRAEI Website Loaded Successfully");

