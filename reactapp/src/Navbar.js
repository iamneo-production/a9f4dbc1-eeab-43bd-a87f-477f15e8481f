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
      <nav>
      <h1 className='text-a'>E PASSPORT ONLINE PORTAL</h1>
      </nav><br/><br/><br/><br/><br/><br/><br/>
  <div className="row">
    <div className="col" >
    <br/><br/><br/>
    <Card sx={{ maxWidth: 345 }}><br/>
      <CardMedia component="img" height="250" image={man} alt="user"/>
      <CardActions><Button variant="outline-secondary" size="large" onClick={()=>navigate('/userlogin')}><h3>User</h3></Button></CardActions>
    </Card>
    </div>
    <div className="col">
    <br/><br/><br/>
    <Card sx={{ maxWidth: 345 }}><br/>
      <CardMedia component="img" height="250" image={admin} alt="admin"/>
      <CardActions><Button variant="outline-secondary" size="large" onClick={()=>navigate('/adminlogin')}><h3>Admin</h3></Button></CardActions>
    </Card>
    </div>
  </div>
  </div>
  )
};

export default Navbar;