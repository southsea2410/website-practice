import { Grid } from '@mui/material'
import logo from '../assets/tedxlogo.png'
import { Link } from 'react-router-dom'

export default function NavBar(){
    return (
        <Grid container spacing={1}>
            <Grid item xs={1}/>
            <Grid item xs={2}>
                <img src={logo}/>
            </Grid>
            <Grid item xs={7}>
                <Link to="#About">About</Link>
                <Link to="#Speakers">Speakers</Link>
                <Link to="#Schedule">Schedule</Link>
            </Grid>
        </Grid>
    )
}