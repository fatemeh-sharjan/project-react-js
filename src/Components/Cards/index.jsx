import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function Cards({img,brandName,name,color,id}) {
  return (
   <Link to={`/Product-details/${id}/${name.split(" ").join('-')}`}>
    <Card sx={{ maxWidth:300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="400"
        image={`https://${img}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {brandName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
           {name}
        </Typography>
      </CardContent>
      <CardActions sx={{display:"flex",justifyContent:"space-between"}}>
        <Button size="medium" sx={{color:"black"}}>color : {color}</Button>
        <Link to={`/Product-details/${id}/${name.split(" ").join('-')}`}>
        <Button size="medium" >Learn More</Button>
        </Link>
      </CardActions>
    </Card>
   </Link>
  );
}
