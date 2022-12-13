 import React from 'react'
 import { Link } from 'react-router-dom'
 import { useLocation } from 'react-router-dom'
 export const Navbar = () => {
  let location = useLocation();
  // React.useEffect(() => {
  //   // Google Analytics
  //   console.log(location.pathname);
  // }, [location]);
   return (
    <nav className="navbar navbar-expand-dark navbar-dark bg-dark">
      <div className='container-fluid'>
      <Link className="navbar-brand" to="#">iNotebook</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
        </li>
        
      </ul>
     
    </div>
      </div>
  </nav>
   )
 }
 