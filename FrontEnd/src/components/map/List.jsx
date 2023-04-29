
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Card } from '@material-ui/core'
import PlaceDetails from "./PlaceDetails.jsx"
import "./List.css"



import React, { useState } from 'react';
import axios from 'axios';

function List() {
  const [searchQuery, setSearchQuery] = useState('');
  const [places, setPlaces] = useState([]);
  const [filter, setFilter] = useState('');

  const searchPlaces = async (e) => {
    e.preventDefault();
    const options = {
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/locations/search',
      params: { query: searchQuery, offset: '0', units: 'km' },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': 'be3db62385mshead25ec6cf9838fp1f4b6fjsn9cd407e7e91b',
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setPlaces(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const filterPlaces = (places) => {
    if (filter === '') {
      return places;
    } else {
      return places.filter((place) => place.result_object.category.name.includes(filter));
    }
  };
  return (
    <div className="containers">
      <Typography variant="h4" className='heading'>Restaurants,Hotels & Attractions around you</Typography>
      <div className='subCon'>
        <div className='subform'>
          <form onSubmit={searchPlaces} className='control'>
            <div><input
              type="text"
              placeholder="Search Places"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className='finput'
            /></div>
           <div><button type="submit" className='fbut'>Search</button></div>
          </form>
        </div>
        <div className='dropdown'>
          <FormControl className='formControl'>
            <InputLabel style={{ fontSize: '1.2rem' }}>Type</InputLabel>
            <Select value={filter} onChange={(e) => setFilter(e.target.value)} className='select'>
              <MenuItem value="" style={{ fontSize: '1.3rem' }}>All</MenuItem>
              <MenuItem value="Restaurant" style={{ fontSize: '1.3rem' }}>Restaurants</MenuItem>
              <MenuItem value="Hotel" style={{ fontSize: '1.3rem' }}>Hotels</MenuItem>
              <MenuItem value="Attraction" style={{ fontSize: '1.3rem' }}>Attraction</MenuItem>
            </Select>
          </FormControl>

        </div>
      </div>


      <div>
        <Grid container spacing={3} className='list'>
          {filterPlaces(places).map((place, index) => (
            <Grid item key={index} xs={12}>
              <PlaceDetails place={place} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default List;