import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    let user = JSON.parse(localStorage.getItem('user-info'))

    const navigate=useNavigate()

    function logOut()
    {
        localStorage.clear();
        navigate('/register')
        
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
                <Nav className="me-5 navbar_wrapper">
                    {
                        localStorage.getItem('user-info') ?
                            <>
                                <Link to="/">Product List</Link>
                                <Link to="/add">Add Product</Link>
                                <Link to="/search">Search</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                    }
                </Nav>
                {
                localStorage.getItem('user-info') ?
                <Nav className="offset-sm-4">
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item onClick={logOut}>Log Out</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                :null
                }
            </Navbar>
        </div>
    )
}

export default Header