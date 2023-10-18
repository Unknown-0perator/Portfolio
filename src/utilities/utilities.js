export const convertObjToArray = (obj) => {
    return Object.entries(obj).map(([key, value]) => ({
        key: key,
        value: value
    }))
}

export const scrollToSection = (elementRef) => {
    window.scrollTo({
        top: elementRef.current.offsetTop - 70,
        behavior: "smooth"
    })
}