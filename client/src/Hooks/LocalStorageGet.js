const LocalStorageGet = (key) => {
  const parseStorage = (key) => JSON.parse(localStorage.getItem(key));

  switch (key) {
    case "last-location":
      return parseStorage(key) || "San Antonio, TX, USA";
    case "last-geo":
      return (
        parseStorage(key) || {
          lat: 29.4246002,
          lon: -98.4951405,
        }
      );
    case "cities":
      return (
        parseStorage(key) || [
          {
            name: "San Antonio, TX, USA",
            lat: 29.4246002,
            lon: -98.4951405,
          },
        ]
      );

    default:
      console.log("You must enter a local storage Key");
  }
};

export default LocalStorageGet;
