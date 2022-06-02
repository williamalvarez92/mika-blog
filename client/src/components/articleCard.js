import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 10, backgroundColor: 'rgba(0, 15, 75, 0.4)', borderRadius: 4}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"

      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" color={'white'}>
          Lizard
        </Typography>
        <Typography variant="body2" color="white">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions >
      <Button sx={{textDecoration: 'none', color: 'white'}} size="small">Read More</Button>
      <Button sx={{textDecoration: 'none', color: 'white'}} size="small">Share</Button>
      </CardActions>
    </Card>
  );
}

