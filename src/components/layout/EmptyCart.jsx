function EmptyCart() {
    return (<>
        <div>
            <h1 className="text-[30px] lg:text-[60px] text-center">Your cart is empty</h1>
            <a href="/collections/test" className="bg-black text-white p-3 rounded m-auto block max-w-[160px]">Continue Shopping</a>
        </div>
        <div className="mt-[30px]"></div>
    </>)
}

export default EmptyCart
