"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { Cart } from "@/containers/cart-modal/CartModal";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const pages = [
  { name: "Products", url: "/products" },
  { name: "About", url: "/about" },
  { name: "Contact Us", url: "/contact" },
];

const Navbar = () => {
  const [isCartOpen, setCartOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(false);

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };
  const handleMenuOpen = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar position="sticky" color={"warning"}>
        <Container maxWidth="xl" disableGutters>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Toolbar disableGutters>
              <Button
                sx={{ color: "white", display: { xs: "none", md: "flex" } }}
              >
                <Link
                  href={"/"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    fontWeight: "bold",
                    marginLeft: "1rem",
                    fontSize: "1.1rem",
                  }}
                >
                  CricketStore
                </Link>
              </Button>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={handleMenuOpen}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  open={Boolean(anchorElNav)}
                  anchorEl={anchorElNav}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleMenuClose}>
                      <Link
                        href={page.url}
                        style={{
                          textDecoration: "none",
                          color: "inherit",
                          fontWeight: "bold",
                          fontSize: "1.1rem",
                        }}
                      >
                        {page.name}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Button
                sx={{
                  color: "white",
                  display: { xs: "flex", md: "none" },
                  // flexGrow: 1,
                }}
              >
                <Link
                  href={"/"}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    fontWeight: "bold",
                    // marginLeft: "1rem",
                    fontSize: "1.1rem",
                  }}
                >
                  CricketStore
                </Link>
              </Button>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Button sx={{ color: "white" }}>
                    <Link
                      href={page.url}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontWeight: "bold",
                        fontSize: "1.1rem",
                      }}
                    >
                      {page.name}
                    </Link>
                  </Button>
                ))}
              </Box>
            </Toolbar>
            <Button sx={{ color: "white" }}>
              <ShoppingCartIcon fontSize="large" onClick={handleCartOpen} />
            </Button>
          </Box>
        </Container>
      </AppBar>
      <Cart isCartOpen={isCartOpen} handleCartClose={handleCartClose} />
    </>
  );
};
export default Navbar;
