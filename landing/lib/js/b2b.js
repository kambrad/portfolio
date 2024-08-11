const { log } = console;

let header = document.querySelector("header");

const B2BHeader = document.querySelector(".b2b-payment-h1"), B2BPaymentP = document.querySelector(".b2b-payment-p"),
nav_links = document.querySelector(".nav-links"),
nav_links_span = document.querySelectorAll(".nav-links li a span"),
gallery = document.querySelectorAll(".gallery"),
arrow = document.querySelector(".arrow-up-container"),
read_option = document.querySelector(".read-more-option"),
read = document.querySelector(".read-more"),
menu = document.querySelector(".menu"),
close = document.querySelector(".close");


log (header);

let B2B = null;

document.addEventListener("DOMContentLoaded", (e) => b2b(e));


function b2b (event)
{
    function _styles(target, style, value)
    {
        let obj = target.className.split(" ").includes(target.nodeName.toLowerCase());
        if (typeof value !== "string") return;
        obj === true ? target.classList.add(value) : target['style'][style] = value;
    }
    function animations(){
        _styles(B2BHeader,"bottom","0rem");
        _styles(B2BPaymentP, "right", "0rem");
    }
    // function _nav (target) {
    //     let nav = target;
    //     this.onscroll = function() {
    //         if (this.pageYOffset > 0) 
    //             nav.classList.add("nav-dark"), nav.classList.remove("nav-white");
    //         else
    //             nav.classList.remove("nav-dark"), nav.classList.add("nav-white");
            
    //     }
    // }
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
    function _class (obj){
        return document.querySelector(obj);
    }
    function _show()
    {
        let container = [".gallery-one", ".gallery-two", ".gallery-three", ".gallery-four"],
        rows = [".one", ".two", ".three", ".four"];
        for (let i = 0; i < container.length; ++i) {
            this.addEventListener("scroll", (e) => {
                if (e.type === "scroll") {
                    if (_class(container[i]).getBoundingClientRect().top <= (this.innerHeight - 400)){
                        _styles(_class(rows[i]), "top", "0rem")
                    }
                }
            })
        }
    }
    function _footer()
    {
        arrow.addEventListener("click", (e) => this.scroll({ behavior: "smooth", top: 0}));      
    }
    function _read(e) {
        e.preventDefault();
        
        window.scroll({ top: 0, behavior: "smooth" });

        let section = [".content_01", ".b2b-footer", ".read-more"]

        setTimeout(() => {
            read.style.opacity = "1";
            read.style.zIndex = "10000";
    
            for (let i = 0; i < section.length - 1; ++i){
                _blur(section[i]).style.filter = "blur(5px)";
            }
        }, 1000);  

        let j;
        if (j == null || j == undefined) {
            j = 0;
            while (j < (section.length * 0) + 1) {
                _fade(".read-more", read, section);
                ++j;
            }
        } 
    }
    function _blur(ele) {
        // document.querySelector(ele).style.filter = "blur(5px)";
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
    read_option.addEventListener("click", (e) => _read(e));

    function cssStyle (target, style, value) {
        target['style'][style] = value;
    }

    function modifyNav(target) {
        let innerWidth = this.innerWidth;
            if (innerWidth <= 1150) {
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
                                nav_links.style.opacity = "1";
                                nav_links.style.display = "none";
                                nav_links.style.height = "unset";

                            }
                        } else 
                        {
                            nav_links.style.height = "unset";
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
                })   
            }
            window.addEventListener("resize", (e) => {
                if (window.innerWidth >= 890) {
                    close.classList.remove("close-icon");
                    nav_links.classList.remove("open");
                    nav_links.style.display = "flex";
                } else 
                {
                    nav_links.style.display = "none";
                }
            });
    scrollHeader(header);
    scrollDownMenuStyle(header);
    animations();
    _show();
    _footer();
    navMenuController();
    // modifyNav(nav_links);
    // modifyNavResize(nav_links)
}




