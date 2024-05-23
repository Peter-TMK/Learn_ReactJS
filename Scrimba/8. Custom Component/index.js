// JS Equivalent

// function tempName(){
//     return (
//         <div>
//             <img src='../7. Mark-up project\react_logo.png' width='70px'></img>
//             <h1>
//                 Fun facts about React
//             </h1>
//             <ul>
//                 <li>Was first released in 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100k stars on Github</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Powers thousands of enterprise apps, including mobile apps</li>
//             </ul>
//         </div>
//     )
// }

// ReactDOM.render(tempName(), document.querySelector('#root'))


// React Equivalent (component)


function PascalCase(){
    return (
        <div>
            <img src='../7. Mark-up project\react_logo.png' width='70px'></img>
            <h1>
                Fun facts about React
            </h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<PascalCase />, document.querySelector('#root'))
