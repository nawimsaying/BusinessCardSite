import {animateScroll as scroll} from "react-scroll/modules";

export const scrollToContact = () => {
    const target = document.querySelector("#contact");
    if (target) {
        const offset = target.getBoundingClientRect().top + window.pageYOffset;
        scroll.scrollTo(offset, {
            duration: 800,
            smooth: "easeInOutQuart"
        });
    }
};