const NavHeader =() => {
    return (
        <header className="header">
            <a href="#home" className="logo"><img src='../images/Logo.PNG' alt="VUNIKSWA"/></a>
            <div className="fas fa-bars"></div>
            <nav className="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Services</a></li>
                    {/* <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="careers.html">Career</a></li> */}
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
            </nav>
        </header>
    )
};
export default NavHeader;
