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
              <Button sx={{ color: "white" }}>
                <Link
                  href={"/"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={"bold"}
                    component="a"
                    sx={{
                      mr: 2,
                    }}
                  >
                    CricHeroes
                  </Typography>
                </Link>
              </Button>
              <Button sx={{ color: "white" }}>
                <Link
                  href={"/products"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={"bold"}
                    component="a"
                    sx={{
                      mr: 2,
                    }}
                  >
                    Products
                  </Typography>
                </Link>
              </Button>
              <Button sx={{ color: "white" }}>
                <Link
                  href={"/about"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={"bold"}
                    component="a"
                    sx={{
                      mr: 2,
                    }}
                  >
                    About
                  </Typography>
                </Link>
              </Button>
              <Button sx={{ color: "white" }}>
                <Link
                  href={"/contact"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Typography
                    variant="h6"
                    fontWeight={"bold"}
                    component="a"
                    sx={{
                      mr: 2,
                    }}
                  >
                    Contact Us
                  </Typography>
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
