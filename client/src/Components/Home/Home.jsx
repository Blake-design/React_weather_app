import React, { useState, useEffect } from "react";
import { Header, Footer } from "../index";
import { SideBar } from "../SideBar";
import { Main } from "../Main";
import { fetchWeather, fetchLocalData, fetchPhoto } from "../../api";

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
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(
    JSON.parse(localStorage.getItem("last-location")) || "San Antonio, TX, USA"
  );
  const [photoData, setPhotoData] = useState({});
  const [geo, setGeo] = useState(
    JSON.parse(localStorage.getItem("last-geo")) || {
      lat: 29.4246002,
      lon: -98.4951405,
    }
  );
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities")) || [
      {
        name: "San Antonio, TX, USA",
        lat: 29.4246002,
        lon: -98.4951405,
      },
    ]
  );

  useEffect(() => {
    console.log("useEffect  2");

    fetchWeather(geo, setWeather, setLoading);
    localStorage.setItem("last-geo", JSON.stringify(geo));
  }, [geo]);

  useEffect(() => {
    console.log("useEffect  3");
    fetchPhoto(location, setPhotoData);
    localStorage.setItem("last-location", JSON.stringify(location));
  }, [location]);

  useEffect(() => {
    console.log("useEffect  4");
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  const search = async (e, query, setQuery) => {
    console.log("search function ");
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
    console.log("remove function ");
    const editedCities = cities.filter((object) => {
      return object.name !== targetCity;
    });
    setCities(editedCities);
    localStorage.setItem("cities", JSON.stringify(cities));
  };

  const reloadCity = async (targetCity) => {
    console.log("reload function ");
    setGeo({ lat: targetCity.lat, lon: targetCity.lon });
    setLocation(targetCity.name);
  };
  console.log("render");
  if (loading) {
    return (
      <Backdrop open={true} className={classes.backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  } else
    return (
      <Container className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} component="header">
            <Header title={"Weather App"} />
          </Grid>
          <Grid item xs={12} md={3} component="aside">
            <Paper className={classes.paper}>
              <SideBar
                handleSubmit={search}
                removeCity={removeCity}
                reloadCity={reloadCity}
                cities={cities}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={9} component="main">
            <Paper className={classes.paper}>
              <Main
                weather={weather}
                location={location}
                photoData={photoData}
              />
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
