<div id="top"></div>

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div style= "text-align:center">
  <a href="https://github.com/Blake-design/React_weather_app">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 style= "text-align:center">React Weather App</h3>

  <p style= "align:center">
    A weather app built using React, Express, Node, Material UI, and third party APIs!
    <br />
    <a href="https://github.com/Blake-design/React_weather_app"><strong>Explore the code »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Blake-design/React_weather_app">View App</a>
    ·
    <a href="https://github.com/Blake-design/React_weather_app/issues">Report Bug</a>
    ·
    <a href="https://github.com/Blake-design/React_weather_app/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#APIs">APIs</a></li>
        <li><a href="#Theming">Theming</a></li>
        <li><a href="#Providers">Providers</a></li>
        <li><a href="#Local-Storage">Local Storage</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

We are all familiar with the ubiquitous weather app, the classic application used to showcase your ability to work with 3rd party APIs. Although, when only using front-end technologies you run the risk exposing your API keys. This app utitilizes server-side API calls to properly conceal your keys.

As with any practice project it was built to explore new technologies. It utilizes three separate 3rd party APIs to provide a breadth of experience with the particularities of each service. It also utilizes Material UI to style the components. Material UI provides an avenue to get experience with Javascript styling as well as working with Themes and Providers.

If you stumble across this repo, I hope it helps you in builing your own application or learning something new.

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

### Built With

- [Luxon.js](https://moment.github.io/luxon/#/)
- [Axios.js](https://axios-http.com/docs/intro)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [OpenWeather API](https://openweathermap.org/api)
- [Unsplash API](https://unsplash.com/developers)
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service/overview)

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

There's not much to explain as far as usage goes so I will use the sections below to describe code structure and things I learned along the way.

### APIs

OpenWeather API - This site provides Weather information and offers a ton of different APIs depending on the specific information you need. This project uses One Call API

Google Places API - This API was used for Geocoding services (the ability to turn a city query into a latitude longitude coordinate). Google Places was chosen instead on OpenWeathers native Geocoding service, because prefer the formatted location name response. - note google abreviates longitude as 'lng' while open weather uses 'lon' so it was converted to when 'setGeo' is called.

Unsplash API - This API provides access to free stock photos provided by Unsplash.com. The App uses this to supply a random photo relevent to the city search. This was chosen as opposed to google places photos due to the qualilty and quantity of photo options.

### Themeing

Material UI is a component library that allows you to customize the layout and components by tying them together using 'themes'. In this project the user has the option of choosing between a light theme or a dark theme.

```
import { createTheme } from "@mui/material/styles";

const baseTheme = createTheme({
  typography: {
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
    },
  },
});

const lightTheme = createTheme({
  ...baseTheme,

  palette: {
    mode: "light",

    paper: "#ffffff",
    overlay: "rgba(255, 255, 255, .85)",
    sky: "#9adafc",

    background: "#effafc",
    text: {
      link: "blue",
    },
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",

    background: "#001324",

    paper: "#424242",
    overlay: "rgba(66, 66, 66, 0.85)",
    sky: "#0a1b45",

    text: {
      link: "#d8c353",
    },
  },
});

export { darkTheme, lightTheme };
```

The code above defines a base theme that is spread across both light and dark, while the pallete for each is defined.

Since Material Ui uses JS to define styles the styles can later be accessed using the properties of the theme object.

```
  root: {
    justifyContent: "center",
    backgroundColor: theme.palette.background,
    color: theme.palette.text.primary,
    width: "100vw",
    maxWidth: "100vw",
    xOverflow: "none",
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    backgroundColor: theme.palette.paper,
    color: theme.palette.text.primary,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
```

note that not all properties were defined in the base theme as MUI has its one set of base theming that it relies on unless overridden.

### Providers

In order to pass the theme amonst all the components MUI uses ThemeProvider to wrap the application.

```
  <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
```

While this provides the theme, we need to set up another Context provider to manipulate the state of the theme

```
  <React.StrictMode>
    <DarkModeState>
      <App />
    </DarkModeState>
  </React.StrictMode>,
```

DarkModeState is defined within themehandler.js along with the reducers and context.

```
export const DarkModeState = (props) => {
  const initialState = {
    darkMode: "false",
  };
  const [state, dispatch] = useReducer(darkModeReducer, initialState);

  const setDarkMode = async (bool) => {
    dispatch({
      type: SET_THEME,
      payload: bool,
    });
  };

  return (
    <darkModeContext.Provider value={{ darkMode: state.darkMode, setDarkMode }}>
      {props.children}
    </darkModeContext.Provider>
  );
};
```

This componenet allows us to compartmentalize the code and again wrap the application but this time one step higher so the themeProvider can have access before its beign created.

### Local Storage

This application utilizes local storage to save cities and theme preference for later reference.

If it is the users first visit the theme prefence will be set to light and the

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/Blake-design/React_weather_app](https://github.com/Blake-design/React_weather_app)

<p style= "text-align:right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[issues-shield]: https://img.shields.io/github/issues/Blake-design/React_weather_app.svg?style=for-the-badge
[issues-url]: https://github.com/Blake-design/React_weather_app/issues
[license-shield]: https://img.shields.io/github/license/Blake-design/React_weather_app.svg?style=for-the-badge
[license-url]: https://github.com/Blake-design/React_weather_app/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/blake-mccarty-75754a36
[product-screenshot]: images/screenshot.png
