function onOff(){
    document
        .querySelector("#modal") /*  */
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}

function checkFields(event) {
    //console.log(event.target["title"].value)
    const valueToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]

    // const isEmpty = valueToCheck.find(function(value) {
        
    //     const checkIfIsString = typeof event.target[value].value === "string"
        
    //     // if(checkIfIsString && ) {

    //     // }
    // })

    for( let value of valueToCheck) {
        console.log(event.target[value].value)
    }
}

// altera thema
const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")
const img = document.querySelector("img[name=logo]")


const getStyle = (element, style) =>
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
    colorBg: getStyle(html, "--color-bg"),
    colorPanel: getStyle(html, "--color-panel"),
    colorHighlight: getStyle(html, "--color-highlight"),
    colorHighlightStrong: getStyle(html, "--color-highlight-strong"),
    colorTitle: getStyle(html, "--color-title"),
    colorText: getStyle(html, "--color-text"),
    colorTextPanel: getStyle(html, "--color-text-panel"),
    colorTextButton: getStyle(html, "--color-text-button")
}

const darkMode = {
    colorBg: "#25282b", // preto
    colorPanel: "#393c3f", // rosa escuro
    colorHighlight: "#ee2957", // rosa escuro
    colorHighlightStrong: "#FFFFFF",
    colorTitle: "#FFFFFF", // preto
    colorText: "#b5b5b5",
    colorTextPanel: "#b5b5b5",
    colorTextButton: "#FFFFFF"
}

const logoDark = "img/logo-dark.svg"

const logoLight = "img/logo-light.svg"

const transformKey = key =>
    "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase()

const changeTheme = (colors, logo) => {
    
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key] ))

    img.setAttribute("src", logo)
}

checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeTheme(darkMode, logoDark) : changeTheme(initialColors, logoLight)
    console.log(html.style.cssText)
})

console.log(html.style.cssText)