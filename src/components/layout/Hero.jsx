function Hero() {
    return (<>
        <div className="grid grid-cols-[1fr] gap-3 lg:grid-cols-[2fr_1fr] md:grid-cols-2">
            <div className="w-full max-h-[350px] h-[250px] md:h-auto">
                <img className="DimensionsFull object-cover rounded-lg" src="/images/anticipated.jpg" />
            </div>
            <a id="hero2" href="/" className="w-full max-h-[350px] h-[250px] md:h-auto overflow-hidden relative">
                <img className="DimensionsFull rounded-lg object-cover transition-all ease-out" src="/images/clothes.png" />
                <p
                    className="absolute top-[50%] left-[50%] transform-[translate(-50%,-50%)] bg-[#FF662B] text-white font-bold text-[15px] p-1 md:text-[20px]">
                    25+ new articles
                </p>
            </a>
        </div>
    </>)
}

export default Hero
