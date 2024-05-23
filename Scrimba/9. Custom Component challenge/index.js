// Challenge:
// Part 1: crete a page of your own using a custom page component

//     - It should return an ordered list with the reasons why you're excited learning React.
//     - Render your list to the page.

function MyReact(){
    return (
        <div>
            <h1>
                Reasons I love React
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
ReactDOM.render(<MyReact />, document.querySelector('#root'))