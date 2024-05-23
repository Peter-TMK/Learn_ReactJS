import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


function Header(){
    return (
        <header>
            <nav className='nav'>
                <img className='img' src='../../7. Mark-up project\react_logo.png' alt='react logo'></img>
                <ul className='nav-items'>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent(){
    return (
        <div>
            <h1>
                Reasons why I love React
            </h1>
            <ol>
                <li>React is fun</li>
                <li>React makes frontend easy</li>
                <li>React is necessary for integrating with the backend in an app</li>
                <li>For jobs in software engineering</li>
            </ol>
        </div>
    )
}

function Footer(){
    return (
        <footer>
            <small> &#169; 2023 Wey development. All rights reserved.</small>
        </footer>
    )
}

function MyPage(){
    return (
        // <></> this is called fragment tags
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<MyPage />, document.querySelector('#root'))
// ReactDOM.render(<p>Hello CRA</p>, document.getElementById('root'))
