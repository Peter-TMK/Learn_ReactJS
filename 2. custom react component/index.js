// ReactDOM.render(<h1>Hello, React</h1>, document.getElementById("root"))
// ReactDOM.render(<h1>Hello, I'm Excel</h1>, document.querySelector("#root"))

function MainContent(){
    return (
        <h1>Hello Component</h1>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>,
    document.querySelector("#root")
    )