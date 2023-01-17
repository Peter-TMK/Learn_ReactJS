
function Header(){
    return (
        <header>
            <nav>
                <img src='../7. Mark-up project\react_logo.png' width='70px'></img>
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

function MyReact(){
    return (
        // <></> this is called fragment tags
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<MyReact />, document.querySelector('#root'))