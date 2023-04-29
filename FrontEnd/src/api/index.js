
import axios from 'axios';



export const getPlacesData = async (type,sw, ne) => {
    try {
      const { data: { data } } = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
        params: {
          bl_latitude: '11.847676',
          tr_latitude: '12.838442',
          bl_longitude: '109.095887',
          tr_longitude: '109.149359',
        },
        headers: {
          'x-rapidapi-key':  'd14ca28b8cmshd6adae5b6324749p19a884jsn4a943e87fbdf',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        },
      });
  
      return data;
    } catch (error) {
      console.log(error);
    }
  };

//  export const getWeatherData = async(lat,lng)=>{
//    try {
//       const {data} = await axios.get('https://community-open-weather-map.p.rapidapi.com/find' , {
//         params: { lon: lng,lat: lat},
//         headers: {
//           'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
//           'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_WEATHER_API_KEY
//         }
//       })
//       return data;
//    } catch (error) {
//       console.log(error)
//    }
//  } 