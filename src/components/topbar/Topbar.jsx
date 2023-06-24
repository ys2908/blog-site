import "./topbar.css"
import { Link } from 'react-router-dom'
export default function topbar() {
  const user=true;
  return (
    <div className='top'>
      <div className="topleft">
      <i className="topicon fa-brands fa-square-facebook"></i>
      <i className="topicon fa-brands fa-square-twitter"></i>
      <i className="topicon fa-brands fa-square-instagram"></i>
      <i className="topicon fa-brands fa-square-pinterest"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
            <li className="toplistitem">
              <Link className="link" to="/" >HOME</Link>
            </li>
            <li className="toplistitem"><Link className="link" to="/" >ABOUT</Link></li>
            <li className="toplistitem"><Link className="link" to="/" >CONTACT</Link></li>
            <li className="toplistitem"><Link className="link" to="/write" >WRITE</Link></li>
            <li className="toplistitem">
              {user && "LOGOUT"}</li>

        </ul>
      </div>
      <div className="topright">
        {user ? (
        
        <img className="topimg"
        src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" 
        alt="" /> 
        ) : (
          <ul className="toplist">
            <li className="toplistitem">
          <Link className="link" to="/login">LOGIN</Link> </li>
        
            <li className="toplistitem">
          <Link className="link" to="/register">REGISTER</Link> </li>
         
          </ul>
        )}
        <i className="topsearchicon fas fa-search"></i>
      </div>
    </div>
  )
}
