import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { userLogin } from '../../Redux/authAction'

export default function Login() {
  const dispatch = useDispatch()
  const { login } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: "sirsath2260@gmail.com",
    password: "123"
  })
  useEffect(() => {
    if (login) {
      navigate("/dashbord")
    }
  }, [login])
  
  const handleLogin = () => {
    dispatch(userLogin(userData))
  }
  return <>

    <div class="container">
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <div class="card">
            <div class="card-header">Login</div>
            <div class="card-body">
              <div>
                <label for="email" class="form-label">First-Email</label>
                <input
                  type="text"
                  value={userData.email}
                  onChange={e => setUserData({ ...userData, email: e.target.value })}
                  class="form-control"
                  id="email"
                  placeholder="Enter Your Email"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              <div class="mt-2">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  value={userData.password}
                  onChange={e => setUserData({ ...userData, password: e.target.value })}
                  class="form-control"
                  id="password"
                  placeholder="Enter Your Password"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              <button
                type="button"
                onClick={handleLogin}
                class="btn btn-primary w-100 mt-3">
                Login
              </button>
              <p class="text-center mt-3">
                Dont Have Account? <a href="#">Create Account</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </>
}
