import { Box, Button, makeStyles, TextField } from '@material-ui/core'
import Cookies from 'js-cookie'
import React, { useState } from 'react'
import userAPI from '../apis/userAPI'
import User from '../models/user'
import userStore from '../stores/userStore'

const useStyles = makeStyles({
    div:{
        height:'10px'
    },
    textField:{
    },
    root:{
        fontFamily:'Roboto'

    }
})

export const Login = () => {
    const [id, setId] = useState(0)
    const initialUser: User = {
        password: "",
        email: "",
        firstName: "",
        lastName: "",
        age: 0,
        userType:2
    }
    const [loginDetails, setLoginDetails] = useState({email:'',password:''})
    const classes = useStyles()
    const handleInputChange = (event: any) => {
        const { name, value } = event.target
        setLoginDetails({...loginDetails, [name]:value})
    }

    const loginUser =async ()=>{
         await userAPI.login(loginDetails)
         const user = Cookies.get("user")

         console.log('user: ',user && JSON.parse(user))
    }
    return (<>
        <Box component="form" className={classes.root} style={{display:'flex', flexDirection:'column',width:'50%', justifyItems:'center'}}>
            <TextField className={classes.textField}  name="email" label="email" variant='outlined' onChange={handleInputChange}/>
            <div className={classes.div}></div>
            <TextField className={classes.textField} name="password" label="password" variant='outlined' onChange={handleInputChange} />
            <div className={classes.div}></div>
            <Button   style={{backgroundColor:'lightgray'}} onClick={loginUser}>Login</Button>
        </Box>
    </>
    )
}