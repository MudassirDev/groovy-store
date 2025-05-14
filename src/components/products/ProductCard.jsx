import Stars from "../ui/Stars"

function ProductCard() {
    return (<>
        <a href="/products/test-product" className="flex flex-col">
            <div className="rounded-lg w-full h-full relative overflow-hidden shadow-lg group cursor-pointer">
                <img
                    src="/images/pant.jpg"
                    alt="Front"
                    className="inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:translate-x-[-100%]"
                />
                <img
                    src="/images/pant.jpg"
                    alt="Back"
                    className="absolute inset-0 w-full h-full object-cover translate-x-full transition-transform duration-500 group-hover:translate-x-0" />
            </div>
            <div>
                <p className="text-[12.16px]">Carpenter Dark Grey Denim  Rs.3,200.00 Rs.3,600.00</p>
                <div className="flex items-center text-[12.16px]">
                    <Stars rating={3.5} />
                    <p>7 reviews</p>
                </div>
            </div>
        </a>
    </>)
}

export default ProductCard
