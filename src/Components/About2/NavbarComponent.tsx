import images from "../../Importer/Importer";

interface NavbarType {
    theme: string;
}

const NavbarComponent = (props: NavbarType) => {
    if (props.theme === "dark") {
        return (
            <div className="nav-dark">
                <div className="container mx-auto flex flex-row z-10">
                    <div className="fixed top-7 left-10">
                        <img src={images['Logo/NILL.svg']} alt=""/>
                    </div>

                    <div>
                        <div className="full-menu-style">
                            <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
                            <label htmlFor="menu-icon"/>
                            <nav className="nav-menu-full navigation">
                                <ul className="pt-5">
                                    <li><a href="#" data-text="Home">Home</a></li>
                                    <li><a href="#" data-text="Portfolio">Portfolio</a></li>
                                    <li><a href="#" data-text="Blog">Blog</a></li>
                                    <li><a href="#" data-text="About Us">About Us</a></li>
                                    <li><a href="#" data-text="Contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (props.theme === "transparent") {
        return (
            <div className="nav-style nav-dark">
                <div className="container mx-auto flex flex-row">
                    <div className="full-menu-style">
                        <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
                        <label htmlFor="menu-icon"/>
                        <nav className="nav-menu-full navigation">
                            <ul className="pt-5">
                                <li><a href="#" data-text="Home">Home</a></li>
                                <li><a href="#" data-text="Portfolio">Portfolio</a></li>
                                <li><a href="#" data-text="Blog">Blog</a></li>
                                <li><a href="#" data-text="About Us">About Us</a></li>
                                <li><a href="#" data-text="Contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="nav-style nav-dark">
                <div className="container mx-auto flex flex-row">
                    <div className="full-menu-style">
                        <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
                        <label htmlFor="menu-icon"/>
                        <nav className="nav-menu-full navigation">
                            <ul className="pt-5">
                                <li><a href="#" data-text="Home">Home</a></li>
                                <li><a href="#" data-text="Portfolio">Portfolio</a></li>
                                <li><a href="#" data-text="Blog">Blog</a></li>
                                <li><a href="#" data-text="About Us">About Us</a></li>
                                <li><a href="#" data-text="Contact">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
};

export default NavbarComponent;
