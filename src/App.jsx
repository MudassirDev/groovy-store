import { Fade } from "react-awesome-reveal"
import { BrowserRouter } from "react-router"
import Header from "./components/layout/Header"
import Home from "./components/pages/Home"
import Footer from "./components/layout/Footer"

function App() {

    return (
        <>
            <BrowserRouter>
                <Header />
                <div className="mt-[30px]"></div>
                <div id="main" className="max-w-[90%] m-auto">
                    <Home />
                </div>
                <Fade>
                    <img className="max-lg:hidden" src="/images/communitybanner.svg" />
                    <img className="max-lg:hidden" src="/images/instabanner.svg" />
                </Fade>
                <Fade>
                    <Footer />
                </Fade>
            </BrowserRouter>
        </>
    )
}

export default App
