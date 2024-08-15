const { log } = console;

const { documentElement } = document; 

let w = window || document.documentElement;

let askUsText = document.querySelector(".ask-us-text"),
    contactHome = document.querySelector(".home"),
    locationBtn = document.querySelector(".click-location"),
    header = document.querySelector(".header"),
    // loadMore = document.querySelector(".load-more"),
    contactForm = document.querySelector(".contact-form"),
    footer = document.querySelector("footer"),
    arrow = document.querySelector(".arrow-up-container"),
    read = document.querySelector(".read-more"),
    readOption = document.querySelector(".read-more-option"),
    map = document.querySelector("#map"),
    mapContainer = document.querySelector(".map-container"),
    nav_links = document.querySelector(".nav-links"),
    nav_links_span = document.querySelectorAll(".nav-links li a span"),
    menu = document.querySelector(".menu"),
    close = document.querySelector(".close")
;

document.addEventListener("DOMContentLoaded", (e) => contact(e));

function contact(e) {
    window.scrollTo(0, 0);


    if (window.innerHeight > 0 && window.innerWidth <= 889) {
        window.addEventListener("resize", (e) => {
            if (window.innerWidth > 889) {
                window.addEventListener("scroll", (e) => {
                    if (window.pageYOffset === 0) {
                        nav_links.style.opacity = "1";
                    }
                })
            }
        })
    }
    
    const template = ["notify, ", "speak to, ", " or encounter us for more info on bizpaypro."];

    function scrollHeader (nav) {
        let env = "scroll", target = 0;
        this.addEventListener(typeof env === "string" ? env :  " ", (e) => {
            let y = this.pageYOffset;
            if (y > target) 
                nav.classList.add("nav-up"), nav.classList.remove("nav-down"); 
            else 
                nav.classList.add("nav-down"), nav.classList.remove("nav-up"); 
        })
    }

    function createSpanTag () {
        if (template && typeof template === "object") {
            for (let c = 0; c < template['length']; ++c) {
                var spanTag = document.createElement("span");
                spanTag.textContent = template[c];
                spanTag.style.opacity = "0";
                askUsText.append(spanTag)
            }
        }
    }

    function revealSpanTag() {
        let children = askUsText['children'], i = null;

        setInterval(() => {
            if (i === null) i = -1;
            if (i < 2) {
                ++i;
                children[i].style.opacity = "1";
            } else {
                return;
            }
        }, 600);
    }

    function toTop (env)
    {
        env.type === "click", w.scroll({ top: 0, behavior: "smooth"});
    }


    function arrowScrollUp(_target) 
    {
        _target.addEventListener("click", (e) => toTop(e));
    }

    function _read(e) {
        e.preventDefault();
        
        window.scroll({ top: 0, behavior: "smooth" });

        let section = [".home", ".contact-footer", ".read-more"];

        setTimeout(() => {
            read.style.opacity = "1";
            read.style.zIndex = "100000";
    
            for (let i = 0; i < section.length - 1; ++i){
                _blur(section[i]).style.filter = "blur(5px)";
            }
        }, 1000);  

        let j;
        if (j == null || j == undefined) {
            j = 0;
            while (j < section.length) {
                _fade(".read-more", read, section);
                ++j;
            }
        } 
    }
    function _blur(ele) {
        if (ele && typeof ele !== "string") return null;
        return document.querySelector(ele);
    }
    function _fade(ele, target, array) {
        document.querySelector(ele).addEventListener("click", (e) => {
            target.style.opacity = "0";
            target.style.zIndex = "-1";

            for (let i = 0; i < array.length; ++i){
                _blur(array[i]).style.filter = "blur(0px)";
            }
        })
    }

    function geoLocation(btn) {
        let env = "click" || undefined;
        btn.addEventListener(env, (e) => geoLocationController());
    }

    function geoLocationController() {
        setTimeout(() => {
            map.style.opacity = "1";
            map.style.zIndex = "3";
            mapContainer.style.display = "block";
            mapContainer.style.zIndex = "1000000";
            
         }, 500);
        
    }

    function hideGeoLocation () 
    {
        let eleObj = [".contact-footer", ".home", ".map-container"];
        let eleLength = eleObj.length, env = "click";
        
        for (let i = 0; i < eleLength; ++i) {
            document.querySelector(eleObj[i]).addEventListener(env, (e) => {
                map.style.opacity = "0";
                map.style.zIndex = "-1";
                mapContainer.style.display = "none";
            });
        }
    }

    function _styles(target, style, value)
    {
        let obj = target.className.split(" ").includes(target.nodeName.toLowerCase());
        if (typeof value !== "string") return;
        obj === true ? target.classList.add(value) : target['style'][style] = value;
    }
    function scrollDownMenuStyle(nav) {
        if (nav == undefined) return; let prevYOffset = 0;
        window.addEventListener("scroll", (e) => {
            let pageYOffset = this.pageYOffset;
            if (pageYOffset > prevYOffset) 
                _styles(nav,0, "scroll-up"), nav.classList.remove("scroll-down");
            else
                _styles(nav,0,"scroll-down");
            
        })
    }
    function cssStyle (target, style, value) {
        target['style'][style] = value;
    }
    function modifyNav(target) {
        let innerWidth = this.innerWidth;
            if (innerWidth <= 1150 && innerWidth >= 890) {
                    this.addEventListener("scroll", (e) => {
                        let t = target;
                        typeof t === "object" ? t : document.getElementsByClassName("nav-list")[0];
                        cssStyle(t, "opacity", "0");
                        if (this.pageYOffset > 0) {
                            cssStyle(t, "animation", "media-nav-row 650ms forwards, media-nav-opac 850ms 450ms forwards");
                            t.classList.add("after-2");
                        } else 
                        {
                            cssStyle(t, "opacity", "1");
                            cssStyle(t, "animation", "media-nav-row-unset 950ms forwards");
                            t.classList.remove("after-2");
                        }
                    })
                } else 
                {
                    cssStyle(target, "animation", "none");
                }
        }

    function modifyNavResize(t) {
        this.addEventListener("resize", (e) => {
            if (this.innerWidth >= 1151) {
                cssStyle(t, "animation", "none");
                t.classList.remove("after");

                this.addEventListener("scroll", (e) => {
                    if (this.pageYOffset > 0) {
                        cssStyle(t, "opacity", "1");
                        cssStyle(t, "animation", "none");
                        t.classList.remove("after");

                    } else 
                    {
                        cssStyle(t, "animation", "none");
                    }

                })
            } else 
            {
                this.addEventListener("scroll", (e) => {
                    if (this.pageYOffset > 0) 
                    {
                        if (this.innerWidth >= 890) {
                        close.classList.remove("close-icon")
                        cssStyle(t, "opacity", "0");
                        cssStyle(t, "animation", "media-nav-row 650ms forwards, media-nav-opac 850ms 250ms forwards");
                        t.classList.add("after")
                        }
                    }
                    else 
                    {
                        cssStyle(t, "opacity", "1");
                    }
                })

                if (this.innerWidth <= 889)
                    {
                        cssStyle(t, "animation", "unset");
                    }
            }
        })
    }
    function navMenuController () {
        menu.addEventListener("click", (e) => {
            nav_links.className += " open";
            close.classList.add("close-icon");
            nav_links.style.display = "flex";
            nav_links.style.animation = "unset";
            nav_links.style.height = "44rem";


            setTimeout(() => {
                nav_links.style.opacity = "1";
            },100);
            this.onscroll = (e) => {
                nav_links.style.animation = "unset";
                nav_links.style.opacity = "1";
            }
            this.addEventListener("resize", (e) => {
                if (this.innerWidth <= 889) {
                    if (nav_links.classList.contains("open") == true) {
                        nav_links.style.opacity = "1";
                        nav_links.style.display = "flex";
                        nav_links.style.height = "44rem";
                    } else 
                    {
                        nav_links.style.height = "unset";
                        nav_links.style.opacity = "1";
                        nav_links.style.display = "none";
                    }
                }
            })
        });

        close.addEventListener("click", (e) => {
            nav_links.classList.remove("open");

            close.classList.remove("close-icon");
            nav_links.style.opacity = "0";
            setTimeout(() => {
                nav_links.style.display = "none";
            },450);
        

            this.addEventListener("resize", (e) => {
                if (this.innerWidth >= 890) {
                    nav_links.style.opacity = "1";
                    nav_links.style.display = "flex";
                }
            })
            
            this.addEventListener("scroll", (e) => {
                if(this.pageYOffset > 0) {
                    nav_links.style.opacity = "0";
                } else {
                    nav_links.style.opacity = "1";
                }
            })
        })   

        if (window.innerWidth <= 889) {
            window.addEventListener("scroll", (e) => {
                if (window.pageYOffset <= 0) {
                    nav_links.style.opacity = "0";
                }
            })
        }
    }
    window.addEventListener("resize", (e) => {
        if (window.innerWidth >= 890) {
            close.classList.remove("close-icon");
            nav_links.classList.remove("open");
            nav_links.style.display = "flex";
            nav_links.style.height = "unset";
        } else 
        {
            nav_links.style.display = "none";
        }
    });

    function unsetTransition(doc, ele) {
        typeof ele == "object" || ele != undefined ? ele : document.querySdocctor(".ask-us-text");
        let ev = "resize";

        doc.addEventListener(ev, (E) => {
           if (E.type === ev) {
                ele.style.transition = "none";
           }  
        })
    }

    function validateUserController(target, style) {
        target.addEventListener("keyup", (e) => {
            let targetLen = e.target.value.length;
            if (targetLen <= 0) {
                e.target.style[style] = "2px solid red";
                document.querySelector(".send-btn").disabled = true;
            } else 
            {
                e.target.style[style] = "2px solid";
                document.querySelector(".send-btn").disabled = false;
            }
        })
    }

    function validateUser() {
        const form = document.querySelector("form");
        let email = document.querySelector(".input-field#email"), 
            message = document.querySelector(".msg-box"),
            send = document.querySelector(".send-btn"),
            trackVals = [email, message];
        ;
            for (let i = 0; i < trackVals.length; ++i) {
                validateUserController(trackVals[i], "border");
            }
            
            send.addEventListener("click", (e) => {
                if (email.value === "" && message.value === "") {
                    e.preventDefault();
                    let borderStyle = { 
                        "border" : "2px solid red"
                    }
                    for (let i in borderStyle) {
                        email.style[i] = borderStyle[i];
                        message.style[i] = borderStyle[i];
                    }
                } else {
                    return true;
                }
            })
    }
    


    // document.querySelector("form").onsubmit = function (e){
    //     e.preventDefault();
    // }

    
    scrollHeader(header);
    createSpanTag();
    revealSpanTag();
    arrowScrollUp(arrow);
    geoLocation(locationBtn);
    hideGeoLocation()
    unsetTransition(window, askUsText);
    scrollDownMenuStyle(header);
    navMenuController();
    modifyNav(nav_links);
    modifyNavResize(nav_links);
    // validateUser();
} 
