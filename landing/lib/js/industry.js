const { log } = console;
let header = document.querySelector("header");

document.addEventListener("DOMContentLoaded", industry);

const nav_links = document.querySelector(".nav-links");
const nav_links_span = document.querySelectorAll(".nav-links li a span");
const arrow = document.querySelector(".arrow-up-container");
const read_option = document.querySelector(".read-more-option");
const read = document.querySelector(".read-more");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

function industry() {
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
    function _styles(target, style, value)
    {
        let obj = target.className.split(" ").includes(target.nodeName.toLowerCase());
        if (typeof value !== "string") return;
        obj === true ? target.classList.add(value) : target['style'][style] = value;
    }

    function arrowUp (ele)
    {
        ele.addEventListener("click", (e) => {
            if (e.type === "click") 
                window.scroll({ top: 0, behavior: "smooth" });
        })
    }

    function _read(e) {
        e.preventDefault();
        
        window.scroll({ top: 0, behavior: "smooth" });

        let section = [".content_01", ".industry-footer", ".industry", ".read-more"]

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
                            // t.classList.add("after-2");
                        } else 
                        {
                            cssStyle(t, "opacity", "1");
                            cssStyle(t, "animation", "media-nav-row-unset 950ms forwards");
                            // t.classList.remove("after-2");
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
                    if (nav_links.classList.contains("open")) {
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
    read_option.addEventListener("click", (e) => _read(e));


    scrollDownMenuStyle(header);
    arrowUp(arrow);
    navMenuController();
    modifyNav(nav_links);
    modifyNavResize(nav_links);

    let vid = document.querySelectorAll(".vid"), info = document.querySelectorAll(".info-text"), infoDes = null;

    for (let i = 0; i < vid.length; ++i) 
    {
        vid[i].addEventListener("click", (e) => {
            document.querySelectorAll(".info-header")[i].style.opacity = "0";
            if (i % 2 == 0) {
                let infoRowName = vid[i].parentElement.className.split(" ")[0];
                let vidParent = vid[i].parentElement.parentElement.querySelector("."+infoRowName+".info-row.grid");
                vidParent.querySelector(".vid").children[0].style.maxWidth = "75%";
                vidParent.classList.add("b");
                setTimeout(() => {
                    vidParent.querySelector(".info-text").style.height = "auto";   
                }, 300)
                vidParent.querySelector(".notify-info").style.width = "0rem";

                window.addEventListener("resize", (e) => {
                    if (window.innerWidth < 681) {
                        vidParent.classList.remove("b");
                        vidParent.classList.add("d");
                        // vidParent.classList.remove("c");

                        // vidParent.classList.add("d");

                    } else 
                    {
                        vidParent.classList.remove("a");
                        vidParent.classList.remove("c");
                        vidParent.classList.remove("d");
                        vidParent.classList.add("b");
                        // vidParent.classList.add("d");
                    }
                })
            } else 
            {
                let infoRowName = vid[i].parentElement.className.split(" ")[0];
                let vidParent = vid[i].parentElement.parentElement.querySelector("."+infoRowName+".info-row.grid");
                let vidParentVid = vidParent.querySelector(".vid");

                let styleVid = { "justifyContent" : "start" };
                
                for (let i in styleVid) {
                    vidParentVid.style[i] = styleVid[i];
                }
                vidParent.classList.add("a");

                setTimeout(() => {
                        vidParent.querySelector(".info-text").style.height = "auto";   
                }, 300);

                window.addEventListener("resize", (e) => {
                    if (window.innerWidth <= 681) {
                        vidParent.classList.remove("a");
                        vidParent.classList.add("b");
                    } else 
                    {
                        vidParent.classList.remove("b");
                        vidParent.classList.add("a");
                    }
                })
            }
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

    function gridQueryModify(min, target) {
        if (window.innerWidth <= min) {
            window.addEventListener("resize", (e) => {
                if (window.innerWidth > 681) {
                    for (let i = 0; i < target.length; ++i) {
                        target[i].addEventListener("click", (e) => {
                            if (i % 2 == 0) {
                                let name = target[i].parentElement.className.split(" ")[0];
                                let vidParent = target[i].parentElement.parentElement.querySelector("."+name+".info-row.grid");
                                vidParent.classList.remove("d");
                                vidParent.classList.remove("c");
                                vidParent.classList.add("b");

                            } else {
                                let vidParent = target[i].parentElement;
                                let vidParentInfo2 = vidParent.parentElement.querySelector(".info-2.info-row.grid");
                                vidParentInfo2.classList.remove("b");
                                vidParentInfo2.classList.add("a");
                                // log (vidParent);
                            }
                        })
                    }
                } else 
                {
                    for (let i = 0; i < target.length; ++i) {
                        target[i].addEventListener("click", (e) => {
                            if (i % 2 == 0) {
                                let name = target[i].parentElement.className.split(" ")[0];
                                let vidParent = target[i].parentElement.parentElement.querySelector("."+name+".info-row.grid");
                                vidParent.classList.remove("d");
                                vidParent.classList.remove("b");
                                vidParent.classList.add("d");

                            }
                        })
                    }
                }
            })
        } else  {
            if (window.innerWidth > min) {
                window.addEventListener("resize", (e) => {
                    if (window.innerWidth <= 681) {
                        for (let i = 0; i < target.length; ++i) {
                            target[i].addEventListener("click", (e) => {
                                if (i % 2 == 0) {
                                    let name = target[i].parentElement.className.split(" ")[0];
                                    let vidParent = target[i].parentElement.parentElement.querySelector("."+name+".info-row.grid");
                                    vidParent.classList.remove("b");
                                    vidParent.classList.remove("c");
                                    vidParent.classList.add("d");

                                    window.addEventListener("resize", (e) => {
                                        if (window.innerWidth > min) {
                                            vidParent.classList.remove("d");
                                            vidParent.classList.add("b");
                                        }
                                    })
    
                                } else {
                                    let name = target[i].parentElement.className.split(" ")[0];
                                    let vidParent = target[i].parentElement.parentElement.querySelector("."+name+".info-row.grid");
                                    vidParent.classList.remove("a");
                                    vidParent.classList.add("b");
                                }
                            })
                        }
                    } else 
                    {
                        for (let i = 0; i < target.length; ++i) {
                            target[i].addEventListener("click", (e) => {
                                if (i % 2 == 0) {
                                    let name = target[i].parentElement.className.split(" ")[0];
                                    let vidParent = target[i].parentElement.parentElement.querySelector("."+name+".info-row.grid");
                                    vidParent.classList.remove("d");
                                    vidParent.classList.remove("a");
                                    vidParent.classList.add("b");
                                } else 
                                {
                                    let vidParent = target[i].parentElement;
                                    log (vidParent);
                                }
                            })
                        }
                    }
                })
            } 
        }
    }

function gridQueryClicked(min, target) {
    if (window.innerWidth <= min) {
        for (let i = 0; i < target.length; ++i) {            
                target[i].addEventListener("click", (e) => {
                    if (i % 2 == 0) {
                    let vidParent = target[i].parentElement;

                    vidParent.classList.add("d");
                    vidParent.classList.remove("b");
                   
                    
                    
                    window.addEventListener("resize", (e) => {
                        if (window.innerWidth > 681) {
                            vidParent.classList.remove("d");
                        } else 
                        {
                            vidParent.classList.add("d");
                        }
                    })
                } else 
                {
                    let vidParent = target[i].parentElement;
                    vidParent.classList.add("b");
                    vidParent.classList.remove("a");

                    window.addEventListener("resize", (e) => {
                        if (window.innerWidth > 681) {
                            vidParent.classList.remove("b");
                        } else 
                        {
                            vidParent.classList.add("a");
                        }
                    })
                    
                }
            });
           
        } 

    }
}


function gridQueryReview() {
    let info2Grid = document.querySelector(".info-2");
    if (this.innerWidth <= 681) {
        this.addEventListener("resize", (e) => {
            let pageYOffset = this.innerWidth > 681;
            if (pageYOffset) {
                info2Grid.addEventListener("click", (e) => {
                    // info2Grid.classList.remove("b");
                    info2Grid.classList.remove("a");
                    // info2Grid.classList.add("");
                    log (info2Grid);
                })
                if (pageYOffset <= 681) {
                    info2Grid.addEventListener("click", (e) => {
                        info2Grid.classList.add("a");
                        // info2Grid.classList.add("b");
                    })
                }
            }
        })
    }
}
gridQueryClicked(681, vid);
gridQueryModify(681, vid);
gridQueryReview();

};




