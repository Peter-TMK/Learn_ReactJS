// Challenge -

// create a navbar in JSX:
//     - Use the semantic nav element as the wrapper
//     - Have an h1 element with branch name of your 'website'
//     - Insert an unordered list for the other nav elements
//         - Inside the URL, have three li's for 'pricing', 'about' and 'contact'
//     - Dont worry about styling just yet


const page = (
    <div>
        <h1>
            Excel's Website
        </h1>
        <p>Enjoy Tech all the way</p>
        <p>...have fun!</p>
        <ul>
            <li>pricing</li>
            <li>about</li>
            <li>contact</li>
        </ul>
    </div>
)

ReactDOM.render(page, document.querySelector('#root'))

// using append()
// document.querySelector('#root').append(JSON.stringify(page))