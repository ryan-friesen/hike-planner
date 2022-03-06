export const metersToMPH = (meterSpeed) => {
  return (meterSpeed * 2.23694).toFixed(1);
};

export const kelvinToFahrenheit = (kelvin) => {
  return (1.8 * (kelvin - 273.15) + 32).toFixed(2);
};
