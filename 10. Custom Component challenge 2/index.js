// Challenge:
// Part 2: 
// - Add a 'header' element with a nested 'nav'. Inside the 'nav',
//     include an 'img' element with the image of the React logo.
// - Add an 'h1' with some text describing the page(like 'Reasons I love React')
// - Place it above the ordered list.
// - Add a 'footer' after the list that says:
//     "c 2023 Wey development. All rights reserved."



function MyReact(){
    return (
        // <></> this is called fragment tags
        <div> 
            <header>
                <nav>
                    <img src='../7. Mark-up project\react_logo.png' width='70px'></img>
                </nav>
            </header>
            <h1>
                Reasons why I love React
            </h1>
            <ol>
                <li>React is fun</li>
                <li>React makes frontend easy</li>
                <li>React is necessary for integrating with the backend in an app</li>
                <li>For jobs in software engineering</li>
            </ol>
            <footer>
                <small> &#169; 2023 Wey development. All rights reserved.</small>
            </footer>
        </div>
    )
}
ReactDOM.render(<MyReact />, document.querySelector('#root'))