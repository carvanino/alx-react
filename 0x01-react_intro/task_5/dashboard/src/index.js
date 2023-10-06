console.log('In there');

const newElemet =  (text = "Hello, Webpack!") => {
    const element = document.createElement("h1");

    element.innerHTML = text;

    return element
}

document.body.appendChild(newElemet());