import Banner from "./components/Banner"
import Collection from "./components/Collection"
import FeaturedProducts from "./components/FeaturedProducts"
import FeaturedProducts2 from "./components/FeaturedProducts2"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

    return (
        <>
            <Header />
            <div id="main" className="max-w-[90%] m-auto">
                <div className="mt-[30px]"></div>
                <Collection />
                <div className="m-[75px]"></div>
                <Hero />
                <div className="m-[75px]"></div>
                <FeaturedProducts />
                <div className="m-[75px]"></div>
                <Banner />
                <div className="m-[75px]"></div>
                <FeaturedProducts2 />
                <div className="m-[75px]"></div>
            </div>
            <img src="src/assets/images/communitybanner.svg" />
            <img src="src/assets/images/instabanner.svg" />
            <Footer />
        </>
    )
}

export default App
