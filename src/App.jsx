import { Fade } from "react-awesome-reveal"
import { BrowserRouter, Route, Routes, useLocation } from "react-router"
import Header from "./components/layout/Header"
import Home from "./components/pages/Home"
import Footer from "./components/layout/Footer"
import NotFound from "./components/pages/NotFound"
import Collections from "./components/pages/Collections"
import CollectionPage from "./components/pages/CollectionPage"
import ProductPage from "./components/pages/ProductPage"
import { useState } from "react"
import { CartContext } from "./contexts/CartContext"
import Cart from "./data/Cart"
import CartPage from "./components/pages/CartPage"

function Layout({ children }) {
    const location = useLocation()

    const isHome = location.pathname === "/"

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="mt-[30px]"></div>
                {isHome ? (children) : (
                    <div id="main" className="max-w-[90%] mx-[5%]">
                        {children}
                    </div>
                )}
                <div className="flex-1"></div>
                <Fade>
                    <Footer />
                </Fade>
            </div>
        </>
    )
}

function App() {
    const [cart, setCart] = useState(() => {
        const localCart = localStorage.getItem("cart");
        if (localCart) {
            const cart = new Cart();
            cart.setCart(JSON.parse(localCart));
            return cart;
        } else {
            return new Cart();
        }
    });

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="/collections" element={<Collections />} />
                        <Route path="/collections/:collection" element={<CollectionPage />} />
                        <Route path="/products/:productHandle" element={<ProductPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </CartContext.Provider>
    )
}

export default App
