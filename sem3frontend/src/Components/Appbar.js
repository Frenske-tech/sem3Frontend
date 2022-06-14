import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Button} from "@mui/material";

export default function DenseAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        <Button variant="contained" href="/Review.js">Reviews</Button>
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div">
                        <Button variant="contained" href="/LoginButton.js">Login</Button>
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div">
                        <Button variant="contained" href="/LogoutButton.js">Logout</Button>
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div">
                        <Button variant="contained" href="/Profile">Profile</Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
