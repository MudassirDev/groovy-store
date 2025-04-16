function Hero() {
    return (<>
        <div className="grid grid-cols-[1fr] gap-x-3 lg:grid-cols-[2fr_1fr] md:grid-cols-2">
            <div className="DimensionsFull max-h-[350px]">
                <img className="DimensionsFull object-cover rounded-lg" src="src/assets/images/anticipated.jpg" />
            </div>
            <div className="DimensionsFull max-h-[350px]">
                <img className="DimensionsFull rounded-lg object-cover" src="src/assets/images/clothes.png" />
            </div>
        </div>
    </>)
}

export default Hero
