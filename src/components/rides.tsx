import { Box, Button, FilledInput, FormControl, makeStyles, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import rideAPI from '../apis/rideAPI'
import userAPI from '../apis/userAPI'
import User from '../models/user'


const Rides = () => {

    
    useEffect(()=>{
const rides = rideAPI.getRides()
console.log(rides)
    },[])

    return (
        <Box component="form"  style={{display:'flex', flexDirection:'column',width:'50%', justifyItems:'center'}}>
        </Box>
    )
}

export default Rides