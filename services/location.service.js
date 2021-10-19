const getLocation = () => {
    return fetch("http://192.168.0.111:3000/locations")
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };
  
  export default getLocation;