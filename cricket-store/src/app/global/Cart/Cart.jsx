"use client"

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export const Cart = ({isCartOpen,handleCartClose}) => {

    // console.log(store)
    return (
        <Dialog open={isCartOpen} onClose={handleCartClose}>
            <DialogTitle textAlign={"center"}>Your Cart</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Let Google help apps determine location. This means sending
                    anonymous location data to Google, even when no apps are running.
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCartClose}>Disagree</Button>
                <Button onClick={handleCartClose} autoFocus>
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    );
}

