import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  Grid,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core/";
import { useStyles } from "./cityListStyle";

const CityList = ({ cities, removeCity, reloadCity }) => {
  const classes = useStyles();
  return (
    <Grid container rows={{ xs: 12, sm: 12, md: 12 }} direction="row">
      {cities.length ? (
        cities.map((city, i) => {
          return (
            <Grid item xs={6} sm={4} md={12} key={i}>
              <List
                className={classes.root}
                component="nav"
                aria-label="searched cities"
              >
                <ListItem>
                  <ListItemText
                    component="li"
                    onClick={() => reloadCity(city)}
                    primary={city.name}
                  ></ListItemText>

                  <ListItemIcon>
                    <IconButton
                      aria-label="delete"
                      onClick={() => removeCity(city.name)}
                      color={"secondary"}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemIcon>
                </ListItem>
              </List>
            </Grid>
          );
        })
      ) : (
        <div>
          <p>This area holds previous searches for easier access.</p>
        </div>
      )}
    </Grid>
  );
};

export default CityList;
