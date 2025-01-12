import { NavLink } from "react-router-dom"
import freshcartLogo from "../../assets/imgs/freshcart-logo.svg"
import { useContext } from "react"
import { UserContext } from "../../context/User.context"

export default function Navbar() {

  const { token, logOut } = useContext(UserContext);
  return <>
    <nav className="bg-slate-100 py-3 shadow-sm">
      <div className="container flex items-center gap-12">
        <a href="">
          <img src={freshcartLogo} alt="freshCart logo" />
        </a>

        {token && <> <ul className="flex items-center gap-5">
          <li>
            <NavLink to="/" className={({ isActive }) => {
              return `relative before:absolute before:bg-primary-800 before:h-0.5 before:w-0 hover:before:w-full before:transition-[width] before:duration-300 before:-bottom-1 before:left-0 ${isActive ? "before:w-full font-semibold" : ""} `
            }}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => {
              return `relative before:absolute before:bg-primary-800 before:h-0.5 before:w-0 hover:before:w-full before:transition-[width] before:duration-300 before:-bottom-1 before:left-0 ${isActive ? "before:w-full font-semibold" : ""} `
            }}>Products</NavLink>
          </li>
          <li>
            <NavLink to="/categories" className={({ isActive }) => {
              return `relative before:absolute before:bg-primary-800 before:h-0.5 before:w-0 hover:before:w-full before:transition-[width] before:duration-300 before:-bottom-1 before:left-0 ${isActive ? "before:w-full font-semibold" : ""} `
            }}>Categories</NavLink>
          </li>
          <li>
            <NavLink to="/brands" className={({ isActive }) => {
              return `relative before:absolute before:bg-primary-800 before:h-0.5 before:w-0 hover:before:w-full before:transition-[width] before:duration-300 before:-bottom-1 before:left-0 ${isActive ? "before:w-full font-semibold" : ""} `
            }}>Brands</NavLink>
          </li>
          <li>
            <NavLink to="/orders" className={({ isActive }) => {
              return `relative before:absolute before:bg-primary-800 before:h-0.5 before:w-0 hover:before:w-full before:transition-[width] before:duration-300 before:-bottom-1 before:left-0 ${isActive ? "before:w-full font-semibold" : ""} `
            }}>Orders</NavLink>
          </li>
        </ul>

          <div className="cart relative text-lg cursor-pointer ml-auto">
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="container flex justify-center items-center bg-primary-800 text-white absolute w-5 h-5 rounded-full right-0 top-0 translate-x-1/2 -translate-y-1/2 ">
              <i className="fa-solid fa-spinner fa-spin text-white"></i>
            </div>
          </div></>}

        <ul className={`flex items-center gap-5 ${!token && "ml-auto"}`}>
          <li>
            <a href="https://instagram.com" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://facebook.com" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://tiktok.com" target="_blank">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </li>
        </ul>

        <ul className="flex items-center gap-5">
          {!token && <><li>
            <NavLink to="/signup" className={({ isActive }) => {
              return `relative before:absolute before:bg-primary-800 before:h-0.5 before:w-0 hover:before:w-full before:transition-[width] before:duration-300 before:-bottom-1 before:left-0 ${isActive ? "before:w-full font-semibold" : ""} `
            }}>Sign Up</NavLink>
          </li>
            <li>
              <NavLink to="/login" className={({ isActive }) => {
                return `relative before:absolute before:bg-primary-800 before:h-0.5 before:w-0 hover:before:w-full before:transition-[width] before:duration-300 before:-bottom-1 before:left-0 ${isActive ? "before:w-full font-semibold" : ""} `
              }}>Login</NavLink>
            </li></>}
          <li onClick={logOut}>
            <NavLink to="">
              <i className="fa-solid fa-right-from-bracket text-lg"></i>
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  </>
}
