const { log } = console;

let header = document.querySelector("header"),
nav_links = document.querySelector(".nav-links"),
nav_links_span = document.querySelectorAll(".nav-links li a span"),
menu = document.querySelector(".menu"),
close = document.querySelector(".close")
;



document.addEventListener("DOMContentLoaded", (E) => insights(E));

function insights(event) {
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
                        nav_links.style.opacity = "0";
                        nav_links.style.display = "none";
                        nav_links.style.height = "unset";
                    }
                } else {
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

    scrollDownMenuStyle(header);
    navMenuController();
    modifyNav(nav_links);
    modifyNavResize(nav_links);
}
