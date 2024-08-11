const { log , error } = console;

const { documentElement, getElementsByClassName, querySelector, addEventListener } = document;

let w = window || new Window;

let navLogo = document.getElementsByClassName("nav-logo")[0];

let footer = document.getElementsByClassName("footer")[0];

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

    let prevYOffset = 0

    // windows().addEventListener("scroll", (e) => 
    //     {
    //         let currYOffset = windows().pageYOffset;

    //         if (currYOffset >= prevYOffset) {
    //             document.getElementsByTagName("header")[0].classList.add("slide-up");
    //             document.getElementsByTagName("header")[0].classList.remove("slide-down");
    //         } else {
    //             document.getElementsByTagName("header")[0].classList.add("slide-down");
    //             document.getElementsByTagName("header")[0].classList.remove("slide-up");

    //         }
    //         prevYOffset = currYOffset;
    //     }    
    // )

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

            reveal_co === 1 ?  (_ele['style'].width = _new, _ele['style'].transition = "width 50ms ease-in") :  ( _ele['style'].width = _prev,
            _ele['style'].transition = "all 50ms ease-in");
        })
    }

    Object.prototype.revealContact = (ele) => {
       _reveal_Func(contactBanner, ele, "click", "30rem", "0rem");
    }

    // Object.prototype.revealContactForm = (ele, target) => {
    //     let x = 100, y = 100;
    //     target.addEventListener("click", (e) => {
    //         setInterval(() => {
    //             if (x <= 0 && y <= 0) return;
    //             --x, --y;
    //             ele.style.left = x + "%";
    //             ele.style.top = y + "%";
    //         }, 0.1);
            
    //     })      
    // }


    let contactUsForm = document.querySelector(".contact-us-form") || undefined,
        revealLeftArrow = document.querySelector(".reveal-left-arrow"),
        closeWindow = document.querySelector(".close-window");

    let x = 100;
//    revealLeftArrow.addEventListener("click", (e) => {
//     setInterval(() => {
//         if (x == 0 && y == 0) {
//             return;
//         }
//         --x;
//         log (x);
//         contactUsForm.style.left = x + "%";
//         contactUsForm.style.top = x + "%";
//     }, 1);
//    });

//    closeWindow.addEventListener("click", (e) => {
//     setInterval(() => {
//         log (x);
//         ++x;
//         if (x == 100) return;
//     }, 1);
//    })
    

  function _reveal_contactForm() {
    let x = 100, top = 20;
    const id = setInterval(frame, 1);
    contactOverflow.style.zIndex = "9999";
    contactOverflow.style.overflowX = "hidden";
    if (contactOverflow.style.zIndex == "-1") contactOverflow.style.zIndex = "9999";

    
    function frame() {
        if (x == 0)
        {
            clearInterval(id);
        } else 
        {
            --x;
            contactUsForm.style.display = "flex";
            contactUsForm.style.left = x + "%"; 
            contactUsForm.style.top = x + "%";
        }
    }

    setInterval(() => {
        if (top <= 0) return;
        top = top - 1;
    
        
        this.scroll(
            {
                behavior: "smooth",
                top: top * 0.05
            }
        )
    })
  }
  
  function _close_contactForm() {
    let x = 0;
    const id = setInterval(frame, 1);

    function frame() {
        if (x == 100) 
        {
            clearInterval(id);
        } else 
        {
            ++x;
            contactUsForm.style.left = x + "%"; 
            contactUsForm.style.top = x + "%";
        }
    }
    setTimeout(() => {
        contactUsForm.style.display = "none";
        contactOverflow.style.zIndex = "-1";
    }, 1800);
  }
    

  function _display_FooterItems(_ele) {
    typeof this === "object" ? this : null;
    let env = "scroll";

    this.addEventListener(env, (e) => _display_FooterItemsController(_ele));
  }
  

  function _display_FooterItemsController(_target) 
  {
    let n = _target, items = n.children[0].children, len = 
    items.length;
    if (n.getBoundingClientRect().top < this.innerHeight) 
    {
        _display_LoopItems(len, items, "opacity", "1");
    } else {
        _display_LoopItems(len, items, "opacity", "0");
    }
    
  }

  function _display_LoopItems (_len, _ele, style, _Val)
  {
    for (let i = 0; i < _len; ++i)
    {
        _ele[i].style[style] = _Val;
    }
  }

  revealLeftArrow.addEventListener("click", (e) => {
    setTimeout(() => {
        formContainer.style.opacity = "1";
        spanContainer.style.opacity = "1";
    }, 1500);
    _reveal_contactForm();
  });
  closeWindow.addEventListener("click", (e) => {
    formContainer.style.opacity = "0";
    spanContainer.style.opacity = "0";
    spanContainer.style.transition = "unset";
    _close_contactForm();
  })
    
  if (this.innerHeight >= 810)
    {
        document.querySelector(".time").style.opacity = "1";
        document.querySelector(".arrow-up-left").style.opacity = "1"; 
    } else 
    {
        document.querySelector(".time").style.opacity = "0";
        document.querySelector(".arrow-up-left").style.opacity = "0";
    }
    
    clock();
    contactBanner.revealContact(contactContact);
    _display_FooterItems(footer);
}
