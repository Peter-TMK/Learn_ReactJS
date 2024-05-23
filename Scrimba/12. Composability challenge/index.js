import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'


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