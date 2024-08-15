const { log , error } = console;

const { documentElement, getElementsByClassName, querySelector, addEventListener } = document;

let w = window || new Window;

let navLogo = document.getElementsByClassName("nav-logo")[0];

let footer = document.querySelector(".footer");

let contactOverflow = document.getElementsByClassName("contact-overflow")[0],
    formContainer = document.getElementsByClassName("contact-container-wrapper")[0],
    spanContainer = document.getElementsByClassName("span-container")[0];

document.addEventListener("DOMContentLoaded", loaded)

function loaded (e)
{
    if (typeof e.type === "string" && e.type == "DOMContentLoaded") _function();
}

function windows () 
{
    return typeof w === "object" ? w : document || documentElement;
}

function clock ()
{
    const date = new Date();
    var hour, minutes, seconds, meridian = new Date().toLocaleString().split(' ')[2];

    hour == undefined || minutes == undefined || seconds == undefined ? 
    (hour = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds()) : null;

    if (hour > 12) hour = hour - 12;
    if (hour < 1) hour = hour + 12; 

    hour = ck_clock(hour);
    minutes = ck_clock(minutes);
    seconds = ck_clock(seconds);
    
    document.querySelector(".time").innerHTML = `${hour}:${minutes}:${seconds} ${meridian}`;
    setTimeout(clock, 1000);


}

function ck_clock (_time)
{
    if (typeof _time == "number" && _time < 10) 
    {
        return "0" + _time;
    }
    return _time;
}

function _function () {
    navLogo.addEventListener("click", (e) => window.location.assign("/"));   

    windows().addEventListener("scroll", (E) => {
        let pageYOffset = windows().pageYOffset;
        if (pageYOffset > 0) {
            document.getElementsByTagName("header")[0].classList.add("slide-up");
            document.getElementsByTagName("header")[0].classList.remove("slide-down");
        } else 
        {
            document.getElementsByTagName("header")[0].classList.add("slide-down");
            document.getElementsByTagName("header")[0].classList.remove("slide-up");
        }
    })

    let contentIndexText ="Welcome to Bizpaypro! We are a leading B2B payment provider that offers innovative payment processing solutions to businesses of all sizes. Our platform is designed to help you streamline your cash flow, simplify your accounting, and reduce merchant processing costs. By accepting cards and using our e-invoicing system, you'll gain access to a range of features that can help you grow your business. Say goodbye to the hassle of manual accounting and hello to a more automated, predictable way of doing business.";
    typeof contentIndexText === "string" ? contentIndexText = contentIndexText.split(" ") : contentIndexText = "";
    
   let contentCount = -1;
    setInterval(() => {
        if (contentCount < contentIndexText.length - 1){
             contentCount = contentCount + 1; 
        } else 
        {
            return;
        }
        document.getElementsByClassName("content-01-text")[0].innerHTML += contentIndexText[contentCount] + " ";
    }, 15);

   
    let contactBanner = null, contactContact = document.getElementsByClassName("content-02-contact-info")[0];
    typeof document.querySelector(".contact-us-banner") === "object" ? contactBanner = document.querySelector(".contact-us-banner") : null;

    let reveal_co = 0;
    const _reveal_Func = (_main, _ele, listener, _new, _prev) => {
        _main.addEventListener(listener, (e) => {
            ++reveal_co;

            if (reveal_co > 1) reveal_co = 0;

            reveal_co === 1 ?  (_ele['style'].width = _new, _ele['style'].transition = "width 50ms ease-in", _ele['style'].whiteSpace = "nowrap") :  ( _ele['style'].width = _prev,
            _ele['style'].transition = "all 50ms ease-in");
        })
    }

    Object.prototype.revealContact = (ele) => {
       _reveal_Func(contactBanner, ele, "click", "30rem", "0rem");
    }

  
  
    // Object.prototype.revealFooter = function (target) {
    //     typeof target == "object" ? target : document.querySelector(".footer");
    //     this.addEventListener("scroll", (e) => {
    //         if (target.getBoundingClientRect().top < this.innerHeight) 
    //         {
    //             target.classList.add("reveal");
    //         } else 
    //         {
    //             target.classList.remove("reveal");
    //         }
    //     })
    // }
    setTimeout(() => {
        document.querySelector(".footer").classList.add("reveal");
    }, 2000);


    clock();
    contactBanner.revealContact(contactContact);
    // _display_FooterItems(footer);
    // window.revealFooter(footer);
}
