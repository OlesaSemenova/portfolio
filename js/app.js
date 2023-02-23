(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    if (1 !== ScrollTrigger.isTouch) {
        ScrollSmoother.create({
            wrapper: ".wrapper",
            content: ".content",
            smooth: 1.5,
            effects: true
        });
        gsap.fromTo(".main-page__img", {
            opacity: 1
        }, {
            opacity: 0,
            scrollTrigger: {
                trigger: ".main-page__img",
                start: "center",
                end: "820",
                scrub: true
            }
        });
        let itemsL = gsap.utils.toArray(".gallery-portfolio__left .gallery-portfolio__item");
        itemsL.forEach((element => {
            gsap.fromTo(element, {
                x: -50,
                opacity: 0
            }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: element,
                    start: "-850",
                    end: "-100",
                    scrub: true
                }
            });
        }));
        let itemsR = gsap.utils.toArray(".gallery-portfolio__right .gallery-portfolio__item");
        itemsR.forEach((element => {
            gsap.fromTo(element, {
                x: 50,
                opacity: 0
            }, {
                opacity: 1,
                x: 0,
                scrollTrigger: {
                    trigger: element,
                    start: "-850",
                    end: "-100",
                    scrub: true
                }
            });
        }));
    }
    window["FLS"] = true;
    isWebp();
})();