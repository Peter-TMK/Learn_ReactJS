// Challenge -

// create a navbar in JSX:
//     - Use the semantic nav element as the wrapper
//     - Have an h1 element with branch name of your 'website'
//     - Insert an unordered list for the other nav elements
//         - Inside the URL, have three li's for 'pricing', 'about' and 'contact'
//     - Dont worry about styling just yet

// const nav = document.createElement('nav')
// const h1 = document.createElement('h1')
// const ul = document.createElement('ul')
// h1.textContent = "Excel Blog"
// ul.textContent = 'pricing'
// ul.textContent = 'about'
// ul.textContent = 'contact'
// document.getElementById("nav").append(h1)
// document.getElementById("h1").append(ul)

const page = (
    <nav>
        <h1>
            Excel's Website
        </h1>
        <ul>
            <li>pricing</li>
            <li>about</li>
            <li>contact</li>
        </ul>
    </nav>
)


ReactDOM.render(page,document.querySelector('#root'))