import { Fade } from "react-awesome-reveal"
import { BrowserRouter, Route, Routes, useLocation } from "react-router"
import Header from "./components/layout/Header"
import Home from "./components/pages/Home"
import Footer from "./components/layout/Footer"
import NotFound from "./components/pages/NotFound"
import Collections from "./components/pages/Collections"
import CollectionPage from "./components/pages/CollectionPage"
import ProductPage from "./components/pages/ProductPage"

function Layout({ children }) {
    const location = useLocation()

    const isHome = location.pathname === "/"

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <Header />
                <div className="mt-[30px]"></div>
                {isHome ? (children) : (
                    <div id="main" className="max-w-[90%] m-auto">
                        {children}
                    </div>
                )}
                <Fade>
                    <Footer />
                </Fade>
            </div>
        </>
    )
}

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/collections/:collection" element={<CollectionPage />} />
                    <Route path="/products/:productname" element={<ProductPage />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App
