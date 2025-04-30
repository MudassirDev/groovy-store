import { Fade } from "react-awesome-reveal"
import Collection from "../collections/Collection"
import Hero from "../layout/Hero"
import FeaturedProducts from "../products/FeaturedProducts"
import FeaturedProducts2 from "../products/FeaturedProducts2"
import Banner from "../layout/Banner"

function Home() {
    return (<>
        <Fade>
            <Collection />
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
    </>)
}

export default Home
