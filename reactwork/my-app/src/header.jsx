const Header = () => {
    return(
        <Header>
            <nav className="navbar navbar-expand-sm">
                <a  
                    className="nav-brand"
                    href="www.bbc.com"
                    target="_blank" 
                    rel="noopener noreferrer">
                        <image
                        alt="logo"
                        src="logo.svg"
                        width="100px"/>
                    </a>
                    <a href="/" className="navbar-brand">
             random stuff
         </a>
            </nav>
        </Header>
    );

}
export default Header;