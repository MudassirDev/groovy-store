function Header() {
    return (
        <header className="sticky top-0 z-10">
            <nav className="bg-white w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 py-6">
                <ul className="navigation max-w-[90vw] flex flex-wrap justify-between items-center relative mx-auto">
                    <a className="logo" href="/">
                        <img src="/images/logo.png" className="w-[134px]" />
                        {/* <h3 className="font-bold text-2xl">LOGO</h3> */}
                    </a>
                    <input type="checkbox" id="check" />

                    <span className="menu flex [&>li]:pl-8 [&>li>a]:text-center [&>li>a]:relative [&>li>a]:transition [&>li>a]:duration-200 [&>li>a]:ease-in-out [&>li>a]:font-medium [&>li>a]:text-lg">
                        <li><a href="/">Home</a></li>
                        <li><a href="/collections">Collections</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="#">Resources</a></li>
                        <li><a href="#">Contact</a></li>

                        <label htmlFor="check" className="close-menu">X</label>
                    </span>

                    <label htmlFor="check" className="open-menu">Menu</label>
                </ul>
            </nav>
        </header>
    );
};

export default Header
