import { Fade } from "react-awesome-reveal"
import Hero from "../layout/Hero"
import FeaturedProducts from "../products/FeaturedProducts"
import FeaturedProducts2 from "../products/FeaturedProducts2"
import Banner from "../layout/Banner"
import FeaturedCollection from "../collections/FeaturedCollection"

function Home() {
    return (<>
        <div id="main" className="max-w-[90%] m-auto">
            <Fade>
                <FeaturedCollection />
            </Fade>
            <div className="m-[75px]"></div>
            <Fade>
                <Hero />
            </Fade>
            <div className="m-[75px]"></div>
            <Fade>
                <FeaturedProducts />
            </Fade>
            <div className="m-[75px]"></div>
            <Fade>
                <Banner />
            </Fade>
            <div className="m-[75px]"></div>
            <Fade>
                <FeaturedProducts2 />
            </Fade>
            <div className="m-[75px]"></div>
        </div>
        <Fade>
            <img className="max-lg:hidden" src="/images/communitybanner.svg" />
            <img className="max-lg:hidden" src="/images/instabanner.svg" />
        </Fade>
    </>)
}

export default Home
