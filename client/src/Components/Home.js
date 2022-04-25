import React, { useState, useEffect } from "react";

import { Header } from "./";
import { SideBar } from "./SideBar";
import { Main } from "./Main";
import { fetchWeather, fetchLocalData, fetchPhoto } from "../api";
import {
  makeStyles,
  Paper,
  Grid,
  CircularProgress,
  Backdrop,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    backgroundColor: "#effafc",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Home() {
  const classes = useStyles();

  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState("San Antonio, TX, USA");
  const [photoData, setPhotoData] = useState({});
  const [geo, setGeo] = useState({
    lat: 29.4246002,
    lon: -98.4951405,
  });
  const [cities, setCities] = useState([
    {
      name: "San Antonio, TX, USA",
      lat: geo.lat,
      lon: geo.lon,
    },
  ]);

  useEffect(() => {
    fetchWeather(geo, setWeather, setLoading);
    const storage = localStorage.getItem("cities");
    if (storage) {
      setCities(JSON.parse(storage));
    }
    fetchPhoto(location, setPhotoData);
  }, [geo]);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  console.log(photoData);
  const search = async (e, query, setQuery) => {
    e.preventDefault();
    const localData = await fetchLocalData(query, setGeo);
    let {
      formatted_address,
      geometry: {
        location: { lat, lng },
      },
      photos,
    } = localData;
    setLocation(formatted_address);
    setCities((prev) => [
      ...prev,
      {
        name: formatted_address,
        lat: lat,
        lon: lng,
        photos: photos[0].photo_reference,
      },
    ]);
    setQuery("");

    setGeo({
      lat: lat,
      lon: lng,
    });
  };

  const removeCity = (targetCity) => {
    const editedCities = cities.filter((object) => {
      return object.name !== targetCity;
    });
    setCities(editedCities);
    localStorage.setItem("cities", JSON.stringify(cities));
  };

  const reloadCity = async (targetCity) => {
    setGeo({ lat: targetCity.lat, lon: targetCity.lon });
    setLocation(targetCity.name);
  };

  if (loading) {
    return (
      <Backdrop open={true} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  } else
    return (
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12}>
          <Header title={"Weather-React"} />
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.paper}>
            <SideBar
              handleSubmit={search}
              removeCity={removeCity}
              reloadCity={reloadCity}
              cities={cities}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={9}>
          <Paper className={classes.paper}>
            <Main weather={weather} location={location} photoData={photoData} />
          </Paper>
        </Grid>
      </Grid>
    );
}

export default Home;
