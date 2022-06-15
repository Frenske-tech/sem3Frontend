import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Button} from "@mui/material";
import {useAuth0} from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import {useNavigate} from "react-router";
import Profile from "./Profile";



export default function DenseAppBar() {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const navigate = useNavigate();
    let history = useNavigate();

    let test;
    if(isAuthenticated){
        test = <LogoutButton></LogoutButton>

    }else{
        test = <LoginButton></LoginButton>
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        <Button variant="contained" onClick={() => navigate("Review.js")}>Reviews</Button>
                    </Typography>
                    <Typography variant="h6" color="inherit" component="div">
                        {test}
                    </Typography>
                    {/*<Typography variant="h6" color="inherit" component="div">*/}
                    {/*    <Button variant="contained" onClick={() => navigate("/Profile.js")}>Profile</Button>*/}
                    {/*</Typography>*/}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
