import React,{useState} from 'react';
import { Grid,Paper, Avatar, TextField} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import UserIcon from '@mui/icons-material/Person';
import PasswordIcon from '@mui/icons-material/Password';
import ListItemIcon from '@mui/material/ListItemIcon';

import './login.scss';

const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:310, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}

    const [showPassword] = useState(false);

    const[currentUserData] =useState([])


    return(
        <Grid >
            <form onSubmit="" className="" >
                <Paper elevation={10} style={paperStyle} className="card">
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Iniciar Sesion</h2>
                    </Grid>
                    <div className="text login">
                        <div>
                            <ListItemIcon><UserIcon className="icons"/> </ListItemIcon>
                            <TextField variant="outlined" id="user" name="user" label="Username" type="email"
                                value={currentUserData?.email} />
                        </div>
                        <br></br>
                        <div >
                            <ListItemIcon><PasswordIcon className="icons"/> </ListItemIcon>
                            <FormControl className="" variant="outlined" >
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput fullWidth label="Password"
                                    id="outlined-adornment-password-login"
                                    type={showPassword? 'text' : 'password'}
                                    name="password"
                                    autoComplete="off"
                                />
                            </FormControl>
                        </div >
                    </div>
                    <br/><br/><br/>
                    <button className="boton" type='submit' variant="contained" >Sign in</button>
                </Paper>
            </form>
        </Grid>
    )
}

export default Login;