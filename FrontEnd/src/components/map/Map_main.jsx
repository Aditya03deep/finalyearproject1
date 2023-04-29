import React, { useState, useEffect } from 'react'
import { CssBaseline, Grid } from '@material-ui/core'
import Header from './Header'
import List from './List'
import Map from './Map'
import Navbar from '../navbar/Navbar'
import "./Map_main.css"
import { getPlacesData } from "../../api/index.js";

const Map_main = () => {
  const [selectPosition, setSelectPosition] = useState(null);
  const [places, setPlaces] = useState([]);


  useEffect(() => {
    getPlacesData()
      .then((data) => {
        console.log(data)
        setPlaces(data)
      })
  }, [])
  return (
    <div>
      <CssBaseline />
      <Navbar />

      <Grid container spacing={3} style={{ width: '100%' }}>

        <Grid item xs={12} md={6}>
          <List />

        </Grid>
        <Grid item xs={12} md={6}>
          <Header selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
          <Map selectPosition={selectPosition} />
        </Grid>
      </Grid>
    </div>

  )
}

export default Map_main