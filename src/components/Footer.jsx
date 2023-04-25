import { MDBContainer, MDBFooter } from 'mdb-react-ui-kit'

{
  /*export function Footer () {
const year = new Date().getFullYear();
  return (
 <footer className="footer">{`Copyright © Outlet Store ${year}`}</footer>
 );
};*/
}

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <MDBFooter
      position="static"
      className="footer  pb-2"
      style={{ backgroundColor: '#695959' }}
    >
      <MDBContainer className="pt-0"></MDBContainer>
      <div
        className="text-center text-white p-3"
        style={{ backgroundColor: '#695959' }}
      >
        {' '}
        Copyright © Outlet Store {year}
      </div>
    </MDBFooter>
  )
}
