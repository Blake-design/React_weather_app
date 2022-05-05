/// These are our internal APIs to transfer data so we can make calls to 3rd party API's from the server.

import axios from "axios";

/// This will transfer data to our server so that we can make a call to Open Weather ///

const fetchWeather = async (geo, setWeather, setLoading) => {
  setLoading(true);

  try {
    const res = await axios.get(`/api/weather?lat=${geo.lat}&lon=${geo.lon}`);
    const data = await res.data;
    setWeather(data);
    setLoading(false);
  } catch (err) {
    console.log(err.message);
  }
};

/// This will transfer data to our server so that we can make a call to google places
//  * I used this API instead of open weather for geo service because I like the formatted addresses better * //

const fetchLocalData = async (query) => {
  try {
    const res = await axios.get(`/api/locationData?city=${query}`);
    const data = await res.data;

    return data.candidates[0];
  } catch (err) {
    console.log(err.message);
  }
};

/// This will transfer data to our server so that we can make a call to Unsplash for city photos ///

const fetchPhoto = async (query, setPhotoData) => {
  try {
    const res = await axios.get(`/api/photos?photo=${query}`);
    const data = await res.data;

    const { description, id, urls, user } = data;
    setPhotoData({
      url: urls,
      description: description,
      id: id,
      credit: user,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export { fetchWeather, fetchLocalData, fetchPhoto };
