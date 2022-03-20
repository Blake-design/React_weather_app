import axios from "axios";

const fetchLocation = async (location, setGeo) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_GEOCODE}${location},&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await res.data;
    console.log(data);
    setGeo({
      lat: data[0].lat,
      lon: data[0].lon,
    });
  } catch (err) {
    console.log(err.message);
  }
};

const fetchWeather = async (geo, setWeather, setLoading) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_ONE_CALL}?lat=${geo.lat}&lon=${geo.lon}&appid=${process.env.REACT_APP_API_KEY}&units=imperial`
    );
    const data = await res.data;

    setWeather(data);
    setLoading(false);
  } catch (err) {
    console.log(err.message);
  }
};

export { fetchLocation, fetchWeather };
