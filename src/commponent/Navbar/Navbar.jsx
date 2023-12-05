
import { Link, NavLink} from 'react-router-dom'
import logo from '../../images/freshcart-logo.svg'




export default function Navbar({ user, logOut ,numOfCartItem }) {
 
  return (
    <>
<nav className="navbar navbar-expand-lg bg-main-light">
  <div className="container">
  <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        {/* <li className="nav-item">
        <NavLink className="nav-link" to="/brand">Brands</NavLink>
        </li> */}
        <li className="nav-item">
        <NavLink className="nav-link" to="/allorders">All Orders</NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-1">
              {user ? <>
                <NavLink type="button" className="btn me-2 border-0  position-relative" to="/cart">
                  Cart <i className="fa-solid fa-cart-shopping"></i>
                  <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
    <span className="visually-hidden">New alerts</span>
  </span>
                </NavLink>
                <li className="nav-item">
                  <span onClick={logOut} className="nav-link product">Logout</span>
                </li>
              </> : <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/rejaster">Rejaster</NavLink>
                </li>
              </>}




            </ul>
    </div>
  </div>
</nav>




      {/* <nav className="navbar navbar-expand-lg bg-main-light">
        <div className="container">
          
          <NavLink className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Categories</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/brand">Brands</NavLink>
              </li>

            </ul>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
         
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-1">
              {user ? <>
                <NavLink type="button" className="btn me-2 border-0  position-relative" to="/cart">
                  Cart <i className="fa-solid fa-cart-shopping"></i>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                 0
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </NavLink>
                <li className="nav-item">
                  <span onClick={logOut} className="nav-link product">Logout</span>
                </li>
              </> : <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/rejaster">Rejaster</NavLink>
                </li>
              </>}




            </ul>
          </div>
        </div>
      </nav> */}
    </>
  )
}
