"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { Cart } from "@/Cart/Cart";

const Navbar = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  const handleCartOpen = () => {
    setCartOpen(true);
  };

  const handleCartClose = () => {
    setCartOpen(false);
  };

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl" disableGutters>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Toolbar disableGutters>
              <Link href={"/"}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".1rem",

                    textDecoration: "none",
                  }}
                >
                  CricHeroes
                </Typography>
              </Link>
              <Link href={"/products"}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".1rem",

                    textDecoration: "none",
                  }}
                >
                  Products
                </Typography>
              </Link>
              <Link href={"/about"}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".1rem",

                    textDecoration: "none",
                  }}
                >
                  About
                </Typography>
              </Link>
              <Link href={"/contact"} textDecoration="none">
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".1rem",

                    textDecoration: "none",
                  }}
                >
                  Contact Us
                </Typography>
              </Link>
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