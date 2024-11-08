
  const brandStyle = {
    fontSize: '54px',
    color: '#BC8F8F',
    fontFamily: 'Roboto',
  };

function NavBar() {
    return (
        <nav className="navbar" >
  <div className="container-md">
    <a className="navbar-brand" href="/" style={brandStyle}>Quizzz 👻</a>
  </div>
</nav>
    );
}

export default NavBar;