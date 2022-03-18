import React from 'react';
import man from './man.png';
import admin from './admin.png';
import { useNavigate } from "react-router";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div>
      <h1 className='pheader'>E PASSPORT ONLINE PORTAL</h1><br/><br/>
  <div className="row">
    <div className="col" >
    <Card sx={{ maxWidth: 345 }}><br/>
      <CardMedia component="img" height="350" image={man} alt="user"/>
      <CardActions><Button variant="outline-secondary" size="large" onClick={()=>navigate('/userlogin')}><h3>User</h3></Button></CardActions>
    </Card>
    </div>
    <div className="col">
    <Card sx={{ maxWidth: 345 }}><br/>
      <CardMedia component="img" height="350" image={admin} alt="admin"/>
      <CardActions><Button variant="outline-secondary" size="large" onClick={()=>navigate()}><h3>Admin</h3></Button></CardActions>
    </Card>
    </div>
  </div>
  </div>
  )
};

export default Navbar;