import { useState } from 'react'
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from 'mdb-react-ui-kit'

export function RegistrationForm() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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

  return (
    <form onSubmit={handleSubmit}>
      <MDBCard
        className="text-black m-5 mt-6 pt-3"
        style={{ borderRadius: '25px' }}
      >
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              <div className="d-flex flex-row align-items-center mb-4  ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="First Name"
                  id="form"
                  name="firstName"
                  type="text"
                  className="w-100"
                  onChange={handleInputChange}
                  value={state.firstName}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput
                  label="Last Name"
                  id="form1"
                  name="lastName"
                  type="text"
                  className="w-100"
                  onChange={handleInputChange}
                  value={state.lastName}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput
                  label="Your Email"
                  id="form2"
                  name="email"
                  type="email"
                  onChange={handleInputChange}
                  value={state.email}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput
                  label="Password"
                  id="form3"
                  name="password"
                  type="password"
                  onChange={handleInputChange}
                  value={state.password}
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size="lg" />
                <MDBInput
                  label="Repeat your password"
                  id="form4"
                  name="confirmPassword"
                  type="password"
                  onChange={handleInputChange}
                  value={state.confirmPassword}
                />
              </div>

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <MDBBtn className="mb-4" size="lg" type="submit">
                Register
              </MDBBtn>
              <p>
                If you have an account,{' '}
                <a href="/login">
                  <b className="text-info">click here.</b>
                </a>
              </p>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://scribie.com/assets/front/illustrations/Welcome-to-scribie-512x391.svg"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </form>
  )
}
