export const sectionAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.6, type: "spring", stiffness: 50 }
    },
}

export const sectionRightAnimation = {
    hidden: {
        x: -25,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.6, type: "spring", stiffness: 50 }
    },
}