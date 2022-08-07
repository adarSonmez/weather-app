import { WeatherData } from './WeatherContainer'

function DetailsTable({ data }: { data: WeatherData }) {
  const {
    humidity,
    feels,
    visibility,
    pressure,
    longitude,
    latitude,
    windSpeed,
  } = data

  return (
    <table>
      <tbody>
        <tr>
          <th>Humidity:</th>
          <td id="humidity" data-testid="humidity">
            {humidity}
          </td>
        </tr>
        <tr>
          <th>Feels like:</th>
          <td id="feels" data-testid="feels">
            {feels}
          </td>
        </tr>
        <tr>
          <th>Visibility:</th>
          <td id="visibility" data-testid="visibility">
            {visibility}
          </td>
        </tr>
        <tr>
          <th>Pressure:</th>
          <td id="pressure" data-testid="pressure">
            {pressure}
          </td>
        </tr>
        <tr>
          <th>Longitude:</th>
          <td id="longitude" data-testid="longitude">
            {longitude}
          </td>
        </tr>
        <tr>
          <th>Latitude:</th>
          <td id="latitude" data-testid="latitude">
            {latitude}
          </td>
        </tr>
        <tr>
          <th>Wind speed:</th>
          <td id="windSpeed" data-testid="windSpeed">
            {windSpeed}
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default DetailsTable
