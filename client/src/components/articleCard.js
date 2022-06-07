import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AbacusQuill from '../images/img-1.webp'

export default function ImgMediaCard({articles}) {
  
  const shortDate = (date) =>{return date.slice(0,10)}
  const shortText = (txt) => {return txt.split(" ").slice(0,20).join(' ') +"..."}
  return (
    <>
    <div id='mainpage-blogs'>
    { articles &&
      articles.map((a,b) => 
      

      <Card key={b} sx={{ maxWidth: 345, minHeight: 345, marginBottom: 10, backgroundColor: 'none', borderRadius: 4}}>
      <CardMedia
      key={b}  
      component="img"
        alt="green iguana"
        height="140"
        image={AbacusQuill}
      />
      <CardContent sx={{backgroundColor:'rgba(81, 81, 81, 0.25)'}} >
      <Typography component="div" color={'#515151'}>
          <div style={{display:'flex', justifyContent:"space-between"}}>
            <span>{shortDate(a.createdAt)}</span>
            <span>Life in the Uk</span>
          </div>
        </Typography>
        <Typography sx={{margin:"3%"}} gutterBottom variant="h5" component="div" color={'#515151'}>
          {a.title}
        </Typography>
        <Typography variant="body2" color="#515151">
        {shortText(a.text)}
        </Typography>
      </CardContent>
      <CardActions sx={{backgroundColor:'rgba(81, 81, 81, 0.25);'}} >
      <Button sx={{textDecoration: 'none', color: '#515151'}} size="small">Read More</Button>
      <Button sx={{textDecoration: 'none', color: '#515151'}} size="small">Share</Button>
      </CardActions>
    </Card>
      )
    }
    </div>
    </>
  );
}