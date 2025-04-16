import Collection from "./components/Collection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

    return (
        <>
            <Header />
            <div id="main" className="max-w-[90%] m-auto">
                <Collection />
                <Hero />
            </div>
            <Footer />
        </>
    )
}

export default App
