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
  const shortTitle = (ttl) =>{return ttl.slice(0,25)+"..."}
  const shortText = (txt) => {return txt.split(" ").slice(0,20).join(' ') +"..."}

  return (
    <>
    <div id='mainpage-blogs'>
    { articles &&
      articles.map((a,b) => 
      

      <Card key={b} sx={{ maxWidth: 345, marginBottom: 10, backgroundColor: 'none', borderRadius: 4}}>
      <a id='cards' href='a'>
      <CardMedia
      key={b}  
      component="img"
        alt="green iguana"
        height="110"
        image={AbacusQuill}
      />
      <CardContent sx={{backgroundColor:'#e7e6e9'}} >
      <Typography component="div" className='text' color={'#515151'}>
          <div style={{display:'flex', justifyContent:"space-between"}}>
            <span>{shortDate(a.createdAt)}</span>
            <span>Life in the Uk</span>
          </div>
        </Typography>
        <Typography sx={{margin:"3%"}} className='title' gutterBottom variant="h6" component="div" color={'#515151'}>
          {shortTitle(a.title)}
        </Typography>
        <Typography variant="body3"  className='text' color="#515151">
        <p>{shortText(a.text)}</p>
        </Typography>
      </CardContent>
      </a>
      <CardActions sx={{backgroundColor:'#e7e6e9;'}} >
      <Button className='text'  sx={{textDecoration: 'none', color: '#515151'}} size="small">Read More</Button>
      <Button className='text'  sx={{textDecoration: 'none', color: '#515151'}} size="small">Share</Button>
      </CardActions>
    </Card>
      )
    }
    </div>
    </>
  );
}