// ReactDOM.render(<h1>Hello, React</h1>, document.getElementById("root"))
// ReactDOM.render(<h1>Hello, I'm Excel</h1>, document.querySelector("#root"))

// function MainContent(){
//     return (
//         <h1>Hello Component</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <MainContent />
//     </div>,
//     document.querySelector("#root")
//     )

// -- create a new h1 Element
// -- Give it some textcontent
// -- Give it a class name of 'header'
// -- append it as a child of the div#root

const h1 = document.createElement("h1")
h1.textContent = 'I just REACTed'
h1.className = 'header'
document.getElementById("root").append(h1)