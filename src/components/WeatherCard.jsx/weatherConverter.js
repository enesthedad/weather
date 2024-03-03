const weatherConverter = (kelvin) => {
  return (Number(kelvin) - 273.5).toFixed(1);
};

export default weatherConverter;
