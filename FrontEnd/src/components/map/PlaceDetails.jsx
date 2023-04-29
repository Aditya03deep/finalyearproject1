import React from 'react'
import { Box, Typography, Button, Card, CardActions, CardMedia, CardContent, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'

import Rating from '@material-ui/lab/Rating';
import './PlaceDetails.css'
const PlaceDetails = ({place}) => {
  return (
    <Card elevation={6}>
            <CardMedia
                style={{ height: 350 }}
                image={place.result_object.photo ? place.result_object.photo.images.large.url : 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1930&q=80'}
                title={place.result_object.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.result_object.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Rating  value={Number(place.result_object.rating)} readOnly />
                    <Typography gutterBottom variant="subtile1" color='textSecondary'>out of {place.result_object.num_reviews}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtile1" color='textPrimary'>Price</Typography>
                    <Typography gutterBottom variant="subtile1" color='textSecondary'>{place.result_object.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtile1" color='textPrimary'>Ranking</Typography>
                    <Typography gutterBottom variant="subtile1">{place.result_object.ranking}</Typography>
                </Box>
               
                {place?.result_object.cuisine?.map(({name})=>(
                    <Chip key={name} size="small" label={name} className='chip'/>
                ))}
                {place?.result_object.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className='subtitle'>
                        <LocationOnIcon/> {place.result_object.address}
                    </Typography>
                )}
                   
                <CardActions>
                    <Button size="small" variant='contained' color='primary' onClick={()=>window.open('www.tripadvisor.in','_blank')}>
                        Trip Advisor
                    </Button>
                    
                </CardActions>
            </CardContent>

            

        </Card>
    )
   
  
}

export default PlaceDetails