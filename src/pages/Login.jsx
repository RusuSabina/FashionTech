import { Box } from '@mui/material'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit'
import { useState } from 'react'

export default function Login() {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(state)
  }

  /*const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }*/

  return (
    <Box>
      <MDBContainer
        className="my-5 login gradient-form "
        onSubmit={handleSubmit}
      >
        <MDBRow>
          <MDBCol col="6" className=" mb-4 mt-4 ">
            <div className="d-flex flex-column ms-5">
              <div className="text-center p-5 me-5">
                <img
                  src="https://assets.weforum.org/article/image/XaHpf_z51huQS_JPHs-jkPhBp0dLlxFJwt-sPLpGJB0.jpg"
                  style={{ width: '185px' }}
                  alt="logo"
                  className="image-login"
                />
                <h4 className="title-login mt-3 mb-5 pb-0 fs-3 fw-bolder">
                  FashionTech Team
                </h4>
              </div>
              <div className="fw-bolder fs-6">
                <p className="text-please">Please login to your account</p>
              </div>
              <div className="labels">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="form1"
                  type="email"
                  name="email"
                  onChange={handleInputChange}
                  value={state.email}
                  required
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form2"
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                  value={state.password}
                />
              </div>
              <div className="text-center justify-content-center  pt-1 mb-5 pb-1">
                <MDBBtn className="btn-login  mb-5 w-20 gradient-custom-2 ">
                  Log in
                </MDBBtn>
                <div>
                  <a className="text-muted " href="#!">
                    Have you forgoten the password?
                  </a>
                </div>
              </div>

              <div className="account d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                <p className="mb-0">
                  Don't have an account?{' '}
                  <a className="text-dark fw-bold" href="/registrationForm">
                    Register
                  </a>
                </p>
              </div>
            </div>
          </MDBCol>

          <MDBCol col="6" className="mb-5">
            <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
              <div className="text-white right px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-4 fs-4 text-center">
                  <u> We are more than just a company</u>
                </h4>
                <p className="small mb-0 fs-5 lh-sm">
                  If you want to receive a discount on your first order or if
                  you want to benefit of frequent discounts,{' '}
                  <a className="reg" href="/registrationForm">
                    REGISTER.
                  </a>{' '}
                  If you already have an account, LOG IN on the current page!
                </p>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Box>
  )
}
