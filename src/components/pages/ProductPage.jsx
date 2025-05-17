import { useContext, useState } from "react"
import { useParams } from "react-router"
import NotFound from "./NotFound";
import { Products } from "../../data/Products.js";
import { CartContext } from "../../contexts/CartContext.js";
import Cart from "../../data/Cart.js";
import ProductGallery from "../products/ProductGallery.jsx";

function ProductPage() {
    const [qty, setQty] = useState(1);
    const { productHandle } = useParams();
    const [variantId, setVariantId] = useState(Products[productHandle].variants[0].id);
    const { cart, setCart } = useContext(CartContext);

    if (!Products[productHandle]) {
        return <NotFound />
    }

    function addToCart() {
        const updatedCart = new Cart();
        updatedCart.setCart(cart.getCart());
        updatedCart.addItem(productHandle, variantId, parseInt(qty));
        setCart(updatedCart);
    }

    return (<>
        <section id="prodetails" className="flex max-sm:flex-col">
            <div className="sm:w-[50%] sm:m-[0px_50px_0px_0px]">
                <ProductGallery images={Products[productHandle].images} />
            </div>

            <div className="sm:w-[50%]">
                <div className="sticky top-[4rem]">
                    <h4 className="p-[10px_0_20px_0] text-[26px] text-[#222] font-extrabold">Men's Fashion T Shirt</h4>
                    <h2 id="price" className="text-[20px] leading-[54px] text-[#222] font-extrabold">${(Products[productHandle].variants.find(variant => variant.id == variantId)).price}</h2>
                    <select onChange={(e) => { setVariantId(e.target.value) }} className="block p-[5px_10px] mb-[10px] bg-[#D0D0D7] rounded">
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
            </div>
        </section>
        <div className="mt-[30px]"></div>
    </>)
}

export default ProductPage
