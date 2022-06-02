import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Button, Container, Paper} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1)
        },
    },
}));

export default function Review() {
    const classes = useStyles();
    const paperStyle={padding: '50px 20px', width:'600', margin: '20px auto'}
    const [name, setname ]= useState('')
    const [rtext, setrtext] = useState('')
    const [review, setreview] = useState([])

    const Savedata=(e)=>{
        e.preventDefault()
        const review={name, rtext}
        console.log(review)
        fetch("http://localhost:8080/review/add",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(review)
            }).then(()=> {
                console.log("review added")
                setname("");
                setrtext("");
        })
    }
    useEffect(() =>{
        fetch("http://localhost:8080/review/getall").then(res => res.json()
        ).then((result)=> {
            console.log(result)
            setreview(result)
        }
        )

    }, [])



    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1>Add Review</h1>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="gname" label="Game Name" variant="outlined" fullWidth value={name}
                       onChange={(e)=>setname(e.target.value)}/>
            <TextField id="rtext" label="Review" variant="outlined" fullWidth value={rtext}
                       onChange={(e)=>setrtext(e.target.value)}/>
            <Button variant="text" onClick={Savedata}>Save review</Button>
        </form>
            </Paper>

            <h1>Reviews</h1>
            <Paper elevation={3} style={paperStyle}>
                {review.map(review => (
                    <Paper elevation={6} style={{margin: "10%", padding: "10%", textAlign: "left"}} key={review.id}>
                        Name: {review.name}<br/>
                        Review: {review.rtext}
                    </Paper>
                ))
                }
            </Paper>
        </Container>
    );
}
