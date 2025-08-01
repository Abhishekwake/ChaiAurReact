import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return (
    <div>
      <h1>Custom APP | Chai</h1>
    </div>
  )
}

// const reactElement = {
//     type : 'a',
//     props: {
//         href : 'http://google.com',
//         target: 'blank'
//     },
//     children : 'Click me to visit go'
// }
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google </a>
)
const user = "Abhishek" 
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank', rel: 'noreferrer' },
  'Click me to visit Google',
  user


);


ReactDOM.createRoot(document.getElementById('root')).render(
 
    // <App />
    // MyApp()
    // reactElement not works because of bunder jo react me hota hai usse uske hisaab se para chahiye ya phir humne yaha customer render bhi nhi likha
    // reactElement
    <App/>

  )
 