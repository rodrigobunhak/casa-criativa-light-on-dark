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