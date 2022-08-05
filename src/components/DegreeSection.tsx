import { WeatherData } from "./WeatherContainer"

function DegreeSection({
  data: { temperature, description, icon },
}: {
  data: WeatherData
}) {
  return (
    <>
      <section className="degree">
        <span className="temperature" id="temperature">
          {temperature}
        </span>
        °C
      </section>
      <section className="icon" id="icon">
        <img alt="icon" id="iconImg" src={icon} />
      </section>
      <section className="description" id="description">
        {description}
      </section>
    </>
  )
}

export default DegreeSection
