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
          <td id="humidity">{humidity}</td>
        </tr>
        <tr>
          <th>Feels like:</th>
          <td id="feels">{feels}</td>
        </tr>
        <tr>
          <th>Visibility:</th>
          <td id="visibility">{visibility}</td>
        </tr>
        <tr>
          <th>Pressure:</th>
          <td id="pressure">{pressure}</td>
        </tr>
        <tr>
          <th>Longitude:</th>
          <td id="longitude">{longitude}</td>
        </tr>
        <tr>
          <th>Latitude:</th>
          <td id="latitude">{latitude}</td>
        </tr>
        <tr>
          <th>Wind speed:</th>
          <td id="windSpeed">{windSpeed}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default DetailsTable
