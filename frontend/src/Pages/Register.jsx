import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../Redux/authAction'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { login } = useSelector(state => state.auth)

  const [userData, setuserData] = useState({
    name: "john",
    email: "john@gmail.com",
    password: "123"
  })

  const handleRegisterUser = () => {
    dispatch(registerUser(userData))
  }

  useEffect(() => {
    console.log(login, 'ddd');
    if (login) {
      navigate("/dashbord")
    }
  }, [login])

  // useEffect(() => {
  //   console.log('xxx');
  // }, [])


  return (<>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 offset-sm-3">
          <div class="card">
            <div class="card-header">Register</div>
            <div class="card-body">
              <div>
                <label for="name" class="form-label">First name</label>
                <input
                  type="text"
                  value={userData.name}
                  onChange={e => setuserData({ ...userData, name: e.target.value })}
                  class="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              <div class="mt-2">
                <label for="email" class="form-label">First Email</label>
                <input
                  type="text"
                  value={userData.email}
                  onChange={e => setuserData({ ...userData, email: e.target.value })}
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
                  type="text"
                  value={userData.password}
                  onChange={e => setuserData({ ...userData, password: e.target.value })}
                  class="form-control"
                  id="password"
                  placeholder="Enter Your Password"
                />
                <div class="valid-feedback">Looks good!</div>
                <div class="invalid-feedback">Please choose a password.</div>
              </div>

              <button onClick={handleRegisterUser} type="button" class="btn btn-primary w-100 mt-3">
                Register
              </button>
              <p class="text-center mt-3">
                Already Have Account? <Link to="">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Register
