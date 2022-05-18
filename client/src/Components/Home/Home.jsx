import React, { useState, useEffect } from "react";
import { Header, Footer } from "../index";
import { Search } from "../SideBar";
import { Main } from "../Main";
import { fetchOpenWeather, fetchLocalData, fetchPhoto } from "../../api";
import { LocalStorageGet, LocalStorageSet } from "../../Hooks";
import {
  Container,
  Paper,
  Grid,
  CircularProgress,
  Backdrop,
} from "@material-ui/core";
import { useStyles } from "./homeStyles";

const Home = () => {
  const classes = useStyles();
  const [weather, setWeather] = useState(null);
  const [pollution, setPollution] = useState(null);
  const [location, setLocation] = useState(LocalStorageGet("last-location"));
  const [photoData, setPhotoData] = useState({});
  const [geo, setGeo] = useState(LocalStorageGet("last-geo"));
  const [cities, setCities] = useState(LocalStorageGet("cities"));

  useEffect(() => {
    fetchOpenWeather(geo, "weather").then(setWeather);
    fetchOpenWeather(geo, "pollution").then(setPollution);
  }, [geo]);

  useEffect(() => {
    fetchPhoto(location).then(setPhotoData);
    LocalStorageSet("last-location", location);
  }, [location]);

  useEffect(() => {
    LocalStorageSet("cities", cities);
  }, [cities]);

  const search = async (e, query, setQuery) => {
    e.preventDefault();
    const localData = await fetchLocalData(query);
    let {
      formatted_address,
      geometry: {
        location: { lat, lng },
      },
    } = localData;
    setLocation(formatted_address);
    setCities((prev) => [
      ...prev,
      {
        name: formatted_address,
        lat: lat,
        lon: lng,
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
    LocalStorageSet("cities", cities);
  };

  const reloadCity = async (targetCity) => {
    setGeo({ lat: targetCity.lat, lon: targetCity.lon });
    setLocation(targetCity.name);
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} component="header">
          <Header title={"Weather App"} />
        </Grid>
        <Grid item xs={12} md={3} component="aside">
          <Paper className={classes.sidebar}>
            <Search
              handleSubmit={search}
              removeCity={removeCity}
              reloadCity={reloadCity}
              cities={cities}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={9} component="main">
          <Paper className={classes.paper}>
            {weather ? (
              <Main
                weather={weather}
                location={location}
                photoData={photoData}
                pollution={pollution}
              />
            ) : (
              <Backdrop open={true} className={classes.backdrop}>
                <CircularProgress color="inherit" />
              </Backdrop>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
