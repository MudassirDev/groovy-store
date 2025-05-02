function NotFound() {
    return (<>
        <main className="flex flex-col justify-center items-center">
            <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
            <div className="bg-black text-white px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <button className="mt-5 bg-black text-white p-2 rounded">
                <a href="/">Go Home</a>
            </button>
        </main>
        <div className="mt-[30px]"></div>
    </>)
}

export default NotFound
