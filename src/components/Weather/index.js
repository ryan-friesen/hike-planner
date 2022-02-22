import { useEffect, useState } from 'react';
import { getWeatherByCity } from '../../services/httpService';
import { CircleLoader } from 'react-spinners';
import { css } from '@emotion/react';

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
    }, Math.floor(Math.random() * (3500 - 1500) + 1500));
  }, []);

  if (error) {
    return null;
  }

  return (
    <div>
      <h3>Weather</h3>
      <CircleLoader loading={loading} css={loaderCss} color={'#4287f5'} />
      {weather && <p>Temp: {weather.main.temp}</p>}
    </div>
  );
};

export default Weather;
