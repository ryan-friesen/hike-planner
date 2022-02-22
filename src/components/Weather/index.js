import { useEffect, useState } from 'react';
import { getWeatherByCity } from '../../services/httpService';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/react';
import { colors } from '../../theme';

const Weather = (props) => {
  // Render nothing if props.address isn't passed in.
  if (!props.address) {
    return null;
  }

  const {
    address: { city, country, state },
  } = props;

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // CSS-in-JS
  const loaderCss = css`
    display: block;
  `;

  const loadingColors = [
    Object.values(colors.locations.forestFalls.icicleStream.icicle),
    Object.values(colors.locations.genevaPresbyterianChurchStorm.sky),
    Object.values(colors.locations.heislerPark.sunset),
  ];

  const randomLoadingColor =
    loadingColors[Math.floor(Math.random() * (loadingColors.length + 1))];

  /* 
  An empty array in the second argument will specify useEffect to run only when
  the component is first executed
  */
  useEffect(() => {
    setTimeout(() => {
      getWeatherByCity(city, `${country}-${state}`)
        .then((res) => {
          setWeather(res.data);
        })
        .catch((error) => {
          console.log(error);
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, Math.floor(Math.random() * (4000 - 2000) + 2000));
  }, []);

  if (error) {
    return null;
  }

  return (
    <div>
      <h3>Weather</h3>
      <CircleLoader
        loading={loading}
        css={loaderCss}
        color={randomLoadingColor}
      />
      {weather && <p>Temp: {weather.main.temp}</p>}
    </div>
  );
};

export default Weather;
