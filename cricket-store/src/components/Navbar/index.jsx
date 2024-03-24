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
      <AppBar position="sticky" color={"warning"}>
        <Container maxWidth="xl" disableGutters>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Toolbar disableGutters>
              <Button sx={{ color: "white" }}>
                <Link
                  href={"/"}
                  style={{ textDecoration: "none", color: "inherit", fontWeight: "bold", marginLeft: "1rem", fontSize:"1.1rem" }}
                >

                  CricketStore

                </Link>
              </Button>
              <Button sx={{ color: "white" }}>
                <Link
                  href={"/products"}
                  style={{ textDecoration: "none", color: "inherit", fontWeight: "bold", fontSize:"1.1rem"}}
                >

                  Products

                </Link>
              </Button>
              <Button sx={{ color: "white" }}>
                <Link
                  href={"/about"}
                  style={{ textDecoration: "none", color: "inherit", fontWeight: "bold", fontSize:"1.1rem" }}
                >

                  About

                </Link>
              </Button>
              <Button sx={{ color: "white" }}>
                <Link
                  href={"/contact"}
                  style={{ textDecoration: "none", color: "inherit", fontWeight: "bold" , fontSize:"1.1rem" }}
                >

                  Contact Us

                </Link>
              </Button>
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
