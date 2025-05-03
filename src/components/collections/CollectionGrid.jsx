import { Fade } from "react-awesome-reveal"
import ProductCard from "../products/ProductCard"

function CollectionGrid() {
    return (<>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-5">
            <Fade cascade damping={0.1} triggerOnce>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Fade>
        </div >
    </>)
}

export default CollectionGrid
