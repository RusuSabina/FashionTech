import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../contexts/cart/CartContext'

export function Navbar() {
  const pages = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Cart', path: '/cart' },
  ]
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handlePageClick = (path) => {
    handleCloseNavMenu()
    window.location.href = path
  }

  const { cart } = useContext(CartContext)
  console.log({ cart })

  return (
    <AppBar className="nav" position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalMallRoundedIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            className="title-nav"
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 500,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FashionTech
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={() => handlePageClick(page.path)}
                >
                  <Typography textAlign="center">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalMallRoundedIcon
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          />
          <Typography
            className="title-phone"
            variant="h5"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 500,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FashionTech
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              className="btns-nav"
              component={NavLink}
              to="/"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Home
            </Button>
            <Button
              className="btns-nav"
              component={NavLink}
              to="/products"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Products
            </Button>
            <Button
              className="btns-nav"
              component={NavLink}
              to="/login"
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Login
            </Button>
          </Box>

          <Button
            color="secondary"
            variant="contained"
            className="btns-nav-cart"
            component={NavLink}
            to="/cart"
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            Cart({cart.length})
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
