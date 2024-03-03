export const getPosition = async () => {
  await navigator.geolocation.getCurrentPosition(
    (position) => {
      return {
        value: `${position.coords.latitude} ${position.coords.longitude}`,
      };
    },
    (err) => console.log(err)
  );
};
