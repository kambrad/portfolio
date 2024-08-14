const { log } = console;
const { documentElement } = document;
const header = document.querySelector("header");
const nav = document.querySelector(".nav");
const nav_links = document.querySelector(".nav-links");
const nav_links_span = document.querySelectorAll(".nav-links li a span");
const arrow = document.querySelector(".arrow-up-container");
const read_option = document.querySelector(".read-more-option");
const read = document.querySelector(".read-more");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

document.addEventListener("DOMContentLoaded", (e) => {
    about();
})

function about () {
    function scrollDownMenuStyle(nav) {
        if (nav == undefined) return; let prevYOffset = 0;
        window.addEventListener("scroll", (e) => {
            let pageYOffset = this.pageYOffset;
            if (pageYOffset > prevYOffset) 
                _styles(nav, 0, "scroll-up"), nav.classList.remove("scroll-down");
            else
                _styles(nav,0,"scroll-down");
            
        })
    }
    function arrowUp (ele)
    {
        ele.addEventListener("click", (e) => {
            if (e.type === "click") 
                window.scroll({ top: 0, behavior: "smooth" });
        })
    }
    function _styles(target, style, value)
    {
        let obj = target.className.split(" ").includes(target.nodeName.toLowerCase());
        if (typeof value !== "string") return;
        obj === true ? target.classList.add(value) : target['style'][style] = value;
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


    function _read(e) {
        e.preventDefault();
        
        window.scroll({ top: 0, behavior: "smooth" });

        let section = [".content_01", ".about-footer", ".read-more"]

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

    // 1080
    // media query
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
            // this.addEventListener("scroll", (e) => {
            //     let t = target;
            //     typeof t === "object" ? t : document.getElementsByClassName("nav-list")[0];
            //     cssStyle(t, "opacity", "0");
            //     if (this.pageYOffset > 0 && this.innerWidth < 1150) {
            //         cssStyle(t, "animation", "media-nav-row 650ms forwards, media-nav-opac 850ms 450ms forwards");
            //         t.classList.add("after");
            //     } else 
            //     {
            //         cssStyle(t, "opacity", "1")
            //         cssStyle(t, "animation", "media-nav-row-unset 950ms forwards");
            //     }

            // })
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
 
    read_option.addEventListener("click", (e) => _read(e));

    scrollDownMenuStyle(header);
    arrowUp(arrow);
    modifyNav(nav_links);
    modifyNavResize(nav_links);

    function navMenuController () {
        menu.addEventListener("click", (e) => {
            nav_links.className += " open";
            close.classList.add("close-icon");
            nav_links.style.display = "flex";
            nav_links.style.animation = "unset";
            // nav_links.style.height = "unset";
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
        this.addEventListener("resize", (e) => {
            if (this.innerWidth >= 890) {
                nav_links.style.opacity = "1";
                nav_links.style.display = "flex";
            }
        })
    }
       

        // this.addEventListener("resize", (e) => {
        //     if (this.innerWidth >= 890) {
        //         close.classList.remove("close-icon");
        //         nav_links.style.opacity = "1";
        //         nav_links.style.display = "flex";
        //     }
        // })
        // window.addEventListener("resize", (e) => {
        //     if (window.innerWidth >= 890) {
        //         close.classList.remove("close-icon");
        //         nav_links.classList.remove("open");
        //         nav_links.style.display = "flex";
        //         nav_links.style.height = "unset";
        //     } else 
        //     {
        //         nav_links.style.display = "none";
        //     }
        // });
       



this.addEventListener("resize", (e) => {
    if (this.innerWidth >= 890) {
        close.classList.remove("close-icon");
        nav_links.classList.remove("open");
        nav_links.style.display = "flex";
    } else 
    {
        nav_links.style.display = "none";
        // if (close.classList.contains("close-icon")) {
        //     close.classList.remove("close-icon");
        // } else 
        // {
        //     close.classList.add("close-icon");
        // }
    }
});




function navMenuHeightController(ele1, ele2, ele3, widthLen /* 889 */) {
    let queryHeightClassName= "max-height", 
    doc = this, innerHeight = null,
    navLinksHeightClassName = queryHeightClassName +"-links",
    navLinksHeightSpanClassName = queryHeightClassName+"-span"
    ;


    typeof doc !== "object" ? doc = document.documentElement : doc = window || this;

    if (window.innerWidth <= widthLen) { //num <= 889
        menu.addEventListener("click", (e) => {
            _styles()
            ele2.classList.add("max-height-clicked");
        })
    }

    if (window.innerHeight < 381 && window.innerWidth > widthLen) {
        ele1.classList.add(queryHeightClassName);
        ele2.classList.add(navLinksHeightClassName);
        ele3.forEach(tag => tag.classList.add(navLinksHeightSpanClassName));

        doc.addEventListener("resize", (e) => {
            if (window.innerWidth <= widthLen) {
                ele1.classList.remove("max-height");
                ele1.style.flexDirection = "row";
                menu.addEventListener("click", (e) => {
                    if (ele1.classList.contains("max-height")) {
                        return;
                    } else {
                        let displayMaxHeight = {
                            "zIndex": 9999,
                            "display": "grid",
                            "placeContent": "center",
                            "placeItems": "center",
                            "gridRowGap": "2rem",
                            "height": "20rem",
                            "minHeight": "30rem",
                            "paddingTop": "8rem"
                        }

                        for (let i in displayMaxHeight) {
                            _styles(ele2, i, displayMaxHeight[i]);
                        }
                        window.addEventListener("resize", (e) => {
                            if (window.innerWidth > widthLen)
                            {
                                // ele1.classList.remove(queryHeightClassName);
                                let removeMaxHeight = {
                                    "zIndex": 9999,
                                    "display": "flex",
                                    "placeContent": "space-between",
                                    "placeItems": "unset",
                                    "gridRowGap": "unset",
                                    "height": "unset",
                                    "minHeight": "unset",
                                    "paddingTop": "inherit"
                                }
                                for (let i in removeMaxHeight) {
                                    _styles(ele2, i, removeMaxHeight[i]);
                                }
                            }
                        })
                    }
                });

            } else {
                header.style.minHeight = "10rem";
                header.style.paddingTop = "unset";
                header.style.alignItems = "unset";
                ele1.classList.remove("max-height");
            }
        });
    }

    // doc.addEventListener("resize", (e) => {
    //     innerHeight = doc.innerHeight;
    //     let innerWidth = doc.innerWidth;
    //     if (e.type == "resize") {
    //         if (innerHeight < 381 && innerWidth  ) {
    //             ele1.classList.add(queryHeightClassName);
    //             ele2.classList.add(navLinksHeightClassName);
    //             ele3.forEach(tag => tag.classList.add(navLinksHeightSpanClassName));
    //         } else 
    //         {
    //             ele1.classList.remove(queryHeightClassName);
    //             ele2.classList.remove(navLinksHeightClassName);
    //             ele3.forEach(tag => tag.classList.remove(navLinksHeightSpanClassName));
    //         }
    //     }
    // })


    // if ()

}

navMenuController();
//navMenuHeightController(nav, nav_links, nav_links_span, 889);
};