import { useContext, useRef, useState } from "react"
import { useParams } from "react-router"
import NotFound from "./NotFound";
import { Products } from "../../data/Products.js";
import { CartContext } from "../../contexts/CartContext.js";
import Cart from "../../data/Cart.js";

function ProductPage() {
    const [qty, setQty] = useState(1);
    const { productHandle } = useParams();
    const { cart, setCart } = useContext(CartContext)
    const variantRef = useRef(null);

    if (!Products[productHandle]) {
        return <NotFound />
    }

    function addToCart() {
        const updatedCart = new Cart();
        updatedCart.setCart(cart.getCart());
        updatedCart.addItem(productHandle, variantRef.current.value, parseInt(qty));
        console.log(updatedCart);
        console.log(updatedCart.getCartTotal());
        setCart(updatedCart);
    }


    return (<>
        <section id="prodetails" className="flex max-sm:flex-col">
            <div className="sm:w-[50%] sm:m-[0px_50px_0px_0px]">
                <img src={Products[productHandle].images[0]} width="100%" id="mainImg" alt="" />

                <div className="flex justify-between mt-1">
                    {Products[productHandle].images.length > 1 && Products[productHandle].images.map(url => {
                        return (
                            <div key={url} className="basis-[24%] cursor-pointer">
                                <img src={url} width="100%" className="small-img" alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="sm:w-[50%] pt-[30px]">
                <h6 className="text-[12px] font-[700]">Home /T-Shirt</h6>
                <h4 className="p-[40px_0_20px_0] text-[20px] text-[#222] font-extrabold">Men's Fashion T Shirt</h4>
                <h2 className="text-[26px] leading-[54px] text-[#222] font-extrabold">$139</h2>
                <select ref={variantRef} className="block p-[5px_10px] mb-[10px] bg-[#D0D0D7] rounded">
                    {Products[productHandle].variants.map(variant => {
                        return (<option key={variant.id} value={variant.id}>{variant.label}</option>)
                    })}
                </select>
                <input value={qty} onChange={(e) => { setQty(e.target.value) }} min={1} type="number" className="w-[50px] h-[47px] p-[0px_0px_0px_10px] text-[16px] m-[0px_10px_0px_0px] border-black border-[1px]" />
                <button onClick={addToCart} className="bg-black text-white text-[14px] font-[600] p-[15px_30px] rounded-[4px] cursor-pointer">Add to Cart</button>
                <h4 className="p-[40px_0_20px_0] text-[20px] text-[#222] font-extrabold">Product Details</h4>
                <span className="leading-[25px]">The Gildan Ultra Cotton T-Shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from
                    100% cotton, this classNameic fit preshrunk jersey knit provides unmatched comfort with each wear, Featuring
                    a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it
                    offers it all in the ultimate head-turning package.</span>
            </div>
        </section>
        <div className="mt-[30px]"></div>
    </>)
}

export default ProductPage
