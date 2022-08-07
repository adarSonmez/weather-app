import { WeatherData } from './WeatherContainer'

function DegreeSection({
  data: { temperature, description, icon },
}: {
  data: WeatherData
}) {
  return (
    <>
      <section className="degree">
        <span
          className="temperature"
          id="temperature"
          data-testid="temperature"
        >
          {temperature}
        </span>
        °C
      </section>
      <section className="icon" id="icon">
        <img id="iconImg" src={icon} alt={icon} />
      </section>
      <section className="description" id="description">
        {description}
      </section>
    </>
  )
}

export default DegreeSection
