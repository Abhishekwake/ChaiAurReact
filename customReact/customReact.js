/* function customerRender(reactElement,container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    mainContainer.appendChild(domElement)
}
*/
function customerRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
       if(prop === 'children') continue;
       domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props: {
        href : 'http://google.com',
        target: 'blank'
    },
    children : 'Click me to visit go'
}
const mainContainer = document.querySelector('#root');
customerRender(reactElement,mainContainer)