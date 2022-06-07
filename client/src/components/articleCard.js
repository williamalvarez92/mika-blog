import { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function ImgMediaCard({articles}) {


const shortDate = (date) => {return date.split('').slice(0,10)}
const shortText = (txt) => {return  txt.split(' ').slice(0, 20).join(' ') + '...' }

const [ carouselItems, setItems ] = useState([])


const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

let items = []

useEffect(() => {
articles.map((a,b) => 
	{ items.push(
	<Card key={b} sx={{ maxWidth: 345, marginBottom: 10, backgroundColor: 'rgb(69, 12, 230, 0.3)', borderRadius: 4}}>
        <CardContent >
        <Typography gutterBottom variant="h6" component="div" color={'white'}>
          {a.title}
	</Typography> 
	<Typography variant="body2" color='white'>
	{shortDate(a.createdAt)}
	</Typography>
        <Typography sx={{mt:'2%'}} variant="body2" color="white">
		  {shortText(a.text)}
	</Typography>
      </CardContent>
      <CardActions >
      <Button sx={{textDecoration: 'none', color: 'white'}} size="small">Read More</Button>
      <Button sx={{textDecoration: 'none', color: 'white'}} size="small">Share</Button>
      </CardActions>
    	</Card> )
	})

}, [articles])



  return (
	  <>	
	<AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
    />   
	  </>
  );
}

