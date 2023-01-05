import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import { logoutAction } from '../../Redux/authSlice'

export default function Navbar() {
  const dispatch = useDispatch()
  const { login } = useSelector(state => state.auth)

  // useEffect(() => {


  //   return () => {

  //   }
  // }, [logoutAction])

  return <>
    <nav class="navbar navbar-expand-lg nav-dark">
      <div class="container-fluid">
        <Link class="navbar-brand">Navbar</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/" className='nav-link'>Home</Link>
            {
              login && login.name ? <>
                <div class="dropdown">
                  <button class="btn btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                    {login.name}
                  </button>
                  <ul class="dropdown-menu">
                    <button
                      onClick={e => dispatch(logoutAction())}
                      type="button" class="btn dropdown-item btn-outline-danger">Logout</button>
                  </ul>
                </div>
              </>

                : <>
                  <Link to="/register" class="nav-link">Register</Link>
                  <Link to="/login" class="nav-link" >Login</Link>
                  {/* <Link to={"/addBlog"} className="nav-link">addBlog</Link> */}
                </>

            }


          </div>
        </div>
      </div>
    </nav>


  </>
}